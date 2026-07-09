import { type FaqItem } from "@/types/faq";

// TODO: replace with a real fetch once a CMS/backend exists (Sprint 7)
export const FAQS: FaqItem[] = [
  {
    id: "1",
    category: "Orders",
    question: "How do I track my order?",
    answer:
      "Once your order ships, you'll receive a tracking link by email. You can also check status anytime under Account → Order History.",
  },
  {
    id: "2",
    category: "Orders",
    question: "Can I cancel or change my order?",
    answer:
      "Orders can be modified within 1 hour of placing them. After that, items are already being prepared for shipment.",
  },
  {
    id: "3",
    category: "Shipping",
    question: "How long does shipping take?",
    answer:
      "Standard shipping takes 5–7 business days. Express shipping takes 2–3 business days, both within the Philippines.",
  },
  {
    id: "4",
    category: "Returns",
    question: "What is your return policy?",
    answer:
      "Since every APEAX piece is a limited edition, we do not accept returns or exchanges unless the item arrives defective.",
  },
  {
    id: "5",
    category: "Sizing",
    question: "How do I know what size to order?",
    answer:
      "All APEAX pieces are designed with an oversized/relaxed fit. Check each product page for specific fit notes before ordering.",
  },
  {
    id: "6",
    category: "Authenticity",
    question: "How do I verify my item is authentic?",
    answer:
      "Every piece includes a QR code linking to its unique edition record. Scan it or visit the verify page to confirm authenticity and ownership.",
  },
];

export function getFaqCategories(): string[] {
  return Array.from(new Set(FAQS.map((faq) => faq.category)));
}