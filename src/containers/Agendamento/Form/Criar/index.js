import React, { Component } from 'react';
import {
  Form,
  Col,
  Breadcrumb
} from 'react-bootstrap';


import { Formik } from 'formik';
import * as Yup from 'yup';
import { getDay, format } from 'date-fns'

import ClinicClient from '../../../../services/Clinic/ClinicClient'
import DatePicker from '../../Fields/campoDatePicker'
import CampoMedico from '../../Fields/CampoMedico'
import BtnSubmit from '../../../../components/form/btnSubmit'
import CampoHorariosDisponivel from '../../Fields/CampoHorariosDisponivel'
import CampoPaciente from '../../Fields/CampoPaciente'

export default class CriarAgendamento extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: "",
      doctorSelected: false,
      doctorSchedule: false,
      dateSelected: null,
      scheduleTime: null,
      timeSelected: null,
      doctorId: -1,
      pacienteId: -1
    }

    this.handleMedico = this.handleMedico.bind(this)
    this.handleDateSelected = this.handleDateSelected.bind(this)
    this.handlePaciente = this.handlePaciente.bind(this)
  }

  handlePaciente(patId) {
    this.setState({ pacienteId: patId })
  }

  async handleDateSelected(date) {
    const day = getDay(date)

    const formatedDate = format(date, 'yyyy-MM-dd')
    const res = await ClinicClient.get(`/doctors/${this.state.doctorId}/appointments?date=${`${formatedDate}T00:00:00-0300`}`)

    const busyhours = []
    res.data.map(sc => busyhours.push(sc.date.split('T')[1].substring(0, 5)))


    const schedule_time = await this.state.doctorSchedule.map((value) => {
      if (value.day === day)
        return value.schedule_time

      return null
    })
    const scheduletimeDiff = schedule_time.filter(v => busyhours.indexOf(v) === -1)
    this.setState({ scheduleTime: scheduletimeDiff })
    this.setState({ dateSelected: date })
  }

  async handleMedico(docId) {
    const doctorId = Number(docId)

    if (doctorId === -1) {
      await this.setState({ doctorSelected: false })
      await this.setState({ dateSelected: null })

      return
    }

    const response = await ClinicClient.get(`/doctors/${doctorId}/schedules`)
    await this.setState({ doctorSchedule: response.data })

    await this.setState({ doctorSelected: true })

    await this.setState({ doctorId })

  }

  render() {

    return (
      <Formik
        enableReinitialize
        initialValues={{
          doctor: this.state.doctorId,
          paciente: this.state.pacienteId,
          dateSelected: this.state.dateSelected,
          time: this.state.timeSelected



        }}

        onSubmit={async (agendamento) => {
          try {
            if (!agendamento.dateSelected || !agendamento.time) {
              window.flash('Erro: data é hora são obritaório', 'error')
              return false
            }

            const data = format(agendamento.dateSelected, 'yyyy-MM-dd')

            ClinicClient.post('appointments', {
              "doctor_id": agendamento.doctor,
              "patient_id": agendamento.paciente,
              "date": `${data}T${agendamento.time}:00-03:00`

            })

            window.flash(`Agendamento criado com sucesso`, 'success');
            setTimeout(() => {
              window.location.href = '/agendamentoList';
            }, 2000);
          } catch (e) {

            window.flash(
              `Erro: ${e.response.data.errors}`,
              'error'
            );

          }
        }}

        validationSchema={
          Yup.object().shape({
            doctor: Yup.number()
              .test('is-true', 'Selecione um médico', (idade) => {
                return (idade !== 'undefined' && idade !== -1)
              }),

            paciente: Yup.number()
              .test('is-true', 'Selecione um paciente', (idade) => {
                return (idade !== 'undefined' && idade !== -1)
              })


          })
        }
      >
        {props => {
          const {
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
          } = props;
          return (
            <>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                  Consulta
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Criar</Breadcrumb.Item>
              </Breadcrumb>
              <div className="lander">

                <span className="mwarning">{this.state.errors}</span>
                <Form horizontal onSubmit={handleSubmit}>
                  <Col sm={6} md={3}>
                    Paciente
                    <CampoPaciente
                      value={values.paciente}
                      handleChange={(e) => { handleChange(e); this.handlePaciente(e) }}
                      onBlur={handleBlur}
                      errors={errors}
                      touched={touched}
                    />
                    <hr />
                    Médico
                    <CampoMedico
                      value={values.doctor}
                      handleChange={(e) => { handleChange(e); this.handleMedico(e) }}
                      selected={this.state.doctorSelected}
                      errors={errors}
                      touched={touched}
                    />
                    <hr />
                    {this.state.doctorSelected && (
                      <DatePicker
                        doctorSchedule={this.state.doctorSchedule}
                        setDate={date => { values.scheduleDate = date; this.handleDateSelected(date) }}
                      />
                    )}
                    <hr />
                    <BtnSubmit title="Salvar" />
                  </Col>
                  <Col sm={6} md={3}>
                    Horarios Disponiveis
                    <hr />
                    {this.state.doctorSelected && this.state.doctorSchedule && this.state.dateSelected && (
                      <CampoHorariosDisponivel
                        times={this.state.scheduleTime}
                        setTime={(time) => this.setState({ timeSelected: time })}
                      />
                    )}
                  </Col>
                </Form>

              </div>
            </>
          );
        }}
      </Formik>
    );
  }
}
