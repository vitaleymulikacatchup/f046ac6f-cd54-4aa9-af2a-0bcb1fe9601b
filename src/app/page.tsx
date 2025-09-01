"use client"

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarBase from '@/components/navigation/NavbarBase';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import BentoFAQ from '@/components/sections/layouts/faq/BentoFAQ';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <NavbarBase
        logoSrc="/images/logo.svg"
        logoAlt="MemeSpark Logo"
        leftButtonText=""
        rightButtonText="Join MemeSpark"
        onLeftButtonClick={() => {}}
        onRightButtonClick={() => { window.location.href = '#footer'; }}
      />

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SplitHero
          title="Welcome to MemeSpark"
          subtitle="The playful meme coin of the future!"
          primaryButtonText="Join Us"
          secondaryButtonText="Learn More"
          onPrimaryButtonClick={() => { alert('Primary CTA clicked!'); }}
          onSecondaryButtonClick={() => { alert('Secondary CTA clicked!'); }}
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout
          title="What is MemeSpark?"
          descriptions={[
            "MemeSpark is a fun and inclusive community-driven meme coin.",
            "Join our journey to revolutionize the meme economy!"
          ]}
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy MemeSpark"
          steps={[
            { title: "Step 1", description: "Create a wallet", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2", description: "Buy ETH", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3", description: "Swap ETH for MemeSpark", image: "/images/placeholder3.avif", position: "right", isCenter: false }
          ]}
        />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <NumberGridTokenomics
          title="Tokenomics"
          description="Our tokenomics ensures sustainability and growth."
          kpiItems={[
            { value: "10M", description: "Total Supply" },
            { value: "2M", description: "Circulating Supply" },
            { value: "$1M", description: "Market Cap" }
          ]}
        />
      </div>

      <div id="faq" data-section="faq" className="scroll-mt-24">
        <BentoFAQ
          items={[
            { title: "What is MemeSpark?", content: "MemeSpark is a community-driven meme coin." },
            { title: "How to buy?", content: "You can buy MemeSpark on various exchanges." },
            { title: "Is MemeSpark safe?", content: "We prioritize security for our community." },
            { title: "Join us now!", content: "Be part of the fun and growth of MemeSpark!" }
          ]}
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="MemeSpark Logo"
          logoText="MemeSpark"
          className=""
          items={[
            { label: "Privacy Policy", onClick: () => { alert('Privacy clicked!'); } },
            { label: "Terms of Service", onClick: () => { alert('Terms clicked!'); } },
            { label: "Contact Us", onClick: () => { alert('Contact clicked!'); } }
          ]}
        />
      </div>
    </SiteThemeProvider>
  );
}
