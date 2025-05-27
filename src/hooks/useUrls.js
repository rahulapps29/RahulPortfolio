import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import customFetch from "../utils/customFetch";

// Fetch all URLs
const fetchUrls = async () => {
  const res = await customFetch.get("/urls");
  return res.data;
};

// Add a new URL
const addUrl = async (newUrl) => {
  const res = await customFetch.post("/urls", newUrl);
  return res.data;
};

// Update a URL
const updateUrl = async ({ id, data }) => {
  const res = await customFetch.put(`/urls/${id}`, data);
  return res.data;
};

// Delete a URL
const deleteUrl = async (id) => {
  const res = await customFetch.delete(`/urls/${id}`);
  return res.data;
};

export const useUrls = () => {
  const queryClient = useQueryClient();

  const urlsQuery = useQuery({
    queryKey: ["urls"],
    queryFn: fetchUrls,
  });

  const addUrlMutation = useMutation({
    mutationFn: addUrl,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["urls"] }),
  });

  const updateUrlMutation = useMutation({
    mutationFn: updateUrl,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["urls"] }),
  });

  const deleteUrlMutation = useMutation({
    mutationFn: deleteUrl,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["urls"] }),
  });

  return {
    urlsQuery,
    addUrlMutation,
    updateUrlMutation,
    deleteUrlMutation,
  };
};
