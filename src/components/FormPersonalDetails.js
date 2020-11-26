import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Documents" />
          <p>Complete the details below and upload the relevant document.</p>
          <TextField
            hintText="Enter your details"
            floatingLabelText="PAN Card Number"
            onChange={handleChange("pancard")}
            defaultValue={values.pancard}
          />
          <br />
          <TextField
            hintText="Enter your details"
            floatingLabelText="GST Registration Number"
            onChange={handleChange("gst")}
            defaultValue={values.gst}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
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

export default FormPersonalDetails;
