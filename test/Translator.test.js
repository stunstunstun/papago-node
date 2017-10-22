import { assert } from 'chai';
import env from '../env.json';
import Translator from '../lib/Translator';

describe('Translator', () => {
    let translator = {};

    before(() => {
        /** 
         * setup your application client keys to env.json
         * {
         *    "CLIENT_ID": "",
         *    "CLIENT_SECRET": ""
         * }
         */
        const clientId = env.CLIENT_ID || '';
        const clientSecret = env.CLIENT_SECRET || '';
        if (!clientId || !clientSecret) {
            throw new Error('You have to configure env.json');
        }
        translator = new Translator(clientId, clientSecret);
    });

    it('translate', (done) => {
        translator.translate('안녕하세요')
        .then(result => {
            assert.equal(result.text, 'Hello.');
            done();
        })
        .catch(error => {
            done();
        });
    });

    it('translate with source', (done) => {
        translator.translate('안녕하세요', 'ko', 'es')
        .then(result => {
            assert.equal(result.text, 'Hola');
            done();
        })
        .catch(error => {
            done();
        });
    });

    it('translate with invalid source', (done) => {
        translator.translate('안녕하세요', 'ko', 'da')
        .then(result => {
            done();   
        })
        .catch(error => {
            assert.equal(error, 'This languages is not supported');
            done();
        });
    });

    it('translate with failed status', (done) => {
        translator = new Translator('', '')
        translator.translate('안녕하세요')
        .then(result => {
            done();
        })
        .catch(error => {
            assert.equal(error.code, '024');
            done();
        });
    });
});