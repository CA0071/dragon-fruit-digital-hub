# Full-Stack Admin Panel Request (Prompt Template)

Use this prompt with an AI code assistant (e.g., Codespace AI) to generate a full-stack admin panel for this project.

---

## Prompt

I have a web project (mainly TypeScript/React/Next.js) that is ready to deploy on Hostinger webapp hosting.
I need you to implement a full-stack admin panel for my site with these features:

- **Authentication**: Secure login for admins only.
- **Product Management**: Add, edit, delete products; update product pricing.
- **Page Management**: Edit the content of existing pages.
- **Image Uploads**: Upload images for products and pages, with an image preview.
- **Technologies**: Use technologies compatible with TypeScript/React/Next.js for the frontend, and Node.js/Express (or another standard JS/TS backend) for the backend API. Use a file-based or SQLite/Postgres database if needed.
- **UI**: A clean, simple dashboard (e.g., using Material UI or Ant Design), accessible at `/admin`.
- **API**: Build all the necessary REST API endpoints for products, pricing, pages, and image uploads.
- **File Storage**: Use local uploads or a simple cloud solution (like Cloudinary) for storing images.
- **Deployment**: Make sure it can be deployed on Hostinger webapp hosting (Node.js environment).

Please provide:

- Source code for both frontend (admin panel) and backend (API/server).
- Instructions on environment variables and config for deployment.
- Example admin user credentials for testing.
- Optional: If a ready-made admin panel (like React Admin or AdminJS) is better for this stack and makes it easier, you can use that, but please explain how to connect it to my data and how it works.

I do not know how to code, so provide easy-to-follow deployment instructions for a beginner.

---

## Notes

- Update the tech stack details (e.g., Vite/React instead of Next.js) before sending if the project uses a different frontend framework.
- Replace “Hostinger” with your actual hosting provider if needed.
