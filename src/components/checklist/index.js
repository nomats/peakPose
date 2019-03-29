import React from "react";
import styled from "styled-components";

const Criteria = props => (
  <li className={props.check[0].toString()}>
    <i class="material-icons">
      {props.check[0] ? "check_circle" : "highlight_off"}
    </i>
    {props.check[1]}
  </li>
);

const Checklist = props => (
  <div className={props.className}>

    <div className={props.result ? (props.result[0]+"Result") : "noResult"}>
      <div className="topBuffer"></div>
      <div className="sunIcon"><img src="sun.png" alt="Sun"/></div>
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
  letter-spacking: 3px;
  position: relative;
  color: #47EF8B;
  height: 33%;
}

.noResult {
  letter-spacking: 3px;
  position: relative;
  height: 33%;
}

.falseResult{
  letter-spacking: 3px;
  position: relative;
  color: #F43F3F;
  height: 33%;
}

.moveName {
  letter-spacking: 3px;
  font-size: 1.5em;
}

.listHolder {
  text-align: left;
  height: 50%;
}

  li {
    font-size: 0.9em;
    padding-top: 25px;
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
    list-style: none;
  }

  li.false {
    color: #F43F3F;
  }
  li.true {
    color: #47EF8B;
  }

  i {
    margin-right: 10px;
    font-size: 80%;
    font-size: 200%;
    vertical-align: middle;
  }
`;

export default StyledChecklist;
