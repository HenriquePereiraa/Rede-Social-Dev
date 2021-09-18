import MockAdapater from 'axios-mock-adapter';
import axios from './axios';

const instance = new MockAdapater(axios, { delayResponse:0 });

export default instance;