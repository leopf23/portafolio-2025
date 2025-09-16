import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Progress } from "./ui/progress"
import { Badge } from "./ui/badge"
import { Clock, CheckCircle, AlertCircle, Calendar, DollarSign, Zap } from "lucide-react"

export function SummaryCards() {
  const summaryData = [
    {
      title: "Active Projects",
      value: "23",
      description: "Currently in progress",
      icon: Clock,
      trend: "+3",
      trendLabel: "from last week",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Completed This Month",
      value: "45",
      description: "Successfully delivered",
      icon: CheckCircle,
      trend: "+12",
      trendLabel: "from last month",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Pending Reviews",
      value: "8",
      description: "Awaiting approval",
      icon: AlertCircle,
      trend: "-2",
      trendLabel: "from yesterday",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      title: "Upcoming Deadlines",
      value: "12",
      description: "Due within 7 days",
      icon: Calendar,
      trend: "+4",
      trendLabel: "new this week",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Monthly Revenue",
      value: "$12.8K",
      description: "Gross revenue",
      icon: DollarSign,
      trend: "+18%",
      trendLabel: "vs last month",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      title: "Performance Score",
      value: "94%",
      description: "Overall efficiency",
      icon: Zap,
      trend: "+2%",
      trendLabel: "improvement",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2>Project Summary</h2>
          <p className="text-muted-foreground">
            Key metrics and performance indicators
          </p>
        </div>
        <Badge variant="outline">Last updated: 5 min ago</Badge>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {summaryData.map((item, index) => {
          const Icon = item.icon
          const isPositiveTrend = !item.trend.startsWith("-")
          
          return (
            <Card key={index} className="relative overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                <div className={`p-2 rounded-full ${item.bgColor}`}>
                  <Icon className={`h-4 w-4 ${item.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{item.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {item.description}
                </p>
                <div className="flex items-center space-x-2 mt-3">
                  <Badge
                    variant={isPositiveTrend ? "default" : "destructive"}
                    className="text-xs"
                  >
                    {item.trend}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {item.trendLabel}
                  </span>
                </div>
                
                {/* Progress bar for performance score */}
                {item.title === "Performance Score" && (
                  <Progress value={94} className="mt-3" />
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks and shortcuts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-accent cursor-pointer transition-colors">
              <div className="p-2 rounded bg-blue-50">
                <Clock className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Track Time</p>
                <p className="text-xs text-muted-foreground">Log work hours</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-accent cursor-pointer transition-colors">
              <div className="p-2 rounded bg-green-50">
                <CheckCircle className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Create Task</p>
                <p className="text-xs text-muted-foreground">Add new task</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-accent cursor-pointer transition-colors">
              <div className="p-2 rounded bg-purple-50">
                <Calendar className="h-4 w-4 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Schedule</p>
                <p className="text-xs text-muted-foreground">View calendar</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-accent cursor-pointer transition-colors">
              <div className="p-2 rounded bg-orange-50">
                <AlertCircle className="h-4 w-4 text-orange-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Reports</p>
                <p className="text-xs text-muted-foreground">Generate report</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}