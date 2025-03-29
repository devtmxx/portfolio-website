import ContentBody from "@/components/content-body";
import Heading from "@/components/heading";

const LobbyJumpNRun = () => {
  return (
    <ContentBody title="Lobby Jump'n'Run" tags={["fun"]} date="2016">
      <p>
        During and interesting programming session on New Year&apos;s Eve
        2015/16, one of the former GommeHD.net content designers and I developed
        a simple, randomly generated Jump&apos;n&apos;Run for the waiting
        lobbies to replace the old pre-made ones. What started as a joke is
        still in use today.
      </p>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/-TCYifS1g94?si=xn6cHZCQSdHxMURR"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <Heading as="h2" size="xs">
        Fun fact
      </Heading>

      <p>
        We originally developed the Jump&apos;n&apos;Run to include ladder and
        fence jumps, which were removed pre-release to not make it overly hard.
      </p>
    </ContentBody>
  );
};

export default LobbyJumpNRun;
