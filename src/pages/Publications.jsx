import { useState, useMemo } from 'react';
import { publications } from '../data/labData';
import './Publications.css';

const types = ['all', 'journal', 'conference'];

export default function Publications() {
  const [filter, setFilter] = useState('all');

  const filtered = useMemo(() => {
    const list = filter === 'all' ? publications : publications.filter(p => p.type === filter);
    const groups = {};
    list.forEach(p => {
      if (!groups[p.year]) groups[p.year] = [];
      groups[p.year].push(p);
    });
    return Object.entries(groups).sort((a, b) => b[0] - a[0]);
  }, [filter]);

  const total = filter === 'all' ? publications.length : publications.filter(p => p.type === filter).length;

  return (
    <>
      <section className="page-banner">
        <h1>Publications</h1>
        <p>Selected research papers from our lab</p>
      </section>

      <section className="section">
        <div className="container">
          <div className="pub-filters">
            {types.map(t => (
              <button
                key={t}
                className={filter === t ? 'active' : ''}
                onClick={() => setFilter(t)}
              >
                {t === 'all' ? 'All' : t === 'journal' ? 'Journals' : 'Conferences'}
              </button>
            ))}
          </div>

          <p className="pub-count">Showing {total} publications</p>

          {filtered.map(([year, pubs]) => (
            <div className="pub-year-group" key={year}>
              <h3>{year}</h3>
              {pubs.map(p => (
                <div className="card pub-item" key={p.id}>
                  <span className={`badge ${p.type === 'journal' ? 'badge-active' : ''}`}>
                    {p.type}
                  </span>
                  <h4>{p.title}</h4>
                  <p className="authors">{p.authors}</p>
                  <p className="venue">{p.venue}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
