import React from "react";
import { CheckCircle, ShieldCheck, Users } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Expert Instructors",
      description:
        "Learn from industry-leading professionals with real-world experience.",
      icon: <CheckCircle size={40} color="#007bff" />,
    },
    {
      title: "Hands-On Projects",
      description:
        "Work on real projects to gain practical experience and build a strong portfolio.",
      icon: <ShieldCheck size={40} color="#28a745" />,
    },
    {
      title: "Career Support",
      description:
        "Get guidance from mentors, resume reviews, and job placement assistance.",
      icon: <Users size={40} color="#ff9800" />,
    },
  ];

  return (
    <section className="why-choose-us" id="choose-us-section">
      <div className="container">
        <h2 className="section-title">
          Why <span className="highlight">Choose Us?</span>
        </h2>
        <p className="section-description">
          We provide the best learning experience with expert mentors,
          real-world projects, and career support.
        </p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
