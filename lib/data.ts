export type Video = {
  id: string
  title: string
  creator: string
  views: string
  uploaded: string
  duration: string
  thumbnail: string
  preview: string
}

export const starterVideos: Video[] = [
  { id: '1', title: 'A Quiet Place to Think', creator: 'Northbound', views: '1.2M', uploaded: '2 days ago', duration: '12:45', thumbnail: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85', preview: 'https://cdn.coverr.co/videos/coverr-a-woman-walking-in-a-forest-1570/1080p.mp4' },
  { id: '2', title: 'The Future of Creative Work', creator: 'Signal Studio', views: '843K', uploaded: '5 days ago', duration: '28:16', thumbnail: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85', preview: 'https://cdn.coverr.co/videos/coverr-working-on-a-laptop-1573/1080p.mp4' },
  { id: '3', title: 'Tokyo After Dark', creator: 'Mina Chen', views: '2.8M', uploaded: '1 week ago', duration: '18:02', thumbnail: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=85', preview: 'https://cdn.coverr.co/videos/coverr-tokyo-street-at-night-1572/1080p.mp4' },
  { id: '4', title: 'Sunday Morning Rituals', creator: 'Homebody', views: '562K', uploaded: '1 week ago', duration: '09:34', thumbnail: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85', preview: 'https://cdn.coverr.co/videos/coverr-pouring-coffee-1571/1080p.mp4' },
  { id: '5', title: 'Into the Blue', creator: 'Wild Current', views: '924K', uploaded: '2 weeks ago', duration: '22:41', thumbnail: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=85', preview: 'https://cdn.coverr.co/videos/coverr-waves-in-the-ocean-1574/1080p.mp4' },
  { id: '6', title: 'Designing for Feeling', creator: 'Form / Function', views: '318K', uploaded: '3 weeks ago', duration: '14:08', thumbnail: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=85', preview: 'https://cdn.coverr.co/videos/coverr-a-designer-working-1576/1080p.mp4' },
]
