import clsx from 'clsx'
import { GetServerSideProps } from 'next'
import { signIn } from 'next-auth/react'
import { ComponentProps, ReactNode } from 'react'
import { DASHBOARD_URL } from '../constants'
import { SignInIcon } from '../icons'
import { MarketingLayout } from '../layouts/Marketing'
import * as Server from '../lib/server'
import { Button, LinkButton } from '../primitives/Button'
import { Container } from '../primitives/Container'
import styles from './index.module.css'

interface FeatureProps extends Omit<ComponentProps<"div">, "title"> {
  description: ReactNode;
  title: ReactNode;
}

function Feature({ title, description, className, ...props }: FeatureProps) {
  return (
    <div className={clsx(className, styles.featuresFeature)} {...props}>
      <h4 className={styles.featuresFeatureTitle}>{title}</h4>
      <p className={styles.featuresFeatureDescription}>{description}</p>
    </div>
  );
}

export default function Index() {
  return (
    <MarketingLayout>
      <Container className={styles.section}>
        <div className={styles.heroInfo}>
          <h1 className={styles.heroTitle}>Collaborative GPT-4 Chat</h1>
          <p className={styles.heroLead}>Chat together, learn together.</p>
        </div>
        <div className={styles.heroActions}>
          <Button icon={<SignInIcon />} onClick={() => signIn()}>
            Sign in
          </Button>
          {/* <LinkButton
            href="https://liveblocks.io/docs/guides/nextjs-starter-kit"
            target="_blank"
            variant="secondary"
          >
            Learn more
          </LinkButton> */}
        </div>
      </Container>
      <Container className={styles.section}>
        <h2 className={styles.sectionTitle}>Features</h2>
        <div className={styles.featuresGrid}>
          <Feature
            description={
              <>
                Collaborate in real-time with other users using our integrated
                chat feature, allowing simultaneous interactions with AI agents
                and group members.
              </>
            }
            title="Collaborative Chat"
          />
          <Feature
            description={
              <>
                Experience multi-branch dialogues that enable users to create,
                explore, and share various conversation paths with AI and other
                participants.
              </>
            }
            title="Multi-Branch Conversations"
          />
          <Feature
            description={
              <>
                Access a variety of powerful plugins designed to enhance AI
                collaboration, enabling users to customize their experience and
                unlock new possibilities.
              </>
            }
            title="Plugins"
          />
        </div>
      </Container>
    </MarketingLayout>
  );
}

// If logged in, redirect to dashboard
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await Server.getServerSession(req, res);

  if (session) {
    return {
      redirect: {
        permanent: false,
        destination: DASHBOARD_URL,
      },
    };
  }

  return {
    props: {},
  };
};
