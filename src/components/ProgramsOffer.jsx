export default function Programs() {
  const programs = [
    {
      title: "🌐 Web Development",
      description:
        "Master front-end and back-end technologies to build modern, responsive websites and web applications.",
      image: "http://bit.ly/4kAw1MF",
    },
    {
      title: "📊 Data Science",
      description:
        "Learn data analysis, visualization, and machine learning to uncover valuable insights from data.",
      image: "https://bit.ly/42h9xJm",
    },
    {
      title: "🛡️ Cybersecurity",
      description:
        "Understand security principles and learn how to protect applications from vulnerabilities and attacks.",
      image: "https://bit.ly/3FzUTE8",
    },
    {
      title: "🎨 UI/UX Design",
      description:
        "Explore user-centric design principles to create visually appealing and intuitive digital experiences.",
      image: "https://bit.ly/3Y1uNjH",
    },
  ];

  return (
    <section className="programs-section" id="programs-section">
      <h2 className="section-title">
        🚀 <span className="highlight">Programs</span> We Offer!!
      </h2>
      <p className="section-description">
        Gain industry-relevant skills with our expert-led courses. Explore our
        specialized programs and kickstart your tech career today!
      </p>

      <div className="programs-grid">
        {programs.map((program, index) => (
          <div key={index} className="program-card">
            <img
              src={program.image}
              alt={program.title}
              className="program-image"
            />
            <h3 className="program-title">{program.title}</h3>
            <p className="program-description">{program.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
