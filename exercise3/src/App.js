import React, { Component } from 'react';
import './App.css';
import GridItem from './components/GridItem';
import SearchForm from './components/SearchForm';
import * as data from './data.json'

class Item {
    constructor({
        item,
    } = {}) {
        if (item === undefined) this.item = data.titels[Math.floor(Math.random() * 24)]
        else this.item = data.titels[item]

        this.seller = data.sellers[Math.floor(Math.random() * 24)];
        this.price = {
            integer: Math.floor(Math.random() * 200).toString(),
            decimal: Math.floor(Math.random() * 100).toString().padStart(2, "0")
        };
        this.shipping = {
            integer: Math.floor(Math.random() * 200).toString(),
            decimal: Math.floor(Math.random() * 100).toString().padStart(2, "0")
        };
        this.rating = Math.floor(Math.random() * 4 + 1) + Math.round((Math.random() + Number.EPSILON) * 100) / 100;
        this.img = `res/test_img_${Math.floor(Math.random() * 7)}.jpg`;
    }
}


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                new Item({ item: 0 }),
                new Item(),
                new Item(),
                new Item(),
                new Item(),
                new Item(),
                new Item(),
                new Item(),
                new Item(),
                new Item(),
                new Item(),
                new Item(),
            ],
            filter: ""
        };

        this.searchChanged = this.searchChanged.bind(this)
    }

    searchChanged(event) {
        this.setState({
            items: this.state.items,
            filter: event.target.value
        })
    }

    render() {
        return (
            <div>
                <SearchForm onChanged={this.searchChanged}></SearchForm>
                <div className="grid">
                    {this.state.items
                        .filter((item) => {
                            if (item.item.toLowerCase().includes(this.state.filter.toLowerCase()))
                                return true;
                            else if (this.state.filter.toLowerCase().startsWith("by")) {
                                return (item.seller.toLowerCase().includes(this.state.filter.substr(2).trim().toLowerCase()))
                            } else if (item.seller.toLowerCase().includes(this.state.filter.toLowerCase()))
                                return true;
                            else
                                return false;
                        })
                        .map((item, index) => {
                            return (
                                <GridItem item={item} key={index}></GridItem>
                            );
                        })}
                </div>
            </div>
        );
    }
}

export default App;
