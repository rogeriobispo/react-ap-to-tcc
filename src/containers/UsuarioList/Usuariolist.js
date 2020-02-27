import React, { Component } from "react"
import { Link } from "react-router-dom";
import { Table, Glyphicon } from "react-bootstrap"
import "./UsuarioList.css"
import ClinicClient from "../../services/Clinic/ClinicClient"

export default class UsuarioList extends Component {
  state = {
    users: []
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
    else
      return roles.includes('Admin')
  }
  userDetail(user) {
    console.log(user)
    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.created_at}</td>
        <td>{user.updated_at}</td>
        <td>{this.isAdmin(user.roles) ? <Glyphicon glyph="ok" /> : ''}</td>
        <td><Link to={{ pathname: `/usuario/password`, user: user }}> Trocar Senha</Link></td>
      </tr>)
  }
  render() {
    return (

      <div className="Home">
        <div className="lander">
          <Table responsive id="userTableList">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Criado Em</th>
                <th>Atualizado em</th>
                <th>Admin?</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map(user => this.userDetail(user))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}