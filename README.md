# SysOps Notes — Deploy to GitHub Pages

## 1. Fix the repo (one-time)
I started a git repo in this folder, but a stale lock file got stuck (a
sandbox limitation on my end, not your machine). Before doing anything else,
open Terminal on your Mac and run:

```
cd ~/Documents/claude-work/website
rm -rf .git
rm -f delete_test.txt
```

That clears it (also removes a stray empty test file left over). You'll set up git fresh in the next step.

## 2. Easiest path: GitHub Desktop (no command line)
1. Install GitHub Desktop: https://desktop.github.com — sign in with (or create) a GitHub account.
2. File → Add Local Repository → choose this `website` folder.
3. It will offer to "create a repository" here (since there's no `.git` anymore) — click that.
4. Name it e.g. `sysops-notes`, keep it Public, click **Publish repository**.

## 3. Turn on Pages
1. On github.com, open your new repo → **Settings → Pages**.
2. Under "Build and deployment", Source = **Deploy from a branch**.
3. Branch = `main`, folder = `/ (root)` → **Save**.
4. Your site goes live in ~1 minute at:
   `https://<your-github-username>.github.io/sysops-notes/`

## 4. Custom domain (recommended before applying for AdSense)
1. Buy a domain (Namecheap, Cloudflare, Google Domains) — e.g. `sysops.notes` or similar, ~$10–15/yr.
2. In the repo, add a file named `CNAME` (no extension) containing just your domain, e.g.:
   ```
   sysopsnotes.com
   ```
3. At your domain registrar, add these DNS records:
   - `A` records for the root domain pointing to GitHub Pages IPs:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` record for `www` pointing to `<your-github-username>.github.io`
4. Back in repo Settings → Pages, enter your custom domain and enable **Enforce HTTPS** once it's available.

## 5. Publishing new posts
Duplicate `posts/fortigate-ipsec-vpn-troubleshooting.html` as a template, edit the content,
add a link to it from `index.html`, then in GitHub Desktop: write a commit summary → **Commit to main** → **Push origin**. Live in ~1 minute.

## 6. Google AdSense
Apply once you have ~15–20 solid posts and some organic traffic (search.google.com/search-console
to submit your sitemap helps traffic show up faster). Apply at https://adsense.google.com with your
custom domain, not the `github.io` subdomain.
