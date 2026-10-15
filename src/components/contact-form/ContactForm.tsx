import emailjs from "@emailjs/browser";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { yupResolver } from "@hookform/resolvers/yup";
import { ReactElement, useRef, useState } from "react";
import { Resolver, useForm } from "react-hook-form";
import * as yup from "yup";

import { PHONE, telHref } from "@/lib/site";

import styles from "components/contact-form/contact-form.module.css";

interface FormData {
  name: string;
  email: string;
  message: string;
  phone: string;
}

const schema = yup
  .object()
  .shape({
    name: yup.string().trim().required("Merci d’indiquer votre nom et prénom."),
    phone: yup
      .string()
      .trim()
      .required("Merci d’indiquer un numéro pour que je puisse vous rappeler.")
      .matches(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/, {
        message: "Ce numéro ne semble pas valide (ex. 06 12 34 56 78).",
        excludeEmptyString: true,
      }),
    email: yup.string().trim().email("Cette adresse e-mail ne semble pas valide.").required("Merci d’indiquer votre adresse e-mail."),
    message: yup.string().trim().required("Merci d’écrire quelques mots."),
  })
  .required();

const hasEmailJs = Boolean(
  process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID && process.env.NEXT_PUBLIC_PUBLIC_KEY && process.env.NEXT_PUBLIC_TEMPLATE_ID,
);

const ContactForm = (): ReactElement => {
  const captchaRef = useRef<HCaptcha>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [token, setToken] = useState<string | null>(null);
  const hasCaptcha = Boolean(process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) as Resolver<FormData> });

  const describedBy = (field: keyof FormData) => (errors[field] ? `${field}-error` : undefined);

  const onSubmit = (data: FormData) => {
    if (!hasEmailJs) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        { ...data },
        process.env.NEXT_PUBLIC_PUBLIC_KEY as string,
      )
      .then(
        () => setStatus("sent"),
        () => {
          setStatus("error");
          captchaRef.current?.resetCaptcha();
          setToken(null);
        },
      );
  };

  if (status === "sent") {
    return (
      <p className={styles.success} role="status">
        Merci, votre message est bien parti. Je vous réponds rapidement.
      </p>
    );
  }

  return (
    <form className={styles.form} onSubmit={(event) => handleSubmit(onSubmit)(event)} noValidate>
      {status === "error" && (
        <p className={styles.alert} role="alert">
          L’envoi n’a pas fonctionné. Réessayez, ou appelez-moi au <a href={telHref}>{PHONE.display}</a>.
        </p>
      )}

      <div className={styles.field}>
        <label htmlFor="name">Nom et prénom</label>
        <input id="name" autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={describedBy("name")} {...register("name")} />
        {errors.name && (
          <p className={styles.error} id="name-error">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="phone">Téléphone</label>
          <input
            id="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={describedBy("phone")}
            {...register("phone")}
          />
          {errors.phone && (
            <p className={styles.error} id="phone-error">
              {errors.phone.message}
            </p>
          )}
        </div>
        <div className={styles.field}>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describedBy("email")}
            {...register("email")}
          />
          {errors.email && (
            <p className={styles.error} id="email-error">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Votre message</label>
        <textarea
          id="message"
          rows={5}
          placeholder="Vos disponibilités, ce qui vous amène si vous le souhaitez…"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={describedBy("message")}
          {...register("message")}
        />
        {errors.message && (
          <p className={styles.error} id="message-error">
            {errors.message.message}
          </p>
        )}
      </div>

      {hasCaptcha && (
        <div className={styles.captcha}>
          <HCaptcha
            sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY as string}
            onVerify={setToken}
            onExpire={() => setToken(null)}
            languageOverride="fr"
            ref={captchaRef}
          />
        </div>
      )}

      <button type="submit" className="btn btn--primary" disabled={status === "sending" || (hasCaptcha && !token)}>
        {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>
      <p className={styles.note}>Vos informations restent confidentielles et servent uniquement à vous répondre.</p>
    </form>
  );
};

export default ContactForm;
