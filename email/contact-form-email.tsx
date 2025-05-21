import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from '@react-email/components';

import { Tailwind } from '@react-email/tailwind';

type ContactFormEmailProps = {
  message: string;
  email: string;
};

export default function ContactFormEmail({ message, email }: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="borderBlack10 my-10 rounded-md bg-white px-10 py-4">
              <Heading className="leading-tight">
                You received the following message from the contact form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender`s email is: {email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
