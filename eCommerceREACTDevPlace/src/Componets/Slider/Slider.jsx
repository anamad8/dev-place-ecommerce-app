import React from 'react'
import style from './Slider.module.css'


const Carousel = ({ images }) => {
	return (
		<section className={style.slider}>
			<div className={style.content}>
				{images.map((image) => (
					<div key={image.id} className={style.item}>
						<img src={image.image} alt={image.title} />
						<p className={style.description}>{image.title}</p>
					</div>
				))}
			</div>
		</section>
	)
}

export default Carousel