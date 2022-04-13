import * as React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <h1>Atelier® Design Testing</h1>
      <ul>
        <li>
          <Link href="/colors">Color System</Link>
        </li>
        <li>
          <Link href="/id">Id</Link>
        </li>
        <li>
          <Link href="/accordion">Accordion</Link>
        </li>
        <li>
          <Link href="/dialog">Dialog</Link>
        </li>
        <li>
          <Link href="/popover">Popover</Link>
        </li>
        <li>
          <Link href="/select">Select</Link>
        </li>
        <li>
          <Link href="/tabs">Tabs</Link>
        </li>
        <br />
        <br />
        <li>
          <Link href="/system">View Styled Components</Link>
        </li>
      </ul>
    </main>
  );
}
