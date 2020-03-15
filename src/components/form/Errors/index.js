import React from 'react';
import { Tooltip } from 'react-bootstrap';


function Errors(props) {
    return (

        <>
            {
                props.errors[`${props.id}`] && props.touched[`${props.id}`] && (
                    <Tooltip
                        placement="bottom"
                        className="in"
                        id="tooltip-right"
                    >
                        {props.errors[`${props.id}`]}
                    </Tooltip>
                )
            }
        </>
    );
}

export default Errors;