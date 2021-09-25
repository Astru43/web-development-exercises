import React, { Component } from 'react'
import styles from './Buttons.module.css'

export default class Buttons extends Component {
    render() {
        const { onClick } = this.props
        return (
            <div className={styles.buttons}>
                <button onClick={_ => { onClick("Coffee", "x") }}>Coffee</button>
                <button onClick={_ => { onClick("Sugar", "x") }}>Sugar</button>
                <button onClick={_ => { onClick("Milk", "ltr") }}>Milk</button>
                <button onClick={_ => { onClick("Cookies", "pcs") }}>Cookies</button>
            </div>
        )
    }



}
