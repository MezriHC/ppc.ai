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
  { day: "1", depenses: 12500 },
  { day: "5", depenses: 28750 },
  { day: "10", depenses: 15200 },
  { day: "15", depenses: 42300 },
  { day: "20", depenses: 31450 },
  { day: "25", depenses: 22800 },
  { day: "30", depenses: 54321 },
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
              left: 12,
              right: 12,
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
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
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
