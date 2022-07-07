import React from 'react';
import { Button } from '@/components/Button';
import { IconButton } from '@/components/IconButton';
import { Container } from '@/components/Container';
import { Box } from '@/components/Box';
import { Flex } from '@/components/Flex';
import { Grid } from '@/components/Grid';
import { Badge } from '@/components/Badge';
import { Switch } from '@/components/Switch';
import { ControlGroup } from '@/components/ControlGroup';
import { Text } from '@/components/Text';
import { Link } from '@/components/Link';
import { AppBar } from '@/components/AppBar';
import { Banner } from '@/components/Banner';
import { Alert } from '@/components/Alert';
import { Kbd } from '@/components/Kbd';
import { Separator } from '@/components/Separator';
import { Table, Caption, Thead, Tbody, Tfoot, Tr, Th, Td } from '@/components/Table';
import { VerifiedBadge } from '@/components/VerifiedBadge';
import { Card } from '@/components/Card';
import { Select } from '@/components/Select';
import { TextArea } from '@/components/TextArea';
import { Image } from '@/components/Image';
import { Code } from '@/components/Code';
import { Sup } from '@/components/Sup';
import { Sub } from '@/components/Sub';
import { TextField } from '@/components/TextField';
import { Section } from '@/components/Section';
import { Avatar } from '@/components/Avatar';
import { TabLink } from '@/components/TabLink';
import { SimpleToggle } from '@/components/SimpleToggle';
import { ScrollArea } from '@/components/Scrollbar';
import { Tooltip } from '@/components/Tooltip';
import { Slider } from '@/components/Slider';
import { Dialog, DialogTrigger, DialogContent } from '@/components/Dialog';
import { Sheet, SheetTrigger, SheetContent } from '@/components/Sheet';
import { Popover, PopoverTrigger, PopoverContent, PopoverClose } from '@/components/Popover';
import { Checkbox } from '@/components/Checkbox';
import { RadioGroup, Radio } from '@/components/Radio';
import { ProgressBar } from '@/components/ProgressBar';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from '@/components/AlertDialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/Tabs';
import { Label } from '@/components/Label';
import { Skeleton } from '@/components/Skeleton';
import { RadioCardGroup, RadioCard } from '@/components/RadioCard';
import { Accordion, AccordionTrigger, AccordionItem, AccordionContent } from '@/components/Accordion';
import { Heading } from '@/components/Heading';
import { Paragraph } from '@/components/Paragraph';
// import { Color } from '@/custom/Color';
import { Avatars } from '@/custom/Avatars';
import { Kbds } from '@/custom/Kbds';
import { Menus } from '@/custom/Menus';
import { Status } from '@/components/Status';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/DropdownMenu';
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuGroup,
  ContextMenuRadioGroup,
  ContextMenuLabel,
  ContextMenuSeparator,
} from '@/components/ContextMenu';
import {
  ActivityLogIcon,
  ArrowRightIcon,
  BarChartIcon,
  CaretDownIcon,
  CheckIcon,
  CodeIcon,
  CommitIcon,
  Cross1Icon,
  ExclamationTriangleIcon,
  FontItalicIcon,
  FontStyleIcon,
  GearIcon,
  HeadingIcon,
  LetterCaseCapitalizeIcon,
  LetterCaseLowercaseIcon,
  LetterCaseUppercaseIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  ReaderIcon,
  ShadowNoneIcon,
  TextAlignCenterIcon,
  TextAlignJustifyIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
  TriangleUpIcon,
  VideoIcon,
  RocketIcon,
} from '@radix-ui/react-icons';
import { Toolbar } from '@/custom/Toolbar';
import { DarkThemeButton } from '@/custom/DarkThemeButton';

import { QuickNav } from '@/custom/QuickNav';

