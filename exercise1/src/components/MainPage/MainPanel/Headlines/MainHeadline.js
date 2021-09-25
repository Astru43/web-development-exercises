import React, { Component } from 'react'
import styles from '../../../../styles/MainPage.module.css'


export default class MainHeadline extends Component {
    render() {
        const { topic } = this.props
        return (
            <div>
                <img className={styles.mainImage} src={topic.img_src} alt=""></img>
                <h2>
                    <span className={styles.topicTitle} style={{ color: topic.color }}>
                        {topic.title}
                        <span className={styles.divider}>|</span>
                    </span>

                    <span>{topic.desc}</span>
                </h2>
                <div className={styles.topicInfo}>
                    <span className={styles.topic}>{topic.topic}</span>
                    <span>{topic.time}</span>
                </div>
            </div>
        )
    }
}
