import React from 'react';
import { styled } from 'stitches.config';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { overlayStyles } from './Overlay';
import { panelStyles } from './Panel';

type AlertDialogProps = React.ComponentProps<typeof AlertDialogPrimitive.Root> & {
  children: React.ReactNode;
};

const StyledOverlay = styled(AlertDialogPrimitive.Overlay, overlayStyles, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});

export function AlertDialog({ children, ...props }: AlertDialogProps) {
  return (
    <AlertDialogPrimitive.Root {...props}>
      <StyledOverlay />
      {children}
    </AlertDialogPrimitive.Root>
  );
}

const StyledTitle = styled(AlertDialogPrimitive.Title, {
  margin: 0,
  color: '$mauve12',
  fontSize: 17,
  fontWeight: 500,
});

const StyledDescription = styled(AlertDialogPrimitive.Description, {
  marginBottom: 20,
  color: '$mauve11',
  fontSize: '15px',
  lineHeight: '1.5',
});

const StyledContent = styled(AlertDialogPrimitive.Content, {
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '500px',
  maxHeight: '85vh',
  padding: 25,

  '&:focus': { outline: 'none' },
});

export function Content({ children, ...props }) {
  return (
    <AlertDialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...props}>{children}</StyledContent>
    </AlertDialogPrimitive.Portal>
  );
}

const Button = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,
});

export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
export const AlertDialogTitle = AlertDialogPrimitive.Title;

export const AlertDialogContent = StyledContent;
export const AlertDialogDescription = StyledDescription;

export const AlertDialogAction = AlertDialogPrimitive.Action;
export const AlertDialogCancel = AlertDialogPrimitive.Cancel;

/*
!! All exports...


* AlertDialog
* AlertDialogTrigger
* AlertDialogContent
* AlertDialogTitle
* AlertDialogDescription
* AlertDialogAction
* AlertDialogCancel
*/

/*
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@atelier.design';
import { styled } from '@atelier.design';

const Flex = styled('div', { display: 'flex' });


export const AtelierAlertDialog = () => {
  return(
  <>
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Delete account</Button>
      </AlertDialogTrigger>

      <AlertDialogContent>

        <AlertDialogTitle>
          ...
        </AlertDialogTitle>

        <AlertDialogDescription>
          .....
        </AlertDialogDescription>

        <Flex css={{ justifyContent: 'flex-end' }}>
          <AlertDialogCancel asChild>
            <Button variant="mauve" css={{ marginRight: 25 }}>
              Cancel
            </Button>
          </AlertDialogCancel>

          <AlertDialogAction asChild>
            <Button variant="red">
              Yes, delete account
            </Button>
          </AlertDialogAction>
        </Flex>

      </AlertDialogContent>
    </AlertDialog>
  </>
  )
}
*/
