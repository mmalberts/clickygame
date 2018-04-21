import React from 'react';

const styles = {
	imgdiv: {
		height: "200px",
		width: "200px",
		margin: "10px",
		overflow: "auto"
		// maxWidth: "200px"
	},
	img: {
		maxHeight: "200px"
	}
}

const Image = props => {
	return (
		<div className="image-div" style={styles.imgdiv}>
			<img 
				alt={props.src}
				src={props.src}
				id={props.id}
				onClick={props.handleImageClick} 
				style={styles.img}
			/>
		</div>
	);
};

export default Image;