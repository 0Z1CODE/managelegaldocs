import React, { Component } from "react";
import {
  AvForm,
  AvField,
  AvCheckboxGroup,
  AvCheckbox,
} from "availity-reactstrap-validation";
import {
  Col,
  Row,
  Button,
  Label,
  FormGroup,
  CustomInput,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import requests from "../../services/requests";
import Note from "./../../services/notifications";

class RegisterForm extends Component {
  state = {
    modal: false,
  };
  handleChange = (el) => {
    const { name, value } = el.currentTarget;
    this.setState({ [name]: value });
  };

  changeForm = () => {};

  switch_modal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  registerGlobal = () => {
    let purchase_id = null;
    if (
      this.props.purchaseType !== null ||
      this.props.purchaseType !== undefined
    ) {
      purchase_id = this.props.purchaseType;
    }
    requests.RegisterGlobal({
        user: {
          user_name: this.state.first_name + " " + this.state.last_name,
          user_email: this.state.email,
          user_password: this.state.password,
          user_phone: this.state.phone,
        },
        office: {
          office_name: this.state.office_name,
            street_address: this.state.street_address,
            city: this.state.city,
            state: this.state.state,
            postal_code: this.state.postal_code,
           
        },
        purchase: {
          plan_id: purchase_id,

        }
      })
      .then( (response) => {
        const { result, data } = response;
        if (result) {
          Note.isSuck("Registration completed successfully")
          setTimeout(() => this.props.show_modal({ modalType: "sign_in" }), 2000);
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
        <AvForm onValidSubmit={this.registerGlobal}>
          <Row>
            <h6 className="text-normal color-white">User Information</h6>
            <Col lg={6} className="mb-3">
              <FormGroup className="form_relative">
                <Label className="cstm_l">First Name</Label>
                <AvField
                  name="first_name"
                  type="text"
                  className="cstm_i cstm_i--small"
                  onChange={this.handleChange}
                  validate={{
                    required: {
                      value: true,
                      errorMessage: "Please enter a First name",
                    },
                  }}
                ></AvField>
              </FormGroup>
            </Col>
            <Col lg={6} className=" mb-3">
              <FormGroup className="form_relative">
                <Label className="cstm_l">Last Name</Label>
                <AvField
                  name="last_name"
                  type="text"
                  className="cstm_i cstm_i--small"
                  onChange={this.handleChange}
                  validate={{
                    required: {
                      value: true,
                      errorMessage: "Please enter a Last name",
                    },
                  }}
                ></AvField>
              </FormGroup>
            </Col>
            <Col lg={6} className=" mb-3">
              <FormGroup className="form_relative">
                <Label className="cstm_l">E-mail</Label>
                <AvField
                  name="email"
                  type="text"
                  className="cstm_i cstm_i--small"
                  onChange={this.handleChange}
                  validate={{
                    required: {
                      value: true,
                      errorMessage: "Please enter a valid Email",
                    },
                    maxLength: {
                      value: 100,
                      errorMessage:
                        "Your Email must be less then 100 characters",
                    },
                  }}
                ></AvField>
              </FormGroup>
            </Col>
            <Col lg={6} className=" mb-3">
              <FormGroup className="form_relative">
                <Label className="cstm_l">Phone</Label>
                <AvField
                  name="phone"
                  type="text"
                  className="cstm_i cstm_i--small"
                  onChange={this.handleChange}
                  validate={{
                    required: {
                      value: true,
                    },
                    tel: {
                      value: true,
                      errorMessage: "Please enter a valid Phone",
                    },
                  }}
                ></AvField>
              </FormGroup>
            </Col>
            <Col lg={6} className="mb-3">
              <FormGroup className="form_relative">
                <Label className="cstm_l">Password</Label>
                <AvField
                  name="password"
                  type="password"
                  className="cstm_i cstm_i--small"
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
            <Col lg={6} className=" mb-3">
              <FormGroup className="form_relative">
                <Label className="cstm_l">Repeat Password</Label>
                <AvField
                  name="retry_password"
                  type="password"
                  className="cstm_i cstm_i--small"
                  onChange={this.handleChange}
                  validate={{
                    required: true,
                    minLength: {
                      value: 6,
                      errorMessage: "Password cannot be less than 6 characters",
                    },
                    match: {
                      value: "password",
                      errorMessage: "Password missmatch",
                    },
                  }}
                ></AvField>
              </FormGroup>
            </Col>
          </Row>
          <Row className="mt-3">
            <h6 className="text-normal color-white">Office information</h6>
            <Col lg={12} className=" mb-3">
              <FormGroup className="form_relative">
                <Label className="cstm_l">Office Name</Label>
                <AvField
                  name="office_name"
                  type="text"
                  className="cstm_i cstm_i--small"
                  validate={{
                    required: {
                      value: true,
                      errorMessage: "Please enter Office name",
                    },
                    maxLength: {
                      value: 45,
                      errorMessage:
                        "Office name must be less then 45 characters",
                    },
                  }}
                  onChange={this.handleChange}
                ></AvField>
              </FormGroup>
            </Col>

            <Col lg={6} className=" mb-3">
              <FormGroup className="form_relative">
                <Label className="cstm_l">Address </Label>
                <AvField
                  name="street_address"
                  type="text"
                  className="cstm_i cstm_i--small"
                  validate={{
                    required: {
                      value: true,
                      errorMessage: "Please enter Address name",
                    },
                    maxLength: {
                      value: 100,
                      errorMessage: "City  must be less then 100 characters",
                    },
                  }}
                  onChange={this.handleChange}
                ></AvField>
              </FormGroup>
            </Col>
            <Col lg={6} className=" mb-3">
              <FormGroup className="form_relative">
                <Label className="cstm_l">City </Label>
                <AvField
                  name="city"
                  type="text"
                  className="cstm_i cstm_i--small"
                  validate={{
                    required: {
                      value: true,
                      errorMessage: "Please enter City name",
                    },
                    maxLength: {
                      value: 45,
                      errorMessage: "City  must be less then 45 characters",
                    },
                  }}
                  onChange={this.handleChange}
                ></AvField>
              </FormGroup>
            </Col>
            <Col lg={6} className=" mb-3">
              <FormGroup className="form_relative">
                <Label className="cstm_l">State </Label>
                <AvField
                  name="state"
                  type="text"
                  className="cstm_i cstm_i--small"
                  validate={{
                    required: {
                      value: true,
                      errorMessage: "Please enter State ",
                    },
                    maxLength: {
                      value: 45,
                      errorMessage: "State  must be less then 45 characters",
                    },
                  }}
                  onChange={this.handleChange}
                ></AvField>
              </FormGroup>
            </Col>
            <Col lg={6} className=" mb-3">
              <FormGroup className="form_relative">
                <Label className="cstm_l">Postal Code </Label>
                <AvField
                  name="postal_code"
                  type="number"
                  className="cstm_i cstm_i--small"
                  validate={{
                    required: {
                      value: true,
                      errorMessage: "Please enter Postal Code",
                    },
                    maxLength: {
                      value: 45,
                      errorMessage:
                        "Postal Code must be less then 45 characters",
                    },
                  }}
                  onChange={this.handleChange}
                ></AvField>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <AvCheckboxGroup
              name="checkboxCustomInputExample"
              required
              className="chbx_custom "
            >
              <AvCheckbox CustomInput value="Agrre" />
              <span onClick={this.switch_modal}>
                I agree with the terms of use
              </span>
            </AvCheckboxGroup>
          </Row>
          <Row>
            <Col lg={12} className="">
              <Button
                className="form-btn w-100"
                type="submit"
                onClick={this.loginUser}
              >
                Sign Up
              </Button>
            </Col>
          </Row>
        </AvForm>

        <Modal
          isOpen={this.state.modal}
          toggle={this.switch_modal}
          autoFocus={true}
          fade={false}
          centered
          size="lg"
        >
          <ModalHeader>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.switch_modal}>Close</Button>{" "}
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default RegisterForm;
