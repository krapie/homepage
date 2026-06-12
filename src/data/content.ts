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
  { id: 'utility', name: 'Utility', desc: 'developer toolbox · hash, base64, regex, JSON, YAML', url: 'https://utility.kevinprk.com' },
  { id: 'paste',   name: 'Paste',   desc: 'instant text sharing via expiring link', url: 'https://paste.kevinprk.com' },
  { id: 'play',    name: 'Play',    desc: 'small interactive experiments', url: 'https://play.kevinprk.com' },
]

export const NOTES: NoteData[] = [
  { id: 'vpc',  title: 'VPC packet flow',                  date: '2026-06-01', read: '5 min', tags: ['aws', 'networking'],      blurb: 'How packets move inside AWS VPC — Nitro cards, Mapping Service, Hyperplane, and Blackfoot edge.' },
  { id: 'tcp',  title: 'The TCP three-way handshake',      date: '2026-05-20', read: '4 min', tags: ['networking', 'tcp'],       blurb: 'What SYN, SYN-ACK, and ACK actually do — stepped through, packet by packet.' },
  { id: 'clos', title: 'Clos vs. RNG topology',            date: '2026-04-10', read: '6 min', tags: ['networking', 'datacenter'], blurb: 'How AWS replaced hierarchical Clos networks with a flat quasi-random topology.' },
]

export const profile = {
  name: 'Kevin Park',
  github: 'https://github.com/krapie',
  linkedin: 'https://www.linkedin.com/in/krapie/',
}
