import React, { Component } from "react";
import axios from "axios";
import Joi from "joi-browser";
import {
  MessageDirectiveBox,
  MessageDirectiveText,
  ContactContainer,
  FormWrap,
  FormContent,
  Form,
  // FormH1,
  // FormLabel,
  FormInput,
  FormTextArea,
  FormMessageAndButtonContainer,
  FormSubmissionMessage,
  FormButton,
  fadeIn,
  fadeOut,
} from "./ContactElements";

export default class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    sent: false,
    errors: {},
  };

  schema = {
    name: Joi.string().required().label("Name"),
    email: Joi.string().email().required().label("Email"),
  };

  // handle inputs
  handleName = (e) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(e.target);
    if (errorMessage) errors[e.target.name] = errorMessage;
    else delete errors[e.target.name];

    this.setState({
      name: e.target.value,
      errors,
    });
  };

  handleEmail = (e) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(e.target);
    if (errorMessage) errors[e.target.name] = errorMessage;
    else delete errors[e.target.name];

    this.setState({
      email: e.target.value,
      errors,
    });
  };

  handleMessage = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  // form submit
  formSubmit = (e) => {
    e.preventDefault();

    // Form data
    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };

    // Validation
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    axios
      .post("/api/form", data)
      .then(this.setState({ sent: true }, this.resetForm()))
      .catch(() => {
        console.log("Message not sent");
      });
  };

  // form reset initial data
  resetForm = () => {
    this.setState({
      errors: {},
    });

    setTimeout(() => {
      this.setState({
        name: "",
        email: "",
        message: "",
        sent: false,
      });
    }, 3000);
  };

  validate = () => {
    const options = { abortEarly: false };
    const IDofPerson = { name: this.state.name, email: this.state.email };
    const { error } = Joi.validate(IDofPerson, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  render() {
    const { errors } = this.state;

    return (
      <ContactContainer>
        <FormWrap>
          <MessageDirectiveBox>
            <MessageDirectiveText>
              If you have any questions or inquiries, <br />
              please send us an email at: ​
              <br />
              <br />
              ensoshowcase@gmail.com ​
              <br />
              <br />
              OR give us a shout in handy dandy <br />
              box down below!
            </MessageDirectiveText>
          </MessageDirectiveBox>
          <FormContent>
            <Form onSubmit={this.formSubmit}>
              {/* Name */}
              <FormInput
                type="text"
                name="name"
                placeholder="Name*"
                className="name"
                value={this.state.name}
                onChange={this.handleName}
                error={errors.name && "#e34946"}
              />

              {/* Email */}
              <FormInput
                type="text"
                name="email"
                placeholder="Email*"
                className="email"
                value={this.state.email}
                onChange={this.handleEmail}
                error={errors.email && "#e34946"}
              />

              {/* MessageBox */}
              <FormTextArea
                type="text"
                name="message"
                rows="5"
                placeholder="Message"
                value={this.state.message}
                onChange={this.handleMessage}
              ></FormTextArea>
              <FormMessageAndButtonContainer>
                <FormSubmissionMessage
                  style={this.state.sent ? fadeIn : fadeOut}
                >
                  Thanks! Message sent.
                </FormSubmissionMessage>
                <FormButton type="submit" onClick={this.resetForm}>
                  GET IN TOUCH
                </FormButton>
              </FormMessageAndButtonContainer>
            </Form>
          </FormContent>
        </FormWrap>
      </ContactContainer>
    );
  }
}
