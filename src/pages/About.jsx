import { FaCloud, FaNetworkWired, FaMicrochip, FaDatabase, FaProjectDiagram, FaBrain, FaEye, FaBullseye } from 'react-icons/fa';
import { researchAreas } from '../data/labData';
import './About.css';

const iconMap = {
  cloud: <FaCloud />, edge: <FaNetworkWired />, iot: <FaMicrochip />,
  data: <FaDatabase />, distributed: <FaProjectDiagram />, ai: <FaBrain />,
};

const milestones = [
  { year: '2010', title: 'Lab Established', desc: 'DCC Lab founded at Hanyang University' },
  { year: '2012', title: 'First Major Grant', desc: 'Received first NRF research grant on cloud computing' },
  { year: '2014', title: 'First Ph.D. Graduate', desc: 'First doctoral student graduated from the lab' },
  { year: '2016', title: '50th Publication', desc: 'Reached 50 published research papers milestone' },
  { year: '2019', title: 'International Collaboration', desc: 'Established research partnerships with US universities' },
  { year: '2022', title: '100th Publication', desc: 'Published the 100th research paper in top-tier venues' },
  { year: '2024', title: 'Edge AI Initiative', desc: 'Launched new research program on Edge Intelligence' },
];

export default function About() {
  return (
    <>
      <section className="page-banner">
        <h1>About DCC Lab</h1>
        <p>Advancing distributed and cloud computing research since 2010</p>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-intro">
            <div className="about-intro-text">
              <h2>Who We Are</h2>
              <p>
                The Distributed &amp; Cloud Computing Laboratory (DCC Lab) at Hanyang
                University conducts cutting-edge research in cloud computing, edge and
                fog computing, Internet of Things, big data analytics, and distributed
                systems.
              </p>
              <p>
                Since our establishment in 2010, we have been committed to advancing
                the state of the art in distributed computing technologies. Our research
                addresses real-world challenges in resource management, scalability,
                security, and intelligence for next-generation computing infrastructure.
              </p>
              <p>
                We collaborate with leading universities, research institutes, and
                industry partners worldwide to drive innovation and train the next
                generation of researchers and engineers.
              </p>
            </div>
            <div className="about-image-placeholder">
              <FaCloud />
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Vision &amp; Mission</h2>
          </div>
          <div className="vision-grid">
            <div className="card vision-card">
              <div className="vision-icon"><FaEye /></div>
              <h3>Our Vision</h3>
              <p>
                To be a world-leading research group in distributed and cloud computing,
                shaping the future of intelligent, scalable, and secure computing
                infrastructure for a connected world.
              </p>
            </div>
            <div className="card vision-card">
              <div className="vision-icon"><FaBullseye /></div>
              <h3>Our Mission</h3>
              <p>
                To conduct pioneering research that bridges theory and practice,
                develop innovative solutions for real-world distributed computing
                challenges, and nurture talented researchers and engineers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Research Overview</h2>
            <p>Six core research areas driving our work</p>
          </div>
          <div className="grid-3">
            {researchAreas.map((r) => (
              <div className="card area-card" key={r.id}>
                <div className="area-dot">{iconMap[r.icon]}</div>
                <h3>{r.title}</h3>
                <p>{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Lab Timeline</h2>
            <p>Key milestones in our journey</p>
          </div>
          <div className="timeline">
            {milestones.map((m) => (
              <div className="timeline-item" key={m.year}>
                <div className="year">{m.year}</div>
                <h4>{m.title}</h4>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
