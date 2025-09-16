import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Progress } from "./ui/progress"
import { 
  GraduationCap, 
  CheckCircle, 
  Clock, 
  BarChart3,
  ArrowRight
} from "lucide-react"

interface ScheduleValidationCardProps {
  careerName: string
  validatedSchedules: number
  pendingSchedules: number
  totalSchedules: number
  onClick?: () => void
}

export function ScheduleValidationCard({ 
  careerName, 
  validatedSchedules, 
  pendingSchedules, 
  totalSchedules,
  onClick 
}: ScheduleValidationCardProps) {
  const validationPercentage = totalSchedules > 0 ? (validatedSchedules / totalSchedules) * 100 : 0
  
  return (
    <Card 
      className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 hover:-translate-y-1"
      onClick={onClick}
    >
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/15 transition-colors">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-medium text-lg truncate pr-2">
                {careerName}
              </h3>
              <p className="text-sm text-muted-foreground">
                Validación de Horarios
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>

        {/* Progress Section */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Progreso de Validación</span>
            <span className="text-sm font-medium">
              {Math.round(validationPercentage)}%
            </span>
          </div>
          
          <Progress 
            value={validationPercentage} 
            className="h-2"
          />
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-3 gap-4">
          {/* Validated */}
          <div className="text-center space-y-2">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-semibold text-green-600">
                {validatedSchedules}
              </p>
              <p className="text-xs text-muted-foreground">
                Validados
              </p>
            </div>
          </div>

          {/* Pending */}
          <div className="text-center space-y-2">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mx-auto">
              <Clock className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <p className="text-2xl font-semibold text-orange-600">
                {pendingSchedules}
              </p>
              <p className="text-xs text-muted-foreground">
                Pendientes
              </p>
            </div>
          </div>

          {/* Total */}
          <div className="text-center space-y-2">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
              <BarChart3 className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-semibold text-blue-600">
                {totalSchedules}
              </p>
              <p className="text-xs text-muted-foreground">
                Total
              </p>
            </div>
          </div>
        </div>

        {/* Status Badge */}
        <div className="flex justify-center mt-6">
          {pendingSchedules === 0 ? (
            <Badge className="bg-green-100 text-green-800 border-green-200 hover:bg-green-100">
              ✓ Completado
            </Badge>
          ) : pendingSchedules > validatedSchedules ? (
            <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
              ⏳ En Proceso
            </Badge>
          ) : (
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              📋 En Revisión
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  )
}