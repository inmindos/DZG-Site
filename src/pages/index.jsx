import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from '../layout/layout'
import siteConfig from '../../gatsby-config'
import '../styles/index.css'

export default function Home() {
  const data = useStaticQuery(graphql`
    query HomeQuery {
      notes: allMdx(
        filter: { fields: { visibility: { eq: "public" } } }
      ) {
        edges {
          node {
            excerpt
            fields {
              slug
              title
              date
            }
            frontmatter {
              tags
            }
          }
        }
      }
    }`)

  const getByTag = function (tag) {
    return data.notes.edges.filter(note => {
      if(note.node.frontmatter.tags)
        return note.node.frontmatter.tags.includes(tag)
      return false
    })
  }

  function getNotesTagged(tag) {
    return (<ul className="bias-list">{getByTag(tag).map( (note, index) => (
      <li key={index}><Link to={note.node.fields.slug} className="flaw-name">{note.node.fields.title}</Link>: <span className="flaw-desc">{note.node.excerpt}</span></li>
    ))}</ul>)
  }

  return (
    <Layout title="Thinking Flaws - Cognitive Biases, Fallacies and More" type="home">
      <div className="column is-half-widescreen is-two-thirds-desktop">
        <div className="note-page-section">
          <div className="block">
            <h1>{siteConfig.siteMetadata.title}</h1>
            <p className="lead">{siteConfig.siteMetadata.description}</p>
          </div>

          <p>Every cognitive bias is there for a reason - primarily to save our brains time or energy. If you look at them by the problem they’re trying to solve, it becomes a lot easier to understand why they exist, how they’re useful, and the trade-offs(resulting mental errors) that they introduce.</p>

          <p>Cognitive Biases addresses these issues...</p>

          <ul>
            <li><a href="#info-overload">1. Information overload</a>
            <ul>
              <li><a href="#cbias-notice-primed-repeated">Notice only that are primed or repeated</a></li>
              <li><a href="#cbias-notice-specific">Bizarre/funny/visually-striking/anthropomorphic are more noticeable</a></li>
              <li><a href="#cbias-notice-change">Change is Noticed Prominantly</a></li>
              <li><a href="#cbias-notice-confirmation">Drawn to details that confirms existing beliefs</a></li>
              <li><a href="#cbias-notice-others-flaws">We notice flaws in others easier than in ourselves.</a></li>
            </ul>
            </li>

            <li><a href="#no-meaning">2. Not enough meaning</a>
            <ul>
              <li><a href="#cbias-meaning-from-little-data">We find patterns and meaning even with little data</a></li>
              <li><a href="#cbias-meaning-from-stereotypes">We jump to conclusions using stereotypes, generalities, past occurrences.</a></li>
              <li><a href="#cbias-known-things-better">Belief that liked or known things are better</a></li>
              <li><a href="#cbias-math-simplification">Simplification of Probability and Numbers</a></li>
              <li><a href="#cbias-guess-thoughts">We think we know what others think</a></li>
              <li><a href="#cbias-project-mind-state">Current mind state is projected to past and future</a></li>
            </ul>
            </li>

            <li><a href="#act-fast">3. We have to act fast</a>
            <ul>
              <li><a href="#cbias-act-fast-important">To act, we should feel important and impactful</a></li>
              <li><a href="#cbias-favor-immediate">Favor immediate, known things over distant ones</a></li>
              <li><a href="#cbias-finish">We want to finish things we have invested in</a></li>
              <li><a href="#cbias-autonomy">We want to have autonomy and status. Also, we want to avoid irreversable decisions</a></li>
              <li><a href="#cbias-prefer-simple">We prefer simple or complete options over complex, ambiguous options</a></li>
            </ul>
            </li>

            <li><a href="#what-to-remember">4. What to remember</a>
            <ul>
              <li><a href="#cbias-memory-edit">We edit memories after the event</a></li>
              <li><a href="#cbias-memory-general">We discard specifics to create generalizations</a></li>
              <li><a href="#cbias-reduce-to-key">We reduce events and lists to its key elements</a></li>
              <li><a href="#cbias-memory-experience">We store memory differently based on how the experience was</a></li>
            </ul>
            </li>
          </ul>

        </div>

        <div className="note-page-section">
          <h3 className="section-header" id="info-overload">1. Information overload</h3>

          <p>Our brain filters out information that it thinks is not important. There is too much information available - its not practical to process all of it.</p>

          <h4 id="cbias-notice-primed-repeated">Notice only that are primed or repeated</h4>
          { getNotesTagged("cbias-notice-primed-repeated") }

          <h4 id="cbias-notice-specific">Bizarre/funny/visually-striking/anthropomorphic are more Noticeable</h4>
          <p>We generally skip information that's ordinary or expected.</p>
          { getNotesTagged("cbias-notice-specific") }

          <h4 id="cbias-notice-change">Change is Noticed Prominantly</h4>
          { getNotesTagged("cbias-notice-change") }

          <h4 id="cbias-notice-confirmation">Drawn to details that confirms existing beliefs</h4>
          <p>And ignore/miss details that contridicts our beliefs</p>
          { getNotesTagged("cbias-notice-confirmation") }

          <h4 id="cbias-notice-others-flaws">We notice flaws in others easier than in ourselves.</h4>
          { getNotesTagged("cbias-notice-others-flaws") }
        </div>

        <div className="note-page-section">
          <h3 className="section-header" id="no-meaning">2. Not enough meaning</h3>
          <p>The world is too complex to understand fully. So we compensate by filling in the gaps of our understanding to make better sense of it - or at least have a belief that we have an understanding of the world. We assign meaning to the world - we do our own sensemaking.</p>

          <h4 id="cbias-meaning-from-little-data">We find patterns and meaning even with little data</h4>
          <p>Our brain needs to feel that it has a coherent model/story about the situation - even if we have too little information about it.</p>
          { getNotesTagged("cbias-meaning-from-little-data") }

          <h4 id="cbias-meaning-from-stereotypes">We jump to conclusions using stereotypes, generalities, past occurrences.</h4>
          <p>When we have only limited information/gap in knowledge we tend to fill in the gaps using best guesses from stereotypes and generalities. Once its done, we can't easily determine which part is real and which part is filled up.</p>
          { getNotesTagged("cbias-meaning-from-stereotypes") }

          <h4 id="cbias-known-things-better">Belief that liked or known things are better</h4>
          <p>Belief that people/things we like or familiar with are better than that we don't like/are familiar with.</p>
          { getNotesTagged("cbias-known-things-better") }

          <h4 id="cbias-math-simplification">Simplification of Probability and Numbers</h4>
          <p>Subconscious mind is bad at maths - and uses simplification to optimize decision making. This can get wrong results.</p>
          { getNotesTagged("cbias-math-simplification") }

          <h4 id="cbias-guess-thoughts">We think we know what others think</h4>
          <p>We model the thinking of other people based on our own mind or a much simpler mind than ours.</p>
          { getNotesTagged("cbias-guess-thoughts") }

          <h4 id="cbias-project-mind-state">Current mind state is projected to past and future</h4>
          { getNotesTagged("cbias-project-mind-state") }
        </div>

        <div className="note-page-section">
          <h3 className="section-header" id="act-fast">3. We have to act fast</h3>
          <p>We evolved with the need to make quick decisions when faced with limited time and information. This programming continues in the present time in form of these thinking flaws.</p>

          <h4 id="cbias-act-fast-important">To act, we should feel important and impactful</h4>
          { getNotesTagged("cbias-act-fast-important") }

          <h4 id="cbias-favor-immediate">Favor immediate, known things over distant ones</h4>
          <p>We favor present over future. Stories about specific individuals over anonymous person.</p>
          { getNotesTagged("cbias-favor-immediate") }

          <h4 id="cbias-finish">We want to finish things we have invested in</h4>
          <p>Helps us to finish things, even with difficult. Actions have inertia - once started its easier to continue.</p>
          { getNotesTagged("cbias-finish") }

          <h4 id="cbias-autonomy">We want to have autonomy and status. Also, we want to avoid irreversable decisions</h4>
          { getNotesTagged("cbias-autonomy") }

          <h4 id="cbias-prefer-simple">We prefer simple or complete options over complex, ambiguous options</h4>
          { getNotesTagged("cbias-prefer-simple") }
        </div>

        <div className="note-page-section">
          <h3 className="section-header" id="what-to-remember">4. What to remember</h3>
          <p>We have to prioritize what to remember and what to discard. We have a set of filters that will help us do this - but it can cause issues too.</p>

          <h4 id="cbias-memory-edit">We edit memories after the event</h4>
          { getNotesTagged("cbias-memory-edit") }

          <h4 id="cbias-memory-general">We discard specifics to create generalizations</h4>
          { getNotesTagged("cbias-memory-general") }

          <h4 id="cbias-reduce-to-key">We reduce events and lists to its key elements</h4>
          <p>We chose a few items to represent the whole.</p>
          { getNotesTagged("cbias-reduce-to-key") }

          <h4 id="cbias-memory-experience">We store memory differently based on how the experience was</h4>
          <p>Our brain will save things that it thinks is important. Importantce is judged based on the situation - not just the value of the information. Eg. Traumatic memories can be very strong.</p>
          { getNotesTagged("cbias-memory-experience") }
        </div>

        <div className="note-page-section">
          <h3>Credits</h3>

          <p>I've stood on the sholders of gaints to create this site. Most of the heavy lifting was done by brilliant people before me...</p>

          <ul>
          <li>Many Psycologists over the last few decades who did the original research.</li>
          <li>All the wikipeda contributers for biases I have listed. Most of the source in the bias leads you to a wikipeda page.</li>
          <li><a href="https://betterhumans.pub/cognitive-bias-cheat-sheet-55a472476b18">Buster Benson</a> for categorization and clustering.</li>
          {/*<li>John Manoogian III for converting this into a very helpful <a href="https://www.designhacks.co/products/cognitive-bias-codex-poster">poster</a>.</li>*/}
          </ul>
        </div>
      </div>
    </Layout>
  )
}
