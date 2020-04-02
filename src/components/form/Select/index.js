import React, { useState } from 'react';
import ReactSelect from 'react-select'
import Errors from '../Errors'


function Select(props) {
    const [selectedValue, setSelectedValue] = useState("");
    const handleValueChange = seleValue => {
        setSelectedValue(seleValue);
    };

    return (
        <>
            <ReactSelect
                id={props.id}
                componentClass="select"
                name={props.name}
                onChange={selectedOption => { handleValueChange(selectedOption); props.handleChange(String(selectedOption.value)) }}
                value={selectedValue}
                options={props.items}
            />

            <Errors id={props.id} errors={props.errors} touched={props.touched} />
        </>
    );
}

export default Select;