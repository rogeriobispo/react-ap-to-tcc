import React, { useRef, Component } from 'react';
import ReactToPrint from "react-to-print";
import { Button } from 'react-bootstrap'
import ImprimirGuia from '../Field/imprimirGuia'

// eslint-disable-next-line react/prefer-stateless-function
class ComponentToPrint extends Component {
    render() {
        return (
            <ImprimirGuia apId={this.props.apId} />

        );
    }
}

const Imprimir = (props) => {
    const componentRef = useRef();

    return (
        <div>
            <hr />
            <ReactToPrint
                trigger={() => <Button bsStyle="info">Imprimir</Button>}
                content={() => componentRef.current}
            />
            <hr />
            <ComponentToPrint ref={componentRef} apId={props.computedMatch.params.id} />

        </div>
    );
};

export default Imprimir;