import { BarChart } from "@mui/x-charts/BarChart"

function PositionsBarChart() {
    const dataset = [4, 3, 5, 2, 3, 1]

    return (
        <>
            <BarChart
                series={[{ data: dataset, color: "#105349" }]}
                layout="horizontal"
                height={300}
            />
        </>
    )
}

export default PositionsBarChart
