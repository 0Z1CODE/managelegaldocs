import React, { Component } from "react";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Col, Row, Button, Label, FormGroup, Card, CardBody } from "reactstrap";
import Note from './../../services/notifications'

import requests from "../../services/requests";

class LoginForm extends Component {
  state = {
    hiddenField: true,
  };

  toggleShow = () => {
    this.setState({ hiddenField: !this.state.hiddenField });
  };
  handleChange = (el) => {
    const { name, value } = el.currentTarget;
    this.setState({ [name]: value });
  };


  
  loginUser = () => {



    let purchase_id = null;
    if(this.props.purchaseType !== null  || this.props.purchaseType !== undefined) purchase_id = this.props.purchaseType
    requests.LoginUser({
      user: {
        user_email: this.state.email,
        user_password: this.state.password,
      },
      purchase: {
        plan_id: purchase_id,
      }

    }).then(function (response) {
      const {result, data} = response
      if (result) {
        window.location.replace(`http://77.122.140.19:83/auth/${data.auth_hash}`)
      } else {
        Note.isError(data.error_message);
        return false;
      }
    })
    .catch((response) => {  
      Note.isError(response);
      return false;
    });
  
  };
  render() {
    return (
      <>
        <AvForm onValidSubmit={this.loginUser}>
          <Row>
            <Col lg={12} className="mb-3">
              <FormGroup className="form_relative">
                <Label className="cstm_l">E-mail:</Label>
                <AvField
                  name="email"
                  type="email"
                  validate={{ required: true, email: true }}
                  className="cstm_i"
                  onChange={this.handleChange}
                ></AvField>
              </FormGroup>
            </Col>
            <Col lg={12} className="mb-3">
              <FormGroup className="form_relative">
                <span className="forgot_pass"> Forgot Password? </span>
                <i
                  onClick={this.toggleShow}
                  className={
                    this.state.hiddenField === true
                      ? "icofont-eye showPass"
                      : "icofont-eye-blocked showPass"
                  }
                ></i>
                <Label className="cstm_l">Password</Label>
                <AvField
                  name="password"
                  type={this.state.hiddenField ? "password" : "text"}
                  className="cstm_i"
                  onChange={this.handleChange}
                  validate={{
                    required: true,
                    minLength: {
                      value: 6,
                      errorMessage: "Password cannot be less than 6 characters",
                    },
                  }}
                ></AvField>
              </FormGroup>
            </Col>
            <Col lg={12} className="">
              <Button className="form-btn w-100" type="submit">
                Sign In
              </Button>
            </Col>
          </Row>
        </AvForm>
        <div className="new_user mt-5 col-lg-4 offset-8">
          <Card className="custome_card">
            <CardBody className="d-flex  justify-content-between">
              <h6 className="text-normal">New in Legal Docs?</h6>
              <span
                className="crate_account"
                onClick={this.props.show_modal}
                attr-type="sign_up"
              >
                {" "}
                Create an account
              </span>
            </CardBody>
          </Card>
        </div>
      </>
    );
  }
}

export default LoginForm;
