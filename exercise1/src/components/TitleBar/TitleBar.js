import React, { Component } from 'react'
import styles from '../../styles/TitleBar.module.css'
import FloatingButons from './FloatingButons'

export default class TitleBar extends Component {
    render() {
        return (
            <div className={styles.titleBar}>
                <h1 className={styles.title}>HESSUN SANOMAT</h1>
                <button>Etusivu</button>
                <button>Uutiset</button>
                <button>Lehdet</button>
                <button>Asiakaspalvelu</button>
                <FloatingButons></FloatingButons>
            </div>
        )
    }
}
