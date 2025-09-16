# 🏗️ Estructura Atomic Design - Portfolio Leonardo Pérez

## 📁 Nueva Organización de Componentes

```
components/
├── 🔬 atoms/                          # Elementos básicos (ShadCN/UI)
│   ├── index.ts                       # Re-exports organizados
│   ├── button.tsx                     # → Re-export ui/button
│   ├── card.tsx                       # → Re-export ui/card  
│   ├── badge.tsx                      # → Re-export ui/badge
│   ├── input.tsx                      # → Re-export ui/input
│   ├── select.tsx                     # → Re-export ui/select
│   ├── table.tsx                      # → Re-export ui/table
│   ├── dropdown-menu.tsx              # → Re-export ui/dropdown-menu
│   ├── avatar.tsx                     # → Re-export ui/avatar
│   ├── switch.tsx                     # → Re-export ui/switch
│   └── checkbox.tsx                   # → Re-export ui/checkbox
│
├── 🧬 molecules/                      # Combinaciones simples (2-3 átomos)
│   ├── index.ts                       # Exports centralizados
│   ├── ThemeToggle.tsx                # Button + Icon + Logic
│   └── ImageWithFallback.tsx          # Image + Fallback Logic
│
├── 🦠 organisms/                      # Secciones complejas
│   ├── index.ts                       # Exports centralizados
│   ├── PortfolioUnified.tsx           # Portfolio principal
│   ├── PortfolioOriginal.tsx          # Versión alternativa
│   ├── HeroPanel.tsx                  # Panel hero con stats
│   └── Navigation.tsx                 # Navegación completa
│
├── 📁 ui/                             # ShadCN/UI originales (mantenidos)
│   ├── button.tsx                     # Componente base
│   ├── card.tsx                       # Componente base
│   └── ... (todos los componentes UI)
│
├── 📁 figma/                          # Utilidades especiales
│   └── ImageWithFallback.tsx          # → Movido a molecules/
│
├── index.ts                           # Export principal
└── [Legacy Components]                # Por migrar gradualmente
```

---

## 🔄 Migración Realizada

### ✅ Completado

| Componente | Antes | Después | Tipo |
|------------|-------|---------|------|
| **ThemeToggle** | `/components/` | `/molecules/` | 🧬 Molécula |
| **ImageWithFallback** | `/figma/` | `/molecules/` | 🧬 Molécula |  
| **PortfolioUnified** | `/components/` | `/organisms/` | 🦠 Organismo |
| **PortfolioOriginal** | `/components/` | `/organisms/` | 🦠 Organismo |
| **HeroPanel** | `/components/` | `/organisms/` | 🦠 Organismo |
| **Navigation** | `/components/` | `/organisms/` | 🦠 Organismo |

### 🔬 Sistema de Átomos

Los **átomos** mantienen su ubicación en `/ui/` (convención ShadCN) pero ahora tienen **re-exports** organizados en `/atoms/` para seguir la metodología:

```tsx
// components/atoms/button.tsx
export * from "../ui/button"

// components/atoms/index.ts  
export * from "./button"
export * from "./card"
// ... todos los átomos disponibles
```

---

## 📖 Guía de Uso

### 🚀 Importaciones Recomendadas

```tsx
// ✅ RECOMENDADO: Import desde niveles atómicos
import { Button, Card, Badge } from "../atoms"
import { ThemeToggle, ImageWithFallback } from "../molecules"  
import { PortfolioUnified, Navigation } from "../organisms"

// ✅ ALTERNATIVO: Import desde index principal
import { 
  Button, 
  Card, 
  ThemeToggle, 
  PortfolioUnified 
} from "../components"

// ❌ EVITAR: Imports directos sin estructura
import { Button } from "../components/ui/button"
import { ThemeToggle } from "../components/ThemeToggle"
```

### 🎯 Ejemplos de Uso

#### 🧬 Creando una Nueva Molécula

```tsx
// components/molecules/SocialButton.tsx
import { Button } from "../atoms"
import { Github, Linkedin } from "lucide-react"

export function SocialButton({ platform, url }) {
  const icons = {
    github: Github,
    linkedin: Linkedin
  }
  
  const Icon = icons[platform]
  
  return (
    <Button variant="ghost" size="sm" onClick={() => window.open(url)}>
      <Icon className="h-4 w-4" />
    </Button>
  )
}

// Agregar al index
// components/molecules/index.ts
export { SocialButton } from "./SocialButton"
```

