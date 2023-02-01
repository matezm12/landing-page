import React, { useEffect, useRef, useState } from "react";
import { Box, Stack } from "@mui/material";
import { animations, colors } from "../../styles/theme";
import Dot from "./Dot";
import Frame from "./Frame";
import { frames, FrameProps } from "../../constants/IDE";
import PolywrapBlob1 from "../../public/images/hero/blobs/7.webp";
import PolywrapBlob2 from "../../public/images/hero/blobs/10.webp";
import Image from "next/image";

const IDE = () => {
  const [activeFrame, setActive] = useState<number>(0);
  const [timerRunning, setTimerState] = useState<boolean>(false);

  const [incrementFrame, setIncrementFrame] = useState<NodeJS.Timer>();

  useEffect(() => {
    setTimerState(true);
  }, []);

  useEffect(() => {
    let inc = 0;
    if (timerRunning) {
      let incrementFrame = setInterval(() => {
        setActive(inc % frames.length);
        inc++;
      }, 3000);
      setIncrementFrame(incrementFrame);
    }
    return () => {
      clearInterval(incrementFrame);
      setTimerState(false);
    };
  }, [timerRunning]);

  return (
    <Stack
      spacing={3}
      sx={{ position: "relative" }}
      onClick={() => {
        clearInterval(incrementFrame);
        setTimerState(false);
      }}
    >
      <Box
        component="div"
        sx={{
          position: "absolute",
          width: "40%",
          transform: "rotate(33deg)",
          right: ["-14%", "-17%"],
          top: ["-5%", "-13%"],
        }}
      >
        <Image
          src={PolywrapBlob1}
          alt=""
          style={{
            width: "100%",
            height: "auto",
            ...animations.float,
            animation: `float 11s 0.25s ease-in-out infinite`,
          }}
        />
      </Box>
      <Box
        component="div"
        sx={{
          position: "absolute",
          width: "50%",
          transform: "rotate(-83deg)",
          left: ["-15%", "-20%"],
          bottom: ["-6%", "-20%"],
        }}
      >
        <Image
          src={PolywrapBlob2}
          alt=""
          style={{
            width: "100%",
            height: "auto",
            ...animations.float,
            animation: `float 16s ease-in-out infinite`,
          }}
        />
      </Box>
      <Box
        component="div"
        sx={{
          background: "linear-gradient(180deg, #16183988, #06071a88 70%)",
          backdropFilter: "blur(32px)",
          borderRadius: 4,
          width: "100%",
          border: `2px solid ${colors.iris[500]}`,
          // ...gradientBorderStyles,
          "&:hover": {
            boxShadow: null,
          },
        }}
      >
        {frames.map((_frame, i) => (
          <Frame
            {...frames[activeFrame]}
            active={i === activeFrame}
            timerRunning={timerRunning}
          />
        ))}
      </Box>
      <Stack direction="row" sx={{ justifyContent: "center" }}>
        {frames.map((_frame: FrameProps, i: number) => (
          <Dot
            key={i}
            instance={i}
            active={i === activeFrame}
            setActive={setActive}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default IDE;
