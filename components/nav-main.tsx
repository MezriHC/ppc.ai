"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { useNavigation } from "@/contexts/navigation-context"
import Link from "next/link"
import { useEffect, useRef } from "react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  const pathname = usePathname()
  const navigation = useNavigation()
  const router = useRouter()
  const initializedRef = useRef(false)

  const isMenuActive = (url: string) => {
    return pathname === url || pathname.startsWith(url + "/")
  }

  const handleMainMenuClick = (item: typeof items[0]) => {
    if (item.items && item.items.length > 0) {
      const firstSubItem = item.items[0]
      router.push(firstSubItem.url)
      navigation.updateNavigation(firstSubItem.url, item.title, firstSubItem.title)
    }
  }

  const handleSubMenuClick = (mainItem: typeof items[0], subItem: typeof items[0]['items'][0]) => {
    navigation.updateNavigation(subItem.url, mainItem.title, subItem.title)
  }

  // Set initial navigation state on page load
  useEffect(() => {
    if (navigation.isReady && !initializedRef.current && pathname !== navigation.currentPath) {
      const currentMainItem = items.find(item => pathname.startsWith(item.url))
      if (currentMainItem) {
        const currentSubItem = currentMainItem.items?.find(subItem => 
          pathname === subItem.url || pathname.startsWith(subItem.url + "/")
        )
        if (currentSubItem) {
          navigation.updateNavigation(currentSubItem.url, currentMainItem.title, currentSubItem.title)
        } else if (currentMainItem.items?.[0]) {
          // If no sub-item matches, select the first sub-item
          const firstSubItem = currentMainItem.items[0]
          navigation.updateNavigation(firstSubItem.url, currentMainItem.title, firstSubItem.title)
        }
      }
      initializedRef.current = true
    }
  }, [pathname, items, navigation])

  if (!navigation.isReady) {
    return null
  }

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const isActive = isMenuActive(item.url)
          const hasActiveChild = item.items?.some(subItem => isMenuActive(subItem.url))

          return (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={isActive || hasActiveChild}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton 
                    tooltip={item.title}
                    isActive={isActive || hasActiveChild}
                    onClick={() => handleMainMenuClick(item)}
                  >
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton 
                          asChild
                          isActive={isMenuActive(subItem.url)}
                        >
                          <Link 
                            href={subItem.url}
                            onClick={() => handleSubMenuClick(item, subItem)}
                          >
                            <span>{subItem.title}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
