import React, { Component } from 'react'
import MainPanel from './MainPanel/MainPanel'
import styles from '../../styles/MainPage.module.css'
import SidePanel from './SidePanel/SidePanel'

export default class MainPage extends Component {
    render() {
        const { mainTopic, sideTopics, mostRead, latest } = this.props
        return (
            <div className={styles.mainPage}>
                <MainPanel mainTopic={mainTopic} sideTopics={sideTopics}></MainPanel>
                <SidePanel mostRead={mostRead} latest={latest}></SidePanel>
            </div>
        )
    }
}
