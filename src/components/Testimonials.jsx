import React from "react";
import Slider from "react-slick";
import { Star } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "This platform has transformed my learning experience! The mentors are incredibly supportive, and the hands-on projects helped me gain real-world skills.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
    },
    {
      name: "Sarah Lee",
      feedback:
        "Easy Learning provides excellent courses! The content is up-to-date, and I feel more confident in my skills after completing my program.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 4,
    },
    {
      name: "Michael Smith",
      feedback:
        "The career support was a game changer for me. Thanks to their guidance, I landed my first tech job within two months after completing the course!",
      avatar: "https://randomuser.me/api/portraits/men/50.jpg",
      rating: 5,
    },
    {
      name: "Emma Johnson",
      feedback:
        "The learning environment here is just amazing. Interactive lessons, real-world projects, and great mentors!",
      avatar: "https://randomuser.me/api/portraits/women/60.jpg",
      rating: 5,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section className="testimonials" id="testimonial-section">
      <div className="container">
        <h2 className="section-title">
          <span className="highlight">Our Testimonials</span>
        </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="avatar"
              />
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
              <div className="rating">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <Star key={i} size={18} color="#FFD700" fill="#FFD700" />
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
