import React from 'react';
import { FormControl } from 'react-bootstrap';
import Errors from '../Errors'


function Select(props) {
    return (
        <>
            <FormControl
                id={props.id}
                componentClass="select"
                onChange={props.onChange}
                value={props.value}
                options={props.options}
            >
                {props.items}
            </FormControl>

            <Errors id={props.id} errors={props.errors} touched={props.touched} />
        </>
    );
}

export default Select;