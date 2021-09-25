import React, { Component } from 'react'
import styles from '../../../styles/MainPage.module.css'
import MostReadItem from './MostReadItem'
import ShowMoreButton from './ShowMoreButton'

export default class MostReadList extends Component {
    render() {
        const { mostRead } = this.props
        return (
            <div className={[styles.content, styles.paddingLeftRight16].join(' ')}>
                <h2 className={[styles.title, styles.paddingTopBottom16].join(' ')}>Most read</h2>
                <ol>
                    {
                        mostRead.map((item, index) => {
                            return (
                                <MostReadItem item={item} key={index}></MostReadItem>
                            )
                        })
                    }
                </ol>
                <ShowMoreButton></ShowMoreButton>
            </div>
        )
    }
}
