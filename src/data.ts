import { TrackingData, ServiceItem, OfficeLocation } from './types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'maritimo',
    title: 'Transporte Marítimo',
    description: 'Soluciones de envío global eficientes por vía marítima, contenedores completos (FCL) y carga consolidada (LCL).',
    fullDetails: 'Ofrecemos conexiones estratégicas con los principales puertos del mundo, garantizando espacio, tarifas competitivas y un manejo seguro de su mercancía tanto en carga consolidada como en contenedores completos.',
    iconName: 'ship',
    features: [
      'Contenedor Completo (FCL) y Carga Distribuida/Consolidada (LCL)',
      'Gestión de fletes en Puerto Quetzal, Puerto Santo Tomás de Castilla y Puerto Barrios',
      'Servicios puerta a puerta (Door-to-Door) y puerto a puerto',
      'Manejo de carga sobredimensionada, refrigerada y peligrosa (HAZMAT)'
    ]
  },
  {
    id: 'aereo',
    title: 'Transporte Aéreo',
    description: 'Envíos rápidos con conexiones prioritarias para cargas urgentes y de alto valor nacional e internacional.',
    fullDetails: 'Nuestra red aérea global nos permite coordinar envíos de alta prioridad de manera rápida y segura. Conexión garantizada de mercancías urgentes, delicadas o de alto valor desde cualquier parte del mundo hacia el Aeropuerto Internacional La Aurora.',
    iconName: 'plane',
    features: [
      'Vuelos directos y conexiones consolidadas de carga express',
      'Servicios aeroportuarios rápidos y priorizados',
      'Ideal para productos perecederos, farmacéuticos y repuestos industriales urgentes',
      'Rastreo detallado hora por hora desde el despegue hasta el aterrizaje'
    ]
  },
  {
    id: 'terrestre',
    title: 'Transporte Terrestre',
    description: 'Logística de distribución terrestre eficiente y segura a nivel nacional y en toda la región de Centroamérica.',
    fullDetails: 'Conectamos a Guatemala con el resto de Centroamérica y México. Ofrecemos una flota moderna equipada con rastreo satelital por GPS y conductores altamente capacitados.',
    iconName: 'truck',
    features: [
      'Unidades propias de 1.5, 3.5, 5, 10 toneladas y furgones de 48 y 53 pies',
      'Transporte regional centroamericano (FTL y LCL)',
      'Monitoreo satelital GPS 24/7 con custodia virtual e informes periódicos',
      'CUSTODIA armada disponible a solicitud'
    ]
  },
  {
    id: 'aduanal',
    title: 'Agenciamiento Aduanal',
    description: 'Liberación eficiente y trámites sin demoras con una gestión aduanera impecable y 100% apegada a la ley.',
    fullDetails: 'Navegar por las aduanas en Guatemala y el Istmo Centroamericano requiere experiencia comprobada. Nuestro equipo legal y gestor se encarga de clasificaciones arancelarias, regímenes de importación/exportación y liberación rápida de su carga.',
    iconName: 'file-check',
    features: [
      'Clasificación arancelaria especializada de productos',
      'Trámites de importación definitiva, temporal, tránsitos y exportaciones',
      'Asesoría legal en comercio exterior y normativas de la SAT',
      'Gestión de permisos y licencias especiales (ministerios de salud, agricultura, etc.)'
    ]
  },
  {
    id: 'seguro',
    title: 'Seguro de Carga',
    description: 'Su mercancía está protegida en todo momento con una cobertura "Todo Riesgo" y el beneficio del deducible más bajo.',
    fullDetails: 'Proteja sus inversiones contra imprevistos en ruta, siniestros, robos o pérdidas por averías. Emitimos pólizas de seguro internacionales directamente, con una cobertura robusta de puerta a puerta.',
    iconName: 'shield-check',
    features: [
      'Pólizas con cobertura internacional "Todo Riesgo" (All Risk)',
      'Emisión de póliza inmediata para carga aérea, marítima y de carretera',
      'Gestión de reclamos acelerada con liquidaciones justas y ágiles',
      'Deducibles optimizados, con opción a cero deducible para rutas específicas'
    ]
  },
  {
    id: 'almacen',
    title: 'Almacenamiento y Distribución',
    description: 'Espacios de almacenamiento estratégico en Guatemala con control de inventarios de última generación.',
    fullDetails: 'Contamos con depósitos aduaneros autorizados y bodegas de distribución general en puntos clave de la Ciudad de Guatemala, facilitando el fraccionamiento de carga y entregas de última milla.',
    iconName: 'warehouse',
    features: [
      'Bodegas de distribución general y almacenes fiscales',
      'Control de inventarios estricto vía WMS digital con acceso cliente',
      'Servicios de etiquetado, embalaje, paletizado y cross-docking',
      'Distribución de última milla con vehículos urbanos dedicados'
    ]
  }
];

