import { offerings } from '../content'

export function Offerings() {
  return (
    <section className="section section-alt" id="ofertas">
      <div className="give-grid">
        <div className="section-head">
          <p className="kicker">04 — Ofertas</p>
          <h2>{offerings.title}</h2>
          <p>{offerings.text}</p>
          <p className="give-email">{offerings.email}</p>
        </div>
        <figure className="qr-card">
          <img src={offerings.qr} alt={`QR Code provisório para ${offerings.email}`} />
          <figcaption>QR Code provisório — PIX em breve</figcaption>
        </figure>
      </div>
    </section>
  )
}
