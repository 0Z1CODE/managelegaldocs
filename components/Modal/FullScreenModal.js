import React, { Component } from "react";
import { Container, Col, Row, Button } from "reactstrap";
import Image from "next/image";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

class FullScreenModal extends Component {
  state = {};

  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <div className={`FSmodalBody ${this.props.toggleClass}`}>
              <Container>
                <div className="d-flex justify-content-end mt-3 ">
                  <Button
                    className="close_btn"
                    type="button"
                    onClick={() => this.props.close_modal()}
                    attr-type="close"
                  >
                    <i className="icofont-close-line"></i>
                  </Button>
                </div>
                <Row>
                  <Col className="text-center ">
                    <div className="logo">
                      <Image
                        src="/images/logosvg.svg"
                        width="120px"
                        height="70"
                      />
                    </div>
                    <h4 className="sign_text mb-3 mt-3">
                      {this.props.formType === "sign_in" &&
                        " Sign in to manage Legal Docs account"}
                      {this.props.formType === "sign_up" && (
                        <>
                          Welcome to manage Legal Docs! <br />
                          Let’s begin the adventure
                        </>
                      )}
                    </h4>
                  </Col>
                </Row>

                <div className="form_holder">
                  {this.props.formType === "sign_in" && (
                    <>
                      <LoginForm
                        show_modal={this.props.show_modal}
                        purchaseType={this.props.purchaseType}
                      />
                    </>
                  )}

                  {this.props.formType === "sign_up" && (
                    <>
                      <RegisterForm
                        show_modal={this.props.show_modal}
                        purchaseType={this.props.purchaseType}
                        // ip={this.props.ip}
                      />
                    </>
                  )}
                </div>
              </Container>
            </div>
          </Row>
        </Container>
      </>
    );
    //  this.props.toggleClass
  }
}

export default FullScreenModal;
