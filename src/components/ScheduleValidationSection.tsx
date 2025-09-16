import { ScheduleValidationCard } from "./ScheduleValidationCard"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Badge } from "./ui/badge"
import { Search, Filter, Calendar } from "lucide-react"

// Mock data para demostración
const mockCareerData = [
  {
    id: 1,
    careerName: "Ingeniería de Sistemas",
    validatedSchedules: 45,
    pendingSchedules: 12,
    totalSchedules: 57
  },
  {
    id: 2,
    careerName: "Administración de Empresas",
    validatedSchedules: 38,
    pendingSchedules: 8,
    totalSchedules: 46
  },
  {
    id: 3,
    careerName: "Medicina",
    validatedSchedules: 62,
    pendingSchedules: 15,
    totalSchedules: 77
  },
  {
    id: 4,
    careerName: "Derecho",
    validatedSchedules: 29,
    pendingSchedules: 21,
    totalSchedules: 50
  },
  {
    id: 5,
    careerName: "Psicología",
    validatedSchedules: 33,
    pendingSchedules: 7,
    totalSchedules: 40
  },
  {
    id: 6,
    careerName: "Arquitectura",
    validatedSchedules: 25,
    pendingSchedules: 18,
    totalSchedules: 43
  }
]

export function ScheduleValidationSection() {
  const handleCardClick = (careerName: string) => {
    console.log(`Accessing validation for: ${careerName}`)
  }

  const totalValidated = mockCareerData.reduce((sum, career) => sum + career.validatedSchedules, 0)
  const totalPending = mockCareerData.reduce((sum, career) => sum + career.pendingSchedules, 0)
  const totalSchedules = mockCareerData.reduce((sum, career) => sum + career.totalSchedules, 0)

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Validación de Horarios</h2>
                <p className="text-muted-foreground">
                  Gestión y validación de horarios académicos por carrera
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              {totalValidated} Validados
            </Badge>
            <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
              {totalPending} Pendientes
            </Badge>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Buscar carrera..." 
                  className="pl-10"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Filtros</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Summary Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span>Resumen General</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold text-blue-600">{mockCareerData.length}</p>
                <p className="text-sm text-muted-foreground">Carreras</p>
              </div>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto">
                <Calendar className="h-6 w-6 text-gray-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold text-gray-600">{totalSchedules}</p>
                <p className="text-sm text-muted-foreground">Total Horarios</p>
              </div>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                <Calendar className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold text-green-600">{totalValidated}</p>
                <p className="text-sm text-muted-foreground">Validados</p>
              </div>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto">
                <Calendar className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold text-orange-600">{totalPending}</p>
                <p className="text-sm text-muted-foreground">Pendientes</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Career Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCareerData.map((career) => (
          <ScheduleValidationCard
            key={career.id}
            careerName={career.careerName}
            validatedSchedules={career.validatedSchedules}
            pendingSchedules={career.pendingSchedules}
            totalSchedules={career.totalSchedules}
            onClick={() => handleCardClick(career.careerName)}
          />
        ))}
      </div>
    </div>
  )
}