import './navbar.css'

const Navbar = () => {
    return (
        <nav>
            <div className="navbar-container">
                <div className="logo-container">
                    <img className='logo' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAAAeHh7q6urf39+qqqr8/Px9fX3X19e4uLgSEhIpKSmzs7Pu7u5qamqPj4++vr5KSkoyMjKioqLQ0NCampo/Pz9cXFzNzc11dXX29vYXFxcNDQ3y8vKCgoJra2t4eHidnZ04ODhCQkJTU1MiIiKSkpJiYmLFxcVPT09hJLcYAAAPBUlEQVR4nO2dh7qqOBRGs2lSVLAigqgo4nn/F5w0OiioWO7kn/mO2DDLJLsleBESEhISEhISEhISEhISEhISEhISEhISEhISEhISEnq95EWobj/diCHlAFasf7oZwwkDeoYL/j+LiAFX+MaDQPl0U4aRAXCkBweAfxLRYD1IdADzHxyoBUAyUP+9ucjnINJsehcj/mMD1eFzUJuBRx/w/rG5aOSAwBEPEPxDAzWdgxgwuuaI9bnoHJLwF7mdHHA+QUvIBmoFUTuDdAKw39/CJ1UAtCb4FiPu6RMemKW5GIKKX3UA5/1tfEqFOWjt6CN6PlCL5mYHIb1dz97cwidllIYo1lYtIhZcvw5XehtK2ttb+YRqgNoad5XeZG5SQlv6pfzKqQNOt5HdaG5+krBoZOgc1KKE/FkVEdO5+IuENSOjRVP6xPrYYG4U2NDby+8Q1udgtOdP/ZXMTXzwPO8wDRJ6e7J+hbA+B3kPEiXj0lykktiN/yuEVUePx2ZSeNpziq5fKuhXCBvmYFJ6QbjJB2oJ8UcIC4DzkpHJtdKLc/HXCGtGBtUAEVKVRsSfIGxw9EnDyxStaG5+ibBmZJoBqeqIP0DY6ugbVRuo3094w9E3qor49YQNgDd6kKgyUL+dsGZkUPscTFVG/HJC556jb1TJ9X83YT8jk6s4F7+asK+RyVXM+uffW8Voyui7vrc4F7+2ZNqeTWwbVe6qAqL5pQX/G3PQhiZdy+9vKTJ+j4rZRNUPXsD19ljeaaV4/HBWJWwpMn6NsvXBJkd/gSU7UMdoxBuv1gibi4zfotvZxIUXmdACE6awdcJSYePLBmpz2TBTR8JJ0fV/11y85+g7EspGydx80UC96+i7jlJd/c65eN/RdyVES/XG+uLH5ORWtKlsSNSZEC1X3+f675YNUcVb3CREywsZqGyQf4fr71A2JISGrGDJF0zosMNVMyHaXIpz8fPbGTqVDdFFonHMfj/dIHXKDr0WQnS1v8ncdCwbXiz1yKSgKz9qGaXkpOH3mJt62bA5o7/AyjGwHA+PUn44aiVEjld0/Z/cydg5o+8Yl2YqIn7S3HTP6Lt7i/TU3jfMxR5lw96EaFwaqJ9BvLM+WFJ/QjSefjrT6FU2fIAQGclnM41+ZcN7hIqxqdfXjP0nXX83R5/pDuEeAKJ6J4XK58xN37LhTW+h/YE5mjUQ4PDgU66/z/og1QXCBVUyRiE/3HNCfBJJRmgKaT9nwoR6cTvD+1x//9L9jWribs0jdq9WXjwqmvqRImNxx2/H0r28TKXj/1IRsEkEJ75Mgb+G8s7SBSHUJ28vMuaAAZtdHRdfGiVb8EcAKeQKYFx8khJeFaQGbzU3m7wHTVYrCjssn7VIkeBM3IQcU7QFkF3CmSjhRkHjIMjNjfzwh3XVPANcjxjhyCg8rSbTspJ9+0oSHn8uuVXigKGpxctOkJoSgp0jPj5eOkqGiNwQI6NdOGHxex8fRlW1EuLhQLtfNwGP+AU5xFMgzJ5X5ZTwms7FSQCvZyprAnOU+kG7gbCHrgAjckv9AXZAF3LH4Q8S5YROalHfQIjWEG5l5uhTwsVDJ7ry7mIXYFznJruLO/bAX1EkpK5/u0ug44rrE1pSV0Yd/VOEYz7lHEpkSASNDkTcW3yulQj5BwfDWxqku5I1otb9GUJsU9KJZ+N7ZGF7yaclNrDU/qBxiRDJ0zj2Jq9AqKvle+OE4bH/GS+QGU/87sWMWiMlAJf6Dov5kArhkDo325LHCW0OyBzg6o8/rMQccQ4zPErGk7cRmtCIWCbUlBY1vZG1+UKDmAyQ9h7tzp1FAsL3EcoglcOprKGMcMVf1aKaPxzxNCIEwMGC7RaewmHqmkZxEUg7522EV5CkWmqDqoRosmtUzTbseQDNkolROUjZnsAi0147kwDtXYTjQJIks25uKoQdlfD9Mjjfw9/awas8rZ0gJgNbw6/DcO8hPBJCf10bbY8QkmsM6cyc0p6sAbKUn7+CfBVvIbQJoVQIGNPH+xPiQUh9tubSAuG+DohIL7NUFw/jJcmehicMKaGU1loy9SfczVlVQGOzLal9aUwUDVGTdJXl9xH61Ssf64TLRZMyfzGZs4R+F9G49nxp/URe0bCptR2ecMUIa/a0TrjKXES8lrLjtH0kVtmyW1Ka+bsRKTA07jGHJ1Q5oVmZNXXCI6gbomU4RjY/tNP2ZRGLRXyedroZzl54RYNEPc7ghE52nUD58SbCtC6qovSy87QHFJMF1rIEfxrSojtZ5YqH5jgH+RucUEkJoey97xBmtW3WvhlLinB4jUG3VlOQVJKapVf+8HGpnxKWY8xehBOwyBBd0orLNs5rO5tRyFUZtga/ND80hyfcm88TymDhv9cADvjmlDdZBz/mqv7WgBNQH2yXCIfZIZ1ORNiVHu43SiMYySoE1FrN85OokIWD56o7IgUO2QhKo3QyTLFt7j9gaSqErArB8rASYTa53TLhEo9sqqhIuIXTEHk+60TTLT/ajxAp3iwxgu6ER0x4DGeuU/YWYMZDLF/siUsMclOg0AnSQJgundW9BdW2Rx8uMOG4dgY8nvx4gF7U1tjY5DNGp66tiXBvE6tozzAhP3SL7ds9T+j6kpm+cKvrz8Hu8uGwXQf+Ob2zAZMcNxBGyw2TjBR+tAleSxiS75o6m+0h+z2fR7Urnjrfw7QB328hhHlEFYxRGLNDq2cfZlOhhZDYBGoRZBNPnSc3EmsxHPJrkOY8zlICX/LdFsK6pRn3JIzTu4xQnlQIt8TqxSQswgbe/0PP6eQH8yyhmB7ojUZch0+8Uk9bStSBMHuOES71am4RkrKRxoxfLWftqwT3FqSLR5c1vRnRmsYBfYxQi0x/TstjDXWHvrqQcC2IWTdeaV2QheGmPRihdY+QLP27aIZH0pNmhkHRUIYteMk0LGUxKm3oMITZ4lqdUONmRZtNFfAD6Ffka9Q2DUipoyBL0TvI0/1hCDPVCbcp08SywQpfsgyV8MSJntoNiWVk9+XPEILLbPsIHlgOapSRJb/4zBfcAo8i+3Sp++2EGkgm28GzLCQBivFU+mimhCozNSc/MzQ349Jxc1z6HCGi10Eze8f9tELimqfm4zH9oYOENE9BkZ8N0kZCM6ACT3XZUWC+kJB8ekBcscwJQzDZ+HpcWpoanvAdSWWEPBmvrx+q0ZormmeH88Jmrg6EWQGngZAachI9yjQZ356pU2wtu3bTknciGRz7PVqTb5GH4A+skHYglNK7DYQLGm2cSdVnQpYI6F3r2cKGCqwXNdJFxNFCwk85DOGtmEYHPkcmZJ6cmGu+vdW4izYSziXMOf2AnRvkdvr9hCimTA4lnLYsGD0gbez9rSFxNA3084n5WdkZirApasuqxxdgzhlbGlZZCSqVlSc0Ga9NIzpHfIQez/luk9cSZrFmThhkdcadROyAjTa+Rmyez9YJXqYrmNnizByb6DKhNmlRT8JMBUK+hRHR7JsQqmcV+0HJvVs576ndOuJHOln+KhNOuuxUeJRQCk4pIvawUzSNwFaGKA5vUue6CoJVZR7u6rsS63sTHybMJ5x2mcMGzgPt/pLTur7r4y/ygV1fjxNKeWymrSD7EdftRH72t15W7mh1Tb8wzed2OyZBztsIIa6sfCUHerKxd4oBni2eahGOMiGyWefNuFEj9a43EtK9Erkj1oiXV/aA/XTzXqZ+omUL34SEMIZ8NpBi0BsJr2fiGjLXp2DrRWNu3IpDX54GsVKGRDe3jfkW3fi9fXil0XEWC5DokWfij++iLyrNoIBcgszak/j++o2EDi0hZoRe6AasgPSKkI0oTBEvGo9zcSL4RltK4tJzkI/StWWSMQXnZ6uluTJE48xstkJ2vpYJO/nfJsLM2ic3M2A3ywPpLkhrr750BerCEWOX54ZnTFcm1Lv4pTohdt7ppRlBufxZzS1m6ZAcm0ulvBr9CjkB3xjFTc1Kqu7zPnbpxDohWmRlgX35O6oSntPwm3nDl2sSYudKKjBs7DvYYJevtzg/SNiqKuGcz/ftC3LeFinGKgzn7JuUC6OUNlqJBybUTA7mPFd5uiuV11HWlzLhIiuX3Pr8JwiVNCY+H/q3uo92fIzgiVgiPGW/BZjv72NNas0tJuMmZW+vEKp8YVEe/NeV9jP+Qcvsyq7tDt8lhBq5MCRvwIXa82KDSoQhwLqikwRZNbtCOONLNqNnF0XvSuGxbrJfpYTXDVpQwiseoYWr8Rxq/vOAuUxIAt7a2W0zy5LKhDrvOrlpT/2LdWQTQgeXZ8BjPE7dgBDiKFFe56+UQcYjVSXDWt4h0vIiISm91k5um9m6bpkw4Y7YPdfe83olLP90A0oon435CIEfaUjHLd/zyIMMWM2ykbq7kujYQ1dSjc8Jt2eSG+wr8tbp0h3bE5UR6px7DG+4tAttLfo96gD6En9eZJszhRJOT9k/4YCHKPkScIq10bHrdKbIL/XhFYeWQXNdh8a/9BQFQn69v9589c7LJQd0GW+P+3CGw37Ln68CnGvo8IejOfoC3MLtiP7SQGgruIHR+EJtMCdcu6RkFh5XDTqSXrQWuyLhlcfnChzeAogJ/HhJ2n9EO2lEtvBEZJ/7LNgfWcKmGQbuRBc75zDE/TvagMGuMCCEuj036fpOi9X3aXAY7B1tiwk3hHDFvpjr8FcBZ9IO4G7sgLTa5b/CnYxAsrKCqu4aaOTKsD5bY5gl5smnk3cbnAIw2UIILK6N4svOPsAMDLTbIoNuK0bK9BUL90XJtzRx1nig+fPD4ZC2iFYVfI9plEC0hxP5dznmEvnHOaSYPLz30/3GpEDYNg9T+f6ZvOkc/OnyZQaxM7nZJrmnEdq0VXi5fBOLNNIsKX06MAP8P31N8RmznwJ2Kp/+NRvbUVQ/V9la4f1eea/PGoV+R61XwH6BXhPjGHfn+OcU329+B2l3rPQnJayL0P9bO5VoiRR1QC2GuHykq+iCUBDyNdqBFLwnIRQSEhL6CmnkB56NJdqNjddosAWmR6VIlmXFU3T1rdcouv+Zb5ZGlN6+QJ/mERL6F1X7VczuOuC3b8jbk8F/XOEZGY9XJ8nWAZ28/TD82qGQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJDQb+s/DPBdz2QeLFwAAAAASUVORK5CYII=" alt="logo" />
                    <h3>Live In Heaven</h3>
                </div>
                <div className='search-box-container'>
                    <input type="search" className="search-box" placeholder="Search For Houses" />
                    <i className="fa fa-search search-icon" aria-hidden="true"></i>
                </div>
                <div>
                    <a href="/" className="navbar-buttons">Home</a>
                    <a href="/about" className="navbar-buttons">About</a>
                    <a href="/contact" className="navbar-buttons">Contact</a>
                    {/* <a href="/profile" className="navbar-buttons">Profile</a> */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar