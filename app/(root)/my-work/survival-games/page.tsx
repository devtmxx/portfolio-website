import ContentBody from "@/components/content-body";
import Heading from "@/components/heading";

const SurvivalGamesPage = () => {
  return (
    <ContentBody
      title="SurvivalGames"
      tags={["minigame"]}
      date="2025"
      source="https://github.com/devtmxx/survivalgames"
    >
      <p>
        The goal of this plugin is to provide a simple and performant
        implementation of the classic game mode SurvivalGames, tailored to run
        on a server network and fully configurable.
      </p>

      <Heading as="h2" size="xs">
        Concept
      </Heading>

      <p>
        Up to 24 players fight for survival in an arena. The last survivor wins.
        Players can find crates containing randomly generated items scattered
        throughout the arena and equip themselves with them. When only a few
        players remain, the deathmatch begins, where players are close together
        in a much smaller arena to speed up the game.
      </p>

      <Heading as="h2" size="xs">
        Localization
      </Heading>

      <p>
        This plugin is fully localized. Every single text or message is
        translated into the language of the user&apos;s client. It ships with
        English and German translations by default, but you are welcome to add
        additional translations according to your needs.
      </p>
      <p>
        To create your own translation copy a default one and change it to your
        needs. Click{" "}
        <a
          href="https://github.com/devtmxx/survivalgames/tree/main/src/main/resources/locales"
          target="_blank"
        >
          here
        </a>{" "}
        to see the default locales.
      </p>

      <Heading as="h2" size="xs">
        Crates
      </Heading>

      <p>
        Crate contents are fully customizable and categorized by tiers. Tiers
        are determined by the first item in a chest and you can create as many
        tiers as you like. This is useful to populate spawn chests with better
        items for example.
      </p>
      <p>
        The default tier config can be found{" "}
        <a
          href="https://github.com/devtmxx/survivalgames/blob/main/src/main/resources/tiers.yml"
          target="_blank"
        >
          here
        </a>
        .
      </p>

      <Heading as="h2" size="xs">
        Stats
      </Heading>

      <p>
        This plugin collect player statistics, for example their kills, wins and
        games played. These statistics will by default be saved to config files.
        When run in a production environment, the plugin should be configured to
        store statistics in a database. It currently only supports config and
        mysql storage but I may add more storage options in the future.
      </p>

      <Heading as="h2" size="xs">
        Scoreboard
      </Heading>

      <p>
        The game scoreboard is customizable throughout all game phases using
        placeholders and updates without flickering.
      </p>

      <Heading as="h2" size="xs">
        Extras
      </Heading>

      <p>
        I have added some extras to the plugin as listed below. All of these
        extras can be disabled in the game&apos;s main config.
      </p>

      <ul>
        <li>
          TNT-Ignition: TNT will automatically be ignited once placed by a
          player.
        </li>
        <li>
          Compass Target Finder: When right-clicking a compass, it will target
          the nearest enemy player and will display the current distance to that
          player in the chat.
        </li>
        <li>
          Lightning on kill: Whenever a player kills another player, a lightning
          effect strikes the position where the player has been killed. This
          will harm nobody but reveals the position to all other players left.
        </li>
        <li>
          No attack cooldown: When enabled, the attack cooldown will be reduced
          to pre 1.9 pvp.
        </li>
      </ul>
    </ContentBody>
  );
};

export default SurvivalGamesPage;
