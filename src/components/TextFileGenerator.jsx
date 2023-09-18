import { useState, useEffect } from "react";

function TextFileGenerator({ list }) {
  const [fileBlob, setFileBlob] = useState(null);

  const downloadTextFile = () => {
    const textBlob = new Blob([list.map((e) => `- ${e.activity}`).join("\n")], {
      type: "text/plain",
    });
    setFileBlob(textBlob);
  };

  useEffect(() => {
    if (fileBlob) {
      const downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(fileBlob);
      downloadLink.download = "file.txt";
      downloadLink.click();
    }
  }, [fileBlob]);

  return (
    <div>
      <button onClick={downloadTextFile}>Download as .txt file</button>
    </div>
  );
}

export default TextFileGenerator;
