import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';
import SearchForm from './components/SearchForm';
import env from './env.json';
import ItemGrid from './components/ItemGrid';
import AdminPanel from './components/AdminPanel';
import { Helper } from './util/Helper';



class App extends Component {
    httpBaseUri = `http://${env.restApi.ip}:${env.restApi.port}/`;
    products = 'products'
    searchProducts = 'products/search'

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            categories: [],
            sellers: [],
            searchString: '',
            user: 'Admin',
            adminMode: false,
            notification: false,
            clickedItem: null
        };

        this.searchChanged = this.searchChanged.bind(this);
        this.onSelected = this.onSelected.bind(this);
        this.addItemSubmited = this.addItemSubmited.bind(this);
        this.clearCliked = this.clearCliked.bind(this);
        this.adminButtonClicked = this.adminButtonClicked.bind(this);
        this.onItemClicked = this.onItemClicked.bind(this);

        this.deleteItem = this.deleteItem.bind(this);
        this.cancelDelete = this.cancelDelete.bind(this);
    }

    adminButtonClicked() {
        this.setState({ adminMode: !this.state.adminMode });
    }

    clearCliked() {

        axios.get(this.httpBaseUri + this.products).then((res) => {
            let categories = Helper.getCategories(res.data);
            let sellers = Helper.getSellers(res.data);

            this.setState({
                categories,
                sellers,
                items: res.data,
            });
        });

        this.setState({ searchString: '' });
    }


    /**
     *
     *
     * @param {number} index
     * @memberof App
     */
    onItemClicked(index) {
        if (this.state.user === 'Admin' && this.state.adminMode) {
            this.setState({ notification: true, clickedItem: index });
        }
    }

    searchChanged(event) {
        let params = Helper.formatSeachParams(event.target.value);

        axios.get(this.httpBaseUri + this.searchProducts, {
            params
        }).then((res) => {
            let categories = Helper.getCategories(res.data);

            this.setState({
                categories,
                items: res.data
            });
        });

        let searchString = event.target.value;
        this.setState({
            searchString
        });
    }

    onSelected(event) {
        let val = event.target.value;
        let searchString;
        let tempArr = this.state.searchString.split('; ');

        if (tempArr.some((item) => item === val)) {
            searchString = this.state.searchString.replace(val + '; ', '');
        } else {
            searchString = val + '; ' + this.state.searchString;
        }

        let params = Helper.formatSeachParams(searchString);

        axios.get(this.httpBaseUri + this.searchProducts, {
            params
        }).then((res) => {
            let categories = Helper.getCategories(res.data);

            this.setState({
                categories,
                items: res.data
            });
        });


        event.currentTarget.value = 'NULL';
        this.setState({
            searchString
        });
    }


    /**
     *
     *
     * @param {Event} event
     * @param {Item.Item} item
     * @memberof App
     */
    addItemSubmited(event, item) {
        event.preventDefault();

        let newItem = {};

        // Check item for assignable values
        newItem.item = item.item ? item.item : undefined;
        newItem.seller = item.seller ? item.seller : undefined;
        newItem.description = item.description ? item.description : undefined;
        newItem.category = item.category ? item.category : undefined;
        newItem.price = item.price ? item.price : undefined;
        newItem.shipping = item.shipping ? item.shipping : undefined;
        newItem.rating = item.rating ? item.rating : undefined;
        newItem.img = item.img ? item.img : undefined;

        axios.post(this.httpBaseUri + this.products, newItem).then((res) => {
            let { items, categories, sellers } = this.state;
            sellers = Helper.getSellers(res.data, sellers);
            categories = Helper.getCategories(res.data, categories);
            items.push(res.data);

            this.setState({
                items,
                sellers,
                categories
            });
        });
    }

    componentDidMount() {
        axios.get(this.httpBaseUri + this.products).then((res) => {
            let categories = Helper.getCategories(res.data);
            let sellers = Helper.getSellers(res.data);

            this.setState({
                categories,
                sellers,
                items: res.data
            });
        });
    }

    render() {
        return (
            <>
                <SearchForm categories={this.state.categories} sellers={this.state.sellers} searchString={this.state.searchString}
                    adminMode={this.state.adminMode}
                    onChanged={this.searchChanged}
                    onSelected={this.onSelected}
                    onClear={this.clearCliked}
                    onAdminClick={this.adminButtonClicked}></SearchForm>
                {this.state.adminMode ? <AdminPanel onSubmit={this.addItemSubmited}></AdminPanel> : undefined}
                <ItemGrid items={this.state.items} onItemClicked={this.onItemClicked}></ItemGrid>

                <div className="notification" hidden={!this.state.notification}>
                    <h3>Do you want to delete the item</h3>
                    <div className="admin-buttons">
                        <button onClick={this.deleteItem}>Yes</button>
                        <button onClick={this.cancelDelete}>No</button>
                    </div>
                </div>
            </>
        );
    }

    deleteItem() {
        let uuid = '/' + this.state.items[this.state.clickedItem].uuid;
        axios.delete(this.httpBaseUri + this.products + uuid).then((res) => {
            if (res.status !== 200) return;

            /** @type {{items: Item.Item[]}} */
            let { items } = this.state;
            /** @type {Item.Item} */
            let resItem = res.data;

            let itemIndex = items.findIndex((item) => item.uuid === resItem.uuid);
            if (itemIndex !== -1) items.splice(itemIndex, 1);
            let categories = Helper.getCategories(items);
            let sellers = Helper.getSellers(items);

            this.setState({
                items,
                sellers,
                categories,
                notification: false,
                clickedItem: null
            });
        });
    }

    cancelDelete() {
        this.setState({ notification: false, clickedItem: null });
    }

}

export default App;
