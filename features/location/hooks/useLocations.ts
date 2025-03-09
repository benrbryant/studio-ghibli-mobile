import { useQuery } from "@tanstack/react-query";
import { Location } from "../types";
import { BASE_API_URL } from "@/common/constants/api";

export default function useLocations() {
  return useQuery({
    queryKey: ["locations"],
    queryFn: async (): Promise<Array<Location>> => {
      let res = await fetch(BASE_API_URL + "/locations");
      return res.json();
    },
  });
}
