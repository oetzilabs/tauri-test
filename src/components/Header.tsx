import { A, useLocation } from '@solidjs/router'
import { window } from '@tauri-apps/api'
import { X } from 'lucide-solid'
import { JSX, splitProps } from 'solid-js'
import { cn } from '../libs/cn'
import { Button } from './ui/button'

const LinkButton = (props: { href: string; class?: string; children: JSX.Element }) => {
  const location = useLocation()
  const [local, rest] = splitProps(props, ['href', 'class', 'children'])
  return (
    <Button
      as={A}
      href={local.href}
      size="sm"
      variant={location.pathname === local.href ? 'default' : 'outline'}
      {...rest}
      class={local.class}
    >
      {local.children}
    </Button>
  )
}

export default function Header() {
  return (
    <header class="p-2 bg-background border-b border-neutral-200 w-full container flex flex-row justify-between items-center gap-2">
      <div class="flex flex-row gap-2">
        <LinkButton href="/">Home</LinkButton>
        <LinkButton href="/status">Status</LinkButton>
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
