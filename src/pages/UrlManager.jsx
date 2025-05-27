import { useState, useEffect } from "react";
import { useUrls } from "../hooks/useUrls";
import "./UrlManager.css";

const UrlManager = () => {
  const { urlsQuery, addUrlMutation, updateUrlMutation, deleteUrlMutation } =
    useUrls();

  const [form, setForm] = useState({ title: "", link: "", id: null });

  useEffect(() => {
    if (urlsQuery.error) console.error(urlsQuery.error);
  }, [urlsQuery.error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { title: form.title, link: form.link };

    if (form.id) {
      updateUrlMutation.mutate({ id: form.id, data: payload });
    } else {
      addUrlMutation.mutate(payload);
    }

    setForm({ title: "", link: "", id: null });
  };

  const handleEdit = (url) => {
    setForm({ title: url.title, link: url.link, id: url._id });
  };

  const handleDelete = (id) => {
    deleteUrlMutation.mutate(id);
  };

  if (urlsQuery.isLoading) return <p>Loading...</p>;

  return (
    <div className="url-manager-container">
      <form className="url-manager-form" onSubmit={handleSubmit}>
        <input
          className="url-manager-input"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <input
          className="url-manager-input"
          placeholder="Link"
          value={form.link}
          onChange={(e) => setForm({ ...form, link: e.target.value })}
          required
        />
        <button className="url-manager-submit" type="submit">
          {form.id ? "Update" : "Add"}
        </button>
      </form>

      <ul className="url-manager-list">
        {urlsQuery.data?.map((url) => (
          <li className="url-manager-item" key={url._id}>
            <div className="url-manager-text">
              <strong>{url.title}</strong>: <a href={url.link}>{url.link}</a>
            </div>
            <div className="url-manager-actions">
              <button
                className="url-manager-btn edit"
                onClick={() => handleEdit(url)}
              >
                Edit
              </button>
              <button
                className="url-manager-btn delete"
                onClick={() => handleDelete(url._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UrlManager;
