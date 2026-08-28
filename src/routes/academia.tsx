import { createFileRoute } from "@tanstack/react-router";
import { AcademiaComplete } from "@/components/AcademiaComplete";

export const Route = createFileRoute("/academia")({ component: AcademiaPage });

function AcademiaPage() {
  return <AcademiaComplete />;
}
