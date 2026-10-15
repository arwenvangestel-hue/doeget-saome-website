import React from "react";

const siteContent = {
  logo: {
    src: "/logo-doeget-saome.png",
    alt: "Logo van Stichting Doeget Saome",
  },
  nav: [
    { label: "Over", href: "#over" },
    { label: "Doen", href: "#wat-we-doen" },
    { label: "Projecten", href: "#projecten" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    place: "Tullepetaonestad / Roosendaal",
    title: "Stichting Doeget Saome",
    slogan: "Allenig gade rapper. Saome komde verder.",
    intro:
      "Een warm digitaal ontmoetingsplein voor mensen die carnaval, cultuur, vrijwilligerswerk en saamhorigheid een warm hart toedragen.",
    primaryCta: { label: "Doe mee", href: "#idee" },
    secondaryCta: { label: "Neem contact op", href: "#contact" },
  },
  about: {
    eyebrow: "Over Doeget Saome",
    title: "Saome bouwen aan carnaval en ontmoeting",
    text: "Carnaval maak je niet alleen. Achter iedere optocht, activiteit, ontmoeting en traditie staan mensen die zich inzetten voor anderen. Doeget Saome is opgericht vanuit een eenvoudige gedachte: saome komde verder.",
  },
  pillars: [
    {
      title: "Verbinden",
      text: "We brengen mensen, verenigingen en ideeën bij elkaar, zodat plannen sneller een plek krijgen in Tullepetaonestad.",
    },
    {
      title: "Ondersteunen",
      text: "We helpen vrijwilligers en initiatieven met aandacht, netwerk en praktische steun waar dat nodig is.",
    },
    {
      title: "Saome vieren",
      text: "We koesteren de momenten waarop cultuur, muziek, traditie en ontmoeting samenkomen.",
    },
  ],
  spotlight: {
    eyebrow: "Tullepetaon van het seizoen",
    title: "Wie zetten we binnenkort in het zonnetje?",
    text: "Hier komt ruimte voor een vrijwilliger, initiatiefnemer, vereniging of bijzonder carnavalsmens dat Tullepetaonestad extra kleur geeft.",
    label: "Binnenkort bekend",
  },
  projects: [
    {
      title: "Jeugd & carnaval",
      text: "Activiteiten en ideeën die jonge Tullepetaonen laten kennismaken met de kracht van carnaval.",
    },
    {
      title: "Muziek & traditie",
      text: "Aandacht voor de liedjes, verhalen, gebruiken en klanken die onze stad herkenbaar maken.",
    },
    {
      title: "Saome voor elkaar",
      text: "Initiatieven waarin vrijwilligers elkaar vinden en iets betekenen voor mensen om hen heen.",
    },
    {
      title: "Bijzondere initiatieven",
      text: "Ruimte voor verrassende plannen die niet in een hokje passen, maar wel helemaal Doeget Saome voelen.",
    },
  ],
  idea: {
    eyebrow: "Heb jij een idee?",
    title: "Wa ziede gij graag in Tullepetaonestad?",
    text: "Een activiteit, een ontmoeting, een eerbetoon of iets dat carnaval nog meer van ons allemaal maakt? Laat het weten.",
    cta: { label: "Deel jouw idee", href: "mailto:info@doegetsaome.nl?subject=Idee%20voor%20Tullepetaonestad" },
  },
  socials: [
    {
      platform: "YouTube",
      title: "Laatste YouTube-video",
      placeholder: "Ruimte voor video",
    },
    {
      platform: "Instagram",
      title: "Laatste Instagram-post",
      placeholder: "Ruimte voor post",
    },
    {
      platform: "Facebook",
      title: "Laatste Facebook-post",
      placeholder: "Ruimte voor bericht",
    },
  ],
  support: {
    eyebrow: "Steun ons",
    title: "Help mee om mooie plannen mogelijk te maken",
    text: "Hier komt ruimte voor een donatieknop, QR-code, sponsorlink of korte uitleg over hoe mensen Stichting Doeget Saome kunnen steunen.",
    cta: "Donatie / sponsorlink placeholder",
  },
  contact: {
    eyebrow: "Contact",
    title: "Kom in contact",
    emailLabel: "E-mail",
    email: "info@doegetsaome.nl",
    kvkLabel: "KvK",
    kvk: "KvK-nummer placeholder",
    socialLinks: [
      { label: "YouTube", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "Facebook", href: "#" },
    ],
  },
};

function Header() {
  return (
    <header className="site-header">
      <a className="brand-mark" href="#top" aria-label="Naar boven">
        <img src={siteContent.logo.src} alt="" />
        <span>Doeget Saome</span>
      </a>
      <nav className="site-nav" aria-label="Hoofdnavigatie">
        {siteContent.nav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <Confetti />
      <div className="hero-ribbon hero-ribbon-left" aria-hidden="true" />
      <div className="hero-ribbon hero-ribbon-right" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">{siteContent.hero.place}</p>
          <h1>{siteContent.hero.title}</h1>
          <p className="slogan">{siteContent.hero.slogan}</p>
          <p className="hero-intro">{siteContent.hero.intro}</p>
          <div className="button-row">
            <a className="button button-primary" href={siteContent.hero.primaryCta.href}>
              {siteContent.hero.primaryCta.label}
            </a>
            <a className="button button-secondary" href={siteContent.hero.secondaryCta.href}>
              {siteContent.hero.secondaryCta.label}
            </a>
          </div>
        </div>
        <div className="hero-emblem" aria-label={siteContent.logo.alt}>
          <div className="hero-emblem-glow" aria-hidden="true" />
          <img
            className="hero-logo"
            src={siteContent.logo.src}
            alt={siteContent.logo.alt}
            fetchpriority="high"
          />
        </div>
      </div>
    </section>
  );
}

function Confetti() {
  return (
    <div className="confetti" aria-hidden="true">
      {Array.from({ length: 18 }, (_, index) => (
        <span key={index} />
      ))}
    </div>
  );
}

function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <section className={`section ${className}`} id={id}>
      <div className="section-inner">
        {(eyebrow || title) && (
          <div className="section-heading">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2>{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="over" eyebrow={siteContent.about.eyebrow} title={siteContent.about.title}>
      <p className="lead-text">{siteContent.about.text}</p>
    </Section>
  );
}

function Pillars() {
  return (
    <Section id="wat-we-doen" eyebrow="Wat we doen" title="Van idee naar ontmoeting">
      <div className="card-grid three">
        {siteContent.pillars.map((pillar, index) => (
          <article className="feature-card" key={pillar.title}>
            <span className="card-number">{String(index + 1).padStart(2, "0")}</span>
            <h3>{pillar.title}</h3>
            <p>{pillar.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Spotlight() {
  return (
    <Section id="tullepetaon" className="spotlight-section">
      <div className="spotlight-block">
        <div>
          <p className="eyebrow">{siteContent.spotlight.eyebrow}</p>
          <h2>{siteContent.spotlight.title}</h2>
          <p>{siteContent.spotlight.text}</p>
        </div>
        <div className="spotlight-badge" aria-label={siteContent.spotlight.label}>
          <span>{siteContent.spotlight.label}</span>
        </div>
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projecten" eyebrow="Projecten & activiteiten" title="Ruimte voor plannen die blijven hangen">
      <div className="card-grid four">
        {siteContent.projects.map((project) => (
          <article className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Idea() {
  return (
    <Section id="idee" className="idea-section">
      <div className="idea-block">
        <p className="eyebrow">{siteContent.idea.eyebrow}</p>
        <h2>{siteContent.idea.title}</h2>
        <p>{siteContent.idea.text}</p>
        <a className="button button-primary" href={siteContent.idea.cta.href}>
          {siteContent.idea.cta.label}
        </a>
      </div>
    </Section>
  );
}

function Socials() {
  return (
    <Section id="socials" eyebrow="Social media" title="Laatste updates op een plek">
      <div className="card-grid three">
        {siteContent.socials.map((social) => (
          <article className="social-card" key={social.platform}>
            <p className="social-platform">{social.platform}</p>
            <h3>{social.title}</h3>
            <div className="embed-placeholder">
              {social.platform === "YouTube" && (
                <>
                  {/* PLAATS HIER LATER DE YOUTUBE EMBED-CODE, bijvoorbeeld een iframe van YouTube. */}
                  <span>{social.placeholder}</span>
                </>
              )}
              {social.platform === "Instagram" && (
                <>
                  {/* PLAATS HIER LATER DE INSTAGRAM EMBED-CODE. */}
                  <span>{social.placeholder}</span>
                </>
              )}
              {social.platform === "Facebook" && (
                <>
                  {/* PLAATS HIER LATER DE FACEBOOK EMBED-CODE. */}
                  <span>{social.placeholder}</span>
                </>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Support() {
  return (
    <Section id="steun" eyebrow={siteContent.support.eyebrow} title={siteContent.support.title}>
      <div className="support-block">
        <p>{siteContent.support.text}</p>
        <div className="qr-placeholder" aria-label={siteContent.support.cta}>
          <span>{siteContent.support.cta}</span>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow={siteContent.contact.eyebrow} title={siteContent.contact.title}>
      <div className="contact-grid">
        <div className="contact-card">
          <span>{siteContent.contact.emailLabel}</span>
          <a href={`mailto:${siteContent.contact.email}`}>{siteContent.contact.email}</a>
        </div>
        <div className="contact-card">
          <span>{siteContent.contact.kvkLabel}</span>
          <p>{siteContent.contact.kvk}</p>
        </div>
        <div className="contact-card">
          <span>Social media</span>
          <div className="social-links">
            {siteContent.contact.socialLinks.map((link) => (
              <a key={link.label} href={link.href} aria-label={`${link.label} van Doeget Saome`}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>{siteContent.hero.slogan}</p>
      <span>Stichting Doeget Saome</span>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Pillars />
        <Spotlight />
        <Projects />
        <Idea />
        <Socials />
        <Support />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