export const OFFICE_INFO: OfficeLocation = {
  name: 'Oficinas Centrales Basa Logistics',
  address: 'Diagonal 6, 10-01 Zona 10, Edificio Las Margaritas, Torre II, Nivel 7, Ciudad de Guatemala, Guatemala 01010',
  phone: '+502 2200-4700',
  email: 'contacto@basalogistics.com',
  hours: 'Lunes a Viernes: 8:00 AM - 6:00 PM | Sábado: 8:00 AM - 12:00 PM'
};

export const TESTIMONIALS_DATA = [
  {
    name: 'María López',
    position: 'Gerente de Operaciones',
    company: 'Distribuidora Global S.A.',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=300&auto=format&fit=crop',
    quote: 'Basa Logistics ha transformado nuestra cadena de suministro en Centroamérica. Su puntualidad y el servicio de agenciamiento aduanal nos ahorra días de espera en fronteras. ¡Excelente servicio y absoluta confianza!'
  },
  {
    name: 'Alejandro Recinos',
    position: 'Director de Logística e Importaciones',
    company: 'Alimentos del Istmo',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop',
    quote: 'El rastreo de carga en tiempo real y la atención personalizada de Basa nos dan la tranquilidad que nuestro negocio necesita. Recomiendo ampliamente su servicio aéreo prioritario para materia prima urgente.'
  },
  {
    name: 'Gabriela Palacios',
    position: 'Gerente de Compras Internacionales',
    company: 'PharmaGuate de Centroamérica',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=300&auto=format&fit=crop',
    quote: 'Con medicamentos o perecederos no podemos permitirnos demoras. Basa Logistics trata nuestra carga refrigerada con los más altos estándares de calidad y frío controlado. Son un socio vital para nosotros.'
  }
];

