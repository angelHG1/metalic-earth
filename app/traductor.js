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
            // Document Title
            docTitleIndex: "Metallic Earth",
            docTitleAcerca: "Metallic Earth - Acerca de",
            docTitleAyuda: "Metallic Earth - Ayuda",
            docTitleConfig: "Metallic Earth - Configuración",

            // Barra de navegación global
            navInicio: "Inicio",
            navAcerca: "Acerca de",
            navAyuda: "Ayuda",
            navConfig: "Configuración",
            navBtnLang: "English",
            navBadgeLang: "EN",

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

            // configuracion.html
            configTitulo: "Configuración del Sistema",
            configSubtitulo: "Personaliza la experiencia visual, parámetros orbitales y preferencias del sistema Metallic Earth.",
            btnTraducirTexto: "Switch to English",
            badgeLang: "ES",
            tagLocalizacion: "LOCALIZACIÓN",
            tituloIdioma: "Idioma y Región",
            optIdiomaTitulo: "Idioma de la interfaz",
            optIdiomaDesc: "Selecciona el idioma principal para textos, datos y telemetría",
            btnEs: "🇪🇸 Español",
            btnEn: "🇺🇸 English",
            optHorarioTitulo: "Formato horario",
            optHorarioDesc: "Formato para marcas de tiempo y periodos orbitales",
            horarioUtc: "UTC (Tiempo Universal)",
            horario12h: "Hora Local (12 horas)",
            horario24h: "Hora Local (24 horas)",
            tagGraficos: "GRÁFICOS",
            tituloVisualizacion: "Visualización 3D",
            optRotacionTitulo: "Rotación automática de la Tierra",
            optRotacionDesc: "Girar suavemente el planeta Tierra cuando no haya interacción",
            optSombrasTitulo: "Calidad gráfica y sombras",
            optSombrasDesc: "Ajusta la intensidad de sombras y fidelidad de los materiales",
            calidadAlta: "Alta (Recomendada)",
            calidadMedia: "Media",
            calidadBaja: "Baja (Ahorro de energía)",
            optEtiquetasTitulo: "Etiquetas orbitales flotantes",
            optEtiquetasDesc: "Mostrar los nombres de satélites directamente sobre el visor",
            optFondoTitulo: "Fondo del espacio",
            optFondoDesc: "Fondo visual aplicado al simulador orbital",
            fondoVideo: "Video dinámico de estrellas",
            fondoImagen: "Imagen fija del cosmos",
            fondoOscuro: "Espacio profundo oscuro",
            tagDatos: "DATOS",
            tituloTelemetria: "Telemetría y Unidades",
            optAltitudTitulo: "Unidad de Altitud",
            optAltitudDesc: "Escala empleada para la distancia orbital de los objetos",
            altitudKm: "Kilómetros (km)",
            altitudMi: "Millas (mi)",
            altitudNm: "Millas Náuticas (NM)",
            optVelocidadTitulo: "Unidad de Velocidad",
            optVelocidadDesc: "Medición de velocidad en la órbita calculada",
            velKms: "Kilómetros por segundo (km/s)",
            velKmh: "Kilómetros por hora (km/h)",
            velMph: "Millas por hora (mph)",
            optTasaTitulo: "Frecuencia de actualización",
            optTasaDesc: "Cadencia de refresco para el cálculo de posiciones satelitales",
            tasa60: "Tiempo real (60 FPS)",
            tasa30: "Equilibrada (30 FPS)",
            tasa15: "Bajo consumo (15 FPS)",
            tagSistema: "SISTEMA",
            tituloSistema: "Filtros y Audio",
            optResaltarTitulo: "Destacar basura espacial",
            optResaltarDesc: "Marcar visualmente satélites inactivos o abandonados",
            optSonidoTitulo: "Efectos de sonido interactivos",
            optSonidoDesc: "Emitir retroalimentación sonora al interactuar con satélites",
            optAutoAbrirTitulo: "Despliegue automático de telemetría",
            optAutoAbrirDesc: "Abrir el panel lateral inmediatamente al pulsar un satélite",
            btnRestablecer: "Restablecer valores",
            btnGuardar: "Guardar configuración",
            toastGuardado: "✓ Configuración guardada con éxito",
            toastRestablecido: "↺ Configuración restablecida a valores por defecto",
            toastIdiomaCambiado: "🌐 Idioma cambiado a Español"
        },
        en: {
            // Document Title
            docTitleIndex: "Metallic Earth",
            docTitleAcerca: "Metallic Earth - About",
            docTitleAyuda: "Metallic Earth - Help",
            docTitleConfig: "Metallic Earth - Settings",

            // Global Navigation Bar
            navInicio: "Home",
            navAcerca: "About",
            navAyuda: "Help",
            navConfig: "Settings",
            navBtnLang: "Español",
            navBadgeLang: "ES",

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

            // configuracion.html
            configTitulo: "System Settings",
            configSubtitulo: "Customize your visual experience, orbital parameters, and Metallic Earth system preferences.",
            btnTraducirTexto: "Cambiar a Español",
            badgeLang: "EN",
            tagLocalizacion: "LOCALIZATION",
            tituloIdioma: "Language & Region",
            optIdiomaTitulo: "Interface Language",
            optIdiomaDesc: "Choose the primary language for text, telemetry, and data",
            btnEs: "🇪🇸 Español",
            btnEn: "🇺🇸 English",
            optHorarioTitulo: "Time Format",
            optHorarioDesc: "Format for orbital timestamps and period indicators",
            horarioUtc: "UTC (Universal Time)",
            horario12h: "Local Time (12 hours)",
            horario24h: "Local Time (24 hours)",
            tagGraficos: "GRAPHICS",
            tituloVisualizacion: "3D Visualization",
            optRotacionTitulo: "Earth Auto-Rotation",
            optRotacionDesc: "Smoothly rotate planet Earth during idle time",
            optSombrasTitulo: "Graphics Quality & Shadows",
            optSombrasDesc: "Adjust shadow intensity and material rendering fidelity",
            calidadAlta: "High (Recommended)",
            calidadMedia: "Medium",
            calidadBaja: "Low (Power Saver)",
            optEtiquetasTitulo: "Floating Orbital Labels",
            optEtiquetasDesc: "Display satellite names directly on the 3D viewer",
            optFondoTitulo: "Space Background",
            optFondoDesc: "Visual backdrop applied to the orbital simulator",
            fondoVideo: "Dynamic Star Video",
            fondoImagen: "Cosmos Still Image",
            fondoOscuro: "Deep Dark Space",
            tagDatos: "DATA",
            tituloTelemetria: "Telemetry & Units",
            optAltitudTitulo: "Altitude Unit",
            optAltitudDesc: "Measurement scale for orbital object distances",
            altitudKm: "Kilometers (km)",
            altitudMi: "Miles (mi)",
            altitudNm: "Nautical Miles (NM)",
            optVelocidadTitulo: "Velocity Unit",
            optVelocidadDesc: "Velocity metric in calculated orbital paths",
            velKms: "Kilometers per second (km/s)",
            velKmh: "Kilometers per hour (km/h)",
            velMph: "Miles per hour (mph)",
            optTasaTitulo: "Update Frequency",
            optTasaDesc: "Refresh cadence for orbital position calculations",
            tasa60: "Real-time (60 FPS)",
            tasa30: "Balanced (30 FPS)",
            tasa15: "Power Saver (15 FPS)",
            tagSistema: "SYSTEM",
            tituloSistema: "Filters & Audio",
            optResaltarTitulo: "Highlight Space Debris",
            optResaltarDesc: "Visually emphasize inactive or abandoned satellites",
            optSonidoTitulo: "Interactive Sound Effects",
            optSonidoDesc: "Play audio cues when selecting orbital satellites",
            optAutoAbrirTitulo: "Auto-expand Telemetry Panel",
            optAutoAbrirDesc: "Automatically slide open sidebar when clicking a satellite",
            btnRestablecer: "Reset Defaults",
            btnGuardar: "Save Settings",
            toastGuardado: "✓ Settings successfully saved",
            toastRestablecido: "↺ Settings reset to default values",
            toastIdiomaCambiado: "🌐 Language switched to English"
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
        } catch (e) {
            // Ignorar errores de acceso
        }
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
        } catch (e) {
            // Ignorar
        }

        const t = DICCIONARIO[lang];

        // 1. Traducir elementos con atributo data-i18n
        const elementos = document.querySelectorAll('[data-i18n]');
        elementos.forEach(el => {
            const clave = el.getAttribute('data-i18n');
            if (t[clave]) {
                el.textContent = t[clave];
            }
        });

        // 2. Traducir placeholders si los hubiera
        const elementosPlaceholder = document.querySelectorAll('[data-i18n-placeholder]');
        elementosPlaceholder.forEach(el => {
            const clave = el.getAttribute('data-i18n-placeholder');
            if (t[clave]) {
                el.setAttribute('placeholder', t[clave]);
            }
        });

        // 3. Actualizar botón del nav de traducción
        const btnNav = document.getElementById('btn-idioma-nav');
        if (btnNav) {
            const spanTexto = btnNav.querySelector('#texto-idioma-nav');
            const spanBadge = btnNav.querySelector('#badge-idioma-nav');
            if (spanTexto) {
                spanTexto.textContent = (lang === 'es') ? 'EN' : 'ES';
            }
            if (spanBadge) {
                spanBadge.textContent = lang.toUpperCase();
            }
            btnNav.setAttribute('aria-label', (lang === 'es') ? 'Cambiar a Inglés' : 'Switch to Spanish');
        }

        // 4. Actualizar botón principal en página de configuración si existe
        const btnTraductorTexto = document.getElementById('btn-traductor-texto');
        const badgeLang = document.getElementById('badge-idioma-actual');
        if (btnTraductorTexto) {
            btnTraductorTexto.textContent = (lang === 'es') ? 'Switch to English' : 'Cambiar a Español';
        }
        if (badgeLang) {
            badgeLang.textContent = lang.toUpperCase();
        }

        // 5. Actualizar botones directos de selección de idioma en configuración
        const btnEs = document.getElementById('btn-lang-es');
        const btnEn = document.getElementById('btn-lang-en');
        if (btnEs && btnEn) {
            btnEs.classList.toggle('activo', lang === 'es');
            btnEn.classList.toggle('activo', lang === 'en');
        }

        // 6. Notificar a otros scripts (por ejemplo app.js para satélites)
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

        // Enlazar botón global del nav si existe
        const btnNav = document.getElementById('btn-idioma-nav');
        if (btnNav) {
            btnNav.addEventListener('click', (e) => {
                e.preventDefault();
                alternarIdioma();
            });
        }

        // Enlazar botón principal de configuración si existe
        const btnConfig = document.getElementById('btn-traductor-principal');
        if (btnConfig) {
            btnConfig.addEventListener('click', (e) => {
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
