import { useContext } from "react";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";
import { AuthContext } from "../context/context";

const Login = (props) => {
	const {isAuth,setIsAuth} = useContext(AuthContext);
	const login = (e) => {
		e.preventDefault();
		setIsAuth(true);
		localStorage.setItem('auth', 'true');
	}
	return (
		<div style={{width:"50%", margin:"35px auto"}}>
			<h1>Страница для логина</h1>
			<form onSubmit={login}>
				<MyInput type="text" placeholder="Введите логин"/>
				<MyInput type="text" placeholder="Введите пароль"/>
				<MyButton>Войти</MyButton>
			</form>
		</div>
	);
};

export default Login