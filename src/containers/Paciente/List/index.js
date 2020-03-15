import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { Glyphicon, Popover, OverlayTrigger } from 'react-bootstrap';

import { format } from 'date-fns';
import Tabela from '../../../components/Tabelas';
import ClinicClient from '../../../services/Clinic/ClinicClient';
import DetailModal from '../../../components/Modal/Detail';

function PatientList() {
    const [patient, setPatient] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await ClinicClient.get('/patients');
            setPatient(response.data);
        })();
    }, []);

    function editLink(patientId) {
        return (
            <Link to={`paciente/${patientId}`} className="btn btn-primary active">Editar</Link>
        )
    }

    function userDetail(patientInfo) {
        return (
            <>
                <div>
                    <h4>
                        Nome:
                        {patientInfo.name}
                        {' '}
                        -
                        {' '}
                        {patientInfo.age}
                    </h4>
                    <hr />
                    <h4>
                        Email:
                        {patientInfo.email}
                    </h4>
                    <hr />
                    <h4>
                        Celular:
                        {patientInfo.cel}
                    </h4>
                    <hr />
                    <h4>
                        Telefone:
                        {patientInfo.telefone}
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
                        link={editLink(user.id)}
                        propovalMessage={{
                            msg: 'Detalhe do paciente',
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
                body={patient.map(patientInfo => tableBody(patientInfo))}
            />
        </>
    );
}

export default PatientList;
