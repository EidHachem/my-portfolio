import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme();
export const theme = createTheme({
  palette: {
    beige: defaultTheme.palette.augmentColor({
      color: { main: '#eae2b7' },
      name: 'beige',
    }),
    blueCyan: defaultTheme.palette.augmentColor({
      color: { main: '#003049' },
      name: 'blueCyan',
    }),
    darkRed: defaultTheme.palette.augmentColor({
      color: { main: '#5f0f40' },
      name: 'darkRed',
    }),
    orange: defaultTheme.palette.augmentColor({
      color: { main: '#f77f00' },
      name: 'orange',
    }),
    yellowDark: defaultTheme.palette.augmentColor({
      color: { main: '#fcbf49' },
      name: 'yellow',
    }),
  },
});
