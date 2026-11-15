/**
 * Metallic Earth - Script de Configuración Simple
 * Gestiona el guardado de preferencias y la interacción del botón de traducción.
 */

(function () {
    'use strict';

    const CLAVE_STORAGE_CONFIG = 'metallic_earth_configuracion';
    const CLAVE_STORAGE_LANG = 'metallic_earth_idioma';

    const valoresPorDefecto = {
        idioma: 'es',
        rotacionAuto: true,
        etiquetasOrbitas: true,
        fondoEspacio: 'video'
    };

    let estadoActual = Object.assign({}, valoresPorDefecto);
    let timeoutToast = null;

    document.addEventListener('DOMContentLoaded', () => {
        cargarConfiguracion();
        enlazarEventos();
    });

    /**
     * Carga la configuración guardada de localStorage
     */
    function cargarConfiguracion() {
        try {
            const guardado = localStorage.getItem(CLAVE_STORAGE_CONFIG);
            if (guardado) {
                const parseado = JSON.parse(guardado);
                estadoActual = Object.assign({}, valoresPorDefecto, parseado);
            }
            const idiomaGuardado = localStorage.getItem(CLAVE_STORAGE_LANG);
            if (idiomaGuardado === 'en' || idiomaGuardado === 'es') {
                estadoActual.idioma = idiomaGuardado;
            }
        } catch (e) {
            estadoActual = Object.assign({}, valoresPorDefecto);
        }

        aplicarConfiguracionEnUI();
    }

    /**
     * Aplica el estado actual en los controles del formulario
     */
    function aplicarConfiguracionEnUI() {
        const chkRotacion = document.getElementById('cfg-rotacion');
        if (chkRotacion) chkRotacion.checked = estadoActual.rotacionAuto;

        const chkEtiquetas = document.getElementById('cfg-etiquetas');
        if (chkEtiquetas) chkEtiquetas.checked = estadoActual.etiquetasOrbitas;

        const selFondo = document.getElementById('cfg-fondo');
        if (selFondo) selFondo.value = estadoActual.fondoEspacio;

        actualizarBotonesIdiomaActivo(estadoActual.idioma);
    }

    /**
     * Actualiza la clase activa de los botones de idioma
     */
    function actualizarBotonesIdiomaActivo(idioma) {
        const btnEs = document.getElementById('btn-lang-es');
        const btnEn = document.getElementById('btn-lang-en');
        if (btnEs && btnEn) {
            btnEs.classList.toggle('activo', idioma === 'es');
            btnEn.classList.toggle('activo', idioma === 'en');
        }

        const btnTraductorTexto = document.getElementById('btn-traductor-texto');
        if (btnTraductorTexto) {
            btnTraductorTexto.textContent = (idioma === 'es') ? 'Cambiar a Inglés' : 'Switch to Spanish';
        }
    }

    /**
     * Alterna entre Español e Inglés mediante el traductor global
     */
    function alternarIdioma() {
        if (window.MetallicTraductor && typeof window.MetallicTraductor.alternarIdioma === 'function') {
            window.MetallicTraductor.alternarIdioma();
            const nuevo = window.MetallicTraductor.obtenerIdioma();
            estadoActual.idioma = nuevo;
            actualizarBotonesIdiomaActivo(nuevo);
            const msg = (nuevo === 'es') ? 'Idioma cambiado a Español.' : 'Language switched to English.';
            mostrarToast(msg);
        }
    }

    /**
     * Cambia a un idioma específico
     */
    function cambiarIdiomaEspecifico(nuevoIdioma) {
        if (window.MetallicTraductor && typeof window.MetallicTraductor.cambiarIdioma === 'function') {
            window.MetallicTraductor.cambiarIdioma(nuevoIdioma, true);
            estadoActual.idioma = nuevoIdioma;
            actualizarBotonesIdiomaActivo(nuevoIdioma);
            const msg = (nuevoIdioma === 'es') ? 'Idioma cambiado a Español.' : 'Language switched to English.';
            mostrarToast(msg);
        }
    }

    /**
     * Guarda la configuración actual en localStorage
     */
    function guardarConfiguracion() {
        const chkRotacion = document.getElementById('cfg-rotacion');
        if (chkRotacion) estadoActual.rotacionAuto = chkRotacion.checked;

        const chkEtiquetas = document.getElementById('cfg-etiquetas');
        if (chkEtiquetas) estadoActual.etiquetasOrbitas = chkEtiquetas.checked;

        const selFondo = document.getElementById('cfg-fondo');
        if (selFondo) estadoActual.fondoEspacio = selFondo.value;

        try {
            localStorage.setItem(CLAVE_STORAGE_CONFIG, JSON.stringify(estadoActual));
            localStorage.setItem(CLAVE_STORAGE_LANG, estadoActual.idioma);
        } catch (e) {}

        const msg = (estadoActual.idioma === 'en') ? 'Settings successfully saved.' : 'Configuración guardada con éxito.';
        mostrarToast(msg);
    }

    /**
     * Restablece los valores predeterminados
     */
    function restablecerValores() {
        const langActual = estadoActual.idioma;
        estadoActual = Object.assign({}, valoresPorDefecto, { idioma: langActual });
        aplicarConfiguracionEnUI();

        try {
            localStorage.setItem(CLAVE_STORAGE_CONFIG, JSON.stringify(estadoActual));
        } catch (e) {}

        const msg = (langActual === 'en') ? 'Settings reset to default values.' : 'Configuración restablecida a valores por defecto.';
        mostrarToast(msg);
    }

    /**
     * Muestra notificación toast sin emojis
     */
    function mostrarToast(mensaje) {
        const toast = document.getElementById('toast-notificacion');
        const toastTexto = document.getElementById('toast-mensaje');
        if (!toast || !toastTexto) return;

        toastTexto.textContent = mensaje;
        toast.classList.add('visible');

        if (timeoutToast) clearTimeout(timeoutToast);
        timeoutToast = setTimeout(() => {
            toast.classList.remove('visible');
        }, 2800);
    }

    /**
     * Enlaza eventos de los botones y switches
     */
    function enlazarEventos() {
        const btnTraductor = document.getElementById('btn-traductor-principal');
        if (btnTraductor) {
            btnTraductor.addEventListener('click', alternarIdioma);
        }

        const btnEs = document.getElementById('btn-lang-es');
        if (btnEs) {
            btnEs.addEventListener('click', () => cambiarIdiomaEspecifico('es'));
        }

        const btnEn = document.getElementById('btn-lang-en');
        if (btnEn) {
            btnEn.addEventListener('click', () => cambiarIdiomaEspecifico('en'));
        }

        const btnGuardar = document.getElementById('btn-guardar-config');
        if (btnGuardar) {
            btnGuardar.addEventListener('click', guardarConfiguracion);
        }

        const btnRestablecer = document.getElementById('btn-restablecer-config');
        if (btnRestablecer) {
            btnRestablecer.addEventListener('click', restablecerValores);
        }

        // Sincronizar si cambia el idioma desde el nav
        window.addEventListener('metallic_idioma_cambiado', (e) => {
            if (e.detail && e.detail.idioma) {
                estadoActual.idioma = e.detail.idioma;
                actualizarBotonesIdiomaActivo(e.detail.idioma);
            }
        });
    }

    window.MetallicConfig = {
        obtenerConfiguracion: () => Object.assign({}, estadoActual)
    };
})();
