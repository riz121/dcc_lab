import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaBuilding } from 'react-icons/fa';
import { labInfo } from '../data/labData';
import './Contact.css';

export default function Contact() {
  return (
    <>
      <section className="page-banner">
        <h1>Contact</h1>
        <p>Get in touch with DCC Lab</p>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <div className="card contact-info-card" style={{ marginBottom: 24 }}>
                <h2>Contact Information</h2>
                <p>Feel free to reach out for collaboration, inquiries, or prospective student information.</p>

                <div className="contact-row">
                  <div className="contact-icon"><FaMapMarkerAlt /></div>
                  <div className="contact-row-text">
                    <h4>Address</h4>
                    <p>{labInfo.address}</p>
                  </div>
                </div>

                <div className="contact-row">
                  <div className="contact-icon"><FaEnvelope /></div>
                  <div className="contact-row-text">
                    <h4>Email</h4>
                    <p>{labInfo.email}</p>
                  </div>
                </div>

                <div className="contact-row">
                  <div className="contact-icon"><FaPhone /></div>
                  <div className="contact-row-text">
                    <h4>Phone</h4>
                    <p>{labInfo.phone}</p>
                  </div>
                </div>

                <div className="contact-row">
                  <div className="contact-icon"><FaBuilding /></div>
                  <div className="contact-row-text">
                    <h4>Office</h4>
                    <p>Engineering Building, Room 510</p>
                  </div>
                </div>
              </div>

              <div className="contact-map card">
                <iframe
                  src={labInfo.mapEmbedUrl}
                  title="Hanyang University Map"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="card contact-form-card">
              <h2>Send a Message</h2>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" placeholder="Your full name" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="your@email.com" />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input type="text" placeholder="Inquiry subject" />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea placeholder="Your message..." />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
