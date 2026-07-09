import { type ProductDetails } from "@/types/product";

export function ProductDetailsSection({ details }: { details: ProductDetails }) {
  return (
    <div className="mt-8 border-t border-apeax-westar pt-8">
      <dl className="flex flex-col gap-4">
        <div>
          <dt className="font-sans text-xs uppercase tracking-wide text-apeax-cod-gray/50">
            Material
          </dt>
          <dd className="mt-1 font-body text-sm text-apeax-cod-gray">{details.material}</dd>
        </div>
        <div>
          <dt className="font-sans text-xs uppercase tracking-wide text-apeax-cod-gray/50">
            Fit
          </dt>
          <dd className="mt-1 font-body text-sm text-apeax-cod-gray">{details.fit}</dd>
        </div>
        <div>
          <dt className="font-sans text-xs uppercase tracking-wide text-apeax-cod-gray/50">
            Care Instructions
          </dt>
          <dd className="mt-1">
            <ul className="flex flex-col gap-1 font-body text-sm text-apeax-cod-gray">
              {details.care.map((instruction) => (
                <li key={instruction}>{instruction}</li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>
    </div>
  );
}