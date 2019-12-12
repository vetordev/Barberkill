import 'rc-time-picker/assets/index.css';

import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import moment from 'moment';
import TimePicker from 'rc-time-picker';

export default function Timer() {

    const format = 'HH:mm';
    useEffect(() => {
        localStorage.setItem('horary', moment().format(format))
    }, [])

    function oi(value) {
        localStorage.setItem('horary', value.format(format))
    }
    const time = <TimePicker defaultValue={moment()} showSecond={false} minuteStep={15} onChange={oi}  />;

    return (
        <div id="timer">
            {time}
        </div>
    )
};
// onChange={event => oi(event.target.value)}
// ReactDom.render(
//   <TimePicker defaultValue={moment()} showSecond={false} minuteStep={15} />
// , document.getElementById('__react-content'));
