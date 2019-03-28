import React from "react";
import styled from "styled-components";

const Criteria = props => (
  <li className={props.check[0].toString()}>{props.check[1]}</li>
);

const Checklist = props => (
  <div className={props.className}>
    <div>here goes a logo</div>
    <div className={props.result && (props.result[0]+"Result")}>
    </div>
    <ul>
      {props.result &&
        props.result[1].map((check_i, index) => <Criteria check={check_i} />)}
    </ul>
    <div>
    other links
    </div>
  </div>
);

const StyledChecklist = styled(Checklist)`
text-align: center;
font-size: 1.5em;
margin-bottom: 3px;
display: inline-block;
width: 24.9%;
height: 100%;
vertical-align: bottom;
overflow: hidden;

.trueResult{
  display: inline-block;
  height: 256px;
  width: 256px;
}

.falseResult{
  display: inline-block;
  height: 256px;
  width: 256px;
  background-image: url('https://d1j8pt39hxlh3d.cloudfront.net/uploads/party_face_256_1.gif')
}

ul {
  
}

  li {

    padding-top: 25px;
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  }

  li.false {
    list-style-image: url('https://image.flaticon.com/icons/svg/148/148766.svg');

    color: #cc3d55;
  }
  li.true {
    list-style-image: url('https://image.flaticon.com/icons/svg/148/148767.svg');
    color: #6b9373;
  }
`;

export default StyledChecklist;
