import React, { useRef, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import "./CVpage1.css";

const CVPage = () => {
  const componentRef = useRef(null);

  // Debugging: Log ref status
  useEffect(() => {
    console.log("Component ref:", componentRef.current);
  }, []);

  const handlePrint = useReactToPrint({
    content: () => {
      // Create a new div with your content
      const printWindow = document.createElement("div");
      printWindow.innerHTML = componentRef.current.innerHTML;
      document.body.appendChild(printWindow);
      return printWindow;
    },
    removeAfterPrint: true,
  });

  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button onClick={handlePrint} className="download-btn">
          Download as PDF
        </button>
      </div>

      {/* Printable content - must be visible in DOM */}
      <div
        className="cv-container"
        ref={componentRef}
        style={{ visibility: "visible" }}
      >
        <h1>Rahul Luthra</h1>
        <p>Professional Summary</p>
        {/* Add more CV content here */}
      </div>
    </div>
  );
};

export default CVPage;
