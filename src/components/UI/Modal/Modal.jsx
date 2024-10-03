import cl from './Modal.module.css';
import React from 'react';

export default function Modal({ children, visible, setVisible }) {
	const rootClasses = [cl.modal];
	if (visible) {
		rootClasses.push(cl.active)
	}

	return (
		<div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
			<div className={cl.modalContent} onClick={e => e.stopPropagation()}>
				{children}
			</div>
		</div>
	)
}