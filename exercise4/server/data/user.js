import { v4 as uuidv4 } from 'uuid';

export class User {
    
    /**
     *  Creates an instance of User.
     * @param {string} firstName Users first name
     * @param {string} lastName Users last name
     * @param {string} address Users address
     * @param {string} phone Users phone number
     * @param {string} email Users email address
     */
    constructor(firstName, lastName, address, phone, email) {
        this.fullName = {
            firstName,
            lastName
        };
        this.address = address;
        this.phoneNum = phone;
        this.email = email;
        this.uuid = uuidv4();
    }


    // Documentation of properties.
    /**
     * Object which include the users full name.
     * @type {{firstName: string, lastName: string}}
     * @memberof User
     */
    fullName;

    /**
     * Users street address.
     * @type {string}
     * @memberof User
     */
    address;

    /**
     * Users phone number stored as string.
     * @type {string}
     * @memberof User
     */
    phoneNum;

    /**
     * Users email address.
     * @type {string}
     * @memberof User
     */
    email;

    /**
     * Unique identifier of the user.
     * @type {string}
     * @memberof User
     */
    uuid;
}
