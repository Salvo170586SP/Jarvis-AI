# WhatsApp Replica - Chatbot Assistant

Una semplice applicazione web che replica l'interfaccia di WhatsApp, integrando un assistente intelligente alimentato da Google Gemini per fornire supporto istantaneo attraverso una chat.

## Descrizione del Progetto

Questo progetto crea un'esperienza di chat minimalista e intuitiva simile a WhatsApp con un assistente AI (Jarvis) che risponde alle domande dell'utente in tempo reale. È un'applicazione standalone perfetta per sperimentare con l'API di Google Gemini.

### Caratteristiche Principali

- **Interfaccia intuitiva** basata sul design di WhatsApp
- **Chat in tempo reale** con risposte alimentate da Google Gemini AI
- **Design minimale e responsivo**
- **Messaggi ordinati** con distinzione tra messaggi dell'utente e del bot
- **Setup semplice** - solo HTML, CSS e JavaScript vanilla


## Configurazione Iniziale

### 1. Ottenere l'API Key di Google Gemini

1. Accedi a [Google AI Studio](https://aistudio.google.com/)
2. Clicca su **"Get API key"** nel menu laterale
3. Seleziona **"Create API key in new project"**
4. Copia la chiave API generata
5. Incolla la chiave nel file `index.html` nella variabile `apiKey`:

```javascript
const apiKey = 'YOUR_API_KEY_HERE';
```

⚠️ **IMPORTANTE:** Non condividere mai la tua API key pubblicamente. 

### 2. Modello Gemini Utilizzato

Il progetto utilizza **Google Gemini 2.5 Flash Lite**, specificato nella variabile:

```javascript
const model = 'gemini-2.5-flash-lite';
```

Questo modello è stato scelto per:
- **Performance ottimale** su risposte rapide
- **Costo contenuto** rispetto ad altri modelli
- **Latenza bassa** perfetta per interazioni in tempo reale
- **Semplicità** ideale per un progetto entry-level

**Alternativa:** Se hai bisogno di risposte più elaborate, puoi cambiare con:
- `gemini-2.5-flash` (versione completa con costi maggiori)
- `gemini-1.5-pro` (modello premium, più potente ma più costoso)

 
## Possibili Miglioramenti

- Aggiungere persistenza con localStorage per cronologia chat
- Implementare indicatore "sta scrivendo..."
- Aggiungere typing effect per le risposte
- Migliorare la gestione degli errori con feedback visivo
- Supporto per Enter per inviare i messaggi
- Aggiungere emoji e formattazione del testo
- Implementare cancellazione della cronologia

## Troubleshooting

### Errore: "Invalid API Key"
Verifica di aver copiato correttamente la chiave da Google AI Studio e che sia attiva.

### Errore: "Rate limit exceeded"
Aspetta qualche minuto prima di inviare nuovi messaggi. Considera un piano a pagamento su Google Cloud.

### Nessuna risposta dal bot
Controlla la console del browser (F12) per eventuali errori. Assicurati che l'API key abbia il permesso di accedere al modello Gemini.

## Licenza

Questo progetto è fornito come-è. Assicurati di rispettare i termini di servizio di Google AI Studio.