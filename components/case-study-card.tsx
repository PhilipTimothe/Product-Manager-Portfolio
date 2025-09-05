'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ParallaxCard } from './parallax';
import { cn } from '@/lib/utils';

interface CaseStudyCardProps {
  title: string;
  subtitle: string;
  readTime: string;      // e.g. "15 min read"
  href: string;
  coverImage: string;
  tags: string[];        // e.g. ["Restaurant Nevel", "2023 - 2024", "Brand & Strategy"]
  className?: string;
}

export function CaseStudyCard({
  title,
  subtitle,
  readTime,
  href,
  coverImage,
  tags,
  className,
}: CaseStudyCardProps) {
  // Expect tags[0]=client, tags[1]=years, tags[2]=category (fallbacks handled)
  const client = tags?.[0] ?? '';
  const years = tags?.[1] ?? '';
  const category = tags?.[2] ?? '';

  return (
    <ParallaxCard className={cn('group', className)}>
      <Link
        href={href}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 rounded-[22px]"
      >
        <article className="overflow-hidden rounded-[22px] bg-surface shadow-sm transition-all duration-300 hover:shadow-md">
          {/* Image */}
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              sizes="(min-width:1024px) 560px, (min-width:768px) 50vw, 100vw"
            />
          </div>

          {/* Text */}
          <div className="px-4 sm:px-5 pt-5 pb-6">
            {/* Meta row like the reference */}
            <h3 className="font-sans text-[15px] tracking-[0.02em] text-black">
              {client && <span className="font-semibold">{client}</span>}
              {years && <span className="mx-2 text-black/40">{years}</span>}
              {category && <span className="text-black/80 font-normal">{category}</span>}
            </h3>

            {/* Optional short description */}
            {subtitle && (
              <p className="mt-3 text-[14px] leading-[1.6] text-black/70">
                {subtitle}
              </p>
            )}

            {/* Bottom row: CTA + read time */}
            <div className="mt-5 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-[14px] font-medium text-black transition-colors group-hover:opacity-80">
                Case Study <span aria-hidden>→</span>
              </span>
              {readTime && (
                <span className="text-[13px] text-black/50">{readTime}</span>
              )}
            </div>
          </div>
        </article>
      </Link>
    </ParallaxCard>
  );
}