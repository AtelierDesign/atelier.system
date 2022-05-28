import React from 'react';
import { styled, CSS } from 'stitches.config';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const StyledAccordion = styled(AccordionPrimitive.Root, {});

type AccordionPrimitiveProps = React.ComponentProps<typeof AccordionPrimitive.Root>;
type AccordionProps = AccordionPrimitiveProps & { css?: CSS };

export const Accordion = React.forwardRef<React.ElementRef<typeof StyledAccordion>, AccordionProps>(
  ({ children, ...props }, forwardedRef) => (
    <StyledAccordion ref={forwardedRef} {...props} {...(props.type === 'single' ? { collapsible: true } : {})}>
      {children}
    </StyledAccordion>
  ),
);

const StyledItem = styled(AccordionPrimitive.Item, {
  borderTop: '1px solid $colors$slate6',
  overflow: 'hidden',
  backgroundColor: '$slate1',

  '&:first-child': {
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px',
  },
  '&:last-child': {
    borderBottomLeftRadius: '16px',
    borderBottomRightRadius: '16px',
  },
  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
    boxShadow: '0 0 0 2px $mauve12',
  },
  '&:last-of-type': {
    borderBottom: '1px solid $colors$slate6',
  },
});

const StyledHeader = styled(AccordionPrimitive.Header, {
  paddingTop: '3px',
  borderRadius: '16px',
  all: 'unset',
  display: 'flex',
});

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
  all: 'unset',
  boxSizing: 'border-box',
  userSelect: 'none',
  fontFamily: '$inter',
  paddingTop: '0px',
  paddingBottom: '0px',
  paddingLeft: '20px',
  paddingRight: '20px',
  height: '45px',
  flex: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '13px',
  fontWeight: '700',
  lineHeight: '1',
  color: '$gray12',
  width: '100%',

  '&[data-state="closed"]': { backgroundColor: '$slate1' },
  '&[data-state="open"]': { backgroundColor: '$slate3' },
  '&:hover': { backgroundColor: '$slate5' },

  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },
  '@hover': {
    '&:hover': {
      backgroundColor: '$slate2',
    },
  },
  '&:focus': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8',
  },
  svg: {
    transition: 'transform 175ms cubic-bezier(0.65, 0, 0.35, 1)',
  },
  '&[data-state="open"]': {
    svg: {
      transform: 'rotate(180deg)',
    },
  },
});

type AccordionTriggerPrimitiveProps = React.ComponentProps<typeof AccordionPrimitive.Trigger>;
type AccordionTriggerProps = AccordionTriggerPrimitiveProps & { css?: CSS };

export const AccordionTrigger = React.forwardRef<React.ElementRef<typeof StyledTrigger>, AccordionTriggerProps>(
  ({ children, ...props }, forwardedRef) => (
    <StyledHeader>
      <StyledTrigger {...props} ref={forwardedRef}>
        {children}
        <ChevronDownIcon />
      </StyledTrigger>
    </StyledHeader>
  ),
);

const StyledContent = styled(AccordionPrimitive.Content, {
  p: '$2',
});

export const AccordionItem = StyledItem;
export const AccordionContent = StyledContent;
