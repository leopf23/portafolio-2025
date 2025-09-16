import { Search, Plus, User, Bell, Settings, LogOut } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        {/* Logo */}
        <div className="mr-6 flex items-center space-x-2">
          <div className="h-8 w-8 rounded bg-primary"></div>
          <span className="hidden font-bold sm:inline-block">Dashboard</span>
        </div>

        {/* Navigation Links */}
        <div className="mr-6 hidden md:flex">
          <nav className="flex items-center space-x-6">
            <a href="#" className="transition-colors hover:text-foreground/80 text-foreground">
              Overview
            </a>
            <a href="#" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Projects
            </a>
            <a href="#" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Analytics
            </a>
            <a href="#" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Reports
            </a>
          </nav>
        </div>

        {/* Search */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                className="pl-8 md:w-[300px]"
              />
            </div>
          </div>
        </div>

        {/* Right side items */}
        <div className="flex items-center space-x-4 ml-4">
          {/* New Project Button */}
          <Button size="sm" className="hidden sm:flex">
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 h-2 w-2 bg-destructive rounded-full"></span>
          </Button>

          {/* Avatar Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" alt="Profile" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  )
}