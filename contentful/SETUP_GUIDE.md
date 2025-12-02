# Contentful Setup Guide

## Step 1: Install Dependencies

Run the following command to install required packages:

```bash
npm install contentful @mux/mux-player-react @vimeo/player
```

**Note:** If you get a PowerShell execution policy error, run this first:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

---

## Step 2: Create Contentful Space

1. Go to [Contentful](https://www.contentful.com/) and sign up/log in
2. Create a new space (e.g., "SpeakHindi")
3. Note your **Space ID** from the space settings

---

## Step 3: Get API Keys

1. Navigate to **Settings** → **API keys**
2. Click **Add API key**
3. Note down:
   - **Space ID**
   - **Content Delivery API - access token**
   - **Content Preview API - access token** (optional)

---

## Step 4: Import Content Models

1. Navigate to **Content model** in your Contentful space
2. Use the JSON import feature or manually create each content type from `/contentful/content-models.json`
3. Create these models in order:
   - Flashcard
   - Resource
   - Quiz Question
   - Lesson Video
   - Lesson Notes
   - Flashcard Set
   - Quiz
   - Lesson (main model - references others)

---

## Step 5: Set Up Environment Variables

Create a `.env.local` file in the project root:

```bash
# Contentful
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_ACCESS_TOKEN=your_delivery_api_token_here

# Video Provider (choose one: mux or vimeo)
NEXT_PUBLIC_VIDEO_PROVIDER=mux

# Feature Flag (set to true after testing)
USE_CONTENTFUL=false
```

---

## Step 6: Choose Video Provider

### Option A: Mux (Recommended)

1. Go to [Mux Dashboard](https://dashboard.mux.com/)
2. Sign up for free account
3. Upload a test video
4. Copy the **Playback ID**
5. Add to `.env.local`:
   ```bash
   MUX_TOKEN_ID=your_token_id
   MUX_TOKEN_SECRET=your_token_secret
   ```

### Option B: Vimeo

1. Go to [Vimeo Developer](https://developer.vimeo.com/)
2. Create an app and get access token
3. Upload a test video
4. Get the video ID (from the URL)
5. Add to `.env.local`:
   ```bash
   VIMEO_ACCESS_TOKEN=your_access_token
   ```

---

## Step 7: Create Test Content

In Contentful, create a test lesson:

1. **Create Lesson Video:**
   - Title: "Test Video"
   - Video Provider: `mux` or `vimeo`
   - Video ID: (your video ID)
   - Playback ID: (for Mux only)

2. **Create Lesson:**
   - Title: "Test Lesson: Hindi Basics"
   - Slug: "test-lesson-hindi-basics"
   - Lesson Number: 99
   - Description: "A test lesson"
   - Access Level: `free`
   - Video Content: (select the video you created)

3. **Publish** both entries

---

## Step 8: Test Integration

1. Set `USE_CONTENTFUL=true` in `.env.local`
2. Run `npm run dev`
3. Navigate to `/courses/test-lesson-hindi-basics`
4. Verify the video loads correctly

---

## Switching Video Providers

To switch between Mux and Vimeo, simply change the env variable:

```bash
# Use Mux
NEXT_PUBLIC_VIDEO_PROVIDER=mux

# Use Vimeo
NEXT_PUBLIC_VIDEO_PROVIDER=vimeo
```

No code changes needed! The `VideoPlayer` component automatically switches.

---

## Next Steps

Once everything works:
1. Migrate existing lessons from `lessons-config.ts` to Contentful
2. Set `USE_CONTENTFUL=true` permanently
3. Deploy and enjoy automated content management! 🚀
