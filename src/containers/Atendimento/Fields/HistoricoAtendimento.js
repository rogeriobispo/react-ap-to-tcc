import React, { useState, useEffect } from 'react';
import { format } from 'date-fns'
import { Tabs, Tab, Panel } from 'react-bootstrap'
import ClinicClient from '../../../services/Clinic/ClinicClient'

function HistoricoAtendimento(props) {
    const [atendimentos, setAtendimentos] = useState([])
    useEffect(() => {
        (async () => {
            const response = await ClinicClient.get(`/patients/${props.paciente.id}/historic`)
            console.log(response)
            setAtendimentos(response.data)

        })()
    }, [setAtendimentos, props.paciente.id])

    function historico(atend) {
        return (
            <Tab eventKey={atend.id} title={format(new Date(atend.date), 'dd-MM-yyyy')}>
                <div className="Home">
                    <div className="lander">
                        <Panel>
                            <Panel.Heading>Atendimento</Panel.Heading>
                            <Panel.Body>
                                Descrição:
                            {' '}
                                {atend.description}
                            </Panel.Body>
                        </Panel>
                        <Panel>
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">Receita</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                {atend.medicines.map(m => (
                                    <p>
                                        {m.name}
                                        {' '}
-
                                        {' '}
                                        {m.factory}
                                    </p>
                                ))}
                            </Panel.Body>
                        </Panel>
                        <Panel>
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">Exames</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                {atend.exams.map(e => (
                                    <p>
                                        {e.name}
                                        {' '}

                                        {' '}
                                        {e.result}
                                    </p>
                                ))}
                            </Panel.Body>
                        </Panel>
                    </div>
                </div>

            </Tab>


        )
    }
    return (
        <div>
            Histórico
            <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
                {atendimentos.map(at => historico(at))}
            </Tabs>

        </div>
    );
}

export default HistoricoAtendimento;