import { Noto_Sans_KR, Song_Myung } from 'next/font/google';

export const sansKr = Noto_Sans_KR({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const songmyung = Song_Myung({
  weight: ['400'],
  preload: false,
  // subsets: ['latin'],
  display: 'swap',
  variable: '--font-songmyung',
});
