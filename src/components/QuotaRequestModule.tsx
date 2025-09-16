import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Badge } from "./ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Separator } from "./ui/separator"
import { 
  Search, 
  Plus, 
  Calendar, 
  Users, 
  BookOpen, 
  GraduationCap,
  User,
  Clock,
  CreditCard,
  CheckCircle,
  AlertCircle,
  FileText,
  ArrowRight,
  ArrowLeft,
  Home
} from "lucide-react"

interface PendingRequest {
  id: string
  year: number
  period: string
  group: string
  subject: string
  subjectCode: string
  instructor: string
  availableQuotas: number
  totalQuotas: number
  schedule: string
  priority: "alta" | "media" | "baja"
}

interface Student {
  id: string
  matricula: string
  nombre: string
  nombreCompleto: string
  carrera: string
  semestre: number
  selectedCredits: number
  extraCredits: number
  period: string
  email: string
  phone: string
  status: "activo" | "inactivo"
  promedio: number
  enrolledSubjects: EnrolledSubject[]
}

interface EnrolledSubject {
  code: string
  name: string
  group: string
  schedule: string
  credits: number
  status: "confirmada" | "pendiente"
}

interface QuotaAssignment {
  id: string
  subjectCode: string
  subjectName: string
  group: string
  schedule: string
  instructor: string
  credits: number
  availableQuotas: number
  conflictsWith?: string[]
}

const mockPendingRequests: PendingRequest[] = [
  {
    id: "REQ-001",
    year: 2024,
    period: "2024-2",
    group: "A1",
    subject: "Cálculo Diferencial",
    subjectCode: "MAT-101",
    instructor: "Dr. García López",
    availableQuotas: 5,
    totalQuotas: 30,
    schedule: "L-W-V 08:00-10:00",
    priority: "alta"
  },
  {
    id: "REQ-002", 
    year: 2024,
    period: "2024-2",
    group: "B2",
    subject: "Programación I",
    subjectCode: "SIS-201",
    instructor: "Ing. Martínez Silva",
    availableQuotas: 3,
    totalQuotas: 25,
    schedule: "M-J 14:00-16:00",
    priority: "media"
  },
  {
    id: "REQ-003",
    year: 2024,
    period: "2024-2", 
    group: "C1",
    subject: "Física General",
    subjectCode: "FIS-101",
    instructor: "Dra. Rodríguez Pérez",
    availableQuotas: 8,
    totalQuotas: 35,
    schedule: "L-M-V 10:00-12:00",
    priority: "baja"
  },
  {
    id: "REQ-004",
    year: 2024,
    period: "2024-2",
    group: "A2", 
    subject: "Química Orgánica",
    subjectCode: "QUI-301",
    instructor: "Dr. Hernández Torres",
    availableQuotas: 2,
    totalQuotas: 20,
    schedule: "M-W-V 16:00-18:00", 
    priority: "alta"
  }
]

const mockStudents: Student[] = [
  {
    id: "STU-001",
    matricula: "2021001", 
    nombre: "Ana García",
    nombreCompleto: "Ana María García López",
    carrera: "Ingeniería en Sistemas",
    semestre: 6,
    selectedCredits: 18,
    extraCredits: 6,
    period: "2024-2",
    email: "ana.garcia@universidad.edu",
    phone: "+52 555 123 4567",
    status: "activo",
    promedio: 8.7,
    enrolledSubjects: [
      { code: "SIS-301", name: "Base de Datos", group: "A1", schedule: "L-W 10:00-12:00", credits: 6, status: "confirmada" },
      { code: "SIS-302", name: "Redes", group: "B1", schedule: "M-J 14:00-16:00", credits: 6, status: "confirmada" },
      { code: "MAT-201", name: "Estadística", group: "C1", schedule: "V 08:00-12:00", credits: 6, status: "pendiente" }
    ]
  },
  {
    id: "STU-002",
    matricula: "2020145",
    nombre: "Carlos Mendoza", 
    nombreCompleto: "Carlos Eduardo Mendoza Silva",
    carrera: "Ingeniería Industrial",
    semestre: 8,
    selectedCredits: 15,
    extraCredits: 9,
    period: "2024-2",
    email: "carlos.mendoza@universidad.edu",
    phone: "+52 555 234 5678",
    status: "activo",
    promedio: 9.2,
    enrolledSubjects: [
      { code: "IND-401", name: "Proyectos", group: "A1", schedule: "L-M-W 08:00-10:00", credits: 9, status: "confirmada" },
      { code: "IND-402", name: "Calidad", group: "B1", schedule: "J-V 10:00-12:00", credits: 6, status: "confirmada" }
    ]
  }
]

