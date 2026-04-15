const PRIVACY_POLICY_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Privacy Policy – PreviewApp</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
      color: #1a1a1a;
      background: #fff;
      padding: 2rem 1rem;
      max-width: 720px;
      margin: 0 auto;
      line-height: 1.7;
    }
    h1 { font-size: 1.75rem; font-weight: 700; margin-bottom: 0.25rem; }
    .updated { color: #666; font-size: 0.875rem; margin-bottom: 2rem; }
    h2 { font-size: 1.15rem; font-weight: 600; margin-top: 2rem; margin-bottom: 0.5rem; }
    p, li { font-size: 1rem; margin-bottom: 0.75rem; }
    ul { padding-left: 1.5rem; }
    a { color: #0066cc; }
    footer { margin-top: 3rem; padding-top: 1rem; border-top: 1px solid #eee; color: #666; font-size: 0.8rem; }
  </style>
</head>
<body>
  <h1>Privacy Policy</h1>
  <p class="updated">Last updated: April 14, 2026</p>

  <p>PreviewApp ("we", "us", or "our") is an iOS application that functions as a private file
  browser. This Privacy Policy explains what information is collected when you use the App
  and how it is used.</p>

  <h2>1. Information We Collect</h2>
  <p>We do not directly collect personal information. However, our third-party advertising
  partner, Google AdMob, may collect the following data to serve advertisements:</p>
  <ul>
    <li><strong>Device Identifiers:</strong> IDFA (Identifier for Advertisers), if you grant
        permission via the App Tracking Transparency (ATT) prompt.</li>
    <li><strong>Usage Data:</strong> Ad impressions and interactions (clicks, dismissals).</li>
    <li><strong>Diagnostic Data:</strong> Crash reports and performance metrics used by AdMob
        to improve ad delivery reliability.</li>
  </ul>
  <p>If you deny the ATT prompt, your IDFA is not accessed and only non-personalized ads
  are shown. The App functions fully regardless of your choice.</p>

  <h2>2. How Information Is Used</h2>
  <p>Data collected by Google AdMob is used solely to:</p>
  <ul>
    <li>Display personalized or non-personalized in-app advertisements.</li>
    <li>Measure ad performance and detect invalid traffic.</li>
  </ul>
  <p>We do not sell your personal information and do not use advertising data for any purpose
  beyond serving ads within the App.</p>

  <h2>3. Third-Party Advertising — Google AdMob</h2>
  <p>The App uses Google AdMob (Google LLC) to display interstitial advertisements at natural
  pause points. AdMob's practices are governed by
  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google's Privacy Policy</a>.
  You can opt out of personalized ads from Google at
  <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener">google.com/settings/ads</a>.</p>

  <h2>4. App Tracking Transparency (iOS)</h2>
  <p>On iOS 14.5+, the App shows Apple's App Tracking Transparency dialog before any
  advertising identifier is accessed. You can review or change your choice at any time in
  <strong>Settings → Privacy &amp; Security → Tracking</strong>.</p>

  <h2>5. GDPR — European Economic Area, UK &amp; Switzerland</h2>
  <p>If you are in the EEA, UK, or Switzerland, Google AdMob will display a consent form
  (via the Google User Messaging Platform) before serving personalized ads. You may
  withdraw or adjust consent at any time through the in-app privacy settings.</p>

  <h2>6. US State Privacy Rights (CCPA / CPRA)</h2>
  <p>California and other US state residents may opt out of the sale or sharing of personal
  information for advertising. To do so, deny the ATT prompt or visit
  <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener">google.com/settings/ads</a>.</p>

  <h2>7. Data Retention</h2>
  <p>We do not store personal data on our own servers. Data held by Google AdMob is subject
  to <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google's retention policies</a>.</p>

  <h2>8. Children's Privacy</h2>
  <p>The App is not directed at children under 13. We do not knowingly collect personal
  information from children. Contact us if you believe a child has provided personal
  information and we will take steps to delete it.</p>

  <h2>9. Changes to This Policy</h2>
  <p>We may update this Privacy Policy. The "Last updated" date at the top reflects the most
  recent revision. Continued use of the App after changes constitutes acceptance.</p>

  <h2>10. Contact</h2>
  <p>Questions? Email us at
  <a href="mailto:hello@tiny-pink.com">hello@tiny-pink.com</a>.</p>

  <footer>© 2026 tiny-pink.com · PreviewApp</footer>
</body>
</html>`;

export default {
  async fetch(_request: Request): Promise<Response> {
    return new Response(PRIVACY_POLICY_HTML, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=86400",
        "X-Content-Type-Options": "nosniff",
      },
    });
  },
} satisfies ExportedHandler;
