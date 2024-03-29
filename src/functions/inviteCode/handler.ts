//import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import type { APIGatewayProxyHandler } from 'aws-lambda';
//import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { makeDb } from '@libs/promisify-mysql';

import { apiResponses } from 'src/api-responses';
import { guestEM } from 'src/models/guestEM';


//import schema from './schema';

export const getGuestName: APIGatewayProxyHandler = async (event) => {
    const code = event.pathParameters?.code;
    console.log('event invite code: ' + code);

    const db = makeDb();

    if (!code ){
        return apiResponses._400({message: 'illegal invitation code'})
    }

    try {
        const guests: guestEM[] = await db.query(
            `select recipient from ${process.env.GUESTS_DB_TABLE} where phoneNumberHash = ?`, [code]);
        console.log('guest name: ', guests);
        if (guests.length == 0){
            console.warn('guest not found');
            return apiResponses._400({err: "no such guest matches invitation code"});
        } else if (guests.length > 1){
            console.warn('multiple records found');
            return apiResponses._500({err: "too many records were found"});
        } else {
            return apiResponses._200(guests[0]);
        }
        
    } catch (err) {
        console.error(err);
        return apiResponses._500(err.code);
    } finally {
        await db.close();
    }    
};

export const main = middyfy(getGuestName);