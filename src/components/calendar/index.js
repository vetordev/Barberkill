import React, { useEffect } from 'react'
import ReactDom from 'react-dom'
import moment from 'moment'
import Calendar from 'ciqu-react-calendar'

import './styles.css';
class MyCalendar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: moment()
    }
  }
  
  onChange = (value, inputValue) => {
    localStorage.setItem('date', value.format('DD/MM/YYYY'))
    this.setState({value})
  }
  // onLoad = (value) =
  // onOpenChange = (status) => {
  //   console.log('open status: ' + status)
  // }

  disabledDate = (currentDate, inputValue) => {
    return false
  }

  render() {
    const {onChange, onOpenChange, disabledDate, onLoad} = this
    return <div id="calendary">
      <Calendar
        onLoad={onChange}
        onChange={onChange}
        value={this.state.value}
        allowClear={true}
        disabled={false}
        placeholder={'please input date'}
        format={'DD/MM/YYYY'}
        onOpenChange={onOpenChange}
        disabledDate={disabledDate}
      />
    </div>
  }
}

// ReactDom.render(
//   <MyCalendar/>,
//   document.getElementById('el')
// )


export default MyCalendar;