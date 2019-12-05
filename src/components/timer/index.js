import 'rc-time-picker/assets/index.css';

import React from 'react';
import ReactDom from 'react-dom';
import moment from 'moment';
import TimePicker from 'rc-time-picker';

export default function Timer() {
    function oi(value) {
        alert(value)
    }
    return (
        <div id="timer">
            <TimePicker defaultValue={moment()} showSecond={false} minuteStep={15}/>
        </div>
    )
};
// onChange={event => oi(event.target.value)}
// ReactDom.render(
//   <TimePicker defaultValue={moment()} showSecond={false} minuteStep={15} />
// , document.getElementById('__react-content'));
