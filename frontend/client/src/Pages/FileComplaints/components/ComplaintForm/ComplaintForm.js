import React, { useRef, useState, useEffect } from "react";
import {
  StyledComplaintForm,
  SuccessMessage,
  StyledFormTop,
} from "./ComplaintForm.styled";
import ArrowLeft from "../assets/arrow-left.svg";

const ComplaintForm = ({ handleShowForm }) => {
  const [showSuccess, setShowSuccess] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // eslint-disable-next-line
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    setShowSuccess(true);

    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSuccess(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [showSuccess]);

  return (
    <>
      {showSuccess && (
        <SuccessMessage>Message sent successfully.</SuccessMessage>
      )}
      <StyledFormTop>
        <img
          src={ArrowLeft}
          alt="arrow left"
          height={30}
          onClick={() => {
            handleShowForm();
          }}
          style={{ cursor: "pointer" }}
        />
        <h1>Complaint Form</h1>
      </StyledFormTop>
      <StyledComplaintForm>
        <h3>We are always at your service</h3>
        <p>Kindly complete the form below to enable us address your query</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your name:</label>
          <input
            ref={nameRef}
            type="text"
            id="name"
            placeholder="Enter your name"
            required
          />

          <label htmlor="email">Your email:</label>
          <input
            ref={emailRef}
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="description"> Description:</label>
          <textarea
            ref={messageRef}
            id="description"
            placeholder="Type your message"
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </StyledComplaintForm>
    </>
  );
};

export default ComplaintForm;
