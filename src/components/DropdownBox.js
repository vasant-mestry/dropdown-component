import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import '../DropdownBox.css'

class DropdownBox extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      currentValue: 'Select',
      options : ['a','b','c','d'],
      showOptions: false
    }
  }

  selectValue =(event)=>{
      const {textContent} = event.target;
      this.setState({
        currentValue: textContent,
        showOptions:false
      })
  };

  displayValues =()=>{
    this.setState({showOptions: true })
  }
  render() {
    const {currentValue, options, showOptions} =this.state;

    const optionValue = showOptions ? options.map((option, index)=>{
      return (
        <div className = "search-result"
          key = {index}
          onClick ={this.selectValue}
          onKeyPress ={this.selectValue}
        >
          {option}
        </div>
      );
    })
    :'';
  
    const DropDown = !showOptions ? 'DropDown-collapse':'DropDown-expand';
    return (
      <div className = {`DropDown ${DropDown}`}>
          <div className = "DropDown-current"
            onClick = {this.displayValues}
            onKeyPress = {this.displayValues}>
              {currentValue}
          <i className="fa fa-caret-down 5x"/>
          </div>
          <div className="optionValue">{optionValue}</div>
      </div>
    )
  }
}

export default DropdownBox
