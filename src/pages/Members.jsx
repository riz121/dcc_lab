import { useState } from 'react';
import { members } from '../data/labData';
import './Members.css';

const tabs = [
  { key: 'postdoc', label: 'Postdoc' },
  { key: 'phd', label: 'Ph.D. Students' },
  { key: 'ms', label: 'M.S. Students' },
  { key: 'alumni', label: 'Alumni' },
];

function getInitials(name) {
  return name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
}

export default function Members() {
  const [tab, setTab] = useState('postdoc');

  return (
    <>
      <section className="page-banner">
        <h1>Members</h1>
        <p>Our talented team of researchers and alumni</p>
      </section>

      <section className="section">
        <div className="container">
          <div className="members-tabs">
            {tabs.map((t) => (
              <button
                key={t.key}
                className={tab === t.key ? 'active' : ''}
                onClick={() => setTab(t.key)}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="grid-2">
            {members[tab].map((m, i) => (
              <div className="card member-card" key={i}>
                <div className="member-avatar">{getInitials(m.name)}</div>
                <div className="member-info">
                  <h3>{m.name}</h3>
                  <p className="topic">{m.topic}</p>
                  <p className="year">{m.year}</p>
                  {m.current && <p className="current">Now at {m.current}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
