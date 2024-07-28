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
        addToCart(product: WatchModel) {
            const watches = this.basket.find((item) => item.id === product.id);
            if (watches) {
                watches.quantity += 1;
            } else {
                this.basket.push({ ...product, quantity: 1 });
            }
        },
        removeFromCart(productId:number) {
            this.basket = this.basket.filter(item => item.id !== productId);
        },
        clearCart() {
            this.basket = [];
        },
        getters: {
            cartCount: (state:any) => state.items.length,
            cartTotal: (state:any) => state.items.reduce((total:number, item:WatchModel) => total + item.price * item.quantity, 0),
        }
    },
});
