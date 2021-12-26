export interface PostData {
  id: number;
  attributes: {
    author: string;
    contents: string;
    title: string;
    createdAt: string;
    publishedAt: string;
    updatedAt: string;
  }
}