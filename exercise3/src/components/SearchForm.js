import PropTypes from "prop-types";
import React, { Component } from "react";
import styles from '../styles/SearchForm.module.css'

export default class SearchForm extends Component {
    render() {
        return (
            <div className={styles.search}>
                <input placeholder="Search" onChange={this.props.onChanged}></input>
            </div>
        );
    }
}

SearchForm.propTypes = {
  onChanged: PropTypes.func.isRequired
}
