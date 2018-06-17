import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
	render(){
		return(
			<div className="col-md-3">
			<div className="card-flex">
				<div className="card-flex-wrapper">
					<div className="card-flex-image">
						{this.props.year} 
					</div>
					<div className="card-flex-content">
						<p>{this.props.name}</p>
					</div>
                </div>
			</div>	
			</div>	
		);
	}
}

Card.propTypes = {
  year: PropTypes.string,
  name: PropTypes.string
};

export default Card;
