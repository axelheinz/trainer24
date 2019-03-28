import React, { Component } from "react";
import OfferService from "./OfferService";

import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container
} from "reactstrap";

class CreateCourse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offername: "",
      offertype: "",
      offerdescription: "",
      imageUrl: ""
    };
    this.service = new OfferService();
    console.log(this.props);
    console.log(this.state);
  }

  handleFormSubmit = event => {
    event.preventDefault();

    const { offername, offertype, offerdescription, imageUrl } = this.state;
    const loggedInUser = this.props.userInSession;
    this.service
      .createoffer(
        offername,
        offertype,
        offerdescription,
        imageUrl,
        loggedInUser
      )
      .then(response => {
        this.setState({
          offername: "",
          offertype: "",
          offerdescription: "",
          imageUrl: ""
        });
      })
      .catch(error => {
        console.log(error.response);
        this.setState({ errorMessage: error.response.data.message });
        console.log(error);
      });
  };

  handleFileUpload = e => {
    console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append("imageUrl", e.target.files[0]);

    this.service
      .handleUpload(uploadData)
      .then(response => {
        // console.log("response is: ", response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state
        this.setState({ imageUrl: response.secure_url });
        console.log(this.state);
      })
      .catch(err => {
        console.log("Error while uploading the file: ", err);
      });
  };

  handleChange = event => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Container className="m-5">
        <h2 className="text-center">Create a new offer</h2>
        <p>
          your selection > here add component to search courses from udemy that
          you want to create an offer for
        </p>
        <Form onSubmit={this.handleFormSubmit}>
          <FormGroup row>
            <Label for="offerName" sm={2}>
              Title of your offer
            </Label>
            <Col sm={10}>
              <Input
                onChange={this.handleChange}
                value={this.state.offername}
                type="text"
                name="offername"
                id="offerName"
                placeholder="Title of your offer"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="offerType" sm={2}>
              Type of offer
            </Label>
            <Col sm={10}>
              <Input
                onChange={this.handleChange}
                type="select"
                name="offertype"
                id="offerType"
                value={this.state.offertype}
              >
                {" "}
                <option>Please select</option> />
                <option value="privatelessons">Private lesson</option> />
                <option value="studygroup">Study group</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Select</Label>
          </FormGroup>

          <FormGroup row>
            <Label for="offerDescription" sm={2}>
              Your offer in a nutshell
            </Label>
            <Col sm={10}>
              <Input
                onChange={this.handleChange}
                value={this.state.offerdescription}
                type="textarea"
                name="offerdescription"
                id="offerDescription"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleFile" sm={2}>
              File
            </Label>
            <Col sm={10}>
              <Input
                onChange={this.handleFileUpload}
                type="file"
                name="file"
                id="exampleFile"
              />
              <FormText color="muted">
                This is some placeholder block-level help text for the above
                input. It's a bit lighter and easily wraps to a new line.
              </FormText>
            </Col>
          </FormGroup>
          {/* <FormGroup row>
            <Label for="checkbox2" sm={2}>
              Checkbox
            </Label>
            <Col sm={{ size: 10 }}>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id="checkbox2" /> Check me out
                </Label>
              </FormGroup>
            </Col>
          </FormGroup> */}
          <FormGroup check row>
            <Col className="text-center">
              <Button type="submit" outline color="primary">
                Publish your offer
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Container>
    );
  }
}

export default CreateCourse;
