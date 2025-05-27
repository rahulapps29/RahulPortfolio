import React, { useState } from "react";
import "./PricingPage.css";
import { FaCheck, FaTimes } from "react-icons/fa";

const features = [
  {
    label: "YouTube Link Integration for Video Lectures and Demos",
    standard: true,
    premium: true,
    custom: true,
  },
  {
    label: "Basic Payment Integration (Manual UPI or Razorpay Link)",
    standard: true,
    premium: false,
    custom: true,
  },
  {
    label: "Payment Gateway Setup for Fees and Subscriptions",
    standard: false,
    premium: true,
    custom: true,
  },
  {
    label: "Basic Test Pages (Static Quizzes, No Analytics)",
    standard: true,
    premium: false,
    custom: true,
  },
  {
    label: "Test Pages with Timeline, Score Tracking, and Reporting",
    standard: false,
    premium: true,
    custom: true,
  },
  {
    label: "Limited Website Maintenance (1 Month Only)",
    standard: true,
    premium: false,
    custom: false,
  },
  {
    label: "Website Maintenance for Bug Fixes and Updates",
    standard: false,
    premium: true,
    custom: true,
  },
  {
    label: "Pages for Classes and Admission Form (Static)",
    standard: true,
    premium: false,
    custom: false,
  },
  {
    label: "Dedicated Web Pages for Classes, Teachers, and Admission Forms",
    standard: false,
    premium: true,
    custom: true,
  },
  {
    label: "Facebook Page Link Integration",
    standard: true,
    premium: true,
    custom: true,
  },
  {
    label:
      "Target Students: Classes 9/10/11/12, JEE, NEET (CBSE/IB/IGCSE/ICSC/ISC)",
    standard: true,
    premium: true,
    custom: true,
  },
  {
    label: "Success Stories (Static List or Images)",
    standard: true,
    premium: false,
    custom: false,
  },
  {
    label: "Successful Student Details with Photos, Results, and Testimonials",
    standard: false,
    premium: true,
    custom: true,
  },
  {
    label: "Google Sign-In for Students",
    standard: true,
    premium: true,
    custom: true,
  },
  {
    label: "Google Sign-In for Teachers",
    standard: false,
    premium: true,
    custom: true,
  },
  {
    label: "Basic Admin Panel (Manage Pages Only)",
    standard: true,
    premium: false,
    custom: false,
  },
  {
    label: "Admin Panel to Manage Content, Students, and Results",
    standard: false,
    premium: true,
    custom: true,
  },
  {
    label: "Fully Mobile Responsive Design",
    standard: true,
    premium: true,
    custom: true,
  },
  {
    label: "Contact Form Integration Only (No Email Automation)",
    standard: true,
    premium: false,
    custom: false,
  },
  {
    label: "Email Notifications and Contact Form Integration",
    standard: false,
    premium: true,
    custom: true,
  },
  {
    label: "Live Chat or WhatsApp Support Widget (Optional)",
    standard: false,
    premium: true,
    custom: true,
  },
  {
    label: "SEO-Friendly Code Structure (No Advanced Optimization)",
    standard: true,
    premium: false,
    custom: false,
  },
  {
    label: "SEO-Optimized Structure for Better Search Ranking",
    standard: false,
    premium: true,
    custom: true,
  },
  { label: "Custom Domain", standard: true, premium: true, custom: true },
  {
    label: "Student Reviews and Course Feedback Submission",
    standard: false,
    premium: true,
    custom: true,
  },
  {
    label: "Course Rating System (1 to 5 Stars) with Average Rating Display",
    standard: false,
    premium: true,
    custom: true,
  },
  {
    label: "Custom Features / APIs",
    standard: false,
    premium: false,
    custom: true,
  },
];

const keyHighlights = [
  "YouTube Link Integration for Video Lectures and Demos",
  "Payment Gateway Setup for Fees and Subscriptions",
  "Pages for Classes and Admission Form (Static)",
  "Admin Panel to Manage Content, Students, and Results",
  "Live Chat or WhatsApp Support Widget (Optional)",
  "SEO-Optimized Structure for Better Search Ranking",
  "Custom Features / APIs",
];

const plans = [
  {
    name: "Standard",
    price: "₹25K – ₹35K",
    key: "standard",
    buttonText: "Choose Standard",
  },
  {
    name: "Premium",
    price: "₹55K – ₹65K",
    key: "premium",
    buttonText: "Choose Premium",
  },
  {
    name: "Custom",
    price: "₹85K – ₹95K",
    key: "custom",
    buttonText: "Get Quote",
  },
];

const renderFeature = (value) => {
  if (value === true) return <FaCheck className="icon-true" />;
  if (value === false) return <FaTimes className="icon-false" />;
  return <span className="icon-text">{value}</span>;
};

const PricingPage = () => {
  const [showAll, setShowAll] = useState(false);

  const customPlan = plans.filter((plan) => plan.key === "custom");

  return (
    <div className="pricing-wrapper">
      <div className="pricing-carousel">
        {customPlan.map((plan) => (
          <div className="pricing-card" key={plan.key}>
            <h2>{plan.name} Package</h2>
            <div className="pricing-price">{plan.price}</div>
            <ul className="pricing-list">
              {(showAll
                ? features
                : features.filter((f) => keyHighlights.includes(f.label))
              ).map((feature, index) => (
                <li key={index}>
                  {renderFeature(feature[plan.key])} {feature.label}
                </li>
              ))}
            </ul>
            <button className="pricing-btn">{plan.buttonText}</button>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <button
          className="pricing-btn-toggle"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Show Less Features" : "View Full Feature Comparison"}
        </button>
      </div>
    </div>
  );
};

export default PricingPage;
