
import React, { Component } from 'react';
import {
    Form,
    FormGroup,
    Col,
    Breadcrumb
} from 'react-bootstrap';


import { Formik } from 'formik';
import * as Yup from 'yup';


import CampoMedicamento from '../../Fields/CampoMedicamento'
import CampoFabricante from '../../Fields/CampoFabricante'

import BtnReset from '../../../../components/form/BtnReset'
import BtnSubmit from '../../../../components/form/btnSubmit'
import ClinicClient from '../../../../services/Clinic/ClinicClient';

export default class EditarMedicamento extends Component {
    constructor(props) {
        super(props);
        this.state = {
            medicamento: "",
            errors: ""
        }
    }

    componentDidMount() {
        this.getMedicamento()
    }

    async getMedicamento() {
        try {
            const { id } = this.props.computedMatch.params
            const response = await ClinicClient.get(`/medicines/${id}`)
            this.setState({ medicamento: response.data })
        } catch (error) {
            this.setState({ errors: `Medicamento não localizado${error}` })
        }
    }

    render() {
        return (
            <Formik
                enableReinitialize
                initialValues={{
                    nome: this.state.medicamento.name,
                    fabricante: this.state.medicamento.factory
                }}
                onSubmit={async (medicine) => {
                    try {
                        await ClinicClient.put(`/medicines/${this.state.medicamento.id}`, {
                            name: medicine.nome,
                            factory: medicine.fabricante

                        })

                        window.flash(`Medicamento Alterado com sucesso`, 'success');
                        setTimeout(() => {
                            window.location.href = '/medicamentoList';
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
                            .min(3, 'Medicamento menor que 3 caracteres')
                            .required('Medicamento é Obrigatório'),
                        fabricante: Yup.string()
                            .min(3, 'Fabricante menor que 3 caracteres')
                            .required('Fabricante é Obrigatório'),
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
                        <>
                            <Breadcrumb>
                                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    Medicametos
                                </Breadcrumb.Item>
                                <Breadcrumb.Item active>Editar</Breadcrumb.Item>
                            </Breadcrumb>
                            <div className="lander">

                                <span className="mwarning">{this.state.errors}</span>
                                <Form horizontal onSubmit={handleSubmit}>
                                    <CampoMedicamento
                                        value={values.nome}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        errors={errors}
                                        touched={touched}
                                    />

                                    <CampoFabricante
                                        value={values.fabricante}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        errors={errors}
                                        touched={touched}
                                    />

                                    <FormGroup>
                                        <Col smOffset={6} sm={0}>
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
                        </>
                    );
                }}
            </Formik>
        );
    }
}



