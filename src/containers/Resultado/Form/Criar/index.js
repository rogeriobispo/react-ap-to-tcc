import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Col,
  Navbar
} from 'react-bootstrap';



import { Formik } from 'formik';
import * as Yup from 'yup';
import ClinicaMedica from '../../../layout/clinicaMedica'


import CampoResultado from '../../Fields/CampoResultado'
import CampoExames from '../../Fields/CampoExames'
import CampoImage from '../../Fields/CampoImage'

import BtnReset from '../../../../components/form/BtnReset'
import BtnSubmit from '../../../../components/form/btnSubmit'
import ClinicClient from '../../../../services/Clinic/ClinicClient';

export default class CriarEspecialidade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: "",
      file: null

    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }


  render() {
    return (
      <Formik
        initialValues={{
          exame: '',
          resultado: '',
          image: ''
        }}
        onSubmit={async (result) => {
          try {

            const formData = new FormData()
            formData.append('file', this.state.file)
            const config = {
              headers: {
                'content-type': 'multipart/form-data'
              }
            };

            const image = await ClinicClient.post('/files', formData, config)

            await ClinicClient.put('/exams', {
              image_result: image.data.file.id,
              id: result.exame,
              results: result.resultado,
              finished: true

            })
            const redirectUrl = window.location.href
            window.flash(`Resultado do exame Inserida com sucesso`, 'success');
            setTimeout(() => {
              window.location.href = redirectUrl
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
            exame: Yup.string().required('O Exame é obrigatório'),
            resultado: Yup.string().required('O resultado é obrigatório')

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
              <Navbar fluid collapseOnSelect>
                <ClinicaMedica />
              </Navbar>
              <div className="Home">
                <div className="lander">

                  <span className="mwarning">{this.state.errors}</span>
                  <Form horizontal onSubmit={handleSubmit}>
                    <CampoExames
                      value={values.exame}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errors={errors}
                      touched={touched}
                      apiId={this.props.match.params.id}
                    />
                    <CampoResultado
                      value={values.resultado}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errors={errors}
                      touched={touched}
                      rows="10"
                    />

                    <CampoImage
                      value={values.image}
                      onChange={(e) => { handleChange(e); this.onChange(e) }}
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
            </>
          );
        }}
      </Formik>
    );
  }
}



