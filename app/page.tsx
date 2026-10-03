'use client'

import { useRef, useState } from 'react'
import { Bell, ChevronLeft, ChevronRight, Crown, Menu, Play, Search } from 'lucide-react'
import { useVideos, type Video } from '@/lib/videos'

function Logo() {
  return <div className="flex items-center gap-2.5"><div className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-red-500 to-red-700 shadow-lg shadow-red-500/20"><Play className="ml-0.5 size-4 fill-white text-white" /></div><span className="text-lg font-semibold tracking-tight">Stream<span className="text-red-400">Vibe</span></span></div>
}

function VideoCard({ video }: { video: Video }) {
  const [hovered, setHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  function handleMouseEnter() {
    setHovered(true)
    videoRef.current?.play().catch(() => {/* video not ready or unsupported */})
  }

  function handleMouseLeave() {
    setHovered(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <a href="/subscribe" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="group block w-full text-left">
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-xl transition duration-300 group-hover:-translate-y-1 group-hover:border-red-400/40">
        <img src={video.thumbnail} alt={video.title} className={`absolute inset-0 size-full object-cover transition duration-700 ${hovered && video.preview ? 'scale-105 opacity-0' : 'opacity-100'}`} />
        {video.preview && <video ref={videoRef} src={video.preview} muted loop playsInline aria-label={`${video.title} preview`} className={`absolute inset-0 size-full object-cover transition duration-700 ${hovered ? 'scale-105 opacity-100' : 'opacity-0'}`} />}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        {/* Crown badge */}
        <span className="absolute right-3 top-3 flex items-center gap-1 rounded-md bg-amber-400/90 px-2 py-1 text-[10px] font-bold text-amber-950 shadow backdrop-blur">
          <Crown className="size-3" />
          PREMIUM
        </span>
        <span className="absolute bottom-3 right-3 rounded-md bg-black/75 px-2 py-1 font-mono text-[11px] text-white">{video.duration}</span>
        {hovered && video.preview && <span className="absolute left-3 top-3 rounded-md border border-white/10 bg-black/45 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">Preview</span>}
      </div>
      <div className="mt-3 min-w-0">
        <h2 className="truncate text-sm font-semibold text-white/95">{video.title}</h2>
        <p className="mt-1 text-xs text-slate-400">{video.views} views <span className="mx-1 text-slate-600">·</span> {video.uploaded}</p>
      </div>
    </a>
  )
}

export default function HomePage() {
  const videos = useVideos()
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const pageSize = 6
  const filtered = videos.filter((video) => `${video.title} ${video.creator}`.toLowerCase().includes(query.toLowerCase()))
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const visibleVideos = filtered.slice((page - 1) * pageSize, page * pageSize)
  function updateQuery(value: string) { setQuery(value); setPage(1) }

  return <main className="min-h-screen bg-[#0d0b18] text-white"><header className="sticky top-0 z-40 border-b border-white/[.07] bg-[#0d0b18]/90 backdrop-blur-xl"><div className="mx-auto flex h-18 max-w-[1440px] items-center gap-5 px-5 sm:px-8"><Logo /><div className="ml-auto flex items-center gap-3"><div className="hidden h-10 w-56 items-center gap-2 rounded-xl border border-white/10 bg-white/[.04] px-3 sm:flex"><Search className="size-4 text-slate-500" /><input value={query} onChange={(event) => updateQuery(event.target.value)} placeholder="Search videos..." aria-label="Search videos" className="w-full bg-transparent text-xs text-white outline-none placeholder:text-slate-500" /></div><button className="grid size-10 place-items-center rounded-xl text-slate-400 hover:bg-white/10 hover:text-white" aria-label="Notifications"><Bell className="size-4" /></button><button className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-red-400 to-red-700 text-xs font-semibold" aria-label="Profile">AR</button><button className="grid size-10 place-items-center rounded-xl text-slate-400 hover:bg-white/10 md:hidden" aria-label="Menu"><Menu className="size-5" /></button></div></div></header>
    <section id="videos" className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16"><div className="mb-8 flex items-end justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[.25em] text-red-300">StreamVibe library</p><h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Videos</h1><p className="mt-2 text-sm text-slate-400">Browse the latest uploads and previews.</p></div><p className="hidden text-xs text-slate-500 sm:block">{filtered.length} videos</p></div>{visibleVideos.length ? <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">{visibleVideos.map((video) => <VideoCard key={video.id} video={video} />)}</div> : <div className="rounded-2xl border border-dashed border-white/10 py-20 text-center text-sm text-slate-400">No videos found.</div>}<nav className="mt-12 flex items-center justify-center gap-2" aria-label="Video pagination"><button type="button" onClick={() => setPage((current) => Math.max(1, current - 1))} disabled={page === 1} aria-label="Previous page" className="grid size-10 place-items-center rounded-xl border border-white/10 text-slate-300 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"><ChevronLeft className="size-4" /></button>{Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => <button type="button" key={number} onClick={() => setPage(number)} aria-label={`Page ${number}`} aria-current={page === number ? 'page' : undefined} className={`grid size-10 place-items-center rounded-xl text-sm transition ${page === number ? 'bg-red-500 font-semibold text-white' : 'border border-white/10 text-slate-400 hover:bg-white/10'}`}>{number}</button>)}<button type="button" onClick={() => setPage((current) => Math.min(totalPages, current + 1))} disabled={page === totalPages} aria-label="Next page" className="grid size-10 place-items-center rounded-xl border border-white/10 text-slate-300 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"><ChevronRight className="size-4" /></button></nav></section>
  </main>
}
