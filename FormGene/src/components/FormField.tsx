import React from "react";

const FormField: React.FC<any> = ({ field, register, errors }) => {
  const { id, type, label, required, placeholder, options, validation } = field;

  switch (type) {
    case "text":
    case "email":
    case "textarea":
      return (
        <div>
          <label htmlFor={id} className="block text-sm font-medium mb-1">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
          <input
            {...register(id, {
              required: required && `${label} is required`,
              pattern: validation?.pattern
                ? {
                    value: new RegExp(validation.pattern),
                    message: validation.message || "Invalid format",
                  }
                : undefined,
            })}
            type={type}
            placeholder={placeholder}
            className="w-full p-2 border rounded"
          />
          {errors[id] && (
            <span className="text-red-500 mt-1 block">
              {errors[id].message || `${label} is required`}
            </span>
          )}
        </div>
      );

    case "select":
      return (
        <div>
          <label htmlFor={id} className="block text-sm font-medium mb-1">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
          <select
            {...register(id, { required: required && `${label} is required` })}
            className="w-full p-2 border rounded"
          >
            {options.map((option: any) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors[id] && (
            <span className="text-red-500 mt-1 block">
              {errors[id].message || `${label} is required`}
            </span>
          )}
        </div>
      );

    case "radio":
      return (
        <div>
          <label className="block text-sm font-medium mb-1">{label}</label>
          {options.map((option: any) => (
            <label key={option.value} className="inline-flex items-center mr-4">
              <input
                {...register(id, {
                  required: required && `${label} is required`,
                })}
                type="radio"
                value={option.value}
                className="mr-2"
              />
              {option.label}
            </label>
          ))}
          {errors[id] && (
            <span className="text-red-500 mt-1 block">
              {errors[id].message || `${label} is required`}
            </span>
          )}
        </div>
      );

    default:
      return null;
  }
};

export default FormField;
