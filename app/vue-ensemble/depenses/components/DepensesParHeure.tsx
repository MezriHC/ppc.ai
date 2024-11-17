"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, Rectangle, XAxis, YAxis } from "recharts"

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
  { heure: "00h-06h", depenses: 1870 },
  { heure: "06h-10h", depenses: 2000 },
  { heure: "10h-14h", depenses: 2750 },
  { heure: "14h-18h", depenses: 1730 },
  { heure: "18h-23h", depenses: 900 },
]

const chartConfig = {
  depenses: {
    label: "Dépenses",
    color: "hsl(var(--chart-1))",
  }
} satisfies ChartConfig

export function DepensesParHeure() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dépenses par heure</CardTitle>
        <CardDescription>Répartition des dépenses sur 24h</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="heure"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `${value.toLocaleString()}€`}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
            />
            <Bar
              dataKey="depenses"
              fill="var(--color-depenses)"
              strokeWidth={2}
              radius={8}
              activeBar={({ ...props }) => {
                return (
                  <Rectangle
                    {...props}
                    fillOpacity={0.8}
                    stroke="var(--color-depenses)"
                    strokeDasharray={4}
                    strokeDashoffset={4}
                  />
                )
              }}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Pic de dépenses entre 12h et 18h <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Répartition moyenne des dépenses sur une journée
        </div>
      </CardFooter>
    </Card>
  )
}
