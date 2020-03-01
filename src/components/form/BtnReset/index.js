import React from 'react';
import {
    Button
} from 'react-bootstrap';

function BtnReset(props) {
    return (
        <Button
            type="reset"
            bsStyle="primary"
            bsSize="large"
            onClick={props.onClick}
            disabled={props.disabled}

        >
            {props.title}
        </Button>
    );
}

export default BtnReset;