# Pixelalty Complete Site — Setup Checklist

This package replaces the current site.

## Already configured
- Stripe Payment Link: https://buy.stripe.com/eVqeVd6Mj2rodhg7mn0Ny00
- Price: $499
- Instagram: https://instagram.com/pixelalty
- SEO title and description
- Terms of Service
- Privacy Policy
- Refund Policy
- robots.txt
- sitemap.xml
- Stripe success page
- Intake page
- Mobile-responsive design
- Demo video slot

## 1. Create the intake form (free)
Use Tally: https://tally.so/

Tally currently offers free forms, unlimited submissions within fair-use rules, and file uploads. On the free plan, each individual file is limited to 10 MB.

Create a new form using Tally AI and paste the contents of `TALLY_FORM_PROMPT.txt`.

Publish it.

Copy the public URL, for example:
https://tally.so/r/ABC123

## 2. Put the Tally URL into config.js
Open `config.js`.

Replace:
REPLACE_WITH_YOUR_TALLY_FORM_URL

with your actual Tally form URL.

Example:
intakeFormUrl: "https://tally.so/r/ABC123",

Do NOT change your Stripe URL unless you create a new payment link.

## 3. Configure Stripe after-payment redirect
Edit your Stripe Payment Link.

Set After payment -> Redirect customers to your website:
https://pixelalty.com/order-complete.html

Enable:
- Collect email
- Collect customer name
- Collect business name
- Collect phone
- Property address custom field
- Listing URL custom field
- Require acceptance of Terms of Service

Use this Terms URL if Stripe asks:
https://pixelalty.com/terms.html

## 4. Replace the GitHub site
In your `pixelalty-site` GitHub repository, upload/replace all files from this package.

Commit the changes.

GitHub Pages will publish them automatically.

## 5. Add the demo video later
Export the final demo as an MP4 named exactly:
demo.mp4

Place it inside:
assets/demo.mp4

Commit the file.

The homepage detects it automatically and replaces the demo placeholder.

Keep the file reasonably compressed for web delivery.

## 6. Google Search Console
After the new site is live:
- Inspect https://pixelalty.com/
- Request indexing
- Submit this sitemap:
  https://pixelalty.com/sitemap.xml

Do not repeatedly request indexing every few minutes.

## 7. Before taking a real customer
Test the whole flow yourself:
Homepage -> Stripe checkout -> successful payment redirect -> order-complete page -> intake form -> Tally submission.

Do not enter a real $499 charge just to test unless you intend to actually process/refund it. Verify every link and page manually first.

## Important
The legal pages are practical starter language, not individualized legal advice. As Pixelalty grows, have a qualified attorney review your customer agreement, refund policy, privacy practices, intellectual-property terms, and any state-specific requirements.
