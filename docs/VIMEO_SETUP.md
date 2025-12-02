# How to Link Vimeo Videos

## Quick Setup

### Step 1: Upload Video to Vimeo

1. Go to [Vimeo.com](https://vimeo.com/) and log in (or create free account)
2. Click **"New video"** → **"Upload"**
3. Upload your Hindi lesson video
4. Wait for processing to complete

---

### Step 2: Get Video ID

After uploading, you'll see a URL like:
```
https://vimeo.com/76979871
```

The **Video ID** is the number at the end: `76979871`

---

### Step 3: Configure Lesson

In `lib/lessons-config.ts`, add or update a lesson:

```typescript
{
    id: 1,
    slug: 'lesson-1-hindi-basics',
    title: 'Lesson 1: Hindi Basics',
    description: 'Learn basic Hindi greetings',
    accessLevel: 'free',
    components: ['video', 'notes', 'quiz'],
    videoProvider: 'vimeo',        // Set to 'vimeo'
    videoId: '76979871',           // Your Vimeo video ID
    duration: '15 min',
}
```

---

### Step 4: Set Environment Variable

In `.env.local`, ensure:
```bash
NEXT_PUBLIC_VIDEO_PROVIDER=vimeo
```

---

### Step 5: Test

1. Run `npm run dev`
2. Navigate to `/courses/test-vimeo-lesson`
3. Verify:
   - ✅ Video loads and plays
   - ✅ Speed controls work (0.5x, 1x, 1.5x, 2x)
   - ✅ Orange accent color appears
   - ✅ Player is responsive on mobile

---

## Video Settings (Optional)

For better quality and control:

1. Go to your video on Vimeo
2. Click **"Settings"**
3. **Privacy:** Set to "Public" or "Unlisted"
4. **Embeds:** Enable embedding
5. **Player Color:** Set to `#f97316` (orange to match your brand)

---

## Test Video ID

The test lesson currently uses Vimeo's demo video ID: `76979871`

**Replace this** with your own lesson video ID!

---

## Troubleshooting

### Video doesn't load
- Check if video is public/unlisted (not private)
- Verify embedding is enabled in Vimeo settings
- Check browser console for errors

### Wrong player appears
- Verify `NEXT_PUBLIC_VIDEO_PROVIDER=vimeo` in `.env.local`
- Restart dev server after changing env vars

### No speed controls
- This is built into Vimeo player automatically
- No additional setup needed

---

## Switching to Mux Later

To switch to Mux (better for production):

1. Upload video to [Mux](https://mux.com/)
2. Get the **Playback ID**
3. Update lesson:
   ```typescript
   videoProvider: 'mux',
   playbackId: 'your-mux-playback-id',
   ```
4. Change env: `NEXT_PUBLIC_VIDEO_PROVIDER=mux`

**No code changes needed!** The VideoPlayer automatically switches.
