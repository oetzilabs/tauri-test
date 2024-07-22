import { A, useLocation } from '@solidjs/router'
import { window } from '@tauri-apps/api'
import { X } from 'lucide-solid'
import { Button } from './ui/button'

export default function Header() {
  const location = useLocation()
  return (
    <header class="p-2 bg-background border-b border-neutral-200 w-full container flex flex-row justify-between items-center gap-2">
      <div class="flex flex-row gap-2">
        <Button
          as={A}
          href="/"
          size="sm"
          variant={location.pathname === '/' ? 'default' : 'ghost'}
        >
          Home
        </Button>
        <Button
          as={A}
          href="/status"
          size="sm"
          variant={location.pathname === '/status' ? 'default' : 'ghost'}
        >
          Status
        </Button>
      </div>
      <Button
        size="icon"
        variant="ghost"
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={async () => {
          await window.appWindow.close()
        }}
        class="p-2 size-8 cursor-pointer"
      >
        <X class="size-4" />
      </Button>
    </header>
  )
}
