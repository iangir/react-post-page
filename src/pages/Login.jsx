import React, { useContext } from 'react'
import PostInput from '../components/UI/Inputs/PostInput'
import PostButton from '../components/UI/Buttons/PostButton'
import classes from '../components/UI/Inputs/PostInput.module.css'
import { AuthContext } from '../utils/context'

export default function Login() {
	const { isAuth, setIsAuth } = useContext(AuthContext)
	function login(event) {
		event.preventDefault();
		setIsAuth(true);
		localStorage.setItem('auth', 'true');
	}
	return (
		<div>
			<h1>Sign in</h1>
			<form onSubmit={login}>
				<PostInput cl={classes.postInputTitle} placeholder='Login' />
				<PostInput cl={classes.postInputTitle} placeholder='Password' type='password' />
				<PostButton text='Login' />
			</form>
		</div>
	)
}
