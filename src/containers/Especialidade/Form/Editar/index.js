
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

export default class EditarEspecialidade extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spec: "",
            errors: ""
        }
    }

    componentDidMount() {
        this.getPatient()
    }

    async getPatient() {
        try {
            const { id } = this.props.computedMatch.params
            const response = await ClinicClient.get(`/specialty/${id}`)
            this.setState({ spec: response.data })
            console.log(response.data)
        } catch (error) {
            this.setState({ errors: `Especialidade não localizado${error}` })
        }
    }

    render() {
        return (
            <Formik
                enableReinitialize
                initialValues={{
                    nome: this.state.spec.name,
                }}
                onSubmit={async (espec) => {
                    try {
                        await ClinicClient.put(`/specialty/${this.state.spec.id}`, {
                            name: espec.nome,

                        })
                        window.flash(`Especialidade Alterada com sucesso`, 'success');
                        setTimeout(() => {
                            window.location.href = '/especialidadeList';
                        }, 2000);
                    } catch (e) {
                        console.dir(e)
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



