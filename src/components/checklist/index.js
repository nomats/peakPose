import React from "react";
import styled from "styled-components";

const Criteria = props => (
  <li className={props.check[0].toString()}>{props.check[1]}</li>
);

const Checklist = props => (
  <div className={props.className}>
    <div className={props.result && (props.result[0]+"Result")}>
    lol
    </div>
    <ul>
      {props.result &&
        props.result[1].map((check_i, index) => <Criteria check={check_i} />)}
    </ul>
  </div>
);

const StyledChecklist = styled(Checklist)`
font-size: 1.5em;
margin-bottom: 3px;
display: inline-block;
width: 24.9%;
height: 100%;
vertical-align: bottom;
overflow: hidden;

.trueResult{
  height: 20px;
  color: green
}

.falseResult{
  height: 20px;
  color: red;
}

ul {

}

  li {

    padding-top: 25px;
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  }

  li.false {
    list-style-image: url('https://image.flaticon.com/icons/svg/148/148766.svg');

    color: #ff0066;
  }
  li.true {
    list-style-image: url('https://image.flaticon.com/icons/svg/148/148767.svg');
    color: green;
  }
`;

export default StyledChecklist;
