"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  GalleryVerticalEnd,
  Settings2,
  SquareTerminal,
  LineChart,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Mezri",
    email: "mezri@hehocom.fr",
    avatar: "https://github.com/shadcn.png",
  },
  teams: [
    {
      name: "Hehocom",
      logo: Command,
      plan: "Agence",
    },
    {
      name: "Elec Direct", 
      logo: Command,
      plan: "Startup",
    },
    {
      name: "Le Petit Grassois",
      logo: Command,
      plan: "Free",
    },
    {
      name: "Smellingood",
      logo: Command,
      plan: "Free",
    },
    {
      name: "My French Perfume",
      logo: Command,
      plan: "Free",
    },
    {
      name: "Jean Marc Joubert",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Vue d'ensemble",
      url: "/vue-ensemble",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Chiffres Clés",
          url: "/vue-ensemble/chiffres-cles",
        },
        {
          title: "Dépenses",
          url: "/vue-ensemble/depenses",
        },
        {
          title: "Conversions",
          url: "/vue-ensemble/conversions",
        },
        {
          title: "Chiffre d'Affaires",
          url: "/vue-ensemble/chiffre-affaires",
        },
        {
          title: "ROAS",
          url: "/vue-ensemble/roas",
        },
        {
          title: "Coût d'acquisition",
          url: "/vue-ensemble/cout-acquisition",
        },
        {
          title: "Taux de Conversion",
          url: "/vue-ensemble/taux-conversion",
        },
        {
          title: "Appareils",
          url: "/vue-ensemble/appareils",
        },
        {
          title: "Mots-Clés",
          url: "/vue-ensemble/mots-cles",
        },
        {
          title: "Catégories de Produit",
          url: "/vue-ensemble/categorie-produit",
        },
        {
          title: "Clients",
          url: "/vue-ensemble/clients",
        },
        {
          title: "Performance Max",
          url: "/vue-ensemble/performance-max",
        },
      ],
    },
    {
      title: "Classification Produits",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Vue d'ensemble",
          url: "#",
        },
        {
          title: "Évolution",
          url: "#",
        },
        {
          title: "Configuration",
          url: "#",
        },
      ],
    },
    {
      title: "Audit",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Vue d'ensemble",
          url: "#",
        },
      ],
    },
    {
      title: "Reporting",
      url: "#",
      icon: LineChart,
      items: [
        {
          title: "Mes Reporting",
          url: "#",
        },
        {
          title: "Configuration",
          url: "#",
        },
      ],
    },
    {
      title: "Paramètres",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Vue d'ensemble",
          url: "#",
        },
        {
          title: "Notifications",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
