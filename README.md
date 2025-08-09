# Zendai Kashino's Personal Website

This repository contains the source code for Zendai Kashino's personal academic and professional website, available at [https://zendkash.github.io/](https://zendkash.github.io/).

## About

This website serves as a portfolio for Zendai Kashino, an AI/ML Engineer. It includes information about his professional experience, education, publications, and other projects. The site is bilingual, with content available in both English and Japanese.

The website is built with [Jekyll](https://jekyllrb.com/) and uses a modified version of the [Hyde](https://github.com/poole/hyde) theme.

## Content

The website includes the following sections:

- **Home**: An overview of Zendai Kashino's background and research interests.
- **Experience**: A summary of his professional experience.
- **Education**: Details about his academic background.
- **Publications**: A list of his published research.
- **Other**: Information about other projects and interests.
- **Contact**: How to get in touch.

## Development

To run this website locally, you will need to have [Jekyll](https://jekyllrb.com/docs/installation/) installed.

1.  Clone the repository:
    ```bash
    git clone https://github.com/zendkash/zendkash.github.io.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd zendkash.github.io
    ```
3.  Install the dependencies:
    ```bash
    bundle install
    ```
4.  Start the Jekyll server:
    ```bash
    bundle exec jekyll serve
    ```

The website will be available at `http://localhost:4000`.

## Experimental Apps

This repository contains a directory called `experimental-apps` for hosting experimental web applications. To add a new app, follow these steps:

1.  Create a new subdirectory for your app inside the `experimental-apps` directory.
2.  Add your app's files (e.g., `index.html`, `style.css`, `script.js`) to the new subdirectory.
3.  Add a link to your app's `index.html` file in the `experimental-apps/index.html` file.

## License

The content of this website is licensed under the [MIT license](LICENSE.md).