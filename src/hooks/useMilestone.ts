import { useEffect, useState } from "react";
import type { TechMilestone } from "../types/milestone";
import { API_URL } from "../consts";

export const useMilestone = () => {
  const [milestone, setMilestone] = useState<TechMilestone | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchMilestone = async () => {
    try {
      const response = await fetch(API_URL);
      if (response.status !== 200) throw new Error();
      const data = await response.json();
      setMilestone(data);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setMilestone(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMilestone();
  }, []);

  return { milestone, loading };
};
