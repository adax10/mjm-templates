import { render } from 'mjml-react';
import fs from 'node:fs';
import { exampleEmail } from './exampleEmail.js';

const { html } = render(
  exampleEmail({
    name: 'John Doe',
    linkUrl: 'https://google.com'
  }),
  { validationLevel: 'soft', beautify: true }
);

fs.writeFile('email.html', html, () => {});
