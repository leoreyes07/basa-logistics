# 🤖 Basa Logistics - Agent Guidelines (AGENTS.md)

## 📌 Context
Basa Logistics is a multi-page web application (React 19 + Vite) focused on logistics management, featuring a modern, animated interface and a robust underlying architecture.

## 🛠 Tech Stack
- **Core**: React 19, TypeScript, Vite
- **Routing**: React Router DOM 7
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 12
- **Icons**: Lucide React
- **Backend/AI Integration**: Node.js, Express, `@google/genai`

## 🏗 Architecture & Design Patterns

1. **Multi-Page Architecture**: We migrated from a single-page scroll layout to a real multi-page architecture using React Router DOM. Respect the route boundaries (`src/pages/`).
2. **Container/Presentational Pattern**: 
   - **Containers**: Handle business logic, routing state, and data fetching.
   - **Presentational**: Pure UI components that receive data via props. **DO NOT** mix business logic inside presentational components.
3. **Component Reusability**: Keep UI elements in `src/components/` modular and cohesive.
4. **Framer Motion**: We use Framer Motion for scroll animations and entrance effects. Respect the existing wrapper components (like scroll wrappers) to avoid breaking staggered animation delays.

## 🛑 Strict Rules for AI Agents (Read Carefully)

1. **NO SHORTCUTS**: Do not write lazy code. Use TypeScript strictly. Do not use `any`.
2. **VERIFY BEFORE ACTING**: Never assume a utility, component, or configuration exists. Use your tools to read the file first.
3. **NO UNAUTHORIZED BUILDS**: Never run build processes unless explicitly asked to verify compilation.
4. **RESPECT THE ARCHITECTURE**: Maintain the separation of concerns. Concepts matter more than quick hacks. 
5. **CODE QUALITY**: 
   - Keep functions pure where possible.
   - Name variables expressively (e.g., `isModalOpen` instead of `flag` or `x`).
   - Remove debugging artifacts (`console.log`, temporary comments) before finalizing changes.

*By adhering to these rules, you ensure the long-term maintainability and scalability of Basa Logistics.*
