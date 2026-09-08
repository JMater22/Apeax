import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Size Guide | APEAX",
  description: "Find your fit across APEAX's oversized and relaxed-fit garments.",
};

const SIZE_ROWS = [
  { size: "S", chest: "52", length: "70", sleeve: "22" },
  { size: "M", chest: "56", length: "72", sleeve: "23" },
  { size: "L", chest: "60", length: "74", sleeve: "24" },
  { size: "XL", chest: "64", length: "76", sleeve: "25" },
];

export default function SizeGuidePage() {
  return (
    <>
      <PageHeader title="Size Guide" />
      <Container className="py-16">
        <div className="mx-auto max-w-2xl">
          <p className="font-body text-apeax-cod-gray/70">
            Every APEAX piece is cut with an intentional oversized or relaxed
            fit. If you prefer a closer fit, we recommend sizing down.
            Measurements below are in centimeters, taken flat.
          </p>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-apeax-westar">
                  <th className="py-3 font-sans text-xs uppercase tracking-wide text-apeax-cod-gray/60">
                    Size
                  </th>
                  <th className="py-3 font-sans text-xs uppercase tracking-wide text-apeax-cod-gray/60">
                    Chest (cm)
                  </th>
                  <th className="py-3 font-sans text-xs uppercase tracking-wide text-apeax-cod-gray/60">
                    Length (cm)
                  </th>
                  <th className="py-3 font-sans text-xs uppercase tracking-wide text-apeax-cod-gray/60">
                    Sleeve (cm)
                  </th>
                </tr>
              </thead>
              <tbody>
                {SIZE_ROWS.map((row) => (
                  <tr key={row.size} className="border-b border-apeax-westar/50">
                    <td className="py-3 font-sans text-sm font-medium text-apeax-cod-gray">
                      {row.size}
                    </td>
                    <td className="py-3 font-sans text-sm text-apeax-cod-gray/80">{row.chest}</td>
                    <td className="py-3 font-sans text-sm text-apeax-cod-gray/80">{row.length}</td>
                    <td className="py-3 font-sans text-sm text-apeax-cod-gray/80">{row.sleeve}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 flex flex-col gap-3">
            <h2 className="font-condensed text-lg uppercase tracking-wide text-apeax-cod-gray">
              How to Measure
            </h2>
            <p className="font-body text-sm leading-relaxed text-apeax-cod-gray/70">
              <span className="font-medium text-apeax-cod-gray">Chest:</span>{" "}
              Lay a similar-fitting garment flat and measure straight across
              underneath the armpits.
            </p>
            <p className="font-body text-sm leading-relaxed text-apeax-cod-gray/70">
              <span className="font-medium text-apeax-cod-gray">Length:</span>{" "}
              Measure from the highest point of the shoulder seam straight
              down to the hem.
            </p>
            <p className="font-body text-sm leading-relaxed text-apeax-cod-gray/70">
              <span className="font-medium text-apeax-cod-gray">Sleeve:</span>{" "}
              Measure from the shoulder seam to the end of the cuff.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}