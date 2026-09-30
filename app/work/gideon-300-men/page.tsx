import Link from "next/link";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";

export default function GideonPage() {
  return (
    <main className="project-page">
      <div className="project-container">
        <Link href="/#work" className="back-link">
          <FiArrowLeft size={16} />
          Back to selected work
        </Link>

        <header className="project-header">
          <p className="project-category">YOUTUBE SCRIPTWRITING</p>

          <h1>The Man Who Defeated an Army With Just 300 Men</h1>

          <p className="project-intro">
            A biblical documentary-style script retelling the story of
            Gideon&apos;s 300 men and the dramatic victory described in
            Judges 7.
          </p>

          <div className="project-meta">
            <span>YouTube Scriptwriting</span>
            <span>Biblical Storytelling</span>
            <span>Documentary</span>
          </div>
        </header>

        <article className="project-content">
          <h2>The Impossible Battle</h2>

          <p>
            Imagine standing on a battlefield, surrounded by an enemy army
            so large that victory seems impossible.
          </p>

          <p>
            That was the situation facing Gideon and the Israelites. The
            Midianites, Amalekites, and other eastern forces had gathered
            against Israel, and their numbers appeared overwhelming.
          </p>

          <p>
            Gideon had an army of 32,000 men. But instead of telling him to
            gather even more soldiers, God gave him an instruction that
            seemed completely unreasonable: reduce the army.
          </p>

          <h2>32,000 Becomes 10,000</h2>

          <p>
            Gideon&apos;s army began with 32,000 men. Yet God told Gideon
            that the army was too large.
          </p>

          <p>
            First, those who were afraid were allowed to return home. After
            this reduction, only 10,000 men remained.
          </p>

          <p>
            But even 10,000 was still too many.
          </p>

          <p>
            Gideon was instructed to bring the men down to the water and
            observe how they drank. Through this test, the army was reduced
            again.
          </p>

          <p>
            In the end, only 300 men remained.
          </p>

          <h2>Only 300 Remain</h2>

          <p>
            Three hundred men against an enormous enemy force.
          </p>

          <p>
            From a human perspective, the situation looked hopeless. But
            this was exactly the point of the story. The victory would not
            be explained by the size of Israel&apos;s army or the strength
            of its weapons.
          </p>

          <p>
            Gideon and his 300 men were about to enter one of the most
            remarkable battles recorded in the biblical narrative.
          </p>

          <h2>Trumpets, Jars, and Torches</h2>

          <p>
            The 300 men were not given conventional weapons for a direct
            attack.
          </p>

          <p>
            Instead, they carried trumpets, empty jars, and torches hidden
            inside the jars.
          </p>

          <p>
            Under the cover of darkness, Gideon divided the men into groups
            and positioned them around the enemy camp.
          </p>

          <p>
            Then came the signal.
          </p>

          <p>
            The men blew their trumpets. They smashed the jars, revealing
            the torches inside, and shouted:
          </p>

          <p>
            <strong>
              &quot;A sword for the Lord and for Gideon!&quot;
            </strong>
          </p>

          <h2>The Midianite Camp Panics</h2>

          <p>
            The sudden noise, lights, and confusion caused panic throughout
            the enemy camp.
          </p>

          <p>
            The biblical account describes the enemy turning against itself
            in the confusion. What appeared to be an impossible military
            situation had suddenly changed.
          </p>

          <p>
            Gideon&apos;s 300 men had not won through superior numbers.
            They had followed the instructions they had been given and
            confronted an enemy that was thrown into confusion.
          </p>

          <h2>The Lesson of Gideon&apos;s 300</h2>

          <p>
            The story of Gideon is remembered not simply because 300 men
            defeated a much larger force, but because of the message behind
            the story.
          </p>

          <p>
            Gideon started with 32,000 men and ended with only 300. The
            reduction made the situation look even more impossible, yet the
            biblical account presents the victory as evidence that success
            did not ultimately depend on human numbers or military
            strength.
          </p>

          <p>
            Sometimes what looks like a disadvantage can become the setting
            for a powerful lesson about faith, courage, and dependence on
            God.
          </p>

          <h2>Final Reflection</h2>

          <p>
            The story of Gideon&apos;s 300 men remains one of the most
            dramatic stories in the Book of Judges.
          </p>

          <p>
            It reminds readers that overwhelming circumstances do not
            necessarily determine the outcome of a story.
          </p>

          <p>
            Gideon&apos;s army became smaller and smaller, yet the story
            moved toward victory rather than defeat.
          </p>

          <p>
            The message is simple: faith can remain strong even when the
            odds appear impossible.
          </p>

          <p>
            If this story encouraged you, comment <strong>&quot;God is
            bigger&quot;</strong> below. And don&apos;t forget to subscribe
            and follow for more stories of faith, hope, truth, and
            inspiration.
          </p>

          <div className="project-cta">
            <h2>Need a script that keeps viewers watching?</h2>

            <p>
              I create engaging, well-researched YouTube scripts that turn
              ideas, history, faith, and educational subjects into
              compelling stories.
            </p>

            <Link href="/#contact" className="project-cta-button">
              Let&apos;s Work Together
              <FiArrowUpRight size={16} />
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}