import item from './item.js';
let items = [];
let hideCheckedItems = false;

function findById(id) {
    return items.find(function (item) {
        return item.id === id;
    })
}

function addItem(name) {
    try {
        item.validateName(name);
        items.push(item.create(name));
        render();
    } catch (error) {
        console.log(`Cannot add item: ${error.message}`);
    }
}

function findAndToggleChecked(id) {
    console.log(this.findById(id));
    console.log(this.findById(id).checked = !this.findById(id).checked);
}

function findAndUpdateName(id, newName) {
    try {
        item.validateName(newName);
        this.findById(id).name = newName;

    } catch (error) {
        console.log(`Cannot update name: ${error.message}`);
    }
}

const toggleCheckedFilter = function () {
    this.hideCheckedItems = !this.hideCheckedItems;
};

function findAndDelete(id) {
    let target = this.items.filter(function (i) {
        if (i.id !== id) {
            return id;
        }
    });
    this.items = target;
}

export default {
    items,
    hideCheckedItems,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter
};
