import { AppShell as Shell } from "@mantine/core"

type Props = { children: React.ReactNode}

export default function AppShell({children}: Props) {
  return (
      <Shell>{children}</Shell>
  )
}