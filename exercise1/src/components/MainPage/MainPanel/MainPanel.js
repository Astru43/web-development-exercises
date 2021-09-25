import React, { Component } from 'react'
import MainTopic from './MainTopic'
import SideTopic from './SideTopic'
import styles from '../../../styles/MainPage.module.css'

export default class MainPanel extends Component {
    render() {
        const { mainTopic, sideTopics } = this.props
        return (
            <div className={styles.mainPanel}>
                <MainTopic topic={mainTopic}></MainTopic>
                {
                    sideTopics.map((topic, index) => {
                        return <SideTopic topic={topic} key={index}></SideTopic>
                    })
                }
            </div>
        )
    }
}
