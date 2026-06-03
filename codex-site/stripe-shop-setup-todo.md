# Stripe Shop Setup TODO

This checklist is for setting up The Honest Potter shop carefully before any
public checkout links go live.

Current Stripe position, checked on 2026-06-03:

- The Stripe dashboard is in sandbox/test mode.
- The product catalogue currently has one active test product: `Bees wax candle`,
  priced at GBP 15.00.
- Stripe's setup guide still has account/profile/go-live items to complete.
- No Stripe settings have been changed from Codex.

The public website position:

- `pages/shop.html` is still a safe coming-soon page with `noindex`.
- Shop is still out of the main navigation.
- The old local shop prototype should stay unpublished until the shop phase is
  deliberately restarted.

## Recommended First Shop Shape

Start with a small, curated shop using Stripe-hosted Payment Links or Checkout
for individual products. This keeps payment handling, card security, receipts,
and the checkout page inside Stripe while the website stays simple.

For one-off pottery pieces, use the website's local shop data as the shop
catalogue and Stripe as the payment/checkout layer. That gives us a clear stock
record without pretending Stripe is a full stock-room system.

Move to a fuller cart or ecommerce platform only if the volume grows enough to
justify the extra running cost and maintenance.

## Phase 1: Shop Operating Decisions

- [ ] Decide whether launch one is pottery only, candles only, or a small mixed
      selection.
- [ ] Decide whether the first live shop is UK-only.
- [ ] Decide whether local collection is offered as a checkout option.
- [ ] Decide whether commissions and made-to-order pieces stay enquiry-only.
- [ ] Decide whether pieces can be reserved manually before payment.
- [ ] Choose the first launch size, for example 3-6 pieces, so testing stays
      manageable.
- [ ] Agree the stock statuses to use: draft, photographed, priced, live,
      reserved, sold, archived.

## Phase 2: Product Information Standard

Create a consistent product record before adding real shop pages.

- [ ] Product ID/SKU.
- [ ] Product title.
- [ ] Category, for example mug, bowl, vase, candle, jewellery, garden.
- [ ] Short description.
- [ ] Full description.
- [ ] Price.
- [ ] Quantity available.
- [ ] Stock status.
- [ ] Dimensions.
- [ ] Weight, including enough packaging allowance for shipping bands.
- [ ] Materials, glaze, and firing notes where useful.
- [ ] Care notes.
- [ ] Shipping profile.
- [ ] Collection allowed yes/no.
- [ ] Main image and supporting images.
- [ ] Stripe product ID.
- [ ] Stripe price ID.
- [ ] Stripe payment link or checkout link.

## Phase 3: Inventory Workflow

- [ ] Treat unique pottery pieces as quantity 1 by default.
- [ ] For one-off pieces, create payment links that can only be paid once.
- [ ] Turn off quantity adjustment for one-off pieces.
- [ ] Use separate made-to-order records for repeatable items and include lead
      time clearly.
- [ ] Decide who changes a piece from live to sold after payment.
- [ ] Decide whether sold pieces remain visible in the gallery as sold/archive
      examples.
- [ ] Keep a local product data file as the source of truth until the shop needs
      a proper ecommerce inventory system.
- [ ] Add a simple monthly stock check: website item, Stripe link, physical
      stock, and sold/reserved status all match.

## Phase 4: Shipping Setup

- [ ] Decide the first shipping area: UK only first is the lowest-risk start.
- [ ] Weigh and measure typical packed parcels, not just the pottery.
- [ ] Choose simple shipping bands, for example small, medium, large/fragile.
- [ ] Decide whether any oversized or fragile pieces require manual quote only.
- [ ] Decide whether collection is free, and what collection wording should say.
- [ ] Create test-mode Stripe shipping rates for the agreed bands.
- [ ] Add delivery estimate wording to each shipping rate.
- [ ] Test that checkout collects shipping address details.
- [ ] Test that the right shipping options appear for each product type.
- [ ] Keep shipping rates simple because Stripe's fixed shipping rates are
      charged per order, not automatically recalculated by item count.

## Phase 5: Tax, Legal, And Customer Policy

- [ ] Confirm VAT status before enabling Stripe Tax or adding tax wording.
- [ ] Decide whether product prices are written as tax-inclusive if tax ever
      applies.
- [ ] Add product tax categories/codes in Stripe only when the tax position is
      clear.
- [ ] Write a short shipping policy.
- [ ] Write a short returns/refunds policy.
- [ ] Write a breakage-in-transit policy.
- [ ] Update the privacy statement when Stripe checkout is actually connected.
- [ ] Check whether terms need to mention custom/made-to-order work separately.

## Phase 6: Stripe Account Setup

- [ ] Complete Stripe email verification.
- [ ] Complete Stripe business verification.
- [ ] Complete the Stripe business/profile details.
- [ ] Add the customer support email and public business information.
- [ ] Set a recognisable statement descriptor.
- [ ] Check receipt branding: logo, colour, business name, support email.
- [ ] Add payout/bank details when ready.
- [ ] Keep test and live Stripe objects separate; do not assume sandbox products,
      prices, or links can be used in live mode.

## Phase 7: Test Purchases

- [ ] Create test products, prices, payment links, and shipping rates first.
- [ ] Run a successful card test payment.
- [ ] Run a failed payment test.
- [ ] Test a one-off product link after it has been paid once.
- [ ] Test a refund.
- [ ] Check the customer receipt.
- [ ] Check the Stripe payment record.
- [ ] Test mobile checkout.
- [ ] Test desktop checkout.
- [ ] Confirm what order notification email Paul receives.
- [ ] Write the final order-handling routine: pack, mark sold, email customer if
      needed, dispatch, keep receipt.

## Phase 8: Website Integration

- [ ] Keep the public shop page as coming soon until the test workflow is proven.
- [ ] Create a local shop data file or static product pages once the product
      fields are agreed.
- [ ] Build product cards with clear price, size, stock state, shipping note, and
      checkout button.
- [ ] Add a sold/reserved visual state.
- [ ] Keep checkout buttons disabled or hidden for draft/reserved/sold items.
- [ ] Add a clear note that payment is handled securely by Stripe.
- [ ] Test all shop links locally before upload.
- [ ] Remove `noindex` and add Shop back to navigation only when ready to sell.

## Phase 9: Go-Live Checklist

- [ ] Recreate or confirm live-mode products, prices, shipping rates, and payment
      links.
- [ ] Confirm live account activation is complete.
- [ ] Confirm live receipts and branding.
- [ ] Confirm live payout settings.
- [ ] Confirm live privacy, shipping, returns, and breakage policy pages.
- [ ] Do one final mobile and desktop checkout rehearsal before public launch.
- [ ] Publish the shop page and navigation in one coherent release.
- [ ] After the first real order, review the whole flow and adjust the checklist.

## Useful Stripe References

- Stripe products and prices:
  https://docs.stripe.com/products-prices/how-products-and-prices-work?locale=en-GB
- Stripe Payment Links:
  https://docs.stripe.com/payments/payment-links
- Customising Payment Links and limiting payment link uses:
  https://docs.stripe.com/payment-links/customize?locale=en-GB
- Stripe shipping rates:
  https://docs.stripe.com/payments/advanced/charge-shipping
- Stripe automatic tax with Checkout:
  https://docs.stripe.com/payments/checkout/automatic_taxes
- Stripe account activation:
  https://docs.stripe.com/get-started/account/activate
- Stripe go-live checklist:
  https://docs.stripe.com/get-started/checklist/go-live?locale=en-GB
- Stripe test mode and live mode:
  https://docs.stripe.com/test-mode
