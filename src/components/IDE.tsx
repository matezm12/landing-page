import React from 'react';
import { useState } from "react";
import { Box, makeStyles, styled } from '@material-ui/core';
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";

import { polywrapPalette } from '../theme';
import { CodeSnippet, SPACE_CHARACTER } from "../constants";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: `0 24px 80px rgba(0,0,0,0.25)`,
    borderRadius: 8,
    position: 'relative',
    width: '100%',
  },
  tabs: {
    background: polywrapPalette.secondary[900],
    borderRadius: '8px 8px 0 0',
    overflowX: 'hidden',
  },
  tab: {
    borderRight: `1px solid rgba(255,255,255,0.05)`,
    color: 'rgba(255,255,255,0.5)',
    cursor: 'default',
    padding: `12px 16px`,
    display: 'flex',
    fontSize: 14,
    transition: `background 0.25s ease-in-out`,
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.05)',
      color: 'rgba(255,255,255,0.8)',
      cursor: 'pointer',
    },
    '& img': {
      marginRight: 4,
      opacity: 0.5,
    },
    '&.is-active': {
      backgroundColor: 'rgba(255,255,255,0.05)',
      boxShadow: `inset 0 -2px 0 ${theme.palette.primary.main}`,
      color: 'rgba(255,255,255,0.8)',
      '& img': {
        opacity: 1,
      }
    },
  },
  tabImage: {
    marginRight: 5,
    height: 'fit-content',
    alignSelf: 'center',
  },
  main: {
    background: polywrapPalette.secondary[800],
    borderRadius: '0 0 8px 8px',
    maxHeight: '400px',
    overflowY: 'auto',
    fontSize: 14,
  },
  pre: {
    textAlign: 'left',
    margin: 0,
    padding: 24,
    whiteSpace: 'initial',
  },
  line: {
    color: 'white',
    display: 'table-row',
    fontFamily: `'Space Mono', 'PT Mono', mono`,
    fontSize: 50,
    fontWeight: 500,
  },
  lineNumber: {
    color: 'rgba(255,255,255,0.5)',
    textAlign: 'right',
    display: 'table-cell',
    paddingRight: 16,
    userSelect: 'none',
    opacity: '0.5',
  },
  lineContent: {
    display: 'table-cell',
  },
}));

const Line = styled('div')({
  display: 'table-row',
  fontFamily: `Space Mono, Ubuntu Mono, Courier New`,
});

const LineNo = styled('span')({
  display: 'table-cell',
  textAlign: 'right',
  paddingRight: '1em',
  userSelect: 'none',
  opacity: '0.5',
});

const LineContent = styled('span')({
  display: 'table-cell',
});

export const IDE = (props: {
  snippets: CodeSnippet[];
}) => {
  const classes = useStyles();
  const [activeSnippet, setActiveSnippet] = useState(0);
  const snippets = props.snippets;
  const snippet = snippets[activeSnippet];

  return (
    <Box className={classes.root}>
      {/* Language Tabs */}
      <Box className={classes.tabs} display='flex'>
        {snippets.map((snippet, index) => (
          <Box
            key={index}
            data-id={index}
            className={`${classes.tab} ${activeSnippet === index && 'is-active'}`}
            onClick={() => setActiveSnippet(index)}
          >
            <img
              className={classes.tabImage}
              src={`${process.env.PUBLIC_URL}/imgs/file-icons/${snippet.language}.png`}
              alt={snippet.language} />
          </Box>
        ))}
      </Box>

      {/* Code Snippet */}
      <Box className={classes.main}>
        <Highlight {...defaultProps} code={snippet.code} theme={theme} language={snippet.language as Language}>
          {({ tokens, getLineProps, getTokenProps }) => (
            <pre className={classes.pre}>
              {tokens.map((line, i) => (
                <Line key={i} {...getLineProps({ line, key: i })}>
                  <LineNo className={classes.lineNumber}>{i + 1}</LineNo>
                  <LineContent>
                    {line.map((token, key) => {
                      let spaces = token.content.split(SPACE_CHARACTER).length - 1;
                      token.content = token.content.replaceAll(SPACE_CHARACTER, "");
                      return (
                        <div style={{display: "inline", paddingLeft: `${spaces}em` }} >
                          <span key={key} {...getTokenProps({ token, key })} />
                        </div>
                      )
                    })}
                  </LineContent>
                </Line>
              ))}
            </pre>
          )}
        </Highlight>
      </Box>
    </Box>
  );
};
