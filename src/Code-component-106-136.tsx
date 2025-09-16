# 🏗️ Arquitectura del Portfolio Leonardo Pérez

## 📐 Metodología: Atomic Design

### 🔬 Principios de Brad Frost

El proyecto sigue la metodología **Atomic Design**, organizando componentes en 5 niveles jerárquicos:

```
🔬 ÁTOMOS → 🧬 MOLÉCULAS → 🦠 ORGANISMOS → 📋 TEMPLATES → 📱 PÁGINAS
```

---

## ⚛️ Nivel 1: Átomos

**Ubicación**: `/components/ui/`

**Descripción**: Elementos básicos no divisibles del sistema de diseño.

### 📦 Componentes Atómicos

| Componente | Archivo | Propósito |
|------------|---------|-----------|
| `Button` | `button.tsx` | Botones base con variantes |
| `Input` | `input.tsx` | Campos de entrada |
| `Card` | `card.tsx` | Contenedores básicos |
| `Badge` | `badge.tsx` | Etiquetas y tags |
| `Avatar` | `avatar.tsx` | Imágenes de perfil |
| `Switch` | `switch.tsx` | Interruptores |
| `Slider` | `slider.tsx` | Controles deslizantes |

### 🎨 Características de los Átomos

```tsx
// Ejemplo: Button.tsx
export interface ButtonProps {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
  // ... más props
}

// Variantes predefinidas
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-input bg-background hover:bg-accent",
        // ... más variantes
      }
    }
  }
)
```

**🔧 Principios de los Átomos:**
- **Reutilizables**: Funcionales en cualquier contexto
- **Sin lógica de negocio**: Solo presentación
- **Altamente configurables**: Props extensivas
- **Tipado estricto**: TypeScript para todas las props

---

## 🧬 Nivel 2: Moléculas

**Ubicación**: `/components/`

**Descripción**: Combinaciones simples de átomos que forman unidades funcionales.

### 🔗 Componentes Moleculares

| Componente | Átomos Utilizados | Función |
|------------|-------------------|---------|
| `ThemeToggle` | `Button` + `Icon` | Cambio de tema |
| `ContactButton` | `Button` + `Icon` + `Text` | Botón de contacto |
| `SocialLink` | `Button` + `Icon` | Enlaces sociales |
| `SkillBadge` | `Badge` + `Icon` | Habilidades |

### 💡 Ejemplo de Molécula

```tsx
// components/ThemeToggle.tsx
import { Button } from "./ui/button"          // ÁTOMO
import { Sun, Moon } from "lucide-react"      // ÁTOMO (icono)

export function ThemeToggle() {              // MOLÉCULA
  const [isDark, setIsDark] = useState(false)
  
  return (
    <Button variant="outline" onClick={toggleTheme}>
      {isDark ? <Moon /> : <Sun />}
    </Button>
  )
}
```

**🎯 Características de las Moléculas:**
- **Función específica**: Una responsabilidad clara
- **Combinan átomos**: 2-4 átomos típicamente
- **Estado simple**: Lógica básica de UI
- **Reutilizables**: En diferentes contextos

---

## 🦠 Nivel 3: Organismos

**Ubicación**: `/components/`

**Descripción**: Secciones complejas que combinan moléculas y átomos.

### 🏢 Componentes Organismos

| Organismo | Descripción | Complejidad |
|-----------|-------------|-------------|
| `PortfolioUnified` | Portfolio completo | ⭐⭐⭐⭐⭐ |
| `HeroSection` | Sección principal | ⭐⭐⭐ |
| `ProjectsGrid` | Grid de proyectos | ⭐⭐⭐⭐ |
| `ContactSection` | Formulario de contacto | ⭐⭐⭐ |
| `Navigation` | Menú principal | ⭐⭐ |

### 🏗️ Estructura de un Organismo

```tsx
// components/HeroSection.tsx
import { Button, Card, Badge } from "./ui/"     // ÁTOMOS
import { ThemeToggle, SocialLink } from "./"     // MOLÉCULAS

export function HeroSection() {                 // ORGANISMO
  return (
    <section className="py-16 bg-hero-gradient">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Content side */}
        <div className="space-y-6">
          <Badge variant="outline">Available</Badge>
          <h1>UI/UX Designer</h1>
          <p>Description...</p>
          
          {/* Buttons (moléculas) */}
          <div className="flex gap-4">
            <Button>Download CV</Button>
            <Button variant="outline">Contact</Button>
          </div>
          
          {/* Social links (moléculas) */}
          <div className="flex gap-4">
            <SocialLink platform="github" />
            <SocialLink platform="linkedin" />
          </div>
        </div>
        
        {/* Image side */}
        <div className="relative">
          <Card className="glass-effect">
            <ImageWithFallback />
          </Card>
        </div>
      </div>
    </section>
  )
}
```

**🎪 Características de los Organismos:**
- **Lógica compleja**: Estado avanzado y efectos
- **Múltiples responsabilidades**: Varias funciones relacionadas
- **Composición**: Muchas moléculas y átomos
- **Contexto específico**: Para secciones particulares

---

## 📋 Nivel 4: Templates

**Ubicación**: `/App.tsx` (implícito)

**Descripción**: Layouts que definen la estructura de página.

### 🎨 Template Structure

