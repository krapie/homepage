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
  { id: 'plumber', name: 'Plumber', desc: 'Network toolbox — IP, DNS, BGP, TLS, CIDR',           url: 'https://plumber.kevinprk.com' },
  { id: 'tiny',    name: 'Tiny',    desc: 'URL shortener with QR code generation',                url: 'https://tiny.kevinprk.com'    },
  { id: 'utility', name: 'Utility', desc: 'Dev toolbox — Hash, Base64, JSON, YAML, Regex',       url: 'https://utility.kevinprk.com' },
  { id: 'paste',   name: 'Paste',   desc: 'Text sharing with configurable TTL up to 24h',        url: 'https://paste.kevinprk.com'   },
  { id: 'task',    name: 'Task',    desc: 'Daily task board — routine + bonus tasks, auto-reset', url: 'https://task.kevinprk.com'    },
]

export const NOTES: NoteData[] = [
  { id: 'crdt', title: 'CRDT — conflict-free collaborative editing', date: '2026-06-22', read: '6 min', tags: ['distributed-systems', 'crdt'], blurb: 'How Conflict-free Replicated Data Types let multiple users edit the same document without a central server.' },
  { id: 'vpc',  title: 'VPC packet flow',                  date: '2026-06-13', read: '5 min', tags: ['aws', 'networking'],      blurb: 'How packets move inside AWS VPC — Nitro cards, Mapping Service, Hyperplane, and Blackfoot edge.' },
  { id: 'clos', title: 'Clos vs. RNG topology',            date: '2026-06-13', read: '6 min', tags: ['networking', 'datacenter'], blurb: 'How AWS replaced hierarchical Clos networks with a flat quasi-random topology.' },
]

export const profile = {
  name: 'Kevin Park',
  github: 'https://github.com/krapie',
  linkedin: 'https://www.linkedin.com/in/krapie/',
}
