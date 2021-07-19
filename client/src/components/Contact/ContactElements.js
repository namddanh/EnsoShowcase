import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContactContainer = styled.section`
  height: 100vh;
  // max-height: 1300px;
  position: relative;
  overflow: hidden;
  background: #2f2e2e;
`;

export const MessageDirectiveBox = styled.div`
  background-color: #e34946;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  margin: 0 auto;
  border-radius: 0px;
  color: #fff;
  margin-bottom: 50px;
}
`;

export const MessageDirectiveText = styled.span`
  font-size: 14px;
  padding: 10px 10px;
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;

  @media screen and (max-width: 400px) {
    // padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400px;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

const FormTextStyle = `
  padding: 10px 10px;
  border: solid 1px #fff;
  background: #2f2e2e;
  color: #fff;
  margin-bottom: 5px;

  &:focus-visible {
    outline: -webkit-focus-ring-color auto 0px;
  }

  ::placeholder {
    color: #fff;
    opacity: 0.85; /* Firefox */
  }
  
  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: #fff;
  }

  ::-moz-placeholder { /* Firefox 19+ */
    color: #fff;
  }

  :-ms-input-placeholder { /* IE 10+ */
    color: #fff;
  }

  :-moz-placeholder { /* Firefox 18- */
    color: #fff;
  }
  `;

export const FormInput = styled.input`
  ${FormTextStyle}

  ::placeholder {
    color: ${(props) => props.error};
    opacity: 1; /* Firefox */
  }

  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: ${(props) => props.error};
  }

  ::-moz-placeholder {
    /* Firefox 19+ */
    color: ${(props) => props.error};
  }

  :-ms-input-placeholder {
    /* IE 10+ */
    color: ${(props) => props.error};
  }

  :-moz-placeholder {
    /* Firefox 18- */
    color: ${(props) => props.error};
  }
`;

export const FormTextArea = styled.textarea`
  ${FormTextStyle}
  margin-bottom: 15px;
  resize: none;
`;

export const FormMessageAndButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

export const FormSubmissionMessage = styled.span`
  color: #68b44a;
  padding: 16px 0;
`;

export const FormButton = styled.button`
  background-color: #e34946;
  padding: 16px 0;
  border: none;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  max-width: 200px;

  &:hover {
    background-color: #c1403e;
    color: #efecec;
  }
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;

export const fadeIn = {
  opacity: 1,
  transition: "width 0.5s, height 0.5s, opacity 0.5s 0.5s",
};

export const fadeOut = {
  opacity: 0,
  transition: "width 0.5s 0.5s, height 0.5s 0.5s, opacity 0.5s",
};
