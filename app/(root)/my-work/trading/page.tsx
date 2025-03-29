import ContentBody from "@/components/content-body";
import Heading from "@/components/heading";
import Code from "@/components/code";
import Image from "next/image";

const TradingPage = () => {
  return (
    <ContentBody
      title="Trading"
      tags={["tools and utilities", "economy"]}
      date="2025"
      source="https://github.com/devtmxx/trading"
    >
      <p>
        The idea of this trading plugin was it to bring scam-free trading to the
        players. This plugin uses Vault to hook into the servers economy.
      </p>

      <Heading as="h2" size="xs">
        How it works
      </Heading>

      <p>
        A player can start a trade by executing the command{" "}
        <Code>/trade {"<player>"}</Code> after which the requested player has
        two minutes to accept the request by clicking the chat-button or typing{" "}
        <Code>/accepttrade {"<player>"}</Code>. Once a player has accepted the
        trade request, the trade inventory will open:
      </p>

      <Image
        src="/imgs/trade-start.png"
        alt="Start Trading Inventory"
        width={703}
        height={505}
      />

      <p>
        Within this trading inventory you can adjust your offer and see what the
        other players wants to offer you. You can use the empty slots on the
        left to trade items or the buttons below your player head to trade
        currency or do both. Once you have a valid offer, you can click the
        button in the bottom center to submit your offer.
      </p>

      <Image
        src="/imgs/trade-offered.png"
        alt="Offered Trading Inventory"
        width={705}
        height={505}
      />

      <p>
        Once your trading partner has submitted his offer, you can review it and
        confirm the offer or change it. Note: Whenever you change your offer,
        the trading state will reset and both players will have to submit their
        offer again.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <Image
          src="/imgs/trade-offered-both.png"
          alt="Both Offered Trading Inventory"
          width={707}
          height={510}
        />
        <Image
          src="/imgs/trade-confirm.png"
          alt="Confirm Trade Inventory"
          width={707}
          height={504}
        />
      </div>

      <p>
        When both of you have confirmed the trade, a countdown of 5 seconds
        start. You have a last chance to change your offer while the countdown
        runs but note that again, the trading state will reset for both of you.
        Once the countdown runs out, the trade will be executed.
      </p>

      <Image
        src="/imgs/trade-ending.png"
        alt="Ending Trade Inventory"
        width={707}
        height={507}
      />

      <Heading as="h2" size="xs">
        Security Checks
      </Heading>

      <p>
        There are several security checks which can be enabled/disabled in the
        plugins config.
      </p>

      <ul>
        <li>
          IP-Check: Checks if the players have the same IP and prevents trading
          in that case.
        </li>
        <li>World-Check: Checks if the players are both in the same world.</li>
        <li>
          Distance-Check: Checks if the players are both in the same world and
          within a configurable distance.
        </li>
      </ul>

      <Heading as="h2" size="xs">
        Localization
      </Heading>

      <p>
        This plugin is fully localized. Every single text or message is
        translated into the language of the user&apos;s client. It ships with
        English and German translations by default, but you are welcome to add
        additional translations according to your needs.
      </p>

      <Heading as="h2" size="xs">
        Test it yourself!
      </Heading>

      <p>
        Join my testing server <span className="font-bold">devtmxx.de</span> to
        test this plugin on a running server. This plugin is up and running on
        the default server. Just collect some items or give yourself some money
        using <Code>/economy give {"<player> <amount>"}</Code> and start a trade
        using <Code>/trade</Code>.
      </p>
    </ContentBody>
  );
};

export default TradingPage;
