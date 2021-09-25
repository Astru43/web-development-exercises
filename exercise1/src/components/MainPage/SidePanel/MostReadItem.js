import React, { Component } from 'react'
import styles from '../../../styles/MainPage.module.css'

export default class MostReadItem extends Component {
    render() {
        const {item} = this.props
        return (
            <li className={[styles.paddingTopBottom16, styles.borderBottom].join(' ')}>
                <div className={styles.listItemNumbered}>
                    <h3 className={styles.itemContent}>
                        <span className={styles.itemTitle}>
                            {item.title}
                            <span className={styles.divider}>|</span>
                        </span>

                        <span className={styles.itemDescription}>{item.desc}</span>
                    </h3>
                </div>
            </li>
        )
    }
}
