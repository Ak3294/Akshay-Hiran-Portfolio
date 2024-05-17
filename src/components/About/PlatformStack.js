import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgColorPicker } from "react-icons/cg";
import {
  SiKaggle,
  SiAndroid,
  SiLeetcode,
  SiGeeksforgeeks,
  SiGithub,
  SiGooglecloud,
} from "react-icons/si";

function PlatformStack() {
    const handleAndroid = () => {
        window.location.href = 'https://developers.google.com/profile/u/iAk3294'; // Replace with your desired URL
      };
    const handleLeetcode = () => {
        window.location.href = 'https://leetcode.com/u/akshaykumarhiran2/'; // Replace with your desired URL
      };
    const handleGFG = () => {
        window.location.href = 'https://auth.geeksforgeeks.org/user/akshaykumarhiran2/practice'; // Replace with your desired URL
      };
    const handleKaggle = () => {
        window.location.href = 'https://www.kaggle.com/akshaykumarhiran'; // Replace with your desired URL
      };
    const handleGithub = () => {
        window.location.href = 'https://github.com/Ak3294'; // Replace with your desired URL
      };
    const handleGoogleCloud = () => {
        window.location.href = 'https://www.cloudskillsboost.google/public_profiles/36f04194-068b-4ab8-a819-33734e48f08e'; // Replace with your desired URL
      };
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" onClick={handleAndroid} style={{ cursor: 'pointer' }}>
          <SiAndroid />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={handleLeetcode} style={{ cursor: 'pointer' }}>
        <SiLeetcode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={handleGFG} style={{ cursor: 'pointer' }}>
        <SiGeeksforgeeks  />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={handleKaggle} style={{ cursor: 'pointer' }}>
        <SiKaggle  />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={handleGithub} style={{ cursor: 'pointer' }}>
        <SiGithub  />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={handleGoogleCloud} style={{ cursor: 'pointer' }}>
        <SiGooglecloud  />
      </Col>
    </Row>
  );
}

export default PlatformStack;
