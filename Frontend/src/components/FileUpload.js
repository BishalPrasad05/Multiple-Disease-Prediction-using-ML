import React from "react";

const FileUpload = ({ label, setFile }) => {
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <label className="block font-semibold mb-2">{label}</label>
      <input
        type="file"
        accept=".csv"
        onChange={handleChange}
        className="border border-gray-300 rounded p-2 w-full"
      />
    </div>
  );
};

export default FileUpload;