function DesignSystem() {
  return (
    <>
      <Box>
        {/* <!-- App Bar --> */}
        <AppBar size="2" color="loContrast" border fixed glass>
          <Text size="2" css={{ fontWeight: 'normal', textAlign: 'center', letterSpacing: '-0.03rem' }}>
            <strong>ATELIER</strong>® DS
          </Text>

          {/* <!-- THEME SWITCH --> */}
          <DarkThemeButton />
        </AppBar>

        {/* <!-- Banner
        <Banner id="banner" variant="lime">
          <Text size="2" css={{ fontWeight: 500 }}>
            Atelier Design Yield® – Example Banner
          </Text>
        </Banner>
        --> */}

        {/* <!-- COMPONENTS NAVIGATION --> */}
        <QuickNav />
        {/* <!-- END ! COMPONENTS NAVIGATION --> */}

        {/* <!-- HERO CONTAINER --> */}
        <Box css={{ bc: '$loContrast', height: 'auto' }}>
          <Section size="3">
            <Container size="2">
              <Heading size="4" css={{ ta: 'center', mb: '$3' }}>
                Atelier® Design System
              </Heading>
              <Paragraph size="2" css={{ ta: 'center' }}>
                An environment for testing Atelier® DS.
              </Paragraph>
            </Container>
          </Section>
        </Box>
        {/* <!-- END ! HERO CONTAINER --> */}

        {/* <!-- BEGIN COLOR SECTION --> */}
        <Box css={{ bc: '$loContrast' }}>
          <Section size="3">
            <Container size="2">
              <Heading size="1" css={{ ta: 'center', mb: '$3', fontWeight: 'bold' }}>
                # Color System
              </Heading>
            </Container>

            <Container size="2" css={{ marginBottom: '10px' }}>
              <Box css={{ width: '100%', height: '$4', backgroundColor: '$mauve12', margin: 'auto' }}>
                <Text size="1" css={{ color: '$gray1', textAlign: 'center', lineHeight: '$4', paddingTop: '4px' }}>
                  ( mauve® )
                </Text>
              </Box>
              <Box css={{ width: '100%', height: '$4', backgroundColor: '$mauve11' }} />
              <Box css={{ width: '100%', height: '$4', backgroundColor: '$mauve10' }} />
              <Box css={{ width: '100%', height: '$4', backgroundColor: '$mauve9' }} />
              <Box css={{ width: '100%', height: '$4', backgroundColor: '$mauve8' }} />
              <Box css={{ width: '100%', height: '$4', backgroundColor: '$mauve7' }} />
              <Box css={{ width: '100%', height: '$4', backgroundColor: '$mauve6' }} />
              <Box css={{ width: '100%', height: '$4', backgroundColor: '$mauve5' }} />
              <Box css={{ width: '100%', height: '$4', backgroundColor: '$mauve4' }} />
              <Box css={{ width: '100%', height: '$4', backgroundColor: '$mauve3' }} />
              <Box css={{ width: '100%', height: '$4', backgroundColor: '$mauve2' }} />
              <Box css={{ width: '100%', height: '$4', backgroundColor: '$mauve1' }} />
            </Container>

            <Container size="2" css={{ marginTop: '10px' }}>
              <Box css={{ width: '100%', height: '$4', backgroundColor: '$lime12', margin: 'auto' }}>
                <Text size="1" css={{ color: '$gray1', textAlign: 'center', lineHeight: '$4', paddingTop: '4px' }}>
                  ( lime® )
                </Text>
              </Box>
              <Box css={{ width: '100%', height: '$4', backgroundColor: '$lime11' }} />
              <Box css={{ width: '100%', height: '$4', backgroundColor: '$lime10' }} />
              <Box css={{ width: '100%', height: '$4', backgroundColor: '$lime9' }} />
              <Box css={{ width: '100%', height: '$4', backgroundColor: '$lime8' }} />
              <Box css={{ width: '100%', height: '$4', backgroundColor: '$lime7' }} />
              <Box css={{ width: '100%', height: '$4', backgroundColor: '$lime6' }} />
              <Box css={{ width: '100%', height: '$4', backgroundColor: '$lime5' }} />
              <Box css={{ width: '100%', height: '$4', backgroundColor: '$lime4' }} />
              <Box css={{ width: '100%', height: '$4', backgroundColor: '$lime3' }} />
              <Box css={{ width: '100%', height: '$4', backgroundColor: '$lime2' }} />
              <Box css={{ width: '100%', height: '$4', backgroundColor: '$lime1' }} />
            </Container>
          </Section>
        </Box>
        {/* <!-- END !  COLOR SECTION --> */}

        {/* <!-- BEGIN TYPOGRAPHY --> */}
        <Box css={{ bc: '$loContrast' }}>
          <Section size="3">
            <Container size="2">
              <Heading size="1" css={{ ta: 'center', mb: '$3', fontWeight: 'bold' }}>
                # Typography
              </Heading>
            </Container>

            <Container size="2" css={{ marginBottom: '10px' }}>
              <Flex css={{ fd: 'column', gap: '$4' }}>
                <Heading size="4" as="h1">
                  This is a heading size 4
                </Heading>
                <Heading size="3" as="h1">
                  This is a heading size 3
                </Heading>
                <Heading size="2" as="h1">
                  This is a heading size 2
                </Heading>
                <Heading size="1" as="h1">
                  This is a heading size 1
                </Heading>
                <Paragraph size="2">
                  This is a Paragraph size 2. Design in the target medium. Prototype with real components. Handoff
                  production code.
                </Paragraph>
                <Paragraph size="1">
                  This is a Paragraph size 1. A really long paragraph of text, to demonstrate prose text, like for
                  example, the kind you might read in a blog post. The reason we're using prose here is because the most
                  common use case for this container size is longform text. So we're previewing some longform text here
                  so we can make sure the container width provides an optimal line length for this font size.
                </Paragraph>
                <Paragraph>
                  This is a Sup and Sub demo. The kind you might read in a blog post.<Sup>1</Sup> This is a really long
                  paragraph of text, to demonstrate prose text.<Sub>1</Sub>
                </Paragraph>
              </Flex>
            </Container>
          </Section>
        </Box>
        {/* <!-- END !  TYPOGRAPHY --> */}
      </Box>
    </>
  );
}

export default DesignSystem;
