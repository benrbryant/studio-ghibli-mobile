import { useQuery } from "@tanstack/react-query";
import { BASE_API_URL } from "@/common/constants/api";
import { Person } from "../types";

export default function usePeople() {
  return useQuery({
    queryKey: ["people"],
    queryFn: async (): Promise<Array<Person>> => {
      let res = await fetch(BASE_API_URL + "/people");
      return res.json();
    },
  });
}