const mockQuotaAssignments: QuotaAssignment[] = [
  {
    id: "QA-001",
    subjectCode: "MAT-101",
    subjectName: "Cálculo Diferencial", 
    group: "A1",
    schedule: "L-W-V 08:00-10:00",
    instructor: "Dr. García López",
    credits: 6,
    availableQuotas: 5,
    conflictsWith: ["SIS-301"]
  },
  {
    id: "QA-002",
    subjectCode: "SIS-201", 
    subjectName: "Programación I",
    group: "B2",
    schedule: "M-J 14:00-16:00",
    instructor: "Ing. Martínez Silva",
    credits: 6,
    availableQuotas: 3,
    conflictsWith: ["SIS-302"]
  },
  {
    id: "QA-003",
    subjectCode: "FIS-101",
    subjectName: "Física General",
    group: "C1", 
    schedule: "L-M-V 10:00-12:00",
    instructor: "Dra. Rodríguez Pérez",
    credits: 8,
    availableQuotas: 8
  }
]

type ViewState = "main" | "student-search" | "quota-assignment"

export function QuotaRequestModule() {
  const [currentView, setCurrentView] = useState<ViewState>("main")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null)
  const [selectedPeriod, setSelectedPeriod] = useState("2024-2")
  const [studentSearchTerm, setStudentSearchTerm] = useState("")
  const [assignedQuotas, setAssignedQuotas] = useState<QuotaAssignment[]>([])
  const [availableQuotas, setAvailableQuotas] = useState<QuotaAssignment[]>(mockQuotaAssignments)

  const filteredRequests = mockPendingRequests.filter(request => {
    if (!searchTerm.trim()) return true
    const term = searchTerm.toLowerCase()
    return (
      request.subject.toLowerCase().includes(term) ||
      request.subjectCode.toLowerCase().includes(term) ||
      request.instructor.toLowerCase().includes(term) ||
      request.group.toLowerCase().includes(term)
    )
  })

  const filteredStudents = mockStudents.filter(student => {
    if (!studentSearchTerm.trim()) return true
    const term = studentSearchTerm.toLowerCase()
    return (
      student.nombre.toLowerCase().includes(term) ||
      student.matricula.includes(term) ||
      student.carrera.toLowerCase().includes(term)
    )
  })

  const getPriorityBadge = (priority: PendingRequest["priority"]) => {
    const variants = {
      alta: "bg-red-100 text-red-800 border-red-200",
      media: "bg-yellow-100 text-yellow-800 border-yellow-200", 
      baja: "bg-green-100 text-green-800 border-green-200"
    }

    const labels = {
      alta: "Alta",
      media: "Media",
      baja: "Baja"
    }

    return (
      <Badge variant="outline" className={variants[priority]}>
        {labels[priority]}
      </Badge>
    )
  }

  const getAvailabilityBadge = (available: number, total: number) => {
    const percentage = (available / total) * 100
    let variant = "bg-green-100 text-green-800 border-green-200"
    
    if (percentage < 20) variant = "bg-red-100 text-red-800 border-red-200"
    else if (percentage < 50) variant = "bg-yellow-100 text-yellow-800 border-yellow-200"

    return (
      <Badge variant="outline" className={variant}>
        {available}/{total} cupos
      </Badge>
    )
  }

  const handleStudentSelect = (student: Student) => {
    setSelectedStudent(student)
    setCurrentView("quota-assignment")
  }

  const handleQuotaAssignment = (assignment: QuotaAssignment) => {
    // Move quota from available to assigned
    setAvailableQuotas(prev => prev.filter(q => q.id !== assignment.id))
    setAssignedQuotas(prev => [...prev, assignment])
    console.log("Assigning quota:", assignment, "to student:", selectedStudent)
  }

  const handleRemoveQuota = (assignment: QuotaAssignment) => {
    // Move quota from assigned back to available
    setAssignedQuotas(prev => prev.filter(q => q.id !== assignment.id))
    setAvailableQuotas(prev => [...prev, assignment])
  }

  const handleBackToMain = () => {
    setCurrentView("main")
    setSelectedStudent(null)
    setStudentSearchTerm("")
  }

  const handleBackToStudentSearch = () => {
    setCurrentView("student-search")
    setSelectedStudent(null)
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .slice(0, 2)
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
  }

  const hasScheduleConflict = (assignment: QuotaAssignment, student: Student) => {
    // Check conflicts with enrolled subjects
    const enrolledConflict = student.enrolledSubjects.some(subject => 
      assignment.conflictsWith?.includes(subject.code)
    )
    
    // Check conflicts with already assigned quotas
    const assignedConflict = assignedQuotas.some(assigned => 
      assigned.conflictsWith?.includes(assignment.subjectCode) ||
      assignment.conflictsWith?.includes(assigned.subjectCode) ||
      assigned.schedule === assignment.schedule
    )
    
    return enrolledConflict || assignedConflict
  }

  // Render Main View
  const renderMainView = () => (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <h1>Gestión de Solicitudes de Cupo</h1>
          </div>
          <p className="text-muted-foreground">
            Administra las solicitudes pendientes y asigna cupos a estudiantes
          </p>
        </div>

        <Button 
          className="flex items-center space-x-2"
          onClick={() => setCurrentView("student-search")}
        >
          <Plus className="h-4 w-4" />
          <span>Solicitar Cupo</span>
        </Button>
      </div>

      {/* Search Bar */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Search className="h-5 w-5" />
            <span>Buscar Solicitudes Pendientes</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <Input
                placeholder="Buscar por materia, código, instructor o grupo..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select defaultValue="2024-2">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Período académico" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024-1">2024-1</SelectItem>
                <SelectItem value="2024-2">2024-2</SelectItem>
                <SelectItem value="2025-1">2025-1</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Pending Requests Table */}
      <Card>
        <CardHeader>
          <CardTitle>Solicitudes Pendientes</CardTitle>
          <CardDescription>
            {filteredRequests.length} solicitud{filteredRequests.length !== 1 ? 'es' : ''} pendiente{filteredRequests.length !== 1 ? 's' : ''}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Año</TableHead>
                  <TableHead>Período</TableHead>
                  <TableHead>Grupo</TableHead>
                  <TableHead>Asignatura</TableHead>
                  <TableHead>Instructor</TableHead>
                  <TableHead>Horario</TableHead>
                  <TableHead>Cupos</TableHead>
                  <TableHead>Prioridad</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRequests.map((request) => (
                  <TableRow key={request.id} className="hover:bg-muted/50">
                    <TableCell>{request.year}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{request.period}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">{request.group}</Badge>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{request.subject}</p>
                        <p className="text-sm text-muted-foreground">{request.subjectCode}</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">{request.instructor}</TableCell>
                    <TableCell className="text-sm">{request.schedule}</TableCell>
                    <TableCell>
                      {getAvailabilityBadge(request.availableQuotas, request.totalQuotas)}
                    </TableCell>
                    <TableCell>{getPriorityBadge(request.priority)}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm">
                        Ver Detalles
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  // Render Student Search View
  const renderStudentSearchView = () => (
    <div className="space-y-8">
      {/* Header with Back Button */}
      <div className="flex items-center space-x-4">
        <Button 
          variant="outline" 
          onClick={handleBackToMain}
          className="flex items-center space-x-2"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Volver</span>
        </Button>
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <h1>Seleccionar Estudiante</h1>
          </div>
          <p className="text-muted-foreground">
            Busca y selecciona el estudiante al que deseas asignar un cupo
          </p>
        </div>
      </div>

      {/* Student Search */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Search className="h-5 w-5" />
            <span>Buscar Estudiante</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Buscar estudiante por nombre o matrícula..."
                  value={studentSearchTerm}
                  onChange={(e) => setStudentSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Período" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024-1">2024-1</SelectItem>
                <SelectItem value="2024-2">2024-2</SelectItem>
                <SelectItem value="2025-1">2025-1</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Students Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredStudents.map((student) => (
          <Card 
            key={student.id} 
            className="cursor-pointer hover:shadow-lg transition-all duration-200 group"
            onClick={() => handleStudentSelect(student)}
          >
            <CardHeader className="pb-4">
              <div className="flex items-start space-x-4">
                <Avatar className="w-12 h-12 group-hover:scale-105 transition-transform">
                  <AvatarImage src={`https://images.unsplash.com/photo-150729173${Math.floor(Math.random() * 100)}?w=64&h=64&fit=crop&crop=face`} />
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {getInitials(student.nombreCompleto)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <h4 className="truncate">{student.nombre}</h4>
                  <p className="text-sm text-muted-foreground truncate">
                    {student.nombreCompleto}
                  </p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge variant="outline" className="text-xs">
                      {student.matricula}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {student.semestre}° Sem
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0 space-y-3">
              <div className="text-sm text-muted-foreground">
                <p>{student.carrera}</p>
                <p>Período: {student.period}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-2 bg-blue-50 rounded-lg">
                  <p className="text-xs text-muted-foreground">Créditos Seleccionados</p>
                  <p className="font-medium text-blue-600">{student.selectedCredits}</p>
                </div>
                <div className="text-center p-2 bg-purple-50 rounded-lg">
                  <p className="text-xs text-muted-foreground">Créditos Extra</p>
                  <p className="font-medium text-purple-600">{student.extraCredits}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  // Render Quota Assignment View
  const renderQuotaAssignmentView = () => (
    <div className="space-y-8">
      {/* Header with Back Button */}
      <div className="flex items-center space-x-4">
        <Button 
          variant="outline" 
          onClick={handleBackToStudentSearch}
          className="flex items-center space-x-2"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Estudiantes</span>
        </Button>
        <Button 
          variant="outline" 
          onClick={handleBackToMain}
          className="flex items-center space-x-2"
        >
          <Home className="h-4 w-4" />
          <span>Inicio</span>
        </Button>
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <CreditCard className="h-5 w-5 text-primary" />
            </div>
            <h1>Asignar Cupo - {selectedStudent?.nombre}</h1>
          </div>
          <p className="text-muted-foreground">
            Selecciona la materia y grupo para asignar al estudiante
          </p>
        </div>
      </div>

      {selectedStudent && (
        <>
          {/* Student Info Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Información del Estudiante</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={`https://images.unsplash.com/photo-150729173${Math.floor(Math.random() * 100)}?w=64&h=64&fit=crop&crop=face`} />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {getInitials(selectedStudent.nombreCompleto)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{selectedStudent.nombre}</p>
                    <p className="text-sm text-muted-foreground">{selectedStudent.matricula}</p>
                  </div>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-muted-foreground">Créditos Actuales</p>
                  <p className="font-medium text-blue-600">{selectedStudent.selectedCredits}</p>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-muted-foreground">Créditos Extra</p>
                  <p className="font-medium text-green-600">{selectedStudent.extraCredits}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Available Quotas Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-blue-600" />
                  </div>
                  <h3>Cupos Disponibles</h3>
                </div>
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  {availableQuotas.length} disponibles
                </Badge>
              </div>
              
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {availableQuotas.length === 0 ? (
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-muted/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <BookOpen className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <p className="text-muted-foreground">No hay cupos disponibles</p>
                    </CardContent>
                  </Card>
                ) : (
                  availableQuotas.map((assignment) => {
                    const hasConflict = hasScheduleConflict(assignment, selectedStudent)
                    
                    return (
                      <Card 
                        key={assignment.id} 
                        className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                          hasConflict ? 'border-red-200 bg-red-50/50' : 'hover:border-primary/50'
                        }`}
                        onClick={() => !hasConflict && handleQuotaAssignment(assignment)}
                      >
                        <CardContent className="p-4">
                          <div className="space-y-3">
                            <div className="flex items-start justify-between">
                              <div className="flex items-center space-x-3">
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                  hasConflict ? 'bg-red-100' : 'bg-primary/10'
                                }`}>
                                  <BookOpen className={`h-4 w-4 ${
                                    hasConflict ? 'text-red-600' : 'text-primary'
                                  }`} />
                                </div>
                                <div className="min-w-0">
                                  <h4 className="font-medium truncate">{assignment.subjectName}</h4>
                                  <p className="text-sm text-muted-foreground">
                                    {assignment.subjectCode} - Grupo {assignment.group}
                                  </p>
                                </div>
                              </div>
                              
                              <div className="ml-2">
                                {hasConflict ? (
                                  <Badge variant="outline" className="bg-red-100 text-red-800 border-red-200 text-xs">
                                    Conflicto
                                  </Badge>
                                ) : (
                                  <Button variant="outline" size="sm">
                                    <Plus className="h-3 w-3" />
                                  </Button>
                                )}
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div className="flex items-center space-x-1">
                                <Clock className="h-3 w-3 text-muted-foreground" />
                                <span className="truncate">{assignment.schedule}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <GraduationCap className="h-3 w-3 text-muted-foreground" />
                                <span>{assignment.credits} créditos</span>
                              </div>
                            </div>
                            
                            <div className="text-xs text-muted-foreground truncate">
                              {assignment.instructor}
                            </div>

                            {hasConflict && (
                              <div className="flex items-center space-x-2 p-2 bg-red-100 rounded-lg">
                                <AlertCircle className="h-3 w-3 text-red-600" />
                                <p className="text-xs text-red-700">
                                  Conflicto de horario
                                </p>
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })
                )}
              </div>
            </div>

            {/* Assigned Quotas Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <h3>Cupos Asignados</h3>
                </div>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  {assignedQuotas.length} asignados
                </Badge>
              </div>
              
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {assignedQuotas.length === 0 ? (
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-muted/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <CheckCircle className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <p className="text-muted-foreground">No hay cupos asignados</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Selecciona cupos de la lista izquierda
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  assignedQuotas.map((assignment) => (
                    <Card 
                      key={assignment.id} 
                      className="border-green-200 bg-green-50/50"
                    >
                      <CardContent className="p-4">
                        <div className="space-y-3">
                          <div className="flex items-start justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                              </div>
                              <div className="min-w-0">
                                <h4 className="font-medium truncate">{assignment.subjectName}</h4>
                                <p className="text-sm text-muted-foreground">
                                  {assignment.subjectCode} - Grupo {assignment.group}
                                </p>
                              </div>
                            </div>
                            
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleRemoveQuota(assignment)}
                              className="text-red-600 hover:text-red-700 hover:bg-red-50"
                            >
                              <AlertCircle className="h-3 w-3" />
                            </Button>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="flex items-center space-x-1">
                              <Clock className="h-3 w-3 text-muted-foreground" />
                              <span className="truncate">{assignment.schedule}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <GraduationCap className="h-3 w-3 text-muted-foreground" />
                              <span>{assignment.credits} créditos</span>
                            </div>
                          </div>
                          
                          <div className="text-xs text-muted-foreground truncate">
                            {assignment.instructor}
                          </div>

                          <div className="flex items-center space-x-2 p-2 bg-green-100 rounded-lg">
                            <CheckCircle className="h-3 w-3 text-green-600" />
                            <p className="text-xs text-green-700">
                              Cupo asignado correctamente
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>

              {/* Summary */}
              {assignedQuotas.length > 0 && (
                <Card className="border-green-200">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Total de Créditos</p>
                        <p className="text-sm text-muted-foreground">
                          {assignedQuotas.reduce((total, quota) => total + quota.credits, 0)} créditos asignados
                        </p>
                      </div>
                      <div className="text-right">
                        <Button 
                          onClick={() => {
                            console.log("Confirming assignment for student:", selectedStudent)
                            console.log("Assigned quotas:", assignedQuotas)
                            handleBackToMain()
                          }}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          Confirmar Asignación
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Student's Current Subjects */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <GraduationCap className="h-4 w-4" />
                <span>Materias Actuales del Estudiante</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 md:grid-cols-2">
                {selectedStudent.enrolledSubjects.map((subject, index) => (
                  <Card key={index} className="border-gray-200">
                    <CardContent className="p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-gray-100 rounded-lg flex items-center justify-center">
                            <BookOpen className="h-3 w-3 text-gray-600" />
                          </div>
                          <div className="min-w-0">
                            <h5 className="font-medium text-sm truncate">{subject.name}</h5>
                            <p className="text-xs text-muted-foreground">
                              {subject.code} - Grupo {subject.group}
                            </p>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <Badge variant={subject.status === 'confirmada' ? 'default' : 'secondary'} className="text-xs">
                            {subject.status === 'confirmada' ? 'Confirmada' : 'Pendiente'}
                          </Badge>
                          <p className="text-xs text-muted-foreground mt-1">
                            {subject.credits} créditos
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 mt-2 text-xs">
                        <Clock className="h-3 w-3 text-muted-foreground" />
                        <span className="text-muted-foreground">{subject.schedule}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  )

  return (
    <div className="space-y-8">
      {currentView === "main" && renderMainView()}
      {currentView === "student-search" && renderStudentSearchView()}
      {currentView === "quota-assignment" && renderQuotaAssignmentView()}

    </div>
  )
}