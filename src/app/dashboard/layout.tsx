import AppShell from "@/components/AppShell/AppShell"
type Props = { children: React.ReactNode}

export default function layout({children}: Props) {
  return (
      <AppShell>{children}</AppShell>
  )
}