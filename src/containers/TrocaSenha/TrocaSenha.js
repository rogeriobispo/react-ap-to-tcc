import React from "react";
import { Form, FormGroup, Col, ControlLabel, FormControl, Tooltip, Button} from "react-bootstrap"
import { Formik } from "formik";
import * as Yup from "yup";

import AuthClient from "../../services/authentication/AuthClient"
import "./TrocaSenha.css";

export default function trocaSenha(props) {
  const user = props.location.user
  const username = user.username
  return (
    
     <Formik
        initialValues={{ password: "", confirmPassword: ""}}
            
        onSubmit={async values => {
        try {
             const userId = user._id
             
              await AuthClient.post(`/users/${userId}/password`, 
              { "password": values.password })
              
               window.flash(`Senha alterada com sucesso`, 'success')
               setTimeout(() => {
                  window.location.href = '/home'
            }, 2000);
            } catch (e) {
              window.flash(`Não foi possivel alterar o password`, 'error')
          }
        }}
        validationSchema={Yup.object().shape({
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
            handleChange,
            handleBlur,
            isSubmitting,
            handleSubmit,
          } = props;
          
          return (
            
             <div className="Home">
                <div className="lander">
                    <span>
                      Trocando senha de: {username} 
                    </span>      
                    <Form horizontal onSubmit={handleSubmit}>
                        {/* inicio Password */}
                            <FormGroup controlId="password">
                              <Col sm={2}>
                              </Col>
                              <Col componentClass={ControlLabel} sm={2}>
                                Senha
                              </Col>
                              <Col sm={4}>
                                <FormControl id="password"
                                            bsSize="large"
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
                              <Col sm={2}>
                              </Col>
                              <Col componentClass={ControlLabel} sm={2}>
                                Confirmação Senha
                              </Col>
                              <Col sm={4}>
                                <FormControl id="confirmPassword"
                                             bsSize="large"
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
                        {/* Inicio botoes */}
                            <FormGroup>
                              <Col smOffset={0} sm={0}>
                                <Button type="submit" bsStyle="primary" bsSize="large" disabled={isSubmitting}>Alterar</Button> 
                              </Col>
                            </FormGroup>
                        {/* fim botoes */}
                    </Form>
                </div>
            </div>
          );
        }
        }
      </Formik>
  );
  
}