export type Post = {
  id: number;
  createdAt: number;
  updatedAt?: number;
  title: string;
  body: string;
  image: string;
  like: number;
  publish: boolean;
};

export type Posts = Post[];
