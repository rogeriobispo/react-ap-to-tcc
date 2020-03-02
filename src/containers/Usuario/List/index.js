import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon } from 'react-bootstrap';

import './UsuarioList.css';
import { format } from 'date-fns';
import Tabela from '../../../components/Tabelas';
import ClinicClient from '../../../services/Clinic/ClinicClient';
import DetailModal from '../../../components/Modal/Detail';

function UsuarioList() {
    const [users, setUser] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await ClinicClient.get('/users');
            setUser(response.data);
        })();
    }, []);

    function isAdmin(roles) {
        return roles.includes('Admin');
    }

    function userDetail(user) {
        return (
            <>
                <div>
                    <h4>
                        Nome:
                        {user.name}
                    </h4>
                    <hr />
                    <h4>
                        Email:
                        {user.email}
                    </h4>
                    <hr />
                    <h4>
                        Admin?:
                        {isAdmin(user.roles) ? <Glyphicon glyph="ok" /> : ''}
                    </h4>
                    <hr />
                    <h4>
                        {alert('Doctor', user.doctor)}
                        {user.doctor ? (
                            <>
                                <Glyphicon glyph="ok" />
                                crm: user.crm
                            </>
                        ) : (
                            <>
                                Doctor?:
                                <Glyphicon glyph="glyphicon glyphicon-remove" />
                            </>
                        )}
                    </h4>
                </div>
            </>
        );
    }

    function tableHead() {
        return (
            <>
                <th>Nome</th>
                <th>Email</th>
                <th>Criado Em</th>
                <th>Detalhes</th>
                <th>Senha</th>
            </>
        );
    }

    function tableBody(user) {
        return (
            <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{format(new Date(user.created_at), 'dd/MM/yyyy')}</td>
                <td>
                    <DetailModal
                        userDetail={userDetail(user)}
                        username={user.name}
                        propovalMessage={{
                            msg: 'Detalhe do usuario',
                            title: '',
                        }}
                    />
                </td>
                <td>
                    <Link to={{ pathname: `/usuario/password`, user }}>
                        <Glyphicon
                            glyph="glyphicon glyphicon-asterisk"
                            title="Trocar senha"
                        />
                    </Link>
                </td>
            </tr>
        );
    }

    return (
        <>
            <Tabela
                head={tableHead()}
                body={users.map(user => tableBody(user))}
            />
        </>
    );
}

export default UsuarioList;
