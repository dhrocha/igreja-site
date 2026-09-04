import { church, institute, media } from '../content'

export function Gallery() {
  return (
    <section className="gallery" aria-label="Imagens da casa">
      <a className="gallery-item is-wide" href={church.instagram.url} target="_blank" rel="noreferrer">
        <img src={media.worship.src} alt={media.worship.alt} />
        <span>Celebração</span>
      </a>
      <a className="gallery-item" href={church.instagram.url} target="_blank" rel="noreferrer">
        <img src={media.music.src} alt={media.music.alt} />
        <span>Louvor</span>
      </a>
      <a className="gallery-item" href={institute.instagram.url} target="_blank" rel="noreferrer">
        <img src={media.prayer.src} alt={media.prayer.alt} />
        <span>Comunhão</span>
      </a>
    </section>
  )
}
