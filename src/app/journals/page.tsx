import { getJournals } from "@/api/journals";
import { JournalCard } from "@/components/journalCard/JournalCard";

export default async function page() {
  const data = await getJournals();
  return (
    <div>
      {data?.map((item) => {
        return <JournalCard title={item.title} body={item.body} />;
      })}
    </div>
  );
}
