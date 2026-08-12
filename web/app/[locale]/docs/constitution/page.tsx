import Link from "next/link";
import { getDocsConstitution } from "@/lib/i18n/dictionaries";
import { buildPageMetadata } from "@/lib/page-meta";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getDocsConstitution(locale);
  return buildPageMetadata({
    path: "/docs/constitution",
    locale,
    title: t.metaTitle,
    description: t.metaDescription,
  });
}

export default async function ConstitutionPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getDocsConstitution(locale);

  return (
    <section className="space-y-10">
      <section id="overview" className="scroll-mt-32">
        <h2 className="font-display text-3xl mb-1">
          {t.title}{" "}
          <span className="font-cjk text-indigo text-2xl ml-2">{t.titleSecondary}</span>
        </h2>
        <p className={`text-ink-soft mt-3 ${t.leadingClassName}`}>
          {t.overviewLead1}
          <code className="inline">/constitution</code>
          {t.overviewLead2}
          <code className="inline">$CODEWHALE_HOME/constitution.json</code>
          {t.overviewLead3}
          <code className="inline">.codewhale/constitution.json</code>
          {t.overviewLead4}
        </p>
        <div className="hairline-t hairline-b mt-6 grid md:grid-cols-3 col-rule">
          {t.layers.map(([primary, secondary, body]) => (
            <div key={primary} className="p-5">
              <div className="font-display text-lg text-indigo mb-1">
                {primary} <span className="font-cjk text-sm ml-1.5">{secondary}</span>
              </div>
              <p className={`text-sm text-ink-soft ${t.leadingClassName}`}>{body}</p>
            </div>
          ))}
        </div>
        <p className={`mt-4 text-sm text-ink-soft ${t.leadingClassName}`}>
          {t.closingLead}
          <Link
            href="https://github.com/Hmbown/CodeWhale/blob/main/docs/CONFIGURATION.md#constitution-project-instructions-and-repo-authority"
            className="body-link"
          >
            {t.closingLinkLabel}
          </Link>
          {t.closingTail}
        </p>
      </section>
      <section id="source" className="hairline-t pt-8">
        <p className="text-sm text-ink-mute">{t.sourceNote}</p>
      </section>
    </section>
  );
}
