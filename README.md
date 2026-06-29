# 🚢 Basa Logistics

Basa Logistics is a modern and interactive web platform designed for the management and promotion of international logistics services, freight forwarding, customs, and cargo insurance.

Built with the latest frontend development standards, it offers a fast, animated, and highly optimized user experience.

## 🛠️ Tech Stack

This project is a **100% Serverless Frontend** application, designed to be scalable, secure, and easy to deploy.

- **Core Framework**: React 19 + TypeScript
- **Bundler**: Vite (Lightning-fast performance)
- **Routing**: React Router v7
- **Styling**: Tailwind CSS 4 (with atomic design and custom color palettes)
- **Animations**: Framer Motion 12 (Scroll effects and micro-interactions)
- **Icons**: Lucide React
- **External Services**: Web3Forms (For serverless form submissions)

## 🏗️ Architecture & Patterns

- **Multi-Page Architecture**: Clear separation of concerns by routes (Main pages located in `src/pages/`).
- **Container/Presentational**: Business logic (forms, validations, routing) is kept separate from pure visual representation.
- **Serverless Forms**: Migrated from a classic backend infrastructure (Node/Express) to public endpoints like Web3Forms to avoid server maintenance.

## 🚀 Installation & Local Development

1. **Clone the repository and enter the directory**:
   ```bash
   cd basa-logistics
   ```

2. **Install dependencies**:
   Ensure you have Node.js installed (v18+ recommended).
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   The project uses [Web3Forms](https://web3forms.com/) for contact and quote form submissions.
   - Create a `.env` file in the root of the project.
   - Paste your Access Key (you can see an example in `.env.example`).
   ```env
   VITE_WEB3FORMS_ACCESS_KEY="your-free-access-key"
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```
   *The application will be available at `http://localhost:3000` (or the port indicated by Vite).*

## 📦 Build for Production

To generate an optimized and production-ready version (e.g., to deploy on Vercel, Netlify, or AWS S3):

```bash
npm run build
```

This will generate a `dist/` folder with all the minified static assets ready to be served.

## 💡 Contribution Guidelines & Best Practices

- **Strict TypeScript**: The use of the `any` type is strictly forbidden. Everything must be strongly typed in `src/types.ts`.
- **Modular Components**: Any new generic UI component should be placed in `src/components/ui`.
- **Conventional Commits**: The Git history follows the *Conventional Commits* standard (e.g., `feat(forms): add Web3Forms integration`).
