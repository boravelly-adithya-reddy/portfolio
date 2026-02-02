import React, {
    createContext,
    useContext,
    useState,
    useEffect
} from 'react';
import {
    ThemeProvider as MuiThemeProvider,
    createTheme
} from '@mui/material/styles';

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({
    children
}) => {
    const [isDark, setIsDark] = useState(() => {
        const saved = localStorage.getItem('theme');
        if (!saved) return true; // Default to dark theme
        try {
            // Try to parse as JSON (for boolean values)
            const parsed = JSON.parse(saved);
            return typeof parsed === 'boolean' ? parsed : parsed === 'dark';
        } catch {
            // If not valid JSON, check if it's a string value
            return saved === 'dark' || saved === 'true';
        }
    });

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(isDark));
        // Set data-theme on the wrapper, not documentElement to avoid global conflicts
        const wrapper = document.querySelector('.portfolio7-wrapper');
        if (wrapper) {
            wrapper.setAttribute('data-theme', isDark ? 'dark' : 'light');
        }
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    // Create Material UI theme
    const muiTheme = createTheme({
        palette: {
            mode: isDark ? 'dark' : 'light',
            primary: {
                main: '#2563eb',
                light: '#3b82f6',
                dark: '#1d4ed8',
            },
            secondary: {
                main: '#7c3aed',
                light: '#8b5cf6',
                dark: '#6d28d9',
            },
            background: {
                default: isDark ? '#0f172a' : '#ffffff',
                paper: isDark ? '#1e293b' : '#f8fafc',
            },
            text: {
                primary: isDark ? '#f1f5f9' : '#1e293b',
                secondary: isDark ? '#cbd5e1' : '#64748b',
            },
        },
        typography: {
            fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
            h1: {
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 700,
            },
            h2: {
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 600,
            },
            h3: {
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 600,
            },
            h4: {
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 500,
            },
            h5: {
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 500,
            },
            h6: {
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 500,
            },
        },
        shape: {
            borderRadius: 8,
        },
        shadows: [
            'none',
            '0px 1px 2px rgba(0, 0, 0, 0.05)',
            '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
            '0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.06)',
            '0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)',
            '0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)',
            '0px 25px 50px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.04)',
            '0px 30px 60px rgba(0, 0, 0, 0.1), 0px 15px 30px rgba(0, 0, 0, 0.04)',
            '0px 35px 70px rgba(0, 0, 0, 0.1), 0px 20px 40px rgba(0, 0, 0, 0.04)',
            '0px 40px 80px rgba(0, 0, 0, 0.1), 0px 25px 50px rgba(0, 0, 0, 0.04)',
            '0px 45px 90px rgba(0, 0, 0, 0.1), 0px 30px 60px rgba(0, 0, 0, 0.04)',
            '0px 50px 100px rgba(0, 0, 0, 0.1), 0px 35px 70px rgba(0, 0, 0, 0.04)',
            '0px 55px 110px rgba(0, 0, 0, 0.1), 0px 40px 80px rgba(0, 0, 0, 0.04)',
            '0px 60px 120px rgba(0, 0, 0, 0.1), 0px 45px 90px rgba(0, 0, 0, 0.04)',
            '0px 65px 130px rgba(0, 0, 0, 0.1), 0px 50px 100px rgba(0, 0, 0, 0.04)',
            '0px 70px 140px rgba(0, 0, 0, 0.1), 0px 55px 110px rgba(0, 0, 0, 0.04)',
            '0px 75px 150px rgba(0, 0, 0, 0.1), 0px 60px 120px rgba(0, 0, 0, 0.04)',
            '0px 80px 160px rgba(0, 0, 0, 0.1), 0px 65px 130px rgba(0, 0, 0, 0.04)',
            '0px 85px 170px rgba(0, 0, 0, 0.1), 0px 70px 140px rgba(0, 0, 0, 0.04)',
            '0px 90px 180px rgba(0, 0, 0, 0.1), 0px 75px 150px rgba(0, 0, 0, 0.04)',
            '0px 95px 190px rgba(0, 0, 0, 0.1), 0px 80px 160px rgba(0, 0, 0, 0.04)',
            '0px 100px 200px rgba(0, 0, 0, 0.1), 0px 85px 170px rgba(0, 0, 0, 0.04)',
            '0px 105px 210px rgba(0, 0, 0, 0.1), 0px 90px 180px rgba(0, 0, 0, 0.04)',
            '0px 110px 220px rgba(0, 0, 0, 0.1), 0px 95px 190px rgba(0, 0, 0, 0.04)',
            '0px 115px 230px rgba(0, 0, 0, 0.1), 0px 100px 200px rgba(0, 0, 0, 0.04)',
            '0px 120px 240px rgba(0, 0, 0, 0.1), 0px 105px 210px rgba(0, 0, 0, 0.04)',
        ],
    });

    const value = {
        isDark,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={value}>
            <MuiThemeProvider theme={muiTheme}>
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};
