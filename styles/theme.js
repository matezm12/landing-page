import { alpha, createTheme } from "@mui/material/styles"
import tokens from "./tokens.json"

export const easings = {
  cubic: "cubic-bezier(0.35, 1.5, 0.65, 1)",
}

export const colors = {
  white: tokens.White[1000].value,
  black: tokens.Primary.Black.value,
  cyan: tokens.Primary.Cyan.value,
  iris: {
    500: tokens.Primary.Iris.value,
    800: "#1E224E",
    900: tokens.Grays[900].value
  },
  magenta: tokens.Primary.Magenta.value,
  yellow: tokens.Primary.Yellow.value,
  green: tokens.Primary.Green.value,
}

export const gradients = {
  "Iris-Black": "linear-gradient(180deg, #06071a 39.58%, #1e2567 100%)",
  "Linear": "linear-gradient(135deg, #05d3fb 0%, #5361f8 14.58%, #d362df 41.15%, #f8ba26 67.19%, #49f128 85.42%, #05d3fb 100%)",
  "Button": "linear-gradient(180deg, #161839 0%, #06071a 100%)",
}

export const gradientBorderStyles = {
  border: `solid 2px transparent`,
  backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), ${gradients.Linear}`,
  backgroundOrigin: "border-box",
  backgroundClip: "content-box, border-box",
  boxShadow: `2px 1000px 1px ${colors.black} inset`,
  "&:hover": {
    boxShadow: `2px 1000px 1px ${colors.iris[900]} inset`
  }
}

const fontFamilies =  {
  extended: ['Colton Display', 'sans-serif'].join(','),
  sans: ['Colton Primary', 'sans-serif'].join(','),
  monospace: ['IBM Plex Mono', 'monospace'].join(','),
}

const fontSizes = {
  1: 8,
  2: 10,
  3: 12,
  4: 14,
  5: 16,
  6: 18,
  7: 20,
  8: 22,
  9: 24,
  10: 28,
  11: 32,
  12: 40,
  13: 48,
  14: 64,
}

const leading = {
  tight: tokens.Tight.value,
  normal: tokens.Normal.value,
  loose: tokens.Loose.value,
  "very-loose": tokens["Very Loose"].value,
}

const letterSpacing = {
  PrimaryHeading: tokens["Primary Heading"].value,
  PrimaryText: tokens["Primary Text"].value,
  UppercaseDisplay: "1vmin",
}

const displayHeadingProps = {
  fontFamily: fontFamilies.extended,
  fontStretch: "expanded",
  letterSpacing: letterSpacing.UppercaseDisplay,
  lineHeight: leading.tight,
}

export const typography = {
  fontFamilies:{...fontFamilies},
  fontSizes: {...fontSizes},
  leading: {...leading},
  letterSpacing: {...letterSpacing},
  display: {
    h1: {
      fontSize: `clamp(7vmin, ${fontSizes[14]}px, 8vmin)`,
      ...displayHeadingProps,
    },
    h2: {
      fontSize: `clamp(6vmin, ${fontSizes[13]}px, 7vmin)`,
      ...displayHeadingProps,
    },
    h3: {
      fontSize: `clamp(5vmin, ${fontSizes[12]}px, 6vmin)`,
      ...displayHeadingProps,
    },
    h4: {
      fontSize: `clamp(4vmin, ${fontSizes[11]}px, 5vmin)`,
      ...displayHeadingProps,
    },
    h5: {
      fontSize: `clamp(3vmin, ${fontSizes[10]}px, 4vmin)`,
      ...displayHeadingProps,
    },
    h6: {
      fontSize: `clamp(2vmin, ${fontSizes[9]}px, 3vmin)`,
      ...displayHeadingProps,
    },
  }
}

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: colors.iris[500],
      dark: alpha(colors.iris[500],0.5)
    },
  },
  typography: {
    fontFamily: fontFamilies.sans,
  },
});


export const theme = createTheme(defaultTheme, {
  ...defaultTheme,
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        html {
          background-color: ${colors.black};
          color: ${colors.white};
          font-family: ${fontFamilies.sans};
        }
        body {
          background-color: ${colors.black};
          color: ${colors.white};
          position: relative;
          font-family: ${fontFamilies.sans};
          font-kerning: auto;
          font-feature-settings: "tnum" on, "zero" on;
        }
        strong {
          letter-spacing: 0;
        }
        a:visited {
          color: ${colors.white};
        }
      `
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          padding: `13px 24px`,
          color: colors.white,
          fontFamily: fontFamilies.extended,
          fontSize: "1rem",
          fontWeight: 800,
          letterSpacing: "0.25vmin",
          lineHeight: 1,
          transitionDuration: "350ms",
          transitionTimingFunction: easings.cubic,
        }
      },
      variants: [
        {
          props: { color: 'primary' },
          style: {
            ...gradientBorderStyles
          }
        },
        {
          props: { color: 'secondary' },
          style: {
            background: colors.iris[900],
            border: `2px solid`,
            borderColor: colors.iris[500],
          }
        },
        {
          props: { size: 'small' },
          style: {
            fontSize: typography.fontSizes[4],
            padding: `9px 16px`
          }
        },
        {
          props: { size: 'large' },
          style: {
            padding: `18px 32px`
          }
        }
      ]
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          color: colors.white,
          height: 48,
          ...gradientBorderStyles
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          color: colors.white,
          height: 48,
          paddingLeft: 16,
          ...gradientBorderStyles,
          "& fieldset": {
            borderRadius: 999,
          }
        },
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          transitionDuration: "350ms",
          transitionTimingFunction: easings.cubic,
          "&:visited": {
            color: colors.iris[600],
          }
        }
      }
    }
  }
})