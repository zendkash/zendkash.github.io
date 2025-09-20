# Project Overview

This repository contains the source code for Zendai Kashino's personal academic and professional website, available at [https://kashino.info/](https://kashino.info/). The website serves as a portfolio for Zendai Kashino, an AI/ML Engineer, and includes information about his professional experience, education, publications, and other projects. The site is bilingual, with content available in both English and Japanese.

The website is built with [Pelican](https://getpelican.com/), a static site generator written in Python. It uses a custom theme based on the Hyde theme.

## Building and Running

To run this website locally, you will need to have Python and `uv` installed.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/zendkash/zendkash.github.io.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd zendkash.github.io
    ```
3.  **Create a virtual environment:**
    ```bash
    uv venv
    ```
4.  **Install the dependencies:**
    ```bash
    uv pip install -r requirements.txt
    ```
5.  **Start the Pelican development server:**
    ```bash
    uv run pelican -r -l
    ```

The website will be available at `http://localhost:8000`.

## Development Conventions

*   **Content:** Content is written in Markdown and is located in the `content/` directory. Each page has metadata at the top of the file, such as the title, language, and menu order.
*   **Theme:** The theme is located in the `theme/` directory and uses Jinja2 templates. The main template is `base.html`, and the page templates are `page.html` and `index.html`.
*   **Styling:** The website uses the Poole and Hyde CSS frameworks, with custom styles in `self.css`.
*   **Deployment:** Deployment is handled automatically by a GitHub Action. When changes are pushed to the `main` branch, the action will build the site and deploy it to the `gh-pages` branch.
*   **Bilingual Support:** The website is bilingual (English and Japanese). The `pelican-i18n-subsites` plugin is used to manage the two language versions. The Japanese content is located in the `content/pages/jp/` directory.
