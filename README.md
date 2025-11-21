# AESS Estudiants - Web React

Web moderna de AESS Estudiants migrada a React con un diseño completamente nuevo, estético y responsive.

## 🚀 Características

- ⚛️ **React 18** con Vite
- 🎨 **Diseño moderno y estético** con gradientes y animaciones
- 📱 **Completamente responsive** para desktop y mobile
- 🧭 **React Router** para navegación
- 🎯 **Componentes reutilizables** (Hero, Carousel, FAQ, etc.)
- ✉️ **Integración con EmailJS** para formularios
- 🎭 **Animaciones suaves** y transiciones

## 📦 Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Inicia el servidor de desarrollo:
```bash
npm run dev
```

3. Construye para producción:
```bash
npm run build
```

4. Previsualiza la build de producción:
```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
test-web/
├── public/
│   ├── images/          # Imágenes y assets
│   └── documents/       # Documentos PDF
├── src/
│   ├── components/      # Componentes reutilizables
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Carousel.jsx
│   │   └── FAQ.jsx
│   ├── pages/          # Páginas principales
│   │   ├── Home.jsx
│   │   ├── Cursos.jsx
│   │   ├── Projectes.jsx
│   │   ├── Contact.jsx
│   │   ├── AESSBot.jsx
│   │   └── AESSBotInscripcio.jsx
│   ├── styles/         # Estilos globales
│   ├── App.jsx         # Componente principal
│   └── main.jsx        # Punto de entrada
├── package.json
└── vite.config.js
```

## 🎨 Diseño

El nuevo diseño incluye:

- **Paleta de colores moderna**: Gradientes azul-púrpura con acentos
- **Tipografía**: Inter para una lectura clara
- **Efectos visuales**: Backdrop blur, sombras suaves, animaciones
- **Responsive**: Adaptado para móviles, tablets y desktop
- **Accesibilidad**: Navegación por teclado, ARIA labels, contraste adecuado

## 📄 Páginas

- **Home** (`/`): Página principal con información sobre AESS
- **Cursos** (`/cursos`): Listado de cursos disponibles
- **Projectes** (`/projectes`): Proyectos activos y pasados
- **Contact** (`/contact`): Formulario de contacto
- **AESSBot** (`/aessbot`): Información sobre la competición
- **AESSBot Inscripció** (`/aessbot-inscripcio`): Formulario de inscripción

## 🔧 Tecnologías

- React 18.2.0
- React Router DOM 6.20.0
- Vite 5.0.8
- EmailJS 3.11.0
- Font Awesome 6.6.0

## 📝 Notas

- Las imágenes deben estar en `public/images/`
- Los documentos PDF deben estar en `public/documents/`
- El formulario de contacto usa EmailJS (configurar en `Contact.jsx`)
- El formulario de inscripción de AESSBot usa un iframe de Google Forms

## 🌐 Despliegue

Para desplegar en producción:

1. Ejecuta `npm run build`
2. Los archivos estarán en la carpeta `dist/`
3. Sube el contenido de `dist/` a tu servidor

## 📧 Contacto

Para más información, visita [AESS Estudiants](https://aessestudiants.upc.edu)
