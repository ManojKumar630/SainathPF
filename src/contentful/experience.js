// src/hooks/useExperience.js
import { useEffect, useState } from "react";
import { client } from "./contentful.js";

const useExperience = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .getEntries({ content_type: "experience", order: "-fields.startDate" }) // newest first
      .then((res) => {
        setExperiences(res.items);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  return { experiences, loading };
};

export default useExperience;
