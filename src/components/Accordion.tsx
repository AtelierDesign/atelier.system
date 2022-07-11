import React from 'react';
import { styled, CSS } from 'stitches.config';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const AccordionContainer = styled('div', {
  backgroundColor: '$translucent',
  width: '100%',
  alignItems: 'center',
  margin: 'auto',
  paddingLeft: '10px',
  paddingRight: '10px',
});

const StyledAccordion = styled(AccordionPrimitive.Root, {
  border: '3px solid $slate6',
  borderRadius: '19px',
  width: '100%',
  backgroundColor: '$translucent',
  boxShadow: '0 2px 8px $blackA4',
});

type AccordionPrimitiveProps = React.ComponentProps<typeof AccordionPrimitive.Root>;
type AccordionProps = AccordionPrimitiveProps & { css?: CSS };

export const AtelierAccordion = React.forwardRef<React.ElementRef<typeof StyledAccordion>, AccordionProps>(
  ({ children, ...props }, forwardedRef) => (
    <AccordionContainer>
      <StyledAccordion ref={forwardedRef} {...props} {...(props.type === 'single' ? { collapsible: true } : {})}>
        {children}
      </StyledAccordion>
    </AccordionContainer>
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
  '&[data-state="open"]': {
    backgroundColor: '$slate3',
    svg: {
      transform: 'rotate(180deg)',
    },
  },

  '&:hover': { backgroundColor: '$slate5' },

  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },
  '&:focus': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8',
  },
  svg: {
    transition: 'transform 175ms cubic-bezier(0.65, 0, 0.35, 1)',
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

// Dropdown Styles
const StyledContent = styled(AccordionPrimitive.Content, {
  overflow: 'hidden',
  color: '$gray12',
  backgroundColor: '$slate1',
  fontSize: '13px',
  paddingLeft: '20px',
  paddingRight: '20px',
  paddingTop: '4px',
  paddingBottom: '20px',

  '&[data-state="open"]': {
    // animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    // animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});

export const AccordionItem = StyledItem;
export const AccordionContent = StyledContent;

/*
!! All exports...
* AtelierAccordion
* AccordionTrigger
* AccordionItem
* AccordionContent
*/

/*
!! Render as follows...

import React from 'react'
import {
  AtelierAccordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent
} from '@atelier.design'


export const AccordionComponent = () => {
  return(
    <>
      <AtelierAccordion type="single" collapsible>

        <AccordionItem value="item-1">
          <AccordionTrigger>...</AccordionTrigger>
          <AccordionContent>....</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>...</AccordionTrigger>
          <AccordionContent>....</AccordionContent>
        </AccordionItem>

      </AtelierAccordion>
    </>
  );
};
*/
