const services = [
  {
    number: "01",
    title: "Blog & Article Writing",
    description:
      "Well-structured, engaging articles that educate readers and keep them interested from beginning to end.",
  },
  {
    number: "02",
    title: "SEO Content",
    description:
      "Search-friendly content that combines useful information, natural keywords, strong structure, and readability.",
  },
  {
    number: "03",
    title: "Website Copy",
    description:
      "Clear website content that communicates your brand, services, and value proposition effectively.",
  },
  {
    number: "04",
    title: "Social Media Content",
    description:
      "Captions, educational posts, promotional content, storytelling posts, and content ideas for social platforms.",
  },
  {
    number: "05",
    title: "Technical & Educational Writing",
    description:
      "Complex subjects explained in a simple, accessible way without losing important details.",
  },
  {
    number: "06",
    title: "Historical & Documentary Writing",
    description:
      "Research-based storytelling that brings historical people, places, cultures, and events to life.",
  },
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-heading">
        <div>
          <p className="section-label-text">02 — SERVICES</p>

          <h2>
            How I can
            <br />
            <em>help.</em>
          </h2>
        </div>

        <p className="services-intro">
          From a single article to ongoing content support, I can help turn
          your ideas into polished, useful, and engaging content.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <span className="service-number">{service.number}</span>

            <h3>{service.title}</h3>

            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}