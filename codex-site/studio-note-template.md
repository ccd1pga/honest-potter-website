# Studio Notes Template

Use this as the repeatable structure for future Studio Notes entries. It keeps
new notes quick to write while making them consistent for readers.

## Front Matter

```text
Title:
Date:
Status: In progress / Test complete / Follow-up needed
Topic: Glaze / Firing / Form / Kiln / Studio experiment
Hero image:
Gallery/category links:
```

## Short Intro

One or two plain paragraphs:

- what was being tested or made
- why it mattered
- what stage the work is at

## What I Tried

Describe the practical setup:

- clay body, glaze, recipe, or form
- batch size or key measurements
- application method
- firing schedule if relevant
- any constraints or compromises

## Images

Use two to four useful images. Captions should say what the reader is looking
at, not just decorate the page.

```html
<section class="note-media-grid" aria-label="Short description of the photos">
  <figure>
    <img src="../images/example/example_1.jpeg" alt="Specific description of the image">
    <figcaption>Specific caption explaining what this shows.</figcaption>
  </figure>
</section>
```

## Results

Keep this honest and specific:

- what worked
- what failed or disappointed
- what surprised you
- whether the result is usable, beautiful, odd, or just informative

## What I Would Change Next

End with the next practical step. This can be short:

- repeat with a different percentage
- change firing schedule
- alter thickness, trimming, drying, or surface
- make a second batch before drawing conclusions

## Optional Recipe Block

Use this when a recipe or test line matters:

```html
<section class="note-grid">
  <div class="note-card">
    <h2>Base Glaze</h2>
    <dl class="recipe-list">
      <div><dt>Ingredient</dt><dd>00%</dd></div>
    </dl>
  </div>
  <div class="note-card">
    <h2>Firing</h2>
    <p>Short firing schedule or firing note.</p>
  </div>
</section>
```

## Publishing Checklist

- image paths are web-ready and under `images/`
- alt text describes the image clearly
- captions explain why each image is included
- the note has a status: in progress, complete, or follow-up needed
- the final paragraph says what happens next
