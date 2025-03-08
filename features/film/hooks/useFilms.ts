import { useQuery } from "@tanstack/react-query";
import { BASE_API_URL } from "@/common/constants/api";
import { Film } from "../types";

export default function useFilms() {
    return useQuery({
        queryKey: ["films"],
        queryFn: async (): Promise<Array<Film>> => {
            let res = await fetch(BASE_API_URL+"/films");
            return res.json();
        }
    })
}