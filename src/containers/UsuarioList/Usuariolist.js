import React from "react"
import { Table, Glyphicon } from "react-bootstrap"
import "./UsuarioList.css"
import AuthClient from "../../services/authentication/AuthClient"

export default class  UsuarioList extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    AuthClient.get('/users')
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
       <td>{user.userName}</td>
       <td>{user.createdAt}</td>
       <td>{user.updatedAt}</td>
       <td>{this.isAdmin(user.roles)? <Glyphicon glyph="ok" /> : ''}</td>
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
                <th>SobreNome</th>
                <th>Username</th>
                <th>Criado Em</th>
                <th>Atualizado em</th>
                <th>Admin?</th>
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