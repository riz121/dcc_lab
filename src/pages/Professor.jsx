import { FaEnvelope, FaBuilding, FaUserTie, FaPhone } from 'react-icons/fa';
import { professor } from '../data/labData';
import './Professor.css';

export default function Professor() {
  return (
    <>
      <section className="page-banner">
        <h1>Professor</h1>
        <p>Lab Director &amp; Principal Investigator</p>
      </section>

      <section className="section">
        <div className="container">
          <div className="professor-layout">
            <div className="card professor-photo-card">
              <div className="professor-avatar"><FaUserTie /></div>
              <h2>{professor.name}</h2>
              {professor.nameKorean && <p className="title" style={{ fontSize: '1rem', color: 'var(--text-light)' }}>{professor.nameKorean}</p>}
              <p className="title">{professor.title}</p>
              <p className="dept">{professor.department}</p>
              <div className="contact-line">
                <FaEnvelope /> {professor.email}
              </div>
              <div className="contact-line">
                <FaPhone /> {professor.phone}
              </div>
              <div className="contact-line">
                <FaBuilding /> {professor.office}
              </div>
            </div>

            <div className="professor-details">
              <div className="detail-section">
                <h3>Biography</h3>
                <p className="bio">{professor.bio}</p>
              </div>

              <div className="detail-section">
                <h3>Education</h3>
                {professor.education.map((e, i) => (
                  <div className="edu-item" key={i}>
                    <div className="edu-dot" />
                    <div>
                      <p>{e.degree}</p>
                      <p className="inst">{e.institution}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="detail-section">
                <h3>Research Interests</h3>
                <div className="interest-tags">
                  {professor.interests.map((interest) => (
                    <span className="interest-tag" key={interest}>{interest}</span>
                  ))}
                </div>
              </div>

              <div className="detail-section">
                <h3>Career</h3>
                {professor.career.map((c, i) => (
                  <div className="career-item" key={i}>{c}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
