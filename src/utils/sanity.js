import { useSanityClient } from "@sanity/astro";
import groq from "groq";

export async function getProjects() {
  return await useSanityClient().fetch(
    groq`*[_type == "project" && defined(slug.current)] | order(_createdAt desc)`,
  );
}

export async function getProject(slug) {
  return await useSanityClient().fetch(
    groq`*[_type == "project" && slug.current == $slug][0]`,
    {
      slug,
    },
  );
}

export async function getWebsites() {
  return await useSanityClient().fetch(
    groq`*[_type == "website" && defined(slug.current)] | order(_createdAt desc)`,
  );
}

export async function getWebsite(slug) {
  return await useSanityClient().fetch(
    groq`*[_type == "website" && slug.current == $slug][0]`,
    {
      slug,
    },
  );
}
