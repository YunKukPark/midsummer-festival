import { Do_Hyeon, Noto_Sans_KR } from 'next/font/google';

export const sansKr = Noto_Sans_KR({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const dohyeon = Do_Hyeon({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dohyeon',
});
