import './contact.css'

const Contact = () => {
    return (
        <div className='contact-bg-container'>
            <h1 className='contact-heading'>Contact Us</h1>
            <div className='contact-details-container'>
                <div className='contact-container'>
                    <img src="https://www.nicepng.com/png/detail/258-2584033_please-contact-us-by-calling-from-7am-11.png" alt="" className="contact-image" />
                    <h3>BY PHONE</h3>
                    <p>(Monday to Friday, 9am to 5pm (IST))</p>
                    <p>Contact Number: +91 6380681455</p>
                </div>
                <div className='contact-container'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB7NWcnj6RP-v1T6ZcbbHWpI9b5gFYxqojtcvY1B0DlWHcjs-_HO-fkJDnJMw1PykxPbk&usqp=CAU" alt="" className="contact-image" />
                    <p>Start A New Case </p>
                    <p>
                        Just Send us your questions or <br />
                        concerns by strarting a new case and <br />
                        we will give you the help you need.
                    </p>
                    <button className='button'>Start Here</button>
                </div>
                <div className='contact-container'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGQ3Z8oiuji2w2rbCtbVC5hxBB-HvNTyBbNA&usqp=CAU" alt="" className="contact-image" />
                    <h6>LIVE CHAT</h6>
                    <p>
                        Chat With a member of our <br />
                        in-house team.
                    </p>
                    <button className='button'>Start Chat</button>
                </div>
            </div>
        </div>
    )
}

export default Contact