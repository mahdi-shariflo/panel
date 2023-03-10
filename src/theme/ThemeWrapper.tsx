import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { getLangDir, isRtlLang } from "rtl-detect";
import { faIR, enUS } from "@mui/material/locale";
import { CacheProvider } from "@emotion/react";
import { EmotionCache } from "@emotion/cache";

declare module "@mui/material/styles" {
    interface BreakpointOverrides {
        xxl: true;
    }
}

const createThemeByLocale = (locale = "fa") => {
    const isRTL = isRtlLang(locale);
    return createTheme(
        {
            direction: getLangDir(locale),
            typography: {
                fontFamily: isRTL
                    ? "IRANSansWeb, sans-serif"
                    : "Poppins, sans-serif",
            },
            palette: {
                primary: {
                    main: "#02326d",
                },
                secondary: {
                    main: "#fb8500",
                    contrastText: "#ffffff",
                },
            },
            breakpoints: {
                values: {
                    xs: 0,
                    sm: 576,
                    md: 768,
                    lg: 992,
                    xl: 1200,
                    xxl: 1500,
                },
            },
        },
        isRTL ? faIR : enUS
    );
};

interface ThemeWrapperProps {
    children?: React.ReactNode;
    locale?: string;
    emotionCache: EmotionCache;
}

const ThemeWrapper = ({
    emotionCache,
    children,
    locale = "fa",
}: ThemeWrapperProps) => {
    const theme = createThemeByLocale(locale);
    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </CacheProvider>
    );
};

export default ThemeWrapper;
