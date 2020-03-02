import React, { Component } from "react"
import { Link } from "react-router-dom";
import { Glyphicon } from "react-bootstrap"

import "./UsuarioList.css"
import { format } from 'date-fns'
import Tabela from '../../../components/Tabelas'
import ClinicClient from "../../../services/Clinic/ClinicClient"

export default class UsuarioList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    ClinicClient.get('/users')
      .then(res => {
        const users = res.data
        this.setState({ users })
      })
  }

  isAdmin(roles) {
    if (!roles)
      return false
    return roles.includes('Admin')
  }

  tableHead() {
    return (
      <>
        <th>Nome</th>
        <th>Email</th>
        <th>Criado Em</th>
        <th>Detalhes</th>
        <th>Senha</th>
      </>
    )
  }

  tableBody(user) {
    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{format(new Date(user.created_at), 'dd/MM/yyyy')}</td>
        <td><Glyphicon glyph='glyphicon glyphicon-eye-open' /></td>
        <td><Link to={{ pathname: `/usuario/password`, user }}><Glyphicon glyph='glyphicon glyphicon-asterisk' title="Trocar senha" /></Link></td>
      </tr>
    )
  }

  render() {
    return (
      <Tabela head={this.tableHead()} body={this.state.users.map(user => this.tableBody(user))} />

    );
  }
}