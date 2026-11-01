import { getPlace } from "@/lib/googleReviews";
import GoogleReviewsClient from "./GoogleReviewsClient";

/**
 * The rating and reviews, rendered on the server so crawlers and answer engines
 * read them in the HTML. A page using this sets `export const revalidate = 86400`.
 */
export default async function GoogleReviews({ layout = "grid" }: { layout?: "grid" | "column" }) {
  return <GoogleReviewsClient layout={layout} data={await getPlace()} />;
}
