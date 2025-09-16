# 🎨 Portfolio Leonardo Pérez - Documentación

![Portfolio Preview](https://images.unsplash.com/photo-1607706189992-eae578626c86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjBkZXNpZ24lMjB3ZWJzaXRlfGVufDF8fHx8MTc1NzU5NzAyNXww&ixlib=rb-4.1.0&q=80&w=1200)

## 📋 Índice

1. [Descripción General](#-descripción-general)
2. [Arquitectura del Proyecto](#-arquitectura-del-proyecto)
3. [Atomic Design](#-atomic-design)
4. [Sistema de Temas (Dark Mode)](#-sistema-de-temas-dark-mode)
5. [Librerías de Iconos](#-librerías-de-iconos)
6. [Componentes Disponibles](#-componentes-disponibles)
7. [Gradientes y Efectos Visuales](#-gradientes-y-efectos-visuales)
8. [Guía de Uso](#-guía-de-uso)
9. [Cómo Agregar Nuevos Elementos](#-cómo-agregar-nuevos-elementos)
10. [Configuración de Tailwind CSS](#-configuración-de-tailwind-css)
11. [Deployment](#-deployment)

---

## 🎯 Descripción General

**Portfolio Leonardo Pérez** es una aplicación web moderna construida con React, TypeScript y Tailwind CSS que implementa un diseño profesional estilo Next.js con efectos visuales avanzados, sistema de tema oscuro/claro y arquitectura escalable.

### ✨ Características Principales

- **🌓 Tema Dual**: Sistema completo de modo oscuro/claro
- **🎨 Gradientes Avanzados**: Efectos visuales estilo Next.js
- **📱 Responsive**: Adaptable a todos los dispositivos
- **🔧 Modular**: Arquitectura basada en Atomic Design
- **⚡ Performance**: Optimizado para velocidad y SEO
- **🎭 Animaciones**: Transiciones fluidas y efectos hover
- **🎪 Glassmorphism**: Efectos de cristal modernos

---

## 🏗️ Arquitectura del Proyecto

```
portfolio-leonardo-perez/
├── 📁 components/                 # Componentes React
│   ├── 📁 ui/                    # Atomos (ShadCN/UI)
│   ├── 📁 figma/                 # Utilidades especiales
│   ├── 📄 PortfolioUnified.tsx   # Organismo principal
│   ├── 📄 PortfolioOriginal.tsx  # Versión alternativa
│   └── 📄 ThemeToggle.tsx        # Molécula de tema
├── 📁 styles/                    # Estilos globales
│   └── 📄 globals.css            # CSS personalizado + Tailwind
├── 📁 public/                    # Assets estáticos
├── 📄 tailwind.config.js         # Configuración Tailwind
├── 📄 App.tsx                    # Punto de entrada
└── 📄 README.md                  # Esta documentación
```

### 🎨 Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|-----------|---------|-----------|
| **React** | 18+ | Framework principal |
| **TypeScript** | 5+ | Tipado estático |
| **Tailwind CSS** | 4.0 | Estilos utilitarios |
| **ShadCN/UI** | Latest | Componentes UI |
| **Lucide React** | Latest | Iconografía |
| **Unsplash** | API | Imágenes dinámicas |

---

## ⚛️ Atomic Design

El proyecto implementa la metodología **Atomic Design** de Brad Frost:

### 🔬 Átomos (Atoms)
**Ubicación**: `/components/ui/`

Elementos básicos no divisibles:

```typescript
// Ejemplos de átomos
├── button.tsx           # Botones base
├── input.tsx            # Campos de entrada
├── badge.tsx            # Etiquetas
├── avatar.tsx           # Avatares
└── card.tsx             # Contenedores base
```

**Uso básico**:
```tsx
import { Button } from "./components/ui/button"
import { Badge } from "./components/ui/badge"

<Button variant="primary">Click me</Button>
<Badge variant="secondary">New</Badge>
```

### 🧬 Moléculas (Molecules)
**Ubicación**: `/components/`

Combinaciones simples de átomos:

```typescript
// Ejemplos de moléculas
├── ThemeToggle.tsx      # Botón + icono para tema
├── Navigation.tsx       # Menu + botones
└── SummaryCards.tsx     # Card + contenido
```

**Ejemplo de molécula**:
```tsx
// ThemeToggle combina Button + Icon
export function ThemeToggle() {
  return (
    <Button variant="outline" onClick={toggleTheme}>
      <Sun className="h-4 w-4" />
    </Button>
  )
}
```

### 🦠 Organismos (Organisms)
**Ubicación**: `/components/`

Secciones complejas con múltiples moléculas:

```typescript
// Ejemplos de organismos
├── PortfolioUnified.tsx  # Portfolio completo
├── HeroPanel.tsx         # Sección hero
└── EntriesTable.tsx      # Tabla completa
```

### 📱 Templates & Pages
**Ubicación**: `App.tsx`

Layouts completos que combinan organismos.

---

## 🌓 Sistema de Temas (Dark Mode)

### 🔧 Configuración Automática

El sistema de temas se implementa mediante:

1. **CSS Custom Properties** en `/styles/globals.css`
2. **Clase `.dark`** aplicada al `<html>`
3. **localStorage** para persistencia
4. **Detección automática** del sistema

### 🎨 Variables de Color

```css
:root {
  --background: #ffffff;
  --foreground: oklch(0.145 0 0);
  --primary: #030213;
  /* ... más variables */
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  /* ... modo oscuro */
}
```

### 🛠️ Implementación

```tsx
// Ejemplo de uso del ThemeToggle
import { ThemeToggle } from "./components/ThemeToggle"

function Header() {
  return (
    <nav>
      <ThemeToggle />
    </nav>
  )
}
```

### ✨ Efectos Adaptativos

Los gradientes se adaptan automáticamente:

```css
.bg-mesh-gradient {
  /* Modo claro */
  background: radial-gradient(at 40% 20%, rgba(120, 119, 198, 0.06) 0px, transparent 60%);
}

.dark .bg-mesh-gradient {
  /* Modo oscuro */
  background: radial-gradient(at 40% 20%, rgba(168, 162, 255, 0.08) 0px, transparent 60%);
}
```

---

## 🎨 Librerías de Iconos

### 📦 Lucide React

**Instalación**: Ya incluido
**Uso**:

```tsx
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  Download,
  ExternalLink,
  Moon,
  Sun
} from "lucide-react"

// Uso básico
<Mail className="h-4 w-4" />

// Con estilos
<Github className="h-5 w-5 text-primary hover:text-primary/80" />

// En botones
<Button>
  <Download className="h-4 w-4 mr-2" />
  Descargar CV
</Button>
```

### 🎯 Iconos Disponibles

| Categoría | Iconos |
|-----------|--------|
| **Contacto** | `Mail`, `Phone`, `MapPin`, `Globe` |
| **Social** | `Github`, `Linkedin`, `Twitter`, `Instagram` |
| **UI** | `Menu`, `X`, `ArrowUp`, `ExternalLink` |
| **Tema** | `Sun`, `Moon` |
| **Acciones** | `Download`, `Upload`, `Share`, `Heart` |
| **Profesional** | `Building`, `Award`, `Target`, `Users` |

### 🔧 Personalización de Iconos

```tsx
// Tamaños estándar
<Icon className="h-3 w-3" />   // Pequeño
<Icon className="h-4 w-4" />   // Normal
<Icon className="h-5 w-5" />   // Mediano
<Icon className="h-6 w-6" />   // Grande

// Con animaciones
<Icon className="h-4 w-4 transition-transform hover:scale-110" />

// Con colores temáticos
<Icon className="h-4 w-4 text-primary" />
<Icon className="h-4 w-4 text-muted-foreground" />
```

---

## 🧩 Componentes Disponibles

### 🎴 Cards

```tsx
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

<Card className="glass-effect">
  <CardHeader>
    <CardTitle>Título</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Contenido de la tarjeta</p>
  </CardContent>
</Card>
```

**Variantes disponibles**:
- `glass-effect`: Efecto cristal
- `gradient-border`: Borde con gradiente
- `hover:shadow-glow`: Efecto resplandor

### 🔘 Buttons

```tsx
import { Button } from "./ui/button"

<Button variant="default">Principal</Button>
<Button variant="outline">Secundario</Button>
<Button variant="ghost">Sutil</Button>
<Button size="sm">Pequeño</Button>
<Button size="lg">Grande</Button>
```

### 🏷️ Badges

```tsx
import { Badge } from "./ui/badge"

<Badge variant="default">Predeterminado</Badge>
<Badge variant="secondary">Secundario</Badge>
<Badge variant="outline">Contorno</Badge>
```

### 🖼️ Images

```tsx
import { ImageWithFallback } from "./figma/ImageWithFallback"

<ImageWithFallback
  src="https://example.com/image.jpg"
  alt="Descripción"
  className="w-full h-64 object-cover rounded-lg"
/>
```

---

## 🌈 Gradientes y Efectos Visuales

### 🎨 Backgrounds Disponibles

```css
/* Gradiente principal de malla */
.bg-mesh-gradient

/* Gradiente para secciones hero */
.bg-hero-gradient

/* Gradiente sutil para secciones */
.bg-section-gradient

/* Patrón de rejilla */
.bg-grid-pattern

/* Patrón de puntos */
.bg-dot-pattern
```

### ✨ Efectos Especiales

```css
/* Efecto cristal */
.glass-effect

/* Bordes con gradiente */
.gradient-border

/* Sombras suaves */
.shadow-soft
.shadow-soft-lg

/* Efecto resplandor */
.shadow-glow
```

### 🎭 Animaciones

```css
/* Fade in */
.animate-fade-in

/* Slide up */
.animate-slide-up

/* Flotación */
.animate-float

/* Resplandor pulsante */
.animate-glow
```

---

## 📖 Guía de Uso

### 🚀 Inicio Rápido

1. **Clonar y configurar**:
```bash
git clone [repo-url]
cd portfolio-leonardo-perez
npm install
```

2. **Desarrollo**:
```bash
npm run dev
```

3. **Build de producción**:
```bash
npm run build
```

### 🎨 Cambiar entre versiones

```tsx
// App.tsx - Versión unificada (recomendada)
import { PortfolioUnified } from "./components/PortfolioUnified"

// App.tsx - Versión original (simple)
import { PortfolioOriginal } from "./components/PortfolioOriginal"
```

### 🔧 Personalización básica

**Cambiar información personal**:
```tsx
// En PortfolioUnified.tsx, buscar y modificar:
const personalInfo = {
  name: "Tu Nombre",
  role: "Tu Rol",
  location: "Tu Ubicación",
  email: "tu@email.com",
  phone: "+1 (555) 123-4567"
}
```

**Modificar proyectos**:
```tsx
const projects = [
  {
    title: "Tu Proyecto",
    description: "Descripción del proyecto",
    image: "URL_de_la_imagen",
    tags: ["React", "TypeScript", "Tailwind"],
    year: "2024",
    behanceUrl: "https://behance.net/tu-proyecto"
  }
]
```

---

## ➕ Cómo Agregar Nuevos Elementos

### 🎨 Agregar Nueva Sección

1. **Crear el componente**:
```tsx
// components/NewSection.tsx
export function NewSection() {
  return (
    <section className="py-16 relative">
      {/* Background effect */}
      <div className="absolute inset-0 bg-section-gradient"></div>
      
      <div className="relative container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Nueva Sección</h2>
        {/* Contenido */}
      </div>
    </section>
  )
}
```

2. **Importar y usar**:
```tsx
// En PortfolioUnified.tsx
import { NewSection } from "./NewSection"

// Agregar en el main
<main className="container mx-auto px-4 py-8 space-y-16">
  {/* Otras secciones */}
  <NewSection />
</main>
```

### 🃏 Agregar Nueva Card

```tsx
<Card className="glass-effect gradient-border hover:shadow-glow transition-all duration-300">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <IconName className="h-5 w-5" />
      Título
    </CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-muted-foreground">Contenido de la card</p>
  </CardContent>
</Card>
```

### 🔘 Agregar Nuevo Botón con Tema

```tsx
<Button 
  variant="outline" 
  className="glass-effect hover:shadow-soft transition-all duration-300"
>
  <IconName className="h-4 w-4 mr-2" />
  Texto del botón
</Button>
```

### 🌈 Aplicar Dark Mode a Elementos

**CSS personalizado**:
```css
.mi-elemento {
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-foreground);
}

.dark .mi-elemento {
  background: rgba(0, 0, 0, 0.2);
  /* Los colores CSS custom properties se adaptan automáticamente */
}
```

**Tailwind classes**:
```tsx
<div className="bg-background text-foreground border-border">
  {/* Se adapta automáticamente al tema */}
</div>

<div className="bg-white dark:bg-gray-900 text-black dark:text-white">
  {/* Control manual del tema */}
</div>
```

### 🎨 Agregar Nuevo Gradiente

1. **Definir en CSS**:
```css
/* En styles/globals.css */
.bg-mi-gradiente {
  background: linear-gradient(135deg, 
    rgba(255, 0, 150, 0.1) 0%, 
    rgba(0, 255, 150, 0.1) 100%
  );
}

.dark .bg-mi-gradiente {
  background: linear-gradient(135deg, 
    rgba(255, 0, 150, 0.15) 0%, 
    rgba(0, 255, 150, 0.15) 100%
  );
}
```

2. **Usar en componente**:
```tsx
<section className="py-16 bg-mi-gradiente">
  {/* Contenido */}
</section>
```

---

## ⚙️ Configuración de Tailwind CSS

### 🎨 Colores Personalizados

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Usar CSS custom properties para soporte de tema
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        primary: 'var(--color-primary)',
        // ... más colores
      }
    }
  }
}
```

### 🌊 Gradientes Personalizados

```javascript
backgroundImage: {
  'mi-gradiente': 'linear-gradient(135deg, rgba(255,0,150,0.1), rgba(0,255,150,0.1))',
  'hero-pattern': 'radial-gradient(ellipse at center, rgba(120,119,198,0.1), transparent)'
}
```

### ✨ Animaciones Personalizadas

```javascript
animation: {
  'mi-animacion': 'miAnimacion 2s ease-in-out infinite',
}
keyframes: {
  miAnimacion: {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-10px)' }
  }
}
```

---

## 🚀 Deployment

### 📦 Build de Producción

```bash
# Construir la aplicación
npm run build

# Previsualizar build local
npm run preview
```

### 🌐 Plataformas Recomendadas

| Plataforma | Configuración | Comando |
|-----------|---------------|---------|
| **Vercel** | Auto-detect | `git push` |
| **Netlify** | `npm run build` | `dist/` |
| **GitHub Pages** | Actions | Custom workflow |

### 🔧 Variables de Entorno

```bash
# .env.local
VITE_APP_TITLE="Portfolio Leonardo Pérez"
VITE_UNSPLASH_ACCESS_KEY="tu_api_key"
```

---

## 📋 Checklist de Customización

### ✅ Información Personal
- [ ] Cambiar nombre y rol en hero section
- [ ] Actualizar información de contacto
- [ ] Modificar ubicación geográfica
- [ ] Agregar enlaces de redes sociales reales

### ✅ Contenido Profesional
- [ ] Actualizar lista de skills y tecnologías
- [ ] Modificar experiencia laboral
- [ ] Cambiar proyectos destacados
- [ ] Actualizar enlaces a Behance/Portfolio

### ✅ Recursos Visuales
- [ ] Reemplazar imagen de perfil
- [ ] Actualizar imágenes de proyectos
- [ ] Verificar alt texts para accesibilidad
- [ ] Optimizar imágenes para performance

### ✅ Branding
- [ ] Personalizar paleta de colores
- [ ] Ajustar tipografía si es necesario
- [ ] Modificar gradientes y efectos
- [ ] Configurar favicon

### ✅ SEO y Metadata
- [ ] Actualizar meta tags
- [ ] Configurar Open Graph tags
- [ ] Agregar sitemap.xml
- [ ] Implementar analytics

---

## 🤝 Contribución

### 📝 Guías de Estilo

- **Componentes**: PascalCase (`MiComponente.tsx`)
- **Funciones**: camelCase (`miFuncion`)
- **CSS Classes**: kebab-case (`mi-clase-css`)
- **Variables**: camelCase (`miVariable`)

### 🔧 Pull Request Guidelines

1. Fork del repositorio
2. Crear feature branch (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'Add: nueva funcionalidad'`)
4. Push a branch (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

---

## 📞 Soporte

Para preguntas, issues o mejoras:

- **Documentación**: Este README
- **Issues**: GitHub Issues
- **Discusiones**: GitHub Discussions

---

**🎨 Portfolio Leonardo Pérez** - Construido con ❤️ usando React, TypeScript y Tailwind CSS.

*Última actualización: Enero 2025*