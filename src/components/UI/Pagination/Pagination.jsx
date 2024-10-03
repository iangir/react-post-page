import React from "react";
import usePages from "../../../hooks/usePages";


export default function Pagination({ totalPages, page, changePage }) {
	let pagesArray = usePages(totalPages);
	return (
		<div className='page__wrapper'>
			{pagesArray.map(p => <span
				onClick={() => changePage(p)}
				className={page === p ? 'page page__current' : 'page'}
				key={p}>{p}
			</span>)}
		</div>
	)
}