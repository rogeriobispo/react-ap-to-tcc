/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Col,
} from 'react-bootstrap';


import { Formik } from 'formik';
import * as Yup from 'yup';

import CampoNome from './Fields/CampoNome'
import CampoEmail from './Fields/CampoEmail'
import CampoSenha from './Fields/CampoSenha'
import CampoConfirmacaoSenha from './Fields/CampoConfirmacaoSenha'
import CampoCrm from './Fields/CampoCrm'
import CampoEspecialidade from './Fields/CampoEspecialidade'
import CamposMedicoAdmin from './Fields/CamposMedicoAdmin'
import BtnReset from '../../components/form/BtnReset'
import BtnSubmit from '../../components/form/btnSubmit'
import ClinicClient from '../../services/Clinic/ClinicClient';

export default class UsuarioForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      espec: [],
      errors: "erro padrao"
    }
  }

  async componentDidMount() {
    const spec = await ClinicClient.get(`/specialty`);
    const items = [
      <option key={0} value={0}>
        Selecione
      </option>,
    ];

    for (let i = 0; i < spec.data.length; i += 1) {
      items.push(
        <option key={spec.data[i].id} value={spec.data[i].id}>
          {spec.data[i].name}
        </option>
      );
    }
    this.setState({ espec: items });
  }

  render() {
    return (
      <Formik
        initialValues={{
          email: '',
          nome: '',
          password: '',
          confirmPassword: '',
          admin: false,
          doctor: false,
          crm: '',
          especialty_id: 0,
        }}
        onSubmit={async (user) => {
          try {
            const roleAdmin = user.admin ? 'Admin' : '';
            await ClinicClient.post(`/users`, {
              name: user.nome,
              email: user.email,
              password: user.password,
              confirm_password: user.confirmPassword,
              doctor: user.doctor,
              admin: user.admin,
              roles: roleAdmin,
              crm: user.crm,
              specialtyId: Number(user.especialty_id)
            });
            window.flash(`Usuario criado com sucesso`, 'success');
            setTimeout(() => {
              window.location.href = '/usuarioList';
            }, 2000);
          } catch (e) {

            window.flash(
              `Erro: ${e.response.data.error}`,
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
            doctor: Yup.boolean(),
            crm: Yup.string().when('doctor', (doctor, field) => {
              return doctor
                ? field.required('Crm é obrigatório')
                : field.notRequired();
            }),
            password: Yup.string()
              .min(5, 'Senha deve ser maior que 5')
              .required('password é obrigatório'),
            confirmPassword: Yup.string()
              .min(5, 'Senha deve ser maior que 5')
              .required('Confirmação de password é obrigatório')
              .test('is-true', 'Password divergente', function (
                confirmPassword
              ) {
                return this.parent.password === confirmPassword;
              }),
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

                  <CampoSenha
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                  />

                  <CampoConfirmacaoSenha
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errors={errors}
                    touched={touched}

                  />

                  {values.doctor && (
                    <FormGroup>

                      <CampoCrm
                        value={values.crm}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors}
                        touched={touched}
                      />

                      <CampoEspecialidade
                        onChange={handleChange}
                        value={values.especialty_id}
                        items={this.state.espec}
                        errors={errors}
                        touched={touched}
                      />


                    </FormGroup>
                  )}
                  <CamposMedicoAdmin
                    onChange={handleChange}
                    onBlur={handleBlur}
                    admin={values.doctor}
                    doctor={values.admin}

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
                {this.state.errors}
              </div>
            </div>
          );
        }}
      </Formik>
    );
  }
}



