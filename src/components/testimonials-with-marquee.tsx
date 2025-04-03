import { cn } from "@/lib/utils";
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card";

interface TestimonialsSectionProps {
  title: string;
  description: string;
  testimonials: Array<{
    author: TestimonialAuthor;
    text: string;
    href?: string;
  }>;
  className?: string;
}

export function TestimonialsSection({
  title,
  description,
  testimonials,
  className,
}: TestimonialsSectionProps) {
  return (
    <section className={cn("text-foreground py-12 sm:py-24 md:py-32 px-0", className)}>
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
            {description}
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          {/* Marquee Wrapper */}
          <div className="group flex overflow-hidden p-2 flex-row">
            {/* Marquee Content - Duplicated for Seamless Scrolling */}
            <div className="flex shrink-0 justify-around gap-6 animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(2)].map((_, repeatIndex) =>
                testimonials.map((testimonial, i) => (
                  <TestimonialCard key={`${repeatIndex}-${i}`} {...testimonial} />
                ))
              )}
            </div>
          </div>

          {/* Gradient Fade Effects */}
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-[#02000f] sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-[#02000f] sm:block" />
        </div>
      </div>
    </section>
  );
}
