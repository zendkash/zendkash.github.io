# Deploying your Pelican Site to GitHub Pages

Congratulations on migrating your site to Pelican! This guide will walk you through setting up automated deployments to GitHub Pages using GitHub Actions. This is a modern and efficient way to manage your site, as it will automatically build and deploy your site whenever you push changes to your `main` branch.

## 1. Create the GitHub Actions Workflow

First, you need to create a workflow file. This is a YAML file that tells GitHub Actions what to do.

**Create a file named `deploy.yml` in the `.github/workflows/` directory of your repository.**

If the `.github/workflows` directory doesn't exist, create it.

**Copy and paste the following content into the `deploy.yml` file:**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main  # Or whichever branch you use for development

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.11' # Or the version you prefer

      - name: Set up uv
        run: pip install uv

      - name: Install dependencies
        run: uv pip install -r requirements.txt

      - name: Build the site
        run: pelican -s publishconf.py

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./output
```

**Note:** This workflow assumes you have a `requirements.txt` file. I will create one for you in the next step.

## 2. Create a `requirements.txt` File

The workflow needs a `requirements.txt` file to know which Python packages to install. I will create this file for you now. It will contain the packages we installed earlier.

## 3. Configure GitHub Pages

Finally, you need to make sure your repository's GitHub Pages settings are configured correctly.

1.  Go to your repository on GitHub.
2.  Click on the "Settings" tab.
3.  In the left sidebar, click on "Pages".
4.  Under "Build and deployment", in the "Source" section, select "Deploy from a branch".
5.  In the "Branch" section, select the `gh-pages` branch and the `/ (root)` folder.
6.  Click "Save".

**That's it!** Now, whenever you push a change to your `main` branch, GitHub Actions will automatically build your Pelican site and deploy it to your GitHub Pages site. You can monitor the progress of the deployment in the "Actions" tab of your repository.
