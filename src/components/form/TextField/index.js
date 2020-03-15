import React from 'react';
import { FormControl } from 'react-bootstrap';
import Errors from '../Errors'

function TextField(props) {
    // const [value] = useEffect('')
    return (
        <>
            <FormControl
                id={props.id}
                placeholder={props.placeholder}
                type={props.type}
                value={props.value}
                disabled={props.disabled}
                onChange={props.onChange}
                onBlur={props.onBlur}
                className={
                    props.errors[`${props.id}`] && props.touched[`${props.id}`]
                        ? 'text-input error'
                        : 'text-input'
                }
            />

            <Errors id={props.id} errors={props.errors} touched={props.touched} />
        </>
    );
}

export default TextField;
