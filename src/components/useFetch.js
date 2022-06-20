import { useEffect, useState } from "react";

export default function useFetch() {
  const [drugs, setDrugs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const url = "http://localhost:8000/api/v1/drugs";

  function fetchUrl() {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setDrugs(result);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setErrorMessage("There was an error");
      });
  }

  useEffect(() => fetchUrl, [url]);

  return { drugs, isLoading, errorMessage };
}
