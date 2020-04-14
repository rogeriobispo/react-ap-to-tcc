
import React, { Component } from 'react';

import {
  Form,
  FormGroup,
  Col,
  Breadcrumb
} from 'react-bootstrap';

import { Formik } from 'formik';
import * as Yup from 'yup';


import CampoExame from '../../Fields/CampoExame'
import ListExame from '../../Fields/ListExame'
import WithExame from '../../Fields/withExame'
import ClinicClient from '../../../../services/Clinic/ClinicClient'
import BtnSubmit from '../../../../components/form/btnSubmit'



export default class CriarAtendimento extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: "",
      exames: [],
      patient_id: this.props.location.state.schedule.patient_id
    }
    this.setExames = this.setExames.bind(this)
    this.removeExames = this.removeExames.bind(this)
  }

  setExames(exames) {
    this.setState({ exames: [exames, ...this.state.exames] })
  }

  removeExames(exame) {
    this.setState({ exames: this.state.exames.filter(ex => ex !== exame) })
  }

  render() {
    return (
      <Formik
        initialValues={{
          with: ''

        }}
        onSubmit={async exames => {
          try {
            if (this.state.exames.length === 0) {
              window.flash(`Deve conter exames para cadastar`, 'error');
              return null
            }

            const apId = this.props.computedMatch.params.id
            this.state.exames.map(async ex => {
              const bodyParams = {
                name: ex,
                patient_id: this.state.patient_id,
                appointment_id: apId,
                with_doctor: exames.with === 'medico',
                with_patient: exames.with === 'Paciente'
              }
              await ClinicClient.post('/exams', bodyParams)

            })
            await ClinicClient.put(`appointments/${apId}`, { exam: true })
            window.flash(`Atendimento finalizado com sucesso`, 'success');
            setTimeout(() => {
              window.location.href = '/ExameList';
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
            with: Yup.string().required('Manter com é obrigatório')
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
            setFieldValue
          } = props;
          return (
            <>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                  Atendimento
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Solicitar exames</Breadcrumb.Item>
              </Breadcrumb>
              <div className="lander">

                <span className="mwarning">{this.state.errors}</span>
                <Form horizontal onSubmit={handleSubmit}>
                  <WithExame
                    setFieldValue={setFieldValue}
                    errors={errors}
                    touched={touched}
                  />

                  <CampoExame
                    values={values.exam}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                    setExames={this.setExames}
                    exames={this.state.exames}

                  />
                  <ListExame
                    exames={this.state.exames}
                    removeExames={this.removeExames}
                  />

                  <FormGroup>
                    <Col smOffset={6} sm={0}>
                      <BtnSubmit title="Finalizar" />
                    </Col>
                  </FormGroup>
                </Form>

              </div>
            </>
          );
        }}
      </Formik>
    );
  }
}



