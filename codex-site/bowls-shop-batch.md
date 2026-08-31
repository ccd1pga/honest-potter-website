# Floating Blue Bowls Shop Batch

Private planning note for the first spreadsheet-led bowl batch. These eight
pieces are included in the local shop sandbox but are not approved for the
public shop.

## Inventory Source

The Stock sheet in the 2026/27 studio tracker is the source of truth for:

- SKU
- dimensions
- item weight
- glaze description
- stock status
- condition notes
- main website image

The agreed SKU range is `HB26-001` to `HB26-008`.

## Image Storage

Full-quality originals are private:

```text
local-originals/shop/2026-08-30-bowls/
```

Prepared website images are in:

```text
images/shop/bowls/
```

Each piece has a predictable three-image set:

```text
hb26-001-front.jpeg
hb26-001-inside.jpeg
hb26-001-base.jpeg
```

The spreadsheet records only the main/front image. The sandbox product record
uses the same SKU to connect the inside and base views.

## Sandbox State

The private sandbox now contains only the eight real bowls, each as a one-off
product with quantity 1. The retired drinking-vessel and mug experiments have
been removed from the sandbox catalogue. Each bowl record has:

- SKU and numbered working title
- three prepared images
- diameter and height
- item weight
- glaze description
- a 250 g test packaging allowance
- its agreed price: £15 for `HB26-002`, £20 for the other bowls
- a disabled Stripe checkout button until an active product link exists

`HB26-002` retains its condition note about a slight chip on the foot ring and
should still be reviewed before it is publicly listed.

## First Stripe Rehearsal

`HB26-001` is connected to the first Stripe sandbox checkout rehearsal:

- bowl price: £20
- packed weight: 526 g
- packed parcel: 23 × 16 × 15 cm
- test delivery: £4.50 Royal Mail Tracked 48, UK only
- quantity: one, with the payment link limited to one successful payment
- Stripe product image: the prepared front photograph

The rehearsal purchase succeeded on 2026-08-31. Stripe recorded £24.50,
captured the UK shipping address and rate, then deactivated the link after its
single permitted payment. The private sandbox now shows this as "checkout
tested" and does not offer the expired link as a usable checkout.

The other standard bowls are priced at £20. `HB26-002` is priced at £15 because
of its foot-ring chip, subject to the condition decision below.

## Still Needed

- Choose final product titles if numbered titles feel too plain.
- Create and rehearse the remaining Stripe sandbox products and links, and
  refresh the consumed `HB26-001` link if another test is needed.
- Decide whether `HB26-002` is a second, studio piece, or not for sale.
- Measure packed parcel weights using the real packaging.
- Confirm care, delivery, collection, returns, and breakage wording.
- Create Stripe sandbox products and payment links only after the product data
  and selling workflow are approved.