```tsx
// App.tsx (Template implícito)
export default function App() {
  return (
    <div className="min-h-screen relative">
      {/* Background uniforme */}
      <div className="fixed inset-0 bg-mesh-gradient" />
      
      {/* Content overlay */}
      <div className="relative z-10">
        <Navigation />                    {/* ORGANISMO */}
        
        <main className="space-y-16">
          <HeroSection />                 {/* ORGANISMO */}
          <AboutSection />                {/* ORGANISMO */}
          <ProjectsSection />             {/* ORGANISMO */}
          <ContactSection />              {/* ORGANISMO */}
        </main>
        
        <Footer />                        {/* ORGANISMO */}
        <ScrollToTop />                   {/* MOLÉCULA */}
      </div>
    </div>
  )
}
```

---

## 📱 Nivel 5: Páginas

**Ubicación**: `/App.tsx`

**Descripción**: Implementaciones específicas de templates con contenido real.

### 🎯 Página Portfolio

```tsx
// La aplicación final que combina todo
export default function App() {
  return <PortfolioUnified />  // PÁGINA = TEMPLATE + DATA
}
```

---

## 🎨 Sistema de Estilos

### 🌈 Design Tokens

```css
/* styles/globals.css - Design System */
:root {
  /* Colors */
  --primary: #030213;
  --secondary: oklch(0.95 0.0058 264.53);
  --background: #ffffff;
  
  /* Typography */
  --font-size: 14px;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  
  /* Spacing */
  --radius: 0.625rem;
  
  /* Effects */
  --shadow-soft: 0 4px 20px rgba(0, 0, 0, 0.03);
  --blur-glass: 20px;
}
```

### 🎪 Utility Classes

```css
/* Gradientes */
.bg-mesh-gradient { /* Gradiente principal */ }
.bg-hero-gradient { /* Para secciones hero */ }
.bg-section-gradient { /* Para secciones */ }

/* Efectos */
.glass-effect { /* Efecto cristal */ }
.gradient-border { /* Bordes gradiente */ }
.shadow-glow { /* Resplandor */ }

/* Animaciones */
.animate-fade-in { /* Aparecer */ }
.animate-slide-up { /* Subir */ }
.animate-float { /* Flotación */ }
```

---

## 🔧 Configuración Técnica

### 📦 Dependencias Principales

```json
{
  "dependencies": {
    "react": "^18.0.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^4.0.0",
    "lucide-react": "latest",
    "class-variance-authority": "latest"
  }
}
```

### ⚙️ Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  content: ["./App.tsx", "./components/**/*.tsx"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // CSS custom properties para dark mode
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        primary: 'var(--color-primary)',
      },
      backgroundImage: {
        // Gradientes personalizados
        'mesh-gradient': 'var(--mesh-gradient)',
        'hero-gradient': 'var(--hero-gradient)',
      },
      animation: {
        // Animaciones personalizadas
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
      }
    }
  }
}
```

---

## 📊 Flujo de Datos

### 🔄 Estado y Props

```
PÁGINA (App.tsx)
  ↓ props/config
ORGANISMOS (PortfolioUnified)
  ↓ data/handlers
MOLÉCULAS (ThemeToggle)
  ↓ actions/state
ÁTOMOS (Button)
  ↓ events
USUARIO
```

### 🎯 Ejemplo de Flujo

```tsx
// 1. PÁGINA: Define configuración
const portfolioConfig = {
  theme: 'auto',
  language: 'es',
  animations: true
}

// 2. ORGANISMO: Recibe configuración
function PortfolioUnified({ config }) {
  const [darkMode, setDarkMode] = useState(false)
  
  return (
    <div>
      {/* 3. MOLÉCULA: Recibe estado y handlers */}
      <ThemeToggle 
        isDark={darkMode} 
        onToggle={setDarkMode} 
      />
    </div>
  )
}

// 4. MOLÉCULA: Maneja lógica específica
function ThemeToggle({ isDark, onToggle }) {
  return (
    // 5. ÁTOMO: Recibe props básicas
    <Button 
      variant="outline" 
      onClick={() => onToggle(!isDark)}
    >
      {isDark ? <Moon /> : <Sun />}
    </Button>
  )
}
```

---

## 🚀 Escalabilidad

### ➕ Agregar Nuevos Componentes

1. **Identificar nivel atómico**:
   ```
   ¿Es un elemento básico? → ÁTOMO (ui/)
   ¿Combina 2-3 elementos? → MOLÉCULA (components/)
   ¿Es una sección completa? → ORGANISMO (components/)
   ```

2. **Seguir convenciones**:
   ```tsx
   // Naming: PascalCase
   export function MiComponente() {}
   
   // Props: Interface tipada
   interface MiComponenteProps {
     variant?: "default" | "secondary"
     children: React.ReactNode
   }
   
   // Exports: Named exports
   export { MiComponente }
   ```

3. **Implementar progresivamente**:
   ```
   ÁTOMO → MOLÉCULA → ORGANISMO → INTEGRAR
   ```

### 🔄 Refactoring Guidelines

- **Bottom-up**: Refactorizar átomos primero
- **Props drilling**: Usar context si hay > 3 niveles
- **Performance**: React.memo para componentes puros
- **Testing**: Unit tests para átomos, integration para organismos

---

**🏗️ Esta arquitectura garantiza un código mantenible, escalable y fácil de entender.**

La metodología Atomic Design permite que el portfolio crezca de manera organizada y que nuevos desarrolladores puedan contribuir rápidamente.