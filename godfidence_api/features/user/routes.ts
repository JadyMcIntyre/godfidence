import { getUsers, getUserById } from "./controller.ts";

export const userRoutes = (url: URL) => {
  const pathname = url.pathname;
  
  // Route to get all users
  if (pathname === "/users") {
    return getUsers();
  }
  
  // Route to get user by ID
  const userIdMatch = pathname.match(/^\/users\/(\d+)$/);
  if (userIdMatch) {
    const userId = parseInt(userIdMatch[1], 10);
    return getUserById(userId);
  }

  // If no route matches
  return new Response(JSON.stringify({ message: "Route not found" }), {
    status: 404,
    headers: { "Content-Type": "application/json" },
  });
};
