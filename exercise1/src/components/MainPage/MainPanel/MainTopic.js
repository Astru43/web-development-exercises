import React, { Component } from 'react'
import styles from '../../../styles/MainPage.module.css'
import MainHeadline from './Headlines/MainHeadline'
import SideHeadline from './Headlines/SideHeadline'

export default class MainTopic extends Component {
    render() {
        const { topic } = this.props
        const filterd_headlines = topic.headlines.filter((item, index) => {
            return index !== 0;
        })
        return (
            <div className={[styles.content, styles.paddingLeftRight16, styles.mainContentBorder].join(' ')}>
                <h1 className={styles.mainTopicTitle}>{topic.topic}</h1>
                <MainHeadline topic={topic.headlines[0]}></MainHeadline>
                {filterd_headlines.map((headline, index) => {
                    return (
                        <SideHeadline key={index} headline={headline}></SideHeadline>
                    )
                })}
            </div>
        )
    }
}

