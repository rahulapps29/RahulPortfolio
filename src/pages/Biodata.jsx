import React from "react";
import "./Biodata.css";

const Biodata = () => {
  const handlePrint = () => window.print();

  return (
    <div className="biodata-wrapper">
      <div className="biodata-container">
        <div className="biodata-card print-area">
          <h2 className="biodata-heading">✦ Marriage Biodata ✦</h2>

          {/* ----- Personal Details ----- */}
          <div className="biodata-section">
            <h3 className="section-title">Personal Details</h3>
            <p>
              <strong>Name:</strong> Rahul Luthra
            </p>
            <p>
              <strong>Date of Birth:</strong> 06th February 1991
            </p>
            <p>
              <strong>Time of Birth:</strong> 12:30 AM
            </p>
            <p>
              <strong>Place of Birth:</strong> Faridabad
            </p>
            <p>
              <strong>Age:</strong> 34 years
            </p>
            <p>
              <strong>Height:</strong> 5'10" (177.8 cm)
            </p>
            <p>
              <strong>Diet:</strong> Non-Vegetarian
            </p>
            <p>
              <strong>Smoking/Drinking:</strong> No
            </p>
          </div>

          {/* ----- Educational & Professional ----- */}
          <div className="biodata-section">
            <h3 className="section-title">
              Educational &amp; Professional Details
            </h3>
            <p>
              <strong>Education:</strong> B.Tech in Electronics &amp;
              Communication Engineering, Manav Rachna College of Engineering
            </p>
            <p>
              <strong>Profession:</strong> Working at EY India
            </p>
            <p>
              <strong>Annual Income:</strong> ₹22 Lakhs per annum
            </p>
            <p>
              <strong>Skills:</strong> Internal Audit, Data Analytics, Web
              Application Development
            </p>
          </div>

          {/* ----- Lifestyle & Personality ----- */}
          <div className="biodata-section">
            <h3 className="section-title">Lifestyle &amp; Personality</h3>
            <p>
              <strong>Hobbies:</strong> Travelling, Driving, Reading, Music,
              Technology
            </p>
            <p>
              <strong>Lifestyle:</strong> Exercises regularly, follows a healthy
              diet
            </p>
            <p>
              <strong>Personality Traits:</strong> Ambitious, Hard-working,
              Positive Thinker
            </p>
            <p>
              <strong>Languages Known:</strong> Hindi, English, understands
              Punjabi
            </p>
          </div>

          {/* ----- Future Plans ----- */}
          <div className="biodata-section">
            <h3 className="section-title">Future Plans</h3>
            <p>
              I aspire to build AI-powered applications using ML and LLMs for
              impactful automation and decision-making.
            </p>
          </div>

          {/* ----- Family Background ----- */}
          <div className="biodata-section">
            <h3 className="section-title">Family Background</h3>
            <ul>
              <li>
                <strong>Father:</strong> Electrical Contractor
              </li>
              <li>
                <strong>Mother:</strong> Homemaker
              </li>
              <li>
                <strong>Brother:</strong> Manager at Publicis Sapient
              </li>
              <li>
                <strong>Bhabhi Ji:</strong> Manager at Yamaha Consulting
              </li>
            </ul>
          </div>

          {/* ----- Contact ----- */}
          <div className="biodata-section">
            <h3 className="section-title">Contact Details</h3>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+919717740080">+91-9717740080</a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:rahulapps29@gmail.com">rahulapps29@gmail.com</a>
            </p>
          </div>
        </div>
      </div>

      {/* Sticky footer print button */}
      <div className="print-btn-wrapper">
        <button onClick={handlePrint} className="print-btn">
          Print Biodata
        </button>
      </div>
    </div>
  );
};

export default Biodata;
