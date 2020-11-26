import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Contact Information" />
          <p>
            Confirm the following details and hit proceed to continue. To <br />
            revise details, just click on the box and re-type the information.
          </p>
          <TextField
            hintText="Enter your name"
            floatingLabelText="Authorized Person/Signatory"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            hintText="Enter your email"
            floatingLabelText="Authorized Email"
            onChange={handleChange("email")}
            defaultValue={values.email}
          />
          <br />
          <TextField
            hintText="Enter your number"
            floatingLabelText="Authorized Mobile Number"
            onChange={handleChange("number")}
            defaultValue={values.number}
          />
          <br />
          <TextField
            hintText="Enter your address"
            floatingLabelText="Registered Entity's Address"
            onChange={handleChange("address")}
            defaultValue={values.address}
          />
          <br />
          <TextField
            hintText="Enter your state"
            floatingLabelText="State"
            onChange={handleChange("state")}
            defaultValue={values.state}
          />
          <br />
          <RaisedButton
            label="Proceed"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15,
  },
};

export default FormUserDetails;
