import { assert } from 'chai';
import response, { successCode } from '../lib/response';

describe('response', () => {
    it('parse json', () => {
        const body = {
            message: { 
                result: { 
                    translatedText: 'Hello', 
                    srcLangType: 'ko',
                }
            }
        };
        const result = response(body);
        assert.equal(result.code, successCode);
    });

    it('parse failed json', () => {
        const body = {
            errorCode: 405, 
            errorMessage: 'Not Found Resources',
        };
        const result = response(body);
        assert.notEqual(result.code, successCode);
    });
});