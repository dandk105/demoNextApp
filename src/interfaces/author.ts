import { Tables } from "./database.types";

export type Author = Pick<Tables<"authors">, "first_name" | "avater_url">;
