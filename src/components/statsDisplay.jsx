import Searchbar from "./statsDisplayChildren/searchbar"
import WinratePieChart from "./statsDisplayChildren/winratePieChart"
import AveragePosition from "./statsDisplayChildren/averagePosition"
import PositionsBarChart from "./statsDisplayChildren/positionBarChart"
import "./statsDisplay.css"

function StatsDisplay() {
    return (
        <main>
            <Searchbar />
            <WinratePieChart />
            <AveragePosition />
            <PositionsBarChart />
        </main>
    )
}

export default StatsDisplay
