import React, { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import { animations, colors } from "../../styles/theme";
import Dot from "./Dot";
import Frame from "./Frame";
import { frames, FrameProps } from "../../constants/IDE";
import PolywrapBlobYellow from "../../public/images/hero/blobs/7.webp";
import PolywrapBlobMagenta from "../../public/images/hero/blobs/10.webp";
import Image from "next/image";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

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
      }, 12000);
      setIncrementFrame(incrementFrame);
    }
    return () => {
      clearInterval(incrementFrame);
      setTimerState(false);
    };
  }, [timerRunning]);

  const nextFrame = activeFrame === frames.length - 1 ? 0 : activeFrame + 1;
  const prevFrame = activeFrame === 0 ? frames.length - 1 : activeFrame - 1;

  const allLangs: any[] = [];
  frames.map((frame) => {
    frame.langs.map((lang) => {
      allLangs.push(lang);
    });
  });
  const maxLines = allLangs.reduce((acc, value) => {
    const codeLength: number = value.code
      .split("\n")
      .filter((line: any) => line.length >= 1).length;
    return (acc = acc > codeLength ? acc : codeLength);
  }, 0);

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
          src={PolywrapBlobYellow}
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
          left: ["-15%", "-12%"],
          bottom: ["-6%", "-20%"],
        }}
      >
        <Image
          src={PolywrapBlobMagenta}
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
        {frames.map((_frame, i) => {
          return (
            <Frame
              key={i}
              {...frames[activeFrame]}
              maxLines={maxLines + 2}
              active={i === activeFrame}
              timerRunning={timerRunning}
            />
          );
        })}
      </Box>
      <Stack
        direction="row"
        sx={{ alignItems: "center", justifyContent: "space-evenly", zIndex: 1 }}
      >
        <Stack
          onClick={() => setActive(prevFrame)}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            bgcolor: colors.iris[900],
            border: `1px solid ${colors.iris[600]}`,
            p: 1,
            borderRadius: 999,
            transition: "all 0.25s ease-in-out",
            "&:hover": {
              bgcolor: colors.iris[800],
              transform: "scale(1.1)",
            },
          }}
        >
          <ArrowBack />
        </Stack>
        <Stack
          direction="row"
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          {frames.map((_frame: FrameProps, i: number) => (
            <Dot
              key={i}
              instance={i}
              active={i === activeFrame}
              setActive={setActive}
            />
          ))}
        </Stack>
        <Stack
          onClick={() => setActive(nextFrame)}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            bgcolor: colors.iris[900],
            border: `1px solid ${colors.iris[600]}`,
            p: 1,
            borderRadius: 999,
            transition: "all 0.25s ease-in-out",
            "&:hover": {
              bgcolor: colors.iris[800],
              transform: "scale(1.1)",
            },
          }}
        >
          <ArrowForward />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default IDE;
