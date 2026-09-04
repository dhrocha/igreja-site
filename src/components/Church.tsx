import { church, media, pastor, values } from "../content";

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

      <div className="value-grid">
        {values.map((item) => (
          <article key={item.title} className="value-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>

      <div className="split">
        <div className="panel">
          <p className="kicker">Quem somos</p>
          <h3>Comunidade Cristã Casa de Paz</h3>
          <p>
            Igreja evangélica em Contagem, registrada como organização
            religiosa. Pastoreada pelo {pastor.displayName}, a Casa de Paz
            existe para amar a Deus, amar nossas famílias e servir o lugar onde
            Deus nos plantou.
          </p>
          <ul className="facts">
            <li>
              <span>Razão social</span>
              {church.legalName}
            </li>
            <li>
              <span>Nome fantasia</span>
              {church.tradeName}
            </li>
            <li>
              <span>Liderança</span>
              {pastor.displayName} · {pastor.role}
            </li>
            <li>
              <span>Endereço</span>
              {church.address.full}
            </li>
          </ul>
          <a
            className="text-link"
            href={church.instagram.url}
            target="_blank"
            rel="noreferrer"
          >
            Seguir {church.instagram.handle}
          </a>
        </div>

        <div className="map-wrap">
          <iframe
            title="Mapa da Comunidade Cristã Casa de Paz"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(church.mapsQuery)}&z=16&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            className="map-link"
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(church.mapsQuery)}`}
            target="_blank"
            rel="noreferrer"
          >
            Abrir no mapa
          </a>
        </div>
      </div>
    </section>
  );
}
