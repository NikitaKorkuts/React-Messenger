import {instance} from '../services';

export const dialogsServieces = {
    getDialogs() {
        return instance.get('dialogs')
            .then(response => response.data);
    },
};