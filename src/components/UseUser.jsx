import { useQuery } from "react-query";
import { apiGetUser } from "../api";

// 로그인 성공 api 요청 쿼리
export default function UseUser() {
    const {data} = useQuery("getUser", apiGetUser);
    return data;
}