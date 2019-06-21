import React from 'react';

const Card = ({name,email,id}) => {
	return(
		<div className = 'tc bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5'>
			<img alt="robocards" src = {`https://robohash.org/${id}?200*200`}/>
			<div>
				<h1>{name}</h1>
				<p className ='heading1'>{email}</p>
			</div>

		</div>
		);
}

export default Card;