import { defineStore } from 'pinia';

interface AlertList {
    message: string,
    status: number,
    show: boolean
}

export const globalAlertStore = defineStore('globalAlert', {
    state: () => ({
        alertList: [] as AlertList[]
    }),
    actions: {
        setSuccess(message: string) {
            const alert = { message, status: 200, show: true };
            this.alertList.push(alert);
            this.autoCloseAlert(alert);
        },

        setFailed(message: string) {
            const alert = { message, status: 500, show: true };
            this.alertList.push(alert);
            this.autoCloseAlert(alert);
        },

        autoCloseAlert(alert: AlertList) {
            setTimeout(() => {
                alert.show = false;
                setTimeout(() => {
                    const index = this.alertList.indexOf(alert);
                    if (index > -1) {
                        this.alertList.splice(index, 1);
                    }
                }, 1000);
            }, 3000);
        }
    },
    getters: {
        getAlerts: (state: any) => state.alertList
    }
});
