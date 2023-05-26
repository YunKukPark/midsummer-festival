import Footer from '@/components/Footer';
import Hero from '@/components/Hero/Hero';
import LinkTree from '@/components/LinkTree';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-between pt-[88px]">
      <Hero />
      <LinkTree />
      <Footer />
    </main>
  );
}
