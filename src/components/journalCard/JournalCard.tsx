import { Paper, Text, ThemeIcon, rem } from "@mantine/core";
import { IconColorSwatch, IconBackground } from "@tabler/icons-react";
import classes from "./JournalCard.module.css";

type JournalCardProps = {
  title: string;
  body: string;
};

export function JournalCard({ title, body }: JournalCardProps) {
  return (
    <Paper withBorder radius="md" className={classes.card}>
      <ThemeIcon
        size="xl"
        radius="md"
        variant="gradient"
        gradient={{ deg: 0, from: "pink", to: "orange" }}
      >
        <IconBackground
          style={{ width: rem(28), height: rem(28) }}
          stroke={1.5}
        />
      </ThemeIcon>
      <Text size="xl" fw={500} mt="md">
        {title}
      </Text>
      <Text size="sm" mt="sm" c="dimmed">
        {body}
      </Text>
    </Paper>
  );
}
