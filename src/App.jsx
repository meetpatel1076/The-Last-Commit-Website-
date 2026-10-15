const LINKS = {
  vault: 'https://vault.thelastcommit.xyz/',
  vaultFeatures: 'https://vault.thelastcommit.xyz/features',
  // Replace these with the official live profile / invite URLs before launch.
  discord: 'https://discord.com/',
  instagram: 'https://instagram.com/',
  github: 'https://github.com/',
};

function ArrowUpRight({ size = 16 }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M7 17 17 7M7 7h10v10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function Mark({ small = false }) {
  return <span className={`brand-mark${small ? ' brand-mark--small' : ''}`} aria-hidden="true"><span /><span /><span /></span>;
}

function ProjectCard({ number, name, label, description, features, href, action, className = '' }) {
  return (
    <article className={`project-card ${className}`}>
      <div className="project-card__top"><span className="eyebrow">{number} / {label}</span><span className="project-arrow"><ArrowUpRight size={19} /></span></div>
      <div className="project-card__body">
        <h3>{name}</h3>
        <p>{description}</p>
        <ul className="feature-list">{features.map((feature) => <li key={feature}><span className="feature-dot" />{feature}</li>)}</ul>
      </div>
      <a className="text-link" href={href} target="_blank" rel="noreferrer">{action}<ArrowUpRight /></a>
    </article>
  );
}

export default function App() {
  return (
    <div className="site-shell">
      <header className="topbar wrap">
        <a className="brand" href="#home" aria-label="The Last Commit home"><Mark /><span>THE LAST COMMIT<span className="brand-period">.</span></span></a>
        <nav className="topnav" aria-label="Main navigation">
          <a href="#projects">Projects</a><a href="#about">About</a><a href="#community">Community</a>
        </nav>
        <a className="nav-cta" href={LINKS.vault} target="_blank" rel="noreferrer">Open TLC Vault <ArrowUpRight /></a>
      </header>

      <main>
        <section className="hero wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="availability-dot" /> BUILT BY STUDENTS. MADE FOR BUILDERS.</div>
            <h1>Make things.<br /><span>Make progress.</span></h1>
            <p className="hero-lede">The Last Commit is a student-led developer community building useful tools and making the journey of learning to code a little less lonely.</p>
            <div className="hero-actions"><a className="button button--dark" href="#projects">Explore our projects <ArrowUpRight /></a><a className="button button--quiet" href={LINKS.discord} target="_blank" rel="noreferrer">Join the community <ArrowUpRight /></a></div>
            <div className="hero-note"><span className="note-line" />For the curious. The consistent. The ones who keep building.</div>
          </div>
          <div className="hero-art" aria-label="The Last Commit brand graphic">
            <div className="art-grid" />
            <div className="art-label art-label--top">EST. BY BUILDERS</div>
            <div className="commit-stamp"><Mark /><span>COMMIT<br />TO THE<br /><b>PROCESS.</b></span></div>
            <div className="art-index"><span>BUILD / 001</span><span>LEARN / 002</span><span>SHIP / 003</span></div>
            <div className="art-label art-label--bottom">LESS TALK. MORE MAKING.</div>
          </div>
          <div className="hero-bottomline"><span>INDEPENDENT PROJECTS</span><span>BUILT IN PUBLIC, ONE ITERATION AT A TIME <span className="bottomline-arrow">↘</span></span></div>
        </section>

        <section className="projects-section" id="projects">
          <div className="wrap">
            <div className="section-heading">
              <div><span className="eyebrow"><span className="orange-dash" /> WHAT WE'RE BUILDING</span><h2>Small team.<br />Useful things.</h2></div>
              <p>We care about solving real problems, shipping what we learn, and creating things that help other developers move forward.</p>
            </div>
            <div className="project-grid">
              <ProjectCard number="01" label="DEVELOPER TOOL" name="TLC Vault" description="Your code, within reach. Save the snippets and practice code you need, then open them from any browser — including the college lab PC." features={['Organise code into repositories', 'Copy and run code with less friction', 'Build consistency with streaks and stats']} href={LINKS.vault} action="Open TLC Vault" className="project-card--vault" />
              <ProjectCard number="02" label="COMMUNITY TOOL" name="TLC Discord Bot" description="A companion for The Last Commit community, designed to make learning progress visible and give builders a reason to keep showing up." features={['Track and share learning progress', 'Community progress and leaderboard tools', 'A home base for student developers']} href={LINKS.discord} action="Find us on Discord" className="project-card--bot" />
            </div>
            <div className="projects-footnote"><span>01—02</span><span>MORE TO BUILD. MORE TO LEARN.</span><span className="footnote-mark"><Mark small /></span></div>
          </div>
        </section>

        <section className="manifesto wrap" id="about">
          <div className="manifesto-aside"><span className="eyebrow"><span className="orange-dash" /> WHY WE EXIST</span><span className="manifesto-index">TLC / NOTE 001</span></div>
          <div className="manifesto-main"><h2>Consistency beats<br /><span>motivation.</span></h2><p>Learning to build software takes time. It takes unfinished projects, bugs you can't explain, and showing up again tomorrow. The Last Commit exists for that process — to build practical tools, share the journey, and help more student developers become confident builders.</p><a className="text-link" href={LINKS.discord} target="_blank" rel="noreferrer">Build alongside us <ArrowUpRight /></a></div>
        </section>

        <section className="community-section" id="community">
          <div className="wrap community-inner">
            <div><span className="eyebrow"><span className="orange-dash" /> FIND YOUR PEOPLE</span><h2>Keep showing up.<br /><span>We'll build from there.</span></h2><p>Follow the work, meet other student developers, and see what we're shipping next.</p></div>
            <div className="social-list">
              <a href={LINKS.discord} target="_blank" rel="noreferrer"><span className="social-number">01</span><span><b>Discord</b><small>Join the community</small></span><ArrowUpRight size={20} /></a>
              <a href={LINKS.instagram} target="_blank" rel="noreferrer"><span className="social-number">02</span><span><b>Instagram</b><small>Follow the journey</small></span><ArrowUpRight size={20} /></a>
              <a href={LINKS.github} target="_blank" rel="noreferrer"><span className="social-number">03</span><span><b>GitHub</b><small>Explore the code</small></span><ArrowUpRight size={20} /></a>
            </div>
          </div>
        </section>

        <section className="closing-cta wrap">
          <div className="closing-mark"><Mark /></div><div><span className="eyebrow">YOUR NEXT COMMIT STARTS HERE</span><h2>Got code to keep?</h2><p>Put your practice code somewhere you can actually reach it.</p></div><a className="button button--orange" href={LINKS.vault} target="_blank" rel="noreferrer">Get started with TLC Vault <ArrowUpRight /></a>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-main"><a className="brand" href="#home"><Mark /><span>THE LAST COMMIT<span className="brand-period">.</span></span></a><p>Built by learners. For people who keep building.</p><a className="back-top" href="#home">BACK TO TOP ↑</a></div>
        <div className="wrap footer-bottom"><span>© {new Date().getFullYear()} The Last Commit</span><span>BUILD. LEARN. SHIP.</span><a href={LINKS.vault} target="_blank" rel="noreferrer">TLC Vault <ArrowUpRight size={13} /></a></div>
      </footer>
    </div>
  );
}
