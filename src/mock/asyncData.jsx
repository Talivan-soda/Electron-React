const productos = [
    {
        id: '01',
        title: 'Sistema de video vigilancia Hikvision completo',
        description: `Este kit de videovigilancia Hikvision combina un DVR Turbo HD de 8 canales con 4 cámaras tipo bullet de 2MP ColorVu, que ofrecen imagen a color incluso en condiciones de baja iluminación. Es una solución completa para quienes buscan seguridad continua, grabación local y visualización remota desde dispositivos móviles.

CARACTERISTICAS PRINCIPALES 

Este Kit Incluye:

1 DVR DS-7208HGHI-M1 DVR 8CH 720 / 1080P LITE 5-1 H.265+ HIKVISION
4 CAMARAS DS-2CE10DF0T-PF BULLET COLORVU LITE 2MP 20M 2.8MM HIKVISION
4 BALUN HD PASIVO (HDTVI/HDCVI/AHD) A PRESION HASTA 5MP
4 FICHA HEMBRA C/ BORNERA 5.5*2.1/2.5
4 FICHA MACHO C/ BORNERA 5.5*2.1/2.5
1 FUENTE SWITCHING 12V. 2A
1 SPLITTER 4 BOCAS`,
        stock: 10,
        price: 500000,
        category: 'Seguridad',
        image: '../img/camarasHikvision.webp'
    },
    {
        id: '02',
        title: 'Kit Alarma Inalámbrico Hikvision',
        description: `Kit Alarma Hikvision AX PRO Inalámbrica 48 Zonas 4G + Ethernet con Sirena Exterior incluida

El Kit de Alarma Hikvision AX PRO es un sistema de seguridad inalámbrico profesional diseñado para la protección de viviendas, comercios y oficinas. Permite administrar todo el sistema de forma remota mediante la aplicación Hik-Connect, recibiendo notificaciones en tiempo real ante cualquier evento.

La central integra comunicación 4G LTE y Ethernet, lo que permite mantener el sistema conectado incluso ante fallas del servicio de internet, asegurando el envío de alertas y eventos de alarma.

Este sistema pertenece a la plataforma AX PRO, una solución inalámbrica avanzada que permite ampliar la instalación agregando diferentes dispositivos de seguridad según las necesidades del lugar.
`,
        stock: 15,
        price: 600000,
        category: 'Seguridad',
        image: '../img/alarmaHikvision.webp'
    },
    {
        id: '03',
        title: 'Soporte para TV de 32 a 70 pulgadas',
        description: 'Soporte para TV de 32 a 70 pulgadas, con inclinación y giro, compatible con VESA 200x200 a 400x400, capacidad de carga de hasta 50 kg, fácil instalación y diseño robusto para una sujeción segura.',
        stock: 25,
        price: 15000,
        category: 'Televisores y Accesorios',
        image: '../img/soporte.webp'
    },
        {
        id: '04',
        title: 'Televisor Samsung 55 pulgadas 4K UHD Smart TV',
        description: 'Televisor Samsung 55 pulgadas 4K UHD Smart TV, con resolución 3840x2160, tecnología HDR, sistema operativo Tizen, conectividad Wi-Fi y HDMI, diseño elegante y funciones inteligentes para una experiencia de entretenimiento inmersiva.',
        stock: 8,
        price: 650000,
        category: 'Televisores y Accesorios',
        image: '../img/televisor.webp'
    },
        {
        id: '05',
        title: 'Convertidor Android TV FHD',
        description: 'Convertidor Android TV, dispositivo compacto que transforma cualquier televisor en un Smart TV, con sistema operativo Android, acceso a aplicaciones de streaming, navegación web y funciones multimedia, fácil de usar y compatible con la mayoría de los televisores.',
        stock: 20,
        price: 75000,
        category: 'Televisores y Accesorios',
        image: '../img/convertidor1.webp'
    },
        {
        id: '06',
        title: 'Convertidor Android TV 4K',
        description: 'Convertidor Android TV 4K, dispositivo compacto que transforma cualquier televisor en un Smart TV, con sistema operativo Android, acceso a aplicaciones de streaming, navegación web y funciones multimedia, fácil de usar y compatible con la mayoría de los televisores.',
        stock: 12,
        price: 100000,
        category: 'Televisores y Accesorios',
        image: '../img/convertidor2.webp'
    },
        {
        id: '03',
        title: 'Control remoto originales para TV',
        description: 'Control remoto original para TV, compatible con diversas marcas y modelos, ofrece funciones de navegación intuitiva, acceso rápido a aplicaciones y control total del televisor, diseño ergonómico y fácil de usar para una experiencia de entretenimiento sin complicaciones.',
        stock: 50,
        price: 12000,
        category: 'Televisores y Accesorios',
        image: '../img/controles.webp'
    },
        {
        id: '07',
        title: 'Netbook HP 14 pulgadas',
        description: 'Netbook HP 14 pulgadas, con procesador Intel Core i5, memoria RAM de 8 GB, almacenamiento SSD de 256 GB, pantalla HD, conectividad Wi-Fi y Bluetooth, diseño ligero y portátil para un rendimiento eficiente.',
        stock: 10,
        price: 780000,
        category: 'Televisores y Accesorios',
        image: '../img/netbook.webp'
    }
]

let error = false
export const getProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                reject(new Error('Error al obtener los productos'));
            } else {
                resolve(productos);
            }
        }, 3000);
    });
};

export const getProductoById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                reject(new Error('Error al obtener el producto'));
            } else {
                const producto = productos.find((prod) => prod.id === id)
                resolve(producto);
            }
        }, 3000);
    });
};