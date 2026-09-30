import Link from "next/link";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";

export default function WebDevelopmentPage() {
  return (
    <main className="project-page">
      <div className="project-container">
        <Link href="/#work" className="back-link">
          <FiArrowLeft size={16} />
          Back to selected work
        </Link>

        <header className="project-header">
          <p className="project-category">TECHNICAL WRITING</p>

          <h1>
            10 Things Every Beginner Web Developer Should Learn
          </h1>

          <p className="project-intro">
            A beginner-friendly guide covering the essential skills and
            concepts new web developers should understand when starting
            their journey.
          </p>

          <div className="project-meta">
            <span>Technical Writing</span>
            <span>Education</span>
            <span>Web Development</span>
          </div>
        </header>

        <div className="project-image">
  <img
    src="/images/web.jpg"
    alt="Web development workspac"
  />
</div>

        <article className="project-content">
          <p>
            Web development can feel overwhelming when you are just getting
            started. There are programming languages, frameworks, databases,
            APIs, development tools, and countless technologies to learn.
          </p>

          <p>
            The good news is that beginners do not need to learn everything
            at once. Building a strong foundation in a few important areas
            can make the rest of the journey much easier.
          </p>

          <h2>1. HTML</h2>

          <p>
            HTML, or HyperText Markup Language, provides the basic structure
            of a web page. Beginners should understand headings, paragraphs,
            links, images, lists, forms, and semantic HTML elements.
          </p>

          <h2>2. CSS</h2>

          <p>
            CSS controls how websites look and feel. Understanding layouts,
            spacing, typography, colors, responsive design, Flexbox, and
            Grid gives developers the ability to create attractive and
            usable interfaces.
          </p>

          <h2>3. JavaScript</h2>

          <p>
            JavaScript adds behavior and interactivity to websites. Beginners
            should learn variables, functions, arrays, objects, conditions,
            loops, events, and basic DOM manipulation.
          </p>

          <h2>4. Git</h2>

          <p>
            Git is an important version-control tool. It allows developers
            to track changes, experiment safely, collaborate with others,
            and return to previous versions of their projects.
          </p>

          <h2>5. APIs</h2>

          <p>
            APIs allow different software systems to communicate with each
            other. Learning how requests, responses, JSON, and HTTP methods
            work gives developers a foundation for building applications
            that interact with external services.
          </p>

          <h2>6. Responsive Design</h2>

          <p>
            Websites need to work across different screen sizes. Beginners
            should understand media queries, flexible layouts, relative
            units, and mobile-first design principles.
          </p>

          <h2>7. Debugging</h2>

          <p>
            Errors are a normal part of programming. Learning how to read
            error messages, use browser developer tools, inspect code, and
            test solutions is one of the most valuable skills a beginner
            can develop.
          </p>

          <h2>8. Deployment</h2>

          <p>
            Building a website is only part of the process. Developers also
            need to understand how projects are deployed so that users can
            access them online.
          </p>

          <h2>9. Databases</h2>

          <p>
            Many applications need to store information. Learning basic
            database concepts such as tables, records, queries, and
            relationships provides an important foundation for application
            development.
          </p>

          <h2>10. Building Projects</h2>

          <p>
            Perhaps the most important step is actually building things.
            Projects allow beginners to apply what they have learned,
            discover problems, improve their skills, and create work they
            can show to potential employers or clients.
          </p>

          <h2>Final Thoughts</h2>

          <p>
            Learning web development is a gradual process. Instead of trying
            to master every technology immediately, beginners can focus on
            developing strong fundamentals and applying them through
            practical projects.
          </p>

          <div className="project-cta">
            <h2>Need technical content like this?</h2>

            <p>
              I create clear, accessible content that explains technical
              subjects without overwhelming the reader.
            </p>

            <Link href="/#contact" className="project-cta-button">
              Start a project
              <FiArrowUpRight size={17} />
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}