import { styled } from 'stitches.config';

export const Banner = styled('div', {
  zIndex: '9999',
  boxSizing: 'border-box',
  position: 'relative',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$3',

  variants: {
    size: {
      '1': {
        py: '$2',
        px: '$4',
      },
    },
    variant: {
      loContrast: {
        backgroundColor: '$loContrast',
      },
      gray: {
        backgroundColor: '$slate3',
      },
      lime: {
        backgroundColor: '$lime5',
      },
      blue: {
        backgroundColor: '$blue3',
      },
      green: {
        backgroundColor: '$green3',
      },
      red: {
        backgroundColor: '$red3',
      },
    },
    rounded: {
      true: {
        borderRadius: '$pill',
      },
    },
    border: {
      true: {
        borderRadius: '$pill',
      },
    },
  },
  compoundVariants: [
    {
      border: 'true',
      variant: 'gray',
      css: {
        borderColor: '$slate6',
      },
    },
    {
      border: 'true',
      variant: 'blue',
      css: {
        borderColor: '$blue11',
      },
    },
    {
      border: 'true',
      variant: 'loContrast',
      css: {
        borderColor: '$slate6',
      },
    },
  ],
  defaultVariants: {
    size: '1',
    variant: 'gray',
  },
});
