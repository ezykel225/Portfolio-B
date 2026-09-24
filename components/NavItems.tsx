import type { PanelId } from '@/lib/workspace'
import { DashboardIcon, CubeIcon, PersonIcon, LayersIcon, RouteIcon, SendIcon } from './icons'

/** Everything the navigation can target: the board itself, the
 *  projects region on the board, or one of the four sheets. */
export type NavTarget = 'board' | 'projects' | PanelId

export interface NavItem {
  id: NavTarget
  label: string
  /** Used by the phone bar, where a cell is about 60px wide. */
  short: string
  Icon: (props: { className?: string }) => React.ReactElement
  /** Sheets get aria-haspopup; the two in-page targets do not. */
  opensSheet: boolean
  /** The phone bar drops "Board": a sheet is dismissed by its own
   *  close button there, so a second way back is dead weight. */
  onPhoneBar: boolean
}

export const navItems: NavItem[] = [
  { id: 'board', label: 'Board', short: 'Board', Icon: DashboardIcon, opensSheet: false, onPhoneBar: false },
  { id: 'projects', label: 'Projects', short: 'Work', Icon: CubeIcon, opensSheet: false, onPhoneBar: true },
  { id: 'about', label: 'About', short: 'About', Icon: PersonIcon, opensSheet: true, onPhoneBar: true },
  { id: 'stack', label: 'Stack', short: 'Stack', Icon: LayersIcon, opensSheet: true, onPhoneBar: true },
  { id: 'experience', label: 'Experience', short: 'Career', Icon: RouteIcon, opensSheet: true, onPhoneBar: true },
  { id: 'contact', label: 'Contact', short: 'Contact', Icon: SendIcon, opensSheet: true, onPhoneBar: true },
]
