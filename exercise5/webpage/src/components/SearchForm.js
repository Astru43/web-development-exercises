import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from '../styles/SearchForm.module.scss';


export default class SearchForm extends Component {
    render() {
        return (
            <header className={styles.search}>
                <button onClick={this.props.onClear}>Clear search</button>

                <input placeholder="Search" id="search"
                    value={this.props.searchString}
                    onChange={this.props.onChanged} ></input>
                {/* <DropdownMenu categories={this.props.categories}></DropdownMenu> */}

                <select className={styles.categories} defaultValue="NULL" onChange={this.props.onSelected}>
                    <option value="NULL" disabled hidden>Categories</option>
                    {
                        this.props.categories.sort().map((category, index) => {
                            return <option value={category} key={index}>{category}</option>;
                        })
                    }
                </select>

                <select className={styles.sellers} defaultValue="NULL" onChange={this.props.onSelected}>
                    <option value="NULL" disabled hidden>Sellers</option>
                    {
                        this.props.sellers.sort().map((seller, index) => {
                            return <option value={'by ' + seller} key={index}>{seller}</option>;
                        })
                    }
                </select>

                <button className={styles.admin} onClick={this.props.onAdminClick}>{this.props.adminMode ? 'Disable' : 'Admin mode'}</button>

            </header>
        );
    }

}

SearchForm.propTypes = {
    onChanged: PropTypes.func.isRequired,
    onSelected: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
    onAdminClick: PropTypes.func.isRequired,
    
    
    adminMode: PropTypes.bool,
    searchString: PropTypes.string,
    categories: PropTypes.arrayOf(
        PropTypes.string
    ).isRequired,
    sellers: PropTypes.arrayOf(
        PropTypes.string
    ).isRequired
};
