import React, { Component } from 'react'
import styles from '../../styles/TitleBar.module.css'

export default class FloatingButons extends Component {
    render() {
        return (
            <div className={styles.floatButtons}>
                <button className={styles.btnSubscribe}>Tilaa</button>
                <button>Kirjaudu</button>
                <button>Valikko</button>
            </div>
        )
    }
}
