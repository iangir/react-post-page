import classes from './PostButton.module.css'

export default function PostButton({ text, ...props }) {
	return (
		<button {...props} className={classes.postBtn}>
			{text}
		</button>
	)
}