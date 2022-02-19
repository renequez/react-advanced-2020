import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

const Product = ({ image, name, price }) => {
	const url = image && image.url;

	return (
		<article className='product'>
			{/* <h4>single product</h4> */}
			<h4>{name}</h4>
			<img src={url || defaultImage} alt={name} />
			<p>${price || 'price missing'}</p>
		</article>
	);
};

Product.propTypes = {
	image: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
};

// Product.defaultProps = {
// 	name: 'name missing',
// 	price: 'price missing',
// 	image: { url: defaultImage },
// };

export default Product;
