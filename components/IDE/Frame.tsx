import React, { useEffect, useState } from "react";
import { alpha, Box, Stack, Typography, useTheme } from "@mui/material";
import { colors, typography } from "../../styles/theme";
import CodeLine from "./CodeLine";
import { languages, FrameProps, LangProps } from "../../constants/IDE";
import { Add } from "@mui/icons-material";
import Image from "next/image";

interface IDEFrameProps extends FrameProps {
  active: boolean;
  timerRunning?: boolean;
}

const Frame = ({ slug, title, langs, active }: IDEFrameProps) => {
  const [activeLangIndex, setActiveLangIndex] = useState<number>(0);
  const activeLang = langs[activeLangIndex];

  const codeLines = activeLang.code.trim().split("\n");

  const maxLines = langs.reduce((acc, value) => {
    const codeLength: number = value.code
      .split("\n")
      .filter((line) => line.length >= 1).length;
    return (acc = acc > codeLength ? acc : codeLength);
  }, 0);

  const theme = useTheme();
  const lineHeight: number = parseInt(theme.spacing(3));

  return (
    <Box component="div" sx={{ display: active ? "block" : "none" }}>
      <Stack
        spacing={2}
        sx={{
          "@keyframes fadeIn": {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 },
          },
          "@keyframes fadeOut": {
            "0%": { opacity: 1 },
            "100%": { opacity: 0 },
          },
          animation: active
            ? "fadeIn 0.5s 0.02s forwards ease-in"
            : "fadeOut 0.5s forwards ease-in",
          opacity: 0,
          p: 3,
        }}
      >
        <Typography fontWeight={600}>{title}</Typography>

        <Stack>
          <Stack direction="row">
            {langs.map((lang: LangProps, i) => {
              const activeLangSlug: LangProps["slug"] = activeLang.slug;
              return (
                <Stack
                  key={i}
                  onClick={() => setActiveLangIndex(i)}
                  direction="row"
                  spacing={1}
                  sx={{
                    alignItems: "center",
                    bgcolor:
                      activeLangSlug === lang.slug
                        ? colors.iris[800]
                        : "transparent",
                    borderBottom: `2px solid`,
                    borderBottomColor:
                      activeLangSlug === lang.slug
                        ? `${colors.iris[500]}`
                        : "transparent",
                    color: alpha(
                      colors.white,
                      activeLangSlug === lang.slug ? 1 : 0.5
                    ),
                    cursor: "pointer",
                    px: 2,
                    py: 1,
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                    "&:hover": {
                      bgcolor:
                        activeLangSlug !== lang.slug ? colors.iris[900] : null,
                      color:
                        activeLangSlug !== lang.slug
                          ? alpha(colors.white, 0.8)
                          : null,
                      "& .lang-icon": {
                        opacity: activeLangSlug !== lang.slug ? 0.8 : null,
                      },
                    },
                  }}
                >
                  <Image
                    className="lang-icon"
                    src={languages[lang.slug].icon}
                    alt={languages[lang.slug].name}
                    style={{
                      height: 16,
                      width: 16,
                      opacity: activeLangSlug === lang.slug ? 1 : 0.5,
                    }}
                  />
                  <Typography sx={{ fontSize: 12 }}>
                    {`${slug}.${lang.slug}`}
                  </Typography>
                </Stack>
              );
            })}
          </Stack>
          <Box
            component="div"
            sx={{
              position: "relative",
              bgcolor: colors.iris[900],
              p: 2,
              borderRadius: 1,
              width: "100%",
            }}
          >
            <Stack
              sx={{
                overflow: "scroll",
                height: "100%",
                minHeight: lineHeight * maxLines,
                width: "100%",
              }}
            >
              {codeLines.map((codeline, i) => {
                const tabCount = codeline.length - codeline.trim().length;

                return (
                  <CodeLine key={i} index={i + 1} tabs={tabCount}>
                    {codeline}
                  </CodeLine>
                );
              })}
            </Stack>
            {/* <Box
              component="div"
              sx={{
                px: 1,
                py: 0.5,
                bgcolor: colors.iris[600],
                borderRadius: 1,
                color: "white",
                fontFamily: typography.fontFamilies.extended,
                fontWeight: 900,
                textTransform: "uppercase",
                lineHeight: 1,
                letterSpacing: 1,
                display: "inline",
                position: "absolute",
                top: theme.spacing(1),
                right: theme.spacing(1),
                fontSize: 10,
              }}
            >
              Query
            </Box> */}
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Frame;
