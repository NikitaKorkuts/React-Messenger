import {instance} from '../services';
import {MessagesResponseType} from '../../components/screens/Dialog/dialog.types';

export const dialogsServieces = {
    getDialogs() {
        return instance.get('dialogs')
            .then(response => response.data);
    },
    getMessages(id: number, page: number, count: number) {
        return instance.get<MessagesResponseType>(`dialogs/${id}/messages?page=${page}&count=${count}`)
            .then((response) => {
                return response.data;
            });
    },
    sendMessage(id: number, body: string) {
        return instance.post(`dialogs/${id}/messages`, {
            body: body,
        });
    },
    getNewMessagesCount() {
        return instance.get('dialogs/messages/new/count')
            .then((response) => {
                return response.data;
            });
    },
};