import { useEffect, useState } from "react";
import { client } from "./contentful.js";

const useContactInfo = () => {
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .getEntries({ content_type: "contactsr" }) // your model ID
      .then((res) => {
        setInfo(res.items[0].fields);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  return { info, loading };
};

export default useContactInfo;
