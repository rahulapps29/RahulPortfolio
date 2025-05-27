import React from "react";
import "./PricingPage.css";
import { FaCheck, FaTimes } from "react-icons/fa";

const features = [
  {
    label: "YouTube Link Integration for Video Lectures and Demos",
    custom: true,
  },
  {
    label: "Basic Payment Integration (Manual UPI or Razorpay Link)",
    custom: true,
  },
  {
    label: "Payment Gateway Setup for Fees and Subscriptions",
    custom: true,
  },
  {
    label: "Basic Test Pages (Static Quizzes, No Analytics)",
    custom: true,
  },
  {
    label: "Test Pages with Timeline, Score Tracking, and Reporting",
    custom: true,
  },
  {
    label: "Limited Website Maintenance (1 Month Only)",
    custom: false,
  },
  {
    label: "Website Maintenance for Bug Fixes and Updates",
    custom: true,
  },
  {
    label: "Pages for Classes and Admission Form (Static)",
    custom: false,
  },
  {
    label: "Dedicated Web Pages for Classes, Teachers, and Admission Forms",
    custom: true,
  },
  {
    label: "Facebook Page Link Integration",
    custom: true,
  },
  {
    label:
      "Target Students: Classes 9/10/11/12, JEE, NEET (CBSE/IB/IGCSE/ICSC/ISC)",
    custom: true,
  },
  {
    label: "Success Stories (Static List or Images)",
    custom: false,
  },
  {
    label: "Successful Student Details with Photos, Results, and Testimonials",
    custom: true,
  },
  {
    label: "Google Sign-In for Students",
    custom: true,
  },
  {
    label: "Google Sign-In for Teachers",
    custom: true,
  },
  {
    label: "Basic Admin Panel (Manage Pages Only)",
    custom: false,
  },
  {
    label: "Admin Panel to Manage Content, Students, and Results",
    custom: true,
  },
  {
    label: "Fully Mobile Responsive Design",
    custom: true,
  },
  {
    label: "Contact Form Integration Only (No Email Automation)",
    custom: false,
  },
  {
    label: "Email Notifications and Contact Form Integration",
    custom: true,
  },
  {
    label: "Live Chat or WhatsApp Support Widget (Optional)",
    custom: true,
  },
  {
    label: "SEO-Friendly Code Structure (No Advanced Optimization)",
    custom: false,
  },
  {
    label: "SEO-Optimized Structure for Better Search Ranking",
    custom: true,
  },
  {
    label: "Custom Domain",
    custom: true,
  },
  {
    label: "Student Reviews and Course Feedback Submission",
    custom: true,
  },
  {
    label: "Course Rating System (1 to 5 Stars) with Average Rating Display",
    custom: true,
  },
  {
    label: "Custom Features / APIs",
    custom: true,
  },
];

const renderFeature = (value) => {
  if (value === true) return <FaCheck className="icon-true" />;
  if (value === false) return <FaTimes className="icon-false" />;
  return <span className="icon-text">{value}</span>;
};

const PricingPage = () => {
  return (
    <div className="pricing-wrapper">
      <div className="pricing-card">
        <h2>Custom Package</h2>
        <div className="pricing-price">₹85K – ₹95K</div>
        <ul className="pricing-list">
          {features.map((feature, index) => (
            <li key={index}>
              {renderFeature(feature.custom)} {feature.label}
            </li>
          ))}
        </ul>
        <button className="pricing-btn">Get Quote</button>
      </div>
    </div>
  );
};

export default PricingPage;
