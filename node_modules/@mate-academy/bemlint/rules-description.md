# one-block

- bad example

```html
<div class="bar foo"></div>
```

- good example

```html
<div class="bar"></div>
```

# one-element

- bad example

```html
<div class="bar">
  <div class="bar__foo bar__baz"></div>
</div>
```

- good example

```html
<div class="bar">
  <div class="bar__baz"></div>
</div>
```

# element-inside-parent-block

- bad example

```html
<div>
  <div class="bar"></div>
  <div class="bar__foo"></div>
</div>
```

- good example

```html
<div class="bar">
  <div class="bar__foo"></div>
</div>
```

# no-double-element

- bad example

```html
<div class="bar">
  <div class="bar__foo__bar"></div>
</div>
```

- good example

```html
<div class="bar">
  <div class="bar__foo-bar"></div>
</div>
```

# no-neighbour-parent-block

- bad example

```html
<div class="bar bar__foo"></div>
```

- good example

```html
<div class="bar">
  <div class="bar__foo"></div>
</div>
```

# modifiable-class

- bad example

```html
<div class="bar">
  <div class="bar__foo_baz"></div>
</div>
```

- good example

```html
<div class="bar">
    <div class="bar__foo bar__foo_baz"></div>
</div>
```
