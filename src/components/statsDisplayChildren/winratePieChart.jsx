import * as React from "react"

import { PieChart } from "@mui/x-charts/PieChart"
import { useDrawingArea } from "@mui/x-charts/hooks"
import { styled } from "@mui/material/styles"

function WinratePieChart() {
    //Temporary numbers for testing

    const winrate = 47

    const StyledNumber = styled("text")(({ theme }) => ({
        fill: theme.palette.text.primary,
        textAnchor: "middle",
        dominantBaseline: "text-top",
        fontSize: 30,
    }))

    const StyledLabel = styled("text")(({ theme }) => ({
        fill: theme.palette.text.primary,
        textAnchor: "middle",
        dominantBaseline: "hanging",
        fontSize: 20,
    }))

    function PieCenterLabel({ label, percentage }) {
        const { width, height, left, top } = useDrawingArea()
        return (
            <>
                <StyledNumber x={left + width / 2} y={top + height / 2}>
                    {percentage}
                </StyledNumber>
                <StyledLabel x={left + width / 2} y={top + height / 2}>
                    {label}
                </StyledLabel>
            </>
        )
    }

    const size = {
        width: 400,
        height: 250,
        legend: { hidden: true },
        margin: { right: 0 },
    }

    return (
        <>
            <section className="winrate-piechart">
                <PieChart
                    series={[
                        {
                            data: [
                                {
                                    value: winrate,
                                    color: "#105349",
                                    label: "win",
                                },
                                {
                                    value: 100 - winrate,
                                    color: "#800000",
                                    label: "lose",
                                },
                            ],
                            innerRadius: 90,
                            startAngle: 0,
                            endAngle: -360,
                            responsive: false,
                        },
                    ]}
                    slotProps={{
                        legend: {
                            direction: "row",
                            position: { vertical: "top", horizontal: "middle" },
                            padding: 0,
                        },
                    }}
                    {...size}
                >
                    <PieCenterLabel
                        label="win rate"
                        percentage={String(winrate) + "%"}
                    />
                </PieChart>
            </section>
        </>
    )
}

export default WinratePieChart
