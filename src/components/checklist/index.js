import React from "react";
import styled from "styled-components";

const Criteria = (props) => {
  return <li class={props.check.toString()}> {props.check[1]} </li>;
};

const StyledCriteria = styled(Criteria)`
.false{
  color: red;
}
.true{
  color: green;
}
`

const Checklist = (props) => {
  return (
    <div className={props.className}>
    <ul>
    {props.checks.map((check_i, index)=>{
      return (
        <StyledCriteria check={check_i} />
      )
    })}
    </ul>
    </div>
  )
}


export default Checklist;

///
///
/// prospectve model:
/// class main(){
//  afterMount({
//    setInterval
//    setstate(new pose biz)
//  })
//  }
//  render(){
//    <Checklist
//  }
//
