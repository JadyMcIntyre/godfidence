import { users } from "./model.ts";

export const getUsers = () => {
  return new Response(JSON.stringify(users), {
    headers: { "Content-Type": "application/json" },
  });
};

export const getUserById = (id: number) => {
  const user = users.find((u) => u.id === id);
  if (user) {
    return new Response(JSON.stringify(user), {
      headers: { "Content-Type": "application/json" },
    });
  } else {
    return new Response(JSON.stringify({ message: "User not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }
};
