export const queryKeys = {
  posts: {
    all: () => ["posts"] as const,
    detail: (id: string) => ["posts", id] as const,
  },
  users: {
    all: () => ["users"] as const,
    detail: (id: string) => ["users", id] as const,
  },
};
