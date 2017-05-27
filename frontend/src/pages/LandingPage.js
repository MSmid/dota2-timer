import React, { Component } from 'react';
import { Button, Collapse, ListGroup, ListGroupItem } from 'react-bootstrap';
import { PageFooter } from './PageFooter.js';
import { MainNavigation } from './MainNavigation.js';
import { TimerContainer } from '../components/Timer/TimerWrapper.js';
// import Scroll from 'react-scroll';
import Helmet from 'react-helmet';
import CircleTimer from 'circle-timer';
import { Link } from 'react-router';

export class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  componentDidMount() {

  }

  render() {

    return (

        <div id="main-wrapper">
            <Helmet title="Dota 2 Timer"/>
            {/* <MainNavigation/> */}
            <header>
                <div className="header-content">
                    <div className="header-content-inner">
                        <h1 id="homeHeading" className="text-glow">Dota 2 Timer</h1>
                        <hr className="light"/>
                        <p>Track ultimate's cooldowns and never be suprised again!</p>
                        <Link className="btn btn-primary btn-xl" to="/timer">GET STARTED!</Link>
                    </div>
                </div>
            </header>

            {/* <Element name="timer"> */}
                <section className="bg-primary" id="timer">
                    <TimerContainer />
                </section>
            {/* </Element> */}

            <PageFooter/>

        </div>
    );
  };
}
