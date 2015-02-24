## System Functionality

### FTV
The system shall display a slideshow of static content

### GTV
The system shall display a slideshow of dynamic content

## API for Dynamic Content
The system shall be able to create a slide from any endpoint which conforms to
the following standard.

```json
{
  "slide_title": "<titile>",
  "slide_details": "<details>",
  "slide_image": "<image_url>",
  "slide_template_name": "<template_name>"
}
```

All of the fields are strings and are required.  The system shall maintain
several types of templates which can be used.

### Sources of Dynamic Content
An application wishing to provide slides will update a manifest of known URLs
providing slides.  In doing so, the system shall add that to the requests it
makes to generate the slides.
