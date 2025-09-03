'use client';
import Script from 'next/script';

export default function Plausible() {
  const domain = (process.env.NEXT_PUBLIC_SITE_URL ?? '')
    .replace(/^https?:\/\//, '')
    .replace(/\/$/, '');
  // If you haven’t set up Plausible yet, you can leave this component mounted; it’s harmless.
  return (
    <Script
      defer
      data-domain={domain || 'localhost'}
      src="https://plausible.io/js/script.js"
      strategy="afterInteractive"
    />
  );
}
