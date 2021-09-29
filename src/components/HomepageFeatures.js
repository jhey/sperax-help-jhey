import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import stylesScss from '../css/custom.scss';

import { FaRegClock } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import { FaQuestionCircle } from 'react-icons/fa';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const FeatureList = [
  {
    title: 'What is Sperax?',
    faicon: <FaInfoCircle />,
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
Sperax is dedicated to benefiting all financial lives with blockchain technology.
      </>
    ),
  },
  {
    title: 'Smart contract overview',
    faicon: <FaBook />,
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
Learn about the architecture of the Uniswap protocol smart contracts made up of the Core and Periphary libraries.
      </>
    ),
  },
  {
    title: 'V3 SDK',
    faicon: <FaQuestionCircle />,
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
The SDK is designed to assist developers when interacting with the protocol in any environment that can execute JavaScript.
      </>
    ),
  },
];

function Feature({Svg, title, description, faicon}) {
  return (
    <>
    <div className={clsx('col col--4')}>
      <div className="introblock">
        
        <div className="iconstop">{faicon} <FaExternalLinkAlt  className="iconlaunch"/></div>


      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      </div>
    </div>
    </>
  );
}

export default function HomepageFeatures() {
  return (
    <>

    <section className={styles.features}>
      <div className="container">


        
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>

    </section>
    <section>
    <div className="container css-holder">


<div class="row justify-content-center css-tuts">
    <div class="col">
    <h2>Getting Started</h2>
    <p>Explore these docs to get started integrating the Sperax Protocol in your dApp, smart contract or project.</p>


    <a className="css-goblock">
      <div className="css-golink">
      <div className="iconstop"> <FaExternalLinkAlt  className="iconlaunch"/>
          <h4 >SDK Quick start</h4>
          <p >Get started on web integrations with the Javascript SDK</p>
          </div>
          </div>
          </a>

          <a className="css-goblock">
      <div className="css-golink">
      <div className="iconstop"> <FaExternalLinkAlt  className="iconlaunch"/>
          <h4 >Implement a Swap</h4>
          <p >Start swapping from a smart contract</p>
          </div>
          </div>
          </a>


          <a className="css-goblock">
      <div className="css-golink">
      <div className="iconstop"> <FaExternalLinkAlt  className="iconlaunch"/>
          <h4 >Providing Liquidity</h4>
          <p >Provide liquidity from a smart contract</p>
          </div>
          </div>
          </a>

    </div>
   
   
   
   
    <div class="col dev-col">
    <h2>Developer Links</h2>
    <p>The Sperax codebase is comprised of an ecosystem of open source components.</p>
   
    <a className="css-goblock">
      <div className="css-golink">
      <div className="iconstop"><FaGithub className="gitIco"/>  <FaExternalLinkAlt  className="iconlaunch"/>
          
          <p >sperax-v3-core</p>
          </div>
          </div>
          </a>

          <a className="css-goblock">
      <div className="css-golink">
      <div className="iconstop"><FaGithub className="gitIco"/>  <FaExternalLinkAlt  className="iconlaunch"/>
          
          <p >sperax-v3-sdk</p>
          </div>
          </div>
          </a>


          <a className="css-goblock">
      <div className="css-golink">
      <div className="iconstop"><FaGithub className="gitIco"/>  <FaExternalLinkAlt  className="iconlaunch"/>
          
          <p >Deploy from a smart contract</p>
          </div>
          </div>
          </a>

          <a className="css-goblock">
      <div className="css-golink">
      <div className="iconstop"><FaGithub className="gitIco"/>  <FaExternalLinkAlt  className="iconlaunch"/>
          
          <p >Lorum Ipsum dolo contract</p>
          </div>
          </div>
          </a>

          <a className="css-goblock">
      <div className="css-golink">
      <div className="iconstop"><FaGithub className="gitIco"/>  <FaExternalLinkAlt  className="iconlaunch"/>
          
          <p >Ipsum Lorum  dolo contract Ipsum</p>
          </div>
          </div>
          </a>


   
    </div>

  </div>


</div>
</section>

<hr>

</hr>




</>
  );
}
