import React, { useEffect, useState } from 'react';
import { format } from 'date-fns'
import { Panel, Col } from 'react-bootstrap'
import ClinicCliente from '../../../services/Clinic/ClinicClient'

function ImprimirReceita(props) {
    const [receita, setReceita] = useState([])

    function getDoctor() {
        if (receita[0]) {
            return receita[0].appointment.doctor.name
        }
        return 'Não localizado'
    }

    function getPatiente() {
        if (receita[0]) {
            return receita[0].appointment.patient.name
        }
        return 'Não localizado'
    }
    useEffect(() => {
        // eslint-disable-next-line
        (async () => {
            const ap = await ClinicCliente.get(`/appointments/${props.apId}`)
            setReceita(ap.data)
        })()

    }, [props.apId])

    return (
        <>
            <Col sm={12}>
                <Panel bsStyle="primary">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">Receita</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <table>

                            <tbody>
                                <tr>
                                    <td>
                                        Dr(a)
                                        {' '}
                                        {getDoctor()}
                                    </td>
                                </tr>
                                <tr>
                                    <hr />
                                </tr>
                                <tr>
                                    <td>
                                        Paciente:
{' '}
                                        {getPatiente()}
                                        {' '}
                                    </td>
                                </tr>
                                <tr>
                                    <hr />
                                </tr>

                                <tr>
                                    <td>
                                        data:
                                        {' '}
                                        {String(format(new Date(), 'd MMM yyyy H:mm'))}

                                    </td>
                                </tr>

                                {receita.map((r) => (
                                    <>
                                        <tr>
                                            <hr />
                                        </tr>

                                        <tr>
                                            <td>

                                                {r.medicine.name}
                                                {' '}
                                                -
                                            {' '}
                                                {r.medicine.factory}
                                            </td>
                                        </tr>
                                    </>
                                ))}

                            </tbody>
                        </table>
                    </Panel.Body>
                </Panel>
            </Col>
        </>
    );
}

export default ImprimirReceita;