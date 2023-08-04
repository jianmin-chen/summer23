import { useEffect, useState, useRef } from 'react'
import styles from './Timeline.module.scss'
import { choose, approx } from '@/utils'
import { motion, useDragControls } from 'framer-motion'
import modalStyles from './Modal.module.scss'

const postit = ['#74ed4b', '#ff7eb9', '#ffa930', '#feff9c']

export function useHorizontalScroll() {
  const elRef = useRef()
  useEffect(() => {
    const el = elRef.current
    if (el) {
      const onWheel = e => {
        if (
          (e.deltaY < 0 && el.scrollLeft === 0) ||
          (e.deltaY > 0 && approx(el.scrollWidth - el.scrollLeft, 0))
        )
          return
        e.preventDefault()
        if (e.deltaY === 0) {
          el.scrollTo({
            left: el.scrollLeft + e.deltaX,
            behavior: 'smooth'
          })
          return
        }
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 3,
          behavior: 'smooth'
        })
      }
      el.addEventListener('wheel', onWheel)
      return () => el.removeEventListener('wheel', onWheel)
    }
  }, [])
  return elRef
}

let entries = {
  '06/23': {
    content: (
      <>
        <p>
          Eek, have a shit ton of stuff I'll be working on. Leaving for Vermont
          tomorrow! I won't be able to stay at{' '}
          <a href="https://hackclub.com" target="_blank">
            Hack Club HQ
          </a>{' '}
          the whole way through but I'm still super excited to meet the awesome
          people I'll be working with (specifically, <a href="">Jammers</a>
          !), and maybe eat a bagel at Burlington Bagel Bakery again. We'll see!
        </p>
        <p>
          In preparation, I need to go pack my bag, which I still haven't done.
        </p>
      </>
    )
  },
  '06/24': {
    content: (
      <>
        <p>
          Left at 8:50AM, got to Burlington at 5:40PM. Ate out at a local diner
          -{' '}
          <a href="http://www.alsfrenchfrys.com/" target="_blank">
            Al's French Frys!
          </a>{' '}
          - and then met my new roommates, who it turns out had invited a bunch
          of people over! Seven people in total. We made burgers, curly fries,
          and salad together, talked a bit, and watched{' '}
          <a href="https://www.netflix.com/title/81643622" target="_blank">
            Missing
          </a>{' '}
          together. Holy crap, I was either laughing so hard or trying hard not
          to look at the screen. I'm honestly nervous when it comes to new
          people, but it was so much fun! Tomorrow we'll be going to a
          renaissance fair, which I've never been to before. We'll see how it
          goes; someone bought a $70 cowboy hat for the occasion! Anyways,
          writing this and finishing up my{' '}
          <a href="https://beaverworks.ll.mit.edu/CMS/bw/bwsi" target="_blank">
            BWSI
          </a>{' '}
          courses right now. It's close to 12AM!
        </p>
        <p>
          Oh, I forgot to mention what I did on the bus. Well, first of all,{' '}
          <a
            href="https://en.wikipedia.org/wiki/Union_Station_(Albany,_New_York)"
            target="_blank">
            Albany's Union Station
          </a>{' '}
          stinks. Would not recommend, -infinity/10. I wanted to puke so bad,
          but it smelled like weed outside and was humid, so I had no choice but
          to stay inside. That being said, the WiFi also sucked, so I did a lot
          of work on Marrow and also started reading{' '}
          <a
            href="https://en.wikipedia.org/wiki/G%C3%B6del,_Escher,_Bach"
            target="_blank">
            Godel, Escher, Bach
          </a>
          .
        </p>
      </>
    )
  },
  '06/25': {
    content: (
      <>
        <p>
          Exhausting but fun day! Went to my first renaissance fair. Lot of fun
          seeing the costumes, but it was so freakin' hot. Afterwards, went to{' '}
          <a
            href="https://skinnypancake.com/locations/stowe-downtown"
            target="_blank">
            Skinny Pancakes
          </a>
          , but I didn't eat anything because right afterwards we headed over to{' '}
          <a href="https://woodykeppel.com/" target="_blank">
            Woody Keppel
          </a>
          's house for a potluck dinner and to watch a band,{' '}
          <a href="https://signalkitchen.com/artist/mal-maiz/" target="_blank">
            Mal Maiz
          </a>
          , play music. Literally so fun! The food people bought was so good,
          and even though it started raining halfway, the show was still super
          enjoyable (did I forget to mention that there was a plate spinning
          introduction?) and we played some Man in the Middle with a football
          while dancing to the music in the rain, which was honestly so fun.
        </p>
        <p>
          Coming home, some interesting music was played in the car, so they're
          both going in my playlist:{' '}
          <a
            href="https://open.spotify.com/track/46lFttIf5hnUZMGvjK0Wxo?si=389ca3000e574a4d"
            target="_blank">
            Runaway (U &amp; I)
          </a>{' '}
          and{' '}
          <a
            href="https://open.spotify.com/track/60eOMEt3WNVX1m1jmApmnX?si=473ebb9fefa947d7"
            target="_blank">
            Live in the Moment
          </a>
          . The latter has these two verses:
        </p>
        <blockquote>
          <p>Let's live in the moment</p>
          <p>Come back Sunday morning</p>
        </blockquote>
        <p>Um, it's a Sunday today! What a coincidence.</p>
        <p>
          I decided on a whim to run to HC HQ tomorrow morning (7.7 miles, I
          just checked), with my roommate, which is exciting because I get to
          see all the scenery as the sun rises (that is if it isn't cloudy
          tomorrow), but also I'm sure pretty traumatic because I think I've
          only ever run that far once.
        </p>
        <p>
          Anyways, I need to sign off now. I smell like grass but I'm going to
          shower tomorrow.
        </p>
      </>
    )
  },
  '06/26': {
    content: (
      <p>
        Writing this the day after! I actually ran 7.7 miles and did my first
        day at HQ. Also ate an entire party-size bag of Doritos. Afterward, a
        group of us had taco dinner and stayed up until 1 AM playing Uno in
        Steve (apartment). We then decided to head over to HQ to sleep there for
        the night, which meant curling up on the couch together and watching{' '}
        <a
          href="https://en.wikipedia.org/wiki/Mamma_Mia!_(film)"
          target="_blank">
          Mamma Mia
        </a>
        . I actually promptly fell asleep a solid fifteen minutes after the
        movie started, so I didn't watch it. The music is good to sleep too. The
        couch was so fucking tight that my back hurts so much, but it was also
        really cozy and I felt like I actually belonged. Like someone put their
        head on my shoulder, I kept kicking someone in the shins, and somebody
        was sleeptalking. You know, the awkward but sweet kind of close. There
        was six of us on one couch! How the fuck is that possible!
      </p>
    )
  },
  '06/27': {
    content: (
      <>
        <p>Woke up at five today! Slept a solid four hours. Maybe.</p>
        <p>
          Today was pretty solid! I spent most of the day programming. For
          lunch, we invited{' '}
          <a
            href="https://en.wikipedia.org/wiki/Jeffrey_Hollender"
            target="_blank">
            Jeffrey Hollender
          </a>
          , who founded one of the first sustainable cleaning solution
          companies, to come have a little picnic chat with us. His son, who
          actually led Wikipedia's redesign project, also came and talked about
          that a bit!
        </p>
        <p>
          Also had my first team sync today, followed by Ben &amp; Jerry's ice
          cream right after.{' '}
          <a href="https://conradkramer.com/" target="_blank">
            Conrad Kramer
          </a>{' '}
          is here! Honestly adults are so intimidating but I really liked
          listening to his conversations with other people even though I really
          don't know much about Rust, etc. I need to add that to my summer
          bucket list.
        </p>
        <p>
          Had another dinner party at someone else's apartment! This one was
          more lowkey, I helped make some spicy vegan pasta (courtesy of curry),
          and then we sat around with the vinyl player on playing Hangman and
          chess. We were originally going to go to a comedy special, but I don't
          regret anything. Actually, that reminds me of a quote I heard a while
          ago: when you're stuck between decisions that all have good outcomes,
          decide on the one that will make you regret the least. I need to write
          that down.
        </p>
        <p>Tomorrow I have to actually wake up early and get work done.</p>
        <p>
          I remember my mom used to make me keep a diary, but there was no point
          because my life was so boring I would write about what I ate for
          breakfast everyday. Now I can't stop writing because life is so
          fucking exciting. I feel so fucking alive even though I have 3
          mosquito bites, 2 back pain hotspots, and 1 sleepy brain.
        </p>
      </>
    )
  },
  '06/28': {
    content: (
      <p>
        Mostly another day of work! Afterwards we went to an{' '}
        <a href="https://rira.com/burlington/" target="_blank">
          Irish pub
        </a>{' '}
        in the middle of Burlington. People may or may not have bought alcohol
        with a fake ID. Then we went to the{' '}
        <a href="https://www.vermontcomedyclub.com/" target="_blank">
          Vermont Comedy Club
        </a>{' '}
        for Wednesday Open Mic night. Some of the sets were hilarious, but by
        the end of the night, I had enough of penis jokes. Pretty fun though!
      </p>
    )
  },
  '06/29': {
    content: (
      <>
        <p>
          Okay, I'm actually going to get shit done today. I came up with a
          standup set! Maybe I'll perform locally in Boston this summer ;)
          Adding that to my bucket list right now. It goes like this, although
          more will be added to it:
        </p>
        <details>
          <summary>The perils of AI?!</summary>
          <p>Ha did you think you were really going to see this?</p>
        </details>
        <p>
          I'm sitting at Tracy House right now and wrapping up a couple of
          writing things. I've been permitted to stay for a little bit longer,
          but I have a very long TODO that I feel like I need to check off to
          prove that I'm actually working on shit and not just like, nothing?
          Then it feels like I'm wasting other people's money and time.
        </p>
        <p>
          I'll just take a chill day at the apartment and work on this stuff.
        </p>
      </>
    )
  },
  '06/30': {
    content: (
      <p>
        Another day of work, then had a pizza party afterwards! We all made out
        own pizzas, took way too much Polaroids, and then played Frisbee and had
        a discussion on browser vulnerabilities. Other thing: I cut a whole ass
        zucchini with a sword that{' '}
        <a href="https://www.clairebookworm.com/" target="_blank">
          Claire
        </a>{' '}
        got from Amazon for{' '}
        <a href="https://www.angelhacks.org/" target="_blank">
          AngelHacks
        </a>
        ! Thomas happened to bring it to HQ.
      </p>
    )
  },
  '07/01': {
    content: (
      <p>
        One of my roommates was in Canada so my other roommate and I went to the
        Y. I really should have eaten something, but it was okay. Afterwards I
        took a walk around the Church Street Marketplace. Highlights: used
        bookstore that Belle recommended (except I couldn't find any books that
        I could, you know, afford and that I also found interesting). Afterwards
        bought some canned pineapples and had a dinner with some people and
        watched the latest season of{' '}
        <a href="https://www.itv.com/loveisland" target="_blank">
          Love Island: UK
        </a>
        . Never watched it before, but now we're going to Love Island: Hack Club
        (not related to romance in case you were wondering, but more like: "My
        hobby is centering <code>div</code>s" kind of thing), which I can't
        decide is concerning or amusing.
      </p>
    )
  },
  '07/02': {
    content: (
      <p>
        Stayed at home alone today. Did a bit of cleaning, wrote a lot of code.
        The weather outside was also pretty shitty so I did enjoy having a day
        alone to myself and playing music as loud as possible on the TV
        speakers. You know, it's pretty wack and sometimes I think: how am I
        living this life? How did I get here to this amazing place? I don't know
        how to explain myself but here's a song that does:{' '}
        <a
          href="https://open.spotify.com/track/6amCnsZtvoD3qzjZIk8Tsi?si=98ad2264fa094e2e"
          target="_blank">
          Someone Else's Problem
        </a>
        .
      </p>
    )
  },
  '07/03': {
    content: (
      <>
        <p>
          First up, today was a great day. I got actual work done, and then we
          went to{' '}
          <a
            href="https://www.lakechamplainregion.com/living-here/towns-and-villages/essex"
            target="_blank">
            Lake Champlain
          </a>{' '}
          to watch Burlington's{' '}
          <a
            href="https://enjoyburlington.com/event/july-third-fireworks/"
            target="_blank">
            annual fireworks show
          </a>
          . Even though I have like fifteen billion mosquito bites, it was so
          worth it because the food was good, the sunset was great, the concert
          was great, and the drone show followed by fireworks right after was
          fucking amazing.
        </p>
        <p>
          Now onto thoughts. I was basically sitting there, watching the
          fireworks, when I started thinking about the last few days and
          realized: I'm in a new era of my life. I don't how to explain it, but
          I felt like watching these fireworks with people that I had grown
          close and comfortable with and actually being able to mentally relax
          and let down my walls because my abusive mom wasn't there made me feel
          like I was at home for the first time in my life. This thought is
          basically replicated in the song I recommended yesterday.
        </p>
      </>
    )
  },
  '07/04': {
    content: (
      <p>
        Took a break for most the day! Ended up going to HQ for a while, then
        buying stuff to have a hot pot at our place. Ended up having said hot
        pot, a few more people came. Watched Love Island: UK again (argh!) but
        thankfully everyone protested and we ended up watching an episode of
        Black Mirror (the one with the{' '}
        <a
          href="https://en.wikipedia.org/wiki/The_Entire_History_of_You"
          target="_blank">
          meme face
        </a>
        ), and then{' '}
        <a href="https://www.netflix.com/title/60034551" target="_blank">
          <em>Mean Girls</em>
        </a>
        . I'd never watched <em>Mean Girls</em> before, so oh my god was it
        fucking hilarious.
      </p>
    )
  },
  '07/05': {
    content: (
      <p>
        Nothing, mostly. Went to sleep at 1AM the night before so I literally
        just went home after work, ate some leftovers, watched{' '}
        <a href="https://en.wikipedia.org/wiki/San_Junipero" target="_blank">
          Black Mirror: San Junipero
        </a>{' '}
        (that's the queer one, and it's so good and bittersweet because you know
        they don't exist physically but they're still kind of living their lives
        out in their death???), wrote for a while, and then clunked out straight
        to sleep.
      </p>
    )
  },
  '07/06': {
    content: (
      <>
        <p>
          Writing this on the bus! Pretty chill day today. Worked a lot on{' '}
          <a href="https://github.com/jianmin-chen/pokegotchi" target="_blank">
            Pokegotchi
          </a>{' '}
          (yes we now have a name!). Going to buy some groceries at the
          supermarket so we can run the hackathon tomorrow. My last day is going
          to be so busy and hopefully a sad :( goodbye party of sorts. On the
          list of things that are going to happen tomorrow are:
        </p>
        <ul>
          <li>Hackathon where the first iteration of Jams is being written!</li>
          <li>Lunch with Zach. Cool stuff!</li>
          <li>BBQ at the beach with a bunch of people!</li>
        </ul>
        <p>
          Tonight and tomorrow morning I have to do a lot of cleanup, like a
          lot:
        </p>
        <ul>
          <li>Take one last shower here.</li>
          <li>Finish slides for Sprig jam</li>
          <li>
            Finish some last things on my Markdown parser, which I'm rewriting
            so I can use for writing my Pokedex jam.
          </li>
        </ul>
        <p>I don't wanna go :(</p>
      </>
    )
  },
  '07/07': {
    content: (
      <>
        <p>(Written the day after)</p>
        <p>
          Last day of work in-person! Hackathon after work went super well. We
          had pizza, got hacking. Spent the entire night alternating between
          different playlists (okay, let's be honest, I played the most music)
          and working on different projects. Jammed away the entire night, had a
          chair fall down the stairs, played Among Us at 3AM. No expectations,
          no awards, and according to one person, one of the most fun hackathons
          they've been to. It was the right choice to do this! Originally wanted
          to walk on Church Street and go to sleep early but now I know this was
          the best decision I've ever made. Once again, I think the law of
          regret is in play again.
        </p>
      </>
    )
  },
  '07/08': {
    content: (
      <>
        <p>
          Time to go home :( Reflecting back, this has been the most
          life-changing two weeks of my entire life, and I don't think a month
          in Boston is going to change that. That being said, this isn't a
          bye-bye, I'm seeing most of these people again in the future!
        </p>
        <p>
          I loved the big events, the after-work drives with music blasting in
          the car, having dinner parties nearly every night at different
          people's homes, making fun of people's fake IDs and drinking way too
          much White Claw, walks at night, but most importantly feeling at home
          for the first time in my life.
        </p>
        <p>
          I think I'm going to write a longer, more philosophical essay on my
          stay.
        </p>
        <blockquote>
          <p>I just wanna, I just wanna know</p>
          <p>If you're gonna, if you're gonna stay</p>
          <p>I just wanna, I just wanna know</p>
          <p>I can't have it, I can't have it any other way</p>
        </blockquote>
      </>
    )
  },
  '07/09': {
    content: (
      <>
        <p>
          Bus ride to Boston. I can't believe I managed to package a month's
          worth of shit into one suitcase, and a broken one at that.
        </p>
        <p>
          Anyways, I'm writing this at 10 PM, trying to build the website for a
          hackathon I'm helping organize. (Yes I know, at this point I think
          it's an addiction.)
        </p>
        <p>
          I arrived in Boston around 1:00PM, got to my apartment and organized
          everything by ~2:00PM, and then met up with some other people to get
          ice cream at the{' '}
          <a
            href="https://newcitymicrocreamery.com/newcitymicrocreamerycambridge"
            target="_blank">
            Microcreamery
          </a>{' '}
          (I really should have taken pictures) and then came home, then walked
          a mile to buy groceries from Target, then found out promptly that
          there was a Dollar Tree and Chinese supermarket closer to us while
          walking the mile back with a seven-pound grocery bag. Fun!
        </p>
        <p>
          Anyways, class starts tomorrow, so I really should go to sleep! 160mg
          of coffee is not doing anything for me.
        </p>
      </>
    )
  },
  '07/10': {
    content: (
      <>
        <p>(Written on 07/12)</p>
        <p>
          First day of BWSI! Sat in the auditorium for way too much. I fell
          asleep during{' '}
          <a href="https://cmsw.mit.edu/people/lecturers/" target="_blank">
            Jane Abbott
          </a>
          's lecture, but I got away. Also got lost around MIT around 15 times,
          so doing super great. Also lots of merch. That's it.
        </p>
      </>
    )
  },
  '07/11': {
    content: (
      <>
        <p>(Written on 07/12)</p>
        <p>
          We got to try out the underwater robots in MIT's rec center!
          Specifically, the kiddie pool. We were all making jokes because it
          turns out some kid <del>pooped</del> defecated in the pool, and we had
          to reach our hands into the pool to pull the robots out. Anyways, the
          robots are so freakin' cool! I can't wait to actually get to program
          them. Oh, that reminds me, I need to borrow{' '}
          <a
            href="https://en.wikipedia.org/wiki/The_Hunt_for_Red_October"
            target="_blank">
            <em>The Hunt for Red October</em>
          </a>{' '}
          because apparently it's a bigger scale version of the challenge we'll
          be doing at the end of the program.
        </p>
        <p>
          The college night fair thing was super boring, but the people I met
          totally made up for it. Left a couple of minutes after the booths
          opened, because they're just handing out pamphlets that I would have
          received in the mail anyways.
        </p>
      </>
    )
  },
  '07/12': {
    content: (
      <>
        <p>
          Sitting in{' '}
          <a href="https://www.bpl.org/locations/central/" target="_blank">
            Boston Public Library - Central
          </a>{' '}
          right now! Holy heck it's so big. I borrowed three of the books on my
          summer reading list:{' '}
          <a href="http://raytracerchallenge.com/" target="_blank">
            <em>The Ray Tracer Challenge</em>
          </a>{' '}
          (yes it's time to update that post),{' '}
          <em>The Rust Programming Language</em>, and <em>A Tour of C++</em>,
          basically all things I'd like to learn this summer. I also have
          Gilbert Strang's <em>Linear Algebra</em> and <em>Calculus</em> on my
          computer as <code>gilbert strang is the man.pdf</code> (LOL) and{' '}
          <code>Calculus.pdf</code>, so much for learning Spanish.
        </p>
        <p>
          Anyways, I need to catch up on math. I think everyone else I've met
          are definitely more math- and/or robotics- oriented, but I'm more
          programming oriented. I think I definitely recognized this when we
          were writing a simulation for calculating acceleration, velocity, and
          position of a still ROV today, and I was struggling with the math.
        </p>
      </>
    )
  },
  '07/13 - 07/19': {
    content: <p>Your usual: seminars and such!</p>
  },
  '07/20': {
    content: (
      <>
        <p>fucking parents, trigger warning, should i make this public</p>
      </>
    )
  },
  '07/21': {
    content: (
      <>
        <p>(Written some days later)</p>
        <p>Went on a field trip to Draper</p>
      </>
    )
  },
  '07/22': {
    content: (
      <>
        <p>(Written some days later)</p>
        <p>
          Hanging out at allston-honan, walking down to harvard, thoughts on
          harvard vs. mit, watching sun set going home
        </p>
      </>
    )
  },
  '07/23': {
    content: (
      <>
        <p>(Written some days later)</p>
        <p>
          A bunch of people (Dieter, Arianna, Sahiti, Zoya, and Sarthak) came
          down to Boston today! Actually, I got to han
        </p>
      </>
    )
  },
  '07/24 - 07/25': {
    content: (
      <>
        <p>the usual, boring</p>
      </>
    )
  },
  '07/26': {
    content: (
      <>
        <p>BWSI's women's networking dinner</p>
      </>
    )
  },
  '07/27': {
    content: (
      <>
        <p>the usual, boring</p>
      </>
    )
  },
  '07/28': {
    content: (
      <>
        <p>
          Driving down in Kara's Tesla, first day of hackathon, meeting Sophia
          and Andrew
        </p>
      </>
    )
  },
  '07/29': {
    content: (
      <>
        <p>
          Second day of hackathon: pairing activities, leaders meetup, rave at
          midnight, falling asleep with outerlan folks, wet shoes
        </p>
      </>
    )
  },
  '07/30': {
    content: (
      <>
        <p>
          Final day of hackathon: actually working on projects, build your own
          boat fun, terminal selfie and other cool projects, listening to
          closing ceremony and crying, spaghetti and reading why's book but
          feeling sad, campfire and falling asleep{' '}
        </p>
      </>
    )
  },
  '07/31': {
    content: (
      <>
        <p>
          going back to boston, going for the longest run ever, reading slutty
          pig, thinking about building this
        </p>
      </>
    )
  },
  '08/01': {
    content: (
      <>
        <p>recovering</p>
      </>
    )
  },
  '08/02': {
    content: (
      <>
        <p>Checking out Hayden Library</p>
      </>
    )
  },
  '08/03': {
    content: <p>finishing up this website</p>
  }
}

Object.keys(entries).map(date => {
  entries[date].color = choose(postit)
})

export function Modal() {
  return (
    <div className={modalStyles.wrapper}>
      <style jsx global>{`
        body,
        html {
          overflow-y: hidden;
        }
      `}</style>
      <div className={modalStyles.modal}>
        <div className={styles.container}>hi</div>
      </div>
    </div>
  )
}

export default function Timeline() {
  const scrollRef = useRef(null)
  const drag = useDragControls()
  const [modal, setModal] = useState(false)

  return (
    <div className={styles.container}>
      {modal === true && <Modal />}
      <motion.div drag="x" dragControls={drag} />
      <marquee>
        <button>share your own, pls &darr;</button>
      </marquee>
      <div
        onPointerDrag={event => drag.start(event)}
        className={styles.timeline}
        ref={scrollRef}>
        {Object.keys(entries)
          .sort((a, b) => Date(a.split(' - ')[0]) - Date(b.split(' - ')[0]))
          .map(date => (
            <div
              key={date}
              className={styles.info}
              style={{ backgroundColor: entries[date].color }}>
              <h2>{date}</h2>
              {entries[date].content}
            </div>
          ))}
      </div>
    </div>
  )
}
