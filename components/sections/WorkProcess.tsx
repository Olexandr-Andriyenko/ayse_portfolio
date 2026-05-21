import { ClipboardList, Code2, PenTool, Rocket } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { WORK_PROCESS } from "@/lib/content";

const icons = [ClipboardList, PenTool, Code2, Rocket] as const;

export function WorkProcess() {
  return (
    <section
      id="work-process"
      aria-labelledby="work-process-heading"
      className="py-20 sm:py-24"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <h2
              id="work-process-heading"
              className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
              Work Process
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              A simple, repeatable loop keeps stakeholders aligned and quality
              high. Each phase has clear deliverables so we always know what
              comes next and why it matters.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {WORK_PROCESS.map((step, i) => {
              const Icon = icons[i];
              return (
                <article
                  key={step.title}
                  className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-100"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
