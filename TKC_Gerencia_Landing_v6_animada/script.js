const whatsappNumber = "573133976038";
const whatsappMessage =
  "Hola, estoy interesado(a) en conocer más sobre las soluciones de TKC Fumigaciones Group y evaluar oportunidades para trabajar juntos.";

const whatsappLink = document.getElementById("whatsapp-link");
const encodedMessage = encodeURIComponent(whatsappMessage);

whatsappLink.href = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
