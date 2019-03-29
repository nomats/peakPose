import React from "react";
import styled from "styled-components";

const Criteria = props => (
  <li className={props.check[0].toString()}>{props.check[1]}</li>
);

const Checklist = props => (
  <div className={props.className}>

    <div className={props.result ? (props.result[0]+"Result") : "noResult"}>
      <div className="topBuffer"></div>
      <div className="sunIcon"><img src="sun.png" /></div>
      <div className="moveName">

        {props.activePose && props.activePose}
      </div>

    </div>
    <div className="listHolder">
      <ul>
        {props.result &&
          props.result[1].map((check_i, index) => <Criteria check={check_i} />)}
      </ul>
    </div>
    <div className="logoholder"><img src="peakpose_logo.png" alt="Logo" /></div>

    <div className="links">
    <a href="https://github.com/nomats/asanaApp">gitHub</a> | <a href="https://github.com/nomats">noMats</a> | asanaWrap
    </div>
  </div>
);

const StyledChecklist = styled(Checklist)`

@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }

text-align: center;
font-size: 1.5em;
margin-bottom: 3px;
display: inline-block;
width: 24.9%;
height: 100%;
vertical-align: bottom;
overflow: hidden;

a {
  color: black;
  text-decoration: none;
}

.logoholder {
  border-radius: 50px 0px 0px 0px;
  background-color: white;
  padding-top: 10px;
  padding-right: 30px;
  text-align: right;
}

.links {
  height: 5%;
  background-color: white;
  padding-right: 47px;
  text-align: right;
  font-size: 0.5em;
}

img {
  width: 67%;
}

.topBuffer {
  height: 50%;
}

.sunIcon {
  left: 22%;
  top: 15%;
  width: 200px;
  position: absolute;
  z-index: 2;
  opacity: 0;
}

.trueResult .sunIcon{
  animation: spin 4s linear infinite;
  z-index: 0;
  opacity: 1;
}

.trueResult{
  position: relative;
  color: green;
  height: 33%;
}

.noResult {
  position: relative;
  height: 33%;
}

.falseResult{
  position: relative;
  color: red;
  height: 33%;
}

.listHolder {
  height: 50%;
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
