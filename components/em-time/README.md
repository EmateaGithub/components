# The em-time Element

Represents a time written in Ematean format. Ematean's usually write time in one of three ways:

* **Date only**: 2084-06-14
* **Time only**: <small>T</small> 15:30:00
* **Full Format**: 2084-06-14 <small>T</small> 15:30:00

The small "T" is understood indicate a time and is usually written smaller than the surrounding text.

<!--DEMO
<wc-demo>
    <p>The party is at <em-time>2084-10-01 T 18:00:00</em-time>!</p>
</wc-demo>
/DEMO-->

```html
The party is at <em-time>2084-10-01 T 18:00:00</em-time>!
```

## Usage

Can use any of the normal formats:

<!--DEMO
<wc-demo>
    <p>Date: <em-time>2084-10-01</em-time></p>
    <p>Time: <em-time>T 18:00:00</em-time></p>
    <p>Full: <em-time>2084-10-01 T 18:00:00</em-time></p>
</wc-demo>
/DEMO-->

```html
<p>Date: <em-time>2084-10-01</em-time></p>
<p>Time: <em-time>T 18:00:00</em-time></p>
<p>Full: <em-time>2084-10-01 T 18:00:00</em-time></p>
```

If an invalid format is used, it'll "just work", but without special formatting.

<!--DEMO
<wc-demo>
    <p>Invalid: <em-time>December</em-time></p>
</wc-demo>
/DEMO-->

```html
<p>Invalid: <em-time>December</em-time></p>
```
