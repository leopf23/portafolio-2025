import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { 
  BookOpen, 
  User, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  Calendar,
  Users,
  GraduationCap
} from "lucide-react"

interface SubjectValidationCardProps {
  subjectName: string
  subjectCode: string
  professor: string
  status: 'validated' | 'pending'
  group?: string
  credits?: number
  schedule?: string
  studentsCount?: number
  onClick?: () => void
  onValidate?: () => void
}

export function SubjectValidationCard({ 
  subjectName,
  subjectCode,
  professor,
  status,
  group,
  credits,
  schedule,
  studentsCount,
  onClick,
  onValidate
}: SubjectValidationCardProps) {
  const isValidated = status === 'validated'
  
  return (
    <Card 
      className={`group cursor-pointer transition-all duration-200 hover:shadow-md ${
        isValidated 
          ? 'border-green-200 bg-green-50/30 hover:bg-green-50/50' 
          : 'border-orange-200 bg-orange-50/30 hover:bg-orange-50/50 hover:border-orange-300'
      }`}
      onClick={onClick}
    >
      <CardContent className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start space-x-3 flex-1">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
              isValidated 
                ? 'bg-green-100' 
                : 'bg-orange-100'
            }`}>
              <BookOpen className={`h-5 w-5 ${
                isValidated ? 'text-green-600' : 'text-orange-600'
              }`} />
            </div>
            
            <div className="min-w-0 flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h4 className="font-medium truncate">{subjectName}</h4>
                {group && (
                  <Badge variant="outline" className="text-xs">
                    Grupo {group}
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                {subjectCode}
              </p>
              
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <User className="h-3 w-3" />
                <span className="truncate">{professor}</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-end space-y-2">
            <Badge 
              variant={isValidated ? "default" : "outline"}
              className={
                isValidated 
                  ? "bg-green-100 text-green-800 border-green-200 hover:bg-green-100"
                  : "bg-orange-100 text-orange-800 border-orange-200"
              }
            >
              {isValidated ? (
                <>
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Validado
                </>
              ) : (
                <>
                  <Clock className="h-3 w-3 mr-1" />
                  Pendiente
                </>
              )}
            </Badge>
            
            {!isValidated && onValidate && (
              <Button 
                size="sm" 
                variant="outline"
                onClick={(e) => {
                  e.stopPropagation()
                  onValidate()
                }}
                className="text-xs hover:bg-orange-100 hover:border-orange-300"
              >
                Validar
              </Button>
            )}
          </div>
        </div>

        {/* Additional Info */}
        {(schedule || credits || studentsCount) && (
          <>
            <div className="border-t border-gray-200 pt-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                {schedule && (
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-3 w-3 text-muted-foreground" />
                    <span className="text-muted-foreground truncate">{schedule}</span>
                  </div>
                )}
                
                {credits && (
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="h-3 w-3 text-muted-foreground" />
                    <span className="text-muted-foreground">{credits} créditos</span>
                  </div>
                )}
                
                {studentsCount && (
                  <div className="flex items-center space-x-2">
                    <Users className="h-3 w-3 text-muted-foreground" />
                    <span className="text-muted-foreground">{studentsCount} estudiantes</span>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {/* Status Indicator */}
        {!isValidated && (
          <div className="flex items-center space-x-2 mt-4 p-2 bg-orange-100 rounded-lg">
            <AlertCircle className="h-4 w-4 text-orange-600 flex-shrink-0" />
            <p className="text-xs text-orange-700">
              Esta materia requiere validación de horario
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}