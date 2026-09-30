import { ourHouse } from '../content'

export function OurHouse() {
  return (
    <section className="section" id="nossa-casa">
      <div className="give-grid">
        <div className="section-head">
          <p className="kicker">05 — Nossa Casa</p>
          <h2>{ourHouse.title}</h2>
          <p>{ourHouse.text}</p>
          <p className="give-email">{ourHouse.email}</p>
        </div>
        <figure className="qr-card">
          <img src={ourHouse.qr} alt={`QR Code provisório para ${ourHouse.email}`} />
          <figcaption>QR Code provisório — PIX em breve</figcaption>
        </figure>
      </div>
    </section>
  )
}
