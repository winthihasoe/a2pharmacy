import axios from "axios";
import { useQuery, useQueryClient, useMutation } from "react-query";

const fetchDrug = ({ queryKey }) => {
  let drugId = queryKey[1];
  return axios.get(`http://localhost:8000/api/v1/drugs/${drugId}`);
};

const addDrug = (drug) => {
  return axios.post(`http://localhost:8000/api/v1/drugs`, drug);
};

export const useFetchDrug = (drugId) => {
  const queryClient = useQueryClient();
  const { data, isLoading, isError, error } = useQuery(
    ["drug", drugId],
    fetchDrug,
    {
      initialData: () => {
        const drug = queryClient
          .getQueryData("drugs")
          ?.data?.find((drug) => drug.id === parseInt(drugId));

        if (drug) {
          return { data: drug };
        } else {
          return undefined;
        }
      },
    }
  );

  return { data, isLoading, isError, error };
};

export const useAddDrug = () => {
  return useMutation(addDrug);
};
