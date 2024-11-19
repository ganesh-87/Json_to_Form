import React, { useState } from "react";
import JsonEditor from "./components/JsonEditor";
import FormGenerator from "./components/FormGenerator";

const App: React.FC = () => {
  const [jsonSchema, setJsonSchema] = useState<string>("");

  return (
    <div className="h-screen flex flex-col md:flex-row">
      <JsonEditor jsonSchema={jsonSchema} setJsonSchema={setJsonSchema} />
      <FormGenerator jsonSchema={jsonSchema} />
    </div>
  );
};

export default App;
