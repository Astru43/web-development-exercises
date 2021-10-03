import PropTypes from 'prop-types';
import React, { Component } from 'react';
import GridItem from './GridItem';

export default class ItemGrid extends Component {
    render() {
        return (
            <main className="grid">
                {this.props.items.map((item, index) => {
                    return (
                        <GridItem
                            key={index}
                            item={item}
                            index={index}
                            onClick={this.props.onItemClicked} />
                    );
                })}
            </main>
        );
    }
}

ItemGrid.propTypes = {
    onItemClicked: PropTypes.func,
    items: PropTypes.arrayOf(
        PropTypes.shape({
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
        }))
};
