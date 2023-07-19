import { createTheme } from "@mui/material";

export enum FontEnum {
  XS_FONT = "11px",
  SM_FONT = "13px",
  MD_FONT = "15px",
}

export const getTheme = (isDark: boolean, font?: FontEnum) => {
  if (font) {
    if (isDark) {
      const themeFont = createTheme({
        palette: {
          mode: "dark",
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                fontSize: font,
              },
            },
          },
          MuiTypography: {
            styleOverrides: {
              root: {
                fontSize: font,
              },
            },
          },
          MuiTab: {
            styleOverrides: {
              root: {
                fontSize: font,
              },
            },
          },
          MuiFormLabel: {
            styleOverrides: {
              root: {
                fontSize: font,
              },
            },
          },
        },
      });
      return themeFont;
    } else {
      const themeFont = createTheme({
        palette: {
          mode: "light",
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                fontSize: font,
              },
            },
          },
          MuiTypography: {
            styleOverrides: {
              root: {
                fontSize: font,
              },
            },
          },
          MuiTab: {
            styleOverrides: {
              root: {
                fontSize: font,
              },
            },
          },
          MuiFormLabel: {
            styleOverrides: {
              root: {
                fontSize: font,
              },
            },
          },
        },
      });
      return themeFont;
    }
  } else {
    if (isDark) {
      const themeFont = createTheme({
        palette: {
          mode: "dark",
        },
      });
      return themeFont;
    }else{
        const themeFont = createTheme({
            palette: {
              mode: "light",
            },
          });
          return themeFont;
    }
  }
};
