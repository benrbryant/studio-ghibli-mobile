import { useQuery } from "@tanstack/react-query";
import { BASE_API_URL } from "@/common/constants/api";
import { Species } from "../types";

export default function useSpecies() {
  return useQuery({
    queryKey: ["species"],
    queryFn: async (): Promise<Array<Species>> => {
      let res = await fetch(BASE_API_URL + "/species");
      return res.json();
    },
  });
}
