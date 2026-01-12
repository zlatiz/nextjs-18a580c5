import React from 'react';
import Link from 'next/link';

export default function Header(): JSX.Element {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-sm glass-card border-b border-[--border]">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="font-heading text-lg">John Keane</Link>
          <span className="text-sm text-[--muted-foreground]">Welcome to John Keane Studios</span>
        </div>
        <nav className="hidden md:flex items-center gap-4 text-sm">
          <Link href="/">Home</Link>
          <Link href="/html/about">About John Keane</Link>
          <Link href="/html/discography">Selected Discography</Link>
          <Link href="/html/contact" className="btn-gradient">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}
