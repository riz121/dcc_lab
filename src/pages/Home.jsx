import { Link } from 'react-router-dom';
import { FaCloud, FaNetworkWired, FaMicrochip, FaDatabase, FaProjectDiagram, FaBrain } from 'react-icons/fa';
import { researchAreas, news } from '../data/labData';
import './Home.css';

const iconMap = {
  cloud: <FaCloud />,
  edge: <FaNetworkWired />,
  iot: <FaMicrochip />,
  data: <FaDatabase />,
  distributed: <FaProjectDiagram />,
  ai: <FaBrain />,
};

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-shapes">
          <span /><span /><span /><span />
        </div>
        <div className="hero-content fade-in-up">
          <span className="hero-label">Hanyang University, Seoul</span>
          <h1>
            Distributed &amp;&nbsp;
            <span className="highlight">Cloud Computing</span>
            &nbsp;Laboratory
          </h1>
          <p>
            Pioneering next-generation research in cloud systems, edge intelligence,
            IoT platforms, and large-scale distributed computing to shape the future
            of connected infrastructure.
          </p>
          <div className="hero-buttons">
            <Link to="/research" className="btn btn-accent">Our Research</Link>
            <Link to="/members" className="btn btn-outline" style={{ borderColor: '#fff', color: '#fff' }}>
              Meet the Team
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ────────────────────────────────── */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            {[
              ['15+', 'Years of Research'],
              ['100+', 'Publications'],
              ['6', 'Research Areas'],
              ['20+', 'Graduates'],
            ].map(([num, label]) => (
              <div className="stat-item" key={label}>
                <h3>{num}</h3>
                <p>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Research Highlights ───────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Research Areas</h2>
            <p>Exploring the frontiers of distributed and cloud computing systems</p>
          </div>
          <div className="grid-3">
            {researchAreas.slice(0, 3).map((r) => (
              <div className="card research-card" key={r.id}>
                <div className="research-icon">{iconMap[r.icon]}</div>
                <h3>{r.title}</h3>
                <p>{r.description}</p>
                <div className="tags">
                  {r.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/research" className="btn btn-primary">View All Research</Link>
          </div>
        </div>
      </section>

      {/* ── Latest News ──────────────────────────────── */}
      <section className="section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Latest News</h2>
            <p>Updates and announcements from the DCC Lab</p>
          </div>
          <div className="grid-3">
            {news.slice(0, 3).map((n) => (
              <div className="card news-card" key={n.id}>
                <div className="news-meta">
                  <span className="news-date">{n.date}</span>
                  <span className="badge">{n.category}</span>
                </div>
                <h3>{n.title}</h3>
                <p>{n.content}</p>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/news" className="btn btn-outline">View All News</Link>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="section-dark">
        <div className="container">
          <div className="cta-content">
            <h2>Join Our Lab</h2>
            <p>
              We are always looking for motivated students and researchers.
              If you are passionate about cloud computing and distributed systems,
              we would love to hear from you.
            </p>
            <Link to="/contact" className="btn btn-accent">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
