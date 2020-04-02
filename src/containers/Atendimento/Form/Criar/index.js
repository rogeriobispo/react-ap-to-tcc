
import React, { Component } from 'react';

import {
  Form,
  FormGroup,
  Col,
} from 'react-bootstrap';

import { Formik } from 'formik';
import * as Yup from 'yup';

import TipoAtendimento from '../../Fields/TipoAtendimento'
import CampoDescricao from '../../Fields/CampoDescription'
import CampoMedicamento from '../../Fields/CampoMedicamentos'
import MedicamentosList from '../../Fields/MedicementosList'

import BtnSubmit from '../../../../components/form/btnSubmit'
import ClinicClient from '../../../../services/Clinic/ClinicClient';

export default class CriarAtendimento extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: "",
      medicamentos: []
    }
    this.setMedicamento = this.setMedicamento.bind(this)
  }

  setMedicamento(medicamentos) {
    this.setState({ medicamentos: [medicamentos, ...this.state.medicamentos] })
  }

  render() {

    return (
      <Formik
        initialValues={{
          tipo: '',
          descricao: '',

        }}
        onSubmit={async (atendimento) => {

          try {
            const { medicamentos } = this.state
            const apId = this.props.computedMatch.params.id
            ClinicClient.put(`/appointments/${apId}`, {
              type: atendimento.tipo,
              description: atendimento.descricao,
              status: true,
              prescription: medicamentos.length > 0
            })

            medicamentos.map((m) => {
              ClinicClient.post(`/appointments/${apId}/medicine/${m.id}`)
              return null
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
            descricao: Yup.string()
              .min(3, 'Descriçõa menor que 3 caracteres')
              .required('Descrição é Obrigatório'),
            tipo: Yup.string().required('Tipo de atendimento é obrigatório')
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
                  <TipoAtendimento
                    setFieldValue={setFieldValue}
                    errors={errors}
                    touched={touched}
                  />

                  <hr />

                  <CampoDescricao
                    value={values.nome}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                    rows="7"
                  />

                  <CampoMedicamento
                    value={values.paciente}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                    setMedicamentos={this.setMedicamento}
                    medicamentos={this.state.medicamentos}

                  />
                  <MedicamentosList
                    medicamentos={this.state.medicamentos}
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



