

export async function post(url: string, data)
{
    const details = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    const response = await fetch(url, details);

    return response;
}

export async function get<T>(url: string)
{
    const response = await fetch(url);
    const data = await response.json() as unknown as T

    return data;
}
