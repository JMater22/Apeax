const CUTOFF_HOUR = 15; // 3:00 PM local time

/** Computed live from the actual clock each call — never a fake/reset timer. */
export function getShippingDeadlineMessage(): string {
  const now = new Date();
  const cutoff = new Date(now);
  cutoff.setHours(CUTOFF_HOUR, 0, 0, 0);
  let shipsToday = true;

  if (now >= cutoff) {
    cutoff.setDate(cutoff.getDate() + 1);
    shipsToday = false;
  }

  const diffMs = cutoff.getTime() - now.getTime();
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  const shipDate = shipsToday ? "today" : "tomorrow";

  if (hours === 0) {
    return `Order in the next ${minutes} min to ship ${shipDate}.`;
  }
  return `Order within ${hours}h ${minutes}m to ship ${shipDate}.`;
}