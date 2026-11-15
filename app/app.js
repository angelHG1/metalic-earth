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
    const panelImagen = document.getElementById('panel-imagen')
    const panelEstado = document.getElementById('panel-estado');
    const panelAltitud = document.getElementById('panel-altitud');
    const panelVelocidad = document.getElementById('panel-velocidad');
    const panelInclinacion = document.getElementById('panel-inclinacion');
    const panelPeriodo = document.getElementById('panel-periodo');
    const panelDescripcion = document.getElementById('panel-descripcion');
    const panelAgencia = document.getElementById('panel-agencia');
    const panelLanzamiento = document.getElementById('panel-lanzamiento');
    const panelProposito = document.getElementById('panel-proposito');
    const panelLink = document.getElementById('panel-link');

    // Configuración de los 10 satélites con parámetros orbitales y telemetría bilingüe
    const SATELITES = [
        {
            id: 1,
            nombre: 'TIROS 1',
            nombreEn: 'TIROS 1',
            imagen: 'TIROS-1.jpg',  
            radioMult: 1.20,
            inclinacion: 0.30,     // radianes (~17°)
            ascension: 0.0,        // orientación del plano orbital
            velocidad: 0.055,      // velocidad pausada y suave
            fase: 0.0,             // punto inicial distribuido
            altitud: '420 km',
            velocidadKm: '7.66 km/s',
            inclinacionGrad: '51.6°',
            periodo: '92.9 min',
            estado: 'En órbita, no operacional',
            estadoEn: 'In orbit, non-operational',
            agencia: 'NASA- Oficina de aplicaciones de ciencias espaciales / Estados Unidos',
            agenciaEn: 'NASA- Office of Space Sciences applications / United States',
            lanzamiento: '13 de Mayo 1905',
            lanzamientoEn: 'May 13, 1905',
            proposito: 'Diseñado para probar la viabilidad de obtener y utilizar imágenes de televisión de cobertura nubosa desde satélites.',
            propositoEn: 'Designed to test the feasibility of obtaining and using television cloud cover images from satellites.',
            descripcion: 'Primer satélite meteorológico exitoso de la historia. Operó por televisión e infrarrojos para la observación de sistemas climáticos.',
            descripcionEn: 'First successful weather satellite in history. Operated television and infrared cameras for observing weather systems.',
            link: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1960-002B'
        },
        {
            id: 2,
            nombre: 'SYNCOM 1',
            nombreEn: 'SYNCOM 1',
            imagen: 'SYNCOM-1.png',
            radioMult: 1.26,
            inclinacion: -0.75,    // ~-43°
            ascension: 0.65,
            velocidad: 0.048,
            fase: 0.63,
            altitud: '550 km',
            velocidadKm: '7.58 km/s',
            inclinacionGrad: '97.4°',
            periodo: '95.6 min',
            estado: 'En órbita, no operacional',
            estadoEn: 'In orbit, non-operational',
            agencia: 'NASA- oficina de aplicaciones espaciales / Estados Unidos',
            agenciaEn: 'NASA- Office of Space applications / United States',
            lanzamiento: '14 de febrero 1963',
            lanzamientoEn: 'February 14, 1963',
            proposito: 'Satélite de comunicaciones en órbita geosíncrona.',
            propositoEn: 'Geosynchronous communications satellite.',
            descripcion: 'Su misión era servir como la primera prueba de un satélite de comunicaciones en órbita geosíncrona terrestre.',
            descripcionEn: 'Its mission was to serve as the pioneer test of an active communications satellite in geosynchronous orbit.',
            link: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1963-004A' 
        },
        {
            id: 3,
            nombreEn: 'ATS 1',
            imagen: 'ATS-1.jpg',
            nombre: 'ATS 1',
            radioMult: 1.34,
            inclinacion: 1.05,     // ~60°
            ascension: 1.30,
            velocidad: 0.042,
            fase: 1.26,
            altitud: '705 km',
            velocidadKm: '7.50 km/s',
            inclinacionGrad: '98.2°',
            periodo: '98.8 min',
            estado: 'En órbita, no operacional',
            estadoEn: 'In orbit, non-operational',
            agencia: 'NASA- Oficina de aplicaciones de ciencias espaciales / Estados Unidos',
            agenciaEn: 'NASA- Office of Space sciences applications / United States',
            lanzamiento: '7 de diciembre 1966',
            lanzamientoEn: 'December 7, 1966',
            proposito: 'Geodesia y mapeo topográfico',
            propositoEn: 'Geodesy and topographic mapping',
            descripcion: 'Mision ciencias de la tierra y fisica espcial. Su funcion fue servir para pruebas de nuevos conceptos en el diseño y propulsion de naves espaciales, y estabilizacion, recoger imagenes de alta calidad de la cobertura nubosa y retrasmitir datos meteorologicos mediante un satelite sincronico a la tierra,  realizar mediciones del entorno  aeroespacial y probar sistemas de comunicacion mejorados',
            descripcionEn: 'Earth science and space physics mission. Its function was to serve for testing new concepts in spacecraft design and propulsion, stabilization, collect high-quality images of cloud cover and retransmit meteorological data via a synchronous satellite to Earth, perform measurements of the aerospace environment, and test improved communication systems.',
            link: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1966-110A' 
        },
        {
            id: 4,
            nombre: 'LANDSAT 1',
            nombreEn: 'Landsat 1',
            imagen: 'Landsat-1.jpg',
            radioMult: 1.22,
            inclinacion: -0.40,    // ~-23°
            ascension: 1.95,
            velocidad: 0.060,
            fase: 1.88,
            altitud: '500 km',
            velocidadKm: '7.61 km/s',
            inclinacionGrad: '35.0°',
            periodo: '94.6 min',
            estado: 'En órbita / no operacional',
            estadoEn: 'In orbit, non-operational',
            agencia: 'NASA- Oficina de aplicaciones espaciales y terrestres/ Estados Unidos',
            agenciaEn: 'NASA- Office of Space and Earth applications / United States',
            lanzamiento: '23 de julio 1972',
            lanzamientoEn: 'July 23, 1972',
            proposito: 'Telecomunicaciones y retransmisión de datos orbitales.',
            propositoEn: 'Telecommunications and orbital data relay.',
            descripcion: 'Plataforma experimental de enlaces inter-satelitales y transmisión de telemetría científica en banda alta.',
            descripcionEn: 'Experimental platform for inter-satellite crosslinks and high-band scientific telemetry transmission.',
            link: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1972-058A'
        },
        {
            id: 5,
            nombre: 'TDRS-A',
            imagen: 'TDRS-A.png',
            nombreEn: 'TDRS-A',
            radioMult: 1.42,
            inclinacion: 1.25,     // ~72° (casi polar)
            ascension: 2.60,
            velocidad: 0.038,
            fase: 2.51,
            altitud: '820 km',
            velocidadKm: '7.44 km/s',
            inclinacionGrad: '82.5°',
            periodo: '101.2 min',
            estado: 'En órbita, no operacional',
            estadoEn: 'In orbit, non-operational',
            agencia: 'NASA- Oficina de seguimiento y datos/ Estados Unidos',
            agenciaEn: 'NASA- Monitoring and data office/ United States',
            lanzamiento: '5 de abril de 1983',
            lanzamientoEn: 'April 5, 1983',
            proposito: 'Estudio de radiación solar y clima espacial.',
            propositoEn: 'Solar radiation and space weather research.',
            descripcion: 'Monitoreo de vientos solares, partículas cargadas y perturbaciones geomagnéticas en la magnetosfera terrestre.',
            descripcionEn: 'Monitoring solar winds, charged particles, and geomagnetic storms across Earth magnetosphere.',
            link: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1983-026B' 
        },
        {
            id: 6,
            nombre: 'GALEX',
            imagen: 'GALEX.jpeg',
            nombreEn: 'GALEX',
            radioMult: 1.28,
            inclinacion: -0.90,    // ~-52°
            ascension: 3.25,
            velocidad: 0.050,
            fase: 3.14,
            altitud: '630 km',
            velocidadKm: '7.54 km/s',
            inclinacionGrad: '66.0°',
            periodo: '97.3 min',
            estado: 'En órbita, no operacional',
            estadoEn: 'In orbit, non-operational',
            agencia: 'NASA- Oficina de ciencias espaciales/ Estados Unidos',
            agenciaEn: 'NASA- Office of Space Sciences / United States',
            lanzamiento: '28 de abril del 2003',
            lanzamientoEn: 'April 28, 2003',
            proposito: 'Telescopio espacial ultravioleta',
            propositoEn: 'Ultraviolet space telescope',
            descripcion: 'Espacio asignado para la descripción técnica e información científica originada de la NASA correspondiente a este satélite.',
            descripcionEn: 'Space allocated for the technical description and scientific information originated from NASA corresponding to this satellite.',
            link: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2003-017A'
        },
        {
            id: 7,
            nombre: 'FAST',
            imagen: 'FAST.jpeg',
            nombreEn: 'FAST',
            radioMult: 1.46,
            inclinacion: 0.55,     // ~31°
            ascension: 3.90,
            velocidad: 0.040,
            fase: 3.77,
            altitud: '900 km',
            velocidadKm: '7.40 km/s',
            inclinacionGrad: '53.0°',
            periodo: '103.0 min',
            estado: 'En órbita, no operacional',
            estadoEn: 'In orbit, non-operational',
            agencia: 'NASA- Oficina de ciencias espaciales/ Estados Unidos',
            agenciaEn: 'NASA- Office of Space Sciences / United States',
            lanzamiento: '21 de agosto de 1996',
            lanzamientoEn: 'August 21, 1996',
            proposito: 'Satelite explorer',
            propositoEn: 'Explorer satellite',
            descripcion: 'Su mision era investigar la fisica del plasma de los fenomenos aurorales con una resolucion temporal y espacial extremadamente alta, empleando un conjuto completo de instrumentos para medir particulas.',
            descripcionEn: 'Its mission was to investigate the physics of auroral phenomena plasma with extremely high temporal and spatial resolution, employing a complete set of instruments to measure particles.',
            link: ' https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1996-049A' 
        },
        {
            id: 8,
            nombre: 'NIMBUS 3',
            imagen: 'Nimbus-3.jpg',
            nombreEn: 'NIMBUS 3',
            radioMult: 1.36,
            inclinacion: -1.20,    // ~-69°
            ascension: 4.55,
            velocidad: 0.045,
            fase: 4.40,
            altitud: '750 km',
            velocidadKm: '7.48 km/s',
            inclinacionGrad: '74.0°',
            periodo: '99.8 min',
            estado: 'No operacional / en órbita',
            estadoEn: 'Non-operational / in orbit',
            agencia: 'NASA- Oficina de ciencias espaciales/ Estados Unidos',
            agenciaEn: 'NASA- Office of Space Sciences / United States',
            lanzamiento: '14 de abril de 1969',
            lanzamientoEn: 'April 14, 1969',
            proposito: 'Satelite de investigacion y desarrollo meteorologico .',
            propositoEn: 'Meteorological research and development satellite.',
            descripcion: 'Su mision fue servir de plataforma estabilizada y orientada hacia la tierra, destinada a probar sistemas avanzados de sensores meteorologicos y a recopilar datos meteorologicos.',
            descripcionEn: 'Its mission was to serve as a stabilized and Earth-oriented platform, designed to test advanced meteorological sensor systems and collect meteorological data.',
            link: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-037A'
        },
        {
            id: 9,
            nombre: 'QuikSCAT',
            nombreEn: 'QuikSCAT',
            imagen: 'QUICKSCAT.png',
            radioMult: 1.50,
            inclinacion: 0.20,     // ~11° (casi ecuatorial)
            ascension: 5.20,
            velocidad: 0.035,
            fase: 5.03,
            altitud: '1050 km',
            velocidadKm: '7.32 km/s',
            inclinacionGrad: '28.5°',
            periodo: '106.2 min',
            estado: 'En órbita, no operacional',
            estadoEn: 'In orbit, non-operational',
            agencia: 'NASA- Administracion nacional aeronautica y el espacio / Estados Unidos',
            agenciaEn: 'NASA- National Aeronautics and Space Administration / United States',
            lanzamiento: '20 de junio del 1999',
            lanzamientoEn: 'June 20, 1999',
            proposito: 'Sistemas de radionavegación y sincronización.',
            propositoEn: 'Radionavigation and atomic timing systems.',
            descripcion: 'Su mision era medir los vientos oceanicos y sus direcciones mediante laobservacion de las pequeñas ondas generadas por el viento.',
            descripcionEn: 'Its mission was to measure oceanic winds and their directions through the observation of small waves generated by the wind.',
            link: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1999-034A' 
        },
        {
            id: 10,
            nombre: 'EO-1',
            nombreEn: 'EO-1',
            imagen: 'EO.jpg',
            radioMult: 1.22,
            inclinacion: 0.85,     // ~49°
            ascension: 5.85,
            velocidad: 0.052,
            fase: 5.65,
            altitud: '480 km',
            velocidadKm: '7.62 km/s',
            inclinacionGrad: '63.4°',
            periodo: '94.2 min',
            estado: 'En órbita, no operacional',
            estadoEn: 'In orbit, non-operational',
            agencia: 'NASA- Administracion nacional aeronautica y el espacio / Estados Unidos',
            agenciaEn: 'NASA- National Aeronautics and Space Administration / United States',
            lanzamiento: '21 de noviembre 2000',
            lanzamientoEn: 'November 21, 2000',
            proposito: 'Investigación en microgravedad y física de materiales.',
            propositoEn: 'Microgravity research and materials physics.',
            descripcion: 'Laboratorio orbital para experimentos de cristalización de proteínas y solidificación de aleaciones en caída libre.',
            descripcionEn: 'Orbital lab for protein crystal growth experiments and metallic alloy solidification in freefall.',
            link: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2000-075A' 
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

    // Control del aviso de carga del modelo 3D
    const avisoCarga = document.getElementById('aviso-carga-modelo');
    const barraProgreso = document.getElementById('carga-barra-fill');

    function ocultarAvisoCarga() {
        if (!avisoCarga) return;
        if (barraProgreso) {
            barraProgreso.style.width = '100%';
        }
        setTimeout(() => {
            avisoCarga.classList.add('oculto');
            setTimeout(() => {
                avisoCarga.style.display = 'none';
            }, 500);
        }, 350);
    }

    if (visorTierra && avisoCarga) {
        visorTierra.addEventListener('progress', (e) => {
            if (barraProgreso && e.detail && typeof e.detail.totalProgress === 'number') {
                const pct = Math.max(15, Math.round(e.detail.totalProgress * 100));
                barraProgreso.style.width = `${pct}%`;
            }
        });

        if (visorTierra.loaded) {
            ocultarAvisoCarga();
        } else {
            visorTierra.addEventListener('load', ocultarAvisoCarga, { once: true });
        }

        // Respaldo de seguridad para retirar el aviso tras 15s si la conexión se interrumpe
        setTimeout(() => {
            if (avisoCarga && !avisoCarga.classList.contains('oculto')) {
                ocultarAvisoCarga();
            }
        }, 15000);
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

    // Función para obtener el idioma actual del traductor global
    function obtenerIdiomaActual() {
        if (window.MetallicTraductor && typeof window.MetallicTraductor.obtenerIdioma === 'function') {
            return window.MetallicTraductor.obtenerIdioma();
        }
        try {
            return localStorage.getItem('metallic_earth_idioma') || 'es';
        } catch (e) {
            return 'es';
        }
    }

    // Actualiza los nombres de los satélites en la lista lateral y en los hotspots 3D
    function actualizarNombresSatelites() {
        const esIngles = obtenerIdiomaActual() === 'en';

        listaItems.forEach(item => {
            const sat = SATELITES.find(s => s.id === item.id);
            if (sat && item.link) {
                item.link.textContent = esIngles && sat.nombreEn ? sat.nombreEn : sat.nombre;
            }
        });

        satelitesElements.forEach(({ sat, element }) => {
            const etiqueta = element.querySelector('.satelite-etiqueta');
            if (etiqueta) {
                etiqueta.textContent = esIngles && sat.nombreEn ? sat.nombreEn : sat.nombre;
            }
        });
    }

    // 6. Gestión del panel lateral emergente y selección
    function seleccionarSatelite(id) {
        sateliteSeleccionadoId = id;
        const sat = SATELITES.find(s => s.id === id);
        if (!sat) return;

        const esIngles = obtenerIdiomaActual() === 'en';

        // Actualizar contenido del panel lateral respetando el idioma actual
        panelTitulo.textContent = esIngles && sat.nombreEn ? sat.nombreEn : sat.nombre;
        panelImagen.src = sat.imagen ? `imagenes/${sat.imagen}` : 'imagenes/default.jpg';
        panelEstado.textContent = esIngles && sat.estadoEn ? sat.estadoEn : sat.estado;

        panelInclinacion.textContent = sat.inclinacionGrad;
        panelPeriodo.textContent = sat.periodo;
        panelDescripcion.textContent = esIngles && sat.descripcionEn ? sat.descripcionEn : sat.descripcion;
        panelAgencia.textContent = esIngles && sat.agenciaEn ? sat.agenciaEn : sat.agencia;
        panelLanzamiento.textContent = esIngles && sat.lanzamientoEn ? sat.lanzamientoEn : sat.lanzamiento;
        panelProposito.textContent = esIngles && sat.propositoEn ? sat.propositoEn : sat.proposito;
        
        // Actualizar link de más información
        if (panelLink) {
            const url = sat.link || sat.Link || '';
            panelLink.href = url || '#';
            if (url) {
                panelLink.target = '_blank';
                panelLink.rel = 'noopener noreferrer';
                panelLink.style.pointerEvents = 'auto';
                panelLink.style.opacity = '1';
            } else {
                panelLink.removeAttribute('target');
                panelLink.style.pointerEvents = 'none';
                panelLink.style.opacity = '0.5';
            }
        }

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

    // Inicializar los nombres según el idioma activo al cargar
    actualizarNombresSatelites();

    // Aplicar configuración guardada del sistema (rotación automática de la Tierra y fondo del espacio)
    function aplicarConfiguracionGlobal() {
        let config = {
            idioma: 'es',
            rotacionAuto: true,
            fondoEspacio: 'video'
        };

        try {
            const raw = localStorage.getItem('metallic_earth_configuracion');
            if (raw) {
                config = Object.assign(config, JSON.parse(raw));
            }
        } catch (e) {
            console.error('Error al leer configuración:', e);
        }

        // 1. Rotación automática de la Tierra
        if (visorTierra) {
            const debeRotar = config.rotacionAuto !== false;
            if (debeRotar) {
                visorTierra.setAttribute('auto-rotate', '');
                visorTierra.autoRotate = true;
            } else {
                visorTierra.removeAttribute('auto-rotate');
                visorTierra.autoRotate = false;
            }
        }

        // 2. Fondo del espacio
        const videoFondo = document.getElementById('video-fondo');
        const fondoTipo = config.fondoEspacio || 'video';

        if (fondoTipo === 'imagen') {
            if (videoFondo) {
                videoFondo.style.display = 'none';
                try { videoFondo.pause(); } catch (e) {}
            }
            document.body.style.backgroundImage = "url('imagenes/fondoEstrellas.jpg')";
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundPosition = 'center';
            document.body.style.backgroundRepeat = 'no-repeat';
            document.body.style.backgroundAttachment = 'fixed';
            document.body.style.backgroundColor = '#030a1e';
        } else if (fondoTipo === 'oscuro') {
            if (videoFondo) {
                videoFondo.style.display = 'none';
                try { videoFondo.pause(); } catch (e) {}
            }
            document.body.style.backgroundImage = 'none';
            document.body.style.backgroundColor = '#020617';
        } else {
            // 'video' por defecto
            if (videoFondo) {
                videoFondo.style.display = 'block';
                try { videoFondo.play().catch(() => {}); } catch (e) {}
            }
            document.body.style.backgroundImage = 'none';
            document.body.style.backgroundColor = '#07173f';
        }
    }

    // Ejecutar aplicación de configuración inmediatamente al inicializar
    aplicarConfiguracionGlobal();

    // Re-aplicar cuando el visor 3D termine de cargar o se defina
    if (visorTierra) {
        visorTierra.addEventListener('load', aplicarConfiguracionGlobal);
    }
    if (window.customElements) {
        customElements.whenDefined('model-viewer').then(aplicarConfiguracionGlobal);
    }

    // Escuchar cambios de configuración si ocurren en vivo o al reenfocar la pestaña
    window.addEventListener('storage', (e) => {
        if (e.key === 'metallic_earth_configuracion') {
            aplicarConfiguracionGlobal();
        }
    });
    window.addEventListener('focus', aplicarConfiguracionGlobal);

    // Escuchar cambios de idioma globales disparados por el traductor
    window.addEventListener('metallic_idioma_cambiado', () => {
        actualizarNombresSatelites();
        if (sateliteSeleccionadoId !== null) {
            seleccionarSatelite(sateliteSeleccionadoId);
        }
    });

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
