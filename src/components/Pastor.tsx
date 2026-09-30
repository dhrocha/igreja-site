import { useState, type FormEvent } from 'react'
import { church, pastor, pastorTopics } from '../content'

type Status = 'idle' | 'sent'

const initial = {
  name: '',
  email: '',
  phone: '',
  topic: 'oracao',
  message: '',
  privacy: false,
}

export function Pastor() {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  function update<K extends keyof typeof initial>(key: K, value: (typeof initial)[K]) {
    setForm((current) => ({ ...current, [key]: value }))
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')

    if (!form.name.trim() || !form.message.trim()) {
      setError('Preencha nome e mensagem para enviar.')
      return
    }

    if (!form.privacy) {
      setError('É preciso autorizar o uso dos dados para o cuidado pastoral.')
      return
    }

    const topic = pastorTopics.find((item) => item.value === form.topic)?.label ?? form.topic
    const body = [
      `Nome: ${form.name}`,
      form.email ? `E-mail: ${form.email}` : '',
      form.phone ? `Telefone: ${form.phone}` : '',
      `Assunto: ${topic}`,
      '',
      form.message,
    ]
      .filter(Boolean)
      .join('\n')

    void navigator.clipboard?.writeText(body).catch(() => undefined)
    const mailto = `mailto:?subject=${encodeURIComponent(`Fale com o pastor — ${topic}`)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    setStatus('sent')
  }

  return (
    <section className="section section-alt" id="pastor">
      <div className="pastor-grid">
        <div>
          <p className="kicker">06 — Cuidado pastoral</p>
          <h2>Fale com o pastor.</h2>
          <p className="lede">
            {pastor.displayName} acompanha a Casa de Paz. Se você precisa de
            oração, orientação ou simplesmente quer conversar, escreva. Cada
            pedido é tratado com atenção e sigilo.
          </p>

          <div className="pastor-card">
            <p className="pastor-name">{pastor.displayName}</p>
            <p>{pastor.role}</p>
            <p className="muted">{pastor.name}</p>
            <a className="text-link" href={church.instagram.url} target="_blank" rel="noreferrer">
              Mensagem pelo Instagram
            </a>
          </div>
        </div>

        {status === 'sent' ? (
          <div className="form-success" role="status">
            <h3>Pedido preparado.</h3>
            <p>
              Seu aplicativo de e-mail deve ter aberto com a mensagem. Se
              preferir, envie também pelo Instagram da casa.
            </p>
            <div className="hero-actions">
              <a className="btn btn-solid" href={church.instagram.url} target="_blank" rel="noreferrer">
                Abrir Instagram
              </a>
              <button className="btn btn-ghost" type="button" onClick={() => setStatus('idle')}>
                Escrever outro
              </button>
            </div>
          </div>
        ) : (
          <form className="pastor-form" onSubmit={onSubmit} noValidate>
            <label>
              Nome
              <input
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={(event) => update('name', event.target.value)}
                required
              />
            </label>

            <div className="form-row">
              <label>
                E-mail
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(event) => update('email', event.target.value)}
                />
              </label>
              <label>
                Telefone
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(event) => update('phone', event.target.value)}
                />
              </label>
            </div>

            <label>
              Assunto
              <select
                name="topic"
                value={form.topic}
                onChange={(event) => update('topic', event.target.value)}
              >
                {pastorTopics.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Mensagem
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={(event) => update('message', event.target.value)}
                required
              />
            </label>

            <label className="check">
              <input
                type="checkbox"
                checked={form.privacy}
                onChange={(event) => update('privacy', event.target.checked)}
              />
              Autorizo o uso destes dados apenas para retorno pastoral.
            </label>

            {error ? <p className="form-error">{error}</p> : null}

            <button className="btn btn-solid" type="submit">
              Enviar ao pastor
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
