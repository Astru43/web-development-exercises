import PropTypes from "prop-types";
import React, { Component } from 'react'
import cx from 'classnames'
import styles from '../styles/GridItem.module.css'
import RatingStars from "./RatingStars";

export default class GridItem extends Component {
    render() {
        const { item } = this.props
        return (
            <div className={styles.itemBorder}>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={item.img} alt="" />
                </div>
                <p className={cx(styles.marginTopBottom8, styles.lineHeight1)}>
                    <span className={cx(styles.itemTitel, styles.cutText)}>{item.item}</span>
                    <span className={styles.seller}>{`by ${item.seller}`}</span>
                </p>
                <RatingStars item={item}></RatingStars>
                <div className={styles.price}>
                    <span className={styles.unit}>$</span>
                    <span>
                        {item.price.integer}
                    </span>
                    <span className={styles.desimal}>
                        {item.price.desimal}
                    </span>
                </div>
            </div>

        )
    }
}

GridItem.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string,
    item: PropTypes.string,
    price: PropTypes.shape({
      desimal: PropTypes.string,
      integer: PropTypes.string
    }),
    shipping: PropTypes.shape({
        desimal: PropTypes.string,
        integer: PropTypes.string
      }),
    rating: PropTypes.number,
    seller: PropTypes.string
  })
}
