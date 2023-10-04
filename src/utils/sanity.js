import { useSanityClient } from "@sanity/astro";
import groq from "groq";

export async function getProjects() {
    return await useSanityClient().fetch(
      groq`*[_type == "project" && defined(slug.current)] | order(_createdAt desc)`
    );
  }
  
    export async function getProject(slug) {
      return await useSanityClient().fetch(
        groq`*[_type == "project" && slug.current == $slug][0]`,
        {
          slug,
        }
      );
    }