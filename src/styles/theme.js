// /theme.js
import { DefaultTheme } from 'react-native-paper';

// always use full color codes #333 -> #333333 
const theme3 = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#14467C',

    text: '#14467C',
    secondary_text_dark: '#333333',
    secondary_text: '#666666',
    warning_text: '#D0342C',
    success_text: '#4CAF50',

    warning_modal: '#FF7900',
    warning_border: '#C95E00',

    success_modal: '#4CAF50',
    success_border: '#2E7D32',

    background: '#F8F5EE',
    background_light: '#FFFFFF',
    background_dark: '#F4ECD7',
    background_warning: '#D0342C',

    border: '#14467C',
    border_light: '#F8F5EE',
    border_dark: '#BFD0FC',

    btn_text: '#FFFFFF',
    btn: '#F9CC48',
    btn_danger: '#D0342C',

    btn_secondary: '#555555',
    btn_success: '#52B774',

    link_text: '#14467C',

    inputfield_background: "#F8F5EE",

    card_background: "#f8f8f8"
  },
  linearGradientColors: {
    container: ['#F8F5EE', '#FFFFFF'],
    container_2: ['#F9CC48', '#F8F5EE'],
    btn_gradient: ['#14467C', '#0F355E'],
  }
};

const theme = theme3; // Change themes from here and update App.json if needed

export default theme;
