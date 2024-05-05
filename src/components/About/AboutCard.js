import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rushabh Dabhade </span>
           
            <br />
            <br />
            Experienced Full Stack Web Developer proficient in <span className="purple">ReactJS, Next.js, Flutter, Python,</span> and <span className="purple">MongoDB. </span>
           <br />
           <br />
            A highly skilled <span className="purple">AWS Solutions Architect. </span>
            <br />
            <br />
            Strong problem-solving skills, with knowledge of <span className="purple">Data Structures and Algorithms. </span>
            <br />
            <br />
            Eager to contribute expertise to innovative web projects and stayupdated with industry trends.
          </p>
         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
