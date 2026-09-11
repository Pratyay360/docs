---
title: getting started
description: Getting started with Newsy
date: '2026-12-01T00:28:00Z'
draft: false
weight: 0
tags:
  - newsy
  - newsletter
  - modern solution
  - free newsletter
isCJKLanguage: false
headless: false
---
Introducing [Newsy](https://newsy.surge.sh), a newsletter platform powered entirely by GitHub.

Inspired by tools like Utterances, Giscus, Gitalk which reimagined commenting in blogs.

Newsy tries to mimic the same GitHub driven approach but in newsletters.

1. No mailing-list management.
2. No expensive email APIs.
3. No newsletter as a service subscription.
4. No tension of deliver ability.
5. No template builder to wrestle with.

**You just write. GitHub handles the rest.**

Newsy is built around a simple idea, publishing should be democratized for any one and everyone.

For many people, blogging is not a hobby yet because of some roadblocks. One shouldn't need to pay for a Sass platform or

Spend hours managing subscribers and email infrastructure just to send updates to people who want to follow your writing.

Newsletters are a huge part of blogging, so Newsy aims to make them just as approachable.

## Technical Specifications

Written in **Go**, Newsy is lightweight, simple to deploy, and designed to run virtually for free using **server less functions / Lambda-compatible functions**. Deploy it once, configure it, and **just forget about it**. Your content lives where you already work. Your audience gets the newsletter. GitHub provides the infrastructure. **Newsy is newsletter infrastructure for people who just want to write and let someone handle the rest (for free).**

This guide walks you through running Newsy and connecting it to your repositories.

There are two methods:

- **Run locally** for development
- **Deploy to a server less platform** (e.g., Vercel) for production

A video walkthrough of the local setup is available in the [greenfield setup guide](/video.html).

## Self-Host Your Bot

### 1. Clone the Repository

```bash
git clone git@github.com:pratyay360/newsy.git
cd newsy
```

### 2. Set Up the Environment

I have used [mise](https://mise.jdx.dev) to keep the development environment consistent and easy to manage:

```bash
mise deps
```

### 3. Build and Run

Build and run the Go binary:

```bash
go build
./newsy
```

### 4. Configure the GitHub App

1. Open [http://localhost:3000](http://localhost:3000) in your browser.
2. If you encounter issues exposing localhost, use a tunneling service such as [ngrok](https://ngrok.com), [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/), or SSH tunneling via [localhost.run](http://localhost.run/):

```bash
ssh -R 80:localhost:3000 localhost.run
```

3. Open your tunnel URL (e.g., `https://xyz.localhost.run`) in your browser. It should look like this:

![Webhook configuration](https://s6.imgcdn.dev/YgEOzv.png)

*(If you run into issues, refer to the [video guide](/video.html) or try an alternative tunneling provider.)*

4. Choose an **App name** (preferably unique).
5. Paste the tunnel URL into the **Webhook URL** field and submit.
6. A `.env` file containing your app's secrets will be generated in your project root. Keep this file safe.

The generated `.env` should look like this:

```dotenv
APP_ID=""
WEBHOOK_SECRET=""
PRIVATE_KEY=""
DATABASE_URL=""
```

> \[!IMPORTANT\]
> Install the GitHub App on **specific repositories only**, rather than on "All repositories".

Each instance of Newsy can be shared by multiple users.

> \[!NOTE\]
> By default, Newsy only triggers comments and issues upon the creation of new content files (`.html`, `.md`, `.mdx`, etc.), rather than on subsequent edits.

---

## Try Newsy via the Hosted Instance

You can test Newsy directly using the hosted version:

👉 [**https://newsy.surge.sh/**](https://newsy.surge.sh/)

![Newsy Demo](https://img.youtube.com/vi/sfjo6ZVgC9w/hqdefault.jpg)

---

## Deploy on Vercel

![Deploy with Vercel](https://vercel.com/button)

Once deployed, update your GitHub App's URLs from `*.localhost.run` to your production domain: `https://<your-app>.vercel.app`.

See the [Vercel setup guide](vercel-setup-guide.html) for detailed step-by-step instructions.

> \[!WARNING\]
> Only use the deploy button if you already have a configured GitHub App and have its credentials ready. Otherwise, follow the [Greenfield Deployment](#greenfield-deployment-self-host-your-bot) steps first to create one.

---

## Operating Costs &amp; Resource Usage

Vercel and many other cloud providers offer generous free tiers for server less workloads. You can also host Newsy on any server less runtime even platforms limited to JavaScript/Type Script—by compiling the Go binary to Web Assembly with [TinyGo](https://tinygo.org).

Because it is a compiled Go binary:

- **No external runtime dependencies** are required once built.
- **Low memory footprint**, comfortably staying well within server less memory and execution limits.

---

## Subscribe to the Newsletter

Subscribe to see Newsy in action:

👉 [**Subscribe on GitHub**](https://github.com/Pratyay360/blogs_md/issues/1)

---

## Generate Your Subscription Button

Generate an embed able subscription button for your account at [**newsy.surge.sh**](https://newsy.surge.sh/).

You can customize and style the button using [Primer CSS](https://cdnjs.com/libraries/Primer).

> \[!TIP\]
> **Security tip:** After the bot publishes its first newsletter issue, lock the issue conversation to prevent unauthorized comments from triggering unintended behavior.

![Locking the conversation](https://s6.imgcdn.dev/YgXhaN.png)

For further details on permissions, refer to the [required permissions](list-of-all-permission.html) documentation.
