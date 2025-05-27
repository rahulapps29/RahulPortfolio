import { useEffect, useState, useRef } from "react";
import { useLabels } from "../hooks/useLabels";
import "./EditPrintLabels.css";

const EditPrintLabels = () => {
  const { labelsQuery, updateLabelsMutation } = useLabels();
  const [labels, setLabels] = useState([]);
  const [message, setMessage] = useState("");
  const sheetRef = useRef();

  // Load initial data
  useEffect(() => {
    if (labelsQuery.data) setLabels(labelsQuery.data);
  }, [labelsQuery.data]);

  const handleChange = (index, value) => {
    const newLabels = [...labels];
    newLabels[index] = value;
    setLabels(newLabels);
  };

  const handleSave = () => {
    updateLabelsMutation.mutate(labels, {
      onSuccess: () => setMessage("✅ Labels saved successfully!"),
      onError: () =>
        setMessage("❌ Error saving labels. Make sure all 24 are filled."),
    });
  };

  const handleClearAll = () => {
    setLabels(Array(24).fill("")); // Empty all labels
    setMessage("⚠️ All labels cleared (not saved yet).");
  };

  const handleReset = () => {
    if (labelsQuery.data) {
      setLabels(labelsQuery.data); // Reset to original
      setMessage("🔄 Labels reset to original (not saved yet).");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  if (labelsQuery.isLoading) return <div>Loading...</div>;
  if (labelsQuery.isError) return <div>Error loading labels</div>;

  return (
    <div className="print-page">
      <h2 className="no-print">Edit & Print Labels</h2>

      <div className="controls no-print">
        <button onClick={handleSave}>💾 Save</button>
        <button onClick={handlePrint}>🖨️ Print</button>
        <button onClick={handleClearAll}>🗑️ Clear All</button>
        <button onClick={handleReset}>🔄 Reset</button>
      </div>

      {message && <p class="no-print">{message}</p>}

      <div className="sheet" ref={sheetRef}>
        {labels.map((label, index) => (
          <div key={index} className="label-wrapper">
            <input
              type="text"
              value={label}
              onChange={(e) => handleChange(index, e.target.value)}
              className="label-input"
            />
            <div className="label-text">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditPrintLabels;
