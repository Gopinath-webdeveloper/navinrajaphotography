# Hosting Guide for Navinraja Photography Website

This guide assumes you have your project code pushed to a Git repository (like **GitHub**, **GitLab**, or **Bitbucket**). If you haven't done that yet, please initialize a git repository and push your code first.

---

## Option 1: Vercel (Recommended)
Vercel is the creators of Next.js and provides zero-configuration deployments for Vite projects. It's the easiest and fastest way to host this site.

1.  **Create an Account**: Go to [vercel.com](https://vercel.com/) and sign up (login with GitHub is recommended).
2.  **Import Project**:
    *   Click "Add New..." -> "Project".
    *   Select your `navinrajaphotography` repository from the list.
    *   Click "Import".
3.  **Configure Project**:
    *   **Framework Preset**: It should automatically detect `Vite`. If not, select it manually.
    *   **Root Directory**: `./` (default).
    *   **Build Command**: `npm run build` (default).
    *   **Output Directory**: `dist` (default).
    *   **Environment Variables**: You can add your `.env` variables here (e.g., `VITE_APP_TITLE`).
4.  **Deploy**:
    *   Click "Deploy".
    *   Wait a minute, and your site will be live! You will get a free URL like `navinrajaphotography.vercel.app`.
5.  **Custom Domain** (Optional):
    *   Go to "Settings" -> "Domains".
    *   Add your custom domain (e.g., `navinrajaphotography.com`).
    *   Follow the instructions to update your DNS records (usually adding an A record or CNAME).

---

## Option 2: Netlify
Netlify is another excellent option for static site hosting.

1.  **Create an Account**: Go to [netlify.com](https://www.netlify.com/).
2.  **Add New Site**:
    *   Click "Add new site" -> "Import an existing project".
    *   Connect to your Git provider (GitHub).
3.  **Select Repository**: Choose your project repo.
4.  **Build Settings**:
    *   **Build command**: `npm run build`
    *   **Publish directory**: `dist`
5.  **Deploy**:
    *   Click "Deploy site".
6.  **Custom Domain**:
    *   Go to "Domain settings" to add your custom domain.

---

## Option 3: Traditional Hosting (cPanel / FTP / Shared Hosting)
If you have a host like GoDaddy, Bluehost, or HostGator, use this method.

1.  **Build the Project Locally**:
    Open your terminal in the project folder and run:
    ```bash
    npm run build
    ```
    This will create a `dist` folder in your project directory. This folder contains the optimized, production-ready files (HTML, CSS, JS, Images).

2.  **Prepare for Upload**:
    *   Open the `dist` folder.
    *   *Do not upload the `dist` folder itself*, but **upload the contents** inside it.

3.  **Upload via File Manager or FTP**:
    *   Log in to your hosting Control Panel (cPanel) or use an FTP client like FileZilla.
    *   Navigate to your public facing directory (usually `public_html`).
    *   Upload all files and folders from inside your `dist` folder to `public_html`.
    *   **Important**: Ensure `index.html` is in the root of `public_html`.

4.  **Handling Routing (Important for React)**:
    Since this is a Single Page Application (SPA), navigating directly to a sub-page (like `/about`) might cause a 404 error on traditional servers. You need to redirect all requests to `index.html`.
    
    *   **Apache (Common on shared hosting)**:
        Create a file named `.htaccess` in your `public_html` folder and add this code:
        ```apache
        <IfModule mod_rewrite.c>
          RewriteEngine On
          RewriteBase /
          RewriteRule ^index\.html$ - [L]
          RewriteCond %{REQUEST_FILENAME} !-f
          RewriteCond %{REQUEST_FILENAME} !-d
          RewriteRule . /index.html [L]
        </IfModule>
        ```

---

## Option 4: GitHub Pages
Good for free hosting, but requires a bit of configuration for client-side routing.

1.  **Update `vite.config.js`**:
    Set the base path to your repository name (if not using a custom domain).
    ```javascript
    export default defineConfig({
      base: '/repo-name/', // Replace 'repo-name' with your github repository name
      // ...
    })
    ```
2.  **Deploy Script**:
    It is easier to use a package like `gh-pages` to deploy the `dist` folder automatically.
