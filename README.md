# KHS Press Yearbook Studio — GitHub Pages

26 independent mini-lessons with teaching before practice, visual worked examples, compressed narrated audio, guided decisions, interactive demonstrations, application notes and downloadable PDF completion certificates.

## Upload and publish

1. Save `yearbook-production-lab-github-pages.zip` to Downloads and unzip it there.
2. Upload the extracted contents to your GitHub repository root. The repository must show `index.html`, `assignments.html`, `media/` and `vendor/` directly, without an extra enclosing folder.
3. Include the supplied empty `.nojekyll` file. If Finder hides it, create a new empty file called `.nojekyll` through GitHub's Add file → Create new file option.
4. In Settings → Pages, select Deploy from a branch, choose the branch containing these files (usually `main`), select `/(root)`, and Save.
5. Open the published site address that GitHub displays. Open `assignments.html` on that site to get your individual assignment links.

GitHub instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

GitHub does not unpack a repository upload ZIP into a website. Upload its extracted contents. If a browser upload fails, commit the top-level files first, then upload `vendor/` and `media/` separately. Keep their original names. If Finder shows cloud-download icons, choose Download Now and wait before uploading.

No build command, package installation, database, account system or external hosting service is required. This package is for GitHub Pages only.

## Assign one lesson at a time

At a repository site, example URL shapes are:

- Teacher links: `https://YOUR-ACCOUNT.github.io/YOUR-REPOSITORY/assignments.html`
- Module 01: `https://YOUR-ACCOUNT.github.io/YOUR-REPOSITORY/?lesson=01`
- Module 26: `https://YOUR-ACCOUNT.github.io/YOUR-REPOSITORY/?lesson=26`

The teacher page fills these with your actual published address automatically. Retain the repository part of the URL. Student lesson pages have no backlinks to the full set and no next-lesson links. Lessons can be assigned independently for sessions.

## What each lesson includes

1. A concept explanation and three-step method.
2. Optional compressed narration that reads the teaching content.
3. Three visual worked-example stages that explain the production decisions.
4. Two practice decisions with help, specific feedback and retries.
5. A focused demonstration or application tool and a production note.
6. A downloadable lesson record and personalized PDF completion certificate.

The illustrations, names, quotations and data are fictional teaching material. They are not real reporting or documentary photographs. Photo exercises demonstrate visual concepts; students still need to demonstrate real photography and production work to a teacher.

## Certificates and progress

A certificate is available after all worked-example steps, both decisions, any required keyed tool check, and a specific application note are complete. It includes the entered student name, lesson title, completion date and local certificate ID.

Certificates confirm self-paced lesson/practice completion, not teacher-verified skill. PDF generation happens in the browser through the bundled MIT-licensed pdf-lib. Progress, notes and names remain in that browser. No student information is uploaded or sent to a teacher. Students submit downloads through your existing class workflow. Progress does not transfer automatically between devices or browsers.

## Source and local-policy boundaries

The teacher-only `teacher-reference.html` maps the lessons to all 26 main yearbook categories and 9 current-year categories, and distinguishes explicit standards from inferred instruction. Original source PDFs are not bundled.

The lessons exclude contest deadlines, entry rules, eligibility, story/category definitions and submission counts. Your current staff guides control story approval, caption structure and length, paragraph and quote format, attribution, tense, second reference, source expectations, type choices, design measurements, camera settings, naming, export, review and handoff. Existing labs were not used as content sources.

## Small-file design

All visual examples are compact SVG/HTML/CSS, including spread diagrams, crop comparisons, composition guides and charts. The 26 spoken explanations use 48 kbps AAC/M4A audio. There are no external font requests, image libraries or hosted media dependencies. No API keys are needed.

## Files

- `index.html`: learning hub and standalone lesson entry point.
- `assignments.html`: teacher assignment links.
- `teacher-reference.html`: teacher source/category map.
- `content.js`: teaching, examples, decisions and targets.
- `visuals.js`, `app.js`, `styles.css`: illustrations, tools and learning experience.
- `certificates.js`, `vendor/`: local PDF generation and library license.
- `media/`: compressed narration and text transcripts.
- `.nojekyll`: bypasses Jekyll processing.

Replace changed files and commit to update the published site. All asset references are relative and support both account homepages and repository project paths.
