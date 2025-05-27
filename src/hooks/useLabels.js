// src/hooks/useLabels.js
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import customFetch from "../utils/customFetch";

// Fetch labels
const fetchLabels = async () => {
  const res = await customFetch.get("/label/labels");
  return res.data;
};

// Update labels
const updateLabels = async (updatedLabels) => {
  const res = await customFetch.post("/label/labels", { updatedLabels });
  return res.data;
};

export const useLabels = () => {
  const queryClient = useQueryClient();

  const labelsQuery = useQuery({
    queryKey: ["labels"],
    queryFn: fetchLabels,
  });

  const updateLabelsMutation = useMutation({
    mutationFn: updateLabels,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["labels"] });
    },
  });

  return { labelsQuery, updateLabelsMutation };
};
