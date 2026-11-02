const BASE_URL = '/api/v1'

async function request<T>(path: string, options?: RequestInit) : Promise<T> {
    const res = await fetch(`${BASE_URL}${path}`, {
        ...options,
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (!res.ok) throw new Error(`Request failed: ${res.status}`)

    return res.status === 204 ? (undefined as T) : res.json()
}

export const api = {
    get: <T>(path: string) => request<T>(path),
    
    post: <T>(path: string, body: unknown) => request<T>(path, { method: 'POST', body: JSON.stringify(body) }),

    put: <T>(path: string, body: unknown) => request<T>(path, { method: 'PUT', body: JSON.stringify(body) }),

    delete: (path: string) => request<void>(path, { method: 'DELETE' })
}