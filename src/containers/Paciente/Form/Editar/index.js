
import React, { Component } from 'react';
import {
    Form,
    FormGroup,
    Col,
} from 'react-bootstrap';


import { Formik } from 'formik';
import * as Yup from 'yup';

import Idade from '../../Fields/idade'
import CampoNome from '../../Fields/CampoNome'
import CampoEmail from '../../Fields/CampoEmail'
import CampoDocumento from '../../Fields/CampoDocumento'
import CamposTelefones from '../../Fields/CamposTelefone'
import BtnReset from '../../../../components/form/BtnReset'
import BtnSubmit from '../../../../components/form/btnSubmit'
import ClinicClient from '../../../../services/Clinic/ClinicClient';

export default class EditarPaciente extends Component {
    constructor(props) {
        super(props);
        this.state = {
            patient: "",
            errors: ""
        }
    }

    componentDidMount() {
        this.getPatient()
    }

    async getPatient() {
        try {
            const { id } = this.props.computedMatch.params
            const response = await ClinicClient.get(`/patients/${id}`)
            this.setState({ patient: response.data })
        } catch (error) {
            this.setState({ errors: `Paciente não localizado${error}` })
        }
    }

    render() {
        const paciente = this.state.patient
        return (
            <Formik
                enableReinitialize
                initialValues={{
                    email: paciente.email,
                    nome: paciente.name,
                    documento: paciente.document,
                    tel: paciente.phone,
                    cel: paciente.cel,
                    idade: paciente.age
                }}
                onSubmit={async (patient) => {
                    try {
                        await ClinicClient.put('/patients', {
                            name: patient.nome,
                            document: patient.documento,
                            age: patient.idade,
                            email: patient.email,
                            cel: patient.cel,
                            phone: patient.tel
                        })
                        window.flash(`Usuario criado com sucesso`, 'success');
                        setTimeout(() => {
                            window.location.href = '/pacienteList';
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
                        documento: Yup.string()
                            .required('Documento Obrigatório'),
                        cel: Yup.string(),
                        email: Yup.string()
                            .email('Email Invalido')
                            .when(['cel', 'tel'], (cel, tel, email) => {
                                return !(cel || tel) ? email.required('Um forma de contato é necessario') : email.notRequired()
                            }),
                        tel: Yup.string(),
                        idade: Yup.number()
                            .test('is-true', 'Selecione uma idade', (idade) => {
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
                                    <Idade
                                        value={values.idade}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        errors={errors}
                                        touched={touched}
                                    />
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
                                        value={values.documento}
                                        disabled
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        errors={errors}
                                        touched={touched}
                                    />

                                    <CamposTelefones
                                        valueCel={values.cel}
                                        valueTel={values.tel}
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



