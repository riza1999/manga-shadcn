import PocketBase from "pocketbase";
import { Admin, Record } from "pocketbase";

// TODO: search why process.env not working
const pb_url = process.env.NODE_ENV === "development" ? 'http://localhost:8090' : 'https://bacakomik-pb-docker.fly.dev'
const pb = new PocketBase(pb_url);

export const getUser = () => {
  const lsUserModel = localStorage.getItem("pocketbase_auth");
  const parseUserModel = lsUserModel
    ? (JSON.parse(lsUserModel) as Record | Admin)
    : null;
  const userModel = pb.authStore.model ?? parseUserModel;

  return userModel;
};

export const login = async (email: string, password: string) => {
  return await pb.collection("users").authWithPassword(email, password);
};

export const logout = () => {
  return pb.authStore.clear();
};

export const register = async ({
  name,
  email,
  password,
  passwordConfirm,
}: {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}) => {
  return await pb.collection("users").create({
    name,
    email,
    password,
    passwordConfirm,
  });
};