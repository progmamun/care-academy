"use client";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label:
      "An investment in knowledge pays the best interest. – Benjamin Franklin",
    imgPath: "https://i.ibb.co/mybvyLD/01.jpg",
  },
  {
    label:
      "Education is the passport to the future, for tomorrow belongs to those who prepare for it today. – Malcolm X",
    imgPath: "https://i.ibb.co/nsbLVng/02.jpg",
  },
  {
    label:
      "Live as if you were to die tomorrow. Learn as if you were to live forever. ― Mahatma Gandhi",
    imgPath: "https://i.ibb.co/Xt4Ygtr/03.jpg",
  },
  {
    label:
      "Education is one thing no one can take away from you. —Elin Nordegren",
    imgPath: "https://i.ibb.co/JvJLK3H/04.png",
  },
  {
    label:
      "Give a man a fish and you feed him for a day; teach a man to fish and you feed him for a lifetime. —Maimonides",
    imgPath: "https://i.ibb.co/Rv7zB5S/05.webp",
  },
  {
    label:
      "Education’s purpose is to replace an empty mind with an open one. – Malcolm Forbes",
    imgPath: "https://i.ibb.co/z8qvbzY/06.webp",
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 1180, flexGrow: 1, mx: "auto" }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 600,
                  display: "block",
                  maxWidth: 1180,
                  overflow: "hidden",
                  width: "100%",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;
