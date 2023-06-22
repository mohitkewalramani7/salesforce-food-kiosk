import { LightningElement } from 'lwc';

export default class ConstructOrder extends LightningElement {
    orderItems = [{'id': 1, 'foodItem': '', 'quantity': 1, 'requests': ''}]
    menuItems = [
        { label: 'New', value: 'new' },
        { label: 'In Progress', value: 'inProgress' },
        { label: 'Finished', value: 'finished' },
    ];

}
