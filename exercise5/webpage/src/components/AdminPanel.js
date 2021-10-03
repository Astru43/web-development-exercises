import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from '../styles/AdminPanel.module.scss';

export default class AdminPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            /** @type {Item.Item} */
            item: {
                item: null,
                seller: null,
                description: null,
                category: null,
                price: null,
                shipping: null,
                rating: null,
                img: null,
            }
        };

        this.onChange = this.onChange.bind(this);
    }

    /**
     * Update all the form items to state.
     *
     * @param {Event} event
     * @memberof AdminPanel
     */
    onChange(event) {
        let item = { ...this.state.item };

        switch (event.target.name) {
            case 'item':
                item.item = this.checkValue(event.target.value);
                break;
            case 'seller':
                item.seller = this.checkValue(event.target.value);
                break;
            case 'description':
                item.description = this.checkEmptyString(event.target.value);
                break;
            case 'price':
                item.price = this.convertToPriceObject(event.target.value);
                break;
            case 'shipping':
                item.shipping = this.convertToPriceObject(event.target.value);
                break;
            case 'category':
                item.category = this.convertToArray(event.target.value);
                break;
            case 'rating':
                item.rating = this.checkRating(event.target.value);
                break;
            case 'img':
                item.img = this.checkEmptyString(event.target.value);
                break;
            default:
        }

        this.setState({ item });
    }

    /**
     * Check if the string is empty string and return null
     * or return the string.
     * 
     * @param {any} value
     * @return {null | any} 
     * @memberof AdminPanel
     */
    checkEmptyString(value) {
        if (value === '') return null;
        else return value;
    }

    /**
     * Check if the value is empty string and return null
     * or return the value as a number.
     * 
     * @param {string} value
     * @return {null | number} 
     * @memberof AdminPanel
     */
    checkRating(value) {
        if (value === '') return null;
        else return Number(value);
    }

    /**
     * Check if the string is empty string, string or number
     * and return the corresponding result.
     *  
     * If the number is negative it is returned as a string.
     * 
     * @param {string} value
     * @return {null | string | number} 
     * @memberof AdminPanel
     */
    checkValue(value) {
        if (value === '') return null;
        else if (Number.isNaN(Number(value))) return value;
        else if (Math.round(Number(value)) < 0 || Object.is(Math.round(Number(value)), -0)) return value;
        else return Math.round(Number(value));
    }

    /**
     * Converts string if its number and not empty to
     * price object.
     * 
     * @param {string} value
     * @return {null | {integer: number, decimal: number}}
     * @memberof AdminPanel
     */
    convertToPriceObject(value) {
        if (value !== '') {
            let price = Math.round((Number(value) + Number.EPSILON) * 100) / 100;
            return {
                integer: Number(price.toFixed(2).split('.')[0]),
                decimal: Number(price.toFixed(2).split('.')[1])
            };
        } else return null;
    }


    /**
     * Convert string to an string array or return null if its empty string.
     *
     * @param {string} value
     * @return {null | string[]} 
     * @memberof AdminPanel
     */
    convertToArray(value) {
        if (value === '') return null;
        if (typeof value === 'string') {
            return value.split(/(?:; )|(?:, )/);
        }
    }

    render() {
        return (
            <form className={styles.adnimPanel} onSubmit={(e) => this.props.onSubmit(e, this.state.item)}>

                <label>Item name</label>
                <input name="item" type="text" placeholder="Name" onChange={this.onChange} />

                <label>Item seller</label>
                <input name="seller" type="text" placeholder="Seller/Manufacturer" onChange={this.onChange} />

                <label>Item description</label>
                <input name="description" type="text" placeholder="Description" onChange={this.onChange} />

                <label>Item price</label>
                <input name="price" type="number" step="0.01" min="0" placeholder="12.35" onChange={this.onChange} />

                <label>Item shipping</label>
                <input name="shipping" type="number" step="0.01" min="0" placeholder="12.35" onChange={this.onChange} />

                <label>Item categories</label>
                <input name="category" type="text" placeholder="category1; category2; categoryN" onChange={this.onChange} />

                <label>Item rating</label>
                <input name="rating" type="number" step="0.01" min="0" max="5" placeholder="5" onChange={this.onChange} />

                <label>Item image</label>
                <input name="img" type="text" placeholder="res/test_img_0.jpg" onChange={this.onChange} />

                <input type="submit" value="Send" onClick={() => console.log(this.state.item)} />
                <label className={styles.hint}>Click any item to delete it</label>
            </form>
        );
    }
}

AdminPanel.propTypes = {
    onSubmit: PropTypes.func
};
