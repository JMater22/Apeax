"use client";

import { useState } from "react";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/layout/container";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS, getFaqCategories } from "@/lib/data/faqs";

export default function FaqPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const categories = getFaqCategories();

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesQuery =
      !query ||
      faq.question.toLowerCase().includes(query.toLowerCase()) ||
      faq.answer.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = !activeCategory || faq.category === activeCategory;
    return matchesQuery && matchesCategory;
  });

  return (
    <>
      <PageHeader title="FAQ" />

      <Container className="py-16">
        <div className="mx-auto max-w-2xl">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search FAQs..."
            aria-label="Search FAQs"
          />

          <div className="mt-4 flex flex-wrap gap-2">
            <button onClick={() => setActiveCategory(null)}>
              <Badge variant={activeCategory === null ? "default" : "secondary"} className="font-sans text-xs uppercase tracking-wide">
                All
              </Badge>
            </button>
            {categories.map((category) => (
              <button key={category} onClick={() => setActiveCategory(category)}>
                <Badge
                  variant={activeCategory === category ? "default" : "secondary"}
                  className="font-sans text-xs uppercase tracking-wide"
                >
                  {category}
                </Badge>
              </button>
            ))}
          </div>

          <div className="mt-8">
            {filteredFaqs.length === 0 ? (
              <p className="font-body text-apeax-cod-gray/60">No results found.</p>
            ) : (
              <Accordion>
                {filteredFaqs.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id}>
                    <AccordionTrigger className="font-sans text-sm text-apeax-cod-gray">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-sm text-apeax-cod-gray/70">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}