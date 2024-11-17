"use client"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { DatePickerWithRange } from "@/components/ui/DateRangePicker"
import { ThemeToggle } from "@/components/theme-toggle"
import { Bell, Settings } from "lucide-react"
import { useNavigation } from "@/contexts/navigation-context"
import { useEffect, useState } from "react"

export function AppHeader() {
  const navigation = useNavigation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="flex h-16 shrink-0 items-center justify-between px-4 border-b">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <Breadcrumb>
          <BreadcrumbList>
            {mounted && navigation.currentSection && navigation.currentSubSection && (
              <>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">{navigation.currentSection}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>{navigation.currentSubSection}</BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex items-center gap-4">
        <DatePickerWithRange />
        <div className="flex items-center gap-2 border-l pl-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
