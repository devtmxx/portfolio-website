import ContentBody from "@/components/content-body";
import Heading from "@/components/heading";

const RageModePage = () => {
  return (
    <ContentBody title="RageMode" tags={["minigame"]} date="2015">
      <p>
        When working for GommeHD.net it was my first task to re-code their
        minigame RageMode and add some cool new features. You can view a
        gameplay below:
      </p>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/wo8JPL5wF-Y?si=8QqqchYPnlnwUC9p"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <Heading as="h2" size="xs">
        Game Concept
      </Heading>

      <p>
        This is a fast-paced game mode. The players spawn on a map with 4 items
        in their inventory. A bow, a sword, an axe and a chest. Whenever you hit
        a player with an arrow or with your sword, the player instantly dies and
        you count a kill. You can throw your axe at a player and if it hits, you
        also count a kill but your target loses 25% of his kills. The first
        player to reach 25 kills wins the game.
      </p>

      <p>
        Every kill also awards you with an emerald. You can use emeralds to buy
        extra perks. With a speed perk you can run really fast for a short
        period of time or you can buy an airstrike and kill many players at the
        same time.
      </p>

      <p>
        Due to their declining player counts, GommeHD.net has unfortunately
        decided to remove the game from its network. It is therefore no longer
        playable.
      </p>
    </ContentBody>
  );
};

export default RageModePage;
