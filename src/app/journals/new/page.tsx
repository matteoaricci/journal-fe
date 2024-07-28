"use client";
import { useForm } from "@mantine/form";
import { TextInput, Textarea, Button } from "@mantine/core";

export default function page() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      title: "",
      body: "",
    },

    validate: {
      title: (value) => (value.length === 0 ? "Title is required" : null),
    },
  });
  return (
    <form onSubmit={form.onSubmit(console.log)}>
      <TextInput
        label="Title"
        key={form.key("title")}
        {...form.getInputProps("title")}
      />
      <Textarea
        label="Body"
        key={form.key("body")}
        {...form.getInputProps("body")}
      />
      <Button type="submit">Save</Button>
    </form>
  );
}
