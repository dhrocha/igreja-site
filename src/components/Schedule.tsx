import { useState } from 'react'
import {
  church,
  churchSchedule,
  institute,
  instituteSchedule,
  type ScheduleItem,
} from '../content'

type Tab = 'igreja' | 'instituto'

function List({ items }: { items: readonly ScheduleItem[] }) {
  return (
    <ol className="schedule-list">
      {items.map((item) => (
        <li key={item.title}>
          <p className="when">{item.when}</p>
          <div>
            <h3>{item.title}</h3>
            <p>{item.note}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

export function Schedule() {
  const [tab, setTab] = useState<Tab>('igreja')

  return (
    <section className="section" id="programacao">
      <div className="section-head">
        <p className="kicker">03 — Programação</p>
        <h2>Venha ser casa</h2>
        <p>
          Ritmo habitual da igreja e do instituto. Eventos da semana, mudanças
          de horário e portas abertas saem primeiro nos perfis oficiais — use
          os links abaixo para confirmar o dia.
        </p>
      </div>

      <div className="tabs" role="tablist" aria-label="Programação">
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'igreja'}
          className={tab === 'igreja' ? 'is-active' : ''}
          onClick={() => setTab('igreja')}
        >
          Igreja
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'instituto'}
          className={tab === 'instituto' ? 'is-active' : ''}
          onClick={() => setTab('instituto')}
        >
          Instituto
        </button>
      </div>

      {tab === 'igreja' ? (
        <div className="schedule-panel" role="tabpanel">
          <List items={churchSchedule} />
          <a className="text-link" href={church.instagram.url} target="_blank" rel="noreferrer">
            Semana atual em {church.instagram.handle}
          </a>
        </div>
      ) : (
        <div className="schedule-panel" role="tabpanel">
          <List items={instituteSchedule} />
          <a className="text-link" href={institute.instagram.url} target="_blank" rel="noreferrer">
            Agenda do instituto em {institute.instagram.handle}
          </a>
        </div>
      )}
    </section>
  )
}
