export const API_URL = "http://localhost:3000"; // Verify your backend port

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function apiPost(path: string, data: any) {
  const res = await fetch(API_URL + path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  // Se vier html, evita o JSON crash
  const text = await res.text();

  try {
    const json = JSON.parse(text);
    if (!res.ok) throw new Error(json.message || "Erro no servidor");
    return json;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    console.error("Resposta não-JSON:", text);
    throw new Error("O backend não retornou JSON. Rota incorreta?");
  }
}
