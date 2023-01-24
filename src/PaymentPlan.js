import React from 'react';
import "./PaymentPlan.css"
const PaymentPlan = () => { return(
<div>
  <div className="home-section-separator1"></div>
      <div className="home-pricing">
        <div className="home-heading-container1">
          <h1 className="home-text20">Pricing list</h1>
          <span className="home-text21">
            This is the list of the prices of all our offers.
            Please choose one of our pricing plan to start enjoying all the features 
     as soon as possible
          </span>
       </div>
     </div>
<div className="home-pricing-card-container">
  <AnimationOnScroll animateIn="animate__fadeInLeft"><div className="home-card3">
    <div className="home-card-heading">
      <span className="home-type">Minimal</span>
      <span className="home-price">Basic</span>
    </div>
    <div className="home-card-content">
      <div className="home-feature">
        <span className="Card-Text">Feature one</span>
        <span className="home-limit Card-Text">TBD</span>
      </div>
      <div className="home-feature1">
        <span className="Card-Text">Feature two</span>
        <span className="home-limit1 Card-Text">TBD</span>
      </div>
      <div className="home-feature2">
        <span className="Card-Text">Feature three</span>
        <span className="home-limit2 Card-Text">UNLIMITED</span>
      </div>
      <div className="home-feature3">
        <span className="Card-Text">Feature four</span>
        <span className="home-limit3 Card-Text">UNLIMITED</span>
      </div>
      <button className="home-choose button Anchor">CHOOSE</button>
    </div>
  </div></AnimationOnScroll>
  <AnimationOnScroll animateIn="animate__fadeIn"><div className="home-card4">
    <div className="home-card-heading1">
      <span className="home-type1">medium</span>
      <span className="Section-Heading">Complex</span>
    </div>
    <div className="home-card-content1">
      <div className="home-container16">
        <span className="Card-Text">Feature one</span>
        <span className="home-text23 Card-Text">TBD</span>
      </div>
      <div className="home-container17">
        <span className="Card-Text">Feature two</span>
        <span className="home-text25 Card-Text">TBD</span>
      </div>
      <div className="home-container18">
        <span className="Card-Text">Feature three</span>
        <span className="home-text27 Card-Text">UNLIMITED</span>
      </div>
      <div className="home-container19">
        <span className="Card-Text">Feature four</span>
        <span className="home-text29 Card-Text">UNLIMITED</span>
      </div>
      <button className="home-button2 Anchor button">CHOOSE</button>
    </div>
  </div></AnimationOnScroll>
  <AnimationOnScroll animateIn="animate__fadeInRight"><div className="home-card5">
    <div className="home-card-heading2">
      <span className="home-type2">Premium</span>
      <span className="Section-Heading">Professional</span>
    </div>
    <div className="home-card-content2">
      <div className="home-container20">
        <span className="Card-Text">Feature one</span>
        <span className="home-text31 Card-Text">TBD</span>
      </div>
      <div className="home-container21">
        <span className="Card-Text">Feature two</span>
        <span className="home-text33 Card-Text">TBD</span>
      </div>
      <div className="home-container22">
        <span className="Card-Text">Feature three</span>
        <span className="home-text35 Card-Text">UNLIMITED</span>
      </div>
      <div className="home-container23">
        <span className="Card-Text">Feature four</span>
        <span className="home-text37 Card-Text">UNLIMITED</span>
      </div>
      <button className="home-button3 Anchor button">CHOOSE</button>
    </div>
  </div></AnimationOnScroll>
</div>
</div>);}
export default PaymentPlan;