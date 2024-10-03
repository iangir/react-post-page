import { TransitionGroup, CSSTransition } from "react-transition-group";
import Counter from "./Counter";
import PostItem from "./PostItem";
import "../styles/App.css";

export default function PostList(props) {

	return (
		<div className="App">
			<h1 style={{ textAlign: 'center' }}>{props.title}</h1>
			<Counter posts={props.posts} />
			<TransitionGroup>
				{
					props.posts.map((post, index) =>
						<CSSTransition
							key={post.id}
							timeout={500}
							classNames='post'
						>
							<PostItem delete={props.delete} number={index + 1} post={post} id={post.id} />
						</CSSTransition>
					)
				}
			</TransitionGroup>
		</div >
	)
}