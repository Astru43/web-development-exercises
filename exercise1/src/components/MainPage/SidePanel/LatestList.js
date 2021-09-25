import React, { Component } from 'react'
import styles from '../../../styles/MainPage.module.css'
import LatestListItem from './LatestListItem'
import ShowMoreButton from './ShowMoreButton'

export default class LatestList extends Component {
    render() {
        const { latest } = this.props
        return (
            <div className={[styles.content, styles.paddingLeftRight16].join(' ')}>
                <h2 className={[styles.title, styles.paddingTopBottom16].join(' ')}>Latest</h2>
                <ol>
                    {
                        latest.map((item, index) => {
                            return <LatestListItem item={item} key={index}></LatestListItem>
                        })
                    }
                </ol>
                <ShowMoreButton></ShowMoreButton>
            </div>
        )
    }
}
