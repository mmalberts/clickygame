import React from 'react';
import Image from "./Image";

const ImageField = props => {
	const images = props.images;
	console.log(images);
	return (
		<div className="row">
			<div className="col-md-2"></div>
			<div className="col-md-8">
				<div className="row">
					{images.map(image => (
						<Image 
							src={image.src}
							key={image.id}
							id={image.id}
							data-guessed={image.guessed}
							handleImageClick={props.handleImageClick}
						/>
					))}	
				</div>
			</div>
			<div className="col-md-2"></div>
		</div>		
	);
};

export default ImageField;