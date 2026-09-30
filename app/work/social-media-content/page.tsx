import Link from "next/link";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";

export default function SocialMediaContentPage() {
  return (
    <main className="project-page">
      <div className="project-container">
        <Link href="/#work" className="back-link">
          <FiArrowLeft size={16} />
          Back to selected work
        </Link>

        <header className="project-header">
          <p className="project-category">SOCIAL MEDIA CONTENT</p>

          <h1>30 Social Media Content Ideas for a Small Business</h1>

          <p className="project-intro">
            A practical content guide designed to help small businesses
            consistently create useful, engaging, and promotional social
            media posts.
          </p>

          <div className="project-meta">
            <span>Content Strategy</span>
            <span>Social Media</span>
            <span>Small Business</span>
          </div>
        </header>

        <div className="project-image">
  <img
    src="/images/social.jpg"
    alt="Social media content planning workspace"
  />
</div>

        <article className="project-content">
          <p>
            Creating social media content consistently can be challenging
            for small businesses. Between serving customers, managing daily
            operations, and growing the business, it can be difficult to
            constantly think of new post ideas.
          </p>

          <p>
            A simple content strategy can make the process easier. Instead
            of posting only when there is something to promote, businesses
            can create a mixture of educational, promotional, storytelling,
            engagement, and customer-focused content.
          </p>

          <h2>1. Educational Content</h2>

          <p>
            Educational posts help businesses provide useful information
            while demonstrating their knowledge and experience.
          </p>

          <p>
            Examples include quick tips, how-to guides, common mistakes,
            industry facts, frequently asked questions, and simple
            explanations of complicated topics.
          </p>

          <h2>2. Promotional Content</h2>

          <p>
            Promotional posts can introduce customers to products, services,
            special offers, new arrivals, discounts, or upcoming events.
          </p>

          <p>
            The goal is to communicate the value of the offer clearly
            without making every social media post feel like an advertisement.
          </p>

          <h2>3. Storytelling Content</h2>

          <p>
            Stories give audiences an opportunity to connect with the people
            behind a business.
          </p>

          <p>
            Businesses can share their origin story, important milestones,
            challenges they have overcome, lessons learned, or the reasons
            they started the business.
          </p>

          <h2>4. Engagement Posts</h2>

          <p>
            Social media works best when it creates conversations. Questions,
            polls, quizzes, this-or-that posts, and opinion-based questions
            can encourage followers to participate.
          </p>

          <p>
            Instead of simply telling people something, engagement content
            invites them to respond.
          </p>

          <h2>5. Customer-Focused Content</h2>

          <p>
            Customers can become an important part of a business's content
            strategy.
          </p>

          <p>
            Businesses can highlight testimonials, frequently asked
            questions, customer experiences, product results, or stories
            about how a service helped solve a customer's problem.
          </p>

          <h2>6. Behind-the-Scenes Content</h2>

          <p>
            Audiences often enjoy seeing what happens behind the finished
            product or service.
          </p>

          <p>
            Businesses can show how products are prepared, how a team works,
            how orders are packaged, or what a typical day looks like.
          </p>

          <h2>7. Helpful Tips</h2>

          <p>
            Short tips are easy for audiences to consume and can provide
            consistent value.
          </p>

          <p>
            A business could create a weekly series of practical tips
            related to its products, services, industry, or customers.
          </p>

          <h2>8. Frequently Asked Questions</h2>

          <p>
            Questions customers regularly ask can become excellent social
            media content.
          </p>

          <p>
            Turning common questions into posts allows businesses to educate
            potential customers while reducing confusion about their
            products or services.
          </p>

          <h2>9. Customer Appreciation</h2>

          <p>
            Businesses can use social media to thank their customers and
            recognize their support.
          </p>

          <p>
            Simple appreciation posts can help strengthen relationships and
            make customers feel valued.
          </p>

          <h2>10. Calls to Action</h2>

          <p>
            A strong social media post should make it clear what the reader
            can do next.
          </p>

          <p>
            Depending on the goal, the call to action might ask people to
            comment, share, visit a website, send a message, sign up, or
            learn more.
          </p>

          <h2>Creating a Balanced Content Strategy</h2>

          <p>
            The most effective social media strategy is not necessarily the
            one that posts the most. It is one that consistently provides
            useful content while supporting the goals of the business.
          </p>

          <p>
            By combining educational, promotional, storytelling,
            engagement, and customer-focused posts, a small business can
            create a more varied and sustainable content calendar.
          </p>

          <h2>Final Thoughts</h2>

          <p>
            Social media content does not have to be complicated. The best
            place to start is by understanding the audience, identifying
            useful topics, and creating content with a clear purpose.
          </p>

          <div className="project-cta">
            <h2>Need content for your business?</h2>

            <p>
              I can help turn your ideas, services, and expertise into clear,
              engaging content for your website and social media channels.
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