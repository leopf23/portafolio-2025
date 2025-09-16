import { useState } from "react"
import { SubjectValidationCard } from "./SubjectValidationCard"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { 
  Search, 
  Filter, 
  BookOpen, 
  ArrowLeft,
  CheckCircle,
  Clock,
  Users
} from "lucide-react"

// Mock data para demostración
const mockSubjects = [
  {
    id: 1,
    subjectName: "Programación Orientada a Objetos",
    subjectCode: "ING-301",
    professor: "Dr. María González",
    status: 'validated' as const,
    group: "A",
    credits: 4,
    schedule: "L-W-V 08:00-10:00",
    studentsCount: 35
  },
  {
    id: 2,
    subjectName: "Base de Datos II",
    subjectCode: "ING-401",
    professor: "Ing. Carlos Rodríguez",
    status: 'pending' as const,
    group: "B",
    credits: 3,
    schedule: "M-J 10:00-12:00",
    studentsCount: 28
  },
  {
    id: 3,
    subjectName: "Algoritmos y Estructuras de Datos",
    subjectCode: "ING-201",
    professor: "Dra. Ana Martínez",
    status: 'validated' as const,
    group: "A",
    credits: 4,
    schedule: "L-W-V 14:00-16:00",
    studentsCount: 42
  },
  {
    id: 4,
    subjectName: "Ingeniería de Software",
    subjectCode: "ING-501",
    professor: "MSc. Luis Hernández",
    status: 'pending' as const,
    group: "A",
    credits: 3,
    schedule: "M-J 16:00-18:00",
    studentsCount: 31
  },
  {
    id: 5,
    subjectName: "Redes de Computadores",
    subjectCode: "ING-402",
    professor: "Ing. Patricia Silva",
    status: 'pending' as const,
    group: "B",
    credits: 3,
    schedule: "M-W-V 10:00-12:00",
    studentsCount: 25
  },
  {
    id: 6,
    subjectName: "Inteligencia Artificial",
    subjectCode: "ING-601",
    professor: "Dr. Roberto Castillo",
    status: 'validated' as const,
    group: "A",
    credits: 4,
    schedule: "L-J 08:00-10:00",
    studentsCount: 22
  }
]

interface SubjectValidationListProps {
  careerName?: string
  onBack?: () => void
}

export function SubjectValidationList({ careerName = "Ingeniería de Sistemas", onBack }: SubjectValidationListProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [subjects, setSubjects] = useState(mockSubjects)

  // Filter subjects based on search and status
  const filteredSubjects = subjects.filter(subject => {
    const matchesSearch = subject.subjectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         subject.subjectCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         subject.professor.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = statusFilter === "all" || subject.status === statusFilter
    
    return matchesSearch && matchesStatus
  })

  const handleValidateSubject = (subjectId: number) => {
    setSubjects(prev => 
      prev.map(subject => 
        subject.id === subjectId 
          ? { ...subject, status: 'validated' as const }
          : subject
      )
    )
  }

  const handleSubjectClick = (subject: typeof mockSubjects[0]) => {
    console.log("Opening subject details:", subject)
  }

  const validatedCount = subjects.filter(s => s.status === 'validated').length
  const pendingCount = subjects.filter(s => s.status === 'pending').length
  const totalStudents = subjects.reduce((sum, s) => sum + s.studentsCount, 0)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {onBack && (
            <Button variant="outline" size="sm" onClick={onBack}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver
            </Button>
          )}
          
          <div className="space-y-1">
            <h2 className="text-xl font-medium">{careerName}</h2>
            <p className="text-sm text-muted-foreground">
              Validación de materias y horarios
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            <CheckCircle className="h-3 w-3 mr-1" />
            {validatedCount} Validadas
          </Badge>
          <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
            <Clock className="h-3 w-3 mr-1" />
            {pendingCount} Pendientes
          </Badge>
        </div>
      </div>

      {/* Summary Stats */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold text-blue-600">{subjects.length}</p>
                <p className="text-sm text-muted-foreground">Total Materias</p>
              </div>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold text-green-600">{validatedCount}</p>
                <p className="text-sm text-muted-foreground">Validadas</p>
              </div>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold text-orange-600">{pendingCount}</p>
                <p className="text-sm text-muted-foreground">Pendientes</p>
              </div>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold text-purple-600">{totalStudents}</p>
                <p className="text-sm text-muted-foreground">Estudiantes</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Buscar por materia, código o profesor..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="validated">Validadas</SelectItem>
                  <SelectItem value="pending">Pendientes</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Info */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Mostrando {filteredSubjects.length} de {subjects.length} materias
        </p>
        
        {pendingCount > 0 && (
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => {
              // Validate all pending subjects
              setSubjects(prev => 
                prev.map(subject => ({ ...subject, status: 'validated' as const }))
              )
            }}
            className="bg-green-50 hover:bg-green-100 text-green-700 border-green-200"
          >
            <CheckCircle className="h-4 w-4 mr-2" />
            Validar Todas
          </Button>
        )}
      </div>

      {/* Subjects List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filteredSubjects.length === 0 ? (
          <div className="col-span-full">
            <Card>
              <CardContent className="p-8 text-center">
                <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">No se encontraron materias</h3>
                <p className="text-sm text-muted-foreground">
                  Intenta ajustar los filtros de búsqueda
                </p>
              </CardContent>
            </Card>
          </div>
        ) : (
          filteredSubjects.map((subject) => (
            <SubjectValidationCard
              key={subject.id}
              subjectName={subject.subjectName}
              subjectCode={subject.subjectCode}
              professor={subject.professor}
              status={subject.status}
              group={subject.group}
              credits={subject.credits}
              schedule={subject.schedule}
              studentsCount={subject.studentsCount}
              onClick={() => handleSubjectClick(subject)}
              onValidate={() => handleValidateSubject(subject.id)}
            />
          ))
        )}
      </div>
    </div>
  )
}