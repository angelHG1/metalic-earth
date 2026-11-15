/**
 * Metallic Earth - Script de Configuración
 * Gestiona las preferencias de visualización e idioma según los elementos activos de la interfaz.
 */

(function () {
    'use strict';

    const CLAVE_STORAGE_CONFIG = 'metallic_earth_configuracion';
    const CLAVE_STORAGE_LANG = 'metallic_earth_idioma';

    const valoresPorDefecto = {
        idioma: 'es',
        rotacionAuto: true,
        fondoEspacio: 'video'
    };

    let estadoActual = Object.assign({}, valoresPorDefecto);
    let timeoutToast = null;

    function init() {
        cargarConfiguracion();
        enlazarEventos();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

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
        if (chkRotacion) {
            chkRotacion.checked = estadoActual.rotacionAuto !== false;
        }

        const selFondo = document.getElementById('cfg-fondo');
        if (selFondo && estadoActual.fondoEspacio) {
            selFondo.value = estadoActual.fondoEspacio;
        }

        actualizarBotonesIdiomaActivo(estadoActual.idioma);
    }

    /**
     * Actualiza la clase activa de los botones de idioma
     */
    function actualizarBotonesIdiomaActivo(idioma) {
        const btnEs = document.getElementById('btn-lang-es');
        const btnEn = document.getElementById('btn-lang-en');
        if (btnEs) {
            btnEs.classList.toggle('activo', idioma === 'es');
        }
        if (btnEn) {
            btnEn.classList.toggle('activo', idioma === 'en');
        }
    }

    /**
     * Cambia a un idioma específico
     */
    function cambiarIdiomaEspecifico(nuevoIdioma) {
        estadoActual.idioma = nuevoIdioma;

        if (window.MetallicTraductor && typeof window.MetallicTraductor.cambiarIdioma === 'function') {
            window.MetallicTraductor.cambiarIdioma(nuevoIdioma, true);
        } else {
            try {
                localStorage.setItem(CLAVE_STORAGE_LANG, nuevoIdioma);
            } catch (e) {}
        }

        actualizarBotonesIdiomaActivo(nuevoIdioma);
        const msg = (nuevoIdioma === 'en') ? 'Language switched to English.' : 'Idioma cambiado a Español.';
        mostrarToast(msg);
    }

    /**
     * Guarda la configuración actual en localStorage
     */
    function guardarConfiguracion() {
        const chkRotacion = document.getElementById('cfg-rotacion');
        if (chkRotacion) {
            estadoActual.rotacionAuto = chkRotacion.checked;
        }

        const selFondo = document.getElementById('cfg-fondo');
        if (selFondo) {
            estadoActual.fondoEspacio = selFondo.value;
        }

        try {
            localStorage.setItem(CLAVE_STORAGE_CONFIG, JSON.stringify(estadoActual));
            localStorage.setItem(CLAVE_STORAGE_LANG, estadoActual.idioma);
        } catch (e) {
            console.error('Error al guardar configuración:', e);
        }

        // Feedback visual en el botón de guardar
        const btnGuardar = document.getElementById('btn-guardar-config');
        if (btnGuardar) {
            const textoOriginal = btnGuardar.textContent;
            btnGuardar.textContent = (estadoActual.idioma === 'en') ? 'Saved!' : '¡Guardado!';
            btnGuardar.style.backgroundColor = '#00a86b';
            setTimeout(() => {
                btnGuardar.textContent = textoOriginal;
                btnGuardar.style.backgroundColor = '';
            }, 1400);
        }

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

        const btnRestablecer = document.getElementById('btn-restablecer-config');
        if (btnRestablecer) {
            const textoOriginal = btnRestablecer.textContent;
            btnRestablecer.textContent = (langActual === 'en') ? 'Reset!' : '¡Restablecido!';
            setTimeout(() => {
                btnRestablecer.textContent = textoOriginal;
            }, 1400);
        }

        const msg = (langActual === 'en') ? 'Settings reset to default values.' : 'Configuración restablecida a valores por defecto.';
        mostrarToast(msg);
    }

    /**
     * Muestra notificación toast
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
        const btnEs = document.getElementById('btn-lang-es');
        if (btnEs) {
            btnEs.addEventListener('click', (e) => {
                e.preventDefault();
                cambiarIdiomaEspecifico('es');
            });
        }

        const btnEn = document.getElementById('btn-lang-en');
        if (btnEn) {
            btnEn.addEventListener('click', (e) => {
                e.preventDefault();
                cambiarIdiomaEspecifico('en');
            });
        }

        const btnGuardar = document.getElementById('btn-guardar-config');
        if (btnGuardar) {
            btnGuardar.addEventListener('click', (e) => {
                e.preventDefault();
                guardarConfiguracion();
            });
        }

        const btnRestablecer = document.getElementById('btn-restablecer-config');
        if (btnRestablecer) {
            btnRestablecer.addEventListener('click', (e) => {
                e.preventDefault();
                restablecerValores();
            });
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
