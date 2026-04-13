# 📊 next-analytics-tracker

> Lightweight Google Analytics 4 (GA4) tracking for **Next.js App Router**
> Automatically tracks **page views + button clicks** with zero boilerplate.

---

## 👤 Author

**Kuldeep Kumar**
Full Stack Developer (React, Next.js, Angular)
📍 Punjab, India

- GitHub: [https://github.com/amKuldeepKumar](https://github.com/amKuldeepKumar)
- Email: kuldeep@insonix.com , kuldeep.navv@gmail.com
- Company: Insonix (https://www.insonix.com)

---

## 🚀 Overview

`next-analytics-tracker` is a plug-and-play analytics solution designed specifically for **Next.js App Router** applications.

It removes the complexity of:

- Manual page tracking
- Repetitive click event tracking
- Handling client-side route changes

---

## ✨ Features

- 📄 Automatic **Page View Tracking**
- 🖱️ Automatic **Click Tracking**
- ⚡ Built for **Next.js App Router**
- 🎯 Customizable click selectors
- 🧠 Lightweight & optimized
- 🔌 No external dependencies

---

## 📦 Installation

```bash
npm install next-analytics-tracker
```

or

```bash
yarn add next-analytics-tracker
```

or

```bash
pnpm add next-analytics-tracker
```

---

## ⚙️ Prerequisites

Before using this package, make sure:

- ✅ You are using **Next.js 13+ (App Router)**
- ✅ You have a **Google Analytics 4 (GA4) Measurement ID**
- ✅ `gtag.js` is added to your project

---

## 🛠️ Setup Guide

### 1️⃣ Add Google Analytics (GA4)

Add this inside your root layout (`layout.tsx`):

```tsx
import Script from 'next/script';

<Script
  src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'YOUR_GA_ID');
  `}
</Script>
```

---

### 2️⃣ Add Analytics Tracker

```tsx
import AnalyticsTracker from "next-analytics-tracker";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AnalyticsTracker
          gaId="G-XXXXXXXXXX"
          clickableSelectors={[
            "button",
            "a",
            '[role="button"]',
            "[data-analytics]",
            'input[type="submit"]',
            ".track-click",
            "[data-track]",
          ]}
        />
        {children}
      </body>
    </html>
  );
}
```

---

## 🎯 Usage

### Track Button Clicks Automatically

By default, it tracks:

- `<button>`
- `<a>`
- `[role="button"]`

You can extend tracking:

```tsx
<AnalyticsTracker
  clickableSelectors={["button", ".cta-button", "[data-track]"]}
/>
```

---

### Custom Tracking Example

```html
<button data-analytics="signup">Sign Up</button>
```

---

## 📊 Events Sent to GA4

### Page View

```json
{
  "event": "page_view",
  "page_path": "/home"
}
```

---

### Click Event

```json
{
  "event": "click",
  "element_text": "Submit",
  "element_type": "button"
}
```

---

## 🧠 How It Works

### 📄 Page Tracking

- Listens to route changes in Next.js App Router
- Sends `page_view` event automatically

### 🖱️ Click Tracking

- Uses **event delegation**
- Captures clicks using provided selectors
- Sends structured event data to GA4

---

## 💡 Why This Package?

While working on multiple Next.js projects, I found that:

- GA4 integration required repetitive setup
- Page tracking didn’t work correctly with App Router
- Click tracking had to be manually added everywhere

So I built this package to:

- ✅ Simplify analytics setup
- ✅ Reduce boilerplate
- ✅ Provide plug-and-play tracking

---

## 🧪 Use Cases

- SaaS dashboards
- Landing pages
- Marketing funnels
- Admin panels
- Portfolio websites

---

## ⚠️ Best Practices

- Use specific selectors:
  - `.cta-button`
  - `[data-analytics="signup"]`

- Avoid tracking too many generic elements
- Verify events in GA4 **Realtime Dashboard**

---

## 🐛 Troubleshooting

### Events not showing?

- Check your GA4 ID
- Ensure `gtag.js` is loaded
- Check browser console
- Verify in GA4 → Realtime tab

---

## 🔗 Links

- 💻 GitHub Repo: [https://github.com/amKuldeepKumar/next-analytics-tracker](https://github.com/amKuldeepKumar/next-analytics-tracker)

---

## 📄 License

MIT License

---

## 🙌 Support

If you find this helpful:

- ⭐ Star the repo
- 🐛 Report issues
- 💡 Suggest features

---
