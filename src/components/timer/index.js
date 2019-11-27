import 'rc-time-picker/assets/index.css';

import React from 'react';
import ReactDom from 'react-dom';
import moment from 'moment';
import TimePicker from 'rc-time-picker';

const Timer = () => (
    <div id="timer">
    <TimePicker defaultValue={moment()} showSecond={false} minuteStep={15} />
{/* , document.getElementById('__react-content')); */}
    </div>
);

// ReactDom.render(
//   <TimePicker defaultValue={moment()} showSecond={false} minuteStep={15} />
// , document.getElementById('__react-content'));

export default Timer;