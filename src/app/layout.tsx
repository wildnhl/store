import type { Metadata } from 'next';
import { Bebas_Neue, Inter } from 'next/font/google';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import '@/app/reset.scss';
import { dinPro, heliosBold, heliosRegular } from './fonts';
const inter = Inter({ subsets: ['latin'] });
const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--my-font-bebas'
});
export const metadata: Metadata = {
  title: 'Bookstore',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${bebasNeue.variable} ${dinPro.variable} ${heliosBold.variable} ${heliosRegular.variable}`}
      >
        <div id="container">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
