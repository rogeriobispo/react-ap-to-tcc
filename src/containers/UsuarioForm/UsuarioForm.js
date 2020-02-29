import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Col,
  ControlLabel,
  FormControl,
  Tooltip,
  Button,
} from 'react-bootstrap';

import { Formik } from 'formik';
import * as Yup from 'yup';
import ClinicClient from '../../services/Clinic/ClinicClient';

export default class UsuarioForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      espec: [],
    };
  }

  async componentDidMount() {
    const spec = await ClinicClient.get(`/specialty`);
    const items = [
      <option key={0} value={0}>
        {'Selecione'}
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
        onSubmit={async user => {
          console.log(user);
          try {
            // const roleAdmin = user.admin ? 'Admin' : '';
            // await ClinicClient.post(`/users`, {
            //   firstName: user.nome,
            //   lastName: user.sobreNome,
            //   email: user.email,
            //   username: user.usuario,
            //   password: user.password,
            //   apps: [],
            //   roles: [roleAdmin],
            // });
            // window.flash(`Senha alterada com sucesso`, 'success');
            // setTimeout(() => {
            //   window.location.href = '/usuarioList';
            // }, 2000);
          } catch (e) {
            window.flash(`Não foi possivel alterar o password`, 'error');
          }
        }}
        validationSchema={Yup.object().shape({
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
            .required('password é obrigatório')
            .test('is-true', 'Password divergente', function (confirmPassword) {
              return this.parent.password === confirmPassword;
            }),
        })}
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
                  {/* campo nome */}
                  <FormGroup controlId="nome">
                    <Col componentClass={ControlLabel} sm={2}>
                      Nome
                    </Col>
                    <Col sm={10}>
                      <FormControl
                        id="nome"
                        placeholder="Nome"
                        type="text"
                        value={values.nome}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.nome && touched.nome
                            ? 'text-input error'
                            : 'text-input'
                        }
                      />
                      {errors.nome && touched.nome && (
                        <Tooltip
                          placement="bottom"
                          className="in"
                          id="tooltip-right"
                        >
                          {errors.nome}
                        </Tooltip>
                      )}
                    </Col>
                  </FormGroup>
                  {/* fim campo nome */}
                  {/* campo email */}
                  <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                      Email
                    </Col>
                    <Col sm={10}>
                      <FormControl
                        id="email"
                        placeholder="Email"
                        type="text"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.email && touched.email
                            ? 'text-input error'
                            : 'text-input'
                        }
                      />
                      {errors.email && touched.email && (
                        <Tooltip
                          placement="bottom"
                          className="in"
                          id="tooltip-right"
                        >
                          {errors.email}
                        </Tooltip>
                      )}
                    </Col>
                  </FormGroup>
                  {/* fim campo email */}

                  {/* inicio Password */}
                  <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                      Senha
                    </Col>
                    <Col sm={10}>
                      <FormControl
                        id="password"
                        placeholder="senha"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.password && touched.password
                            ? 'text-input error'
                            : 'text-input'
                        }
                      />
                      {errors.password && touched.password && (
                        <Tooltip
                          placement="bottom"
                          className="in"
                          id="tooltip-right"
                        >
                          {errors.password}
                        </Tooltip>
                      )}
                    </Col>
                  </FormGroup>
                  {/* fim Password */}
                  {/* inicio Password2 */}
                  <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                      Confirmação Senha
                    </Col>
                    <Col sm={10}>
                      <FormControl
                        id="confirmPassword"
                        placeholder="Confirmar senha"
                        type="password"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.confirmPassword && touched.confirmPassword
                            ? 'text-input error'
                            : 'text-input'
                        }
                      />
                      {errors.confirmPassword && touched.confirmPassword && (
                        <Tooltip
                          placement="bottom"
                          className="in"
                          id="tooltip-right"
                        >
                          {errors.confirmPassword}
                        </Tooltip>
                      )}
                    </Col>
                  </FormGroup>
                  {/* fim Password */}
                  {/* Inicio campos do medico */}
                  {values.doctor && (
                    <FormGroup>
                      {/* INICIO CRM */}
                      <Col componentClass={ControlLabel} sm={2}>
                        CRM
                      </Col>
                      <Col sm={4}>
                        <FormControl
                          id="crm"
                          placeholder="crm"
                          type="text"
                          value={values.crm}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            errors.crm && touched.crm
                              ? 'text-input error'
                              : 'text-input'
                          }
                        />
                        {errors.crm && touched.crm && (
                          <Tooltip
                            placement="bottom"
                            className="in"
                            id="tooltip-right"
                          >
                            {errors.crm}
                          </Tooltip>
                        )}
                      </Col>
                      {/* FIM CRM */}
                      {/* INICIO ESPECIALIDADE */}
                      <Col componentClass={ControlLabel} sm={2}>
                        Especialidade
                      </Col>
                      <Col sm={4}>
                        <FormControl
                          id="especialty_id"
                          componentClass="select"
                          placeholder="select"
                          onChange={handleChange}
                          value={values.especialty_id}
                        >
                          {this.state.espec}
                        </FormControl>
                      </Col>
                      {/* FIM ESPECIALIDADE */}
                    </FormGroup>
                  )}
                  {/* fim campos do médico */}
                  {/* inicio admin */}
                  <FormGroup>
                    <Col sm={6}>
                      Medico?
                      <FormControl
                        id="doctor"
                        type="checkbox"
                        value={values.doctor}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Col>
                    <Col sm={6}>
                      Admin?
                      <FormControl
                        id="admin"
                        type="checkbox"
                        value={values.admin}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Col>
                  </FormGroup>
                  {/* fim admin */}
                  {/* Inicio botoes */}
                  <FormGroup>
                    <Col smOffset={0} sm={0}>
                      <Button type="submit" bsStyle="primary" bsSize="large">
                        Salvar
                      </Button>
                      &nbsp;
                      <Button
                        type="reset"
                        bsStyle="primary"
                        bsSize="large"
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                      >
                        Limpar
                      </Button>
                    </Col>
                  </FormGroup>
                  {/* fim botoes */}
                </Form>
              </div>
            </div>
          );
        }}
      </Formik>
    );
  }
}
