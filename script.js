async function sendPrompt(question) {
    const apiKey = 'TUA APYKEY';
    const model = 'gemini-2.5-flash-lite';

    const context = `Sei un assistente intelligente per un gestionale Laravel. Puoi vedere il contesto della pagina corrente: 
                    Quando l'utente ti chiede come fare qualcosa:
                    1. Guarda gli elementi disponibili nella pagina
                    2. Suggerisci l'azione più diretta
                    3. Spiega dove trovare quello che cerca
                    4. Sii conciso e pratico
                    Se la pagina non contiene ciò che cerca, suggerisci dove potrebbe trovarlo nel gestionale.`;


    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contents: [{ parts: [{ text: `${context}\n\nDomanda: ${question}` }] }],
            generationConfig: { temperature: 0.7, maxOutputTokens: 1000 }
        })
    });

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "Errore";
}

function addMessage(text, type) {
    const chat = document.getElementById('chat');
    const msg = document.createElement('div');
    msg.classList.add('message', type);
    msg.textContent = text;
    chat.appendChild(msg);
    chat.scrollTop = chat.scrollHeight;
}

async function handleSend() {
    const input = document.getElementById('question');
    const text = input.value.trim();
    if (!text) return;

    addMessage(text, 'me');
    input.value = '';

    const reply = await sendPrompt(text);
    addMessage(reply, 'bot');
}