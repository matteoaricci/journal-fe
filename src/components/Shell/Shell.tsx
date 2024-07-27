import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
  Flex,
} from "@mantine/core";
import { IconHome, IconNotebook } from "@tabler/icons-react";
import Link from "next/link";

type Props = { children: React.ReactNode };

const navData = [
  { desc: "Home", icon: IconHome, href: "/dashboard" },
  { desc: "Journals", icon: IconNotebook, href: "/journals" },
];

export default function Shell({ children }: Props) {
  return (
    <AppShell
      navbar={{
        width: 300,
        breakpoint: "xs",
      }}
      header={{ height: 60 }}
    >
      <AppShellHeader>Header</AppShellHeader>
      <AppShellNavbar>
        {navData.map((d) => {
          return (
            <Link href={d.href}>
              <Flex mx="md" my="sm" align="center" gap="md">
                <d.icon />
                {d.desc}
              </Flex>
            </Link>
          );
        })}
      </AppShellNavbar>
      <AppShellMain>{children}</AppShellMain>
    </AppShell>
  );
}
