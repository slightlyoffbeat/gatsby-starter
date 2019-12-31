import React from 'react';
import { Link } from 'gatsby';
import * as Type from '../components/Type';
import Container from '../components/Container';

import SEO from '../components/SEO';

const SecondPage = () => (
  <Container>
    <SEO title="Page two" />
    <Type.H1>Heading One</Type.H1>
    <Type.H2>Heading Two</Type.H2>
    <Type.H3>Heading Three</Type.H3>
    <Type.H4>Heading Four</Type.H4>
    <Type.H5>Heading Five</Type.H5>
    <Type.P>Regular Text</Type.P>
    <Type.P>
      This is a paragraph of text that should be long enough to wrap. If not, we
      can repeat it over and over again until it does wrap. This is a paragraph
      of text that should be long enough to wrap. If not, we can repeat it over
      and over again until it does wrap. This is a paragraph of text that should
      be long enough to wrap.
    </Type.P>
    <Type.H2>Heading Two</Type.H2>
    <Type.P>
      This is a paragraph of text that should be long enough to wrap. If not, we
      can repeat it over and over again until it does wrap. This is a paragraph
      of text that should be long enough to wrap. If not, we can repeat it over
      and over again until it does wrap. This is a paragraph of text that should
      be long enough to wrap.
    </Type.P>
    <Type.H3>Heading Three</Type.H3>
    <Type.P>
      This is a paragraph of text that should be long enough to wrap. If not, we
      can repeat it over and over again until it does wrap. This is a paragraph
      of text that should be long enough to wrap. If not, we can repeat it over
      and over again until it does wrap. This is a paragraph of text that should
      be long enough to wrap.
    </Type.P>
    <Type.H4>Heading Four</Type.H4>
    <Type.P>
      This is a paragraph of text that should be long enough to wrap. If not, we
      can repeat it over and over again until it does wrap. This is a paragraph
      of text that should be long enough to wrap. If not, we can repeat it over
      and over again until it does wrap. This is a paragraph of text that should
      be long enough to wrap.
    </Type.P>
    <Type.H5>Heading Five</Type.H5>
    <Type.P>
      This is a paragraph of text that should be long enough to wrap. If not, we
      can repeat it over and over again until it does wrap. This is a paragraph
      of text that should be long enough to wrap. If not, we can repeat it over
      and over again until it does wrap. This is a paragraph of text that should
      be long enough to wrap.
    </Type.P>
    <Type.HR />
    <Type.P>
      This is <Type.A href="#">something that is a link</Type.A> right there
    </Type.P>
    <Type.P>
      <em>This is italic text, made with em.</em>{' '}
      <i>This is italic text as well, made with i.</i>
    </Type.P>
    <Type.P>
      <strong>This is bold text, made with strong.</strong>{' '}
      <b>This is bold text as well, made with b.</b>
    </Type.P>
    <Type.P>
      <u>This is underlined text, made with u.</u>{' '}
      <ins>This is inserted text, made with ins.</ins>
    </Type.P>
    <Type.P>
      <strike>This is deleted (strikethrough) text, made with strike.</strike>{' '}
      <s>This is also strikethrough text, but made with s.</s>{' '}
      <del>This is deleted text, made with del.</del>
    </Type.P>
    <Type.P>
      <code>This is computer code, made with code.</code>{' '}
      <tt>This is teletype text, made with tt.</tt>
    </Type.P>
    <Type.Small>This is small text, made with small.</Type.Small>{' '}
    <Type.Lead>This is big lead, made with lead.</Type.Lead>
    <Type.P>This is an unordered list:</Type.P>
    <Type.UL>
      <li>Koyaanisqatsi</li>
      <li>Powaqqatsi</li>
      <li>Naqoyqatsi</li>
    </Type.UL>
    <Type.P>This is an ordered list:</Type.P>
    <Type.OL>
      <li>Larry</li>
      <li>Moe</li>
      <li>Curly</li>
    </Type.OL>
    <Type.P>This is a long quotation inside a blockquote:</Type.P>
    <Type.Blockquote>
      <Type.P>
        “I love songs about horses, railroads, land, judgement day, family, hard
        times, whiskey, courtship, marriage, adultery, separation, murder, war,
        prison, rambling, damnation, home, salvation, death, pride, humor,
        piety, rebellion, patriotism, larceny, determination, tragedy,
        rowdiness, heartbreak, and love. And Mother. And God.” ~ Johnny Cash
      </Type.P>
    </Type.Blockquote>
    <Type.P>This is pre-formatted:</Type.P>
    <pre>
      Start in column one. Then indent to column ten. Then back five spaces.
    </pre>
    <Link to="/">Go back to the homepage</Link>
  </Container>
);

export default SecondPage;
