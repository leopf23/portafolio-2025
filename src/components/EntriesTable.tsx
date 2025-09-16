import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { MoreHorizontal, Search, Filter, Download, Eye, Edit, Trash2 } from "lucide-react"

interface Entry {
  id: string
  project: string
  client: string
  status: "completed" | "in-progress" | "pending" | "cancelled"
  priority: "high" | "medium" | "low"
  dueDate: string
  budget: string
  progress: number
  assignee: string
}

const entries: Entry[] = [
  {
    id: "PRJ-001",
    project: "Website Redesign",
    client: "Acme Corp",
    status: "in-progress",
    priority: "high",
    dueDate: "2025-08-15",
    budget: "$15,000",
    progress: 75,
    assignee: "John Doe"
  },
  {
    id: "PRJ-002", 
    project: "Mobile App Development",
    client: "Tech Solutions",
    status: "completed",
    priority: "medium",
    dueDate: "2025-07-30",
    budget: "$25,000",
    progress: 100,
    assignee: "Jane Smith"
  },
  {
    id: "PRJ-003",
    project: "Brand Identity Design",
    client: "StartupXYZ",
    status: "pending",
    priority: "low",
    dueDate: "2025-08-20",
    budget: "$8,000",
    progress: 25,
    assignee: "Mike Johnson"
  },
  {
    id: "PRJ-004",
    project: "E-commerce Platform",
    client: "Retail Plus",
    status: "in-progress",
    priority: "high",
    dueDate: "2025-09-01",
    budget: "$35,000",
    progress: 60,
    assignee: "Sarah Wilson"
  },
  {
    id: "PRJ-005",
    project: "Marketing Campaign",
    client: "Fashion Brand",
    status: "completed",
    priority: "medium",
    dueDate: "2025-07-25",
    budget: "$12,000",
    progress: 100,
    assignee: "Tom Brown"
  },
  {
    id: "PRJ-006",
    project: "Data Analytics Dashboard",
    client: "FinTech Co",
    status: "cancelled",
    priority: "low",
    dueDate: "2025-08-10",
    budget: "$18,000",
    progress: 30,
    assignee: "Lisa Davis"
  }
]

export function EntriesTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [priorityFilter, setPriorityFilter] = useState("all")

  const filteredEntries = entries.filter(entry => {
    const matchesSearch = entry.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         entry.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         entry.assignee.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || entry.status === statusFilter
    const matchesPriority = priorityFilter === "all" || entry.priority === priorityFilter
    
    return matchesSearch && matchesStatus && matchesPriority
  })

  const getStatusBadge = (status: Entry["status"]) => {
    const variants = {
      completed: "default",
      "in-progress": "secondary", 
      pending: "outline",
      cancelled: "destructive"
    } as const

    const labels = {
      completed: "Completed",
      "in-progress": "In Progress",
      pending: "Pending",
      cancelled: "Cancelled"
    }

    return (
      <Badge variant={variants[status]}>
        {labels[status]}
      </Badge>
    )
  }

  const getPriorityBadge = (priority: Entry["priority"]) => {
    const colors = {
      high: "bg-red-100 text-red-800",
      medium: "bg-yellow-100 text-yellow-800", 
      low: "bg-green-100 text-green-800"
    }

    return (
      <Badge variant="outline" className={colors[priority]}>
        {priority.charAt(0).toUpperCase() + priority.slice(1)}
      </Badge>
    )
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div>
              <CardTitle>Project Entries</CardTitle>
              <CardDescription>
                Manage and track all your project entries
              </CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
              <Button size="sm">
                Add Entry
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects, clients, or assignees..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[160px]">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>

            <Select value={priorityFilter} onValueChange={setPriorityFilter}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priority</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Project ID</TableHead>
                  <TableHead>Project Name</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Budget</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Assignee</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEntries.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={10} className="text-center py-8">
                      <div className="text-muted-foreground">
                        No entries found matching your filters.
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredEntries.map((entry) => (
                    <TableRow key={entry.id}>
                      <TableCell className="font-medium">{entry.id}</TableCell>
                      <TableCell>{entry.project}</TableCell>
                      <TableCell>{entry.client}</TableCell>
                      <TableCell>{getStatusBadge(entry.status)}</TableCell>
                      <TableCell>{getPriorityBadge(entry.priority)}</TableCell>
                      <TableCell>{new Date(entry.dueDate).toLocaleDateString()}</TableCell>
                      <TableCell>{entry.budget}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <div className="w-full bg-secondary rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full transition-all duration-300"
                              style={{ width: `${entry.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-muted-foreground min-w-[40px]">
                            {entry.progress}%
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>{entry.assignee}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit Entry
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete Entry
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          {/* Pagination Info */}
          <div className="flex items-center justify-between pt-4">
            <div className="text-sm text-muted-foreground">
              Showing {filteredEntries.length} of {entries.length} entries
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" disabled>
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}