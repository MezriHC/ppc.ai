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
  { canal: "recherche", depenses: 2300, fill: "var(--color-recherche)" },
  { canal: "shopping", depenses: 1500, fill: "var(--color-shopping)" },
  { canal: "display", depenses: 1700, fill: "var(--color-display)" },
  { canal: "pmax", depenses: 1200, fill: "var(--color-pmax)" },
]

const chartConfig = {
  depenses: {
    label: "Dépenses",
  },
  recherche: {
    label: "Réseau de Recherche",
    color: "hsl(var(--chart-1))",
  },
  shopping: {
    label: "Shopping",
    color: "hsl(var(--chart-2))",
  },
  display: {
    label: "Display",
    color: "hsl(var(--chart-3))",
  },
  pmax: {
    label: "Performance Max",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export function RepartitionDepensesCanalPourcentage() {
  const totalDepenses = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.depenses, 0)
  }, [])

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Répartition par canal en %</CardTitle>
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
              content={
                <ChartTooltipContent 
                  formatter={(value, name) => (
                    <>
                      <div
                        className="h-2.5 w-2.5 shrink-0 rounded-[2px] bg-[--color-bg]"
                        style={
                          {
                            "--color-bg": `var(--color-${name})`,
                          } as React.CSSProperties
                        }
                      />
                      {chartConfig[name as keyof typeof chartConfig]?.label || name}
                      <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground min-w-[80px] justify-end">
                        {((value / totalDepenses) * 100).toFixed(1)}
                        <span className="font-normal text-muted-foreground">%</span>
                      </div>
                    </>
                  )}
                />
              }
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
                          {totalDepenses.toLocaleString()}
                          <tspan className="font-normal text-muted-foreground">€</tspan>
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
          Performance Max : {((1200 / totalDepenses) * 100).toFixed(1)}% <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Répartition en pourcentage des dépenses publicitaires
        </div>
      </CardFooter>
    </Card>
  )
}
