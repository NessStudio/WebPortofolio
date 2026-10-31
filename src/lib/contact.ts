import { LINKS } from "../content/mobile";

/**
 * Form kontak (desktop & HP): saat dikirim, isi form dikirim ke email pemilik lewat FormSubmit (tanpa server sendiri).
 * Tujuan = LINKS.email di content/mobile.ts. Pertama kali dipakai, FormSubmit mengirim email aktivasi
 * ke alamat itu: buka email tersebut dan klik "Activate Form" sekali saja.
 */
const ENDPOINT = "https://formsubmit.co/ajax/" + LINKS.email;
const LABELS = ["Name", "Email", "Subject", "Message"];

export function initContact(): () => void {
  const onSubmit = async (e: Event): Promise<void> => {
    const form = (e.target as Element | null)?.closest?.("form");
    if (!form || !(form instanceof HTMLFormElement)) return;
    e.preventDefault();
    const fields = Array.from(form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("input,textarea"));
    if (fields.length < 4) return;
    const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    let st = form.querySelector<HTMLElement>(".cf-status");
    if (!st) {
      st = document.createElement("p");
      st.className = "cf-status";
      st.setAttribute("role", "status");
      (btn ?? form).after(st);
    }
    const say = (msg: string, ok: boolean): void => {
      st!.textContent = msg;
      st!.dataset.state = ok ? "ok" : "err";
    };

    const values = fields.slice(0, 4).map((f) => f.value.trim());
    const empty = values.findIndex((v) => !v);
    if (empty >= 0) {
      say(`Please fill in the ${LABELS[empty].toLowerCase()} field.`, false);
      fields[empty].focus();
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values[1])) {
      say("Please enter a valid email address.", false);
      fields[1].focus();
      return;
    }

    if (btn) btn.disabled = true;
    say("Sending…", true);
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: values[0],
          email: values[1],
          subject: values[2],
          message: values[3],
          _subject: `[Portfolio] ${values[2]}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success === "false" || data.success === false) throw new Error(data.message || "HTTP " + res.status);
      fields.slice(0, 4).forEach((f) => (f.value = ""));
      say("Thank you! Your message has been sent.", true);
    } catch (err) {
      const why = err instanceof Error ? err.message : "";
      console.error("[contact] gagal kirim:", err);
      say(`Sorry, the message could not be sent${why ? " (" + why + ")" : ""}. Please try again or email me directly.`, false);
    } finally {
      if (btn) btn.disabled = false;
    }
  };
  document.addEventListener("submit", onSubmit);
  return () => document.removeEventListener("submit", onSubmit);
}
