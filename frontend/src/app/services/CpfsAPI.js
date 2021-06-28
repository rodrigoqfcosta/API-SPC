import { openURL, eventHandlerError } from './BaseAPI';

const GET_CPFS = "/cpf"

export const GetData = (url) => {
    return openURL.get(url).catch(e => { return Promise.reject(eventHandlerError(e)) });
}