import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetching from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

export default function PostPage() {
	const { id } = useParams();
	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);

	const [fetchPostById, isLoading, error] = useFetching(async (id) => {
		const response = await PostService.getById(id);
		setPost(response.data);
	})

	const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
		const response = await PostService.getCommentsById(id);
		setComments(response.data);
	})

	useEffect(() => {
		fetchPostById(id);
		fetchComments(id);
	}, [])

	return (
		<div>
			{isLoading
				? <Loader />
				: <div>
					<h1>POST № {id}. {post.title}</h1>
					<div> {post.body} </div>
				</div>
			}
			<h2 style={{ margin: '20px 0' }}>Comments:</h2>
			{isComLoading
				? <Loader />
				: <div>
					{comments.map(comment =>
						<div style={{ margin: '15px 0' }} key={comment.id}>
							<h4>Name: {comment.name}</h4>
							<h4>Email: {comment.email}</h4>
							<p>{comment.body}</p>
						</div>
					)}
				</div>
			}
		</div>

	)
}