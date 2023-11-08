import { useParams } from "react-router-dom"
import { houses } from "../components/housesData"
import "./houseDetails.css"

const HouseDetails = () => {
    const { id } = useParams()
    // console.log(houses)
    const houseDetails = houses.find((eachHouse) =>
        eachHouse.id === parseInt(id)
    )
    // console.log(id)
    // console.log(houseDetails)
    const { house, rent, ownerName, contactNumber, houseImageUrl, bedRoomImageUrl,
        kitchenImageUrl, livingAreaImageUrl, area, furnishing, availableFrom, address, postedOn, confirguation } = houseDetails
    return (
        <div className="house-details-container">
            <div className="pics-container">
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={houseImageUrl} className="d-block w-100 slide-images" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={bedRoomImageUrl} className="d-block w-100 slide-images " alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={kitchenImageUrl} className="d-block w-100 slide-images" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={livingAreaImageUrl} className="d-block w-100 slide-images" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="flex-content-container">
                <div>
                    <div className="content-container">
                        <h6>House Details:</h6>
                        <p className="content">{house}</p>
                    </div>
                    <div className="content-container">
                        <h6>Rent:</h6>
                        <p className="content">{rent}/-</p>
                    </div>
                    <div className="content-container">
                        <h6>Owner Name:</h6>
                        <p className="content">{ownerName}</p>
                    </div>
                    <div className="content-container">
                        <h6>Contact Number:</h6>
                        <p className="content">{contactNumber}</p>
                    </div>
                    <div className="content-container">
                        <h6>Configurartion:</h6>
                        <p className="content">{confirguation}</p>
                    </div>
                </div>
                <div>
                    <div className="content-container">
                        <h6>Area:</h6>
                        <p className="content">{area}</p>
                    </div>
                    <div className="content-container">
                        <h6>Furnishing:</h6>
                        <p className="content">{furnishing}</p>
                    </div>
                    <div className="content-container">
                        <h6>Available From:</h6>
                        <p className="content">{availableFrom}</p>
                    </div>
                    <div className="content-container">
                        <h6>Address:</h6>
                        <p className="content">{address}</p>
                    </div>
                    <div className="content-container">
                        <h6>Posted By and On:</h6>
                        <p className="content">{postedOn}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HouseDetails