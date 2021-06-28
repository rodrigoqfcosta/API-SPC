import defaultAxios from 'axios';
import * as _ from 'lodash';


export const BASEURL = 'http://localhost:3000';

export const openURL = defaultAxios.create({
  baseURL: BASEURL,
  timeout: 30000,
});

export const closeURL = defaultAxios.create({
  baseURL: BASEURL,
  timeout: 30000,
});

closeURL.interceptors.request.use(
  async (config) => {
    config.headers.authorization = JSON.parse(await AsyncStorage.getItem('user-token'));
    return config;
  },
  error => Promise.reject(error)
);


export const formatData = data => qs.stringify(data);

const MENSAGEM_ERRO     = `Erro inesperado do servidor, por favor tente mais tarde.`;
const MENSAGEM_TIMEOUT  = `Tempo de espera esgotado. Tente novamente em alguns instantes.`;
const MENSAGEM_NETWORK  = `Não possui conexão ou estamos offline, por favor tente mais tarde.`;

export const eventHandlerError = (error) => {
  captureExeption(error)
  console.log("ERROR ", error)
  if(_.isEqual(error.message, "Network Error")) { return MENSAGEM_NETWORK }
  if(_.isEqual(error.code, "ECONNABORTED"))     { return MENSAGEM_TIMEOUT }
  
  const { data, status } = error.response

  if(_.isEqual(data.error, "Unauthorized"))     { return data.message }

  if(status > 400) { return MENSAGEM_ERRO }

  else { return data ? errMsg = data.message ? data.message : data : errMsg = MENSAGEM_ERRO }
}
