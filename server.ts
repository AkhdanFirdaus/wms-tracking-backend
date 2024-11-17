import { getActivityDetail } from "./controllers.ts";

const PORT = 3000;

async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const path = url.pathname;

  if (req.method === "GET" && path == "/inventories") {
    return new Response("Wait", { status: 200 });
  } else if (req.method === "GET" && path == "/stocks") {
    return new Response("Wait", { status: 200 });
  } else if (req.method === "GET" && path == "/supply_details") {
    return new Response("Wait", { status: 200 });
  } else if (req.method === "GET" && path == "/activities") {
    return await getActivityDetail("activity_001");
  } else if (req.method === "GET" && path == "/raw_items") {
    return new Response("Wait", { status: 200 });
  } else {
    return new Response("Not Found", { status: 404 });
  }
}

console.log(`HTTP webserver running. Access it at: http://localhost:${PORT}/`);
Deno.serve({ port: PORT }, handler);
