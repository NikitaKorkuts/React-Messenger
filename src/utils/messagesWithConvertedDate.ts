import {MessagesResponseType} from '../components/screens/Dialog/dialog.types';

export const reversedMessagesWithConvertedDate = (response: MessagesResponseType) => {
    const newMessages = [...response.items]
        .map((m) => {
            const date = new Date(m.addedAt);
            date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
            return {...m, addedAt: date};

        })
        .reverse();
    return {...response, items: newMessages};
}