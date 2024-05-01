import { Bebas_Neue, Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({ subsets: ['latin'] });
export const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' });

// Font files can be colocated inside of `pages`
export const heliosBold = localFont({
  src: '../fonts/HeliosC-Bold.woff2',
  variable: '--my-font-heliosBold'
});
export const heliosRegular = localFont({
  src: '../fonts/HeliosC.woff2',
  variable: '--my-font-heliosRegular'
});
export const dinPro = localFont({
  src: '../fonts/DINPro.woff2',
  variable: '--my-font-dinPro'
});
