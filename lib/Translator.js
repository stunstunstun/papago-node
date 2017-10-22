import { papagoApiUrl, contentType, languages } from './constants';
import response from './response';
import rp from 'request-promise';

export default class Translator {
    constructor(clientId, clientSecret) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
    }

    translate(text, source, target) {
        source = source || 'ko';
        target = target || 'en';
        return new Promise((resolve, reject) => {
            if (!languages.hasOwnProperty(source) || !languages.hasOwnProperty(target)) {
                reject('This languages is not supported');
            }
            const options = {
                method: 'POST',
                uri: papagoApiUrl,
                form: {
                    text: text,
                    source: source,
                    target: target
                },
                headers: {
                    'X-Naver-Client-Id': this.clientId,
                    'X-Naver-Client-Secret': this.clientSecret,
                    'Content-Type': contentType
                },
                json: true
            };
            rp(options)
            .then(body => {
                const result = response(body);
                resolve(result);
            })
            .catch(err => {
                const result = response(err.error);
                reject(result);
            });
        });
    }
}