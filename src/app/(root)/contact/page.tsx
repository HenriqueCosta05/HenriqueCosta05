import ClientContact from "./client/ClientContact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | Henrique Costa",
  description:
    "Entre em contato comigo! Se você tem perguntas, deseja discutir um projeto ou apenas se conectar, sinta-se à vontade para entrar em contato. Estou sempre aberto a novas oportunidades e colaborações.",
  openGraph: {
    description:
      "Entre em contato comigo! Se você tem perguntas, deseja discutir um projeto ou apenas se conectar, sinta-se à vontade para entrar em contato. Estou sempre aberto a novas oportunidades e colaborações.",
  },
};

export default function Contact() {
  return <ClientContact />;
}
