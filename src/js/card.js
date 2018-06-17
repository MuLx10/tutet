import React from 'react';
import PropTypes from 'prop-types';


class Card extends React.Component {
			
	render(){
		return(
			<div className="col-md-3">
				<div className="card-flex">
				<div className="card-flex-wrapper">
					<div className="card-flex-image">
						<h3>{this.props.title}</h3>
						<div className="line" style={{backgroundColor: this.props.clr}}></div>
					</div>
					<div className="card-flex-content">
						<ul>
					        <li>{this.props.release_year}</li>
					        <li>{this.props.genre}</li>
					    </ul>
						<div className="line2" style={{backgroundColor: this.props.clr}}></div>
						<p>
							Platform :{this.props.platform} <br />
							Score :{this.props.score} <br />
							Editors choice :{this.props.editors_choice} 
						</p>
					</div>
                </div>
			</div>	
			</div>	
		);
	}
}

Card.propTypes = {
  title: PropTypes.string,
  url:PropTypes.string,
  platform:PropTypes.string,
  score: PropTypes.int,
  genre:PropTypes.string,
  editors_choice: PropTypes.string,
  release_year: PropTypes.int,
  clr: PropTypes.string
};

export default Card;
