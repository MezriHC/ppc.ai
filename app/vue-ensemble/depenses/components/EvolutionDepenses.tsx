"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

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
  { day: "1 avr.", depenses: 12500 },
  { day: "5 avr.", depenses: 28750 },
  { day: "10 avr.", depenses: 15200 },
  { day: "15 avr.", depenses: 42300 },
  { day: "20 avr.", depenses: 31450 },
  { day: "25 avr.", depenses: 22800 },
  { day: "30 avr.", depenses: 54321 },
]

const chartConfig = {
  depenses: {
    label: "Dépenses",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function EvolutionDepenses() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Évolution des dépenses</CardTitle>
        <CardDescription>
          Montant des dépenses au cours du mois
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 0,
              right: 12,
              top: 24,
              bottom: 36
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `${value.toLocaleString()}€`}
            />
            <ChartTooltip 
              cursor={false} 
              content={
                <ChartTooltipContent 
                  formatter={(value) => (
                    <>
                      <div
                        className="h-2.5 w-2.5 shrink-0 rounded-[2px] bg-[--color-bg]"
                        style={
                          {
                            "--color-bg": `var(--color-depenses)`,
                          } as React.CSSProperties
                        }
                      />
                      {chartConfig.depenses.label}
                      <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground min-w-[80px] justify-end">
                        {value.toLocaleString()}
                        <span className="font-normal text-muted-foreground">€</span>
                      </div>
                    </>
                  )}
                  labelFormatter={() => ""}
                />
              } 
            />
            <defs>
              <linearGradient id="fillDepenses" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-depenses)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-depenses)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="depenses"
              type="natural"
              fill="url(#fillDepenses)"
              fillOpacity={0.4}
              stroke="var(--color-depenses)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Pic de dépenses le 30 du mois <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Évolution sur 30 jours
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
