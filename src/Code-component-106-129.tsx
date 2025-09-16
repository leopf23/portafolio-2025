# 🧩 Ejemplos de Componentes - Portfolio Leonardo Pérez

## 📋 Índice de Ejemplos

1. [Componentes Básicos](#-componentes-básicos)
2. [Efectos Visuales](#-efectos-visuales)
3. [Layouts Complejos](#-layouts-complejos)
4. [Dark Mode](#-dark-mode)
5. [Animaciones](#-animaciones)
6. [Formularios](#-formularios)

---

## 🎨 Componentes Básicos

### 🃏 Card con Glass Effect

```tsx
// components/GlassCard.tsx
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Sparkles } from "lucide-react"

export function GlassCard({ title, children }) {
  return (
    <Card className="glass-effect gradient-border hover:shadow-glow transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  )
}

// Uso
<GlassCard title="Mi Tarjeta">
  <p>Contenido con efecto cristal</p>
</GlassCard>
```

### 🔘 Botón Flotante

```tsx
// components/FloatingButton.tsx
import { Button } from "./ui/button"
import { Plus } from "lucide-react"

export function FloatingButton({ onClick, icon: Icon = Plus, label }) {
  return (
    <Button
      onClick={onClick}
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-glow glass-effect z-50 p-0 animate-float hover:animate-glow transition-all duration-300"
    >
      <Icon className="h-6 w-6" />
      <span className="sr-only">{label}</span>
    </Button>
  )
}

// Uso
<FloatingButton 
  onClick={() => console.log('Click!')} 
  icon={Plus} 
  label="Agregar elemento" 
/>
```

### 🏷️ Badge Animado

```tsx
// components/AnimatedBadge.tsx
import { Badge } from "./ui/badge"

export function AnimatedBadge({ children, variant = "default", pulse = false }) {
  return (
    <Badge 
      variant={variant}
      className={`
        transition-all duration-300 hover:scale-105
        ${pulse ? 'animate-pulse' : ''}
        hover:shadow-soft
      `}
    >
      {children}
    </Badge>
  )
}

// Uso
<AnimatedBadge variant="secondary" pulse>
  🔥 Nuevo
</AnimatedBadge>
```

---

## ✨ Efectos Visuales

### 🌈 Sección con Gradiente Personalizado

```tsx
// components/GradientSection.tsx
export function GradientSection({ 
  children, 
  gradientType = "mesh", 
  pattern = "dots" 
}) {
  const gradientClass = {
    mesh: "bg-mesh-gradient",
    hero: "bg-hero-gradient", 
    section: "bg-section-gradient"
  }[gradientType]

  const patternClass = {
    dots: "bg-dot-pattern",
    grid: "bg-grid-pattern",
    none: ""
  }[pattern]

  return (
    <section className={`py-16 relative ${gradientClass}`}>
      {pattern !== "none" && (
        <div className={`absolute inset-0 ${patternClass} opacity-20`}></div>
      )}
      <div className="relative container mx-auto px-4">
        {children}
      </div>
    </section>
  )
}

// Uso
<GradientSection gradientType="hero" pattern="grid">
  <h2>Sección con gradiente hero y patrón de rejilla</h2>
</GradientSection>
```

### 🎭 Overlay con Blur

```tsx
// components/BlurOverlay.tsx
export function BlurOverlay({ isOpen, onClose, children }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/20 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Content */}
      <div className="relative glass-effect p-6 rounded-xl max-w-md w-full mx-4 animate-fade-in">
        {children}
      </div>
    </div>
  )
}

// Uso
<BlurOverlay isOpen={showModal} onClose={() => setShowModal(false)}>
  <h3 className="text-lg font-semibold mb-4">Modal con blur</h3>
  <p>Contenido del modal</p>
</BlurOverlay>
```

---

## 🏗️ Layouts Complejos

### 📊 Grid de Estadísticas

```tsx
// components/StatsGrid.tsx
import { TrendingUp, Users, Award, Target } from "lucide-react"

export function StatsGrid({ stats }) {
  const iconMap = {
    growth: TrendingUp,
    users: Users,
    awards: Award,
    projects: Target
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = iconMap[stat.icon] || Target
        
        return (
          <div 
            key={index}
            className="text-center space-y-2 animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto glass-effect">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// Uso
const myStats = [
  { icon: "projects", value: "50+", label: "Proyectos" },
  { icon: "users", value: "25+", label: "Clientes" },
  { icon: "awards", value: "8", label: "Premios" },
  { icon: "growth", value: "5+", label: "Años" }
]

<StatsGrid stats={myStats} />
```

### 🗂️ Timeline Vertical

```tsx
// components/Timeline.tsx
export function Timeline({ events }) {
  return (
    <div className="space-y-8">
      {events.map((event, index) => (
        <div key={index} className="flex gap-6 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
          {/* Timeline dot */}
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            {index < events.length - 1 && (
              <div className="w-px h-20 bg-border mt-2"></div>
            )}
          </div>
          
          {/* Content */}
          <div className="flex-1 pb-8">
            <div className="glass-effect p-4 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">{event.title}</h3>
                <span className="text-sm text-muted-foreground">{event.date}</span>
              </div>
              <p className="text-sm text-muted-foreground">{event.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// Uso
const timelineEvents = [
  {
    title: "Proyecto Alpha",
    date: "2024",
    description: "Desarrollo de aplicación web con React"
  },
  // ... más eventos
]

<Timeline events={timelineEvents} />
```

---

## 🌓 Dark Mode

### 🎨 Componente con Tema Personalizado

```tsx
// components/ThemedCard.tsx
import { useTheme } from "../hooks/useTheme" // Hook personalizado

export function ThemedCard({ children, variant = "default" }) {
  const { isDark } = useTheme()
  
  const variants = {
    default: {
      light: "bg-white border-gray-200",
      dark: "bg-gray-900 border-gray-800"
    },
    accent: {
      light: "bg-blue-50 border-blue-200", 
      dark: "bg-blue-900/20 border-blue-800"
    }
  }
  
  const classes = isDark 
    ? variants[variant].dark 
    : variants[variant].light

  return (
    <div className={`p-4 rounded-lg border transition-colors ${classes}`}>
      {children}
    </div>
  )
}

// Hook personalizado (opcional)
// hooks/useTheme.ts
export function useTheme() {
  const [isDark, setIsDark] = useState(false)
  
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'))
    })
    
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    })
    
    return () => observer.disconnect()
  }, [])
  
  return { isDark }
}
```

### 🎯 Elemento con Colores Adaptativos

```tsx
// components/AdaptiveElement.tsx
export function AdaptiveElement({ children }) {
  return (
    <div className="
      bg-background 
      text-foreground 
      border-border
      hover:bg-accent
      transition-colors
      p-4
      rounded-lg
      shadow-soft
      dark:shadow-none
    ">
      {/* Estos colores se adaptan automáticamente */}
      <div className="text-primary">Texto principal</div>
      <div className="text-muted-foreground">Texto secundario</div>
      {children}
    </div>
  )
}
```

---

## 🎬 Animaciones

### 🌟 Entrada Escalonada

```tsx
// components/StaggeredList.tsx
export function StaggeredList({ items, renderItem }) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="animate-slide-up opacity-0"
          style={{ 
            animationDelay: `${index * 0.1}s`,
            animationFillMode: 'forwards'
          }}
        >
          {renderItem(item, index)}
        </div>
      ))}
    </div>
  )
}

// Uso
<StaggeredList 
  items={projects}
  renderItem={(project) => (
    <ProjectCard project={project} />
  )}
/>
```

### 💫 Elemento con Hover Avanzado

```tsx
// components/HoverCard.tsx
export function HoverCard({ children, hoverScale = true, hoverGlow = false }) {
  return (
    <div className={`
      transition-all duration-300 ease-out
      ${hoverScale ? 'hover:scale-105' : ''}
      ${hoverGlow ? 'hover:shadow-glow' : 'hover:shadow-soft-lg'}
      hover:-translate-y-1
      cursor-pointer
      glass-effect
      p-6
      rounded-xl
    `}>
      {children}
    </div>
  )
}

// Uso
<HoverCard hoverScale hoverGlow>
  <h3>Tarjeta con efectos avanzados</h3>
  <p>Hover para ver los efectos</p>
</HoverCard>
```

### 🎪 Loading Skeleton

```tsx
// components/LoadingSkeleton.tsx
export function LoadingSkeleton({ 
  lines = 3, 
  avatar = false, 
  className = "" 
}) {
  return (
    <div className={`animate-pulse ${className}`}>
      {avatar && (
        <div className="w-12 h-12 bg-muted rounded-full mb-4"></div>
      )}
      
      <div className="space-y-3">
        {Array.from({ length: lines }).map((_, i) => (
          <div 
            key={i}
            className="h-4 bg-muted rounded"
            style={{ width: `${100 - (i * 10)}%` }}
          ></div>
        ))}
      </div>
    </div>
  )
}

// Uso
<LoadingSkeleton lines={4} avatar />
```

---

## 📝 Formularios

### 📋 Formulario con Validación Visual

```tsx
// components/ContactForm.tsx
import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Send, Check, X } from "lucide-react"

export function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle, loading, success, error

  const validate = () => {
    const newErrors = {}
    
    if (!form.name.trim()) newErrors.name = 'Nombre requerido'
    if (!form.email.includes('@')) newErrors.email = 'Email inválido'
    if (!form.message.trim()) newErrors.message = 'Mensaje requerido'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validate()) return
    
    setStatus('loading')
    
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setStatus('success')
    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 glass-effect p-6 rounded-xl">
      <div className="space-y-4">
        {/* Nombre */}
        <div>
          <Input
            placeholder="Tu nombre"
            value={form.name}
            onChange={(e) => setForm({...form, name: e.target.value})}
            className={errors.name ? 'border-destructive' : ''}
          />
          {errors.name && (
            <p className="text-sm text-destructive mt-1 flex items-center gap-1">
              <X className="h-3 w-3" />
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <Input
            type="email"
            placeholder="tu@email.com"
            value={form.email}
            onChange={(e) => setForm({...form, email: e.target.value})}
            className={errors.email ? 'border-destructive' : ''}
          />
          {errors.email && (
            <p className="text-sm text-destructive mt-1 flex items-center gap-1">
              <X className="h-3 w-3" />
              {errors.email}
            </p>
          )}
        </div>

        {/* Mensaje */}
        <div>
          <textarea
            placeholder="Tu mensaje..."
            value={form.message}
            onChange={(e) => setForm({...form, message: e.target.value})}
            className={`w-full p-3 rounded-lg border bg-background ${errors.message ? 'border-destructive' : 'border-border'}`}
            rows={4}
          />
          {errors.message && (
            <p className="text-sm text-destructive mt-1 flex items-center gap-1">
              <X className="h-3 w-3" />
              {errors.message}
            </p>
          )}
        </div>
      </div>

      {/* Botón Submit */}
      <Button 
        type="submit" 
        disabled={status === 'loading'}
        className="w-full"
      >
        {status === 'loading' && (
          <div className="animate-spin h-4 w-4 mr-2 border-2 border-current border-t-transparent rounded-full" />
        )}
        
        {status === 'success' ? (
          <>
            <Check className="h-4 w-4 mr-2" />
            ¡Mensaje enviado!
          </>
        ) : (
          <>
            <Send className="h-4 w-4 mr-2" />
            Enviar mensaje
          </>
        )}
      </Button>

      {/* Estado de éxito */}
      {status === 'success' && (
        <div className="text-center text-sm text-green-600 dark:text-green-400 animate-fade-in">
          ✨ Tu mensaje ha sido enviado correctamente
        </div>
      )}
    </form>
  )
}
```

---

## 🎨 CSS Custom Properties Avanzadas

### 🌈 Sistema de Colores Extendido

```css
/* styles/custom-colors.css */
:root {
  /* Colores base del portfolio */
  --portfolio-primary: #4F46E5;
  --portfolio-secondary: #EC4899;
  --portfolio-accent: #10B981;
  
  /* Gradientes personalizados */
  --gradient-main: linear-gradient(135deg, var(--portfolio-primary), var(--portfolio-secondary));
  --gradient-accent: linear-gradient(135deg, var(--portfolio-accent), var(--portfolio-primary));
  
  /* Sombras personalizadas */
  --shadow-color: 220 3% 15%;
  --shadow-strength: 1%;
}

.dark {
  --portfolio-primary: #818CF8;
  --portfolio-secondary: #F472B6; 
  --portfolio-accent: #34D399;
  --shadow-strength: 25%;
}

/* Utilidades personalizadas */
.bg-portfolio-gradient {
  background: var(--gradient-main);
}

.text-portfolio-primary {
  color: var(--portfolio-primary);
}

.shadow-portfolio {
  box-shadow: 
    0 1px 2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%)),
    0 2px 4px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%)),
    0 4px 8px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%));
}
```

---

**🎨 ¡Estos ejemplos te ayudarán a crear componentes únicos para tu portfolio!**

Combina y modifica estos patrones según tus necesidades específicas.