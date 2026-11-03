# Local Audio Assets Directory

You can place your own local `.mp3` files in this directory to serve them directly from your local project:

- `tape-01.mp3`
- `tape-02.mp3`
- `tape-03.mp3`

To switch from the default high-availability CDN streams to local audio files, update the `url` property in `src/components/LofiPlayer.tsx`:

```ts
{
  id: "tape-01",
  title: "Tape 01: Midnight Coding Session",
  subtitle: "Faded Keys & Terminal Cursor",
  url: "/audio/tape-01.mp3",
}
```
