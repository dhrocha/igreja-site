/**
 * Formulário "Fale com o pastor" — Casa de Paz
 *
 * Como publicar:
 * 1. Abra https://script.google.com com a conta Gmail que vai ENVIAR os e-mails
 * 2. Novo projeto → cole este arquivo inteiro
 * 3. Ajuste DESTINO abaixo (e-mail do pastor ou outro destinatário)
 * 4. Implantar → Nova implantação → Tipo: App da Web
 *    - Executar como: Eu
 *    - Quem tem acesso: Qualquer pessoa
 * 5. Copie a URL da implantação (/exec) para o .env do site:
 *    VITE_PASTOR_FORM_URL=https://script.google.com/macros/s/.../exec
 */

const DESTINO = "pastor@exemplo.com"; // ← troque pelo e-mail que deve RECEBER
const REMETENTE_NOME = "Site Casa de Paz";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents || "{}");

    // Campo honeypot: bots preenchem, humanos não
    if (data.website) {
      return json_({ ok: true, ignored: true });
    }

    const name = String(data.name || "").trim();
    const message = String(data.message || "").trim();
    const email = String(data.email || "").trim();
    const phone = String(data.phone || "").trim();
    const topic = String(data.topic || "Contato").trim();

    if (!name || !message) {
      return json_({ ok: false, error: "Nome e mensagem são obrigatórios." });
    }

    const linhas = [
      "Novo contato pelo site Casa de Paz",
      "",
      "Nome: " + name,
      email ? "E-mail: " + email : "E-mail: (não informado)",
      phone ? "Telefone: " + phone : "Telefone: (não informado)",
      "Assunto: " + topic,
      "",
      "Mensagem:",
      message,
    ];

    const options = {
      to: DESTINO,
      subject: "Fale com o pastor — " + topic,
      body: linhas.join("\n"),
      name: REMETENTE_NOME,
    };

    if (email) {
      options.replyTo = email;
    }

    MailApp.sendEmail(options);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function doGet() {
  return ContentService.createTextOutput(
    "Formulário pastoral Casa de Paz ativo.",
  );
}

function json_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
