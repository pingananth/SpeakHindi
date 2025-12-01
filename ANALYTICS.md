# Analytics Configuration

Create a `.env.local` file in the root directory with your Google Analytics ID:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual Google Analytics 4 measurement ID.

## Setting up Google Analytics

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property for SpeakHindi
3. Set up a GA4 data stream for your website
4. Copy the Measurement ID (starts with G-)
5. Add it to your `.env.local` file

## Events Tracking

The following events are automatically tracked:
- Page views
- CTA button clicks (via custom event tracking in components)
- Navigation clicks
- Form submissions
