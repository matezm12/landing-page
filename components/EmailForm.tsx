import { useState } from "react";
// import ReactGA from "react-ga";
import {
  alpha,
  Box,
  Button,
  Input,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { colors } from "../styles/theme";
import { ArrowForward, Label } from "@mui/icons-material";

export const EmailForm = () => {
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    setIsLoading(true);
    const re =
      /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(email)) {
      setEmailError("Invalid email address...");
      return;
    } else {
      setEmailError("");
    }

    try {
      const result = await fetch(
        "https://us-central1-substackapi.cloudfunctions.net/subscribe",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: email, domain: "blog.polywrap.io" }),
        }
      );

      // ReactGA.event({
      //   category: `Button-${location}`,
      //   action: "Newsletter Sign Up",
      //   label: "Origin Release",
      // });

      const signupSuccess = result.status === 200;

      setSignupSuccess(signupSuccess);
    } catch (e) {
      setEmailError(`Sign-up failed... please let us know through Discord.`);
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <Typography sx={{ color: alpha(colors.white, 0.8), fontSize: 12, mb: 1 }}>
        Subscribe to our newsletter
      </Typography>
      <Box component="div" display="flex" alignItems="center">
        {!signupSuccess ? (
          <>
            <Input
              placeholder="email"
              disableUnderline
              endAdornment={
                <Button
                  type="submit"
                  sx={{
                    borderRadius: 999,
                    background: colors.black,
                    boxShadow: null,
                    height: 36,
                    minWidth: 36,
                    padding: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    "&:hover": {
                      background: colors.black,
                      boxShadow: "none !important",
                    },
                  }}
                >
                  <ArrowForward sx={{ color: "white" }} />
                </Button>
              }
              onChange={(e) => setEmail(e.target.value)}
            />
          </>
        ) : (
          <Box component="div">
            <Typography align="center" color="textPrimary">
              One more step {email}! Check your email and confirm your
              subscription to Polywrap's Newsletter.
            </Typography>
          </Box>
        )}
      </Box>
      {emailError && <Typography>{emailError}</Typography>}
    </form>
  );
};
