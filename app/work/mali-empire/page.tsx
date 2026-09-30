import Link from "next/link";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";

export default function MaliEmpirePage() {
  return (
    <main className="project-page">
      <div className="project-container">
        <Link href="/#work" className="back-link">
          <FiArrowLeft size={16} />
          Back to selected work
        </Link>

        <header className="project-header">
          <p className="project-category">HISTORICAL WRITING</p>

          <h1>The Mali Empire and the Rise of Mansa Musa</h1>

          <p className="project-intro">
            A documentary-style historical story exploring the rise of the
            Mali Empire, its trade networks, political power, scholarship,
            and the famous pilgrimage of Mansa Musa.
          </p>

          <div className="project-meta">
            <span>Research</span>
            <span>African History</span>
            <span>Documentary</span>
          </div>
        </header>

        <div className="project-image">
  <img
    src="/images/mali.jpg"
    alt="Historical depiction of the Mali Empire and Mansa Musa"
  />
</div>

        <article className="project-content">
          <p>
            In the fourteenth century, a ruler from West Africa crossed the
            Sahara with so much gold that his journey became famous far beyond
            the borders of his empire.
          </p>

          <p>
            His name was Mansa Musa, ruler of the Mali Empire. His pilgrimage
            to Mecca in 1324 became one of the most famous journeys associated
            with medieval West Africa.
          </p>

          <p>
            But the story of Mansa Musa is about more than gold. His rise was
            connected to a powerful empire built on trade, agriculture,
            political organization, scholarship, and control of important
            commercial routes across West Africa.
          </p>

          <h2>The Rise of Mali</h2>

          <p>
            The Mali Empire emerged in West Africa during the thirteenth
            century. Its origins are closely associated with Sundiata Keita,
            who is remembered in both historical sources and oral traditions
            as a central figure in the foundation of the empire.
          </p>

          <p>
            Mali developed in the region surrounding the upper Niger River.
            This location gave the growing state access to agricultural land
            as well as important commercial routes.
          </p>

          <p>
            Over time, Mali expanded its influence and became an important
            political and economic power in the western Sudan.
          </p>

          <h2>Gold and Salt</h2>

          <p>
            Trade was central to Mali's wealth and influence. Gold from
            regions to the south moved through commercial networks toward
            markets in North Africa.
          </p>

          <p>
            Salt traveled southward from the Sahara and North African
            regions. Other goods, including textiles, horses, metals, and
            agricultural products, also moved through these networks.
          </p>

          <p>
            Mali's importance came not simply from possessing gold, but from
            its position within a wider trading system connecting different
            parts of Africa.
          </p>

          <h2>Mansa Musa Becomes Ruler</h2>

          <p>
            Mansa Musa came to power around the early fourteenth century.
            During his reign, Mali reached a period of considerable political
            and economic influence.
          </p>

          <p>
            His rule helped strengthen Mali's connections with the wider
            Islamic world while the empire continued to depend on established
            West African economic and political systems.
          </p>

          <h2>The Famous Pilgrimage</h2>

          <p>
            In 1324, Mansa Musa traveled to Mecca to perform the hajj.
            Medieval accounts describe a large and impressive caravan
            accompanying him across North Africa.
          </p>

          <p>
            The journey passed through important cities, including Cairo.
            Accounts by later writers emphasized the enormous amount of gold
            associated with the Mali ruler and his entourage.
          </p>

          <p>
            Reports about the economic effects of Musa's spending in Cairo
            became part of the historical tradition surrounding his journey.
            Medieval accounts describe a significant disruption to the local
            value of gold.
          </p>

          <h2>More Than a Story About Wealth</h2>

          <p>
            Mansa Musa is sometimes described as the richest person who ever
            lived. Such modern comparisons are difficult to calculate
            reliably because medieval wealth cannot be directly converted
            into modern personal net-worth figures.
          </p>

          <p>
            What can be established more clearly is that Mali controlled
            important resources and trade routes and was a major political
            power in medieval West Africa.
          </p>

          <h2>Learning and Architecture</h2>

          <p>
            Mali's influence also extended into scholarship and architecture.
            Cities such as Timbuktu became associated with Islamic learning,
            manuscripts, teachers, and scholars.
          </p>

          <p>
            Mansa Musa is also associated with major architectural projects,
            including the construction and expansion of mosques and other
            important buildings.
          </p>

          <p>
            These developments demonstrate that Mali's significance was not
            simply economic. The empire participated in intellectual,
            religious, cultural, and architectural networks that extended
            across the Sahara.
          </p>

          <h2>Mali on the Medieval World Map</h2>

          <p>
            News of Mansa Musa's pilgrimage helped make Mali more visible to
            observers outside West Africa.
          </p>

          <p>
            One famous example is the appearance of Mansa Musa on the
            fourteenth-century Catalan Atlas, where the ruler is depicted
            holding gold.
          </p>

          <p>
            The image became a powerful visual representation of how medieval
            mapmakers understood West Africa and its wealth.
          </p>

          <h2>A Lasting Legacy</h2>

          <p>
            The Mali Empire eventually declined as political power shifted
            and rival states expanded. But its historical legacy remained.
          </p>

          <p>
            The empire demonstrated the scale of political organization,
            commerce, agriculture, scholarship, and cultural exchange that
            existed in medieval West Africa.
          </p>

          <p>
            And Mansa Musa's pilgrimage remains one of the most famous
            episodes in African medieval history—not simply because of the
            gold he carried, but because the journey revealed the importance
            of a powerful West African empire to a much wider world.
          </p>

          <div className="project-cta">
            <h2>Need research-based storytelling?</h2>

            <p>
              I create accessible historical and documentary content that
              combines research, context, and engaging storytelling.
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