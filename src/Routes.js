import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PrivateRoute from "./containers/privateRoute/privateRoute";

import Home from './containers/Home/Home';

import CriarUsuario from './containers/Usuario/Form/Criar'
import EditarUsuario from './containers/Usuario/Form/Editar'
import UsuarioList from "./containers/Usuario/List"

import MedicoList from "./containers/Medico/List"

import CriarPaciente from './containers/Paciente/Form/Criar'
import PacienteList from './containers/Paciente/List'
import EditarPaciente from './containers/Paciente/Form/Editar'

import CriarEspecialidade from './containers/Especialidade/Form/Criar'
import EditarEspecialidade from './containers/Especialidade/Form/Editar'
import EspecialideList from './containers/Especialidade/List'

import CriarMedicamento from './containers/Medicamentos/Form/Criar'
import MedicamentoList from './containers/Medicamentos/List'
import EditarMedicamento from './containers/Medicamentos/Form/Editar'

import CriarAgenda from './containers/Agenda/Criar'
import AgendaList from './containers/Agenda/List'

import Agendamento from './containers/Agendamento/Form/Criar'
import AgendamentoList from './containers/Agendamento/List'
import ReceitaList from './containers/Receitas/List'

import TrocaSenha from './containers/TrocaSenha/TrocaSenha';
import NotFound from "./containers/NotFound/NotFound";
import Logout from './containers/logout/logout';
import Login from './containers/Login/Login';

import AtendimentoList from './containers/Atendimento/List'
import CriarAtendimento from './containers/Atendimento/Form/Criar/index'
import ImprimirReceita from './containers/Receitas/imprimir'

import ExameList from "./containers/Exames/List"
import ExameCriar from './containers/Exames/Form/Criar'
import ImprimirGuia from './containers/Guia/imprimir'
import ExamResult from "./containers/Resultado/Form/Criar"

export default function Routes() {
   return (
      <BrowserRouter>
         <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/logout" exact component={Logout} />
            <Route path="/Atendimento/:id/resultados" exact component={ExamResult} />
            <PrivateRoute exact path="/home" component={Home} />
            <PrivateRoute exact path="/usuario" component={CriarUsuario} />
            <PrivateRoute exact path="/usuario/password" component={TrocaSenha} />
            <PrivateRoute exact path="/usuario/:id" component={EditarUsuario} />
            <PrivateRoute exact path="/usuarioList" component={UsuarioList} />
            <PrivateRoute exact path="/medicoList" component={MedicoList} />
            <PrivateRoute exact path="/paciente" component={CriarPaciente} />
            <PrivateRoute exact path="/paciente/:id" component={EditarPaciente} />
            <PrivateRoute exact path="/pacienteList" component={PacienteList} />
            <PrivateRoute exact path="/especialidade" component={CriarEspecialidade} />
            <PrivateRoute exact path="/especialidadeList" component={EspecialideList} />
            <PrivateRoute exact path="/especialidade/:id" component={EditarEspecialidade} />
            <PrivateRoute exact path="/medicamento" component={CriarMedicamento} />
            <PrivateRoute exact path="/medicamentoList" component={MedicamentoList} />
            <PrivateRoute exact path="/medicamento/:id" component={EditarMedicamento} />
            <PrivateRoute exact path="/criarAgenda" component={CriarAgenda} />
            <PrivateRoute exact path="/agendaList" component={AgendaList} />
            <PrivateRoute exact path="/agendamento" component={Agendamento} />
            <PrivateRoute exact path="/agendamentoList" component={AgendamentoList} />
            <PrivateRoute exact path="/AtendimentoList" component={AtendimentoList} />
            <PrivateRoute exact path="/Atendimento/:id" component={CriarAtendimento} />
            <PrivateRoute exact path="/Atendimento/:id/receita" component={ImprimirReceita} />
            <PrivateRoute exact path="/receitaList" component={ReceitaList} />
            <PrivateRoute exact path="/exameList" component={ExameList} />
            <PrivateRoute exact path="/Atendimento/:id/exame" component={ExameCriar} />
            <PrivateRoute exact path="/Atendimento/:id/guia" component={ImprimirGuia} />
            <PrivateRoute exact path="*" component={NotFound} />
            <Route path="*" component={NotFound} />

         </Switch>
      </BrowserRouter>

   )
}


// function notAutorized(){
//   
// }