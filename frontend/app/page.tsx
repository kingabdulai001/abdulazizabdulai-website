import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background text-foreground gap-6 px-6">
      <h1 className="text-4xl font-semibold">Abdul Aziz Abdulai</h1>
      <p className="text-foreground-muted max-w-md text-center">
        Personal portfolio, academic hub, and project showcase — under construction.
      </p>
      <ThemeToggle />
    </div>
  );
}