import {atom} from "recoil";
import {UserType} from "@/apis/userApi";

export const userState = atom<UserType>({
    key: "userState",
    default: JSON.parse(localStorage.getItem("user") || "{}"),
});

export const jwtState = atom<string>({
    key: "jwtState",
    default: localStorage.getItem("jwt") || "",
});
