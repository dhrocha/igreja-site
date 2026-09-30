import { church, fronts, institute, media } from "../content";

export function Institute() {
  return (
    <section className="section section-alt" id="instituto">
      <div className="section-head">
        <p className="kicker">02 — Instituto</p>
        <h2>Somos a Igreja de Segunda</h2>
        <p>4 pilares para transformar nossa comunidade</p>
      </div>

      <div className="front-grid">
        {fronts.map((item) => (
          <article key={item.title} className="front-card">
            <span>{item.kicker}</span>
            <h3>{item.title}</h3>
          </article>
        ))}
      </div>

      <aside className="callout">
        <img
          className="callout-photo"
          src={media.projeto.src}
          alt={media.projeto.alt}
        />
        <div>
          <p className="kicker">Em movimento</p>
          <h3>O projeto em ação</h3>
          <p>
            Em breve, fotos e histórias das frentes do instituto. Acompanhe
            também em {institute.instagram.handle}.
          </p>
        </div>
        <div className="callout-actions">
          <a
            className="btn btn-solid"
            href={institute.instagram.url}
            target="_blank"
            rel="noreferrer"
          >
            Instagram do instituto
          </a>
          <a
            className="btn btn-ghost"
            href={church.instagram.url}
            target="_blank"
            rel="noreferrer"
          >
            Instagram da igreja
          </a>
        </div>
      </aside>
    </section>
  );
}
