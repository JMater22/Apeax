import { type Review } from "@/types/review";

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="font-sans text-sm text-apeax-cod-gray" aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(rating)}
      <span className="text-apeax-cod-gray/20">{"★".repeat(5 - rating)}</span>
    </span>
  );
}

interface ReviewsSectionProps {
  reviews: Review[];
  averageRating: number;
}

export function ReviewsSection({ reviews, averageRating }: ReviewsSectionProps) {
  return (
    <div className="border-t border-apeax-westar pt-10">
      <div className="mb-6 flex items-center gap-3">
        <h2 className="font-condensed text-xl uppercase tracking-wide text-apeax-cod-gray">
          Reviews
        </h2>
        {reviews.length > 0 && (
          <span className="font-sans text-sm text-apeax-cod-gray/60">
            {averageRating.toFixed(1)} ({reviews.length})
          </span>
        )}
      </div>

      {reviews.length === 0 ? (
        <p className="font-body text-apeax-cod-gray/60">
          No reviews yet — be the first to own this piece.
        </p>
      ) : (
        <ul className="flex flex-col gap-6">
          {reviews.map((review) => (
            <li key={review.id} className="border-b border-apeax-westar pb-6 last:border-0">
              <div className="flex items-center justify-between">
                <span className="font-sans text-sm font-medium text-apeax-cod-gray">
                  {review.authorName}
                </span>
                <StarRating rating={review.rating} />
              </div>
              <p className="mt-2 font-body text-sm text-apeax-cod-gray/70">{review.comment}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}