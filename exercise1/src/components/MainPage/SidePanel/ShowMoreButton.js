import React, { Component } from 'react'
import styles from '../../../styles/MainPage.module.css'

export default class ShowMoreButton extends Component {
    render() {
        return (
            <div className={[styles.paddingTopBottom16, styles.showMore].join(' ')}>
                <button>Show more</button>
            </div>
        )
    }
}
