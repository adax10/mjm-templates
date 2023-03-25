import React from 'react';
import { MjmlText, MjmlButton } from 'mjml-react';
import { GlobalTemplate } from './globalTemplate.js';

export const exampleEmail = ({ name, linkUrl }) => (
  <GlobalTemplate title="Example email">
    {(template) => (
      <React.Fragment>
        <MjmlText color={template.colors.typography} fontSize={template.styles.fontSize.regular} align="center">
          Hello {name}!
        </MjmlText>
        <MjmlButton
          href={linkUrl}
          fontSize={template.styles.fontSize.regular}
          fontWeight={400}
          borderRadius={12}
          width={320}
          backgroundColor={template.colors.link}
          paddingBottom={20}
        >
          Click here!
        </MjmlButton>
        <MjmlText color={template.colors.typography} fontSize={template.styles.fontSize.regular} align="center">
          If you did not requested for this email, you can ignore this email.
        </MjmlText>
      </React.Fragment>
    )}
  </GlobalTemplate>
);
