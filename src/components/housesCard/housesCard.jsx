import { Link } from 'react-router-dom';
import './housesCard.css'

const HouseCard = (props) => {
    const { houseDetails } = props
    const { id, house, rent, contactNumber, houseImageUrl, location } = houseDetails;
    return (
        <Link to={`/${id}`} className='link'>
            <div>
                <li className='card-container'>
                    <img src={houseImageUrl} alt="FlatImage" />
                    <div className='details-container'>
                        <div className='house-details'>
                            <h3 className='heading'>House Details:</h3>
                            <p className='paragraph'>{house}</p>
                        </div>
                        <div className='elements-container'>
                            <div className='house-details'>
                                <h4 className='heading'>Rent:</h4>
                                <p className='paragraph'>{rent}/-</p>
                            </div>
                            <div className='house-details'>
                                <h4 className='heading'>Phone No:</h4>
                                <p className='paragraph'>{contactNumber}</p>
                            </div>
                        </div>
                        <div className='house-details'>
                            <h4 className='heading'>Location:</h4>
                            <p className='paragraph'>{location}</p>
                        </div>
                    </div>
                </li>
            </div>
        </Link>
    )
}

export default HouseCard