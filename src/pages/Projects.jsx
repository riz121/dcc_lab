import { FaCalendarAlt, FaUniversity } from 'react-icons/fa';
import { projects } from '../data/labData';
import './Projects.css';

export default function Projects() {
  const active = projects.filter(p => p.status === 'active');
  const completed = projects.filter(p => p.status === 'completed');

  const renderCards = (list) =>
    list.map(p => (
      <div className={`card project-card ${p.status}`} key={p.id}>
        <div className="project-header">
          <h3>{p.title}</h3>
          <span className={`badge badge-${p.status}`}>{p.status}</span>
        </div>
        <div className="project-meta">
          <span className="meta-item"><FaCalendarAlt /> {p.period}</span>
          <span className="meta-item"><FaUniversity /> {p.funding}</span>
        </div>
        <p>{p.description}</p>
      </div>
    ));

  return (
    <>
      <section className="page-banner">
        <h1>Projects</h1>
        <p>Funded research projects driving our work</p>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="project-section-title">
            <span className="dot dot-active" /> Active Projects
          </h2>
          <div className="grid-2" style={{ marginBottom: 48 }}>
            {renderCards(active)}
          </div>

          <h2 className="project-section-title">
            <span className="dot dot-completed" /> Completed Projects
          </h2>
          <div className="grid-2">
            {renderCards(completed)}
          </div>
        </div>
      </section>
    </>
  );
}
