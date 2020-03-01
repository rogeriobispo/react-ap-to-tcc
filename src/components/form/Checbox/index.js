import React from 'react';
import { FormControl } from 'react-bootstrap';

function CheckBox(props) {
    return (
        <>
            {props.title}
            <FormControl
                id={props.id}
                type="checkbox"
                checked={props.value}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </>
    );
}

export default CheckBox;