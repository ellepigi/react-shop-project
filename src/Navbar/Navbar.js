import "./Navbar.css"
import { Link } from "react-router-dom"



function Navbar(){
    return(
        <nav>
            <div className="logo"><h1><Link to='/'>MyShop</Link></h1></div>
            <div className="pages">
                <ul>
                <Link to='/'><li> Home </li></Link>
                    <li> Categories </li>
                    <li> My Cart </li>
                
                </ul>
                <input placeholder="Search for products..."></input>
            </div>
        </nav>
    )
}

export default Navbar