# 🌍 Landing Page - TravelGo con React

Una landing page moderna y responsive desarrollada con **React** y **Vite**, siguiendo una arquitectura escalable y componentes reutilizables.

## 📋 Objetivo de la Actividad

Desarrollar una landing page funcional utilizando React que incluya:
- ✅ Diseño visual organizado y responsive
- ✅ Componentes reutilizables
- ✅ Formulario funcional con validaciones en frontend
- ✅ Navegación clara y estructura bien definida
- ✅ Design System documentado
- ✅ Despliegue público del proyecto
- ✅ Repositorio en GitHub organizado

## 📁 Estructura del Proyecto

```
src/
├── components/              # Componentes reutilizables
│   ├── Button/              # Botones con variantes
│   ├── Card/                # Tarjetas de destinos
│   ├── Icon/                # Iconos SVG
│   ├── Modal/               # Modal popup
│   ├── Navigation/          # Barra de navegación
│   ├── ContactForm/         # Formulario de contacto
│   └── Footer/              # Pie de página
├── pages/                   # Vistas completas
│   ├── Home.jsx             # Página de inicio
│   └── DesignSystem.jsx     # Documentación del DS
├── layouts/                 # Plantillas de página
│   └── MainLayout.jsx       # Layout principal
├── styles/                  # Estilos globales
│   └── global.css
├── App.jsx                  # Componente raíz
├── App.css
└── main.jsx
```

## 🎨 Componentes Desarrollados

### 1. Button
Componente de botón reutilizable con múltiples variantes.

**Variantes disponibles:**
- `primary` - Botón principal (azul)
- `accent` - Botón destacado (amarillo)
- `outline` - Botón con borde

**Tamaños:**
- `small` - 8px 16px
- `medium` - 12px 24px (por defecto)
- `large` - 16px 32px

**Estados:**
- Normal, Hover, Disabled

### 2. Card
Componente para mostrar destinos/servicios.

**Props:**
- `image`: URL de la imagen
- `title`: Título
- `description`: Descripción
- `price`: Precio (opcional)
- `rating`: Calificación (opcional)

**Características:**
- Zoom en hover
- Rating con ícono
- Precio destacado

### 3. Icon
Componente de iconos reutilizable.

**Tipos disponibles:**
- `flights` - Avión
- `hotel` - Hotel
- `car` - Auto
- `compass` - Brújula

**Tamaños:** small, medium, large

### 4. Modal
Componente modal para alertas y confirmaciones.

**Props:**
- `isOpen`: Control de visibilidad
- `title`: Título
- `message`: Mensaje
- `type`: success | error
- `onClose`: Callback al cerrar

### 5. Navigation
Barra de navegación responsive.

**Características:**
- Links simples (scroll a secciones)
- Design System link (navega a otro componente)
- Menú hamburguesa en mobile
- Estilos activos

### 6. ContactForm
Formulario de contacto con validaciones.

**Validaciones:**
- ✅ Campos requeridos
- ✅ Validación de email
- ✅ Mensajes de error claros
- ✅ Feedback visual

## ✨ Características Principales

### Navegación
- **Links Simples:** Inicio, Destinos, Servicios, Contacto (scroll)
- **Design System:** Enlace especial que navega al componente
- **Menu Responsive:** Hamburguesa en pantallas < 768px

### Home Page
- Hero section atractivo
- Sección de servicios
- Grid de destinos con cards
- Formulario de contacto
- Footer

### Design System
Página dedicada que documenta y muestra:
- **Paleta de colores** - Definición de colores del sistema
- **Tipografía** - Headings (h1-h3) y body text
- **Espaciado** - Sistema de espaciado (8-60px)
- **Botones** - Todas las variantes y tamaños
- **Tarjetas** - Ejemplos de cards
- **Iconos** - Todos los tipos disponibles
- **Modal** - Demostración interactiva
- **Formulario** - Ejemplo funcional

## 📱 Responsive Design

El proyecto es completamente responsive:

