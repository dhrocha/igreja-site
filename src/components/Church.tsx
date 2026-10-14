import { media, pillars, quemSomos } from "../content";

export function Church() {
  return (
    <section className="section" id="igreja">
      <div className="section-head">
        <p className="kicker">01 — A igreja</p>
        <h2>{quemSomos.title}</h2>
      </div>

      <div className="quem-somos">
        {quemSomos.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p className="motto">{quemSomos.motto}</p>
      </div>

      <figure className="section-photo">
        <img src={media.church.src} alt={media.church.alt} />
      </figure>

      <div className="vision-block">
        <div className="section-head">
          <h2>Nossa Visão</h2>
        </div>
        <div className="value-grid value-grid-3">
          {pillars.map((item) => (
            <article key={item.title} className="value-card">
              <span className="pillar-number">{item.number}</span>
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
