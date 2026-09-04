import { useEffect, useState } from 'react'
import { nav } from '../content'
import { Logo } from './Logo'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = nav.map((item) => item.id)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: [0.1, 0.25, 0.5] },
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <a className="brand" href="#topo">
        <Logo className="brand-logo" />
      </a>

      <nav className="nav" aria-label="Principal">
        {nav.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={active === item.id ? 'is-active' : ''}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href="#pastor">
        Fale com o pastor
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? 'Fechar menu' : 'Abrir menu'}</span>
        <i />
        <i />
      </button>

      <div id="mobile-nav" className="mobile-nav" hidden={!open}>
        {nav.map((item) => (
          <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a className="btn btn-solid" href="#pastor" onClick={() => setOpen(false)}>
          Fale com o pastor
        </a>
      </div>
    </header>
  )
}
