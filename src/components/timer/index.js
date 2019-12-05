import 'rc-time-picker/assets/index.css';

import React from 'react';
import ReactDom from 'react-dom';
import moment from 'moment';
import TimePicker from 'rc-time-picker';

export default function Timer() {
    const format = 'hh:mm';
    function oi(value) {
        // console.log()
        // console.log(time.value)
        localStorage.setItem('horary', value.format(format))
    }
    const time = <TimePicker defaultValue={moment()} showSecond={false} minuteStep={15} onChange={oi}  />;

    return (
        <div id="timer">
            {time}
            {/* <button onClick={oi}></button> */}
        </div>
    )
};
// onChange={event => oi(event.target.value)}
// ReactDom.render(
//   <TimePicker defaultValue={moment()} showSecond={false} minuteStep={15} />
// , document.getElementById('__react-content'));
