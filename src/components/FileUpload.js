import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    const types = ["image/jpeg", "image/png"];
    const selectedFile = e.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError("");
    } else {
      setFile(null);
      setError("Select a valid file type");
    }
  };
  return (
    <form>
      <label>
        <input type="file" onChange={handleChange} />
        <span>Upload Photo +</span>
      </label>
      <div className="output">
        {error && <div>{error}</div>}
        {file && (
          <div>
            <ProgressBar {...{ file, setFile }} />
            {/* this is same as file={file} setFile={setFile} */}
          </div>
        )}
      </div>
    </form>
  );
};

export default FileUpload;
