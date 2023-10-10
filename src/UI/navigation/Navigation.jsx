import { Link } from "react-router-dom";
import MyButton from "../button/MyButton";
import { useContext } from "react";
import { AuthContext } from "../../context/context";

const Navigation = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  let exit = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }
  return (<div style={{display:'flex',flexDirection:'column'}}>

    <MyButton style={{ height: '30px', marginBottom:'10px', alignSelf:'end'}} onClick={exit}>выйти</MyButton>

    <nav className="nav">
        <Link className="nav_el" to="/">Home</Link>
        <Link className="nav_el" to="/about">About</Link>
        <Link className="nav_el" to="/posts">Posts</Link>
        <Link className="nav_el" to="/login">Login</Link>
    </nav>

  </div>

  );
};

export default Navigation