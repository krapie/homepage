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
  { id: 'play',    name: 'Play',    desc: 'Small interactive experiments',                        url: 'https://play.kevinprk.com'    },
]

export const NOTES: NoteData[] = [
  { id: 'ipsec', title: 'IPSec: IKEv2 negotiation and ESP tunnel', date: '2026-06-21', read: '8 min', tags: ['networking', 'security'], blurb: 'How two gateways negotiate a secure tunnel via IKEv2 — DH key exchange, authentication, SA creation — then how every packet is ESP-encapsulated.' },
  { id: 'bgp',   title: 'BGP peering and route exchange',           date: '2026-06-21', read: '7 min', tags: ['networking', 'bgp'],      blurb: 'How two BGP routers establish a session, exchange routes, and install them — then how those routes propagate through the AS via iBGP.' },
  { id: 'mtr',   title: 'Reading MTR output',                       date: '2026-06-13', read: '3 min', tags: ['networking', 'troubleshooting'], blurb: 'How to distinguish ICMP deprioritization (a false alarm) from real packet loss. Includes an interactive MTR table with two annotated scenarios.' },
  { id: 'tcp',   title: 'All about TCP',                            date: '2026-06-13', read: '4 min', tags: ['networking', 'tcp'],      blurb: 'What SYN, SYN-ACK, and ACK actually do — stepped through, packet by packet. Includes teardown, data transfer, state machine, and MTU/MSS.' },
  { id: 'vpc',   title: 'VPC packet flow',                          date: '2026-06-13', read: '5 min', tags: ['aws', 'networking'],      blurb: 'How packets move inside AWS VPC — Nitro cards, Mapping Service, Hyperplane, and Blackfoot edge. Three scenarios: VM→VM, VM→Internet, VM→NLB.' },
  { id: 'clos',  title: 'Clos vs. RNG topology',                   date: '2026-06-13', read: '6 min', tags: ['networking', 'datacenter'], blurb: 'How AWS replaced hierarchical fat-tree (Clos) data center networks with a flat quasi-random topology — fewer routers, more paths, less power.' },
]

export const profile = {
  name: 'Kevin Park',
  github: 'https://github.com/krapie',
  linkedin: 'https://www.linkedin.com/in/krapie/',
}