#### 🦠 Creando un Nuevo Organismo

```tsx
// components/organisms/ContactSection.tsx
import { Card, CardHeader, CardTitle, CardContent, Button } from "../atoms"
import { ImageWithFallback } from "../molecules"

export function ContactSection() {
  return (
    <section className="py-16">
      <Card className="glass-effect">
        <CardHeader>
          <CardTitle>Contact Me</CardTitle>
        </CardHeader>
        <CardContent>
          <Button>Send Message</Button>
        </CardContent>
      </Card>
    </section>
  )
}

// Agregar al index
// components/organisms/index.ts
export { ContactSection } from "./ContactSection"
```

---

## 🎨 Patrones de Diseño

### 🔗 Composición Recomendada

```
🔬 ÁTOMO (Button)
      ↓ used in
🧬 MOLÉCULA (ThemeToggle)  
      ↓ used in
🦠 ORGANISMO (Navigation)
      ↓ used in  
📱 PÁGINA (App.tsx)
```

### 📦 Re-exports Inteligentes

```tsx
// components/atoms/index.ts
// Re-exporta SOLO los átomos más usados para rendimiento
export { Button } from "./button"
export { Card, CardContent, CardHeader, CardTitle } from "./card"
export { Badge } from "./badge"
export { Input } from "./input"

// El resto disponible via import directo cuando sea necesario
export * from "../ui/accordion"
export * from "../ui/alert"
// ...
```

---

## 🚀 Beneficios de la Nueva Estructura

### ✅ Ventajas

- **🎯 Claridad**: Fácil identificar el nivel de complejidad
- **🔄 Reutilización**: Componentes organizados por responsabilidad  
- **📚 Mantenibilidad**: Cambios aislados por nivel atómico
- **🧪 Testing**: Tests específicos por tipo de componente
- **📖 Documentación**: Estructura autodocumentada
- **🎨 Design System**: Metodología profesional

### 🔧 Migración Gradual

Los componentes legacy permanecen disponibles durante la transición:

```tsx
// Siguen funcionando durante la migración
import { EntriesTable } from "../components"
import { StudentSearch } from "../components"

// Se moveran gradualmente a:
// organisms/EntriesTable.tsx
// organisms/StudentSearch.tsx
```

---

## 📋 Roadmap de Migración

### 🎯 Próximos Pasos

1. **📊 Migrar Organismos Restantes**
   - [ ] EntriesTable → `organisms/`
   - [ ] QuotaRequestModule → `organisms/`
   - [ ] ScheduleValidationSection → `organisms/`
   - [ ] StudentSearch → `organisms/`
   - [ ] SummaryCards → `organisms/`

2. **🧬 Identificar Nuevas Moléculas**
   - [ ] Extraer submódulos de organismos complejos
   - [ ] Crear moléculas específicas del dominio

3. **🔬 Optimizar Átomos**
   - [ ] Revisar re-exports innecesarios
   - [ ] Agregar átomos personalizados si es necesario

4. **📚 Documentación**
   - [ ] Crear Storybook para cada nivel atómico
   - [ ] Documentar patrones de composición
   - [ ] Guías de contributing

---

## 💡 Best Practices

### 🎨 Nomenclatura

```tsx
// ✅ CORRECTO
Button          // Átomo
ThemeToggle     // Molécula  
Navigation      // Organismo
PortfolioUnified // Organismo (página completa)

// ❌ EVITAR
ButtonComponent
ToggleThemeMolecule
NavigationOrganism
```

### 📁 Organización de Archivos

```tsx
// ✅ Un componente por archivo
ThemeToggle.tsx

// ✅ Index para exports
index.ts

// ✅ Tests junto al componente  
ThemeToggle.test.tsx

// ✅ Stories para Storybook
ThemeToggle.stories.tsx
```

### 🔄 Props Flow

```tsx
// ✅ Props fluyen hacia abajo, eventos hacia arriba
<Organismo 
  data={orgData}
  onAction={handleAction}
>
  <Molécula 
    item={molData}
    onClick={handleMol}
  >
    <Átomo 
      variant="primary"
      onClick={handleAtom}
    />
  </Molécula>
</Organismo>
```

---

**🎯 Esta estructura garantiza escalabilidad, mantenibilidad y claridad en el Portfolio Leonardo Pérez.**

La metodología Atomic Design permite que el proyecto crezca de manera organizada y profesional.