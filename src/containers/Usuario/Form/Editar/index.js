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
import CampoCrm from '../../Fields/CampoCrm'
import CampoEspecialidade from '../../Fields/CampoEspecialidade'
import CamposRoles from '../../Fields/CamposMedicoAdmin'
import BtnReset from '../../../../components/form/BtnReset'
import BtnSubmit from '../../../../components/form/btnSubmit'
import ClinicClient from '../../../../services/Clinic/ClinicClient';

export default class CriarUsuario extends Component {
    constructor(props) {
        super(props);

        this.state = {
            espec: [],
            errors: '',
            userToUpdate: ''
        }
    }

    async componentDidMount() {
        await this.getSpec()
        await this.getUser()

    }

    async getUser() {
        try {
            const { id } = this.props.computedMatch.params
            const response = await ClinicClient.get(`/users/${id}`)
            this.setState({ userToUpdate: response.data })
        } catch (error) {
            this.setState({ errors: `Usuário não localizado${error}` })
        }
    }

    async getSpec() {
        try {
            const spec = await ClinicClient.get(`/specialty`);
            const items = [
                <option key={-1} value={-1}>
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


        } catch (error) {
            this.setState({ errors: "Sistema indisponivel tente mais tarde" })
        }
    }

    render() {
        const { userToUpdate } = this.state
        function isAdmin(user) {
            if (user && user.roles)
                return user.roles.includes('Admin')
            return false
        }

        function isRecepcionist(user) {
            if (user && user.roles)
                return user.roles.includes('Recepcionist')

            return false
        }


        return (

            <Formik
                enableReinitialize
                initialValues={{
                    email: userToUpdate.email,
                    nome: userToUpdate.name,
                    admin: isAdmin(userToUpdate),
                    atendent: isRecepcionist(userToUpdate),
                    doctor: userToUpdate.doctor,
                    crm: userToUpdate.crm,
                    especialty_id: userToUpdate.specialty_id,
                }}
                onSubmit={async (user) => {
                    try {
                        let roles = user.admin ? ' Admin ' : '';
                        roles += user.atendent ? ' Recepcionist ' : '';
                        await ClinicClient.put(`/users/${this.state.userToUpdate.id}`, {
                            name: user.nome,
                            email: user.email,
                            doctor: user.doctor,
                            admin: user.admin,
                            roles,
                            crm: user.crm,
                            specialty_id: Number(user.especialty_id)
                        });
                        window.flash(`Usuario alterad com sucesso`, 'success');
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
                        doctor: Yup.boolean(),
                        crm: Yup.string().when('doctor', (doctor, field) => {
                            return doctor
                                ? field.required('Crm é obrigatório')
                                : field.notRequired();
                        }),
                        especialty_id: Yup.string().when('doctor', (doctor, field) => {
                            return doctor
                                ? field.test('is-true', 'Selecione Especialidade', (especialty) => {
                                    return (typeof especialty !== 'undefined' && Number(especialty) !== -1)
                                })
                                : field.notRequired();
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
                                                value={values.especialty_id}
                                                onChange={handleChange}
                                                items={this.state.espec}
                                                errors={errors}
                                                touched={touched}
                                            />


                                        </FormGroup>
                                    )}
                                    <CamposRoles
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        admin={values.admin}
                                        doctor={values.doctor}
                                        atendent={values.atendent}

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