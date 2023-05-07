import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Image from '@theme/IdealImage';

const FeatureList = [
  {
    title: 'Generative AI',
    img: require('@site/static/img/dalle-chatty-fant.jpeg'),
    description: (
      <>
        Uses machine learning algorithms to generate text, images or insights in response to prompts.
      </>
    ),
  },
  {
    title: 'Large Language Models',
    img: require('@site/static/img/dalle-chatty-lion.jpeg'),
    description: (
      <>
        Are a type of generative AI specifically architected for text-based content. GPT-4 is an example.
      </>
    ),
  },
  {
    title: 'Prompt Engineering',
    img: require('@site/static/img/dalle-chatty-peacock.jpeg'),
    description: (
      <>
        Is the process of constructing and refining text-based prompts to get the best results from LLMs.
      </>
    ),
  },
];

function Feature({img, title, description}) {

  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      <Image className="padding-horiz--lg" img={img} />
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3 className="margin-vert--md">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
