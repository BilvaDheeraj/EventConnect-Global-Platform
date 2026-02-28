import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    // Read saved theme from localStorage, default to 'dark'
    const [theme, setTheme] = useState(() => {
        try {
            return localStorage.getItem('ef-theme') || 'dark';
        } catch {
            return 'dark';
        }
    });

    // Apply theme to <html> data attribute whenever it changes
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        try {
            localStorage.setItem('ef-theme', theme);
        } catch { }
    }, [theme]);

    const toggleTheme = (newTheme) => {
        setTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
