/**
 * Metallic Earth - Hackathon NASA Space Apps Challenge
 * Gestión de satélites orbitales, animación 3D e interactividad lateral
 */

document.addEventListener('DOMContentLoaded', () => {
    const visorTierra = document.getElementById('visor-tierra');
    const listaObjetosNav = document.getElementById('lista-objetos');
    const panelLateral = document.getElementById('panel-lateral');
    const btnCerrarPanel = document.getElementById('btn-cerrar-panel');

    // Elementos del panel lateral
    const panelTitulo = document.getElementById('panel-titulo');
    const panelEstado = document.getElementById('panel-estado');
    const panelAltitud = document.getElementById('panel-altitud');
    const panelVelocidad = document.getElementById('panel-velocidad');
    const panelInclinacion = document.getElementById('panel-inclinacion');
    const panelPeriodo = document.getElementById('panel-periodo');
    const panelDescripcion = document.getElementById('panel-descripcion');
    const panelAgencia = document.getElementById('panel-agencia');
    const panelLanzamiento = document.getElementById('panel-lanzamiento');
    const panelProposito = document.getElementById('panel-proposito');

    // Configuración de los 10 satélites con parámetros orbitales (velocidad pausada y majestuosa) y telemetría
    const SATELITES = [
        {
            id: 1,
            nombre: 'Satélite 1',
            radioMult: 1.20,
            inclinacion: 0.30,     // radianes (~17°)
            ascension: 0.0,        // orientación del plano orbital
            velocidad: 0.055,      // velocidad pausada y suave
            fase: 0.0,             // punto inicial distribuido
            altitud: '420 km',
            velocidadKm: '7.66 km/s',
            inclinacionGrad: '51.6°',
            periodo: '92.9 min',
            estado: 'En órbita activa',
            agencia: 'NASA / Por definir',
            lanzamiento: 'Por definir',
            proposito: 'Observación e investigación científica',
            descripcion: 'Espacio asignado para la descripción técnica e información científica originada de la NASA correspondiente a este satélite.'
        },
        {
            id: 2,
            nombre: 'Satélite 2',
            radioMult: 1.26,
            inclinacion: -0.75,    // ~-43°
            ascension: 0.65,
            velocidad: 0.048,
            fase: 0.63,
            altitud: '550 km',
            velocidadKm: '7.58 km/s',
            inclinacionGrad: '97.4°',
            periodo: '95.6 min',
            estado: 'En órbita activa',
            agencia: 'NASA / Por definir',
            lanzamiento: 'Por definir',
            proposito: 'Monitoreo ambiental y climático',
            descripcion: 'Espacio asignado para la descripción técnica e información científica originada de la NASA correspondiente a este satélite.'
        },
        {
            id: 3,
            nombre: 'Satélite 3',
            radioMult: 1.34,
            inclinacion: 1.05,     // ~60°
            ascension: 1.30,
            velocidad: 0.042,
            fase: 1.26,
            altitud: '705 km',
            velocidadKm: '7.50 km/s',
            inclinacionGrad: '98.2°',
            periodo: '98.8 min',
            estado: 'En órbita activa',
            agencia: 'NASA / Por definir',
            lanzamiento: 'Por definir',
            proposito: 'Geodesia y mapeo topográfico',
            descripcion: 'Espacio asignado para la descripción técnica e información científica originada de la NASA correspondiente a este satélite.'
        },
        {
            id: 4,
            nombre: 'Satélite 4',
            radioMult: 1.22,
            inclinacion: -0.40,    // ~-23°
            ascension: 1.95,
            velocidad: 0.060,
            fase: 1.88,
            altitud: '500 km',
            velocidadKm: '7.61 km/s',
            inclinacionGrad: '35.0°',
            periodo: '94.6 min',
            estado: 'En órbita activa',
            agencia: 'NASA / Por definir',
            lanzamiento: 'Por definir',
            proposito: 'Telecomunicaciones y retransmisión',
            descripcion: 'Espacio asignado para la descripción técnica e información científica originada de la NASA correspondiente a este satélite.'
        },
        {
            id: 5,
            nombre: 'Satélite 5',
            radioMult: 1.42,
            inclinacion: 1.25,     // ~72° (casi polar)
            ascension: 2.60,
            velocidad: 0.038,
            fase: 2.51,
            altitud: '820 km',
            velocidadKm: '7.44 km/s',
            inclinacionGrad: '82.5°',
            periodo: '101.2 min',
            estado: 'En órbita activa',
            agencia: 'NASA / Por definir',
            lanzamiento: 'Por definir',
            proposito: 'Estudio de radiación solar y clima espacial',
            descripcion: 'Espacio asignado para la descripción técnica e información científica originada de la NASA correspondiente a este satélite.'
        },
        {
            id: 6,
            nombre: 'Satélite 6',
            radioMult: 1.28,
            inclinacion: -0.90,    // ~-52°
            ascension: 3.25,
            velocidad: 0.050,
            fase: 3.14,
            altitud: '630 km',
            velocidadKm: '7.54 km/s',
            inclinacionGrad: '66.0°',
            periodo: '97.3 min',
            estado: 'En órbita activa',
            agencia: 'NASA / Por definir',
            lanzamiento: 'Por definir',
            proposito: 'Oceanografía y recursos hídricos',
            descripcion: 'Espacio asignado para la descripción técnica e información científica originada de la NASA correspondiente a este satélite.'
        },
        {
            id: 7,
            nombre: 'Satélite 7',
            radioMult: 1.46,
            inclinacion: 0.55,     // ~31°
            ascension: 3.90,
            velocidad: 0.040,
            fase: 3.77,
            altitud: '900 km',
            velocidadKm: '7.40 km/s',
            inclinacionGrad: '53.0°',
            periodo: '103.0 min',
            estado: 'En órbita activa',
            agencia: 'NASA / Por definir',
            lanzamiento: 'Por definir',
            proposito: 'Astrofísica y telescopio orbital',
            descripcion: 'Espacio asignado para la descripción técnica e información científica originada de la NASA correspondiente a este satélite.'
        },
        {
            id: 8,
            nombre: 'Satélite 8',
            radioMult: 1.36,
            inclinacion: -1.20,    // ~-69°
            ascension: 4.55,
            velocidad: 0.045,
            fase: 4.40,
            altitud: '750 km',
            velocidadKm: '7.48 km/s',
            inclinacionGrad: '74.0°',
            periodo: '99.8 min',
            estado: 'En órbita activa',
            agencia: 'NASA / Por definir',
            lanzamiento: 'Por definir',
            proposito: 'Composición atmosférica y gases de efecto invernadero',
            descripcion: 'Espacio asignado para la descripción técnica e información científica originada de la NASA correspondiente a este satélite.'
        },
        {
            id: 9,
            nombre: 'Satélite 9',
            radioMult: 1.50,
            inclinacion: 0.20,     // ~11° (casi ecuatorial)
            ascension: 5.20,
            velocidad: 0.035,
            fase: 5.03,
            altitud: '1050 km',
            velocidadKm: '7.32 km/s',
            inclinacionGrad: '28.5°',
            periodo: '106.2 min',
            estado: 'En órbita activa',
            agencia: 'NASA / Por definir',
            lanzamiento: 'Por definir',
            proposito: 'Sistemas de navegación y sincronización',
            descripcion: 'Espacio asignado para la descripción técnica e información científica originada de la NASA correspondiente a este satélite.'
        },
        {
            id: 10,
            nombre: 'Satélite 10',
            radioMult: 1.22,
            inclinacion: 0.85,     // ~49°
            ascension: 5.85,
            velocidad: 0.052,
            fase: 5.65,
            altitud: '480 km',
            velocidadKm: '7.62 km/s',
            inclinacionGrad: '63.4°',
            periodo: '94.2 min',
            estado: 'En órbita activa',
            agencia: 'NASA / Por definir',
            lanzamiento: 'Por definir',
            proposito: 'Experimentos científicos en microgravedad',
            descripcion: 'Espacio asignado para la descripción técnica e información científica originada de la NASA correspondiente a este satélite.'
        }
    ];

    let sateliteSeleccionadoId = null;
    let radioTierra = 72; // Radio estándar por defecto según el bounding box del glTF
    const satelitesElements = [];
    const listaItems = [];

    // 1. Poblar la lista lateral izquierda
    if (listaObjetosNav) {
        listaObjetosNav.innerHTML = '';
        SATELITES.forEach(sat => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = '#';
            a.dataset.id = sat.id;
            a.textContent = sat.nombre;

            a.addEventListener('click', (e) => {
                e.preventDefault();
                seleccionarSatelite(sat.id);
            });

            li.appendChild(a);
            listaObjetosNav.appendChild(li);
            listaItems.push({ id: sat.id, link: a });
        });
    }

    // 2. Conectar los botones hotspots de los satélites en model-viewer
    if (visorTierra) {
        SATELITES.forEach(sat => {
            const slotName = `hotspot-sat-${sat.id}`;
            let btn = visorTierra.querySelector(`[slot="${slotName}"]`);

            // Si por alguna razón no estuviera en el HTML, crearlo
            if (!btn) {
                btn = document.createElement('button');
                btn.className = 'satelite-hotspot';
                btn.slot = slotName;

                const etiqueta = document.createElement('span');
                etiqueta.className = 'satelite-etiqueta';
                etiqueta.textContent = sat.nombre;

                const punto = document.createElement('span');
                punto.className = 'satelite-punto';

                btn.appendChild(etiqueta);
                btn.appendChild(punto);
                visorTierra.appendChild(btn);
            }

            btn.dataset.id = sat.id;

            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                seleccionarSatelite(sat.id);
            });

            satelitesElements.push({ sat, slotName, element: btn });
        });
    }

    // 3. Calibración dinámica del radio de la Tierra
    function calibrarRadioTierra() {
        if (visorTierra && typeof visorTierra.getDimensions === 'function') {
            const dims = visorTierra.getDimensions();
            if (dims && dims.x > 0) {
                radioTierra = Math.max(dims.x, dims.y, dims.z) / 2;
            }
        }
    }

    if (visorTierra) {
        if (visorTierra.loaded) {
            calibrarRadioTierra();
        } else {
            visorTierra.addEventListener('load', calibrarRadioTierra, { once: true });
        }
    }

    // 4. Función para calcular las coordenadas 3D de un satélite en un instante t
    function calcularPosicionOrbital(sat, segundos) {
        const r = radioTierra * sat.radioMult;
        const theta = sat.fase + sat.velocidad * segundos;

        // Plano orbital base
        const x0 = r * Math.cos(theta);
        const z0 = r * Math.sin(theta);

        // Inclinación orbital
        const x1 = x0;
        const y1 = -z0 * Math.sin(sat.inclinacion);
        const z1 = z0 * Math.cos(sat.inclinacion);

        // Orientación del nodo ascendente en el espacio
        const x = x1 * Math.cos(sat.ascension) + z1 * Math.sin(sat.ascension);
        const y = y1;
        const z = -x1 * Math.sin(sat.ascension) + z1 * Math.cos(sat.ascension);

        return {
            x,
            y,
            z,
            posStr: `${x.toFixed(2)}m ${y.toFixed(2)}m ${z.toFixed(2)}m`
        };
    }

    // Obtener el vector unitario de la cámara hacia el centro de la Tierra
    function obtenerVectorCamara() {
        if (visorTierra && typeof visorTierra.getCameraOrbit === 'function') {
            try {
                const orbit = visorTierra.getCameraOrbit();
                if (orbit) {
                    const sinPhi = Math.sin(orbit.phi);
                    return {
                        x: sinPhi * Math.sin(orbit.theta),
                        y: Math.cos(orbit.phi),
                        z: sinPhi * Math.cos(orbit.theta)
                    };
                }
            } catch (err) {}
        }
        // Vector por defecto mirando desde +Z hacia el origen
        return { x: 0, y: 0, z: 1 };
    }

    // 5. Bucle continuo de animación orbital en tiempo real
    const tiempoInicio = performance.now();

    function animarOrbitas(tiempoActual) {
        const segundos = (tiempoActual - tiempoInicio) / 1000;
        const cam = obtenerVectorCamara();

        satelitesElements.forEach(({ sat, slotName, element }) => {
            const { x, y, z, posStr } = calcularPosicionOrbital(sat, segundos);

            // Método oficial de model-viewer para mover hotspots en tiempo real
            if (visorTierra && typeof visorTierra.updateHotspot === 'function') {
                visorTierra.updateHotspot({
                    name: slotName,
                    position: posStr
                });
            }

            // Atributo fallback para compatibilidad con CSS y selectores
            element.dataset.position = posStr;

            // Oclusión dinámica respecto a la cámara:
            // Proyección a lo largo del eje de visión de la cámara
            const dProfundidad = x * cam.x + y * cam.y + z * cam.z;

            // Si está en el hemisferio posterior (detrás del centro respecto a la cámara)
            if (dProfundidad < 0) {
                // Distancia perpendicular al eje de la cámara (radio aparente en pantalla)
                const dPerpendicularSq = Math.max(0, (x * x + y * y + z * z) - (dProfundidad * dProfundidad));
                const radioTierraSq = radioTierra * radioTierra;

                // Si queda dentro del contorno de la Tierra, se oculta o vuelve transparente
                if (dPerpendicularSq < radioTierraSq * 0.98) {
                    element.classList.add('detras-tierra');
                } else {
                    element.classList.remove('detras-tierra');
                }
            } else {
                // Hemisferio frontal: completamente visible y nítido
                element.classList.remove('detras-tierra');
            }
        });

        requestAnimationFrame(animarOrbitas);
    }

    // Iniciar loop de animación orbital
    requestAnimationFrame(animarOrbitas);

    // 6. Gestión del panel lateral emergente y selección
    function seleccionarSatelite(id) {
        sateliteSeleccionadoId = id;
        const sat = SATELITES.find(s => s.id === id);
        if (!sat) return;

        // Actualizar contenido del panel lateral
        panelTitulo.textContent = sat.nombre;
        panelEstado.textContent = sat.estado;
        panelAltitud.textContent = sat.altitud;
        panelVelocidad.textContent = sat.velocidadKm;
        panelInclinacion.textContent = sat.inclinacionGrad;
        panelPeriodo.textContent = sat.periodo;
        panelDescripcion.textContent = sat.descripcion;
        panelAgencia.textContent = sat.agencia;
        panelLanzamiento.textContent = sat.lanzamiento;
        panelProposito.textContent = sat.proposito;

        // Mostrar panel lateral
        panelLateral.classList.add('abierto');
        panelLateral.setAttribute('aria-hidden', 'false');

        // Actualizar clase 'seleccionado' en la lista de la izquierda
        listaItems.forEach(item => {
            if (item.id === id) {
                item.link.classList.add('seleccionado');
                item.link.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                item.link.classList.remove('seleccionado');
            }
        });

        // Actualizar clase 'seleccionado' en los hotspots 3D
        satelitesElements.forEach(({ sat: s, element }) => {
            if (s.id === id) {
                element.classList.add('seleccionado');
            } else {
                element.classList.remove('seleccionado');
            }
        });
    }

    function cerrarPanel() {
        sateliteSeleccionadoId = null;
        panelLateral.classList.remove('abierto');
        panelLateral.setAttribute('aria-hidden', 'true');

        listaItems.forEach(item => item.link.classList.remove('seleccionado'));
        satelitesElements.forEach(({ element }) => element.classList.remove('seleccionado'));
    }

    if (btnCerrarPanel) {
        btnCerrarPanel.addEventListener('click', cerrarPanel);
    }

    // Cerrar al pulsar Escape
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && panelLateral.classList.contains('abierto')) {
            cerrarPanel();
        }
    });

    // 7. Restricción de interacción: solo rotar o mover si el cursor se encuentra sobre la estructura 3D del planeta
    let arrastrandoPlaneta = false;

    function cursorSobreEstructura3D(clientX, clientY) {
        if (!visorTierra || typeof visorTierra.positionAndNormalFromPoint !== 'function') {
            return false;
        }
        const rect = visorTierra.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
            return false;
        }

        try {
            const hit = visorTierra.positionAndNormalFromPoint(x, y);
            return hit !== null;
        } catch (err) {
            return false;
        }
    }

    if (visorTierra) {
        function filtrarInicioInteraccion(e) {
            // Si el clic fue sobre un satélite (hotspot), permitir que ejecute su acción
            if (e.target && e.target.closest && e.target.closest('.satelite-hotspot')) {
                return;
            }

            const clientX = e.clientX ?? (e.touches && e.touches[0] ? e.touches[0].clientX : null);
            const clientY = e.clientY ?? (e.touches && e.touches[0] ? e.touches[0].clientY : null);

            if (clientX === null || clientY === null) return;

            const sobrePlaneta = cursorSobreEstructura3D(clientX, clientY);

            if (!sobrePlaneta) {
                e.stopPropagation();
                e.stopImmediatePropagation();
                e.preventDefault();
                arrastrandoPlaneta = false;
                visorTierra.style.cursor = 'default';
            } else {
                arrastrandoPlaneta = true;
                visorTierra.style.cursor = 'grabbing';
            }
        }

        visorTierra.addEventListener('pointerdown', filtrarInicioInteraccion, { capture: true });
        visorTierra.addEventListener('mousedown', filtrarInicioInteraccion, { capture: true });
        visorTierra.addEventListener('touchstart', filtrarInicioInteraccion, { capture: true });

        visorTierra.addEventListener('wheel', (e) => {
            if (!cursorSobreEstructura3D(e.clientX, e.clientY)) {
                e.stopPropagation();
                e.stopImmediatePropagation();
            }
        }, { capture: true });

        visorTierra.addEventListener('pointermove', (e) => {
            if (arrastrandoPlaneta) {
                visorTierra.style.cursor = 'grabbing';
                return;
            }
            if (e.target && e.target.closest && e.target.closest('.satelite-hotspot')) {
                return;
            }
            if (cursorSobreEstructura3D(e.clientX, e.clientY)) {
                visorTierra.style.cursor = 'grab';
            } else {
                visorTierra.style.cursor = 'default';
            }
        });

        const finalizarArrastre = () => {
            arrastrandoPlaneta = false;
        };

        window.addEventListener('pointerup', finalizarArrastre);
        window.addEventListener('mouseup', finalizarArrastre);
        window.addEventListener('touchend', finalizarArrastre);
    }
});
