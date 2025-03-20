import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";
import partner4 from "../assets/partner4.jpg";
import partner5 from "../assets/partner5.png";
import partner6 from "../assets/partner6.png";

export default function HiringPartners() {
  return (
    <section className="client-section">
      <h2 className="section-title">Our Hiring Partners</h2>
      <div className="client-logos">
        {[partner1, partner2, partner3, partner4, partner5, partner6].map(
          (partner, index) => (
            <img key={index} src={partner} alt={`Partner ${index + 1}`} />
          )
        )}
      </div>
    </section>
  );
}
