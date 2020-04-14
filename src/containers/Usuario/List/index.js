/* eslint-disable consistent-return */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Popover, OverlayTrigger, Radio, FormGroup, Col, ControlLabel, Form, FormControl, Breadcrumb } from 'react-bootstrap';

import { format } from 'date-fns';
import Tabela from '../../../components/Tabelas';
import ClinicClient from '../../../services/Clinic/ClinicClient';
import DetailModal from '../../../components/Modal/Detail';
import ConfirmDelete from '../../../components/Modal/confimreDeletionModal'

function UsuarioList() {
    const [users, setUser] = useState([]);
    const [filter, setFilter] = useState([])
    const [currentFilter, setCurrentFilter] = useState('all')
    const [consult, setConsult] = useState('')


    useEffect(() => {
        (async () => {
            const response = await ClinicClient.get('/users');
            setUser(response.data);
            setFilter(response.data)

        })();
    }, []);

    function isAdmin(roles) {
        return roles.includes('Admin');
    }

    async function deleteUser(userId) {
        await ClinicClient.delete(`/users/${userId}`)
    }
    function filterUsers(filtertype) {
        if (filtertype === 'all')
            setFilter(users)
        if (filtertype === 'medico')
            setFilter(users.filter(u => u.doctor === true))
        if (filtertype === 'atendente')
            setFilter(users.filter(u => u.roles.includes('Recepcionist')))
        if (filtertype === 'admin')
            setFilter(users.filter(u => u.roles.includes('Admin')))

        setCurrentFilter(filtertype)
    }

    function searchFilter(e) {
        if (e.target.value === '') {
            filterUsers(currentFilter)
            return
        }
        const searched = filter.filter(u => u.name.includes(e.target.value) || u.email.includes(e.target.value))
        setFilter(searched)
    }

    function isRecepcionista(roles) {
        return roles.includes('Recepcionist');
    }

    function editLink(userId) {
        return (
            <Link to={`usuario/${userId}`} className="btn btn-primary active">Editar</Link>
        )
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
                        {isAdmin(user.roles) ? <Glyphicon glyph="ok" /> : <Glyphicon glyph="glyphicon glyphicon-remove" />}
                    </h4>
                    <hr />
                    <h4>
                        Recepcionista?:
                        {isRecepcionista(user.roles) ? <Glyphicon glyph="ok" /> : <Glyphicon glyph="glyphicon glyphicon-remove" />}
                    </h4>
                    <hr />
                    <h4>
                        {user.doctor ? (
                            <>
                                doctor?
                                <Glyphicon glyph="ok" />
                                <hr />
                                <h4>
                                    crm:

                                    {user.crm}
                                </h4>
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
                <th>{' '}</th>
            </>
        );
    }
    const popover = (
        <Popover id="modal-popover" title=''>
            Trocar Senha do usuario
        </Popover>
    );

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
                        editLink={editLink(user.id)}
                        propovalMessage={{
                            msg: 'Detalhe do usuario',
                            title: '',
                        }}
                    />
                </td>
                <td>
                    <OverlayTrigger overlay={popover}>

                        <Link to={{ pathname: encodeURI(`/usuario/password`), user }}>
                            <Glyphicon
                                glyph="glyphicon glyphicon-asterisk"
                                title="Trocar senha"
                            />
                        </Link>
                    </OverlayTrigger>
                </td>
                <td>
                    <ConfirmDelete
                        field={user}
                        delete={deleteUser}
                        setFilter={setFilter}
                        filter={filter}

                    />
                </td>
            </tr>
        );
    }

    return (

        <>
            <Breadcrumb>
                <Breadcrumb.Item href="/Home">Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                    Usuario
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Lista</Breadcrumb.Item>
            </Breadcrumb>


            <div className="lander">

                <Form horizontal onSubmit={(e) => e.preventDefault()}>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={1}>
                            Tipo
                        </Col>
                        <Col sm={4}>
                            <Radio
                                name="filter"
                                value="all"
                                onChange={(e) => filterUsers(e.target.value)}
                                inline
                                checked={currentFilter === 'all'}
                            >
                                Todos
                            </Radio>

                            <Radio
                                name="filter"
                                value="medico"
                                onChange={(e) => filterUsers(e.target.value)}
                                inline
                                checked={currentFilter === 'medico'}
                            >
                                Médico
                            </Radio>
                            <Radio
                                name="filter"
                                value="atendente"
                                onChange={(e) => filterUsers(e.target.value)}
                                inline
                                checked={currentFilter === 'atendente'}
                            >
                                Atendente
                            </Radio>
                            <Radio
                                name="filter"
                                value="admin"
                                onChange={(e) => filterUsers(e.target.value)}
                                inline
                                checked={currentFilter === 'admin'}
                            >
                                Admin
                            </Radio>
                        </Col>
                        <Col componentClass={ControlLabel} sm={1}>
                            Procurar
                        </Col>
                        <Col sm={5}>
                            <FormControl
                                type="text"
                                value={consult}
                                placeholder="Digite nome/email"
                                onChange={(e) => { setConsult(e.target.value); searchFilter(e) }}
                            />
                        </Col>

                    </FormGroup>

                </Form>

                <Tabela
                    head={tableHead()}
                    body={filter.map(user => tableBody(user))}
                />
            </div>
        </>
    );
}

export default UsuarioList;
