import React, { useEffect, useState } from 'react';
import { format } from 'date-fns'
import { Panel, Col } from 'react-bootstrap'
import ClinicCliente from '../../../services/Clinic/ClinicClient'

function ImprimirReceita(props) {
    const [guia, setGuia] = useState([])

    function getDoctor() {
        if (guia[0]) {
            return guia[0].appointment.doctor.name
        }
        return 'Não localizado'
    }

    function getPatiente() {
        if (guia[0]) {
            return guia[0].patient.name
        }
        return 'Não localizado'
    }
    useEffect(() => {
        // eslint-disable-next-line
        (async () => {
            const ap = await ClinicCliente.get(`/appointments/${props.apId}/exams`)
            setGuia(ap.data)
        })()

    }, [props.apId])

    return (
        <>
            <Col sm={12}>
                <Panel bsStyle="primary">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">Guia para exames</Panel.Title>
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
                                        Pasciente:
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

                                {guia.map((g) => (
                                    <>
                                        <tr>
                                            <hr />
                                        </tr>

                                        <tr>
                                            <td>

                                                {g.name}
                                            </td>
                                        </tr>
                                    </>
                                ))}
                                <tr>
                                    <td>
                                        Enviar Resultado:
                                        {' '}
                                        {window.location.href.replace('guia', 'resultados')}
                                    </td>
                                </tr>


                            </tbody>
                        </table>
                    </Panel.Body>
                </Panel>
            </Col>
        </>
    );
}

export default ImprimirReceita;