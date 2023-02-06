import React, { useEffect, useState } from "react";
import { alpha, Box, Stack, Typography, useTheme } from "@mui/material";
import { colors, typography } from "../../styles/theme";
import CodeLine from "./CodeLine";
import { languages, FrameProps, LangProps } from "../../constants/IDE";
import { Add } from "@mui/icons-material";
import Image from "next/image";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import PrismTheme from "./PrismTheme";

interface IDEFrameProps extends FrameProps {
  active: boolean;
  timerRunning?: boolean;
  maxLines: number;
}

const Frame = ({ slug, title, langs, active, maxLines }: IDEFrameProps) => {
  const [activeLangIndex, setActiveLangIndex] = useState<number>(0);
  const activeLang = langs[activeLangIndex];

  // const codeLines = activeLang.code.trim().split("\n");
  const activeLanguageName: Language = languages[activeLang.slug].name;

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
          <Highlight
            {...defaultProps}
            code={activeLang.code}
            theme={PrismTheme}
            language={activeLanguageName}
          >
            {({ tokens, getLineProps, getTokenProps }) => {
              if (tokens[tokens.length - 1][0].empty) {
                tokens.pop();
              }
              return (
                <Box
                  component="pre"
                  sx={{
                    position: "relative",
                    bgcolor: colors.iris[900],
                    p: 2,
                    borderRadius: 1,
                    borderTopLeftRadius: 0,
                    my: 0,
                    width: "100%",
                  }}
                >
                  <Box
                    component="div"
                    sx={{
                      overflow: "scroll",
                      height: "100%",
                      minHeight: lineHeight * maxLines,
                      width: "100%",
                    }}
                  >
                    {tokens.map((line, i) => {
                      return (
                        <Box
                          component="div"
                          {...getLineProps({ line, key: i })}
                        >
                          <Box
                            component="div"
                            sx={{
                              display: "table-row",
                              fontFamily: typography.fontFamilies.monospace,
                            }}
                          >
                            <Box
                              component="span"
                              sx={{
                                display: "table-cell",
                                textAlign: "right",
                                paddingRight: "1.5em",
                                minWidth: "2.75em",
                                userSelect: "none",
                                opacity: "0.3",
                              }}
                            >
                              {i + 1}
                            </Box>
                            <Box
                              component="span"
                              sx={{ display: "table-cell" }}
                            >
                              {line.map((token, key) => {
                                return (
                                  <Box
                                    component="span"
                                    {...getTokenProps({ token, key })}
                                  />
                                );
                              })}
                            </Box>
                          </Box>
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
              );
            }}
          </Highlight>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Frame;
