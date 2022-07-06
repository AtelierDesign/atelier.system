import React from 'react';
import { Button } from '../components/Button';
import { darkTheme } from 'stitches.config';

export function DarkThemeButton() {
  const [theme, setTheme] = React.useState('theme-default');

  React.useEffect(() => {
    document.body.classList.remove('theme-default', darkTheme);
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <Button
      variant="ghostAtelier"
      style={{ position: 'absolute', top: 4, right: 12, zIndex: 9999 }}
      onClick={() => setTheme(theme === 'theme-default' ? darkTheme : 'theme-default')}
    >
      Toggle theme
    </Button>
  );
}
