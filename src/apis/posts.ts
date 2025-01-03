import { Query } from "appwrite";
import { db } from "../appwrite";

export const fetchPosts = async ({ pageParam}: { pageParam: number }) => {
  try {
    const response = await db.listDocuments(
      import.meta.env.VITE_APPWRITE_DB_ID, // Database ID
      import.meta.env.VITE_APPWRITE_POST_COLLECTON_ID, // Collection ID
      [Query.limit(20), Query.offset(pageParam * 20)]
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const fetchSinglePost = async (id: string) => {
  try {
    const response = await db.getDocument(
      import.meta.env.VITE_APPWRITE_DB_ID, // Database ID
      import.meta.env.VITE_APPWRITE_POST_COLLECTON_ID, // Collection ID
      id // Document ID
    );
    return response;
  } catch (error) {
    throw error;
  }
};
