
//função para abrir o whatszapp

export function abrirWhatsApp() {
    const telefone = "5585997448626"; // Ex: 55 + DDD + número
    const mensagem = "Olá, Matheus, gostaria de discutir sobre uma ideia que tive. Poderíamos conversar?";
    
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}
