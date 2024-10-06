import { generateQueryParams } from './utils/generateQueryParams';
import { BASE_URL } from '../variables/variables';

// eslint-disable-next-line max-len
// const TIMELY_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIzNTEzNjk3LCJpYXQiOjE3MjM1MDY0MDcsImp0aSI6ImFlYWZhZmI5MzdjMzRjYzRhYjc3YzVkYTg5YjhkNzI1IiwidXNlcl9pZCI6MTB9.HHbe6I9fau851gW9Qz6GQ0gVKomzrrm-NxnWZoHK688';
// eslint-disable-next-line max-len
// const refresh = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMzU5NjQ5NywiaWF0IjoxNzIzNTEwMDk3LCJqdGkiOiI1NTgzZDE2NWRlOGQ0NTU2ODg3YmM1NDU4Y2JmYzI4MyIsInVzZXJfaWQiOjEwfQ.7oeYmRnqOQXJ7OhoGOjXXom7Cpwju_iGeEx7r30DUvM';
interface FetcherOptions {
  queryParams?: Record<string, string | number | boolean>;
  customSettings?: RequestInit;
}

export const fetcher = async (
  url: string,
  { queryParams, customSettings }: FetcherOptions = {},
) => {
  try {
    if (!BASE_URL) {
      throw new Error('Base URL not defined!');
    }

    const queryString = queryParams
      ? `?${generateQueryParams(queryParams)}`
      : '';
    const fullUrl = `${BASE_URL}${url}${queryString}`;

    const defaultSettings: RequestInit = { next: { revalidate: 60 } };
    const fetchOptions = customSettings || defaultSettings;

    const response = await fetch(fullUrl, fetchOptions);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`, { cause: response.status });
    }

    const responseData = await response.json();
    return responseData;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);
    return { error: true, status: error.cause };
  }
};
