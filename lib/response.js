export const successCode = 0;

export default function response(body) {
    if (body.hasOwnProperty('message')) {
        const result = {
            code: successCode,
            text: body.message.result.translatedText,
            source: body.message.result.srcLangType
        };
        return result;
    } else {
        const result = {
            code: body.errorCode,
            text: body.errorMessage
        }
        return result;
    }
}