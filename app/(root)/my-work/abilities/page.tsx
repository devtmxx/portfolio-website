import ContentBody from "@/components/content-body";
import Link from "next/link";
import Heading from "@/components/heading";
import Image from "next/image";

const AbilitiesPage = () => {
  return (
    <ContentBody
      title={"Abilities"}
      tags={["fun"]}
      date="2025"
      source="https://github.com/devtmxx/abilities"
    >
      <p>
        I first created this plugin to test some nice stuff which should later
        be implemented into the{" "}
        <Link href="/my-work/survival-games">SurvivalGames</Link> plugin. But
        after some time I have decided to turn this into its own thing and not
        implement it into SurvivalGames.
      </p>

      <Heading as="h2" size="xs">
        Concept
      </Heading>

      <p>
        This plugin is just for fun and not intended to actually run on any
        production server. It showcases what cool effects are possible to create
        with minecraft, some tricks and a tiny bit of math. Feel free to copy
        and use my code wherever you want.
      </p>

      <Heading as="h2" size="xs">
        Test it yourself!
      </Heading>

      <p>
        Join my testing server <span className="font-bold">devtmxx.de</span> to
        test this plugin on a running server. This plugin is up and running on
        the default server and you do not need any permissions or commands to
        use abilities. Simply follow the instructions on this page.
      </p>

      <Heading as="h2" size="xs">
        Heat seeking arrows
      </Heading>

      <Image
        src="/gifs/heat-seeking-arrows.gif"
        alt="A player shooting heat seeking arrows"
        width={426}
        height={240}
        unoptimized
      />

      <p>
        When aiming with a bow, a player can choose a target entity. Possible
        targets will be marked with an aqua glowing outline. After shooting the
        arrow, it will be automatically guided to its target. Guided arrows will
        have a blue flame trail while being guided. While you can aim above,
        below or beside an obstacle to hit a target behind it, arrows will not
        automatically avoid them.
      </p>

      <Heading as="h2" size="xs">
        Fall Damage Spreader
      </Heading>

      <Image
        src="/gifs/fall-damage.gif"
        alt="A player using the fall damage spreader"
        width={426}
        height={240}
        unoptimized
      />

      <p>
        With this ability players can spread their fall damage to the
        surrounding entities. The damage spread reaches up to 3 blocks in
        distance. The damage an entity takes is a percentage of the fall damage
        based on its distance to the falling player. For example an entity 1.5
        blocks away from the falling player will receive 50% of the
        player&apos;s fall damage.
      </p>

      <p>
        It is important to know that the fall damage spreader can deal more
        cumulative damage to surrounding entities than the base fall damage of
        the player. The cumulative fall damage will be subtracted from the
        player&apos;s fall damage. If the damage spreader deals more damage,
        than the fall damage the player should receive, the player will be
        unharmed after the fall.
      </p>

      <Heading as="h2" size="xs">
        Tornado
      </Heading>

      <Image
        src="/gifs/tornado.gif"
        alt="A player using the tornado ability"
        width={426}
        height={240}
        unoptimized
      />

      <p>
        Players can create a tornado around them if they start sneaking. The
        tornado will show its presence with cloud particles storming around the
        player. If other entities get to close to a tornado, they will be picked
        up from the ground and thrown through the air.
      </p>

      <p>
        This is a more defensive ability as it throws entities away from a
        player and doesn&apos;t deal damage directly. Nevertheless, entities may
        take damage by falling to the ground after thrown by the tornado.
      </p>

      <Heading as="h2" size="xs">
        Ender Shot
      </Heading>

      <Image
        src="/gifs/ender-shot.gif"
        alt="A player using the ender shot ability"
        width={426}
        height={240}
        unoptimized
      />

      <p>
        Crossbows now act as a sort of rocket launcher. Those rockets are not
        subject to gravity and will fly for around 10 seconds before they
        vanish. If they hit something, they will create a small explosion and
        deal 5 hearts of damage to the hit entity.
      </p>

      <Heading as="h2" size="xs">
        Water bending
      </Heading>

      <Image
        src="/gifs/water-bending.gif"
        alt="A player bending water"
        width={426}
        height={240}
        unoptimized
      />

      <p>
        Right-clicking on water allows players to pick up water and move it
        around in the air. Another right-click places the water in the air.
      </p>
      <p>
        This ability is just for fun and has no real use-case (at least
        I&apos;ve not found one so far).
      </p>
    </ContentBody>
  );
};

export default AbilitiesPage;
