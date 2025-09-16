import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Badge } from "./ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "./ui/dropdown-menu"
import { Search, Filter, Users, GraduationCap, IdCard, User, Mail, Phone } from "lucide-react"

interface Student {
  id: string
  matricula: string
  nombre: string
  nombreCompleto: string
  carrera: string
  semestre: number
  email: string
  telefono: string
  estado: "activo" | "inactivo" | "graduado"
  promedio: number
}

const mockStudents: Student[] = [
  {
    id: "STU-001",
    matricula: "2021001",
    nombre: "Ana",
    nombreCompleto: "Ana María García López",
    carrera: "Ingeniería en Sistemas",
    semestre: 6,
    email: "ana.garcia@universidad.edu",
    telefono: "+52 555 123 4567",
    estado: "activo",
    promedio: 8.7
  },
  {
    id: "STU-002", 
    matricula: "2020145",
    nombre: "Carlos",
    nombreCompleto: "Carlos Eduardo Mendoza Silva",
    carrera: "Ingeniería Industrial",
    semestre: 8,
    email: "carlos.mendoza@universidad.edu",
    telefono: "+52 555 234 5678",
    estado: "activo",
    promedio: 9.2
  },
  {
    id: "STU-003",
    matricula: "2021078",
    nombre: "María",
    nombreCompleto: "María José Rodríguez Herrera",
    carrera: "Administración de Empresas",
    semestre: 5,
    email: "maria.rodriguez@universidad.edu", 
    telefono: "+52 555 345 6789",
    estado: "activo",
    promedio: 8.9
  },
  {
    id: "STU-004",
    matricula: "2019234",
    nombre: "Luis",
    nombreCompleto: "Luis Fernando Castro Pérez",
    carrera: "Arquitectura",
    semestre: 9,
    email: "luis.castro@universidad.edu",
    telefono: "+52 555 456 7890",
    estado: "activo",
    promedio: 8.4
  },
  {
    id: "STU-005",
    matricula: "2020089",
    nombre: "Sofía",
    nombreCompleto: "Sofía Isabel Morales Jiménez",
    carrera: "Psicología",
    semestre: 7,
    email: "sofia.morales@universidad.edu",
    telefono: "+52 555 567 8901",
    estado: "inactivo",
    promedio: 9.1
  },
  {
    id: "STU-006",
    matricula: "2018156",
    nombre: "Diego",
    nombreCompleto: "Diego Alejandro Vargas Torres",
    carrera: "Ingeniería Civil",
    semestre: 10,
    email: "diego.vargas@universidad.edu",
    telefono: "+52 555 678 9012",
    estado: "graduado",
    promedio: 8.8
  },
  {
    id: "STU-007",
    matricula: "2021167",
    nombre: "Isabella",
    nombreCompleto: "Isabella Fernanda Ruiz Aguilar",
    carrera: "Diseño Gráfico",
    semestre: 4,
    email: "isabella.ruiz@universidad.edu",
    telefono: "+52 555 789 0123",
    estado: "activo",
    promedio: 9.5
  },
  {
    id: "STU-008",
    matricula: "2020098",
    nombre: "Andrés",
    nombreCompleto: "Andrés Gabriel López Martín",
    carrera: "Medicina",
    semestre: 6,
    email: "andres.lopez@universidad.edu",
    telefono: "+52 555 890 1234",
    estado: "activo",
    promedio: 9.0
  }
]

type SearchType = "all" | "nombre" | "id" | "matricula"

