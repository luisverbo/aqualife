import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Differentials from "@/components/Differentials";
import LaneDivider from "@/components/LaneDivider";
import Services from "@/components/Services";
import Authority from "@/components/Authority";
import SocialProof from "@/components/SocialProof";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Differentials />
        <LaneDivider />
        <Services />
        <Authority />
        <SocialProof />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
