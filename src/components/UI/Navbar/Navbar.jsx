import { Link } from "react-router-dom"
import PostButton from "../Buttons/PostButton"
import { useContext } from "react"
import { AuthContext } from "../../../utils/context"

export default function NavBar() {
	const { isAuth, setIsAuth } = useContext(AuthContext);
	function logOut(event) {
		event.preventDefault();
		setIsAuth(false);
		localStorage.removeItem('auth')


	}
	return (
		<div className="navBar">
			<div className="navBar__links">
				<Link to="/about"><PostButton text={'About us'} /></Link>
				<Link to="/Posts"><PostButton text={'Posts'} /></Link>
				{isAuth
					? <Link to="/login"><PostButton text={'Log out'} onClick={logOut} /></Link>
					: <Link to="/login"><PostButton text={'Login'} /></Link>
				}
			</div>
		</div>
	)
}