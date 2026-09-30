import {
  FiCheckCircle,
  FiClock,
  FiFileText,
  FiMessageCircle,
  FiSearch,
  FiTarget,
} from "react-icons/fi";

const benefits = [
  {
    icon: FiSearch,
    title: "Well Researched",
    text: "I take time to understand the subject and create content based on reliable information.",
  },
  {
    icon: FiFileText,
    title: "Clear Writing",
    text: "Complex ideas are turned into simple, readable, and engaging content.",
  },
  {
    icon: FiTarget,
    title: "Audience Focused",
    text: "Every piece is written with the target audience and purpose in mind.",
  },
  {
    icon: FiCheckCircle,
    title: "Original Content",
    text: "I create original content with a natural voice and attention to quality.",
  },
  {
    icon: FiClock,
    title: "Reliable Delivery",
    text: "I value deadlines and aim to deliver polished work on schedule.",
  },
  {
    icon: FiMessageCircle,
    title: "Easy Communication",
    text: "Clear communication makes it easier to understand your ideas and expectations.",
  },
];

export default function WhyWorkWithMe() {
  return (
    <section className="why-section">
      <div className="why-heading">
        <p className="section-label-text">04 — WHY WORK WITH ME</p>

        <h2>
          Thoughtful writing.
          <br />
          <em>Reliable delivery.</em>
        </h2>
      </div>

      <div className="benefits-grid">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <div className="benefit-card" key={benefit.title}>
              <Icon size={21} />

              <div>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}