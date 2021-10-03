import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';


export default class RatingStars extends Component {
    render() {
        return (
            <div>
                {
                    this.getStarts(this.props.item)
                }
            </div>
        );
    }

    getStarts(item) {
        var stars = [];
        for (var i = 0; i < 5; i++) {
            stars.push(this.returnStar({ index: i, item }));
        }
        return stars;
    }

    returnStar = ({ index, item }) => {
        let stars = Math.round(item.rating * 2) / 2;

        if (stars >= index + 1) {
            return <FaStar color="orange" key={index} />;
        } else if (stars === index + 0.5) {
            return <FaStarHalfAlt color="orange" key={index} />;
        } else {
            return <FaRegStar color="orange" key={index} />;
        }
    }
}

RatingStars.propTypes = {
    item: PropTypes.shape({
        img: PropTypes.string,
        item: PropTypes.string,
        price: PropTypes.shape({
            decimal: PropTypes.string,
            integer: PropTypes.string
        }),
        shipping: PropTypes.shape({
            decimal: PropTypes.string,
            integer: PropTypes.string
        }),
        rating: PropTypes.number,
        seller: PropTypes.string
    })
};
