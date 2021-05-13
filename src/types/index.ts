export type Post = {
  id: number;
  createdAt: number;
  updatedAt?: number;
  title: string;
  body: string;
  image: string;
  like: number;
};

export type Posts = Post[];
