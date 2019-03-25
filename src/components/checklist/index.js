import React from "react";
import styled from "styled-components";

class Checklist extends React.Component {

  constructor(props) {
    super(props);
    this.result = [false,[[true,"arms spaghetti"],[false, "darmsspaghetti"]]];
    this.checks = this.result[1]
  }

  render(){
    return (
      <div className={this.props.className}>
      <ul>
      {this.checks.map((check, index)=>{
        return (
          <li class={check[0].toString()}> {check[1]} </li>
        )
      })}
      </ul>
      </div>
    )
  }

}



const StyledChecklist = styled(Checklist)`
  li.false{
    color: red;
  }
  li.true{
    color: green;
  }
`

export default StyledChecklist;
