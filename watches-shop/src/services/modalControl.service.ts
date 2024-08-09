import { reactive } from 'vue';

const state = reactive({
    isOpen: false,
});

export const modalService = {
    open(component:any, props = {}) {
        state.isOpen = true;
    },
    close() {
        state.isOpen = false;
    },
    getState() {
        return state;
    }
};