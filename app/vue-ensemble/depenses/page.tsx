import { EvolutionDepenses } from "./components/EvolutionDepenses";
import { RepartitionDepensesCanalPourcentage } from "./components/RepartitionDepensesCanalPourcentage";
import { RepartitionDepensesCanalEuro } from "./components/RepartitionDepensesCanalEuro";
import { RepartitionDepensesTrancheHoraire } from "./components/RepartitionDepensesTrancheHoraire";
import { DepensesParJourSemaine } from "./components/DepensesParJourSemaine";

export default function Depenses() {
  return (
    <div className="grid gap-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <EvolutionDepenses />
        <RepartitionDepensesCanalPourcentage />
        <RepartitionDepensesCanalEuro />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <RepartitionDepensesTrancheHoraire />
        <DepensesParJourSemaine />
      </div>
    </div>
  )
}
