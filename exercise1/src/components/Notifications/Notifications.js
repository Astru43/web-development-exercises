import React, { Component } from 'react'
import NotificationItem from './NotificationItem'
import styles from '../../styles/Notifications.module.css'

export default class Notifications extends Component {
    render() {
        const { notifications } = this.props

        var notificationItems = notifications.map((item, index) => {
            return <NotificationItem contentTopic={item.topic} desc={item.desc} key={index}></NotificationItem>
        })

        return (
            <div className={styles.container}>
                {notificationItems}
            </div>
        )
    }
}
