import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Form, FormGroup, Col, ControlLabel, FormControl, Breadcrumb } from 'react-bootstrap'
import Tabela from '../../../components/Tabelas';
import ClinicClient from '../../../services/Clinic/ClinicClient';
import DetailModal from '../../../components/Modal/Detail';
import ConfirmDelete from '../../../components/Modal/confimreDeletionModal'

function MedicineList() {
    const [medicines, setMedicines] = useState([]);
    const [filter, setFilter] = useState([])
    const [consult, setConsult] = useState('')


    useEffect(() => {
        (async () => {
            const response = await ClinicClient.get('/medicines');
            setMedicines(response.data);
            setFilter(response.data)
        })();
    }, []);

    function searchFilter(e) {
        if (e.target.value === '') {
            setFilter(medicines)
            return
        }
        const searched = filter.filter(u => u.name.includes(e.target.value) || u.factory.includes(e.target.value))
        setFilter(searched)
    }

    async function deleteMedicine(medicineId) {
        await ClinicClient.delete(`/medicines/${medicineId}`)
    }
    function editLink(medicineId) {
        return (
            <Link to={`/medicamento/${medicineId}`} className="btn btn-primary active">Editar</Link>
        )
    }

    function userDetail(medicine) {
        return (
            <>
                <div>
                    <h4>
                        Medicamento:
                        {medicine.name}
                    </h4>
                    <hr />
                    <h4>
                        Fabricante:
                        {medicine.factory}
                    </h4>
                </div>
            </>
        );
    }

    function tableHead() {
        return (
            <>
                <th>Nome</th>
                <th>Fabricante</th>
                <th>Criado Em</th>
                <th>Detalhes</th>
                <th>{' '}</th>
            </>
        );
    }

    function tableBody(medicine) {
        return (
            <tr>
                <td>{medicine.name}</td>
                <td>{medicine.factory}</td>
                <td>{format(new Date(medicine.createdAt), 'dd/MM/yyyy')}</td>
                <td>
                    <DetailModal
                        userDetail={userDetail(medicine)}
                        username={medicine.name}
                        editLink={editLink(medicine.id)}
                        propovalMessage={{
                            msg: 'Detalhe do Medicamento',
                            title: '',
                        }}
                    />
                </td>
                <td>
                    <ConfirmDelete
                        field={medicine}
                        delete={deleteMedicine}
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
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                    Medicametos
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Listar</Breadcrumb.Item>
            </Breadcrumb>
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
                                placeholder="Digite nome do medicamento/fabricante"
                                onChange={(e) => { setConsult(e.target.value); searchFilter(e) }}
                            />
                        </Col>

                    </FormGroup>

                </Form>


                <Tabela
                    head={tableHead()}
                    body={filter.map(med => tableBody(med))}
                />
            </div>
        </>

    );
}

export default MedicineList;
