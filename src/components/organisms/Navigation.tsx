import { useState } from "react"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { ThemeToggle } from "../molecules/ThemeToggle"
import { Search, Bell, Menu, X } from "lucide-react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="sticky top-0 z-50 glass-effect border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold">AcademicHub</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#dashboard" className="text-sm hover:text-primary transition-colors">
              Dashboard
            </a>
            <a href="#students" className="text-sm hover:text-primary transition-colors">
              Students
            </a>
            <a href="#schedules" className="text-sm hover:text-primary transition-colors">
              Schedules
            </a>
            <a href="#reports" className="text-sm hover:text-primary transition-colors">
              Reports
            </a>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <Search className="h-4 w-4" />
            </Button>

            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-4 w-4" />
              <Badge 
                variant="destructive" 
                className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs p-0"
              >
                3
              </Badge>
            </Button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#dashboard" 
                className="text-sm hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </a>
              <a 
                href="#students" 
                className="text-sm hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Students
              </a>
              <a 
                href="#schedules" 
                className="text-sm hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Schedules
              </a>
              <a 
                href="#reports" 
                className="text-sm hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Reports
              </a>
              <Button variant="ghost" size="sm" className="justify-start p-0">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}