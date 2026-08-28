import emailjs from 'emailjs-com';

export class GmailService {
    static async sendEmail(email: string, message: string, name: string) {
        const publicKey = "VScSz3okkHPhvuhgm"; 
        const serviceId = "service_6cdb9s1"; 
        const templateId = "template_6bgktpl"; 

        const params = {
            to_email: email,
            from_name: name, 
            message: message,
        };

        try {
            const response = await emailjs.send(serviceId, templateId, params, publicKey);
            if (response.status === 200) {
                alert('Correo enviado con éxito');
            } else {
                alert('Ocurrió un error al enviar el correo');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error al enviar el correo');
        }
    }
}
