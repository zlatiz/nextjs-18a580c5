import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BANNER = encodeURI('https://johnkeanestudios.com/Images/StudioBanner.png');
const KEANE = encodeURI('https://johnkeanestudios.com/Images/j.keane2.jpg');
const CONSOLE = encodeURI('https://johnkeanestudios.com/Images/console.JPG');

export default function Page(): JSX.Element {
  return (
    <div className="w-full">
      <section className="relative h-[420px] studio-hero">
        <div className="absolute inset-0">
          <Image src={BANNER} alt="[image:John Keane Studios.com]" fill sizes="100vw" style={{ objectFit: 'cover' }} unoptimized />
        </div>
        <div className="relative z-10 flex items-center justify-center h-full hero-gradient">
          <div className="glass-card p-6 max-w-3xl text-center">
            <h1 className="font-heading text-3xl md:text-4xl">Welcome to John Keane Studios</h1>
            <p className="mt-2 text-sm text-[--muted-foreground]">Welcome to John Keane Studios</p>
            <div className="mt-4">
              <Link href="/html/contact" className="btn-gradient">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <aside className="glass-card p-4">
          <div className="mb-4">
            <Link href="/html/about">
              <Image src={KEANE} alt="[image:KeanePhoto]" width={300} height={380} className="rounded-md" unoptimized />
            </Link>
          </div>
          <nav>
            <ul className="space-y-2 text-sm">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/html/about">About John Keane</Link></li>
              <li><Link href="/html/discography">Selected Discography</Link></li>
              <li><Link href="/html/recordingservices">Recording Services</Link></li>
              <li><Link href="/html/clientlist">Client List</Link></li>
              <li><Link href="/html/equipment">Equipment List</Link></li>
              <li><Link href="/html/clips">Music Clips</Link></li>
              <li><Link href="/html/photos">Photos</Link></li>
              <li><Link href="/html/contact">Contact Us</Link></li>
            </ul>
          </nav>
        </aside>

        <section className="md:col-span-2 space-y-6">
          <div className="glass-card p-4">
            <Image src={CONSOLE} alt="[image:studio2]" width={1100} height={650} className="rounded-md" unoptimized />
          </div>

          <div className="glass-card p-4">
            <p className="text-[--muted-foreground]">Copyright 2011, johnkeanestudios.com</p>
          </div>
        </section>
      </div>
    </div>
  );
}
