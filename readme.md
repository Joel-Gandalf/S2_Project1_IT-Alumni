# Alumni Portal - SPA Architecture & Responsive Design

This project is a web portal designed for the management and interconnection of former students (Alumni). It integrates a networking system and a job board specialized in the tech ecosystem. The application is built as a native **SPA (Single Page Application)** using strict **TypeScript** and fluid **CSS3** following a *Mobile-First* paradigm.

---

## 📂 Project Structure & Architecture

The application is modularly organized to guarantee total decoupling between the business logic, the UI views, and the local simulated databases:

*   `./src/router.ts`: **The Core of the application**. A custom centralized router that manages the global active path state (`currentPage`) and intercepts navigation flows using dynamic code guard security restrictions.
*   `./src/data-base/`: Immutable data layer in JSON format. Contains the initial list of students (`former-students.json`) and the tech job offers structured with precise numerical timestamps (`job-opportunities.json`).
*   `./src/services/`: Houses the linear functional programming pipelines (`.filter()`, `.sort()`) that execute real-time queries, including the networking optimization engine (`main-networking-service.ts`) and the job matching processor (`main-jobs-service.ts`).
*   `./src/components/`: **Modular UI Components & Dual Responsiveness (DRY)**. To avoid duplicate code overhead, core elements like `alumni-card`, `job-card`, `main-networking`, and `main-job` share a single logical file. Using a boolean flag (`isPhone`), the component dynamically toggles its internal HTML tree and flexible CSS layout between **Laptop** and **Mobile** viewports.
*   `./src/annexes/`: Full documentation of the initial product planning, including the *briefing*, site map blueprint, functional definition, and detailed MVP user case analysis.

```
.
├── index.html
├── tsconfig.json
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
└── src/
    ├── main.ts
    ├── router.ts
    ├── style.css
    ├── annexes/
    ├── assets/
    │   ├── fonts/
    │   ├── icons/
    │   ├── images/
    │   └── video/
    ├── components/
    │   ├── alumni-card/
    │   ├── footer-laptop/
    │   ├── header-phone/
    │   ├── job-card/
    │   ├── main-home-laptop/
    │   ├── main-home-phone/
    │   ├── main-job/
    │   ├── main-networking/
    │   ├── nav-bar-laptop/
    │   └── tab-bar-phone/
    ├── data-base/
    │   ├── former-students.json
    │   └── job-opportunities.json
    ├── pages/
    │   ├── home-laptop.ts
    │   ├── home-phone.ts
    │   ├── job-opportunities-laptop.ts
    │   ├── job-opportunities-phone.ts
    │   ├── networking-laptop.ts
    │   ├── networking-phone.ts
    │   ├── sign-up-phone-laptop/
    │   └── welcome-phone/
    └── services/
        ├── main-jobs-service.ts
        └── main-networking-service.ts
```

---

## 🛠️ Core Technologies

*   **TypeScript (ES6+)**: Strict type constraints to block software errors during development and compile times.
*   **Vite**: Next-generation ultra-fast frontend build tool and local dev server ecosystem.
*   **Native CSS3**: Advanced fluid layout layouts utilizing **CSS Grid**, **Flexbox**, and dynamic math operations (`clamp`, `calc`) free of heavy external CSS utility libraries.
*   **Git**: Structured source code revision tracking following the strict *Conventional Commits* standard rules.

---

## ⚙️ Installation & Local Setup

Follow these quick commands to spin up the local development playground in your machine:

1.  **Clone the repository and access the root directory:**
    ```bash
    git clone <your-repository-url>
    cd <project-folder-name>
    ```

2.  **Install all the system package manager dependencies:**
    ```bash
    npm install
    ```

3.  **Launch the real-time live local development server:**
    ```bash
    npm run dev
    ```
    *Once online, point your preferred web browser to the default port path: `http://localhost:5173`*

4.  **Compile and bundle the final product asset assets for release (Build):**
    ```bash
    npm run build
    ```
    *This script generates a standalone distribution directory named `dist/` containing optimized minified code fully ready for production hosting.*

---

## Contributor

- **Joel Gandalf Lillo** - [Link to my GitHub](https://github.com/Joel-Gandalf)