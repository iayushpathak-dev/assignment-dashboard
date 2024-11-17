interface FetcherParams {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: Record<string, string>;
  body?: any;
  params?: Record<string, string>;
}

interface FetcherResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export const fetcher = async <T>({
  url,
  method = "GET",
  headers = {},
  body,
  params,
}: FetcherParams): Promise<FetcherResponse<T>> => {
  const queryString = params
    ? "?" + new URLSearchParams(params).toString()
    : "";

  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  };

  try {
    const response = await fetch(url + queryString, options);

    if (!response.ok) {
      const errorData = await response.json();
      return { success: false, error: errorData.message || "Request failed" };
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    return { success: false, error: "Network error or unexpected issue" };
  }
};
