import { useEffect } from "react"
import axios from "axios"
import config from "../../../config"

function Searchbar({ setPlayerData }) {
    // const playerSearch = ""

    function handleSubmit(inputtedName) {
        console.log(inputtedName)

        axios
            .get(`${config.apiURL}/api/mm/player/${inputtedName}`)
            .then((response) => {
                console.log(`${config.apiURL}/api/mm/player/${inputtedName}`)
                console.log(response.data)
            })
    }

    useEffect(() => {
        const listener = (event) => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                handleSubmit(event.target.value)
                event.preventDefault()
            }
        }
        document.addEventListener("keydown", listener)
        return () => {
            document.removeEventListener("keydown", listener)
        }
    }, [])

    return (
        <>
            <form className="player-search-form">
                <input
                    id="player-search"
                    className="player-search-input"
                    placeholder="Search for a player"
                    // onBlur={(e) => handleSubmit(e.target.value)}
                ></input>
            </form>
        </>
    )
}

export default Searchbar
