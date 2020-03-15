
import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Col,
} from 'react-bootstrap';


import { Formik } from 'formik';
import * as Yup from 'yup';


import CampoNome from '../Fields/CampoNome'

import BtnReset from '../../../../components/form/BtnReset'
import BtnSubmit from '../../../../components/form/btnSubmit'
import ClinicClient from '../../../../services/Clinic/ClinicClient';

export default class CriarEspecialidade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: ""
    }
  }

  render() {
    return (
      <Formik
        initialValues={{
          nome: '',
        }}
        onSubmit={async (espec) => {
          try {
            await ClinicClient.post('/specialty', {
              name: espec.nome,

            })
            window.flash(`Especialidade criada com sucesso`, 'success');
            setTimeout(() => {
              window.location.href = '/especialidadeList';
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
            nome: Yup.string()
              .min(3, 'Especialidade menor que 3 caracteres')
              .required('Especialidade é Obrigatório'),
          })
        }
      >
        {props => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          } = props;
          return (
            <div className="Home">
              <div className="lander">

                <span className="mwarning">{this.state.errors}</span>
                <Form horizontal onSubmit={handleSubmit}>
                  <CampoNome
                    value={values.nome}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                  />

                  <FormGroup>
                    <Col smOffset={0} sm={0}>
                      <BtnSubmit title="Salvar" />
                      <BtnReset
                        title="limpar"
                        onClick={handleReset}
                        disabled={
                          !dirty || isSubmitting
                        }
                      />
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



