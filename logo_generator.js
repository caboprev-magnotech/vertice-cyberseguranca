export function getLogoSVG(className = "w-8 h-8") {
    // A geometric vertex-like logo: a triangle/pyramid shape representing stability and precision
    return `
    <svg class="${className}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4L4 32H36L20 4Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-brand-500"/>
        <path d="M20 14L12 28H28L20 14Z" fill="currentColor" class="text-brand-500 opacity-50"/>
        <circle cx="20" cy="4" r="3" fill="currentColor" class="text-white"/>
        <circle cx="4" cy="32" r="3" fill="currentColor" class="text-white"/>
        <circle cx="36" cy="32" r="3" fill="currentColor" class="text-white"/>
    </svg>
    `;
}
