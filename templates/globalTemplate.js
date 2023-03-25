import React from 'react';
import {
  Mjml,
  MjmlBody,
  MjmlColumn,
  MjmlHead,
  MjmlImage,
  MjmlSection,
  MjmlStyle,
  MjmlText,
  MjmlTitle,
  MjmlAttributes,
  MjmlAll
} from 'mjml-react';

const template = {
  colors: {
    white: '#FFFFFF',
    black: '#1F1F1F',
    typography: '#A0A0A0',
    link: '#3E7E9E',
    backgroundColor: '#1F1F1F',
    foregroundColor: '#F5F5F5'
  },
  styles: {
    fontSize: {
      large: 30,
      regular: 20,
      small: 16
    }
  }
};

export const GlobalTemplate = ({ children, title }) => (
  <Mjml>
    <MjmlHead>
      <MjmlTitle>{title}</MjmlTitle>
      <MjmlAttributes>
        <MjmlAll font-family="helvetica"></MjmlAll>
      </MjmlAttributes>
      <MjmlStyle>
        {`
            .background {
                padding: 0;
                margin: 0;
                background: ${template.colors.backgroundColor}
            }
        `}
      </MjmlStyle>
    </MjmlHead>
    <MjmlBody cssClass="background" width={1000}>
      <MjmlSection padding="30px 10px 20px">
        <MjmlColumn borderRadius="30px" padding="30px 0" backgroundColor={template.colors.foregroundColor}>
          <MjmlImage align="center" src={'./templates/logo.svg'} width={80} height={80} />
          {children(template)}
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection paddingTop={0}>
        <MjmlColumn>
          <MjmlText align="center" color={template.colors.typography} fontSize={template.styles.fontSize.regular}>
            {new Date().getFullYear()}
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
    </MjmlBody>
  </Mjml>
);
