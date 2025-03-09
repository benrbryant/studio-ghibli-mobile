import { useQuery } from "@tanstack/react-query";
import { Vehicle } from "../types";
import { BASE_API_URL } from "@/common/constants/api";

export default function useVehicles() {
  return useQuery({
    queryKey: ["vehicles"],
    queryFn: async (): Promise<Array<Vehicle>> => {
      let res = await fetch(BASE_API_URL + "/vehicles");
      return res.json();
    },
  });
}
