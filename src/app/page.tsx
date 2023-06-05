import Footer from '@/components/Footer';
import Hero from '@/components/Hero/Hero';
import Lineup from '@/components/Lineup/Lineup';
import LinkTree from '@/components/LinkTree';

export default function Home() {
  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-between pt-[88px]">
      <Hero />
      <Lineup />
      <LinkTree />
      <Footer />
    </main>
  );
}
