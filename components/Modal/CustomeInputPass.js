import React, { Component } from "react";
import { AvField } from "availity-reactstrap-validation";
import zxcvbn from "zxcvbn";
import { Label, FormGroup } from "reactstrap";
class CustomInputPass extends Component {
  state = {
    hiddenField: true,
    score: null,
  };
  passwordStrength = this.passwordStrength.bind(this);
  toggleShow = this.toggleShow.bind(this);

  toggleShow() {
    this.setState({ hiddenField: !this.state.hiddenField });
  }

  passwordStrength(e) {
    if (e.target.value === "") {
      this.setState({
        score: null,
      });
    } else {
      let pwscore = zxcvbn(e.target.value);
      this.setState({
        score: pwscore.score,
      });
    }
  }

  render() {
    return (
      <>
        {this.props.showScore === true ? (
          

         <>
            <i
              onClick={this.toggleShow}
              className={
                this.state.hiddenField === true
                  ? "icofont-eye showPass"
                  : "icofont-eye-blocked showPass"
              }
            ></i>
            <AvField
              name={this.props.name}
              validate={this.props.validate}
              type={this.state.hiddenField ? "password" : "text"}
              
              className="showPasswordField"
              id={this.props.id}
              value = {this.props.value}
              placeholder={this.props.placeholder}
              onChange={this.passwordStrength}
            />
            <span
              className="password__strength"
              data-score={this.state.score}
            />
         </>
    
        ) : (
          <>
          <i
              onClick={this.toggleShow}
              className={
                this.state.hiddenField === true
                  ? "icofont-eye showPass"
                  : "icofont-eye-blocked showPass"
              }
            ></i>
            <Label htmlFor={this.props.for}>{this.props.title}</Label>
            <AvField
              name={this.props.name}
              validate={this.props.validate}
              type={this.state.hiddenField ? "password" : "text"}
              className="showPasswordField"
              id={this.props.id}
              placeholder={this.props.placeholder}
            />
          </>
        )}
      </>
    );
  }
}

export default CustomInputPass;
