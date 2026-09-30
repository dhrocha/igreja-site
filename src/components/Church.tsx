import { media, pillars, quemSomos } from "../content";

export function Church() {
  return (
    <section className="section" id="igreja">
      <div className="section-head">
        <p className="kicker">01 — A igreja</p>
        <h2>Uma comunidade, não um palco.</h2>
        <p>
          Reunimos pessoas para adorar a Jesus, viver em comunhão e servir o
          lugar onde Deus nos plantou. A Casa de Paz é templo e também casa: um
          endereço onde há ação, mesa e palavra.
        </p>
      </div>

      <figure className="section-photo">
        <img src={media.church.src} alt={media.church.alt} />
      </figure>

      <div className="value-grid value-grid-3">
        {pillars.map((item) => (
          <article key={item.title} className="value-card">
            <span className="pillar-number">{item.number}</span>
            <h3>{item.title}</h3>
          </article>
        ))}
      </div>

      <div className="split">
        <div className="panel quem-somos-panel">
          <p className="kicker">{quemSomos.title}</p>
          {quemSomos.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="motto">{quemSomos.motto}</p>
        </div>

        <figure className="split-photo">
          <img src={media.quemSomos.src} alt={media.quemSomos.alt} />
        </figure>
      </div>
    </section>
  );
}
