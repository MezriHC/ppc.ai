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
  { jour: "Lundi", depenses: 12500 },
  { jour: "Mardi", depenses: 28750 },
  { jour: "Mercredi", depenses: 15200 },
  { jour: "Jeudi", depenses: 42300 },
  { jour: "Vendredi", depenses: 31450 },
  { jour: "Samedi", depenses: 22800 },
  { jour: "Dimanche", depenses: 54321 },
]

const chartConfig = {
  depenses: {
    label: "Dépenses",
    color: "hsl(var(--chart-1))",
  }
} satisfies ChartConfig

export function DepensesParJourSemaine() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dépenses par jour de la semaine</CardTitle>
        <CardDescription>Répartition des dépenses sur la semaine</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart 
            accessibilityLayer 
            data={chartData}
            margin={{
              left: 0,
              right: 12,
              top: 12,
              bottom: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="jour"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              interval={0}
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
              fill="hsl(var(--primary))"
              strokeWidth={2}
              radius={8}
              activeBar={({ ...props }) => {
                return (
                  <Rectangle
                    {...props}
                    fillOpacity={0.8}
                    stroke="hsl(var(--primary))"
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
          Pic de dépenses le dimanche <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Répartition moyenne des dépenses sur la semaine
        </div>
      </CardFooter>
    </Card>
  )
}
