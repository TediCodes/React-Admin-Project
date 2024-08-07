// src/dataProvider.ts
import simpleRestProvider from 'ra-data-simple-rest';

const apiUrl = 'http://localhost:5264/api';

const httpClient = async (url: string, options: any = {}): Promise<any> => {
    // Set the Content-Type header to application/json for POST and PUT requests
    if (options.method === 'POST' || options.method === 'PUT') {
        options.headers = {
            ...options.headers,
            'Content-Type': 'application/json',
        };
        if (options.body && typeof options.body === 'object') {
            options.body = JSON.stringify(options.body);
        }
    }

    const response = await fetch(url, options);

    if (response.ok) {
        const body = await response.text(); // Get the raw response body
        const json = body ? JSON.parse(body) : {}; // Parse the JSON body if it exists

        return {
            status: response.status,
            headers: response.headers,
            body,
            json,
        };
    } else {
        const errorBody = await response.text();
        const errorJson = errorBody ? JSON.parse(errorBody) : {};
        return Promise.reject({
            status: response.status,
            headers: response.headers,
            body: errorBody,
            json: errorJson,
        });
    }
};

export const dataProvider = simpleRestProvider(apiUrl, httpClient);
