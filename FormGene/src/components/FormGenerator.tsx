import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormField from "./FormField";

interface FormGeneratorProps {
  jsonSchema: string;
}

const FormGenerator: React.FC<FormGeneratorProps> = ({ jsonSchema }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [formData, setFormData] = useState<any>(null); // To store form submission

  let schema;
  try {
    schema = JSON.parse(jsonSchema);
  } catch {
    schema = null;
  }

  const onSubmit = (data: any) => {
    setFormData(data);
    downloadJSON(data, "form_submission.json");
  };

  const downloadJSON = (data: any, filename: string) => {
    const jsonBlob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(jsonBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full md:w-1/2 p-4">
      {schema && schema.fields ? (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {schema.fields.map((field: any) => (
            <FormField
              key={field.id}
              field={field}
              register={register}
              errors={errors}
            />
          ))}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </form>
      ) : (
        <p className="text-gray-500">
          Enter valid JSON schema to see the form preview.
        </p>
      )}

      {/* Display submitted form data */}
      {formData && (
        <div className="mt-4 p-4 border rounded bg-gray-50">
          <h2 className="text-lg font-bold">Form Submission:</h2>
          <pre className="text-sm bg-gray-100 p-2 rounded overflow-x-auto">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default FormGenerator;
