import React, { Component } from 'react';
import Footer from './components/Footer';
import Row from "./components/Row";
import Col from "./components/Col";
import Hero from './components/Hero';
import Links from './components/Links';
import './App.css';
import posed from 'react-pose';


const Box = posed.div({
  hidden: { opacity: 0},
  visible: { opacity: 1}
});

const Banner = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)' 
  },
  hover: {
    scale: 1.2,
    boxShadow: '0px 20px 30px rgba(120,120,120,0.2)' 
  },
  press: {
    scale: 1.2,
    boxShadow: '0px 10px 20px rgba(0,0,0,0.1)' 
  }
})

class App extends Component {
  state = { isVisble: true };

  componentDidMount() {
  setInterval(() => {
    this.setState({ isVisble: !this.state.isVisble });
  }, 1000);
  }

  render() {
    const { isVisble }= this.state;
    return (
      <div className="App">
        <Banner>
          <Hero backgroundImage="https://i.imgur.com/B22yxVk.jpg">
          <h1>Hi, I'm Viet Vo</h1>
          <h2>Here's some information about me :)</h2>
          </Hero>
        </Banner>
        <header className="App-header">
        <Row>
          <Col size="md-12">
            <p>
              Full Stack Web Developer specializing in MERN Stack programming. Passionate about the Internet of Things and Data <br></br>
              infrastructure with end goal being finding a position as a full time developer. Experienced in JavaScript, Python and HTML. <br></br>
              Driven to provide on time results while still maintaining quality. Exploring AWS tool-set and will prospectively be <br></br>
              AWS Developer Certified.
            </p>
            <h2>
              My current knowledge-base includes:
            </h2>
            <Row>
            <Col size="md-4">
            <ul>
              <li><img src="https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-solid.svg" className="lineLogo" alt="bootstrapLogo"/> Bootstrap</li>
              <li><img src="https://upload.wikimedia.org/wikipedia/commons/d/d2/MongoDB-Logo-5c3a7405a85675366beb3a5ec4c032348c390b3f142f5e6dddf1d78e2df5cb5c.png" className="lineLogo" alt="mongodbLogo"/>MongoDB</li>
              <li><img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/AmazonWebservices_Logo.svg" className="lineLogo" alt="awsLogo"/>AWS Developer Tools</li>
            </ul>
            </Col>
            <Col size="md-4">
            <ul>
              <li><img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" className="lineLogo" alt="htmlLogo"/>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" className="lineLogo" alt="cssLogo"/> 
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" className="lineLogo" alt="javscriptLogo"/>
                  The Web Dev Trinity <br></br>
                  (HTML, CSS, JavaScript)</li>
              <li><img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-white.png" className="lineLogo" alt="nodeLogo"/>Node.js</li>
              <li><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" className="lineLogo" alt="reactLogo"/>React</li>
            </ul>
            </Col>
            <Col size="md-4">
            <ul>
              <li><img src="https://www.mysql.com/common/logos/logo-mysql-170x115.png" className="lineLogo" alt="mysqlLogo"/>MySQL</li>
              <li>Pose for React</li>
              <li>Express</li>
            </ul>
            </Col>
            </Row>
            <p>
              Here's what I feel about what I do 
            </p>
          </Col>
        </Row>
        <Links></Links>
        </header>
        <Box className="box" pose={isVisble ? 'visible' : 'hidden'}>
          <Footer></Footer>
        </Box>
      </div>
    );
  }
}

export default App;
