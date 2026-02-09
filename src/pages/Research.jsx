import { FaCloud, FaNetworkWired, FaMicrochip, FaDatabase, FaProjectDiagram, FaBrain } from 'react-icons/fa';
import { researchAreas } from '../data/labData';
import './Research.css';

const iconMap = {
  cloud: <FaCloud />, edge: <FaNetworkWired />, iot: <FaMicrochip />,
  data: <FaDatabase />, distributed: <FaProjectDiagram />, ai: <FaBrain />,
};

export default function Research() {
  return (
    <>
      <section className="page-banner">
        <h1>Research</h1>
        <p>Our core research areas and ongoing investigations</p>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Research Areas</h2>
            <p>Exploring the frontiers of distributed and cloud computing</p>
          </div>
          <div className="grid-2">
            {researchAreas.map((r) => (
              <div className="card research-detail-card" key={r.id}>
                <div className="icon-wrap">{iconMap[r.icon]}</div>
                <h3>{r.title}</h3>
                <p>{r.description}</p>
                <div className="tags">
                  {r.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
