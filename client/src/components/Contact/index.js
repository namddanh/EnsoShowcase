import React from "react";
import {
  ContactContainer,
  FormWrap,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
} from "./ContactElements";

const Contact = () => {
  return (
    <ContactContainer>
      <FormWrap>
        <FormContent>
          <Form action="#">
            <FormH1>Sign in to your account</FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput type="password" required />
            <FormButton type="submit">Submit</FormButton>
          </Form>
        </FormContent>
      </FormWrap>
    </ContactContainer>
  );
};

export default Contact;
