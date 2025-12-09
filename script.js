async function sendPrompt(question) {
    const apiKey = 'LA TUA APIKEY';
    const model = 'gemini-2.5-flash-lite';

    const context = `Sei Jarvis, un assistente intelligente per assistermi negli allenamenti. Cerca di dare risposte professionali, concise e abbastanza brevi in base alla tua skill come personal trainer. 
                    Quando l'utente ti chiede come fare qualcosa che va al di fuori delle tue competenze, rispondi "Non posso rispondere in base alla tua richiesta, 
                    sono un personal trainer. Riformula la domanda!"`;


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