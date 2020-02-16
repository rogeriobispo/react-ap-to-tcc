import React, { Component } from "react"
import { Link } from "react-router-dom";
import { Table, Glyphicon } from "react-bootstrap"
import "./UsuarioList.css"
import ClinicClient from "../../services/Clinic/ClinicClient"

export default class  UsuarioList extends Component {
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

  isAdmin(roles){
    return roles.includes('Admin')
  }
  userDetail(user){
    return(
    <tr>
       <td>{user.firstName}</td>
       <td>{user.lastName}</td>
       <td>{user.username}</td>
       <td>{user.createdAt}</td>
       <td>{user.updatedAt}</td>
       <td>{this.isAdmin(user.roles)? <Glyphicon glyph="ok" /> : ''}</td>
    <td>{user.blocked? '' : <Link to={{pathname: `/usuario/password`, user: user  }}> Trocar Senha</Link>}</td>
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
                <th>Sobre nome</th>
                <th>Username</th>
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