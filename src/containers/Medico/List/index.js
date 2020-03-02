import React, { Component } from "react"
import { Glyphicon } from "react-bootstrap"
import ClinicClient from "../../../services/Clinic/ClinicClient"
import Tabelas from '../../../components/Tabelas'

export default class MedicoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      doctors: []
    }
  }

  async componentDidMount() {
    const response = await ClinicClient.get('/doctors')

    this.setState({ doctors: response.data })
  }

  tableBody(doctor) {
    return (
      <tr>
        <td>{doctor.name}</td>
        <td>{doctor.specialty.name}</td>
        <td>{doctor.crm}</td>
        <td><Glyphicon glyph='glyphicon glyphicon-eye-open' /></td>
      </tr>
    )
  }

  tableHead() {
    return (
      <>
        <th>Nome</th>
        <th>Especialidade</th>
        <th>CRM</th>
        <th>Detalhes</th>
      </>
    )
  }

  render() {
    return (
      <Tabelas head={this.tableHead()} body={this.state.doctors.map(doctor => this.tableBody(doctor))} />
    );
  }
}
