import { companyInfo, services, partners } from './data.js';
import { Navbar, Hero, ServiceCard, Footer } from './ui_components.js';
import { AiAssistant } from './ai_assistant.js';

// Init AI
const ai = new AiAssistant();
window.toggleChat = () => ai.toggle();
window.sendChat = (msg) => ai.sendMessage(msg);
window.openChat = () => {
    if (!ai.isOpen) ai.toggle();
};

// Render Main App
document.getElementById('mount').innerHTML = `
    ${Navbar(companyInfo)}
    
    <main>
        ${Hero(companyInfo)}

        <!-- Stats Section -->
        <section class="border-y border-white/5 bg-black/20 backdrop-blur-sm">
            <div class="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                ${[
                    ['+500', 'Projetos Entregues'],
                    ['99.9%', 'Uptime Garantido'],
                    ['24/7', 'Monitoramento'],
                    ['ISO', '27001 Certified']
                ].map(([val, label]) => `
                    <div class="text-center">
                        <div class="text-3xl font-bold text-white mb-1">${val}</div>
                        <div class="text-xs text-dark-muted uppercase tracking-wider">${label}</div>
                    </div>
                `).join('')}
            </div>
        </section>

        <!-- Services Section -->
        <section id="services" class="section-padding relative">
            <div class="max-w-7xl mx-auto px-6">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Soluções Corporativas</h2>
                    <p class="text-dark-muted max-w-2xl mx-auto">
                        Abordagem 360º para segurança da informação. Identificamos, protegemos, detectamos e respondemos.
                    </p>
                </div>
                
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    ${services.map(ServiceCard).join('')}
                </div>
            </div>
        </section>

        <!-- Partners Section -->
        <section class="py-12 border-y border-white/5 bg-white/[0.02]">
            <div class="max-w-7xl mx-auto px-6">
                <p class="text-center text-sm text-dark-muted mb-8 uppercase tracking-widest">Tecnologias que utilizamos</p>
                <div class="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    ${partners.map(p => `
                        <div class="text-xl font-bold text-white">${p}</div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="section-padding relative overflow-hidden">
            <div class="absolute inset-0 bg-brand-900/10"></div>
            <div class="max-w-4xl mx-auto px-6 text-center relative z-10">
                <h2 class="text-4xl font-bold text-white mb-6">Sua empresa está segura hoje?</h2>
                <p class="text-lg text-dark-muted mb-10">
                    Não espere o incidente acontecer. Agende uma avaliação gratuita de vulnerabilidades iniciais com nossos engenheiros.
                </p>
                <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button onclick="document.getElementById('contact').scrollIntoView()" class="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-lg font-bold transition-all w-full sm:w-auto">
                        Agendar Diagnóstico Gratuito
                    </button>
                    <button class="px-8 py-4 bg-transparent border border-white/20 hover:bg-white/5 text-white rounded-lg font-bold transition-all w-full sm:w-auto">
                        Baixar Portfólio PDF
                    </button>
                </div>
            </div>
        </section>
    </main>

    ${Footer(companyInfo)}
`;

// Initialize Icons
lucide.createIcons();

// Animations
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.glass-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.1
    });
});