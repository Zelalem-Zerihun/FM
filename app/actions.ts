'use server'

import { put, list, del } from '@vercel/blob'
import { type Video, starterVideos } from '@/lib/data'

const METADATA_KEY = 'streamvibe-videos.json'

export async function getVideosAction(): Promise<Video[]> {
  try {
    const { blobs } = await list({ prefix: METADATA_KEY })
    if (blobs.length === 0) return starterVideos
    const res = await fetch(blobs[0].url, { cache: 'no-store' })
    return res.json()
  } catch {
    return starterVideos
  }
}

export async function saveVideosAction(videos: Video[]) {
  // Remove old metadata blob first
  const { blobs } = await list({ prefix: METADATA_KEY })
  if (blobs.length > 0) {
    await del(blobs.map((b) => b.url))
  }
  // Write updated metadata
  await put(METADATA_KEY, JSON.stringify(videos), {
    access: 'public',
    contentType: 'application/json',
    addRandomSuffix: false,
  })
}

export async function uploadFileAction(file: File, filename: string): Promise<string> {
  const blob = await put(`streamvibe-media/${filename}`, file, {
    access: 'public',
    addRandomSuffix: true,
  })
  return blob.url
}
