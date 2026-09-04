import { church, fronts, institute, media } from "../content";

export function Institute() {
  return (
    <section className="section section-alt" id="instituto">
      <div className="section-head">
        <p className="kicker">02 — Instituto</p>
        <h2>Fé que desce à rua.</h2>
        <p>
          O {institute.name} é o braço social da comunidade. Enquanto a igreja
          reúne, o instituto permanece no território: acolhe, forma e cuida de
          quem precisa de um chão concreto.
        </p>
      </div>

      <div className="front-grid">
        {fronts.map((item) => (
          <article key={item.title} className="front-card">
            <span>{item.kicker}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>

      <aside className="callout">
        <img
          className="callout-photo"
          src={media.band.src}
          alt={media.band.alt}
        />
        <div>
          <p className="kicker">Em movimento</p>
          <h3>Acompanhe o instituto de perto</h3>
          <p>
            Campanhas, mutirões e a rotina das frentes são publicadas em{" "}
            {institute.instagram.handle}. A igreja e o instituto falam juntos —
            cada um no seu ritmo.
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
