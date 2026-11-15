/**
 * Metallic Earth - Sistema Global de Internacionalización (i18n)
 * Soporta traducción en tiempo real (Español <-> Inglés) en todo el sitio web:
 * index.html, AcercaDe.html, ayuda.html y configuracion.html.
 */

(function () {
    'use strict';

    const CLAVE_STORAGE_LANG = 'metallic_earth_idioma';

    const DICCIONARIO = {
        es: {
            // Títulos de documento
            docTitleIndex: "Metallic Earth",
            docTitleAcerca: "Metallic Earth - Acerca de",
            docTitleAyuda: "Metallic Earth - Ayuda",
            docTitleConfig: "Metallic Earth - Configuración",

            // Barra de navegación global
            navInicio: "Inicio",
            navAcerca: "Acerca de",
            navAyuda: "Ayuda",
            navConfig: "Configuración",
            navBtnLang: "EN",

            // index.html - Vista principal
            indexTituloObjetos: "Lista de objetos",
            panelTag: "OBJETO ORBITAL",
            panelTelemetria: "Telemetría y Órbita",
            panelAltitudLbl: "Altitud",
            panelVelocidadLbl: "Velocidad",
            panelInclinacionLbl: "Inclinación",
            panelPeriodoLbl: "Periodo",
            panelCientifica: "Información Científica",
            panelMision: "Detalles de la Misión",
            panelAgenciaLbl: "Agencia:",
            panelLanzamientoLbl: "Lanzamiento:",
            panelPropositoLbl: "Propósito:",
            panelMasInfoLbl: "Más información:",
            panelMasInfoLink: "Más información",
            panelEstadoActivo: "En órbita activa",
            panelEstadoInactivo: "Inactivo / Fuera de servicio",
            btnCerrarAria: "Cerrar panel",

            // AcercaDe.html
            acercaQueEs: "¿Qué es metallic earth?",
            acercaQueEsTxt: "Somos una plataforma para visualizar información respecto a objetos inactivos o abandonados que se encuentran en la atmósfera -Abandonados pero no olvidados-",
            acercaObjetivo: "Nuestro objetivo",
            acercaObjetivoTxt: "Facilitar la observación y comprensión de la ubicación de objetos mediante visualización tridimensional.",
            acercaDesarrollado: "Desarrollado para",
            acercaDesarrolladoTxt: "Hackaton NASA Space Apps Challenge 2026 - República Dominicana.",

            // ayuda.html
            ayudaFuncionamiento: "¿Cómo funciona la página?",
            ayudaFuncionamientoTxt: "En la página de inicio hay un modelo 3D interactivo de la Tierra con satélites fuera de servicio en la actualidad, así como una lista lateral con los mismos. Al darle clic a un objeto de la lista se abre un panel con los detalles del mismo, desde su nombre y agencia a la que pertenece, hasta sus parámetros orbitales y propósito científico.",
            ayudaContacto: "Contacta al equipo",
            ayudaContactoTxt: "En caso de requerir información adicional o tener dudas respecto a la plataforma, puedes contactar con nuestro equipo 'Radalaxy'.",

            // configuracion.html (simplificado en un único recuadro, sin emojis)
            configTitulo: "Configuración",
            configSubtitulo: "Ajustes básicos del sistema y preferencias de visualización.",
            btnTraducirTexto: "Cambiar a Inglés",
            optIdiomaTitulo: "Idioma de la página",
            optIdiomaDesc: "Selecciona el idioma principal de la plataforma.",
            btnEs: "Español",
            btnEn: "English",
            optRotacionTitulo: "Rotación automática de la Tierra",
            optRotacionDesc: "Girar automáticamente el modelo 3D cuando esté inactivo.",
            optEtiquetasTitulo: "Etiquetas de satélites",
            optEtiquetasDesc: "Mostrar los nombres de satélites directamente sobre el visor.",
            optFondoTitulo: "Fondo del espacio",
            optFondoDesc: "Fondo visual aplicado al simulador orbital.",
            fondoVideo: "Video de estrellas",
            fondoImagen: "Imagen fija del cosmos",
            fondoOscuro: "Fondo oscuro",
            btnRestablecer: "Restablecer",
            btnGuardar: "Guardar cambios",
            toastGuardado: "Configuración guardada con éxito.",
            toastRestablecido: "Configuración restablecida a valores por defecto.",
            toastIdiomaCambiado: "Idioma cambiado a Español."
        },
        en: {
            // Document titles
            docTitleIndex: "Metallic Earth",
            docTitleAcerca: "Metallic Earth - About",
            docTitleAyuda: "Metallic Earth - Help",
            docTitleConfig: "Metallic Earth - Settings",

            // Global navigation bar
            navInicio: "Home",
            navAcerca: "About",
            navAyuda: "Help",
            navConfig: "Settings",
            navBtnLang: "ES",

            // index.html - Main view
            indexTituloObjetos: "Orbital Objects",
            panelTag: "ORBITAL OBJECT",
            panelTelemetria: "Telemetry & Orbit",
            panelAltitudLbl: "Altitude",
            panelVelocidadLbl: "Velocity",
            panelInclinacionLbl: "Inclination",
            panelPeriodoLbl: "Period",
            panelCientifica: "Scientific Information",
            panelMision: "Mission Details",
            panelAgenciaLbl: "Agency:",
            panelLanzamientoLbl: "Launch:",
            panelPropositoLbl: "Purpose:",
            panelMasInfoLbl: "More information:",
            panelMasInfoLink: "More information",
            panelEstadoActivo: "In active orbit",
            panelEstadoInactivo: "Decommissioned / Inactive",
            btnCerrarAria: "Close panel",

            // AcercaDe.html
            acercaQueEs: "What is Metallic Earth?",
            acercaQueEsTxt: "We are a platform to visualize information regarding inactive or abandoned objects in the atmosphere -Abandoned but not forgotten-",
            acercaObjetivo: "Our Objective",
            acercaObjetivoTxt: "Facilitate the observation and understanding of object locations through three-dimensional visualization.",
            acercaDesarrollado: "Developed for",
            acercaDesarrolladoTxt: "NASA Space Apps Challenge 2026 Hackathon - Dominican Republic.",

            // ayuda.html
            ayudaFuncionamiento: "How does the website work?",
            ayudaFuncionamientoTxt: "On the home page there is an interactive 3D model of the Earth featuring currently defunct satellites, along with a sidebar list. Clicking an object in the list opens a panel with its details, from its name and operating agency, to its orbital telemetry and scientific purpose.",
            ayudaContacto: "Contact the Team",
            ayudaContactoTxt: "In case you need additional information or have questions regarding the platform, you can contact our team 'Radalaxy'.",

            // configuracion.html (simplified in a single box, no emojis)
            configTitulo: "Settings",
            configSubtitulo: "Basic system settings and visualization preferences.",
            btnTraducirTexto: "Switch to Spanish",
            optIdiomaTitulo: "Page Language",
            optIdiomaDesc: "Select the primary language of the platform.",
            btnEs: "Español",
            btnEn: "English",
            optRotacionTitulo: "Earth Auto-Rotation",
            optRotacionDesc: "Smoothly rotate the 3D model during idle time.",
            optEtiquetasTitulo: "Satellite Labels",
            optEtiquetasDesc: "Display satellite names directly on the 3D viewer.",
            optFondoTitulo: "Space Background",
            optFondoDesc: "Visual backdrop applied to the orbital simulator.",
            fondoVideo: "Star Video",
            fondoImagen: "Cosmos Still Image",
            fondoOscuro: "Dark Space",
            btnRestablecer: "Reset",
            btnGuardar: "Save changes",
            toastGuardado: "Settings successfully saved.",
            toastRestablecido: "Settings reset to default values.",
            toastIdiomaCambiado: "Language switched to English."
        }
    };

    /**
     * Obtiene el idioma almacenado actualmente o 'es' por defecto
     */
    function obtenerIdiomaActual() {
        try {
            const guardado = localStorage.getItem(CLAVE_STORAGE_LANG);
            if (guardado === 'en' || guardado === 'es') {
                return guardado;
            }
        } catch (e) {}
        return 'es';
    }

    /**
     * Aplica el idioma a la página actual
     */
    function aplicarIdioma(lang, dispararEvento = true) {
        if (!DICCIONARIO[lang]) lang = 'es';

        document.documentElement.lang = lang;

        try {
            localStorage.setItem(CLAVE_STORAGE_LANG, lang);
        } catch (e) {}

        const t = DICCIONARIO[lang];

        // 1. Traducir elementos con atributo data-i18n
        const elementos = document.querySelectorAll('[data-i18n]');
        elementos.forEach(el => {
            const clave = el.getAttribute('data-i18n');
            if (t[clave]) {
                el.textContent = t[clave];
            }
        });

        // 2. Actualizar botón del nav
        const btnNav = document.getElementById('btn-idioma-nav');
        if (btnNav) {
            const spanTexto = btnNav.querySelector('#texto-idioma-nav') || btnNav;
            spanTexto.textContent = (lang === 'es') ? 'EN' : 'ES';
            btnNav.setAttribute('aria-label', (lang === 'es') ? 'Cambiar a Inglés' : 'Switch to Spanish');
        }

        // 3. Actualizar texto de botón de configuración
        const btnTraductorTexto = document.getElementById('btn-traductor-texto');
        if (btnTraductorTexto) {
            btnTraductorTexto.textContent = (lang === 'es') ? 'Cambiar a Inglés' : 'Switch to Spanish';
        }

        // 4. Actualizar botones directos de idioma
        const btnEs = document.getElementById('btn-lang-es');
        const btnEn = document.getElementById('btn-lang-en');
        if (btnEs && btnEn) {
            btnEs.classList.toggle('activo', lang === 'es');
            btnEn.classList.toggle('activo', lang === 'en');
        }

        // 5. Notificar a otros scripts
        if (dispararEvento) {
            window.dispatchEvent(new CustomEvent('metallic_idioma_cambiado', {
                detail: { idioma: lang, traducciones: t }
            }));
        }
    }

    /**
     * Alterna entre Español e Inglés
     */
    function alternarIdioma() {
        const actual = obtenerIdiomaActual();
        const nuevo = (actual === 'es') ? 'en' : 'es';
        aplicarIdioma(nuevo, true);
    }

    // Inicializar al cargar el DOM
    document.addEventListener('DOMContentLoaded', () => {
        const idiomaInicial = obtenerIdiomaActual();
        aplicarIdioma(idiomaInicial, false);

        // Enlazar botón global del nav
        const btnNav = document.getElementById('btn-idioma-nav');
        if (btnNav) {
            btnNav.addEventListener('click', (e) => {
                e.preventDefault();
                alternarIdioma();
            });
        }
    });

    // API pública para consumo desde otros módulos
    window.MetallicTraductor = {
        obtenerIdioma: obtenerIdiomaActual,
        cambiarIdioma: aplicarIdioma,
        alternarIdioma: alternarIdioma,
        diccionario: DICCIONARIO
    };

})();
