import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
    ],

    theme: {
        extend: {
            colors: {
                primary: '#1C1E53',
                secondary: '#FCD980',
                darkblue: '#282938',
            },
            fontFamily: {
                cairo: ['Cairo', 'sans-serif'],
            },
        },
        plugins: [forms],
    }
};
