export * from "./types";
export * from "./queries";

export function queryContentful<T = any>(query: string): Promise<{ data: T }> {
  return window
    .fetch("https://graphql.contentful.com/content/v1/spaces/tmv21jqhvpr2/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer yqKO25vChBIMtjeXQUiHYmxN0YTdwq4_JdWyjx3p3vQ",
      },
      body: JSON.stringify({ "query":query }),
    })
    .then((response) => response.json())
    .then((json) => json as { data: T });
}
