import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Collapse, ListGroup, ListGroupItem } from 'react-bootstrap';
import { PageFooter } from './PageFooter.js';
import { MainNavigation } from './MainNavigation.js';
import { TimerPage } from './TimerPage.js';
import Scroll from 'react-scroll';
import Helmet from 'react-helmet';
import CircleTimer from 'circle-timer';
import { Link } from 'react-router';

const Element = Scroll.Element;
const ScrollableLink = Scroll.Link;

class LandingPageRaw extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  componentDidMount() {
    console.log('-- props', this.props.heroes);
  }

  componentDidUpdate() {
    console.log('--- props updated', this.props.heroes);
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
                        <ScrollableLink
                          onClick={() => {console.log('clicked');this.setState({open: !this.state.open});}}
                          className="btn btn-primary btn-xl"
                          spy={true} smooth={true} duration={500} to="timer">
                        GET STARTED!
                        </ScrollableLink>
                    </div>
                </div>
            </header>

            <Element className="section-wrapper" name="timer">
              <TimerPage />
            </Element>

            {/* <PageFooter/> */}

        </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    heroes: state.heroes
  };
}

export const LandingPage = connect(
  mapStateToProps
)(LandingPageRaw);
