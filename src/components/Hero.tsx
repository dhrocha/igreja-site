import { church, media } from "../content";

export function Hero() {
  return (
    <section className="hero" id="topo">
      <div className="hero-media" aria-hidden="true">
        <img src={media.hero.src} alt="" />
        <div className="hero-wash" />
      </div>

      <div className="hero-copy">
        <p className="eyebrow">Comunidade Cristã · Contagem/MG</p>
        <h1>
          <span>Somos a </span>
          igreja de segunda.
        </h1>
        <p className="lede">
          A {church.shortName} é uma comunidade cristã no bairro Industrial:
          igreja e instituto no mesmo chamado.
        </p>
        <div className="hero-actions">
          <a className="btn btn-solid" href="#programacao">
            Ver programação
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
      </div>

      <dl className="hero-meta">
        <div>
          <dt>Onde</dt>
          <dd>
            {church.address.street}
            <span>
              {church.address.district} · {church.city}/{church.state}
            </span>
          </dd>
        </div>
        <div>
          <dt>Quando</dt>
          <dd>
            Domingo · 18h30
            <span>Celebração da casa</span>
          </dd>
        </div>
        <div>
          <dt>Acompanhe</dt>
          <dd>
            {church.instagram.handle}
            <span>Igreja e instituto</span>
          </dd>
        </div>
      </dl>
    </section>
  );
}
