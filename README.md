JSON to Form Converter
A dynamic form generator application that creates a live, responsive form based on a JSON schema. The app provides a JSON editor for schema input and real-time form rendering. It includes features such as form submission downloading, a dark mode toggle, and a "Copy JSON" functionality.

Live Demo
https://json-to-form-yvxi.vercel.app/

Features
Dynamic Form Generation: Enter a JSON schema, and the app generates a functional form in real-time.
JSON Editor: Real-time validation with syntax highlighting and error messages for invalid JSON.
Form Submission: Download form submissions as a JSON file.
Copy JSON: Easily copy the JSON schema to the clipboard.
Mobile Responsive: Fully responsive interface for all devices.
Getting Started
Prerequisites
Ensure you have the following installed:

Node.js (version 14+ recommended)
npm or yarn
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/<your-username>/json-to-form.git
cd json-to-form
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Open the app in your browser:

arduino
Copy code
http://localhost:3000
Usage
Input a JSON Schema
Enter a valid JSON schema into the left-hand JSON editor.
The form preview updates in real-time on the right.
Download Form Submission
Fill out the generated form.
Click Submit to download the form submission as a JSON file.
Toggle Dark Mode
Click the "Dark Mode" button in the top-right corner to switch themes.
Copy JSON
Click Copy JSON to copy the current JSON schema to the clipboard.
Example JSON Schema
Use the following sample JSON schema:

{
  "fields": [
    {
      "id": "name",
      "type": "text",
      "label": "Name",
      "required": true,
      "placeholder": "Enter your name"
    },
    {
      "id": "email",
      "type": "email",
      "label": "Email",
      "required": true,
      "placeholder": "Enter your email",
      "validation": {
        "pattern": "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
        "message": "Invalid email format"
      }
    },
    {
      "id": "gender",
      "type": "radio",
      "label": "Gender",
      "required": true,
      "options": [
        { "label": "Male", "value": "male" },
        { "label": "Female", "value": "female" }
      ]
    },
    {
      "id": "country",
      "type": "select",
      "label": "Country",
      "required": true,
      "options": [
        { "label": "India", "value": "india" },
        { "label": "USA", "value": "usa" }
      ]
    }
  ]
}

