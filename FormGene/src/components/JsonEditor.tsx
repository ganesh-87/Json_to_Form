import React, { useState } from "react";

interface JsonEditorProps {
  jsonSchema: string;
  setJsonSchema: (schema: string) => void;
}

const JsonEditor: React.FC<JsonEditorProps> = ({
  jsonSchema,
  setJsonSchema,
}) => {
  const [error, setError] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setJsonSchema(value);
    try {
      JSON.parse(value);
      setError(null);
    } catch {
      setError("Invalid JSON");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonSchema).then(
      () => {
        setCopySuccess("JSON copied to clipboard!");
        setTimeout(() => setCopySuccess(null), 2000); // Reset message after 2 seconds
      },
      () => {
        setCopySuccess("Failed to copy JSON.");
      }
    );
  };

  return (
    <div className="w-full md:w-1/2 p-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl mb-4">JSON to Form Converter</h1>
      <textarea
        className="w-full h-96 p-2 border rounded-lg bg-white dark:bg-gray-700 dark:text-gray-100"
        value={jsonSchema}
        onChange={handleChange}
        placeholder="Enter JSON Schema here..."
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <button
        onClick={handleCopy}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Copy JSON
      </button>
      {copySuccess && <p className="mt-2 text-green-500">{copySuccess}</p>}
    </div>
  );
};

export default JsonEditor;
