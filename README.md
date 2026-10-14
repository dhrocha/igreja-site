# Casa de Paz

SPA da Comunidade Cristã Casa de Paz (Contagem/MG).

## Desenvolvimento

```bash
npm install
npm run dev
```

Textos, endereço, horários e links do Instagram ficam em `src/content.ts`.

## Formulário pastoral (Gmail / Apps Script)

O formulário **Fale com o pastor** pode enviar e-mail pela sua conta Google, para o endereço do pastor (ou outro), sem SMTP externo.

1. Abra [script.google.com](https://script.google.com) com a conta que vai **enviar** os e-mails.
2. Crie um projeto e cole o código de `scripts/google-apps-script/pastor-form.gs`.
3. Em `DESTINO`, coloque o e-mail que deve **receber** (ex.: do pastor).
4. **Implantar → Nova implantação → App da Web**
   - Executar como: Eu
   - Quem tem acesso: Qualquer pessoa
5. Copie a URL (`.../exec`) para um arquivo `.env` na raiz do projeto:

```bash
cp .env.example .env
```

```env
VITE_PASTOR_FORM_URL=https://script.google.com/macros/s/XXXX/exec
```

6. Reinicie `npm run dev` (ou faça novo `npm run build` em produção).

Se `VITE_PASTOR_FORM_URL` estiver vazio, o site mantém o fallback por `mailto:`.

## Produção

```bash
npm run build
npm run preview
```
