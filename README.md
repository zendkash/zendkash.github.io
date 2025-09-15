# Zendai Kashino's Personal Website

This repository contains the source code for Zendai Kashino's personal academic and professional website, available at [https://kashino.info/](https://kashino.info/).

## About

This website serves as a portfolio for Zendai Kashino, an AI/ML Engineer. It includes information about his professional experience, education, publications, and other projects. The site is bilingual, with content available in both English and Japanese.

The website is built with [Pelican](https://getpelican.com/) and uses a custom theme.

## Content

The website includes the following sections:

- **Home**: An overview of Zendai Kashino's background and research interests.
- **Experience**: A summary of his professional experience.
- **Education**: Details about his academic background.
- **Publications**: A list of his published research.
- **Other**: Information about other projects and interests.
- **Contact**: How to get in touch.

## Development

To run this website locally, you will need to have Python and `uv` installed.

1.  Clone the repository:
    ```bash
    git clone https://github.com/zendkash/zendkash.github.io.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd zendkash.github.io
    ```
3.  Create a virtual environment:
    ```bash
    uv venv
    ```
4.  Activate the virtual environment:
    ```bash
    source .venv/bin/activate
    ```
5.  Install the dependencies:
    ```bash
    uv pip install -r requirements.txt
    ```
6.  Start the Pelican development server:
    ```bash
    pelican -r
    ```

The website will be available at `http://localhost:8000`.

## Deployment

Deployment is handled automatically by a GitHub Action. When changes are pushed to the `main` branch, the action will build the site and deploy it to the `gh-pages` branch.

## Experimental Apps

This repository contains a directory called `experimental-apps` for hosting experimental web applications. These are located in the `theme/static` directory and are copied to the output directory during the build process.

## License

The content of this website is licensed under the [MIT license](LICENSE.md).