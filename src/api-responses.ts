const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true
}

export const apiResponses = {
    _200: (body: {[key: string]: any}) => {
        return {
            statusCode: 200,
            body: JSON.stringify(body, null, 2),
            headers
        }
    },
    _400: (body: {[key: string]: any}) => {
        return {
            statusCode: 400,
            body: JSON.stringify(body, null, 2),
            headers
        }
    },
    _500: (body: {[key: string]: any}) => {
        return {
            statusCode: 500,
            body: JSON.stringify(body, null, 2),
            headers
        }
    },
}