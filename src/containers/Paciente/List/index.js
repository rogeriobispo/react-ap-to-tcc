import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FormControl, Col, Form, FormGroup, ControlLabel } from 'react-bootstrap';

import { format } from 'date-fns';
import Tabela from '../../../components/Tabelas';
import ClinicClient from '../../../services/Clinic/ClinicClient';
import ConfirmDelete from '../Fields/confimreDeletionModal'
import DetailModal from '../../../components/Modal/Detail';

function PatientList() {
    const [patient, setPatient] = useState([]);
    const [filter, setFilter] = useState([])
    const [consult, setConsult] = useState('')

    useEffect(() => {
        (async () => {
            const response = await ClinicClient.get('/patients');
            setPatient(response.data);
            setFilter(response.data)
        })();
    }, []);


    function searchFilter(e) {
        if (e.target.value === '') {
            setFilter(patient)
            return
        }
        const searched = filter.filter(u => u.name.includes(e.target.value) || u.document.includes(e.target.value))
        setFilter(searched)
    }

    function editLink(patientId) {
        return (
            <Link to={`paciente/${patientId}`} className="btn btn-primary active">Editar</Link>
        )
    }

    async function deletePaciente(patientId) {
        console.log(patientId)
        await ClinicClient.delete(`/patients/${patientId}`)
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
                <th>Documento</th>
                <th>Criado Em</th>
                <th>Detalhes</th>
                <th>{' '}</th>
            </>
        );
    }

    function tableBody(user) {
        return (
            <tr>
                <td>{user.name}</td>
                <td>{user.document}</td>
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
                <td>
                    <ConfirmDelete
                        user={user}
                        deletePaciente={deletePaciente}
                        setFilter={setFilter}
                        filter={filter}
                    />
                </td>
            </tr>
        );
    }

    return (
        <div className="Home">

            <div className="lander">

                <Form horizontal onSubmit={(e) => e.preventDefault()}>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={1}>
                            Procurar
                        </Col>
                        <Col sm={5}>
                            <FormControl
                                type="text"
                                value={consult}
                                placeholder="Digite nome do paciente/documento"
                                onChange={(e) => { setConsult(e.target.value); searchFilter(e) }}
                            />
                        </Col>

                    </FormGroup>

                </Form>


                <Tabela
                    head={tableHead()}
                    body={filter.map(patientInfo => tableBody(patientInfo))}
                />
            </div>
        </div>
    );
}

export default PatientList;
