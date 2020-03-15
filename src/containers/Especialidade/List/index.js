import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import Tabela from '../../../components/Tabelas';
import ClinicClient from '../../../services/Clinic/ClinicClient';
import DetailModal from '../../../components/Modal/Detail';

function EspecialtyList() {
    const [especialties, setEspecialties] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await ClinicClient.get('/specialty');
            setEspecialties(response.data);
        })();
    }, []);


    function editLink(especId) {
        return (
            <Link to={`especialidade/${especId}`} className="btn btn-primary active">Editar</Link>
        )
    }

    function userDetail(spec) {
        return (
            <>
                <div>
                    <h4>
                        Nome:
                        {spec.name}
                    </h4>
                </div>
            </>
        );
    }

    function tableHead() {
        return (
            <>
                <th>Nome</th>
                <th>Criado Em</th>
                <th>Detalhes</th>
            </>
        );
    }

    function tableBody(spec) {
        return (
            <tr>
                <td>{spec.name}</td>
                <td>{format(new Date(spec.created_at), 'dd/MM/yyyy')}</td>
                <td>
                    <DetailModal
                        userDetail={userDetail(spec)}
                        username={spec.name}
                        link={editLink(spec.id)}
                        propovalMessage={{
                            msg: 'Detalhe das Especialidade',
                            title: '',
                        }}
                    />
                </td>
            </tr>
        );
    }

    return (
        <>
            <Tabela
                head={tableHead()}
                body={especialties.map(sp => tableBody(sp))}
            />
        </>
    );
}

export default EspecialtyList;
