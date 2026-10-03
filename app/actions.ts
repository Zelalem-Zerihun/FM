'use server'

import { promises as fs } from 'fs'
import path from 'path'
import { type Video, starterVideos } from '@/lib/data'

const dataFile = path.join(process.cwd(), 'videos.json')

export async function getVideosAction(): Promise<Video[]> {
  try {
    const data = await fs.readFile(dataFile, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    return starterVideos
  }
}

export async function saveVideosAction(videos: Video[]) {
  try {
    await fs.writeFile(dataFile, JSON.stringify(videos, null, 2))
    return { success: true }
  } catch (error) {
    console.error('Error saving videos to disk:', error)
    throw new Error('Failed to save videos to disk')
  }
}
