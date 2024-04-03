import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My App',
  description: 'My App is a...'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
