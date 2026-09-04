import { church, institute } from "../content";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Logo className="brand-logo" />
        </div>
        <p>
          Igreja e instituto no mesmo chamado: uma casa em Contagem onde amar a
          Deus, amar nossas famílias e servir o lugar onde Deus nos plantou.
        </p>
      </div>

      <div className="footer-grid">
        <div>
          <h2>Endereço</h2>
          <p>
            {church.address.street}
            <br />
            {church.address.district}, {church.address.city}/
            {church.address.state}
            <br />
            CEP {church.address.zip}
          </p>
        </div>
        <div>
          <h2>Redes</h2>
          <p>
            <a href={church.instagram.url} target="_blank" rel="noreferrer">
              Igreja {church.instagram.handle}
            </a>
            <br />
            <a href={institute.instagram.url} target="_blank" rel="noreferrer">
              Instituto {institute.instagram.handle}
            </a>
          </p>
        </div>
        <div>
          <h2>Institucional</h2>
          <p>
            {church.legalName}
            <br />
            CNPJ {church.cnpj}
          </p>
        </div>
      </div>

      <p className="footer-note">
        © {year} {church.shortName}. Conteúdo institucional público; a agenda da
        semana vive no Instagram.
      </p>
    </footer>
  );
}
