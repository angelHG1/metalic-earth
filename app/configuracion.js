/**
 * Metallic Earth - Script de Configuración e Internacionalización
 * Gestiona la traducción dinámica entre Español e Inglés y el almacenamiento de preferencias.
 */

(function () {
    'use strict';

    // Diccionario bilingüe (Español / Inglés)
    const traducciones = {
        es: {
            // Navegación
            navInicio: "Inicio",
            navAcerca: "Acerca de",
            navAyuda: "Ayuda",
            navConfig: "Configuración",

            // Encabezado
            configTitulo: "Configuración del Sistema",
            configSubtitulo: "Personaliza la experiencia visual, parámetros orbitales y preferencias del sistema Metallic Earth.",
            btnTraducirTexto: "Cambiar a English",
            badgeLang: "ES",

            // Tarjeta 1: Idioma
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

            // Tarjeta 2: Visualización 3D
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

            // Tarjeta 3: Telemetría y Unidades
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

            // Tarjeta 4: Filtros y Sistema
            tagSistema: "SISTEMA",
            tituloSistema: "Filtros y Audio",
            optResaltarTitulo: "Destacar basura espacial",
            optResaltarDesc: "Marcar visualmente satélites inactivos o abandonados",
            optSonidoTitulo: "Efectos de sonido interactivos",
            optSonidoDesc: "Emitir retroalimentación sonora al interactuar con satélites",
            optAutoAbrirTitulo: "Despliegue automático de telemetría",
            optAutoAbrirDesc: "Abrir el panel lateral inmediatamente al pulsar un satélite",

            // Botones de acción
            btnRestablecer: "Restablecer valores",
            btnGuardar: "Guardar configuración",

            // Mensajes Toast
            toastGuardado: "✓ Configuración guardada con éxito",
            toastRestablecido: "↺ Configuración restablecida a valores por defecto",
            toastIdiomaCambiado: "🌐 Idioma cambiado a Español"
        },
        en: {
            // Navigation
            navInicio: "Home",
            navAcerca: "About",
            navAyuda: "Help",
            navConfig: "Settings",

            // Header
            configTitulo: "System Settings",
            configSubtitulo: "Customize your visual experience, orbital parameters, and Metallic Earth system preferences.",
            btnTraducirTexto: "Switch to Español",
            badgeLang: "EN",

            // Card 1: Language
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

            // Card 2: 3D Visualization
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

            // Card 3: Telemetry & Units
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

            // Card 4: Filters & System
            tagSistema: "SYSTEM",
            tituloSistema: "Filters & Audio",
            optResaltarTitulo: "Highlight Space Debris",
            optResaltarDesc: "Visually emphasize inactive or abandoned satellites",
            optSonidoTitulo: "Interactive Sound Effects",
            optSonidoDesc: "Play audio cues when selecting orbital satellites",
            optAutoAbrirTitulo: "Auto-expand Telemetry Panel",
            optAutoAbrirDesc: "Automatically slide open sidebar when clicking a satellite",

            // Action Buttons
            btnRestablecer: "Reset Defaults",
            btnGuardar: "Save Settings",

            // Toast Messages
            toastGuardado: "✓ Settings successfully saved",
            toastRestablecido: "↺ Settings reset to default values",
            toastIdiomaCambiado: "🌐 Language switched to English"
        }
    };

    const CLAVE_STORAGE_CONFIG = 'metallic_earth_configuracion';
    const CLAVE_STORAGE_LANG = 'metallic_earth_idioma';

    const valoresPorDefecto = {
        idioma: 'es',
        formatoHorario: 'utc',
        rotacionAuto: true,
        calidadSombras: 'alta',
        etiquetasOrbitas: true,
        fondoEspacio: 'video',
        unidadAltitud: 'km',
        unidadVelocidad: 'kms',
        tasaRefresco: '60',
        resaltarBasura: true,
        efectosSonido: false,
        autoAbrirPanel: true
    };

    let estadoActual = Object.assign({}, valoresPorDefecto);
    let timeoutToast = null;

    // Inicialización al cargar el DOM
    document.addEventListener('DOMContentLoaded', () => {
        cargarConfiguracion();
        enlazarEventos();
    });

    /**
     * Carga la configuración guardada de localStorage o inicializa los valores por defecto
     */
    function cargarConfiguracion() {
        try {
            const guardado = localStorage.getItem(CLAVE_STORAGE_CONFIG);
            if (guardado) {
                const parseado = JSON.parse(guardado);
                estadoActual = Object.assign({}, valoresPorDefecto, parseado);
            }
            // Comprobar si hay preferencia de idioma explícita
            const idiomaGuardado = localStorage.getItem(CLAVE_STORAGE_LANG);
            if (idiomaGuardado === 'en' || idiomaGuardado === 'es') {
                estadoActual.idioma = idiomaGuardado;
            }
        } catch (e) {
            console.warn('Error al leer localStorage:', e);
            estadoActual = Object.assign({}, valoresPorDefecto);
        }

        aplicarConfiguracionEnUI();
        aplicarIdioma(estadoActual.idioma, false);
    }

    /**
     * Aplica el estado actual en los controles de formulario del HTML
     */
    function aplicarConfiguracionEnUI() {
        // Switches
        const chkRotacion = document.getElementById('cfg-rotacion');
        if (chkRotacion) chkRotacion.checked = estadoActual.rotacionAuto;

        const chkEtiquetas = document.getElementById('cfg-etiquetas');
        if (chkEtiquetas) chkEtiquetas.checked = estadoActual.etiquetasOrbitas;

        const chkBasura = document.getElementById('cfg-basura');
        if (chkBasura) chkBasura.checked = estadoActual.resaltarBasura;

        const chkSonido = document.getElementById('cfg-sonido');
        if (chkSonido) chkSonido.checked = estadoActual.efectosSonido;

        const chkAutoAbrir = document.getElementById('cfg-autoabrir');
        if (chkAutoAbrir) chkAutoAbrir.checked = estadoActual.autoAbrirPanel;

        // Selects
        const selHorario = document.getElementById('cfg-horario');
        if (selHorario) selHorario.value = estadoActual.formatoHorario;

        const selSombras = document.getElementById('cfg-sombras');
        if (selSombras) selSombras.value = estadoActual.calidadSombras;

        const selFondo = document.getElementById('cfg-fondo');
        if (selFondo) selFondo.value = estadoActual.fondoEspacio;

        const selAltitud = document.getElementById('cfg-altitud');
        if (selAltitud) selAltitud.value = estadoActual.unidadAltitud;

        const selVelocidad = document.getElementById('cfg-velocidad');
        if (selVelocidad) selVelocidad.value = estadoActual.unidadVelocidad;

        const selTasa = document.getElementById('cfg-tasa');
        if (selTasa) selTasa.value = estadoActual.tasaRefresco;

        // Botones de selección de idioma
        actualizarBotonesIdiomaActivo(estadoActual.idioma);
    }

    /**
     * Actualiza la clase activa de los botones de selector de idioma
     */
    function actualizarBotonesIdiomaActivo(idioma) {
        const btnEs = document.getElementById('btn-lang-es');
        const btnEn = document.getElementById('btn-lang-en');
        if (btnEs && btnEn) {
            btnEs.classList.toggle('activo', idioma === 'es');
            btnEn.classList.toggle('activo', idioma === 'en');
        }
    }

    /**
     * Aplica los textos traducidos a todos los elementos con data-i18n
     */
    function aplicarIdioma(lang, mostrarAviso = true) {
        if (!traducciones[lang]) lang = 'es';
        estadoActual.idioma = lang;

        if (window.MetallicTraductor && typeof window.MetallicTraductor.cambiarIdioma === 'function') {
            window.MetallicTraductor.cambiarIdioma(lang, true);
        } else {
            document.documentElement.lang = lang;
            const t = traducciones[lang];

            const elementos = document.querySelectorAll('[data-i18n]');
            elementos.forEach(el => {
                const clave = el.getAttribute('data-i18n');
                if (t[clave]) {
                    el.textContent = t[clave];
                }
            });

            try {
                localStorage.setItem(CLAVE_STORAGE_LANG, lang);
            } catch (e) {}
        }

        // Actualizar el botón rápido de traducción
        const btnTraductorTexto = document.getElementById('btn-traductor-texto');
        const badgeLang = document.getElementById('badge-idioma-actual');
        if (btnTraductorTexto) {
            btnTraductorTexto.textContent = (lang === 'es') ? 'Switch to English' : 'Cambiar a Español';
        }
        if (badgeLang) {
            badgeLang.textContent = lang.toUpperCase();
        }

        actualizarBotonesIdiomaActivo(lang);

        if (mostrarAviso) {
            const t = traducciones[lang];
            mostrarToast(t.toastIdiomaCambiado);
        }
    }

    /**
     * Alterna entre Español e Inglés
     */
    function alternarIdioma() {
        const nuevoIdioma = (estadoActual.idioma === 'es') ? 'en' : 'es';
        aplicarIdioma(nuevoIdioma, true);
    }

    /**
     * Guarda la configuración actual en localStorage
     */
    function guardarConfiguracion() {
        // Leer valores actuales de la UI
        const chkRotacion = document.getElementById('cfg-rotacion');
        if (chkRotacion) estadoActual.rotacionAuto = chkRotacion.checked;

        const chkEtiquetas = document.getElementById('cfg-etiquetas');
        if (chkEtiquetas) estadoActual.etiquetasOrbitas = chkEtiquetas.checked;

        const chkBasura = document.getElementById('cfg-basura');
        if (chkBasura) estadoActual.resaltarBasura = chkBasura.checked;

        const chkSonido = document.getElementById('cfg-sonido');
        if (chkSonido) estadoActual.efectosSonido = chkSonido.checked;

        const chkAutoAbrir = document.getElementById('cfg-autoabrir');
        if (chkAutoAbrir) estadoActual.autoAbrirPanel = chkAutoAbrir.checked;

        const selHorario = document.getElementById('cfg-horario');
        if (selHorario) estadoActual.formatoHorario = selHorario.value;

        const selSombras = document.getElementById('cfg-sombras');
        if (selSombras) estadoActual.calidadSombras = selSombras.value;

        const selFondo = document.getElementById('cfg-fondo');
        if (selFondo) estadoActual.fondoEspacio = selFondo.value;

        const selAltitud = document.getElementById('cfg-altitud');
        if (selAltitud) estadoActual.unidadAltitud = selAltitud.value;

        const selVelocidad = document.getElementById('cfg-velocidad');
        if (selVelocidad) estadoActual.unidadVelocidad = selVelocidad.value;

        const selTasa = document.getElementById('cfg-tasa');
        if (selTasa) estadoActual.tasaRefresco = selTasa.value;

        try {
            localStorage.setItem(CLAVE_STORAGE_CONFIG, JSON.stringify(estadoActual));
            localStorage.setItem(CLAVE_STORAGE_LANG, estadoActual.idioma);
        } catch (e) {
            console.error('Error al guardar configuración:', e);
        }

        const t = traducciones[estadoActual.idioma] || traducciones.es;
        mostrarToast(t.toastGuardado);
    }

    /**
     * Restablece la configuración a los valores iniciales por defecto
     */
    function restablecerValores() {
        const langActual = estadoActual.idioma;
        estadoActual = Object.assign({}, valoresPorDefecto, { idioma: langActual });
        aplicarConfiguracionEnUI();

        try {
            localStorage.setItem(CLAVE_STORAGE_CONFIG, JSON.stringify(estadoActual));
        } catch (e) {
            // Ignorar
        }

        const t = traducciones[langActual] || traducciones.es;
        mostrarToast(t.toastRestablecido);
    }

    /**
     * Muestra una notificación emergente tipo toast
     */
    function mostrarToast(mensaje) {
        const toast = document.getElementById('toast-notificacion');
        const toastTexto = document.getElementById('toast-mensaje');

        if (!toast || !toastTexto) return;

        toastTexto.textContent = mensaje;
        toast.classList.add('visible');

        if (timeoutToast) {
            clearTimeout(timeoutToast);
        }

        timeoutToast = setTimeout(() => {
            toast.classList.remove('visible');
        }, 3200);
    }

    /**
     * Enlaza todos los listeners de eventos en la página
     */
    function enlazarEventos() {
        // Botón principal de traducción (toggle)
        const btnTraductor = document.getElementById('btn-traductor-principal');
        if (btnTraductor) {
            btnTraductor.addEventListener('click', alternarIdioma);
        }

        // Botones específicos ES / EN dentro de la tarjeta
        const btnEs = document.getElementById('btn-lang-es');
        if (btnEs) {
            btnEs.addEventListener('click', () => {
                if (estadoActual.idioma !== 'es') {
                    aplicarIdioma('es', true);
                }
            });
        }

        const btnEn = document.getElementById('btn-lang-en');
        if (btnEn) {
            btnEn.addEventListener('click', () => {
                if (estadoActual.idioma !== 'en') {
                    aplicarIdioma('en', true);
                }
            });
        }

        // Botón guardar
        const btnGuardar = document.getElementById('btn-guardar-config');
        if (btnGuardar) {
            btnGuardar.addEventListener('click', guardarConfiguracion);
        }

        // Botón restablecer
        const btnRestablecer = document.getElementById('btn-restablecer-config');
        if (btnRestablecer) {
            btnRestablecer.addEventListener('click', restablecerValores);
        }

        // Sincronización con eventos externos de cambio de idioma
        window.addEventListener('metallic_idioma_cambiado', (e) => {
            if (e.detail && e.detail.idioma) {
                estadoActual.idioma = e.detail.idioma;
                actualizarBotonesIdiomaActivo(e.detail.idioma);
                const btnTraductorTexto = document.getElementById('btn-traductor-texto');
                const badgeLang = document.getElementById('badge-idioma-actual');
                if (btnTraductorTexto) {
                    btnTraductorTexto.textContent = (e.detail.idioma === 'es') ? 'Switch to English' : 'Cambiar a Español';
                }
                if (badgeLang) {
                    badgeLang.textContent = e.detail.idioma.toUpperCase();
                }
            }
        });
    }

    // Exponer API mínima global por si otros módulos desean consultar el idioma
    window.MetallicConfig = {
        obtenerConfiguracion: () => Object.assign({}, estadoActual),
        obtenerIdioma: () => estadoActual.idioma,
        cambiarIdioma: aplicarIdioma
    };
})();
