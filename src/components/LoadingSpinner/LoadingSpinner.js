import React from "react";
import { LoadingSpinnerStyled } from "./styles/Styled";

const LoadingSpinner = () => {
  return (
    <LoadingSpinnerStyled className="lds-spinner">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </LoadingSpinnerStyled>
  );
};

export default LoadingSpinner;
