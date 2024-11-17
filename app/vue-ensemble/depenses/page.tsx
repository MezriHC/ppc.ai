import { EvolutionDepenses } from "@/app/vue-ensemble/depenses/components/EvolutionDepenses"
import { DepensesParHeure } from "@/app/vue-ensemble/depenses/components/DepensesParHeure"
import { DepensesParJourSemaine } from "@/app/vue-ensemble/depenses/components/DepensesParJourSemaine"
import { DepensesPourcentageParCanal } from "@/app/vue-ensemble/depenses/components/DepensesPourcentageParCanal"
export default function Depenses() {
  return (
    <div className="grid gap-5">
      <div className="min-h-[200px] bg-secondary rounded-lg flex items-center justify-center w-auto h-auto">
        <div className="w-full flex items-center justify-center text-center text-secondary-foreground">
          Slot colonne 1
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="min-h-[200px] bg-secondary rounded-lg">
          <DepensesPourcentageParCanal />
        </div>
        <div className="min-h-[200px] bg-secondary rounded-lg">
          Slot colonne 2
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="min-h-[200px] bg-secondary rounded-lg">
        <EvolutionDepenses />
        </div>
        <div className="min-h-[200px] bg-secondary rounded-lg">
          <DepensesParHeure />
        </div>
        <div className="min-h-[200px] bg-secondary rounded-lg">
          <DepensesParJourSemaine />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="min-h-[200px] bg-secondary rounded-lg">
          <div className="w-full flex items-center justify-center text-center text-secondary-foreground">
            Slot colonne 1
          </div>
        </div>
        <div className="min-h-[200px] bg-secondary rounded-lg">
          <div className="w-full flex items-center justify-center text-center text-secondary-foreground">
            Slot colonne 2
          </div>
        </div>
        <div className="min-h-[200px] bg-secondary rounded-lg">
          <div className="w-full flex items-center justify-center text-center text-secondary-foreground">
            Slot colonne 3
          </div>
        </div>
        <div className="min-h-[200px] bg-secondary rounded-lg">
          <div className="w-full flex items-center justify-center text-center text-secondary-foreground">
            Slot colonne 4
          </div>
        </div>
      </div>
    </div>
  )
}
