import { useEffect, useState } from "react";
import { createClient } from "contentful";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

const useResume = () => {
  const [resumeUrl, setResumeUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const res = await client.getAssets({
          'fields.title': 'Resume', // ✅ This is okay
          limit: 1,
        });

        const url = res.items[0]?.fields?.file?.url;

        if (url) {
          setResumeUrl("https:" + url);
        } else {
          console.warn("Resume asset found, but no file URL.");
        }
      } catch (err) {
        console.error("Error fetching resume:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchResume();
  }, []);

  return { resumeUrl, loading };
};

export default useResume;
