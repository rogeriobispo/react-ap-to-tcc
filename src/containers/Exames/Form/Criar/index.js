
import React, { Component } from 'react';

import {
  Form,
  FormGroup,
  Col,
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
  }

  setExames(exames) {
    this.setState({ exames: [exames, ...this.state.exames] })
  }

  render() {
    return (
      <Formik
        initialValues={{
          with: ''

        }}
        onSubmit={async exames => {
          try {

            const apId = this.props.computedMatch.params.id
            this.state.exames.map((ex) => {
              const bodyParams = {
                name: ex,
                patient_id: this.state.patient_id,
                appointment_id: apId,
                with_doctor: exames.with === 'medico',
                with_patient: exames.with === 'Paciente'
              }
              ClinicClient.post('/exams', bodyParams)
            })

            window.flash(`Atendimento finalizado com sucesso`, 'success');
            setTimeout(() => {
              window.location.href = '/atendimentoList';
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
            <div className="Home">
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
                  />

                  <FormGroup>
                    <Col smOffset={0} sm={0}>
                      <BtnSubmit title="Finalizar" />
                    </Col>
                  </FormGroup>
                </Form>

              </div>
            </div>
          );
        }}
      </Formik>
    );
  }
}



