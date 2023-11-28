import GNB from '@/components/GNB';
import './globals.css';
import { sansKr } from './fonts';

export const metadata = {
  title: '노래🎶 동지⛄️',
  description: '📍물수제비 • 📍버르장머리',
  openGraph: {
    title: '노래🎶 동지⛄️',
    description: '📍물수제비 • 📍버르장머리',
    url: '/',
    siteName: '노래 동지 midwinter festival',
    type: 'website',
    images: [
      // 'https://velog.velcdn.com/images/yunkuk/post/b40d7434-823a-47ca-8089-eff609f8e682/image.png',
      'https://velog.velcdn.com/images/yunkuk/post/6f40b8a0-2a62-4dc7-ae39-d37153c0bab3/image.png',
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
