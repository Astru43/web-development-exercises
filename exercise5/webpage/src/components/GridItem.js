import PropTypes from 'prop-types';
import React, { Component } from 'react';
import cx from 'classnames';
import styles from '../styles/GridItem.module.scss';
import RatingStars from './RatingStars';

export default class GridItem extends Component {
    render() {
        /** @type {{item: Item.Item, index: number, onClick: Function}} */
        const { item, index, onClick } = this.props;
        return (
            <div className={styles.itemContainer} onClick={(e) => onClick(index, e)}>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={item.img} alt="" />
                </div>

                <p className={cx(styles.marginTopBottom8, styles.lineHeight1)}>
                    <span className={cx(styles.itemTitle, styles.cutText)}>{item.item}</span>
                    <span className={styles.seller}>{`by ${item.seller}`}</span>
                </p>

                <p className={cx(styles.lineHeight1, styles.cutText, styles.marginTopBottom8, styles.description)}>
                    {item.description}
                </p>

                <RatingStars item={item}></RatingStars>
                <div className={styles.price}>
                    <span>
                        {item.price.integer}
                    </span>
                    <span className={styles.decimal}>
                        {item.price.decimal}
                    </span>
                </div>

                <div className={styles.shipping}>
                    {item.shipping.integer + '.' + item.shipping.decimal + ' shipping'}
                </div>
            </div>

        );
    }
}

GridItem.propTypes = {
    onClick: PropTypes.func,
    index: PropTypes.number,
    item: PropTypes.shape({
        img: PropTypes.string,
        item: PropTypes.string,
        description: PropTypes.string,
        category: PropTypes.arrayOf(PropTypes.string),
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
