"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const chartData = [
  { date: "2024-04-01", chiffreAffaires: 222, conversions: 150 },
  { date: "2024-04-02", chiffreAffaires: 97, conversions: 180 },
  { date: "2024-04-03", chiffreAffaires: 167, conversions: 120 },
  { date: "2024-04-04", chiffreAffaires: 242, conversions: 260 },
  { date: "2024-04-05", chiffreAffaires: 373, conversions: 290 },
  { date: "2024-04-06", chiffreAffaires: 301, conversions: 340 },
  { date: "2024-04-07", chiffreAffaires: 245, conversions: 180 },
  { date: "2024-04-08", chiffreAffaires: 409, conversions: 320 },
  { date: "2024-04-09", chiffreAffaires: 59, conversions: 110 },
  { date: "2024-04-10", chiffreAffaires: 261, conversions: 190 },
  { date: "2024-04-11", chiffreAffaires: 327, conversions: 350 },
  { date: "2024-04-12", chiffreAffaires: 292, conversions: 210 },
  { date: "2024-04-13", chiffreAffaires: 342, conversions: 380 },
  { date: "2024-04-14", chiffreAffaires: 137, conversions: 220 },
  { date: "2024-04-15", chiffreAffaires: 120, conversions: 170 },
  { date: "2024-04-16", chiffreAffaires: 138, conversions: 190 },
  { date: "2024-04-17", chiffreAffaires: 446, conversions: 360 },
  { date: "2024-04-18", chiffreAffaires: 364, conversions: 410 },
  { date: "2024-04-19", chiffreAffaires: 243, conversions: 180 },
  { date: "2024-04-20", chiffreAffaires: 89, conversions: 150 },
  { date: "2024-04-21", chiffreAffaires: 137, conversions: 200 },
  { date: "2024-04-22", chiffreAffaires: 224, conversions: 170 },
  { date: "2024-04-23", chiffreAffaires: 138, conversions: 230 },
  { date: "2024-04-24", chiffreAffaires: 387, conversions: 290 },
  { date: "2024-04-25", chiffreAffaires: 215, conversions: 250 },
  { date: "2024-04-26", chiffreAffaires: 75, conversions: 130 },
  { date: "2024-04-27", chiffreAffaires: 383, conversions: 420 },
  { date: "2024-04-28", chiffreAffaires: 122, conversions: 180 },
  { date: "2024-04-29", chiffreAffaires: 315, conversions: 240 },
  { date: "2024-04-30", chiffreAffaires: 454, conversions: 380 },
  { date: "2024-05-01", chiffreAffaires: 165, conversions: 220 },
  { date: "2024-05-02", chiffreAffaires: 293, conversions: 310 },
  { date: "2024-05-03", chiffreAffaires: 247, conversions: 190 },
  { date: "2024-05-04", chiffreAffaires: 385, conversions: 420 },
  { date: "2024-05-05", chiffreAffaires: 481, conversions: 390 },
  { date: "2024-05-06", chiffreAffaires: 498, conversions: 520 },
  { date: "2024-05-07", chiffreAffaires: 388, conversions: 300 },
  { date: "2024-05-08", chiffreAffaires: 149, conversions: 210 },
  { date: "2024-05-09", chiffreAffaires: 227, conversions: 180 },
  { date: "2024-05-10", chiffreAffaires: 293, conversions: 330 },
  { date: "2024-05-11", chiffreAffaires: 335, conversions: 270 },
  { date: "2024-05-12", chiffreAffaires: 197, conversions: 240 },
  { date: "2024-05-13", chiffreAffaires: 197, conversions: 160 },
  { date: "2024-05-14", chiffreAffaires: 448, conversions: 490 },
  { date: "2024-05-15", chiffreAffaires: 473, conversions: 380 },
  { date: "2024-05-16", chiffreAffaires: 338, conversions: 400 },
  { date: "2024-05-17", chiffreAffaires: 499, conversions: 420 },
  { date: "2024-05-18", chiffreAffaires: 315, conversions: 350 },
  { date: "2024-05-19", chiffreAffaires: 235, conversions: 180 },
  { date: "2024-05-20", chiffreAffaires: 177, conversions: 230 },
  { date: "2024-05-21", chiffreAffaires: 82, conversions: 140 },
  { date: "2024-05-22", chiffreAffaires: 81, conversions: 120 },
  { date: "2024-05-23", chiffreAffaires: 252, conversions: 290 },
  { date: "2024-05-24", chiffreAffaires: 294, conversions: 220 },
  { date: "2024-05-25", chiffreAffaires: 201, conversions: 250 },
  { date: "2024-05-26", chiffreAffaires: 213, conversions: 170 },
  { date: "2024-05-27", chiffreAffaires: 420, conversions: 460 },
  { date: "2024-05-28", chiffreAffaires: 233, conversions: 190 },
  { date: "2024-05-29", chiffreAffaires: 78, conversions: 130 },
  { date: "2024-05-30", chiffreAffaires: 340, conversions: 280 },
  { date: "2024-05-31", chiffreAffaires: 178, conversions: 230 },
  { date: "2024-06-01", chiffreAffaires: 178, conversions: 200 },
  { date: "2024-06-02", chiffreAffaires: 470, conversions: 410 },
  { date: "2024-06-03", chiffreAffaires: 103, conversions: 160 },
  { date: "2024-06-04", chiffreAffaires: 439, conversions: 380 },
  { date: "2024-06-05", chiffreAffaires: 88, conversions: 140 },
  { date: "2024-06-06", chiffreAffaires: 294, conversions: 250 },
  { date: "2024-06-07", chiffreAffaires: 323, conversions: 370 },
  { date: "2024-06-08", chiffreAffaires: 385, conversions: 320 },
  { date: "2024-06-09", chiffreAffaires: 438, conversions: 480 },
  { date: "2024-06-10", chiffreAffaires: 155, conversions: 200 },
  { date: "2024-06-11", chiffreAffaires: 92, conversions: 150 },
  { date: "2024-06-12", chiffreAffaires: 492, conversions: 420 },
  { date: "2024-06-13", chiffreAffaires: 81, conversions: 130 },
  { date: "2024-06-14", chiffreAffaires: 426, conversions: 380 },
  { date: "2024-06-15", chiffreAffaires: 307, conversions: 350 },
  { date: "2024-06-16", chiffreAffaires: 371, conversions: 310 },
  { date: "2024-06-17", chiffreAffaires: 475, conversions: 520 },
  { date: "2024-06-18", chiffreAffaires: 107, conversions: 170 },
  { date: "2024-06-19", chiffreAffaires: 341, conversions: 290 },
  { date: "2024-06-20", chiffreAffaires: 408, conversions: 450 },
  { date: "2024-06-21", chiffreAffaires: 169, conversions: 210 },
  { date: "2024-06-22", chiffreAffaires: 317, conversions: 270 },
  { date: "2024-06-23", chiffreAffaires: 480, conversions: 530 },
  { date: "2024-06-24", chiffreAffaires: 132, conversions: 180 },
  { date: "2024-06-25", chiffreAffaires: 141, conversions: 190 },
  { date: "2024-06-26", chiffreAffaires: 434, conversions: 380 },
  { date: "2024-06-27", chiffreAffaires: 448, conversions: 490 },
  { date: "2024-06-28", chiffreAffaires: 149, conversions: 200 },
  { date: "2024-06-29", chiffreAffaires: 103, conversions: 160 },
  { date: "2024-06-30", chiffreAffaires: 446, conversions: 400 },
]

const chartConfig = {
  total: {
    label: "Total",
  },
  chiffreAffaires: {
    label: "Chiffre d'affaires",
    color: "hsl(var(--chart-1))",
  },
  conversions: {
    label: "Conversions",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function Component() {
  const [timeRange, setTimeRange] = React.useState("90d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Évolution du chiffre d'affaires</CardTitle>
          <CardDescription>
            Affichage des données sur les {timeRange === "90d" ? "3 derniers mois" : timeRange === "30d" ? "30 derniers jours" : "7 derniers jours"}
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Sélectionner une période"
          >
            <SelectValue placeholder="3 derniers mois" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              3 derniers mois
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              30 derniers jours
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              7 derniers jours
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillChiffreAffaires" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-chiffreAffaires)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-chiffreAffaires)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillConversions" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-conversions)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-conversions)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "short"
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "short"
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="conversions"
              type="natural"
              fill="url(#fillConversions)"
              stroke="var(--color-conversions)"
              stackId="a"
            />
            <Area
              dataKey="chiffreAffaires"
              type="natural"
              fill="url(#fillChiffreAffaires)"
              stroke="var(--color-chiffreAffaires)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
