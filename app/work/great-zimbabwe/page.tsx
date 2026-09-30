import Link from "next/link";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";

export default function GreatZimbabwePage() {
  return (
    <main className="project-page">
      <div className="project-container">
        <Link href="/#work" className="back-link">
          <FiArrowLeft size={16} />
          Back to selected work
        </Link>

        <header className="project-header">
          <p className="project-category">HISTORICAL WRITING</p>

          <h1>Great Zimbabwe: Who Really Built This Ancient City?</h1>

          <p className="project-intro">
            An accessible historical exploration of Great Zimbabwe, its
            monumental stone architecture, its role in regional trade, and
            the evidence surrounding the people who built it.
          </p>

          <div className="project-meta">
            <span>Research</span>
            <span>African History</span>
            <span>Storytelling</span>
          </div>
        </header>

        <div className="project-image">
  <img
    src="/images/greatZ.jpg"
    alt="Great Zimbabwe stone ruins"
  />
</div>

        <article className="project-content">
          <p>
            Imagine discovering a massive stone city in southern Africa,
            surrounded by enormous walls built without modern cement or
            machinery.
          </p>

          <p>
            For centuries, Great Zimbabwe has attracted historians,
            archaeologists, travelers, and curious visitors. But one question
            has remained especially important: who actually built it?
          </p>

          <p>
            The archaeological evidence provides a clear answer. Great
            Zimbabwe was built by ancestors of the Shona-speaking peoples of
            the region.
          </p>

          <h2>What Was Great Zimbabwe?</h2>

          <p>
            Great Zimbabwe was a large settlement in southeastern Africa,
            located in what is now Zimbabwe. It flourished between roughly
            the eleventh and fifteenth centuries.
          </p>

          <p>
            The site is famous for its impressive dry-stone architecture.
            Large granite blocks were carefully stacked without mortar to
            create walls, enclosures, passages, and other structures.
          </p>

          <h2>The Great Enclosure</h2>

          <p>
            One of the most remarkable structures at the site is the Great
            Enclosure.
          </p>

          <p>
            Its enormous curved stone walls demonstrate the skill of the
            builders and the resources available to the society that created
            the settlement.
          </p>

          <p>
            The famous Conical Tower is also located within the Great
            Enclosure. Its exact purpose remains debated, but its presence
            highlights the architectural complexity of the site.
          </p>

          <h2>A Center of Power</h2>

          <p>
            Great Zimbabwe was more than a collection of stone walls. It was
            part of a complex society with political authority, agriculture,
            cattle production, craft specialization, and long-distance trade.
          </p>

          <p>
            The settlement was connected to a wider regional network that
            extended toward the Indian Ocean.
          </p>

          <h2>Trade Across the Indian Ocean</h2>

          <p>
            Archaeologists have discovered imported objects at Great
            Zimbabwe, including items that originated far beyond southern
            Africa.
          </p>

          <p>
            Finds such as Chinese ceramics, Persian or Middle Eastern
            objects, and glass beads provide evidence of connections between
            Great Zimbabwe and wider Indian Ocean trading networks.
          </p>

          <p>
            Gold and other resources from the interior were important to
            regional trade, helping connect communities in southern Africa
            with coastal commercial centers.
          </p>

          <h2>Who Built It?</h2>

          <p>
            Modern archaeological research identifies the builders of Great
            Zimbabwe with the ancestors of the Shona-speaking peoples.
          </p>

          <p>
            Archaeological evidence includes the settlement's architecture,
            material culture, environmental remains, and its relationship to
            other sites in the region.
          </p>

          <p>
            Earlier European interpretations sometimes attributed the ruins
            to outsiders because some observers refused to accept that
            complex monumental architecture could have been produced by
            African societies.
          </p>

          <p>
            Those interpretations are rejected by modern archaeological
            evidence.
          </p>

          <h2>Why the Myth Persisted</h2>

          <p>
            During the colonial period, some writers promoted theories that
            connected Great Zimbabwe to distant civilizations rather than
            recognizing the achievements of local African societies.
          </p>

          <p>
            These ideas were not supported by the archaeological evidence,
            but they influenced how the site was presented to the public for
            many years.
          </p>

          <p>
            Modern scholarship has helped correct this historical record and
            place Great Zimbabwe within the history of southern African
            societies.
          </p>

          <h2>Why Was Great Zimbabwe Abandoned?</h2>

          <p>
            Great Zimbabwe declined as a major center around the fifteenth
            century.
          </p>

          <p>
            Researchers have considered several possible factors, including
            changes in environmental conditions, resource pressures, and
            shifts in trade and political organization.
          </p>

          <p>
            There is no single explanation that completely accounts for the
            site's transformation, and archaeological research continues to
            refine our understanding.
          </p>

          <h2>A Monument to African Civilization</h2>

          <p>
            Great Zimbabwe is important because it provides physical evidence
            of a sophisticated society that developed in southern Africa
            before European colonial rule.
          </p>

          <p>
            Its architecture, trade connections, agriculture, political
            organization, and craftsmanship reveal a society capable of
            building and sustaining a major center over centuries.
          </p>

          <p>
            Today, the ruins stand as one of Africa's most significant
            archaeological sites and an important reminder of the depth and
            diversity of African history.
          </p>

          <div className="project-cta">
            <h2>Need historical storytelling?</h2>

            <p>
              I create research-based historical content that turns complex
              subjects into clear, engaging stories for modern audiences.
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