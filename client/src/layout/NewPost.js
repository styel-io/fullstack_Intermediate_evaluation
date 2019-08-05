import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../actions/post";
import clsx from "clsx";
import { Grid } from "semantic-ui-react";

import "../styles/NewPost.css";

// material stepper
import { makeStyles, withStyles } from "@material-ui/core/styles";

import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import Check from "@material-ui/icons/Check";
import StepLabel from "@material-ui/core/StepLabel";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)"
  },
  active: {
    "& $line": {
      borderColor: "#22b573;"
    }
  },
  completed: {
    "& $line": {
      borderColor: "#22b573;"
    }
  },
  line: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1
  }
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#22b573;",
    display: "flex",
    height: 22,
    alignItems: "center"
  },
  active: {
    color: "#22b573;"
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor"
  },
  completed: {
    color: "#22b573;",
    zIndex: 1,
    fontSize: 18
  }
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool
};

const useStyles = makeStyles(theme => ({
  root: {
    width: "90%"
  },
  button: {
    margin: theme.spacing(1)
  },
  buttonPrimary: {
    margin: theme.spacing(1),
    color: "#22b573"
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

function getSteps() {
  return ["Upload", "Let's Styel", "Text", "Confirm"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return "Upload";
    case 1:
      return "What is an ad group anyways?";
    case 2:
      return "This is the bit I really care about!";
    case 3:
      return "Confirm";
    default:
      return "Unknown step";
  }
}

const NewPost = ({ addPost }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  function isStepOptional(step) {
    return step === 1;
  }

  function isStepSkipped(step) {
    return skipped.has(step);
  }

  function handleNext() {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleSkip() {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  }

  function handleReset() {
    setActiveStep(0);
  }

  return (
    <div className="NewPost_align">
      <div className={classes.root}>
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          connector={<QontoConnector />}
        >
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                // Let's Styel 아래에 해준다.
                <Typography variant="caption">{""}</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel StepIconComponent={QontoStepIcon} {...labelProps}>
                  {label}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>

        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>

              <Grid>
                <Grid.Column width={4} className="NewPost_navBtn">
                  <Button
                    size="large"
                    onClick={handleReset}
                    className={classes.button}
                  >
                    Reset
                  </Button>
                </Grid.Column>
                <Grid.Column width={8} className="NewPost_navBtn" />
                <Grid.Column width={4} className="NewPost_navBtn" />
              </Grid>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>

              <Grid>
                <Grid.Column width={4} className="NewPost_navBtn">
                  <Button
                    size="large"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  {isStepOptional(activeStep) && (
                    <Button
                      size="large"
                      onClick={handleSkip}
                      className={classes.buttonPrimary}
                    >
                      Skip
                    </Button>
                  )}
                </Grid.Column>
                <Grid.Column width={8} className="NewPost_navBtn" />
                <Grid.Column width={4} className="NewPost_navBtn">
                  <Button
                    size="large"
                    onClick={handleNext}
                    className={classes.buttonPrimary}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </Grid.Column>
              </Grid>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

NewPost.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { addPost }
)(NewPost);
