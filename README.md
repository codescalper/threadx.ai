<p align="center">
<a href=https://github.com/codescalper/threadx target="_blank">
<img src='https://cdn.discordapp.com/attachments/1092048766942597241/1183080812254609519/image.png?ex=658708de&is=657493de&hm=2b2ad76a6625e508c95ea92b633ec84c3a6636dd3c0fabd0fa9993d856a8881f&' width="100%" alt="Banner" />
</a>
</p>

<p align="center">
<img src="https://img.shields.io/github/languages/code-size/codescalper/threadx" alt="GitHub code size in bytes" />
<img src="https://img.shields.io/github/last-commit/codescalper/threadx" alt="GitHub last commit" />
<img src="https://img.shields.io/github/commit-activity/m/codescalper/threadx" alt="GitHub commit activity month" />
<img src="https://img.shields.io/github/license/codescalper/threadx" alt="GitHub license" />
</p>

## 📌 Overview

- ThreadX lets you generate captivating Twitter threads effortlessly with the power of AI. Choose from a variety of vibes and let the AI do the rest.
- It's a project that relies on essential dependencies such as hookform/resolvers, next-auth/prisma-adapter, radix-ui/react components, vercel/kv, bcrypt, next, react, tailwindcss, and typescript.

## 🔍 Table of Contents

- [📁 Project Structure](#project-structure)

- [📝 Project Summary](#project-summary)

- [💻 Stack](#stack)

- [⚙️ Setting Up](#setting-up)

- [🚀 Run Locally](#run-locally)

- [🙌 Contributors](#contributors)

- [📄 License](#license)

## 📁 Project Structure

```bash
├── .eslintrc.json
├── .gitignore
├── README.md
├── app
│   ├── (auth)
│   │   ├── sign-in
│   │   │   └── page.tsx
│   │   └── sign-up
│   │       └── page.tsx
│   ├── Header.tsx
│   ├── api
│   │   ├── auth
│   │   │   └── [...nextauth]
│   │   │       └── route.ts
│   │   ├── chat
│   │   │   └── route.ts
│   │   ├── route.ts
│   │   └── user
│   │       └── route.ts
│   ├── context
│   │   └── ThreadContext.tsx
│   ├── generate
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components.json
├── components
│   ├── CheckBoxEmoji.tsx
│   ├── ClientHero.tsx
│   ├── Context
│   │   └── vibeContext.ts
│   ├── Footer.tsx
│   ├── LightDark.tsx
│   ├── Number.tsx
│   ├── SelectVibe.tsx
│   ├── Thread.tsx
│   ├── UserSignOut.tsx
│   ├── form
│   │   ├── SignIn.tsx
│   │   └── SignUp.tsx
│   ├── input.tsx
│   ├── theme-provider.tsx
│   └── ui
│       ├── button.tsx
│       ├── card.tsx
│       ├── checkbox.tsx
│       ├── dropdown-menu.tsx
│       ├── form.tsx
│       ├── input.tsx
│       ├── label.tsx
│       └── select.tsx
├── lib
│   ├── auth.ts
│   ├── db.ts
│   └── utils.ts
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── prisma
│   ├── migrations
│   │   ├── 20231006112435_init
│   │   │   └── migration.sql
│   │   ├── 20231007111533_new_mig
│   │   │   └── migration.sql
│   │   ├── 20231011131426_
│   │   │   └── migration.sql
│   │   ├── 20231011132355_name
│   │   │   └── migration.sql
│   │   ├── 20231012104644_image
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   └── schema.prisma
├── tailwind.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## 📝 Project Summary

- [**app**](app): Main application directory.
- [**app/(auth)**](<app/(auth)>): Authentication-related functionalities.
- [**app/(auth)/sign-in**](<app/(auth)/sign-in>): Sign-in functionality for authentication.
- [**app/(auth)/sign-up**](<app/(auth)/sign-up>): Sign-up functionality for authentication.
- [**app/api**](app/api): API-related functionalities.
- [**app/api/auth**](app/api/auth): Authentication-related API functionalities.
- [**app/api/chat**](app/api/chat): Chat-related API functionalities.
- [**app/api/user**](app/api/user): User-related API functionalities.
- [**components**](components): Reusable UI components.
- [**lib**](lib): Libraries and utility functions used in the project.

## 💻 Stack

- [next-auth](https://next-auth.js.org/): Authentication library for Next.js projects.
- [prisma](https://www.prisma.io/): Database toolkit and ORM for TypeScript and Node.js.
- [react-hook-form](https://react-hook-form.com/): Library for flexible and efficient form validation in React.
- [react-icons](https://react-icons.github.io/react-icons/): Collection of popular icons as React components.
- [tailwindcss](https://tailwindcss.com/): Utility-first CSS framework for rapid UI development.
- [typescript](https://www.typescriptlang.org/): Typed superset of JavaScript that compiles to plain JavaScript.
- [next](https://nextjs.org/): React framework for building server-side rendered and static websites.
- [react](https://reactjs.org/): JavaScript library for building user interfaces.

## ⚙️ Setting Up

- Step 1

#### Your Environment Variable

```makefile
GOOGLE_CLIENT_SECRET=
GOOGLE_CLIENT_ID=
NEXT_AUTH_URL=
NEXTAUTH_SECRET=
GITHUB_SECRET=
GITHUB_ID=
DATABASE_URL=
NEXTAUTH_SECRET=
OPENAI_API_KEY=
```

## 🚀 Run Locally

1.Clone the threadx repository:

```sh
git clone https://github.com/codescalper/threadx
```

2.Install the dependencies with one of the package managers listed below:

```bash
npm install
```

3.Start the development mode:

```bash
npm run dev
```

## 🙌 Contributors

<a href="https://github.com/codescalper/threadx/graphs/contributors">
<img src="https://contrib.rocks/image?repo=codescalper/threadx" />
</a>

## 📄 License

This project is licensed under the **MIT License** - see the [**MIT License**](https://github.com/codescalper/threadx/blob/main/LICENSE) file for details.
