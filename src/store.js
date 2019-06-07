import { createStore } from 'redux';

const initalState = {
            name: "",
            address: "",
            city: "",
            state: "",
            zipcode: ""
};

function reducer(state = initalState, action) {
    const { type, payload} = action;
    switch (type) {
        default:
         return state;
    }
}

export default createStore(reducer)