import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Col, ControlLabel, FormControl } from 'react-bootstrap'
import { format } from 'date-fns';
import Tabela from '../../../components/Tabelas';
import ClinicClient from '../../../services/Clinic/ClinicClient';
import DetailModal from '../../../components/Modal/Detail';
import ConfirmDelete from '../../../components/Modal/confimreDeletionModal'

function EspecialtyList() {
    const [especialties, setEspecialties] = useState([]);
    const [filter, setFilter] = useState([])
    const [consult, setConsult] = useState('')

    useEffect(() => {
        (async () => {
            const response = await ClinicClient.get('/specialty');
            setEspecialties(response.data);
            setFilter(response.data)
        })();
    }, []);

    async function deleteSpec(specId) {
        await ClinicClient.delete(`/specialty/${specId}`)
    }

    function searchFilter(e) {
        if (e.target.value === '') {
            setFilter(especialties)
            return
        }
        const searched = filter.filter(u => u.name.includes(e.target.value))
        setFilter(searched)
    }


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
                <th>{' '}</th>
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
                        editLink={editLink(spec.id)}
                        propovalMessage={{
                            msg: 'Detalhe das Especialidade',
                            title: '',
                        }}
                    />
                </td>
                <td>
                    <ConfirmDelete
                        field={spec}
                        delete={deleteSpec}
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
                                placeholder="Digite nome do especialidade"
                                onChange={(e) => { setConsult(e.target.value); searchFilter(e) }}
                            />
                        </Col>

                    </FormGroup>

                </Form>

                <Tabela
                    head={tableHead()}
                    body={filter.map(sp => tableBody(sp))}
                />
            </div>
        </div>
    );
}

export default EspecialtyList;
