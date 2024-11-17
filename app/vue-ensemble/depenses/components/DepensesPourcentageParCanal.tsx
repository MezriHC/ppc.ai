"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { canal: "carte", depenses: 27500, fill: "var(--color-carte)" },
  { canal: "especes", depenses: 20000, fill: "var(--color-especes)" },
  { canal: "virement", depenses: 28700, fill: "var(--color-virement)" },
  { canal: "cheque", depenses: 17300, fill: "var(--color-cheque)" },
  { canal: "autre", depenses: 19000, fill: "var(--color-autre)" },
]

const chartConfig = {
  depenses: {
    label: "Dépenses",
  },
  carte: {
    label: "Carte bancaire",
    color: "hsl(var(--chart-1))",
  },
  especes: {
    label: "Espèces",
    color: "hsl(var(--chart-2))",
  },
  virement: {
    label: "Virement",
    color: "hsl(var(--chart-3))",
  },
  cheque: {
    label: "Chèque",
    color: "hsl(var(--chart-4))",
  },
  autre: {
    label: "Autre",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function DepensesPourcentageParCanal() {
  const totalDepenses = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.depenses, 0)
  }, [])

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Répartition par canal de paiement</CardTitle>
        <CardDescription>Janvier - Juin 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="depenses"
              nameKey="canal"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalDepenses.toLocaleString()}€
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total dépenses
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Hausse des paiements par carte de 5.2% ce mois-ci <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Répartition des dépenses sur les 6 derniers mois
        </div>
      </CardFooter>
    </Card>
  )
}
