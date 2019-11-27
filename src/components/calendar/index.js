import React from 'react'
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
    console.log(value.format('YYYY-MM-DD'))
    this.setState({value})
  }

  onOpenChange = (status) => {
    console.log('open status: ' + status)
  }

  disabledDate = (currentDate, inputValue) => {
    return false
  }

  render() {
    const {onChange, onOpenChange, disabledDate} = this
    return <div id="calendary">
      <Calendar
        onChange={onChange}
        value={this.state.value}
        allowClear={true}
        disabled={false}
        placeholder={'please input date'}
        format={'YYYY-MM-DD'}
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