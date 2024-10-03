import PostSelect from "./UI/Selects/PostSelect.jsx";
import PostInput from "./UI/Inputs/PostInput.jsx";
import classes from './UI/Inputs/PostInput.module.css'
import { useRef } from "react";

export default function PostFilter({ filter, setFilter }) {
	const value = useRef()

	return (
		<div>
			<PostInput
				ref={value}
				value={filter.query}
				onChange={e => setFilter({ ...filter, query: e.target.value })}
				cl={classes.postInputTitle}
				placeholder={'Поиск...'} />

			<PostSelect
				value={filter.sort}
				onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
				defaultValue={'Сортировка по:'}
				options={[
					{ value: 'title', name: 'По заголовку' },
					{ value: 'body', name: 'По описанию' }
				]} />
		</div>
	)
}