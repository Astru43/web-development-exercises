import React, { Component } from 'react'
import styles from '../../../../styles/MainPage.module.css'

export default class SideHeadline extends Component {
    render() {
        const { headline } = this.props
        return (
            <div className={styles.border}>
                <div className={styles.sideTopic}>
                    <div>
                        <h3>
                            <span style={{ color: headline.color }}>
                                {headline.title}
                                <span className={styles.divider}>|</span>
                            </span>
                            <span>{headline.desc}</span>

                        </h3>
                    </div>

                    <img className={styles.sideHeadlineImage} src={headline.img_src} alt=""></img>


                </div>
                <div className={styles.topicInfo}>
                    <span className={styles.topic}>{headline.topic}</span>
                    <span>{headline.time}</span>
                </div>
            </div>
        )
    }
}
