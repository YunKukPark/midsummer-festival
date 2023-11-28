import Footer from '@/components/Footer';
import HeroV2 from '@/components/HeroV2/HeroV2';
import Lineup from '@/components/Lineup/Lineup';
import LinkTree from '@/components/LinkTree';

export default function Home() {
  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-between pt-[88px]">
      <HeroV2 />
      <Lineup id="line-up" />
      <LinkTree />
      <Footer />
    </main>
  );
}
