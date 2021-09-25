import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';
import Buttons from "./components/buttons/Buttons";

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
    constructor(props) {
        /* You should call super(props) before any other statement. 
           Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
        */
        super(props);

        this.state = {
            items: [
                { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
                { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
                { id: 3, value: 'Bread', qty: 3, unit: 'x' },
                { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
            ]
        };

        this.addItems = this.addItems.bind(this);
    }

    addItems(itemName, itemUnit) {
        const { items } = this.state;
        var edited = false
        var new_items = items.map(element => {
            if (itemName.toLowerCase() === element.value.toLowerCase()) {
                edited = true;
                element.qty += Math.floor(Math.random() * 15 + 1)
                return element;
            }
            else return element
        });

        if (edited) {
            this.setState({
                items: new_items
            })
        } else {
            this.setState(
                {
                    items: [...items, {
                        id: items.length + 1, value: itemName, qty: Math.floor(Math.random() * 15 + 1), unit: itemUnit,
                    }]
                }
            );
        }
    }

    render() {
        const { applicationDescription, applicationName } = this.props;
        return <div className={styles.shoppingList}>
            <Title
                applicationDescription={applicationDescription}
                applicationName={applicationName}
            />
            <ShoppingList items={this.state.items} />
            <Buttons onClick={this.addItems}></Buttons>
        </div>
    }
}

export default App;