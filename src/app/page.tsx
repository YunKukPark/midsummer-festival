import Footer from '@/components/Footer';
import LinkTree from '@/components/LinkTree';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-between pt-24">
      <LinkTree />
      <Footer />
    </main>
  );
}