export function StudentSearch() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchType, setSearchType] = useState<SearchType>("all")
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = () => {
    if (searchTerm.trim()) {
      setIsSearching(true)
      // Simulate API call delay
      setTimeout(() => setIsSearching(false), 500)
    }
  }

  const filteredStudents = mockStudents.filter(student => {
    if (!searchTerm.trim()) return true
    
    const term = searchTerm.toLowerCase()
    
    switch (searchType) {
      case "nombre":
        return student.nombre.toLowerCase().includes(term) || 
               student.nombreCompleto.toLowerCase().includes(term)
      case "id":
        return student.id.toLowerCase().includes(term)
      case "matricula":
        return student.matricula.includes(term)
      default:
        return student.nombre.toLowerCase().includes(term) ||
               student.nombreCompleto.toLowerCase().includes(term) ||
               student.id.toLowerCase().includes(term) ||
               student.matricula.includes(term) ||
               student.carrera.toLowerCase().includes(term)
    }
  })

  const getStatusBadge = (estado: Student["estado"]) => {
    const variants = {
      activo: "default",
      inactivo: "secondary", 
      graduado: "outline"
    } as const

    const colors = {
      activo: "bg-green-100 text-green-800 border-green-200",
      inactivo: "bg-yellow-100 text-yellow-800 border-yellow-200",
      graduado: "bg-blue-100 text-blue-800 border-blue-200"
    }

    const labels = {
      activo: "Activo",
      inactivo: "Inactivo", 
      graduado: "Graduado"
    }

    return (
      <Badge variant="outline" className={colors[estado]}>
        {labels[estado]}
      </Badge>
    )
  }

  const getSearchTypeLabel = (type: SearchType) => {
    const labels = {
      all: "Buscar en todo",
      nombre: "Por nombre",
      id: "Por ID",
      matricula: "Por matrícula"
    }
    return labels[type]
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .slice(0, 2)
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
          <Users className="h-8 w-8 text-primary" />
        </div>
        <h1>Búsqueda de Cupo Estudiantil</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Encuentra estudiantes por nombre, ID o número de matrícula. Utiliza los filtros para refinar tu búsqueda.
        </p>
      </div>

      {/* Search Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Search className="h-5 w-5" />
            <span>Buscador de Estudiantes</span>
          </CardTitle>
          <CardDescription>
            Ingresa los datos del estudiante que deseas encontrar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Buscar estudiante..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="min-w-[160px] justify-between">
                  <div className="flex items-center">
                    <Filter className="mr-2 h-4 w-4" />
                    {getSearchTypeLabel(searchType)}
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => setSearchType("all")}>
                  <Search className="mr-2 h-4 w-4" />
                  Buscar en todo
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setSearchType("nombre")}>
                  <User className="mr-2 h-4 w-4" />
                  Por nombre
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSearchType("id")}>
                  <IdCard className="mr-2 h-4 w-4" />
                  Por ID
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSearchType("matricula")}>
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Por matrícula
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button onClick={handleSearch} disabled={isSearching || !searchTerm.trim()}>
              {isSearching ? "Buscando..." : "Buscar"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="space-y-6">
        {/* Results Header */}
        {searchTerm && (
          <div className="flex items-center justify-between">
            <div>
              <h2>Resultados de Búsqueda</h2>
              <p className="text-muted-foreground">
                {filteredStudents.length} estudiante{filteredStudents.length !== 1 ? 's' : ''} encontrado{filteredStudents.length !== 1 ? 's' : ''}
                {searchTerm && ` para "${searchTerm}"`}
              </p>
            </div>
            <Badge variant="outline">
              {getSearchTypeLabel(searchType)}
            </Badge>
          </div>
        )}

        {/* Results Grid */}
        {searchTerm ? (
          filteredStudents.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredStudents.map((student) => (
                <Card key={student.id} className="hover:shadow-lg transition-all duration-200 cursor-pointer group">
                  <CardHeader className="pb-4">
                    <div className="flex items-start space-x-4">
                      <Avatar className="w-12 h-12 group-hover:scale-105 transition-transform">
                        <AvatarImage src={`https://images.unsplash.com/photo-150729173${Math.floor(Math.random() * 100)}?w=64&h=64&fit=crop&crop=face`} />
                        <AvatarFallback className="bg-primary/10 text-primary font-medium">
                          {getInitials(student.nombreCompleto)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold truncate">{student.nombre}</h3>
                            <p className="text-sm text-muted-foreground truncate">{student.nombreCompleto}</p>
                          </div>
                          {getStatusBadge(student.estado)}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-4">
                    {/* Student Details */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                          <IdCard className="h-4 w-4 text-blue-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium">ID: {student.id}</p>
                          <p className="text-xs text-muted-foreground">Matrícula: {student.matricula}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center">
                          <GraduationCap className="h-4 w-4 text-purple-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{student.carrera}</p>
                          <p className="text-xs text-muted-foreground">
                            {student.semestre}° Semestre • Promedio: {student.promedio}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
                          <Mail className="h-4 w-4 text-green-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{student.email}</p>
                          <p className="text-xs text-muted-foreground">{student.telefono}</p>
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="pt-2">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-muted-foreground">Progreso Académico</span>
                        <span className="text-xs font-medium">{Math.round((student.semestre / 10) * 100)}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(student.semestre / 10) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <div className="w-16 h-16 bg-muted/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3>No se encontraron resultados</h3>
                <p className="text-muted-foreground mt-2">
                  No hay estudiantes que coincidan con tu búsqueda "{searchTerm}"
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setSearchTerm("")}
                  className="mt-4"
                >
                  Limpiar búsqueda
                </Button>
              </CardContent>
            </Card>
          )
        ) : (
          <Card>
            <CardContent className="text-center py-12">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3>Comienza tu búsqueda</h3>
              <p className="text-muted-foreground mt-2 max-w-md mx-auto">
                Ingresa el nombre, ID o matrícula del estudiante para comenzar a buscar
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}