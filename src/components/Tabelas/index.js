import React from 'react';
import { Table } from "react-bootstrap"
import './tabelas.css'

function Tabela(props) {
    return (
        <div>
            <Table responsive className='tableList'>
                <thead>
                    <tr>
                        {props.head}
                    </tr>
                </thead>
                <tbody>
                    {props.body}
                </tbody>
            </Table>
        </div>

    );
}

export default Tabela;