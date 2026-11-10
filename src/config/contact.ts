// Datos de contacto centralizados. Mientras WHATSAPP_NUMBER esté vacío, los botones de WhatsApp no se muestran.
// Formato internacional sin "+" ni espacios, p. ej. "51987654321".
export const WHATSAPP_NUMBER = "51987811065";

export const GITHUB_URL = "https://github.com/LordMathi2741";
export const LINKEDIN_URL = "https://www.linkedin.com/in/mathias-alejandro-jave-diaz-68a364222/";
export const CV_URL = "https://drive.google.com/file/d/1Vro7Lj0prsPxSOnsj9Y6c3yIdpbk7XB1/view?usp=sharing";

export function whatsappUrl(message: string): string | null {
    if (!WHATSAPP_NUMBER) return null;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
