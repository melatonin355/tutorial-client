import React, { PropTypes } from 'react'
import {Row, Col} from 'react-bootstrap';

export default function SplashContent (props) {
  return (
    <div className="splash-container">
        
        <Row className="jumbotron">
          <Col md={1}></Col>
          <Col md={2} className="panel-left">
            <img src="https://avatars1.githubusercontent.com/u/20851055?v=3&s=200" alt="Scalability Sherpa Logo" className="jumbo-img"/>
          </Col>
          
          <Col md={8} className="panel-right">
            <h1 className="pitch">Learn system architecture with your very own sherpas leading the way</h1>
          </Col>
          <Col md={1}></Col>
        </Row>
        
        <Row className="content inner-container">
          <h1 className="splash-header">You'll learn and build using the following concepts and technologies...</h1>
          <div className="splash-content">
	            
	            <ul className="list-unstyled splash-techs">
	              <li>Intro to Vertical Scaling</li>
	              <li>Intro to Horizontal Scaling</li>
	              <li>Content Delivery Strategies</li>
	              <li>Amazon EC2</li>
	              <li>Amazon S3</li>
	              <li>Docker</li>
	            </ul>
	          
	            <ul className="list-unstyled splash-techs">
	              <li>Vagrant</li>
	              <li>Webtorrents</li>
	              <li>Load Testing</li>
	              <li>MySQL Scaling</li>
	              <li>Amazon RDS</li>
	              <li>Amazon Cloudfront</li>
	            </ul>
	          
	            <ul className="list-unstyled splash-techs">
	              <li>Siege</li>
	              <li>Node Clusters</li>
	              <li>Redis</li>
	              <li>Isolation of Services</li>
	              <li>Microservices</li>
	              <li>Revise, etc.</li>
	            </ul>
	         

          </div>
        </Row>
      </div>
    
  )
}