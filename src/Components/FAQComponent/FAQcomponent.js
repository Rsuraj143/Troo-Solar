import React from "react";
import "./FAQComponent.css";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";

const FAQcomponent = () => {
  return (
    <section className="troo-da-faq-section" id="troo-da-faq-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sub-txt">
              <span>How We can Help You ?</span>
              <h2>
                Popular Asked Questions From <br />
                Our Clients
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                  What are the financial benefits of solar energy?
                  </Accordion.Header>
                  <Accordion.Body>
                  When you install a solar energy system on your property, you
                    save money on your electricity bills and protect yourself
                    against rising electricity rates in the future. How much you
                    can save depends on the utility rates and solar policies in
                    your area, but going solar is a smart investment regardless
                    of where you live.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                  How solar panels work?
                  </Accordion.Header>
                  <Accordion.Body>
                    When you install a solar energy system on your property, you
                    save money on your electricity bills and protect yourself
                    against rising electricity rates in the future. How much you
                    can save depends on the utility rates and solar policies in
                    your area, but going solar is a smart investment regardless
                    of where you live.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                  Who invented the first solar panel ?
                  </Accordion.Header>
                  <Accordion.Body>
                    When you install a solar energy system on your property, you
                    save money on your electricity bills and protect yourself
                    against rising electricity rates in the future. How much you
                    can save depends on the utility rates and solar policies in
                    your area, but going solar is a smart investment regardless
                    of where you live.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                  How to install solar panels at home ?
                  </Accordion.Header>
                  <Accordion.Body>
                    When you install a solar energy system on your property, you
                    save money on your electricity bills and protect yourself
                    against rising electricity rates in the future. How much you
                    can save depends on the utility rates and solar policies in
                    your area, but going solar is a smart investment regardless
                    of where you live.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                  Which is the best solar panels in Poland ?
                  </Accordion.Header>
                  <Accordion.Body>
                    When you install a solar energy system on your property, you
                    save money on your electricity bills and protect yourself
                    against rising electricity rates in the future. How much you
                    can save depends on the utility rates and solar policies in
                    your area, but going solar is a smart investment regardless
                    of where you live.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="quistions-section">
              <h3>Still Have You Quistions?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus,
                <br /> luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="cll-ss">
              <div className="col-detals">
                <div className="call-deails">
                  <div className="icon-cal">
                    <i className="fa fa-phone" aria-hidden="true"></i>{" "}
                  </div>
                  <div className="cal-te">
                    <Link href="#">
                      <span>Call Us on</span> <strong>+44 123 456 7890</strong>
                    </Link>
                  </div>
                </div>
                <div className="call-deails">
                  <div className="icon-cal">
                    <i className="fa fa-envelope-open" aria-hidden="true"></i>{" "}
                  </div>
                  <div className="cal-te">
                    <Link href="#">
                      <span>Email Us on</span>{" "}
                      <strong>trooenergy@email.com</strong>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQcomponent;
