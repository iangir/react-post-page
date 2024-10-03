import React from "react";
import PostButton from "./UI/Buttons/PostButton";
import '../styles/App.css';
import { useNavigate } from "react-router-dom";

export default function PostItem(props) {

	const router = useNavigate();

	function deletePost(e) {
		e.preventDefault();
		props.delete(props.id);
	}

	return (
		<div className="post">
			<div className="post__content">
				<h1 className="post__title">{props.post.id}. {props.post.title}</h1>
				<p className="post__body">{props.post.body}</p>
			</div>
			<div className="post__btns">
				<PostButton text={'Открыть'} onClick={() => router(`/posts/${props.post.id}`)} />
				<PostButton text={'Удалить'} onClick={deletePost} />
			</div>
		</div>
	)
}