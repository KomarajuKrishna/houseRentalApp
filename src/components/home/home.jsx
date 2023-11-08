import { Component } from "react";
import HouseCard from "../housesCard/housesCard";
import { houses } from "../housesData";
import "./home.css";

class Home extends Component {
    state = {
        searchInput: "",
        searchedHouses: houses
    }

    onChangeSearchInput = (event) => {
        this.setState({
            searchInput: event.target.value
        })
    }
    render() {
        const { searchInput, searchedHouses } = this.state
        console.log(searchInput)
        const searchResults = searchedHouses.filter((eachHouse) => (
            eachHouse.house.includes(searchInput)
        ))
        return (
            <div >
                <ul className="home-container">
                    {searchResults.map((eachHouse) => (
                        <HouseCard
                            houseDetails={eachHouse}
                            key={eachHouse.id}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}

export default Home