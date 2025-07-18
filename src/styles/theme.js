// /theme.js
import { DefaultTheme } from 'react-native-paper';

// always use full color codes #333 -> #333333 
const theme3 = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
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
    inputfield_background: '#d7f5f0',
  },
  linearGradientColors: {
    container: ['#d7f5f0', '#ffffff'],
    container_2: ['#d7f5f0', '#ffffff'],
    btn_gradient: ['#47978d', '#d7f5f0'],
  }
};

const theme = theme3; // Change themes from here and update App.json if needed

export default theme;
