import React, { Component } from "react"
import { Table } from "react-bootstrap"
import "./MedicoList.css"
import ClinicClient from "../../services/Clinic/ClinicClient"

export default class MedicoList extends Component {
  state = {
    doctors: []
  }

  async componentDidMount() {
    const x = await ClinicClient.get('/doctors')
    alert(x)
    // .then(res => {
    //   console.log(res)
    //   const doctors = res.data
    //   this.setState({ doctors })
    // })
  }

  userDetail(doctor) {
    return (
      <tr>
        <td>{doctor.name}</td>
        <td>{doctor.specialty}</td>
        <td>{doctor.crm}</td>
      </tr>)
  }
  render() {
    return (

      <div className="Home">
        <div className="lander">
          <Table responsive id="userTableList">
            <thead>
              <tr className="table">
                <th>Nome</th>
                <th>Especialidade</th>
                <th>CRM</th>
              </tr>
            </thead>
            <tbody>
              {this.state.doctors.map(doctor => this.userDetail(doctor))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}