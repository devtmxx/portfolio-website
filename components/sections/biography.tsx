import Heading from "@/components/heading";
import Button from "@/components/button";
import Avatar from "@/components/avatar";
import Bounded from "@/components/bounded";
import { ctaHref } from "@/constants";

const Biography = () => {
  return (
    <Bounded>
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
        <Heading size="xl" className="col-start-1">
          About Tim
        </Heading>

        <div className="prose prose-xl prose-slate prose-invert col-start-1">
          <p>
            I am a passionate Minecraft minigame developer from Germany with 10+
            years of experience in the Minecraft community. Throughout my
            career, I have worked with numerous Minecraft networks, including on
            of the largest European networks of its time. My expertise lies in
            creating engaging and innovative gameplay experiences by designing
            unique minigames and custom plugins that enhance player interaction
            and enjoyment.
          </p>
          <p>
            I thrive on pushing the boundaries of Minecraft&apos;s mechanics,
            constantly exploring new ways to make gameplay more dynamic,
            immersive, and fun. Whether it&apos;s designing fresh concepts from
            scratch or optimizing existing features, I focus on delivering
            high-quality and well-balanced content.
          </p>
          <p>
            With a deep understanding of Paper&apos;s plugin ecosystem and a
            strong problem-solving mindset, I am always eager to take on new
            challenges and contribute to exciting projects. If you&apos;re
            looking for someone who can bring creative and technically sound
            ideas to life, let&apos;s connect!
          </p>
        </div>

        <Button label="Message me" href={ctaHref} showIcon />

        <Avatar
          src="/portrait.webp"
          alt="Tim Mauersberger"
          width={1280}
          height={1920}
          className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
        />
      </div>
    </Bounded>
  );
};

export default Biography;
