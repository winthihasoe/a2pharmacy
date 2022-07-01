import axios from "axios";
import { useQuery } from "react-query";

export default function useFetchDrugs() {
  const url = "http://localhost:8000/api/v1/drugs";

  const { data, isLoading, isError, error } = useQuery("drugs", fetchDrugs, {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });
  function fetchDrugs() {
    return axios.get(url);
  }

  return { data, isError, isLoading, error };
}
