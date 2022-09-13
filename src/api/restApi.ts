enum HttpMethod {
  Get = "GET",
  Post = "POST",
}

export type Headers = Record<string, string>;


export class RestApiError extends Error {
  constructor(message: string, readonly status: number, readonly data: Record<string, unknown>) {
    super(message);
  }
}

export default class RestApi {
  constructor(private readonly baseUrl: string) {}

  get<Response>(url: string, headers?: Headers): Promise<Response> {
    return this._request<void, Response>(HttpMethod.Get, url, undefined, headers);
  }
  post<Request, Response>(url: string, data?: Request, headers?: Headers): Promise<Response> {
    return this._request<Request, Response>(HttpMethod.Post, url, data, headers);
  }

  private async _request<Request, Response>(
    method: HttpMethod,
    url: string,
    data?: Request,
    requestHeaders?: Headers,
  ): Promise<Response> {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...requestHeaders,
    } as Headers;

    const options = {
      method: method || "GET",
      body: data ? JSON.stringify(data) : null,
      headers,
    };
    const response = await fetch(this.baseUrl + url, options);
    if (response.ok) {
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) return response.json();
      return {} as Response;
    } else {
      const data = await response.json();
      throw new RestApiError(response.statusText, response.status, data);
    }
  }
}
