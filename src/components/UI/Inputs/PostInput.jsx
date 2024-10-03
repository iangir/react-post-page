import React from "react";

export default React.forwardRef(function Input(props, ref) {

	return (
		<div>
			<input ref={ref} className={props.cl} {...props}></input>
		</div>
	)
});