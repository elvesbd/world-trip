import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    highlight: '#FFBA08',
    dark: {
      gray: {
        '700': '#47585B',
        '500': '#999999',
      },
    },
    light: {
      gray: {
        '300': '#DADADA',
        '100': '#F5F8FA',
      },
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'dark.gray.700',
      },
    },
  },
});
