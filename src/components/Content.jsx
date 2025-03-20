import bgImage from "../assets/background-image.jpg";

export default function Content() {
  return (
    <>
      <section className="content">
        <div className="text-content">
          <h2>
            Unlock Your <span className="highlight">Potential</span>
            <br />
            With the Right Knowledge
          </h2>
          <p>
            Success begins with learning.{" "}
            <span className="highlight">Empower</span> yourself with our
            expert-led programs and build a brighter future.
          </p>
        </div>
        <img src={bgImage} alt="Learning Concept" className="content-image" />
      </section>
    </>
  );
}
