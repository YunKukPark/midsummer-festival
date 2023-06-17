import GNB from '@/components/GNB';
import './globals.css';
import { sansKr } from './fonts';

export const metadata = {
  title: '노래🎶 하지☀️',
  description: '📍지은진 • 📍물수제비 • 📍버르장머리',
  openGraph: {
    title: '노래🎶 하지☀️',
    description: '📍지은진 • 📍물수제비 • 📍버르장머리',
    url: '/',
    siteName: '노래 하지 midsummer festival',
    type: 'website',
    images: [
      'https://velog.velcdn.com/images/yunkuk/post/447f4fbc-3b05-4c1d-9dce-682d1b2a4212/image.png',
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" data-theme="night">
      <body className={sansKr.className}>
        <GNB />
        {children}
      </body>
    </html>
  );
}