export const MOCK_TRACKING_ENTRIES: Record<string, TrackingData> = {
  'BASA-MX502': {
    trackingId: 'BASA-MX502',
    sender: 'Industrial Química de México',
    recipient: 'Insumos Integrales de Guatemala S.A.',
    origin: 'Manzanillo (Puerto Colima), México',
    destination: 'Zona 12, Ciudad de Guatemala, Guatemala',
    serviceType: 'Marítimo',
    weight: '3,850 kg',
    volume: '15.4 m³',
    estimatedDelivery: '18 de Junio, 2026',
    statusText: 'Carga en Tránsito Marítimo',
    progressPercent: 60,
    history: [
      {
        status: 'Carga Recibida en Origen',
        description: 'Mercancía recibida e inspeccionada en bodega de Manzanillo, México.',
        location: 'Manzanillo, MX',
        date: '10 de Junio, 2026 - 09:30 AM',
        completed: true,
        current: false,
        iconName: 'warehouse'
      },
      {
        status: 'Trámites de Exportación',
        description: 'Liberación y documentación aduanera mexicana procesada con éxito.',
        location: 'Aduana de Manzanillo, MX',
        date: '11 de Junio, 2026 - 02:45 PM',
        completed: true,
        current: false,
        iconName: 'file-check'
      },
      {
        status: 'Estiba en Buque',
        description: 'Carga acomodada e inspeccionada a bordo del buque "Pacific Sea Lion v.420".',
        location: 'Puerto de Manzanillo, MX',
        date: '12 de Junio, 2026 - 11:15 AM',
        completed: true,
        current: false,
        iconName: 'ship'
      },
      {
        status: 'En Tránsito Marítimo',
        description: 'Buque navegando rumbo a Puerto Quetzal, Escuintla, Guatemala. Velocidad: 14 nudos. Clima favorable.',
        location: 'Océano Pacífico (Costa Suroccidental)',
        date: '14 de Junio, 2026 - 10:00 AM',
        completed: true,
        current: true,
        iconName: 'ship'
      },
      {
        status: 'Arribo a Puerto y Descarga',
        description: 'Estimado. Descarga del contendor y asignación a rampa fiscal.',
        location: 'Puerto Quetzal, Escuintla, GT',
        date: '16 de Junio, 2026 - 08:00 AM (Est.)',
        completed: false,
        current: false,
        iconName: 'warehouse'
      },
      {
        status: 'Liberación Aduanal e Ingreso',
        description: 'Estimado. Trámite ante la SAT y pago de aranceles de importación.',
        location: 'Aduana Puerto Quetzal, GT',
        date: '17 de Junio, 2026 - 02:00 PM (Est.)',
        completed: false,
        current: false,
        iconName: 'file-check'
      },
      {
        status: 'Entrega en Destino Final',
        description: 'Estimado. Tránsito terrestre local y entrega en bodegas del consignatario.',
        location: 'Zona 12, Ciudad de Guatemala',
        date: '18 de Junio, 2026 - 04:30 PM (Est.)',
        completed: false,
        current: false,
        iconName: 'check-circle'
      }
    ]
  },
  'BASA-US203': {
    trackingId: 'BASA-US203',
    sender: 'Tech Component Supply Inc.',
    recipient: 'Soluciones Tecnológicas de Guatemala',
    origin: 'Miami International Airport (MIA), Miami, FL, USA',
    destination: 'Zona 10, Ciudad de Guatemala, Guatemala',
    serviceType: 'Aéreo',
    weight: '142 kg',
    volume: '0.85 m³',
    estimatedDelivery: '13 de Junio, 2026',
    statusText: 'Carga Entregada',
    progressPercent: 100,
    history: [
      {
        status: 'Ingreso a Bodega de Exportación',
        description: 'Consolidación de paquetería express y pesaje electrónico.',
        location: 'Miami Cargo Hub, USA',
        date: '11 de Junio, 2026 - 08:30 AM',
        completed: true,
        current: false,
        iconName: 'warehouse'
      },
      {
        status: 'Despegue de Vuelo Carguero',
        description: 'Carga despachada en vuelo regular de carga DHL Aero Expreso v.735.',
        location: 'Aeropuerto de Miami (MIA)',
        date: '12 de Junio, 2026 - 03:15 AM',
        completed: true,
        current: false,
        iconName: 'plane'
      },
      {
        status: 'Arribo a Guatemala',
        description: 'Aterrizaje del vuelo de carga. Descarga de contenedores refrigerados y paletas aéreas.',
        location: 'Aeropuerto Intl. La Aurora, GT',
        date: '12 de Junio, 2026 - 06:40 AM',
        completed: true,
        current: false,
        iconName: 'plane'
      },
      {
        status: 'Revisión y Aforo de Aduana',
        description: 'Liberación aduanera express. Semáforo fiscal verde decretado por la SAT.',
        location: 'Aduana Express Combex-Im, GT',
        date: '12 de Junio, 2026 - 11:30 AM',
        completed: true,
        current: false,
        iconName: 'file-check'
      },
      {
        status: 'En Ruta de Distribución',
        description: 'Cargada en panel de entrega rápida refrigerada debidamente sellada.',
        location: 'Zonas Metropolitanas, GT',
        date: '13 de Junio, 2026 - 09:00 AM',
        completed: true,
        current: false,
        iconName: 'truck'
      },
      {
        status: 'Entregada con Éxito',
        description: 'Entregada a recepción de Oficinas Las Margaritas. Firmado por: Recepcionista Carlos Méndez.',
        location: 'Zona 10, Ciudad de Guatemala',
        date: '13 de Junio, 2026 - 11:45 AM',
        completed: true,
        current: true,
        iconName: 'check-circle'
      }
    ]
  },
  'BASA-GT101': {
    trackingId: 'BASA-GT101',
    sender: 'Maquiladoras Unidas de Tapachula',
    recipient: 'Moda y Textiles de Guatemala S.A.',
    origin: 'Tapachula, Chiapas, México',
    destination: 'Parque Industrial El Naranjo, Mixco, Guatemala',
    serviceType: 'Terrestre',
    weight: '12,500 kg',
    volume: '66 m³',
    estimatedDelivery: '16 de Junio, 2026',
    statusText: 'En Trámite de Aduana de Frontera',
    progressPercent: 45,
    history: [
      {
        status: 'Recepción e Inspección de Contenedor',
        description: 'Recepción del furgón de 53 pies. Precinto de seguridad original inspeccionado y sellado.',
        location: 'Tapachula Central, MX',
        date: '13 de Junio, 2026 - 01:20 PM',
        completed: true,
        current: false,
        iconName: 'warehouse'
      },
      {
        status: 'Tránsito Terrestre Fronterizo',
        description: 'Ruta hacia la frontera sur de Tecún Umán, San Marcos, Guatemala.',
        location: 'Carretera Costera, MX',
        date: '14 de Junio, 2026 - 06:30 AM',
        completed: true,
        current: false,
        iconName: 'truck'
      },
      {
        status: 'Ingreso a Rampa de Inspección Fiscal',
        description: 'La unidad ingresó a la rampa de la SAT para el examen físico preventivo obligatorio.',
        location: 'Aduana Terrestre Tecún Umán II, GT',
        date: '14 de Junio, 2026 - 03:20 PM',
        completed: true,
        current: true,
        iconName: 'file-check'
      },
      {
        status: 'Liberación de Aduana Terrestre',
        description: 'Estimado. Emisión de marchamo electrónico de la SAT para iniciar custodias.',
        location: 'Tecún Umán II, Escuintla/S.Marcos',
        date: '15 de Junio, 2026 - 10:00 AM (Est.)',
        completed: false,
        current: false,
        iconName: 'file-check'
      },
      {
        status: 'Tránsito Carretero Nacional',
        description: 'Estimado. Tránsito con custodia satelital activa por la Carretera Centroamericana CA-2.',
        location: 'CA-2 Occidente, GT',
        date: '15 de Junio, 2026 - 02:00 PM (Est.)',
        completed: false,
        current: false,
        iconName: 'truck'
      },
      {
        status: 'Ingreso a Destino y Entrega',
        description: 'Estimado. Llegada a bodegas del cliente para apertura de precintos y desglose.',
        location: 'Parque Industrial El Naranjo, Mixco',
        date: '16 de Junio, 2026 - 09:00 AM (Est.)',
        completed: false,
        current: false,
        iconName: 'check-circle'
      }
    ]
  }
};
