import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import * as FileInput from '@/app/components/form/file-input'
import * as Input from '@/app/components/form/input'
import { Select } from '@/app/components/form/select'
import { SelectItem } from '@/app/components/form/select/select-item'
import { Textarea } from '@/app/components/form/textarea'
import { Button } from '@/app/components/button'

export function MyDetails() {
  return (
    <div className="mt-6 flex flex-col">
      <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between border-b border-zinc-200 pb-5 dark:border-zinc-700">
        <div className="space-y-1">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">Personal info</h2>
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            Update your photo and personal details here.
          </span>
        </div>
        <div className="flex items-center gap-2 ">
          <Button
            type="button"
            variant='outline'
          >
            Cancel
          </Button>
          <Button type="submit" form="settings">
            Save
          </Button>
        </div>
      </div>

      <form
        id="settings"
        className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
      >
        <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Name
          </label>
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
            <Input.Root>
              <Input.Control id="firstName" defaultValue="John" />
            </Input.Root>
            <div className="flex flex-col gap-3 lg:block">
              <label
                htmlFor="lastName"
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300 lg:sr-only"
              >
                Last name
              </label>

              <Input.Root>
                <Input.Control id="lastName" defaultValue="Doe" />
              </Input.Root>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <label htmlFor="email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Email address
          </label>
          <Input.Root>
            <Input.Prefix>
              <Mail className="h-5 w-5 text-zinc-500" />
            </Input.Prefix>
            <Input.Control
              id="email"
              type="email"
              defaultValue="johndoe@example.com"
            />
          </Input.Root>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <label htmlFor="photo" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Your photo
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              This will be displayed on your profile.
            </span>
          </label>
          <FileInput.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
            <FileInput.ImagePreview />
            <FileInput.Trigger />
            <FileInput.Control accept="image/*, .gif, .svg" />
          </FileInput.Root>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <label htmlFor="role" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Role
          </label>
          <Input.Root>
            <Input.Control id="role" defaultValue="Developer" />
          </Input.Root>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <label
            htmlFor="country"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Country
          </label>
          <Select placeholder="Select a country...">
            <SelectItem value="br" text="Brazil" />
            <SelectItem value="us" text="United States" />
            <SelectItem value="mx" text="Mexico" />
          </Select>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <label
            htmlFor="timezone"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Timezone
          </label>
          <Select placeholder="Select a timezone...">
            <SelectItem value="pst" text="Pacific Standard Time (UTC-08:00)" />
            <SelectItem value="brt" text="Brasilia Time (UTC-03:00)" />
          </Select>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <label htmlFor="bio" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Bio
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              Write a short introduction.
            </span>
          </label>
          <div className="space-y-3">
            <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
              <Select placeholder="" defaultValue="normal">
                <SelectItem value="normal" defaultChecked text="Normal Text" />
                <SelectItem value="md" text="Markdown" />
              </Select>

              <div className="flex items-center gap-1">
                <Button
                  type="button"
                  variant='ghost'
                >
                  <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button
                  type="button"
                  variant='ghost'
                >
                  <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button
                  type="button"
                  variant='ghost'
                >
                  <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button
                  type="button"
                  variant='ghost'
                >
                  <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button
                  type="button"
                  variant='ghost'
                >
                  <ListOrdered
                    className="h-4 w-4 text-zinc-500"
                    strokeWidth={3}
                  />
                </Button>
              </div>
            </div>

            <Textarea
              id="bio"
              defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <label
            htmlFor="projects"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Portfolio projects
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              Share a few snippets of your work.
            </span>
          </label>
          <FileInput.Root>
            <FileInput.Trigger />
            <FileInput.FileList />
            <FileInput.Control multiple />
          </FileInput.Root>
        </div>
      </form>
    </div>
  )
}
