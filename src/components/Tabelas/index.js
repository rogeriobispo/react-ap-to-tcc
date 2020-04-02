import React from 'react';
import { Table } from "react-bootstrap"

function Tabela(props) {
    return (
        <div>
            <Table responsive striped hover condensed className='tableList'>
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