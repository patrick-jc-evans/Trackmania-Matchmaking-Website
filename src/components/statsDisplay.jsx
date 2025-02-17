import Searchbar from "./statsDisplayChildren/searchbar"
import WinratePieChart from "./statsDisplayChildren/winratePieChart"
import AveragePosition from "./statsDisplayChildren/averagePosition"
import PositionsBarChart from "./statsDisplayChildren/positionBarChart"
import "./statsDisplay.css"
import { useState } from "react"

function StatsDisplay() {
    const [playerData, setPlayerData] = useState(null)

    return (
        <main>
            <Searchbar setPlayerName={setPlayerData} />
            <WinratePieChart />
            <AveragePosition />
            <PositionsBarChart />
        </main>
    )
}

export default StatsDisplay
