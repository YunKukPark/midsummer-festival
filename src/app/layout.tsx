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
      'https://velog.velcdn.com/images/yunkuk/post/b40d7434-823a-47ca-8089-eff609f8e682/image.png',
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
