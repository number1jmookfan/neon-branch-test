import * as p from "drizzle-orm/pg-core";

export const users = p.pgTable("users", {
  id: p.serial().primaryKey(),
  name: p.text(),
  email: p.text().unique(),
  fav_animal: p.text(),
  fav_food: p.text(),
  schema_with_vercel_sh: p.text(),
});
