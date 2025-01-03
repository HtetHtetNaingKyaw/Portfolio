import { Account, Client, Databases } from "appwrite";

const client = new Client();

const endPoint: string = import.meta.env.VITE_APPWRITE_API;
const projectId: string = import.meta.env.VITE_APPWRITE_PROJECT_ID;

client.setEndpoint(endPoint).setProject(projectId);

export const account = new Account(client);
export const db = new Databases(client);

export default client;
