import { news } from '../data/labData';
import './News.css';

function parseDate(str) {
  // handle unicode dashes
  const clean = str.replace(/[‑–—]/g, '-');
  const [y, m, d] = clean.split('-');
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return { year: y, month: months[parseInt(m, 10) - 1] || m, day: d };
}

export default function News() {
  return (
    <>
      <section className="page-banner">
        <h1>News &amp; Notices</h1>
        <p>Latest updates and announcements from DCC Lab</p>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            {news.map(n => {
              const d = parseDate(n.date);
              return (
                <div className="card news-list-card" key={n.id} style={{ marginBottom: 16 }}>
                  <div className="news-date-badge">
                    <div className="month">{d.month}</div>
                    <div className="day">{d.day}</div>
                    <div className="yr">{d.year}</div>
                  </div>
                  <div className="news-body">
                    <span className="badge news-cat">{n.category}</span>
                    <h3>{n.title}</h3>
                    <p>{n.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
