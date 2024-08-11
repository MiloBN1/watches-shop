import { defineStore } from 'pinia';

export interface WatchModel {
    img: string;
    text: string;
    title: string;
    price: number;
    type: string;
    id: number;
    quantity: number;
}

export const basketStore = defineStore('basket', {
    state: () => ({
        basket: [] as WatchModel[]
    }),
    actions: {
        addToCart(product: WatchModel, quantity:number) {
            const watches = this.basket.find((item) => item.id === product.id);
            if (!watches) this.basket.push({ ...product, quantity: quantity });
        },
        addQuantity(product: WatchModel) {
            const watchIndex = this.findBasketItemIndex(product)
            if (watchIndex != -1) this.basket[watchIndex].quantity++;
        },
        reduceQuantity(product: WatchModel) {
            const watchIndex = this.findBasketItemIndex(product)
            if(product.quantity == 1) return ;
            if (watchIndex != -1) this.basket[watchIndex].quantity--;
        },
        findBasketItemIndex(product: WatchModel) {
            return this.basket.findIndex((item) => item.id === product.id);
        },
        removeFromCart(productId:number) {
            this.basket = this.basket.filter(item => item.id !== productId);
        },
        clearCart() {
            this.basket = [];
        },
    },
    getters: {
        cartCount: (state:any) => state.items.length,
        cartTotal: (state:any) => state.basket.reduce((total:number, item:WatchModel) => total + item.price * item.quantity, 0),
    }
});