| Dispositivo | Ancho | Características |
|-------------|-------|-----------------|
| Mobile | < 768px | 1 columna, hamburguesa |
| Tablet | 768px - 1024px | 2 columnas |
| Desktop | > 1024px | 3+ columnas |

**Características responsive:**
- Menú hamburguesa automático
- Grid adaptable
- Tipografía escalada
- Imágenes optimizadas

## 🎨 Paleta de Colores

| Color | Valor | Uso |
|-------|-------|-----|
| Primary | #007bff | Botones, links, accents |
| Accent | #ffc107 | Highlights, calls to action |
| Dark | #1a1a1a | Texto principal |
| Light | #f9f9f9 | Fondos |

## 🛠️ Instalación y Uso

### Requisitos
- Node.js v16 o superior
- npm o yarn

### Pasos

```bash
# 1. Clonar repositorio
git clone https://github.com/usuario/landing-page-react.git

# 2. Navegar al proyecto
cd landing-page-react

# 3. Instalar dependencias
npm install

# 4. Iniciar servidor de desarrollo
npm run dev
# Disponible en http://localhost:5173

# 5. Build para producción
npm run build

# 6. Previsualizar build
npm run preview
```

## 📚 Conceptos Implementados

### Hooks React
- `useState` - Manejo de estado
- `useRef` - Referencias a DOM

### Componentización
- Props y propTypes
- Componentes funcionales
- Conditional rendering

### Navegación
- Cambio de componentes con estado
- Scroll a secciones con refs
- Menú responsive con toggles

### Validaciones
- Validación en frontend
- Feedback visual
- Manejo de errores

## 🚀 Despliegue

### Opciones de despliegue:
- **Vercel** (recomendado)
- **Netlify**
- **GitHub Pages**
- **Firebase Hosting**

### Con Vercel:
```bash
npm install -g vercel
vercel
```

## 📝 Validaciones del Formulario

El formulario incluye:
- ✅ Validación de campos requeridos
- ✅ Validación de formato email
- ✅ Mensajes de error descriptivos
- ✅ Confirmación visual de envío
- ✅ Reset de formulario

## 🔍 Características del Código

- **Modularidad:** Componentes independientes
- **Reutilización:** Máxima reutilización de componentes
- **Escalabilidad:** Fácil agregar nuevas funcionalidades
- **Mantenibilidad:** CSS modular por componente
- **Legibilidad:** Código limpio y bien organizado

## 📦 Tecnologías Utilizadas

- **React 19.2.6** - Librería UI
- **Vite 8.0.12** - Build tool
- **CSS3** - Estilos (flexbox, grid)
- **react-icons** - Librería de iconos
- **HTML5** - Estructura semántica

## 🎓 Aspectos Técnicos a Destacar

### En el desarrollo:
1. **Componentes reutilizables** - Button con variantes, sizes
2. **Estado global** - App maneja navegación
3. **Props drilling** - Paso de props a través de MainLayout
4. **Conditional rendering** - Muestra Home o DesignSystem
5. **Event handling** - Clicks, form submission
6. **Responsive design** - Mobile-first approach

### En el Design System:
1. **Documentación visual** - Muestra todos los componentes
2. **Variantes** - Botones en diferentes estados
3. **Tokens** - Colores y espaciado definidos
4. **Ejemplos vivos** - Componentes interactivos

## 📋 Checklist de Entrega

- ✅ Landing page funcional y responsive
- ✅ Componentes reutilizables desarrollados
- ✅ Formulario con validaciones
- ✅ Design System documentado
- ✅ Código limpio y organizado
- ✅ Proyecto desplegado
- ✅ Repositorio en GitHub
- ✅ README completo

## 🐛 Notas Importantes

- Los componentes son totalmente reutilizables
- Cada componente tiene su CSS modular
- Las imágenes son de Unsplash (cambiar en producción)
- El código sigue buenas prácticas
- Totalmente responsive
- Compatible con React 19+

---

**Proyecto de Landing Page - TravelGo**  
Desarrollado con React + Vite | 2026
