# Hong Linh Nguyen — Mechatronics Engineering ePortfolio

This repository contains the complete source code for Hong Linh Nguyen's responsive engineering ePortfolio.

## Main files to edit

- `app/page.tsx` — portfolio content, sections, projects, experience, skills and contact details.
- `app/globals.css` — colours, typography, layout, responsive behaviour and visual styling.
- `app/layout.tsx` — browser title and page description.
- `public/profile-internship.jpg` — portfolio photograph.
- `public/hong-linh-nguyen-resume.pdf` — downloadable resume.

## Open and run in VS Code

### Requirements

- Node.js 22 or newer: https://nodejs.org/
- Visual Studio Code: https://code.visualstudio.com/

### Steps

1. Extract this folder.
2. Open VS Code.
3. Select **File → Open Folder** and choose `Hong-Linh-ePortfolio-Code`.
4. Open the VS Code terminal with **Terminal → New Terminal**.
5. Install the project packages:

   ```bash
   npm install
   ```

6. Start the development website:

   ```bash
   npm run dev
   ```

7. Open the local address displayed in the terminal, normally:

   ```text
   http://localhost:5173
   ```

8. Stop the website with `Ctrl+C`.

## Update your content

Most text is stored near the top of `app/page.tsx` in these arrays:

- `criteria`
- `projects`
- `experience`
- `skillGroups`

The remaining About Me, education and contact content appears inside the `Home` component in the same file.

After making changes, verify the production build:

```bash
npm run build
```

## Upload the project to GitHub

Create a new empty GitHub repository, for example `hong-linh-eportfolio`. Do not add a README or `.gitignore` on GitHub because they are already included here.

In the VS Code terminal, run:

```bash
git init
git add .
git commit -m "Create mechatronics engineering ePortfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/hong-linh-eportfolio.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username.

For later updates:

```bash
git add .
git commit -m "Update ePortfolio"
git push
```

## Publish from the GitHub repository

This project uses React, Next.js-compatible components and Vinext. GitHub can store the complete source, but standard GitHub Pages does not run this server-compatible project directly.

The easiest publishing option is to connect the GitHub repository to a compatible host such as Vercel or Cloudflare. The portfolio is also already available through its ChatGPT Sites deployment.

## Privacy reminder

The current portfolio contains a public-facing email address, phone number, LinkedIn profile, photograph and resume. Remove anything you do not want visible before publishing a public copy.
