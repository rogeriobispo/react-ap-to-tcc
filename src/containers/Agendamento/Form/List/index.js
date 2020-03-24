import React, { Component } from 'react';
import {
  Col,
} from 'react-bootstrap';
import './list.css'

import { Formik } from 'formik';
import ClinicClient from '../../../../services/Clinic/ClinicClient'
import CampoMedico from '../../Fields/CampoMedico'
import CampoPasciente from '../../Fields/CampoPasciente'
import AgendamentoList from '../../Fields/AgendamentoList'

export default class CriarAgendamento extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: "",
      doctorId: -1,
      pascienteId: -1,
      schedules: { title: "", data: [] }
    }

    this.handleMedico = this.handleMedico.bind(this)
    this.handlePaciente = this.handlePaciente.bind(this)
  }

  async handlePaciente(e) {
    const pascienteId = Number(e.target.value)

    const response = await ClinicClient.get(`/patients/${pascienteId}/appointments`)
    this.setState({ schedules: { title: "Agenda do pasciente", data: response.data } })
    this.setState({ doctorId: -1 })
  }

  async handleMedico(e) {
    const doctorId = Number(e.target.value)

    const response = await ClinicClient.get(`/doctors/${doctorId}/appointments?filter=all`)

    this.setState({ schedules: { title: "Agenda do Médico", data: response.data } })
    this.setState({ pascienteId: -1 })
  }

  render() {

    return (
      <Formik
        enableReinitialize
        initialValues={{
          doctor: this.state.doctorId,
          pasciente: this.state.pascienteId,

        }}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            handleChange,
            handleBlur,

          } = props;
          return (
            <div className="Home">
              <div className="lander">

                <span className="mwarning">{this.state.errors}</span>

                <Col sm={6} md={3}>
                  Pasciente
                  <CampoPasciente
                    value={values.pasciente}
                    onChange={(e) => { handleChange(e); this.handlePaciente(e) }}
                    onBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                  />
                  <hr />
                  Doutor
                  <CampoMedico
                    value={values.doctor}
                    selected={this.state.doctorSelected}
                    onChange={(e) => { handleChange(e); this.handleMedico(e) }}
                    errors={errors}
                    touched={touched}
                  />
                </Col>
                {/* <Col sm={6} md={9}> */}
                {this.state.schedules.title}
                <hr />
                <AgendamentoList
                  schedules={this.state.schedules.data}
                />

                {/* </Col> */}

              </div>
            </div>
          );
        }}
      </Formik>
    );
  }
}
