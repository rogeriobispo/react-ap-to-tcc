
import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Col,
} from 'react-bootstrap';


import { Formik } from 'formik';
import * as Yup from 'yup';

import CampoNome from '../../Fields/CampoNome'
import CampoEmail from '../../Fields/CampoEmail'
import CampoDocumento from '../../Fields/CampoDocumento'
import CamposTelefones from '../../Fields/CamposTelefone'
import BtnReset from '../../../../components/form/BtnReset'
import BtnSubmit from '../../../../components/form/btnSubmit'
// import ClinicClient from '../../../../services/Clinic/ClinicClient';

export default class CriarPasciente extends Component {
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
          email: '',
          nome: '',
          rg: '',
          tel: '',
          cel: ''
        }}
        onSubmit={async (patient) => {
          try {
            console.log(patient)
            window.flash(`Usuario criado com sucesso`, 'success');
            setTimeout(() => {
              window.location.href = '/usuarioList';
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
              .min(3, 'Nome menor que 3 caracteres')
              .required('Nome é Obrigatório'),
            email: Yup.string()
              .email()
              .required('Email Obrigatório'),
            rg: Yup.string()
              .email()
              .required('RG Obrigatório'),
            tel: Yup.string()
              .email()
              .required('Telefone é Obrigatório'),
            cel: Yup.string()
              .email()
              .required('Telefone é Obrigatório'),
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
                  <CampoEmail
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                  />
                  <CampoDocumento
                    value={values.rg}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                  />

                  <CamposTelefones
                    valueTel={values.tel}
                    valuecel={values.cel}
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



