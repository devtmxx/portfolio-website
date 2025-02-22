import Bounded from "@/components/bounded";
import Heading from "@/components/heading";

const ImprintPage = () => {
  return (
    <Bounded>
      <div className="flex flex-col gap-y-8">
        <Heading size="xl">Impressum</Heading>

        <Heading size="sm" as="h2">
          Angaben gem&auml;ß § 5 TMG
        </Heading>
        <p className="prose text-slate-300 prose-lg leading-none">
          Tim Mauersberger
          <br />
          Lange Str. 14
          <br />
          38448 Wolfsburg
        </p>

        <Heading size="sm" as="h2">
          Kontakt
        </Heading>
        <p className="prose text-slate-300 prose-lg leading-none">
          Telefon: 0176 44786657
          <br />
          E-Mail hello@devtmxx.de
        </p>

        <Heading size="sm" as="h2">
          Umsatzsteuer-ID
        </Heading>
        <p className="prose text-slate-300 prose-lg">
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
          DE338550362
        </p>

        <Heading size="sm" as="h2">
          EU-Streitschlichtung
        </Heading>
        <p className="prose text-slate-300 prose-lg leading-normal">
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{" "}
          <a href="https://ec.europa.eu/consumers/odr" className="a">
            https://ec.europa.eu/consumers/odr
          </a>
          . Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>

        <Heading size="sm" as="h2">
          Verbraucherstreitbeilegung / Universalschlichtungsstelle
        </Heading>
        <p className="prose text-slate-300 prose-lg leading-normal">
          Wir sind nicht bereit oder verpflichtet an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <Heading size="sm" as="h2">
          Haftung für Inhalte
        </Heading>
        <p className="prose text-slate-300 prose-lg leading-normal">
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen.
          <br />
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleibt hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          von entsprechenden Rechtsverletzungen werden wir diese Inhalte
          umgehend entfernen.
        </p>

        <Heading size="sm" as="h2">
          Haftung für Links
        </Heading>
        <p className="prose text-slate-300 prose-lg leading-normal">
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Inhalte wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
          <br />
          Eine permanentliche inhaltliche Kontrolle der verlinkten Seiten ist
          jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
          zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
          derartige Links umgehend entfernen.
        </p>

        <Heading size="sm" as="h2">
          Urheberrecht
        </Heading>
        <p className="prose text-slate-300 prose-lg leading-normal">
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unteliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          <br />
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </p>

        <p className="prose text-slate-300 prose-lg leading-normal">
          Quelle:{" "}
          <a href="https://e-recht24.de" className="a">
            e-recht24.de
          </a>
        </p>
      </div>
    </Bounded>
  );
};

export default ImprintPage;
