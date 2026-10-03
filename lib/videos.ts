'use client'

import { useEffect, useState } from 'react'
import { getVideosAction, saveVideosAction } from '@/app/actions'
import { type Video, starterVideos } from '@/lib/data'

export { type Video, starterVideos }

export async function getVideos(): Promise<Video[]> {
  return await getVideosAction()
}

export async function saveVideos(videos: Video[]) {
  try {
    await saveVideosAction(videos)
    window.dispatchEvent(new Event('streamvibe-videos-updated'))
  } catch (error) {
    console.error('Failed to save videos:', error)
    alert('Failed to save videos to disk.')
    throw error
  }
}

export function useVideos() {
  const [videos, setVideos] = useState<Video[]>(starterVideos)
  useEffect(() => {
    const fetchVideos = async () => {
      const data = await getVideosAction()
      setVideos(data)
    }
    fetchVideos()
    window.addEventListener('streamvibe-videos-updated', fetchVideos)
    return () => {
      window.removeEventListener('streamvibe-videos-updated', fetchVideos)
    }
  }, [])
  return videos
}
