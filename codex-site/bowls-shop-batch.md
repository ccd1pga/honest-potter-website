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

All eight bowls are draft one-off products with quantity 1. Each record has:

- SKU and numbered working title
- three prepared images
- diameter and height
- item weight
- glaze description
- a 250 g test packaging allowance
- a disabled Stripe checkout button

`HB26-002` retains its condition note about a slight chip on the foot ring and
should be reviewed before it is priced or listed.

## Still Needed

- Choose final product titles if numbered titles feel too plain.
- Confirm prices.
- Decide whether `HB26-002` is a second, studio piece, or not for sale.
- Measure packed parcel weights using the real packaging.
- Confirm care, delivery, collection, returns, and breakage wording.
- Create Stripe sandbox products and payment links only after the product data
  and selling workflow are approved.
