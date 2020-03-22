import React from 'react';
import {
    Button

} from 'react-bootstrap';

function CampoHorariosDisponivel(props) {
    const times = props.times.filter((t) => t != null)
    function handleClick(e, time) {
        e.preventDefault()
        props.setTime(time)


    }
    function buttonTime(time) {
        return (
            <Button bsStyle="primary" key={time} onClick={(e) => handleClick(e, time)}>{time}</Button>
        )
    }

    return (
        <>
            {times.map(time => buttonTime(time))}
        </>
    );
}

export default CampoHorariosDisponivel;