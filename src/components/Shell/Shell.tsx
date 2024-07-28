import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
  Flex,
} from "@mantine/core";
import { IconHome, IconNotebook, IconPencilPlus } from "@tabler/icons-react";
import Link from "next/link";
import classes from "./Shell.module.css";

type Props = { children: React.ReactNode };

const navData = [
  { desc: "Home", icon: IconHome, href: "/dashboard" },
  { desc: "Journals", icon: IconNotebook, href: "/journals" },
  { desc: "New", icon: IconPencilPlus, href: "/journals/new" },
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
            <Link className={classes["nav-link"]} href={d.href}>
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
