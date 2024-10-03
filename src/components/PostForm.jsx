import PostInput from './UI/Inputs/PostInput';
import PostButton from './UI/Buttons/PostButton';
import classes from './UI/Inputs/PostInput.module.css'
import { useRef } from 'react';


export default function PostForm(props) {

	const titleValue = useRef();
	const bodyValue = useRef();

	function addNewPost(e) {
		e.preventDefault();
		const newPost = {
			title: titleValue.current.value, body: bodyValue.current.value, id: Date.now()
		}
		props.createPost(newPost);
	}

	return (
		<form className="post">
			<div style={{ width: '100%', margin: '5px 10px' }}>
				<PostInput cl={classes.postInputTitle} ref={titleValue} placeholder={'Title'} />
				<PostInput cl={classes.postInputTitle} ref={bodyValue} placeholder={'Body'} />
			</div>
			<PostButton text={'Создать'} onClick={addNewPost} />
		</form>
	)
}