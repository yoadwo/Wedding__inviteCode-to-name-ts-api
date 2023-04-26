// in case in the future need to apply headers,
// this is where and how
const headers = {
    
}

export const apiResponses = {
    _200: (body: {[key: string]: any}) => {
        return {
            statusCode: 200,
            body: JSON.stringify(body, null, 2),
            // headers
        }
    },
    _400: (body: {[key: string]: any}) => {
        return {
            statusCode: 400,
            body: JSON.stringify(body, null, 2),
            // headers
        }
    },
    _500: (body: {[key: string]: any}) => {
        return {
            statusCode: 500,
            body: JSON.stringify(body, null, 2),
            // headers
        }
    },
}