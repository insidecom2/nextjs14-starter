import React from "react";
import { styled } from "@mui/system";
import { Typography, TypographyProps } from "@mui/material";

const CustomFormLabel = styled((props: TypographyProps) => (
  <Typography
    variant="subtitle1"
    fontWeight={600}
    {...props}
    component="label"
    htmlFor={props.htmlFor}
  />
))(() => ({
  marginBottom: "5px",
  marginTop: "25px",
  display: "block",
}));

export default CustomFormLabel;
