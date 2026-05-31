# 🌍 Landing Page - Viajes con React + Vite

Una landing page moderna y responsive sobre viajes, desarrollada con **React** y **Vite**, siguiendo una arquitectura escalable y componentes reutilizables.

## 📁 Estructura del Proyecto

```
src/
├── assets/                  # Imágenes, fuentes e íconos
│   ├── images/
│   ├── fonts/
│   └── icons/
├── components/              # Componentes reutilizables
│   ├── Button/
│   │   ├── Button.jsx
│   │   └── Button.css
│   ├── Card/
│   │   ├── Card.jsx
│   │   └── Card.css
│   ├── Navigation/
│   │   ├── Navigation.jsx
│   │   └── Navigation.css
│   └── Footer/
│       ├── Footer.jsx
│       └── Footer.css
├── pages/                   # Vistas completas
│   ├── Home.jsx
│   └── Home.css
├── layouts/                 # Plantillas de página
│   └── MainLayout.jsx
├── styles/                  # Estilos globales
│   └── global.css
├── App.jsx
├── App.css
└── main.jsx
```

## ✨ Características

✅ **Diseño Responsive** - Adaptado para móvil, tablet y desktop  
✅ **Menú Hamburguesa** - Navegación responsive que se convierte en hamburguesa en pantallas pequeñas  
✅ **Componentes Reutilizables** - Button, Card, Navigation, Footer  
✅ **Formulario con Validaciones** - Contacto/Reserva con validación en frontend  
✅ **Secciones Organizadas**:
   - Hero section atractivo
   - Servicios destacados
   - Destinos populares con cards
   - Formulario de contacto
   - Footer con información

✅ **Animaciones Suaves** - Transiciones y hover effects  
✅ **Colores Personalizados** - Paleta moderna y coherente

## 🚀 Guía de Inicio Rápido

### 1. Instalar Dependencias
```bash
npm install
```

### 2. Ejecutar en Desarrollo
```bash
npm run dev
```

El proyecto se abrirá en `http://localhost:5173`

### 3. Build para Producción
```bash
npm run build
```

### 4. Vista Previa de Producción
```bash
npm run preview
```

## 🎨 Componentes

### Button
Componente de botón reutilizable con múltiples variantes.

**Props:**
- `variant`: primary, secondary, accent, outline
- `size`: small, medium, large
- `disabled`: boolean
- `type`: button, submit, reset
- `onClick`: función callback

```jsx
<Button variant="primary" size="large">
  Explorar
</Button>
```

### Card
Componente para mostrar destinos con imagen, título, descripción y precio.

**Props:**
- `image`: URL de la imagen
- `title`: Título del destino
- `description`: Descripción
- `price`: Precio (opcional)
- `rating`: Calificación (opcional)

```jsx
<Card
  image="url"
  title="París, Francia"
  description="Descripción..."
  price={1200}
  rating={4.8}
/>
```

### Navigation
Barra de navegación con menú responsivo y hamburguesa en mobile.

**Características:**
- Logo clicable
- Enlaces de navegación
- Menú hamburguesa automático en pantallas < 768px
- Animación suave del menú

### Footer
Pie de página con información, enlaces rápidos y redes sociales.

## 📱 Responsive Design

El proyecto es completamente responsive con puntos de quiebre en:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Características Responsive:
- Menú hamburguesa en mobile
- Grid adaptable (1-3 columnas)
- Tipografía escalada
- Imágenes optimizadas

## 🎯 Secciones de la Landing Page

### Hero Section
Introduce la marca con un mensaje atractivo y llamada a acción.

### Servicios
Muestra 4 servicios principales con iconos y descripciones.

### Destinos
Grid de 6 destinos populares en cards interactivas con:
- Imagen con zoom en hover
- Calificación
- Precio
- Descripción

### Formulario de Contacto
Formulario funcional con:
- Validación HTML5
- Campos: Nombre, Email, Teléfono, Destino, Mensaje
- Confirmación al enviar

## 🎨 Paleta de Colores

```css
--primary-color: #007bff    (Azul)
--secondary-color: #ff6b6b  (Rojo)
--accent-color: #ffc107     (Amarillo)
--dark-color: #1a1a1a       (Negro)
--light-color: #f9f9f9      (Gris claro)
```

## 📦 Tecnologías

- **React 18+** - Librería UI
- **Vite** - Build tool y dev server
- **CSS3** - Estilos (flexbox, grid, animaciones)
- **HTML5** - Estructura

## 🔄 Flujo de Trabajo

1. Los componentes están en `src/components/`
2. Las páginas están en `src/pages/`
3. El layout principal envoltura todo en `src/layouts/`
4. Los estilos globales están en `src/styles/global.css`
5. Cada componente tiene su propio CSS modular

## 📝 Notas Importantes

- Los componentes son reutilizables y modulares
- Cada componente tiene su propio archivo CSS
- Las imágenes de ejemplo son de Unsplash (cambiar en producción)
- Validación en frontend para el formulario
- Diseño completamente responsive

## 🚀 Próximos Pasos

- [ ] Conectar a backend real
- [ ] Integrar Google Maps para destinos
- [ ] Agregar más destinos
- [ ] Implementar carrito de compras
- [ ] Sistema de autenticación
- [ ] Dashboard de reservas

---

**Proyecto de Landing Page - Viajes**  
Desarrollado con React + Vite - 2024
