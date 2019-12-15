import React from "react";
import { Form, FormGroup, Col, ControlLabel, FormControl, Tooltip, Button} from "react-bootstrap"

import { Formik } from "formik";
import * as Yup from "yup";

export default function UsuarioForm() {
    return (
      <div className="Home">
        <div className="lander">
       <Formik
          initialValues={{ email: "", nome: "", sobreNome: "", usuario: "", password: "", confirmPassword: "", admin: false}}
          onSubmit={async user => {
            await new Promise(resolve => setTimeout(resolve, 500));
            alert(JSON.stringify(user, null, 2));
          }}
          validationSchema={Yup.object().shape({
            nome: Yup.string()
              .min(3, "Nome menor que 3 caracteres")
              .required("Nome é Obrigatório"),
            sobreNome: Yup.string()
              .min(3, "sobreNome menor que 3 caracteres")
              .required("sobreNome é Obrigatório"),
            usuario: Yup.string()
              .matches(/^[a-z]+\.[a-z]+$/, {
                message:'formato errado exemplo: beltrano.silva',
                excludeEmptyString: true
              })
              .lowercase('Apenas minusculo')
              .required("usuario é Obrigatório"),
            email: Yup.string()
              .email()
              .required("Email Obrigatório"),
            password: Yup.string()
              .min(5, 'Senha deve ser maior que 5')
              .required("password é obrigatório"),
            confirmPassword: Yup.string()
              .min(5, 'Senha deve ser maior que 5')
              .required("password é obrigatório")
              .test('is-true', 'Password divergente', function(confirmPassword){ return this.parent.password === confirmPassword })
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
              handleReset
            } = props;
            return (
              <Form horizontal onSubmit={handleSubmit}>
                {/* campo nome */}
                  <FormGroup controlId="nome">
                    <Col componentClass={ControlLabel} sm={2}>
                      Nome
                    </Col>
                    <Col sm={10}>
                      <FormControl id="nome"
                                   placeholder="Nome"
                                   type="text"
                                   value={values.nome}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   className={
                                     errors.nome && touched.nome
                                       ? "text-input error"
                                       : "text-input"
                      } />
                     {errors.nome && touched.nome && (
                       <Tooltip placement="bottom" className="in" id="tooltip-right">{errors.nome}</Tooltip>
                    )}

                    </Col>
                  </FormGroup>
                  {/* fim campo nome */}
                  {/* campo ultimo nome */}
                  <FormGroup controlId="sobreNome">
                    <Col componentClass={ControlLabel} sm={2}>
                      Sobre Nome
                    </Col>
                    <Col sm={10}>
                      <FormControl id="sobreNome"
                                   placeholder="sobre nome"
                                   type="text"
                                   value={values.sobreNome}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   className={
                                     errors.sobreNome && touched.sobreNome
                                       ? "text-input error"
                                       : "text-input"
                      } />
                     {errors.sobreNome && touched.sobreNome && (
                       <Tooltip placement="bottom" className="in" id="tooltip-right">{errors.sobreNome}</Tooltip>
                    )}

                    </Col>
                  </FormGroup>
                  {/* fim campo Ultimo nome */}
                  {/* campo usuário */}  
                    <FormGroup controlId="usuario">
                        <Col componentClass={ControlLabel} sm={2}>
                          Usuário
                        </Col>
                        <Col sm={10}>
                          <FormControl id="usuario"
                                       placeholder="Usuario"
                                       type="text"
                                       value={values.usuario}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       className={
                                         errors.usuario && touched.usuario
                                           ? "text-input error"
                                           : "text-input"
                      }  />
                       {errors.usuario && touched.usuario && (
                        <Tooltip placement="bottom" className="in" id="tooltip-right">{errors.usuario}</Tooltip>
                      )}
                        </Col>
                    </FormGroup>
                  {/* fim campo usário */}
                  {/* campo email */}  
                  <FormGroup controlId="email">
                        <Col componentClass={ControlLabel} sm={2}>
                          Email
                        </Col>
                        <Col sm={10}>
                          <FormControl id="email"
                                       placeholder="Email"
                                       type="text"
                                       value={values.email}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       className={
                                         errors.email && touched.email
                                           ? "text-input error"
                                           : "text-input"
                                        }  
                          />
                       {errors.email && touched.email && (
                        <Tooltip placement="bottom" className="in" id="tooltip-right">{errors.email}</Tooltip>
                      )}
                        </Col>
                    </FormGroup>
                  {/* fim campo email */}
                      
                  {/* inicio Password */}
                      <FormGroup controlId="password">
                        <Col componentClass={ControlLabel} sm={2}>
                          Senha
                        </Col>
                        <Col sm={10}>
                          <FormControl id="password"
                                       placeholder="senha"
                                       type="password"
                                       value={values.password}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       className={
                                       errors.password && touched.password ? (
                                         'text-input error'
                                       ) : (
                                         'text-input'
                                       )
                          } />
                          {errors.password && touched.password && (
                            <Tooltip placement="bottom" className="in" id="tooltip-right">{errors.password}</Tooltip>
                          )}
                        </Col>
                      </FormGroup>
                  {/* fim Password */}
                   {/* inicio Password2 */}
                   <FormGroup controlId="confirmPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                          Confirmação Senha
                        </Col>
                        <Col sm={10}>
                          <FormControl id="confirmPassword"
                                       placeholder="Confirmar senha"
                                       type="password"
                                       value={values.confirmPassword}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       className={
                                       errors.confirmPassword && touched.confirmPassword ? (
                                         'text-input error'
                                       ) : (
                                         'text-input'
                                       )
                          } />
                          {errors.confirmPassword && touched.confirmPassword && (
                            <Tooltip placement="bottom" className="in" id="tooltip-right">{errors.confirmPassword}</Tooltip>
                          )}
                        </Col>
                      </FormGroup>
                  {/* fim Password */}
                  {/* inicio admin */}
                       <FormGroup controlId="admin">
                        <Col smOffset={0} sm={0}>
                        Admin?
                        <FormControl id="admin"
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
                      <Button type="submit" bsStyle="primary" bsSize="large" disabled={isSubmitting}>Salvar</Button> 
                      &nbsp;
                      <Button type="reset" bsStyle="primary" bsSize="large" onClick={handleReset}
                      disabled={!dirty || isSubmitting} >Limpar</Button>
                    </Col>
                  </FormGroup>
                  {/* fim botoes */}
              </Form>
            );
          }}
        </Formik>
        
        
        </div>
      </div>
    );

}