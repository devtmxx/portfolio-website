import Heading from "@/components/heading";
import Bounded from "@/components/bounded";

const Experience = () => {
  return (
    <section>
      <Bounded as="div">
        <div className="flex flex-col gap-y-16">
          <Heading size="lg" className="mb-8" as="h2">
            My journey
          </Heading>

          <div className="max-w-xl md:pl-12 flex flex-col gap-y-4">
            <Heading size="md" className="" as="h3">
              The beginning
            </Heading>
            <span className="text-slate-400 font-bold leading-none tracking-tight text-2xl">
              2012 - 2013
            </span>
            <p className="prose text-slate-300 prose-lg">
              I started my journey watching YouTube tutorials about how to
              create Mods for Minecraft. As my interests began moving into the
              world of multiplayer, I soon switched from Mods to Plugin
              development.
            </p>
          </div>

          <div className="max-w-xl md:pl-12 flex flex-col gap-y-4">
            <Heading size="md" className="" as="h3">
              My first projects
            </Heading>
            <span className="text-slate-400 font-bold leading-none tracking-tight text-2xl">
              2013 - 2014
            </span>
            <p className="prose text-slate-300 prose-lg">
              When creating my first plugins, I met a YouTuber - BukkitFAQ - who
              reviewed all sorts of Bukkit plugins for his audience. It was this
              guy, who offered me to help him developing his own community
              server.
            </p>
          </div>

          <div className="max-w-xl md:pl-12 flex flex-col gap-y-4">
            <Heading size="md" className="" as="h3">
              Moving on
            </Heading>
            <span className="text-slate-400 font-bold leading-none tracking-tight text-2xl">
              2014 - 2015
            </span>
            <p className="prose text-slate-300 prose-lg">
              When BukkitFAQ quit his YouTube channel, it was time for me to
              move on. I searched for a new position as a developer and joined a
              Minecraft network ran by the German YouTuber ViceVice, called
              TheVace.net, with around 1,200 concurrent online players peak.
            </p>
          </div>

          <div className="max-w-xl md:pl-12 flex flex-col gap-y-4">
            <Heading size="md" className="" as="h3">
              From passion to profession
            </Heading>
            <span className="text-slate-400 font-bold leading-none tracking-tight text-2xl">
              2015 - 2016
            </span>
            <p className="prose text-slate-300 prose-lg">
              I was soon offered a position as a game developer at
              Germany&apos;s largest minecraft network at the time - GommeHD.net
              - which regularly had over 20,000 concurrent online players. This
              is where I learned the most about working together on projects and
              effective workflows. Moreover I got to work on the networks
              backend, which taught me much about server administration and
              network technology.
            </p>
          </div>

          <div className="max-w-xl md:pl-12 flex flex-col gap-y-4">
            <Heading size="md" className="" as="h3">
              From learning to leading
            </Heading>
            <span className="text-slate-400 font-bold leading-none tracking-tight text-2xl">
              2016 - today
            </span>
            <p className="prose text-slate-300 prose-lg">
              By chance, I met a future friend of mine, Florian, who was in the
              process of building a minigame network together with a well-known
              German YouTuber - AbgegrieftHD. Here I was able to combine all my
              previous experience and build an entire minigame network from the
              ground up as a lead developer. This was also the first time I made
              money from my work and my software still runs on many Minecraft
              servers run by Florian today.
            </p>
            <p className="prose text-slate-300 prose-lg">
              Over the time I expanded my knowledge to web development using
              React.js, which led me to app development with React Native.
              Although I wouldn&apos;t say that I became a top tier web
              developer, I would say that I was able to build up a relatively
              profound knowledge in a short period of time in order to then be
              able to work on smaller web projects as a freelancer.
            </p>
          </div>
        </div>
      </Bounded>
    </section>
  );
};

export default Experience;
