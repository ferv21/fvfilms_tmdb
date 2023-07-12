import {useState} from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi";
import "./styles.css"

const Navbar = () => {

    const [search, setSearch] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!search) return;
        navigate(`/search?q=${search}`);
        setSearch("");
    }

    return (
        <nav id="navbar">
            <div className="container nav-container">
                <h2>
                    <Link to="/" style={{display:"flex", alignItems:"center", gap:"8px"}}> 
                        <BiCameraMovie/> FV Films
                    </Link>
                </h2>
                <form onSubmit={handleSubmit}>
                    <input 
                    className="search" 
                    type="text" 
                    placeholder="Buscar Filmes"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    />
                    <button className="search__btn" type="submit">
                        <BiSearchAlt2/>
                    </button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar;