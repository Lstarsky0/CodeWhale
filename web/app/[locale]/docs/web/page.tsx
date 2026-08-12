import { getDocsWeb } from "@/lib/i18n/dictionaries";
import { buildPageMetadata } from "@/lib/page-meta";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getDocsWeb(locale);
  return buildPageMetadata({
    path: "/docs/web",
    locale,
    title: t.metaTitle,
    description: t.metaDescription,
  });
}

export default async function WebClientPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getDocsWeb(locale);

  return (
    <section className="space-y-10">
      <section id="overview" className="scroll-mt-32">
        <h2 className="font-display text-3xl mb-1">{t.overviewTitle}</h2>
        <p className={`${t.bodyClassName} mt-3`}>
          <code className="inline">codewhale web</code>
          {t.overviewSeg1}
          <code className="inline">127.0.0.1</code>
          {t.overviewSeg2}
          <code className="inline">http://127.0.0.1:7878</code>
          {t.overviewSeg3}
          <code className="inline">codewhale web --port 8788</code>
          {t.overviewSeg4}
        </p>
        <p className={`${t.bodyClassName} mt-3`}>{t.overviewLead2}</p>
      </section>

      <section id="auth" className="scroll-mt-32">
        <h2 className="font-display text-2xl mb-1">{t.authTitle}</h2>
        <p className={`${t.bodyClassName} mt-3`}>{t.authBody}</p>
      </section>

      <section id="local" className="scroll-mt-32">
        <h2 className="font-display text-2xl mb-1">{t.localTitle}</h2>
        <p className={`${t.bodyClassName} mt-3`}>
          <code className="inline">codewhale web</code>
          {t.localSeg1}
          <code className="inline">--port</code>
          {t.localSeg2}
          <code className="inline">--host</code>
          {t.localSeg3}
          <code className="inline">codewhale app-server --mobile</code>
          {t.localSeg4}
          <code className="inline">--http</code>
          {t.localSeg5}
        </p>
      </section>

      <section id="troubleshooting" className="scroll-mt-32">
        <h2 className="font-display text-2xl mb-1">{t.troubleshootingTitle}</h2>
        <p className={`${t.bodyClassName} mt-3`}>{t.troubleshootingBody}</p>
      </section>

      <section id="source" className="hairline-t pt-8">
        <p className="text-sm text-ink-mute">{t.sourceNote}</p>
      </section>
    </section>
  );
}
