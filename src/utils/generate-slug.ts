export function generateSlug(text: string): string {
    return text
        .normalize("NFD") // Normaliza caracteres Unicode para decomposição compatível com ASCII
        .replace(/[\u0300-\u036f]/g, "") // Remove diacríticos
        .toLowerCase() // Converte para minúsculas
        .replace(/[^\w\s]/g, "") // Remove caracteres não alfanuméricos exceto espaços
        .trim() // Remove espaços em branco do início e do fim
        .replace(/\s+/g, "-"); // Substitui espaços por hífens
}

// Exemplo de uso:
// const texto = "Texto de Exemplo com Acentuação!";
// const slug = generateSlug(texto);
// console.log(slug); // Saída: "texto-de-exemplo-com-acentuacao"
