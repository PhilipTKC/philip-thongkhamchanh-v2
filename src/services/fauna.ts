export interface ProjectResponse {
  data: {
    title: string;
    description: string;
    url: string;
    labels: string[];
  };
}

export interface ToolsResponse {
  title: string;
  url: string;
  src: string;
}

type FaunaResponse = ProjectResponse[] | ToolsResponse[];

export class FaunaService {
  private readonly baseURL = "https://thongkhamchanh.me";

  private readonly basePath = ".netlify/functions";

  async queryIndex(index: string): Promise<FaunaResponse> {
    const products = await fetch(
      `${this.baseURL}/${this.basePath}/query-index`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ index }),
      }
    ).then((response) => response.json());

    return (products as any).data as FaunaResponse;
  }
}
