import React from "react";
import { Form, FormGroup, Col, ControlLabel, FormControl, Checkbox, Button} from "react-bootstrap"
import "./UsuarioForm.css";

export default function UsuarioForm() {
  return (
    <div className="Home">
      <div className="lander">
        {/* Inicio form */}
        {/* campo nome */}
        <Form horizontal>
          <FormGroup controlId="formHorizontalName">
            <Col componentClass={ControlLabel} sm={2}>
              Nome
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="Primeiro Nome" />
            </Col>
          </FormGroup>
          {/* fim campo nome */}

          {/* campo Sobrenome */}  
          <FormGroup controlId="formHorizontalLastName">
              <Col componentClass={ControlLabel} sm={2}>
                SobreNome
              </Col>
              <Col sm={10}>
                <FormControl type="text" placeholder="SobreNome" />
              </Col>
          </FormGroup>
          {/* fim campo Sobrenome */}
          
          {/* campo usuário */}  
          <FormGroup controlId="formHorizontalUser">
              <Col componentClass={ControlLabel} sm={2}>
                Usuário
              </Col>
              <Col sm={10}>
                <FormControl type="text" placeholder="Usuário" />
              </Col>
          </FormGroup>
          {/* fim campo usário */}
          {/* inicio Email */}
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Email" />
            </Col>
          </FormGroup>
          {/* fim Email */}

          {/* inicio Password */}
          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Senha
            </Col>
            <Col sm={10}>
              <FormControl type="password" placeholder="Password" />
            </Col>
          </FormGroup>
          {/* fim Password */}
          {/* inicio admin */}
          <FormGroup>
            <Col smOffset={0} sm={20}>
              <Checkbox>Admin?</Checkbox>
            </Col>
          </FormGroup>
          {/* Fim Admin */}
          <FormGroup>
            <Col smOffset={0} sm={0}>
              <Button type="submit" bsStyle="primary" bsSize="large">Salvar</Button> 
              &nbsp;
              <Button type="reset" bsStyle="primary" bsSize="large">Limpar</Button>
            </Col>
          </FormGroup>
        </Form>
        {/* Fim Form */}
    </div>
  </div>
  );
}