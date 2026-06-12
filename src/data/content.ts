export interface AppData {
  id: string
  name: string
  desc: string
  url: string
}

export interface NoteData {
  id: string
  title: string
  date: string
  read: string
  tags: string[]
  blurb: string
}

export const FEATURED_APPS: AppData[] = [
  { id: 'karaoke', name: 'Karaoke', desc: 'JPOP lyrics — Japanese, romaji, Korean side-by-side', url: 'https://karaoke.kevinprk.com' },
  { id: 'plumber', name: 'Plumber', desc: 'network toolbox · IP check, DNS lookup, BGP, TLS', url: 'https://plumber.kevinprk.com' },
  { id: 'tiny',    name: 'Tiny',    desc: 'URL shortener with QR code generation', url: 'https://tiny.kevinprk.com' },
]

export const NOTES: NoteData[] = [
  { id: 'tcp', title: 'The TCP three-way handshake', date: '2026-05-20', read: '4 min', tags: ['networking', 'tcp'], blurb: 'What SYN, SYN-ACK, and ACK actually do — stepped through, packet by packet.' },
  { id: 'clos', title: 'Clos topology, from the ground up', date: '2026-04-02', read: '6 min', tags: ['networking', 'datacenter'], blurb: 'Why every modern data center is a fabric of leaves and spines.' },
]

export const profile = {
  name: 'Kevin Park',
  github: 'https://github.com/krapie',
  linkedin: 'https://www.linkedin.com/in/krapie/',
}
