import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const pages = defineCollection({
  loader: glob({
    base: "./src/content/pages",
    pattern: "**/*.md",
  }),
});

export const collections = { pages };