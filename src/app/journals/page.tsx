import { getJournals } from "@/api/journals";
import { JournalCard } from "@/components/journalCard/JournalCard";
import { Stack } from "@mantine/core";

export default async function page() {
  const data = await getJournals();
  return (
    <Stack>
      {data?.map((item) => {
        return (
          <JournalCard
            key={`journal-${item.id}`}
            title={item.title}
            body={item.body}
          />
        );
      })}
    </Stack>
  );
}
