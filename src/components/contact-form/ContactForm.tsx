import emailjs from "@emailjs/browser";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { yupResolver } from "@hookform/resolvers/yup";
import { ReactElement, useRef, useState } from "react";
import { useForm, Resolver } from "react-hook-form";
import * as yup from "yup";

import Button from "components/button/default/Button";

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
    name: yup.string().required("Merci de renseigner votre nom"),
    email: yup
      .string()
      .email("Merci de saisir un email valide")
      .required("L'adresse mail est obligatoire"),
    message: yup.string().required("Merci de saisir votre message"),
    phone: yup
      .string()
      .matches(
        /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/,
        "Merci de saisir un numéro valide"
      )
      .required("Merci de renseigner votre numéro de téléphone"),
  })
  .required();

const ContactForm: React.FC = (): ReactElement => {
  const formRef = useRef<HTMLFormElement>(null);
  const captchaRef = useRef<HCaptcha>(null);

  const [formSent, setFormSent] = useState<boolean>(false);
  const [formSentError, setFormSentError] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema) as Resolver<FormData>,
  });

  const onSubmit = () => {
    if (
      process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID &&
      process.env.NEXT_PUBLIC_PUBLIC_KEY &&
      process.env.NEXT_PUBLIC_TEMPLATE_ID &&
      formRef.current
    ) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          formRef.current,
          process.env.NEXT_PUBLIC_PUBLIC_KEY
        )
        .then(
          () => {
            setFormSent(true);
          },
          () => {
            setFormSentError(true);
          }
        );
    }
  };

  return (
    <>
      {!formSent ? (
        <>
          {formSentError && (
            <p className={styles.error}>
              Une erreur est survenue, veuillez renseigner le formulaire à
              nouveau
            </p>
          )}
          <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formItem}>
              <label>Nom</label>
              <input {...register("name")} />
              {errors.name && (
                <p className={styles.error}>{errors.name.message}</p>
              )}
            </div>
            <div className={styles.formItem}>
              <label>Numéro de téléphone</label>
              <input type="phone" {...register("phone")} />
              {errors.phone && (
                <p className={styles.error}>{errors.phone.message}</p>
              )}
            </div>

            <div className={styles.formItem}>
              <label>Email</label>
              <input type="email" {...register("email")} />
              {errors.email && (
                <p className={styles.error}>{errors.email.message}</p>
              )}
            </div>
            <div className={styles.formItem}>
              <label>Message</label>
              <textarea {...register("message")} />
              {errors.message && (
                <p className={styles.error}>{errors.message.message}</p>
              )}
            </div>
            {process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY && (
              <div className={styles.hcaptcha}>
                <HCaptcha
                  sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY}
                  onVerify={setToken}
                  ref={captchaRef}
                />
              </div>
            )}
            <Button useButtonMarkup type="submit" disabled={!token}>
              Envoyer
            </Button>
          </form>
        </>
      ) : (
        <>
          {formSent && (
            <p className={styles.success}>
              Votre message a bien été envoyé, j&apos;y réponderai dans les plus
              bref délais
            </p>
          )}
        </>
      )}
    </>
  );
};

export default ContactForm;
