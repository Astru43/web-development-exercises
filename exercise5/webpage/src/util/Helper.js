/**
 * Class that includes some response and request helper
 * functions.
 * @export
 * @class Helper
 */
export class Helper {

    /**
     * Get all sellers from the array of items.
     * 
     * Every seller will only be included once.
     * @static
     * @param {Array | object} arr ``Item`` array where to get the sellers.
     * @memberof Helper
     */
    static getSellers(arr, oldSellers) {
        let sellers = [];
        if (typeof oldSellers !== 'undefined') sellers = oldSellers;

        if (Array.isArray(arr)) {
            arr.forEach((item) => {
                if (!sellers.includes(item.seller)) {
                    sellers.push(item.seller);
                }
            });
        } else {
            if (!sellers.includes(arr.seller)) {
                sellers.push(arr.seller);
            }
        }

        return sellers;
    }

    /**
     * Get all categories from the array of items.
     * 
     * Every category will only be included once.
     * @static
     * @param {Array | object} arr ``Item`` array where to get the categories.
     * @memberof Helper
     */
    static getCategories(arr, oldCategories) {
        let categories = [];
        if (typeof oldCategories !== 'undefined') categories = oldCategories;


        if (Array.isArray(arr)) {
            arr.forEach((item) => {
                item.category.forEach((val) => {
                    if (!categories.includes(val)) {
                        categories.push(val);
                    }
                });
            });
        } else {
            arr.category.forEach((val) => {
                if (!categories.includes(val)) {
                    categories.push(val);
                }
            });
        }

        return categories;
    }

    /**
     * Formats string to be querry params object
     * @static
     * @param {string} searchString String to which format.
     * @return {{
     *      searchString: string,
     *      seller: string | string[]
     *      category: string[],
     * }}
     * @memberof Helper
     */
    static formatSeachParams(searchString) {
        /**
         * @type {{
         *      searchString: string,
         *      seller: string | string[]
         *      category: string[],
         * }}
         */
        let params = {};
        let tempArr = searchString.trimStart().split('; ');


        params.searchString = tempArr.pop();
        params.seller = tempArr.filter((val) => {
            return val.startsWith('by ');
        }).map((string) => string.substring(3));
        params.category = tempArr.filter((category) => {
            return !category.startsWith('by ');
        });
        if (params.seller.length === 1) params.seller = params.seller[0];

        return params;
    }
}