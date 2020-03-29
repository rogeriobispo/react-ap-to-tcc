import React, { useRef, Component } from 'react';
import ReactToPrint from "react-to-print";
import { Button } from 'react-bootstrap'
import ImprimirReceita from '../Fields/imprimirReceita'

// eslint-disable-next-line react/prefer-stateless-function
class ComponentToPrint extends Component {
    render() {
        return (
            <ImprimirReceita apId={this.props.apId} />

        );
    }
}

const Imprimir = (props) => {
    const componentRef = useRef();

    return (
        <div>
            <ComponentToPrint ref={componentRef} apId={props.computedMatch.params.id} />
            <ReactToPrint
                trigger={() => <Button bsStyle="info">Imprimir</Button>}
                content={() => componentRef.current}
            />

        </div>
    );
};

export default Imprimir;