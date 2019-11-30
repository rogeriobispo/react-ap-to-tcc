import React from "react"
import { Table } from "react-bootstrap"
import "./UsuarioList.css"
// import AuthClient from "../../services/authentication/AuthClient"

export default function UsuarioList() {
  // async function userList() {
  //  const users: [] = await AuthClient.get('/users')
  //  console.log(users)
  // }
  // userList()
  return (
    <div className="Home">
      <div className="lander">
      <Table responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
    </div>
  </div>
  );
  
}