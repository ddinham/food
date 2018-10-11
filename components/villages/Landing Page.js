import React from 'react';
import ReactDOM from 'react-dom';

import Header from './neighborhoods/Header.js';
import SectionA from './neighborhoods/Section A.js';
import SectionB from './neighborhoods/Section B.js';
import SectionC from './neighborhoods/Section C.js';
import Footer from './neighborhoods/Footer.js';

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-page">
        <Header messages={false} title={"Chat wtih Meg"} subtitle={"One on one\
        advice on cooking.  Every Sunday."}/>
        <SectionA/>
        <SectionB/>
        <SectionC title={"Chat with Meg"} subtitle={"Lively discussions on meal prep.  Every Sunday."}/>
        <Footer/>
      </div>
    )
  }
}

module.exports = LandingPage;
