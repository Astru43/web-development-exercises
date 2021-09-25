import React, { Component } from 'react'
import styles from '../../../styles/MainPage.module.css'
import LatestList from './LatestList'
import MostReadList from './MostReadList'

export default class SidePanel extends Component {
    render() {
        const { mostRead, latest } = this.props
        return (
            <div className={styles.sidePanel}>
                <MostReadList mostRead={mostRead}></MostReadList>
                <LatestList latest={latest}></LatestList>
            </div>
        )
    }
}
