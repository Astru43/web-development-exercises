import React, { Component } from 'react'
import styles from '../../styles/Notifications.module.css'

export default class NotificationItem extends Component {
    render() {
        if (this.props.contentTopic === "AD") return (
            <div className={styles.item}>
                <p className={`${styles.text} ${styles.AD}`}>
                    <b>
                        {this.props.contentTopic + ": "}
                    </b>
                    {this.props.desc}
                </p>
            </div>
        )
        else return (
            <div className={styles.item}>
                <p className={styles.text}>
                    <b>
                        {this.props.contentTopic + ": "}
                    </b>
                    {this.props.desc}
                </p>
            </div>
        )
    }
}
