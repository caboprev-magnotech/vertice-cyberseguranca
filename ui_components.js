import { getLogoSVG } from './logo_generator.js';

export const Navbar = (company) => `
    <nav class="fixed top-0 w-full z-50 glass border-b border-white/5">
        <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div class="flex items-center gap-3 cursor-pointer group">
                <div class="transition-transform duration-300 group-hover:scale-110">
                    ${getLogoSVG('w-10 h-10')}
                </div>
                <span class="text-xl font-bold tracking-tight text-white group-hover:text-brand-400 transition-colors">
                    VÉRTICE
                </span>
            </div>
            
            <div class="hidden md:flex items-center gap-8">
                <a href="#services" class="text-sm font-medium text-dark-muted hover:text-brand-400 transition-colors">Soluções</a>
                <a href="#about" class="text-sm font-medium text-dark-muted hover:text-brand-400 transition-colors">Sobre</a>
                <a href="#compliance" class="text-sm font-medium text-dark-muted hover:text-brand-400 transition-colors">Compliance</a>
            </div>

            <div class="flex items-center gap-4">
                <button onclick="document.getElementById('contact').scrollIntoView()" 
                    class="hidden md:flex items-center gap-2 px-5 py-2.5 bg-brand-600 hover:bg-brand-500 text-white rounded-lg text-sm font-semibold transition-all hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                    Fale com Especialista
                    <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </button>
                <button class="md:hidden text-white" id="mobile-menu-btn">
                    <i data-lucide="menu" class="w-6 h-6"></i>
                </button>
            </div>
        </div>
    </nav>
`;

export const Hero = (company) => `
    <section class="relative min-h-screen flex items-center pt-20 bg-grid overflow-hidden">
        <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div class="space-y-8 z-10">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider">
                    <span class="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                    Segurança Ofensiva & Defensiva
                </div>
                
                <h1 class="text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
                    Proteção invisível,<br>
                    <span class="text-gradient-brand">Defesa implacável.</span>
                </h1>
                
                <p class="text-lg text-dark-muted max-w-xl leading-relaxed">
                    ${company.description} A Vértice combina inteligência artificial e expertise humana para blindar sua infraestrutura.
                </p>

                <div class="flex flex-wrap items-center gap-4">
                    <button onclick="document.getElementById('services').scrollIntoView()" 
                        class="px-8 py-4 bg-white text-black rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center gap-2">
                        Ver Soluções
                    </button>
                    <button onclick="window.openChat()"
                        class="px-8 py-4 glass-card text-white rounded-lg font-medium hover:bg-white/5 transition-colors flex items-center gap-2 border border-white/10">
                        <i data-lucide="bot" class="w-5 h-5 text-brand-400"></i>
                        Diagnóstico com IA
                    </button>
                </div>
            </div>

            <div class="relative lg:h-[600px] flex items-center justify-center">
                <!-- Abstract Cyber Visualization -->
                <div class="relative w-full h-full">
                    <div class="absolute inset-0 bg-gradient-to-tr from-brand-500/20 to-transparent rounded-full blur-[100px]"></div>
                    <svg class="w-full h-full animate-pulse-subtle" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style="stop-color:#22c55e;stop-opacity:1" />
                                <stop offset="100%" style="stop-color:#14532d;stop-opacity:0" />
                            </linearGradient>
                        </defs>
                        <circle cx="250" cy="250" r="200" stroke="url(#grad1)" stroke-width="1" fill="none" opacity="0.5"/>
                        <circle cx="250" cy="250" r="150" stroke="url(#grad1)" stroke-width="1" fill="none" opacity="0.7"/>
                        <circle cx="250" cy="250" r="100" stroke="url(#grad1)" stroke-width="2" fill="none"/>
                        
                        <!-- Floating Shield -->
                        <path d="M250 150 L320 180 V250 C320 300 250 340 250 340 C250 340 180 300 180 250 V180 L250 150 Z" 
                              fill="rgba(34, 197, 94, 0.1)" stroke="#22c55e" stroke-width="2"/>
                    </svg>
                </div>
            </div>
        </div>
    </section>
`;

export const ServiceCard = (service) => `
    <div class="glass-card p-8 rounded-2xl group hover:bg-white/[0.02]">
        <div class="w-12 h-12 rounded-lg bg-brand-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <i data-lucide="${service.icon}" class="w-6 h-6 text-brand-400"></i>
        </div>
        <h3 class="text-xl font-bold text-white mb-3">${service.title}</h3>
        <p class="text-dark-muted text-sm leading-relaxed mb-6">
            ${service.description}
        </p>
        <ul class="space-y-2 mb-6 border-t border-white/5 pt-4">
            ${service.features.map(f => `
                <li class="flex items-center gap-2 text-xs text-dark-muted">
                    <i data-lucide="check" class="w-3 h-3 text-brand-500"></i>
                    ${f}
                </li>
            `).join('')}
        </ul>
        <a href="#contact" class="inline-flex items-center text-sm font-semibold text-brand-400 hover:text-brand-300 group-hover:translate-x-1 transition-transform">
            Saiba mais <i data-lucide="chevron-right" class="w-4 h-4 ml-1"></i>
        </a>
    </div>
`;

export const Footer = (company) => `
    <footer class="bg-black border-t border-white/10 pt-20 pb-10">
        <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
            <div class="col-span-1 md:col-span-2 space-y-6">
                <div class="flex items-center gap-2">
                    ${getLogoSVG('w-8 h-8')}
                    <span class="text-xl font-bold text-white">VÉRTICE</span>
                </div>
                <p class="text-dark-muted max-w-sm">
                    Elevando os padrões de segurança digital para proteger o futuro do seu negócio.
                </p>
                <div class="flex gap-4">
                    <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-all text-dark-muted">
                        <i data-lucide="linkedin" class="w-5 h-5"></i>
                    </a>
                    <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-all text-dark-muted">
                        <i data-lucide="instagram" class="w-5 h-5"></i>
                    </a>
                </div>
            </div>
            
            <div>
                <h4 class="text-white font-bold mb-6">Serviços</h4>
                <ul class="space-y-4 text-sm text-dark-muted">
                    <li><a href="#" class="hover:text-brand-400 transition-colors">Pentest</a></li>
                    <li><a href="#" class="hover:text-brand-400 transition-colors">SOC Gerenciado</a></li>
                    <li><a href="#" class="hover:text-brand-400 transition-colors">Consultoria LGPD</a></li>
                    <li><a href="#" class="hover:text-brand-400 transition-colors">Threat Hunting</a></li>
                </ul>
            </div>

            <div id="contact">
                <h4 class="text-white font-bold mb-6">Contato</h4>
                <ul class="space-y-4 text-sm text-dark-muted">
                    <li class="flex items-center gap-3">
                        <i data-lucide="mail" class="w-4 h-4 text-brand-500"></i>
                        ${company.contact.email}
                    </li>
                    <li class="flex items-center gap-3">
                        <i data-lucide="phone" class="w-4 h-4 text-brand-500"></i>
                        ${company.contact.phone}
                    </li>
                    <li class="flex items-center gap-3">
                        <i data-lucide="map-pin" class="w-4 h-4 text-brand-500"></i>
                        ${company.contact.address}
                    </li>
                </ul>
            </div>
        </div>
        
        <div class="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-dark-muted">
            <p>&copy; 2024 Vértice Cybersegurança. Todos os direitos reservados.</p>
            <div class="flex gap-6 mt-4 md:mt-0">
                <a href="#" class="hover:text-white">Privacidade</a>
                <a href="#" class="hover:text-white">Termos</a>
            </div>
        </div>
    </footer>
`;