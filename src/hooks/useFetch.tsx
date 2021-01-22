import { useCallback, useState } from "react";

interface UseFetch<TResponse> {
  get: (url: string, getHeaders?: Headers) => void;
  post: (url: string, postBody?: string, postHeaders?: Headers) => void;
  response: FetchResponse<TResponse>;
}

type HeadersObject = { [name: string]: string };

export type Error = { message: string };

export interface FetchResponse<T> {
  isFetching: boolean;
  statusCode?: number;
  ok?: boolean;
  headers?: Headers;
  body?: T;
  error?: Error;
}

function useFetch<TResponse>(): UseFetch<TResponse> {
  const [response, setResponse] = useState<FetchResponse<TResponse>>({
    isFetching: false,
    statusCode: undefined,
    ok: undefined,
    headers: undefined,
    body: undefined,
    error: undefined,
  });

  const updateResponse = (partialResponse: FetchResponse<TResponse>) =>
    setResponse((prev) => ({ ...prev, ...partialResponse }));

  const doFetch = async (
    method: string,
    url: string,
    requestBody?: string,
    headers?: Headers | HeadersObject
  ) => {
    updateResponse({
      isFetching: true,
      statusCode: undefined,
      ok: undefined,
      headers: undefined,
      body: undefined,
      error: undefined,
    });

    const newHeaders = new Headers(headers);
    newHeaders.set("Content-Type", "application/json");
    fetch(url, {
      method,
      redirect: "follow",
      headers: newHeaders,
      body: requestBody,
    })
      .then(async (res: Response) => {
        if (res.ok) {
          updateResponse({
            isFetching: false,
            statusCode: res.status,
            ok: res.ok,
            headers: res.headers,
            body: await res
              .text()
              .then((text) => (text ? JSON.parse(text) : undefined))
              .catch(() => res),
            error: undefined,
          });
        } else {
          updateResponse({
            isFetching: false,
            statusCode: res.status,
            ok: res.ok,
            headers: res.headers,
            body: undefined,
            error: { message: await res.json() },
          });
        }
      })
      .catch((ex) => {
        updateResponse({
          isFetching: false,
          statusCode: undefined,
          ok: undefined,
          headers: undefined,
          body: undefined,
          error: { message: ex.message },
        });
      });
  };

  const post = useCallback(
    async (
      url: string,
      postBody?: string,
      postHeaders?: Headers | HeadersObject
    ) => {
      await doFetch("POST", url, postBody, postHeaders);
    },
    []
  );

  const get = useCallback(
    async (url: string, getHeaders?: Headers | HeadersObject) => {
      await doFetch("GET", url, undefined, getHeaders);
    },
    []
  );

  return { get, post, response };
}

export default useFetch;
