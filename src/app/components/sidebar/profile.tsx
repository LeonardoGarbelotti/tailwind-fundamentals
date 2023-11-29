import { LogOut } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../button'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <Image
        src="https://github.com/LeonardoGarbelotti.png"
        className="h-10 w-10 rounded-full"
        width={40}
        height={40}
        alt="Imagem de usuário"
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Leonardo Gonçalves
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          leonardo.goncalves@hotmail.com
        </span>
      </div>
      <Button
        type="button"
        variant='ghost'
      >
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
