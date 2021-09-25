import React, { Component } from 'react'
import styles from '../../../styles/MainPage.module.css'
import MainHeadline from './Headlines/MainHeadline'
import SideHeadline from './Headlines/SideHeadline'

export default class SideTopic extends Component {
    render() {
        const { topic } = this.props
        return (
            <div className={[styles.content, styles.paddingLeftRight16, styles.paddingTop16].join(' ')}>
                <MainHeadline topic={topic}></MainHeadline>
                {topic.side_headlines.map((headline, index) => {
                    return <SideHeadline key={index} headline={headline}></SideHeadline>
                })}
            </div>
        )
    }
}
