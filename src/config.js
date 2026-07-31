/**
 * Amazon Attribution tagged URL (campaign/ad group "Website Organic", ASIN B0GXX7HSXN).
 *
 * The `maas` parameters are what feed clicks, detail page views, add-to-carts,
 * and purchases back into the Amazon Attribution dashboard. Keep them intact:
 * replacing this with a short link (amzn.eu/...) drops the query string on
 * redirect and silently kills all attribution reporting.
 *
 * Do not reuse this tag for Meta, Google, email, or influencer campaigns. Each
 * channel needs its own ad group and tag, otherwise their data merges into one
 * row and per-channel ROAS becomes unreadable.
 */
export const AMAZON_URL =
  'https://www.amazon.co.uk/dp/B0GXX7HSXN?maas=maas_adg_3E5FEBCFF0535D6E438C827A9BA15124_afap_abs&ref_=aa_maas&tag=maas'
