# Deployment

This folder is the active source for The Honest Potter website.

## Fasthosts

The live site is hosted on Fasthosts. Website files are uploaded to the live web root over SSH/SFTP when the connection is available.

Private connection details should live in:

```text
deploy/fasthosts.env
```

Do not commit real hosting usernames, passwords, SSH keys, or private server details.

## Contact Form Update

The current ready-to-upload contact form update consists of:

- `contact.php`
- `pages/contact.html`
- `css/contact.css`

When `deploy/fasthosts.env` has been created from `deploy/fasthosts.env.example`, upload those files with:

```sh
./scripts/deploy-contact-form.sh
```

If the SSH/SFTP connection is unavailable, upload those three files manually through the Fasthosts file manager or SFTP client.
