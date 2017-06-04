import React, { Component } from 'react';
import Scroll from 'react-scroll';

const Link = Scroll.Link;

const version = 'Version 1.0.0';
const currentYear = new Date().getFullYear();
const copyright = <span>&copy;</span>;

export class PageFooter extends Component {

    render() {
    return (
      <footer className="bg-primary">
          <div className="container">
              <div className="row legal">
                  <div className="col-lg-12">
                      <a className="footer-brand">Dota 2 Timer</a>
                      <legal className="">{copyright} {currentYear} - {version}</legal>
                  </div>
              </div>
          </div>
      </footer>
    );
  };
}
