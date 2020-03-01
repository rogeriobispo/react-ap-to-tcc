import React from 'react';
import {
    Button
} from 'react-bootstrap';

function BtnSubmit(props) {
    return (
        <Button
            type="submit"
            bsStyle="primary"
            bsSize="large"
        >
            {props.title}
        </Button>
    );
}

export default BtnSubmit;