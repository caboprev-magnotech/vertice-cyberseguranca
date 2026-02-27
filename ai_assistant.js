export class AiAssistant {
    constructor() {
        this.isOpen = false;
        this.messages = [
            { role: 'assistant', content: 'Olá! Sou a V-IA, inteligência da Vértice. Como posso ajudar a proteger sua empresa hoje? Posso sugerir soluções baseadas no seu cenário.' }
        ];
        this.render();
    }

    toggle() {
        this.isOpen = !this.isOpen;
        this.render();
    }

    async sendMessage(text) {
        if (!text.trim()) return;

        this.messages.push({ role: 'user', content: text });
        this.render();

        // Simulate thinking UI
        const thinkingId = 'thinking-' + Date.now();
        this.messages.push({ role: 'assistant', content: 'Analisando...', id: thinkingId });
        this.render();

        try {
            const response = await fetch("https://dev-edge.flowith.net/api-proxy/" + encodeURIComponent("https://openrouter.ai/api/v1/chat/completions"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer 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", // Provided key
                    "HTTP-Referer": "https://verticecyber.com",
                    "X-Title": "Vertice Cyber"
                },
                body: JSON.stringify({
                    model: "deepseek/deepseek-chat-v3-0324:free", // Using free model as requested
                    messages: [
                        { role: "system", content: "You are V-IA, a cybersecurity expert assistant for Vértice Cybersegurança. Be concise, professional, and helpful. Sell services like Pentest, SOC, and Compliance. Language: Portuguese (Brazil)." },
                        ...this.messages.filter(m => !m.id)
                    ]
                })
            });

            const data = await response.json();
            const reply = data.choices?.[0]?.message?.content || "Desculpe, tive um problema de conexão. Pode tentar novamente?";
            
            // Remove thinking and add real reply
            this.messages = this.messages.filter(m => m.id !== thinkingId);
            this.messages.push({ role: 'assistant', content: reply });

        } catch (error) {
            console.error(error);
            this.messages = this.messages.filter(m => m.id !== thinkingId);
            this.messages.push({ role: 'assistant', content: "Erro ao conectar com o servidor de segurança." });
        }
        
        this.render();
    }

    render() {
        const container = document.getElementById('ai-widget-mount');
        if (!container) return;

        if (!this.isOpen) {
            container.innerHTML = `
                <button onclick="window.toggleChat()" 
                    class="fixed bottom-6 right-6 w-14 h-14 bg-brand-600 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-brand-500 hover:scale-110 transition-all z-50 group">
                    <i data-lucide="message-square" class="w-6 h-6"></i>
                    <span class="absolute right-0 top-0 w-3 h-3 bg-red-500 rounded-full border-2 border-black"></span>
                </button>
            `;
        } else {
            container.innerHTML = `
                <div class="fixed bottom-6 right-6 w-[90vw] md:w-[400px] h-[500px] bg-dark-surface border border-white/10 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden animate-fade-in-up">
                    <!-- Header -->
                    <div class="p-4 bg-brand-900/20 border-b border-white/5 flex justify-between items-center">
                        <div class="flex items-center gap-3">
                            <div class="w-8 h-8 rounded-full bg-brand-500/20 flex items-center justify-center">
                                <i data-lucide="shield-check" class="w-4 h-4 text-brand-400"></i>
                            </div>
                            <div>
                                <h3 class="text-sm font-bold text-white">V-IA Security</h3>
                                <p class="text-xs text-brand-400 flex items-center gap-1">
                                    <span class="w-1.5 h-1.5 bg-brand-500 rounded-full animate-pulse"></span> Online
                                </p>
                            </div>
                        </div>
                        <button onclick="window.toggleChat()" class="text-dark-muted hover:text-white">
                            <i data-lucide="x" class="w-5 h-5"></i>
                        </button>
                    </div>

                    <!-- Messages -->
                    <div class="flex-1 overflow-y-auto p-4 space-y-4" id="chat-messages">
                        ${this.messages.map(msg => `
                            <div class="flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}">
                                <div class="max-w-[80%] rounded-2xl p-3 text-sm ${
                                    msg.role === 'user' 
                                    ? 'bg-brand-600 text-white rounded-tr-none' 
                                    : 'bg-white/5 text-dark-text rounded-tl-none border border-white/5'
                                }">
                                    ${msg.content}
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    <!-- Input -->
                    <form onsubmit="event.preventDefault(); window.sendChat(this.elements.msg.value); this.reset();" 
                        class="p-4 border-t border-white/5 bg-black/20">
                        <div class="relative">
                            <input name="msg" type="text" placeholder="Digite sua dúvida..." 
                                class="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-brand-500/50 focus:bg-white/10 transition-all">
                            <button type="submit" class="absolute right-1 top-1 w-8 h-8 bg-brand-500 rounded-full flex items-center justify-center text-white hover:bg-brand-400 transition-colors">
                                <i data-lucide="send" class="w-4 h-4"></i>
                            </button>
                        </div>
                    </form>
                </div>
            `;
            
            // Auto scroll to bottom
            const msgContainer = document.getElementById('chat-messages');
            if(msgContainer) msgContainer.scrollTop = msgContainer.scrollHeight;
        }
        
        lucide.createIcons();
    }
}
