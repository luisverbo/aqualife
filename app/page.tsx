import Authority from "@/components/Authority";
import Differentials from "@/components/Differentials";
import FinalCta from "@/components/FinalCta";
import Hero from "@/components/Hero";
import LaneDivider from "@/components/LaneDivider";
import Services from "@/components/Services";
import SocialProof from "@/components/SocialProof";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Hero />
      <LaneDivider />
      <Differentials />
      <LaneDivider />
      <Services />
      <LaneDivider />
      <Authority />
      <LaneDivider />
      <SocialProof />
      <LaneDivider />
      <FinalCta />
      <WhatsAppButton />
    </main>
  );
}
