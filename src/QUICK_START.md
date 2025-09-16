# 🚀 Guía Rápida - Portfolio Leonardo Pérez

## 🎯 Cambios Esenciales en 10 Minutos

### 1. 👤 Información Personal (2 min)

**Archivo**: `/components/PortfolioUnified.tsx`

```tsx
// Buscar y cambiar estas líneas:
<h1 className="text-4xl lg:text-5xl font-bold leading-tight">
  UI/UX Designer                           // ← Cambiar rol
  <span className="block text-primary">Creating Digital</span>
  <span className="block">Experiences</span>
</h1>

// Navegación
<h1 className="font-semibold">Alex Rivera</h1>  // ← Cambiar nombre

// Ubicación
<MapPin className="h-4 w-4" />
<span>San Francisco, CA</span>               // ← Cambiar ubicación

// Contacto
<p className="text-sm text-muted-foreground">alex.rivera@email.com</p>  // ← Cambiar email
<p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>      // ← Cambiar teléfono
```

### 2. 🖼️ Imagen de Perfil (1 min)

```tsx
// Buscar esta línea y cambiar la URL:
<ImageWithFallback
  src="https://images.unsplash.com/photo-1475118258341-d2a655a5b11a..."  // ← Nueva URL
  alt="Tu Nombre - Tu Rol"                                                // ← Cambiar alt
  className="w-full h-full object-cover"
/>
```

### 3. 🛠️ Skills y Tecnologías (2 min)

```tsx
// Buscar el array 'skills' y modificar:
const skills = [
  { name: "Tu Skill 1", icon: <Palette className="h-4 w-4" />, category: "Design" },
  { name: "Tu Skill 2", icon: <Code className="h-4 w-4" />, category: "Development" },
  // ... agregar más skills
]
```

### 4. 💼 Experiencia Laboral (3 min)

```tsx
// Buscar el array 'experience' y modificar:
const experience = [
  {
    title: "Tu Título",
    company: "Tu Empresa",
    period: "2022 - Present",
    description: "Tu descripción del rol...",
    achievements: [
      "Tu logro 1",
      "Tu logro 2",
      "Tu logro 3"
    ]
  },
  // ... más experiencias
]
```

### 5. 🎨 Proyectos (2 min)

```tsx
// Buscar el array 'projects' y modificar:
const projects = [
  {
    title: "Tu Proyecto",
    description: "Descripción de tu proyecto...",
    image: "URL_de_tu_imagen",
    tags: ["React", "TypeScript", "Tailwind"],
    year: "2024",
    behanceUrl: "https://behance.net/tu-proyecto"  // ← Tu URL real
  },
  // ... más proyectos
]
```

---

## 🎨 Cambios de Estilo Rápidos

### Cambiar Color Principal

**Archivo**: `/styles/globals.css`

```css
:root {
  --primary: #030213;        /* ← Cambiar este color */
}

.dark {
  --primary: oklch(0.985 0 0);  /* ← Y este para modo oscuro */
}
```

### Cambiar Gradientes

```css
/* Buscar .bg-mesh-gradient y modificar los colores */
.bg-mesh-gradient {
  background: 
    radial-gradient(at 40% 20%, rgba(TU_COLOR_R, TU_COLOR_G, TU_COLOR_B, 0.06) 0px, transparent 60%),
    /* ... más gradientes */
}
```

---

## 🔄 Alternar Versiones

### Versión Unificada (Efectos visuales)
```tsx
// App.tsx
import { PortfolioUnified } from "./components/PortfolioUnified"
export default function App() {
  return <PortfolioUnified />
}
```

### Versión Original (Sin efectos)
```tsx
// App.tsx
import { PortfolioOriginal } from "./components/PortfolioOriginal"
export default function App() {
  return <PortfolioOriginal />
}
```

---

## 🌓 Dark Mode - Aplicar a Nuevos Elementos

### Usando CSS Custom Properties (Recomendado)
```tsx
<div className="bg-background text-foreground border-border">
  {/* Se adapta automáticamente */}
</div>
```

### Usando Classes Condicionales
```tsx
<div className="bg-white dark:bg-gray-900 text-black dark:text-white">
  {/* Control manual */}
</div>
```

### CSS Personalizado
```css
.mi-elemento {
  background: rgba(255, 255, 255, 0.1);
}

.dark .mi-elemento {
  background: rgba(0, 0, 0, 0.2);
}
```

---

## 📱 Iconos Lucide React

### Importar
```tsx
import { Mail, Github, Linkedin, Download, ExternalLink } from "lucide-react"
```

### Usar
```tsx
<Mail className="h-4 w-4" />                    // Tamaño normal
<Github className="h-5 w-5 text-primary" />     // Con color
<Download className="h-4 w-4 mr-2" />           // Con spacing
```

### Tamaños Estándar
- `h-3 w-3`: Pequeño (12px)
- `h-4 w-4`: Normal (16px)  
- `h-5 w-5`: Mediano (20px)
- `h-6 w-6`: Grande (24px)

---

## 🎭 Efectos Visuales

### Aplicar Glass Effect
```tsx
<Card className="glass-effect">
  {/* Contenido */}
</Card>
```

### Añadir Hover Glow
```tsx
<Card className="hover:shadow-glow transition-all duration-300">
  {/* Contenido */}
</Card>
```

### Gradiente en Background
```tsx
<section className="bg-section-gradient py-16">
  {/* Contenido */}
</section>
```

### Animaciones
```tsx
<div className="animate-fade-in">        // Fade in
<div className="animate-slide-up">       // Slide up
<div className="animate-float">          // Flotación
<div className="animate-glow">           // Resplandor
```

---

## 🏗️ Estructura de Componentes (Atomic Design)

```
⚛️ ÁTOMOS (ui/)
├── button.tsx         // Botones base
├── card.tsx           // Contenedores
├── badge.tsx          // Etiquetas
└── input.tsx          // Campos

🧬 MOLÉCULAS 
├── ThemeToggle.tsx    // Botón + Icono
└── Navigation.tsx     // Menu + Links

🦠 ORGANISMOS
├── PortfolioUnified.tsx   // Portfolio completo
└── HeroSection.tsx        // Sección hero

📱 PAGES
└── App.tsx            // Aplicación completa
```

---

## 🚀 Deploy Rápido

### Vercel (Recomendado)
1. Push a GitHub
2. Conectar repo en Vercel
3. Deploy automático

### Netlify
1. `npm run build`
2. Arrastrar carpeta `dist/` a Netlify
3. Configurar dominio

---

## ⚡ Comandos Esenciales

```bash
# Desarrollo
npm run dev

# Build producción
npm run build

# Preview local
npm run preview

# Linting
npm run lint
```

---

**✨ ¡Listo! Tu portfolio personalizado está funcionando.**

Para más detalles, revisa el [README completo](/README.md).