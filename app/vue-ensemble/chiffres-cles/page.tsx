import { Component as ChiffreAffaires } from "./components/chiffreaffaires"
import { Component as Conversion } from "./components/conversion"
import { Component as Evolution } from "./components/evolution"
import { Component as NouveauxClients } from "./components/nouveauxclients"
import ChiffresCard from "./components/chiffres-card"
export default function ChiffresCles() {
  return (
    <div className="grid gap-5">
      <ChiffresCard />
      <ChiffreAffaires />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Conversion />
        <Evolution />
        <NouveauxClients />
      </div>
      
      <div className="min-h-[200px] bg-secondary rounded-lg flex items-center justify-center w-auto h-auto">
        <div className="w-full flex items-center justify-center text-secondary-foreground">
        Slot colonne 1
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="min-h-[200px] bg-secondary rounded-lg flex items-center justify-center w-auto h-auto">
          <div className="w-full flex items-center justify-center text-secondary-foreground">
            Slot colonne 1
          </div>
        </div>
        <div className="min-h-[200px] bg-secondary rounded-lg flex items-center justify-center w-auto h-auto">
          <div className="w-full flex items-center justify-center text-secondary-foreground">
            Slot colonne 2
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="min-h-[200px] bg-secondary rounded-lg flex items-center justify-center w-auto h-auto">
          <div className="w-full flex items-center justify-center text-secondary-foreground">
            Slot colonne 1
          </div>
        </div>
        <div className="min-h-[200px] bg-secondary rounded-lg flex items-center justify-center w-auto h-auto">
          <div className="w-full flex items-center justify-center text-secondary-foreground">
            Slot colonne 2
          </div>
        </div>
        <div className="min-h-[200px] bg-secondary rounded-lg flex items-center justify-center w-auto h-auto">
          <div className="w-full flex items-center justify-center text-secondary-foreground">
            Slot colonne 3
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="min-h-[200px] bg-secondary rounded-lg flex items-center justify-center w-auto h-auto">
          <div className="w-full flex items-center justify-center text-secondary-foreground">
            Slot colonne 1
          </div>
        </div>
        <div className="min-h-[200px] bg-secondary rounded-lg flex items-center justify-center w-auto h-auto">
          <div className="w-full flex items-center justify-center text-secondary-foreground">
            Slot colonne 2
          </div>
        </div>
        <div className="min-h-[200px] bg-secondary rounded-lg flex items-center justify-center w-auto h-auto">
          <div className="w-full flex items-center justify-center text-secondary-foreground">
            Slot colonne 3
          </div>
        </div>
        <div className="min-h-[200px] bg-secondary rounded-lg flex items-center justify-center w-auto h-auto">
          <div className="w-full flex items-center justify-center text-secondary-foreground">
            Slot colonne 4
          </div>
        </div>
      </div>
    </div>
  )
}
