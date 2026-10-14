import { useRef } from "react";
import { church, youtube } from "../content";

export function Youtube() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".youtube-card");
    const amount = card ? card.offsetWidth + 16 : 320;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  }

  return (
    <section className="section section-alt" id="youtube">
      <div className="youtube-top">
        <div className="section-head youtube-head">
          <p className="kicker">04 — YouTube</p>
          <h2>{youtube.title}</h2>
          <p>{youtube.text}</p>
          <a
            className="btn btn-solid"
            href={church.youtube.url}
            target="_blank"
            rel="noreferrer"
          >
            Ir para o canal {church.youtube.handle}
          </a>
        </div>

        <div className="youtube-controls">
          <button
            type="button"
            className="youtube-nav"
            aria-label="Vídeo anterior"
            onClick={() => scrollByCard(-1)}
          >
            ‹
          </button>
          <button
            type="button"
            className="youtube-nav"
            aria-label="Próximo vídeo"
            onClick={() => scrollByCard(1)}
          >
            ›
          </button>
        </div>
      </div>

      <div className="youtube-carousel">
        <div className="youtube-track" ref={trackRef} tabIndex={0}>
          {youtube.videos.map((video) => (
            <article key={video.id} className="youtube-card">
              <a
                className="youtube-thumb"
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                  alt=""
                />
                <span className="youtube-play" aria-hidden="true">
                  ▶
                </span>
                <span className="sr-only">Assistir: {video.title}</span>
              </a>
              <h3>
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {video.title}
                </a>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
