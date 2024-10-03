import React, { useEffect, useRef, useState } from "react";
import "../styles/App.css";
import PostList from "../components/PostList.jsx";
import PostForm from "../components/PostForm.jsx";
import Modal from "../components/UI/Modal/Modal.jsx";
import PostFilter from "../components/PostFilter.jsx";
import PostButton from "../components/UI/Buttons/PostButton.jsx";
import usePosts from "../hooks/usePosts.js";
import PostService from "../API/PostService.js";
import Loader from "../components/UI/Loader/Loader.jsx";
import useFetching from "../hooks/useFetching.js";
import { getPageCount } from "../utils/pages.js";
import Pagination from "../components/UI/Pagination/Pagination.jsx";
import { useObserver } from "../hooks/useObserver.js";
import PostSelect from "../components/UI/Selects/PostSelect.jsx";

export default function Posts() {
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({ sort: "", query: "" });
	const [modal, setModal] = useState(false);
	const [totalPages, setTotalPages] = useState(0);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
	const lastElement = useRef();

	const [fetchPosts, isPostsLoading, postError] = useFetching(
		async (limit, page) => {
			const response = await PostService.getAll(limit, page);
			setPosts([...posts, ...response.data]);
			const totalCount = response.headers["x-total-count"];
			setTotalPages(getPageCount(totalCount, limit));
		}
	);

	useObserver(lastElement, page < totalPages, isPostsLoading, () => {
		setPage(page + 1);
	});

	useEffect(() => {
		fetchPosts(limit, page);
	}, [page, limit]);

	function createPost(newPost) {
		setPosts([...posts, newPost]);
		setModal(false);
	}

	function deletePost(postId) {
		setPosts(posts.filter((post) => post.id !== postId));
	}

	function changePage(p) {
		setPage(p);
	}

	return (
		<div className='App'>
			<PostButton text={"Загрузить посты"} onClick={() => fetchPosts()} />
			<PostButton
				style={{ marginTop: "30px" }}
				text={"Создать пост"}
				onClick={() => setModal(true)}
			/>
			<Modal visible={modal} setVisible={setModal}>
				<PostForm createPost={createPost} />
			</Modal>
			<PostFilter filter={filter} setFilter={setFilter} />
			<PostSelect
				value={limit}
				onChange={(value) => setLimit(value)}
				defaultValue='Количество элементов на странице'
				options={[
					{ value: 5, name: "5" },
					{ value: 10, name: "10" },
					{ value: 25, name: "25" },
					{ value: -1, name: "Показать все" },
				]}
			/>
			{postError && <h1>Произошла ошибка: ${postError}</h1>}
			{isPostsLoading && (
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						marginTop: "50px",
					}}
				>
					<Loader />
				</div>
			)}
			<PostList
				delete={deletePost}
				posts={sortedAndSearchedPosts}
				title={"Post List"}
			/>
			<div ref={lastElement} style={{ height: 20, background: "teal" }}></div>
			<Pagination page={page} changePage={changePage} totalPages={totalPages} />
		</div>
	);
}
