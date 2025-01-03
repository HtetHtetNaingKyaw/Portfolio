import { ID } from "appwrite";
import { account, db } from "../appwrite";

export const ownerLogin = async (email: string, password: string) => {
  try {
    const res = await account.createEmailPasswordSession(email, password);
    return res;
  } catch (error) {
    throw error;
  }
};

export const checkSession = async () => {
  try {
    const user = await account.get();
    return user;
  } catch (error) {
    throw error;
  }
};

export const createPost = async (
  title: string,
  description: string,
  projectLink: string,
  deployLink: string,
  hashTag: string
) => {
  try {
    const response = await db.createDocument(
      import.meta.env.VITE_APPWRITE_DB_ID, // Database ID
      import.meta.env.VITE_APPWRITE_POST_COLLECTON_ID, // Collection ID
      ID.unique(), // Generate unique document ID
      {
        title,
        description,
        projectLink,
        deployLink,
        hashTag,
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};
