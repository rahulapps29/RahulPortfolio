import React from "react";
import "./CVpage.css";

const CVPage = () => {
  return (
    <div className="cv-container">
      <header className="cv-header">
        <h1>RAHUL LUTHRA</h1>
        <div className="contact-info">
          <p>
            <strong>Mobile:</strong> +91 9717740080
          </p>
          <p>
            <strong>Email:</strong> rahulluthra21@gmail.com
          </p>
        </div>
      </header>

      <section className="cv-section">
        <h2>Professional Summary</h2>
        <ul className="summary-list">
          <li>
            Passionate, customer-focused and result-oriented professional with
            10+ years of experience in Data Analytics with exposure to tools
            like{" "}
            <strong>
              Python (Pandas(multi-index), OS, NumPy, pandas), ACL, Arbutus,
              SAS, SQL Server, Tableau, PowerBI & MS Excel (Advanced)
            </strong>
            .
          </li>
          <li>
            Automated various <strong>ETL Projects</strong> and created various
            dashboards in{" "}
            <strong>Aviation (Pax Upgrade and baggage handling)</strong>, Health
            care. Procure to pay (Split PO, rate variation), Telecom (Revenue
            assurance).
          </li>
          <li>
            Created mutiple full stack projects in{" "}
            <strong>React Vite, Node Exress with MongoDB integration.</strong>{" "}
            <br /> Have a good understanding of creating an API using{" "}
            <strong>Nodejs</strong>, have expertise in Data object model
            manipulation using <strong>JavaScript</strong>.
          </li>
        </ul>
      </section>

      <section className="cv-section">
        <h2>Key Skills</h2>
        <div className="skills-section">
          <p>
            <strong>VERTICALS:</strong> Consulting & Domain Experience in
            Procure to Pay, Banking & Financial Services, Insurance, Aviation
            and Healthcare. Good understanding of SAP tables. Reconciliation,
            payroll (employee salary hike, promotion, gate entry analysis).
          </p>
        </div>
      </section>

      <section className="cv-section">
        <h2>Experience Summary</h2>

        <div className="experience-item">
          <h3>EY India LLP</h3>
          <p className="position-duration">
            Senior consultant (Nov 2022 to present)
          </p>
          <ul>
            <li>
              Performed reconciliation of books across different parties using{" "}
              <span className="tech-highlight">Python Pandas</span>
            </li>
            <li>
              Created and deployed ACL robots for P2P and journal Ledger testing
              for South African insurance company.
            </li>
            <li>
              Involved in Continuous control monitoring of Claims and Insurance
              policies of US based Insurance company.
            </li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Genpact Enterprise Risk Consulting LLP</h3>
          <p className="position-duration">
            Consultant (July 2018 to Oct 2022)
          </p>
          <ul>
            <li>
              Involved in preparing audit follow-up dashboard, resource
              utilization dashboard. Created Donut charts in Tableau which could
              be further drilled to grid view.
            </li>
            <li>
              Involved in creating Product holding summary for banking clients
              using Teradata, python, filtering data via regex, pandas with
              generation of logs through python logging.
            </li>
            <li>Scheduled Email reporting via python.</li>
            <li>
              Automated personalized email notification to Stake holder for the
              missing timesheet using ACL Exchange.
            </li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Protiviti India Member Firm</h3>
          <p className="position-duration">
            Consultant (May 2017 to June 2018)
          </p>
          <ul>
            <li>
              Worked as a Secondment (Internal auditor) in a Middle East
              Healthcare firm.
            </li>
            <li>
              Performed Core Controls:
              <ul className="nested-list">
                <li>
                  <strong>Procure to Pay</strong>
                  <ul>
                    <li>Splitting of Purchase Orders</li>
                    <li>Inconsistencies in the Vendor Master Data</li>
                  </ul>
                </li>
                <li>
                  <strong>Payroll</strong>
                  <ul>
                    <li>
                      Inadequacies in the process of salary stop payments for
                      terminated employees
                    </li>
                    <li>
                      Non-compliance to Sick Leave Policy, Unpaid Leaves Policy
                    </li>
                    <li>Underpayment of monthly airfare allowance</li>
                  </ul>
                </li>
                <li>
                  <strong>IT General Controls</strong>
                  <ul>
                    <li>Inadequate User Access Reviews on Shared Folders</li>
                    <li>Ineffective Logical User Access Reviews</li>
                    <li>
                      Non-Compliance to established Password Management policy
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Lagnam Infotech Solutions Pvt. Ltd.</h3>
          <p className="position-duration">
            Business Analyst (September-2016 to May-2017)
          </p>
          <ul>
            <li>
              Created cash reports dashboards (PowerBI) for investment broker
              form in the UK.
            </li>
            <li>
              Consolidated Investment deals in SQL server from various banks in
              a standard structure.
            </li>
            <li>
              Creation of exclusion process in SAS (Outside Teradata, Master
              Exclusion process) before running any marketing campaign.
            </li>
            <li>
              Processing of the External file for SMS and Email campaign in
              which we sent the External file to N3 after validating it via
              Regex (Python).
            </li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Substrata! Solutions Pvt. Ltd.</h3>
          <p className="position-duration">
            Data Analyst (December 2014 to April 2016)
          </p>
          <ul>
            <li>
              Continuous control monitoring for Discount variance in sales order
              across PAN India for Steel Company.
            </li>
            <li>Revenue Assurance ETL Project in ACL Exchange.</li>
            <li>
              Data gathering and process understanding from stakeholder and
              implementation in Arbutus analyzer for audit process of Procure to
              Pay and Payroll.
            </li>
          </ul>
        </div>
      </section>

      <section className="cv-section">
        <h2>Projects Undertaken</h2>
        <div className="project-item">
          <h3>Continuous Control Monitoring</h3>
          <p>
            <strong>Objective:</strong> Schedule Audit reports of PAX Upgrade
            and baggage handling in ACL Exchange which would be extracted by
            Tableau server on daily basis.
          </p>
          <p>
            <strong>Responsibilities:</strong> Performed the process end to end
            from ACL scripting to dashboard creation in Tableau.
          </p>
        </div>

        <div className="project-item">
          <h3>Scheduled reporting via Python</h3>
          <p>
            <strong>Objective:</strong> Scheduled reports from Teradata via as
            Email Body on a daily basis via Python.
          </p>
          <p>
            <strong>Responsibilities:</strong> Performed the process end to end
            from python scripting using pandas, regex, smtp, getpass and various
            modules of python and establishing Teradata connection to python.
          </p>
        </div>

        <div className="project-item">
          <h3>Deployment of dashboards in Tableau and PowerBI</h3>
          <p>
            Created various charts in PowerBI like Pie, Line, Tree Map, Tabular,
            Matrix, Funnel chart. Created Bookmarks, Page navigation link as
            when required in the PowerBI dashboard.
          </p>
        </div>
      </section>

      <section className="cv-section">
        <h2>Academic Credentials</h2>
        <ul className="education-list">
          <li>
            Bachelor in Technology (B. Tech) (Electronics & communication) from
            Maharishi Dayanand University, 2013.
          </li>
          <li>
            10+2 (Science) from MVN Aravali Hills School, Faridabad in 2009 with
            82.2%.
          </li>
          <li>
            Secondary education from St. Joseph's convent school Faridabad in
            2007 with 84.6%.
          </li>
        </ul>
      </section>

      <section className="cv-section">
        <h2>Achievements</h2>
        <ul className="achievements-list">
          <li>Won the Second Prize in the Technical Quiz in my college.</li>
          <li>
            Created a snippet automatic Path Finder in my tool Arbutus analyzer
            so that no matter where you put the project in the computer system
            it will automatically generate the project path, Fil File path, Raw
            Data Path in the dialog box which ease work of the user.
          </li>
          <li>
            Created the Snippet to auto normalize the complete table on the
            basis of data type of all the fields.
          </li>
          <li>
            Created dynamic query to consolidate data in SQL Server by
            identifying the Table Layout of input data.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default CVPage;
