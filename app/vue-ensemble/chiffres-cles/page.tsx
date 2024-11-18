import { Component as ChiffreAffaires } from "./components/chiffreaffaires"
import { Component as Conversion } from "./components/conversion"
import { Component as Evolution } from "./components/evolution"
import { Component as NouveauxClients } from "./components/nouveauxclients"
import ChiffresCard from "./components/chiffres-card"
import { ChartStyle } from "./components/chartStyle"
export default function ChiffresCles() {
  return (
    <div className="grid gap-5">
      <ChiffresCard />
      <ChiffreAffaires />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Conversion />
        <Evolution />
        <NouveauxClients />
        <ChartStyle />
      </div>
    </div>
  )
}
