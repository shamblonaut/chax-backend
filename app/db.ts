import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client/web";
import { env } from "./env";
import * as schema from "./schema";

const client = createClient({
  url: env.DATABASE_URL!,
  authToken: env.DATABASE_TOKEN!,
});

export const db = drizzle(client, { schema });
