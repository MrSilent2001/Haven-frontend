// /theme.js
import { DefaultTheme } from 'react-native-paper';

// always use full color codes #333 -> #333333 
const theme3 = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,

    // primary: '#14467C',

    // text: '#14467C',
    // secondary_text_dark: '#333333',
    // secondary_text: '#666666',
    // warning_text: '#D0342C',
    // success_text: '#4CAF50',

    // warning_modal: '#FF7900',
    // warning_border: '#C95E00',

    // success_modal: '#4CAF50',
    // success_border: '#2E7D32',

    // background: '#F8F5EE',
    // background_light: '#FFFFFF',
    // background_dark: '#F4ECD7',
    // background_warning: '#D0342C',

    // border: '#14467C',
    // border_light: '#F8F5EE',
    // border_dark: '#BFD0FC',

    // btn_text: '#FFFFFF',
    // btn: '#F9CC48',
    // btn_danger: '#D0342C',

    // btn_secondary: '#555555',
    // btn_success: '#52B774',

    // link_text: '#14467C',

    // inputfield_background: "#F8F5EE",

    card_background: "#f8f8f8",

    primary: '#47978d',
    text: '#47978d',
    secondary_text_dark: '#b0b0b0',
    secondary_text: '#b0b0b0',
    warning_text: '#47978d',
    success_text: '#47978d',
    warning_modal: '#d7f5f0',
    warning_border: '#b0b0b0',
    success_modal: '#d7f5f0',
    success_border: '#b0b0b0',
    background: '#d7f5f0',
    background_light: '#ffffff',
    background_dark: '#b0b0b0',
    background_warning: '#d7f5f0',
    border: '#47978d',
    border_light: '#d7f5f0',
    border_dark: '#b0b0b0',
    btn_text: '#47978d',
    btn: '#d7f5f0',
    btn_danger: '#47978d',
    btn_secondary: '#b0b0b0',
    btn_success: '#47978d',
    link_text: '#47978d',
    inputfield_background: '#d7f5f0'
  },
  linearGradientColors: {
    container: ['#d7f5f0', '#ffffff'],
    container_2: ['#d7f5f0', '#ffffff'],
    btn_gradient: ['#47978d', '#d7f5f0'],
  }
};

const theme = theme3; // Change themes from here and update App.json if needed

export default theme;
