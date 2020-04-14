import React, { Component } from "react"
import { Breadcrumb, Col, FormControl, ControlLabel } from 'react-bootstrap'
import ClinicClient from "../../../services/Clinic/ClinicClient"
import Tabelas from '../../../components/Tabelas'

export default class MedicoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      doctors: [],
      filter: [],
      consult: ''
    }

    this.searchFilter = this.searchFilter.bind(this)
  }



  async componentDidMount() {
    const response = await ClinicClient.get('/doctors')

    this.setState({ doctors: response.data })
    this.setState({ filter: response.data })
  }

  searchFilter(e) {
    if (e.target.value === '') {
      this.setState({ filter: this.state.doctors })
      return
    }
    const searched = this.state.filter.filter(m => m.name.includes(e.target.value) || m.specialty.name.includes(e.target.value))
    this.setState({ filter: searched })
  }

  tableBody(doctor) {
    return (
      <tr>
        <td>{doctor.name}</td>
        <td>{doctor.specialty.name}</td>
        <td>{doctor.crm}</td>

      </tr>
    )
  }

  tableHead() {
    return (
      <>
        <th>Nome</th>
        <th>Especialidade</th>
        <th>CRM</th>

      </>
    )
  }

  render() {
    return (
      <>
        <Breadcrumb>
          <Breadcrumb.Item href="/Home">Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            Médico
          </Breadcrumb.Item>
          <Breadcrumb.Item active>List</Breadcrumb.Item>
        </Breadcrumb>


        <div className="lander">
          <Col componentClass={ControlLabel} sm={1}>
            Procurar
          </Col>
          <Col sm={5}>
            <FormControl
              type="text"
              value={this.state.consult}
              placeholder="Digite nome/email"
              onChange={(e) => { this.setState({ consult: e.target.value }); this.searchFilter(e) }}
            />
          </Col>
          <Col sm={12}>
            <Tabelas head={this.tableHead()} body={this.state.filter.map(doctor => this.tableBody(doctor))} />
          </Col>
        </div>
      </>
    );
  }
}
