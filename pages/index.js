import Lyrics from '@/components/Lyrics'
import figlet from 'figlet'
import { useResizeDetector } from 'react-resize-detector'
import ResizeContext from '@/components/ResizeContext'
import { rotate } from '@/utils.js'
import dynamic from 'next/dynamic'
import SignHere from '@/components/SignHere'
import { createClient } from '@supabase/supabase-js'

const PhotoAlbum = dynamic(() => import('@/components/PhotoAlbum'), {
  ssr: false
})

const Timeline = dynamic(() => import('@/components/Timeline'), {
  ssr: false
})

export default function Index({ name, signs }) {
  const { width, height, ref } = useResizeDetector()

  return (
    <div>
      <div id="flex">
        <div>
          <Lyrics
            lyrics={[
              "Since I've gotten older, I've realized",
              "We all care about things that don't really matter",
              "And now, we're all tryna keep our heads above the water",
              "But what if we don't wanna?",
              "If there's something you wanna do, just do it",
              "Don't let your head stop your heart from moving",
              "If there's someone you wanna talk to, talk to 'em",
              "Who knows who we'd be",
              'If we just live more and love more',
              "Have some heart, but make sure it's open",
              "Take that risk, 'cause time gets stolen",
              'Maybe speak less and listen more',
              "'Cause, life's too short, you only have one",
              'It might sound cliche, but your life can start when you choose it to'
            ]}
            background="#66788A"
            embed={
              <iframe
                src="https://open.spotify.com/embed/track/0JzXOFasHsqh3lvm8wIAGi?utm_source=generator"
                width="100%"
                height="152"
                allowFullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            }
          />
          <Lyrics
            lyrics={[
              "I just need some time, I'm tryna think straight",
              'I just need a moment in my own space',
              'Ask me how I\'m doin\', I say "okay"',
              "Yeah, but ain't that what we all say?",
              'Sometimes I think back to the old days',
              'In the pointless conversations with the old me',
              'I wish somebody woulda told me',
              "If you want love, you gon' have to go through the pain",
              "If you want love, you gon' have to learn how to change",
              "If you want trust, you gon' have to give some away",
              'Look, as a kid I used to think life',
              'Is moving so slow, I watch it go by',
              'Look out the window on my bus ride',
              'I thought the world was so small, through my closed eyes',
              "The older I get, I feel like I'm always tryna save time",
              "Talkin' to the voices in my head, they make me think twice",
              "Tellin' me it doesn't mean it's wrong because it feels right",
              "I'm scared that one day I wake up and wonder where the time go",
              "Talk about the past like it's the present while I rock slow",
              "I'll sit in the living room and laugh with kids of my own"
            ]}
            background="#64798b"
            embed={
              <iframe
                src="https://open.spotify.com/embed/track/3i5qVV8azKqGFK4Gzdt5YS?utm_source=generator"
                width="100%"
                height="152"
                allowFullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            }
          />
          <Lyrics
            lyrics={[
              'I wanna run away',
              'Anywhere out this place',
              'Just you and I, I, I, I, I'
            ]}
            background="#b25889"
            embed={
              <iframe
                src="https://open.spotify.com/embed/track/46lFttIf5hnUZMGvjK0Wxo?utm_source=generator"
                width="100%"
                height="152"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            }
          />
          <Lyrics
            lyrics={[
              "I wrote it all down, don't know what came over",
              'But I think I know now which memories I need to keep',
              "And I cried on a plane next to a woman I don't know",
              "And I looked insane, but I couldn't hold it in",
              "I hate the fact you're rich and worried 'bout fame",
              "Adelaide in April, when we danced 'til everyone was gone",
              'Sitting in a treehouse, drinking coffee, walking the dogs',
              'Simple in the nighttime feels so full calling you love',
              'Pressing my forehead to yours, call it magic',
              'We sound so insane, but how lucky are we to have it?'
            ]}
            background="#9d6960"
            embed={
              <iframe
                src="https://open.spotify.com/embed/track/0ffR94ZvwbnvyVrjdV4Ckj?utm_source=generator"
                width="100%"
                height="152"
                allowFullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            }
          />
          <Lyrics
            lyrics={[
              'I be looking through the photo album, you remember all the good old days? K Swiss and polo down',
              "And mama had to put a down payment by herself and ain't nobody even try to help",
              'She went to jail and shit went left, and I was left',
              'I did my best, I needed rest, I got arrested',
              "Everybody looking at me like I'm not invested",
              'Bitch, you know how hard I was stressing?',
              "Please don't call me with weekend plans",
              "I'm ripping out all my hair",
              "And, bitch, I don't even dance",
              'But sometimes I like to',
              'Juk, juk, juk',
              'I be looking through the',
              'Photo album, but the color faded from it',
              "If I could go back and tell you how it ends, I would've done it",
              "Don't look down"
            ]}
            background="#d6403f"
            embed={
              <iframe
                src="https://open.spotify.com/embed/track/44KWbTVZev3SWdv1t5UoYE?utm_source=generator"
                width="100%"
                height="152"
                allowFullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            }
          />
          <Lyrics
            lyrics={[
              'Those days are gone, now the memories on the wall',
              'I hear the songs from the places where I was born',
              'There was a time, I met a girl of a different kind',
              "We ruled the world, I thought I'll never lose her out of sight",
              'We were so young, I think of her now and then',
              'I still hear the songs, reminding me of a friend',
              'Up on the hill across the blue lake',
              "That's where I had my first heartbreak",
              'I still remember how it all changed',
              'My father said',
              '"Don\'t you worry, don\'t you worry, child"',
              "See heaven's got a plan for you"
            ]}
            background="#757575"
            embed={
              <iframe
                src="https://open.spotify.com/embed/track/2V65y3PX4DkRhy1djlxd9p?utm_source=generator"
                width="100%"
                height="152"
                allowFullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            }
          />
          <Lyrics
            lyrics={[
              'Oooooh la la la la la',
              "Let's live in the moment",
              'Come back Sunday morning',
              'Oh my, oh well',
              "When you're gone",
              'Goodbye, so long, farewell',
              'Come and watch the garden grow'
            ]}
            background="#d84013"
            embed={
              <iframe
                src="https://open.spotify.com/embed/track/60eOMEt3WNVX1m1jmApmnX?utm_source=generator"
                width="100%"
                height="152"
                allowFullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            }
          />
          <SignHere
            side="left"
            signs={signs.slice(Math.floor(signs.length / 2))}
          />
        </div>
        <ResizeContext.Provider value={{ width, height }}>
          <div
            style={{ color: 'gray', position: 'relative', zIndex: 1 }}
            ref={ref}>
            <p>
              please listen to the music, either with your own service (
              <a
                href="https://open.spotify.com/playlist/5kqUrzzqKXslO0m7Ciu2m4?si=c7ac600472df4234"
                target="_blank"
                className="special">
                here's a playlist
              </a>{' '}
              with all of it) or through the previews.{' '}
              <a className="special" href="#connection-to-art">
                i talk more about music & art later, so it's important to me.
              </a>
            </p>
            <p>
              some design decisions are intentional, given purposeful and/or
              time constraints. we love janky websites!
            </p>
            <header className="paper">
              <pre id="heading">
                <a href="https://jianminchen.com" target="_blank">
                  {name}
                </a>
              </pre>
            </header>
            <div className="prose" style={{ paddingTop: '0 !important' }}>
              <p style={{ marginTop: 0 }}>
                this is a series of reflections on a summer almost gone, a
                summer that's been life-changing in so many fucking ways.{' '}
                <a href="#connection-to-art" className="special">
                  mostly, this is a manifestation of my realization that what i
                  do is art
                </a>
                , even though it gets classified as stem.
              </p>
              <p>
                it’s 8:50am (fuck, i’m going to be late) and i’m walking over
                the{' '}
                <a
                  className="special"
                  href="https://goo.gl/maps/dBZCwu7fvNoevMue7"
                  target="_blank">
                  charles river bridge
                </a>{' '}
                (although: there is more than one; this is the main one) and
                thinking about a summer almost gone.
              </p>
              <PhotoAlbum />
              <p style={{ fontWeight: 700 }}>
                please share photos of me/with me that you might have! trying to
                add more because you might potentially have more and i want them
                so bad.
              </p>
              <p>
                i wrote these words almost everyday (although it fell off
                considerably towards the end), and i'm glad i did, because it
                made me realize how exciting my life had become. as a kid, my
                parents forced me to keep a diary, but i never had anything to
                write about.{' '}
                <i>
                  <a
                    href="https://open.spotify.com/track/3i5qVV8azKqGFK4Gzdt5YS?si=0174ffbc5a494e50"
                    target="_blank"
                    className="special">
                    as a kid, i used to think life / is moving so slow / look
                    out the window on my bus ride / i thought the world was so
                    small, though my closed eyes. (nf)
                  </a>
                </i>
              </p>
              <Timeline />
              <section className="prose">
                <h2>reading and listening and writing.</h2>
                <p>
                  this summer, i didn't read as much, but i did write, so that's
                  a win of sorts. here's some stuff i worked through.
                </p>
                <ul>
                  <li>
                    <a
                      href="http://raytracerchallenge.com/"
                      target="_blank"
                      className="special">
                      the raytracer challenge
                    </a>
                  </li>
                  <li>
                    all of{' '}
                    <a
                      className="special"
                      target="_blank"
                      href="https://www.youtube.com/@savbrown">
                      savannah brown
                    </a>
                    's amazing stuff. favorite quote:{' '}
                    <i>
                      <a
                        href="https://youtu.be/jKV-cym4QfQ"
                        target="_blank"
                        className="special">
                        i could write my magnus opus or i could simply go to bed
                      </a>
                    </i>
                  </li>
                  <li>
                    <a
                      href="https://www.goodreads.com/mk/book/show/77203.The_Kite_Runner"
                      target="_blank"
                      className="special">
                      kite runner
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cpu.land"
                      target="_blank"
                      className="special">
                      putting the u in cpu
                    </a>
                  </li>
                  <li>
                    a lot of{' '}
                    <a
                      href="https://geohot.com/"
                      target="_blank"
                      className="special">
                      george hotz
                    </a>
                    's streams. personal favorite:{' '}
                    <a
                      href="https://youtu.be/RFaFmkCEGEs"
                      target="_blank"
                      className="special">
                      twitchchess
                    </a>
                  </li>

                  <li>
                    <a
                      className="special"
                      href="https://leebyron.com/4000/"
                      target="_blank">
                      four thousand weeks
                    </a>
                  </li>
                </ul>
                <p>
                  i also did a lot of writing, but mostly in private spaces that
                  i'm not particularly comfortable sharing. however, there are
                  some short thoughts i'd like to share.
                </p>
                <details>
                  <summary>
                    <h3>on gender & sexuality</h3>
                  </summary>
                  <p>
                    my journey with this has been interesting. i'm starting to
                    realize that (at least personally), gender and sexuality are
                    very fluid.
                  </p>
                  <p>
                    prior to this summer, i think i was super rigid about it, as
                    in: i'm very definitely much only into people that identify
                    as female. now, i can still confidently say i definitely
                    still have a preference with people that identify as female,
                    but i'm also trying to work through{' '}
                    <a
                      href="https://en.wikipedia.org/wiki/Compulsory_heterosexuality"
                      target="_blank"
                      className="special">
                      comphet
                    </a>{' '}
                    and guaging whether or not it is what i think it is.
                  </p>
                  <p>
                    in terms of gender: just about everyday i wake up and decide
                    which gender i feel closer to? that's the only way i can put
                    it concretely. occasionally, it's for performative reasons
                    (i.e., for a specific person), but mostly due to hormones
                    and other emotionally related factors.
                  </p>
                  <p>
                    i've known that i'm queer specifically since i was 12
                    (although obviously there were signs before), so it's
                    interesting seeing how that can change over time and just
                    generally being very accepting of it.
                  </p>
                </details>
                <details id="connection-to-art">
                  <summary>
                    <h3>what is a personal website? and thoughts on art</h3>
                  </summary>
                  <p>
                    contrary to most people around me, i typically do better on
                    english tests. one of the things i have the tendency to say
                    a lot is, "if i didn't discover code in this life, i
                    probably would have been an artist of some sort." i mean. i
                    can't write for the life of me with my left hand, although
                    people who do are statistically proven to be more creative.
                  </p>
                  <p>
                    i think it boils down to my sensitivity. as a kid, i was
                    always extra sensitive. (to be honest, i'm not sure if this
                    is a smaller symptom of something bigger because it's
                    definitely a more taboo topic in the environment i'm
                    typically in.) and i kind of grew up on daydreaming as a
                    form of survival, if you will: daydreaming my way out of
                    certain{' '}
                    <a href="#home-college-future" className="special">
                      situations
                    </a>
                    , daydreaming about when i could do x, or y, or z, or how
                    awesome i was going to be at this or that and not someone i
                    couldn't stand.
                  </p>
                  <p>
                    i think i approached art from a much more mature standpoint
                    - that is, i understood the concept of the performativity of
                    art. but one thing i've always been fascinated with is that
                    art isn't a form of duality, you have three audiences: the
                    literal audience, the model, and the artist themselves, who
                    have to be the most interesting characters because: what do
                    they see behind their tools and why do they make the choices
                    they make?
                  </p>
                  <p>
                    and now i get to the part where i talk about me being an
                    artist: <i>what is the purpose of a personal website?</i>{' '}
                    why am i telling a (potentially) random someone on the
                    internet all my deepest fears and secrets (i.e., i'm queer
                    but still in the closet to most people that i ~should~
                    consider to be close to me in real life)? i think it's
                    because i don't really know you, so i can trust you with a
                    personal website: if you don't like it, you get off, and if
                    you do, you might just stick around. and we could end up as
                    best friends, the whole jizz and jam.
                  </p>
                  <p>
                    in my opinion, the people who work at the intersection of
                    technology with art (broadly put; art is a lot of things,
                    including but not limited to literature, art, music,
                    philosophy & ethics, politics, and sub-categories like
                    neuroscience and other medical fields) are the most amazing
                    people. i'm glad i've gotten to know so many of these
                    people, and that i get to become one of these people.
                  </p>
                </details>
                <details>
                  <summary>
                    <h3>riptide is a sad song. here's why</h3>
                  </summary>
                  <p>
                    first up, i took a look at the{' '}
                    <a
                      href="https://genius.com/Vance-joy-riptide-lyrics"
                      target="_blank"
                      className="special">
                      genius
                    </a>
                    .
                  </p>
                  <blockquote>
                    This song started in 2008 with a couple of lines that I
                    didn’t think much of, the first two lines of the verse – the
                    one about dentists in the dark – and then in 2012 I wrote a
                    melody on the ukulele which ended up being the chorus
                    melody. It’s a real patchwork, this song, of images and
                    ideas. I met a magician’s assistant around the time I was
                    writing the song and so she kind of found her way into the
                    song. Michelle Pfeiffer, I don’t know where that came from –
                    I was kind of envisaging a character that had ambitions of
                    stardom or something like that. That’s the kind of character
                    Michelle Pfeiffer was in The Fabulous Baker Boys and that’s
                    what came to mind, so I used that reference to set it up.
                    Once it all came together, it somehow made sense given it’s
                    such an eclectic mix of bits.
                  </blockquote>
                  <p>
                    but this is the explanation that makes the most sense for
                    me:
                  </p>
                  <blockquote>
                    <p>
                      I’ve always thought that “left hand man” means that he
                      wants to be her friend. The “right hand man” typically
                      refers to your #1 guy, or in this cause the girl’s
                      boyfriend/husband. He can’t be that person because she
                      doesn’t love him, so he wants to be her #2, or the “left
                      hand man” just to be close to her.
                    </p>
                    <p>
                      He likes the song she sings but he has a lump in his
                      throat because she is singing about the “right hand man”
                      or the guys she loves, not about the author (who is the
                      “left hand man”). Basically, she sings a great song about
                      the guy she loves, and that guy is not the author. The
                      author is very uncomfortable when she sings the name of
                      the “right hand man” (i.e. the author wishes it was his
                      name that she sings, not the right hand man’s name, which
                      he calls the wrong words).
                    </p>
                  </blockquote>
                  <p>
                    i put my right hand over on my left shoulder every time i've
                    sung this while on a run, so plenty of people around{' '}
                    <a
                      href="https://www.bu.edu/"
                      target="_blank"
                      className="special">
                      bu
                    </a>{' '}
                    have saw me do it. since then, it's taken on two other
                    meanings for me:
                  </p>
                  <ol>
                    <li>
                      my time this summer at{' '}
                      <a
                        className="special"
                        href="https://hackclub.com"
                        target="_blank">
                        hack club
                      </a>
                      , and how this became <i>the</i> intern song
                    </li>
                    <li>
                      being there for someone that you know will never be there
                      for you the way you are
                    </li>
                  </ol>
                  in a nutshell: we can compromise and say it's a bittersweet
                  song? i didn't know it before this summer and now i do.
                </details>
                <details id="home-college-future">
                  <summary>
                    <h3>home, college, & the future</h3>
                  </summary>
                  <p>
                    i'm conflicted about this right now. i wrote a{' '}
                    <a
                      href="https://markright.vercel.app/public/6455080fd1dba366ec0292ce/1526393384"
                      target="_blank"
                      className="special">
                      letter
                    </a>{' '}
                    (and{' '}
                    <a
                      href="https://markright.vercel.app/public/6455080fd1dba366ec0292ce/38598368"
                      target="_blank"
                      className="special">
                      another
                    </a>
                    ) on a whim. trigger warning: abuse, filial piety. this is
                    something i find very hard to talk about and am struggling
                    with, so i really don't talk a lot about family unless i
                    deeply trust you and know you can relate or are willing to
                    listen.
                  </p>
                  <p>
                    so that's "home". the truth is, i've never really felt at
                    home anywhere or stayed anywhere long enough for a place to
                    feel like home. the winner for closest place has to be{' '}
                    <a
                      href="https://en.wikipedia.org/wiki/Bay_Ridge,_Brooklyn"
                      target="_blank"
                      className="special">
                      bay ridge, brooklyn
                    </a>{' '}
                    (i call it babe ridge because it feels like home) and
                    generally nyc,{' '}
                    <a
                      href="https://www.jianminchen.com/article/general/2022-08-31-missing-my-hometown"
                      target="_blank"
                      className="special">
                      although it's changed
                    </a>{' '}
                    since i last checked it out. i do want to move back
                    sometime. i like{' '}
                    <a
                      href="https://en.wikipedia.org/wiki/Park_Slope"
                      target="_blank"
                      className="special">
                      park slope
                    </a>
                    .
                  </p>
                  <p>
                    college. last thing i want to talk about. i do plan on
                    going. i just don't know if i want to go next year. i know
                    where i want to go, or what i might want to do otherwise.
                    it's nice having options, but not nice having other people
                    force you into one option or the other, which is what i'm
                    struggling with right now.
                  </p>
                  <p>
                    i could take a gap year. i could check out{' '}
                    <a
                      href="https://devdegree.ca/"
                      target="_blank"
                      className="special">
                      shopify's dev degree
                    </a>
                    . i could apply to colleges (cmu, uc berkeley, harvey mudd,
                    uwash, dartmouth, brown, and umich ann arbor are the ones
                    that have grown on me). i could just do nothing and go
                    backpacking. the future is expansive. the one thing i've
                    learned from this summer is that every good adventure must
                    come to a close, but only so you can embark on an even
                    better one. in other words, go with the flow.
                  </p>
                </details>
                <details>
                  <summary>
                    <h3>existential crises & random thoughts</h3>
                  </summary>
                  <ul>
                    <li>
                      an existential crisis a day keeps the self-esteem away
                    </li>
                    <li>
                      i think my day is shit. then i look at mbta and realize
                      how things could be so much worse. mbta is my spirit
                      entity!
                    </li>
                    <li>
                      cities are hubs of hedonism but i'm conflicted about
                      hedonism itself and what qualifies as hedonism
                    </li>
                    <li>
                      <a
                        href="https://open.spotify.com/track/3TFoEJe5zNuHZStRboWPxg?si=a0874325f1ad4831"
                        target="_blank"
                        className="special">
                        people watching
                      </a>{' '}
                      is so much fun
                    </li>
                    <li>
                      i ain't never met a art student who wasn't anything but
                      gorgeous
                    </li>
                    <li>
                      the{' '}
                      <a
                        href="https://youtu.be/75-aXY2ESy0"
                        target="_blank"
                        className="special">
                        dorian gray effect
                      </a>{' '}
                      is so freaky. like how can two people with the same name
                      look so similar
                    </li>
                    <li>imagine if i shaved all of my hair as a bet</li>
                    <li>roof hopping</li>
                    <li>septum piercing. i want one but also not really</li>
                    <li>
                      artists on a tote bag: taylor swift, conan gray, gracie
                      abrams, dominic fike, pale waves, baby queen, lorde, nf,
                      the chainsmokers, reneé rapp, fletcher, the last dinner
                      party, charli xcx, eden (in that order)
                    </li>
                  </ul>
                </details>
              </section>
              <h2>music.</h2>
              <p>
                i listened to a lot of music this summer. but these are the ones
                i remember the most, from late-night drives, and sunset drives,
                and{' '}
                <a
                  href="https://www.boston.com/news/local-news/2023/07/17/the-b-branch-closure-begins-today-on-the-green-line-heres-what-to-know/"
                  target="_blank"
                  className="special">
                  taking the green line everyday
                </a>
                . getting lost in boston, walking over the charles river bridge
                everyday, listening to the monotonous tone of "77 massachusetts
                ave, mit" on bus 1. singing riptide together:{' '}
                <a className="special" href="/crash.mp3">
                  a late night hackathon/farewell party
                </a>
                , opener, rave,{' '}
                <a
                  href="https://www.strava.com/athletes/114092908"
                  target="_blank"
                  className="special">
                  running
                </a>{' '}
                - these are the lyrics i remember.
              </p>
              <p>
                i met a kid named quincy at the start of this summer and asked
                them how they made music, because i’ve always wanted to try my
                hand at making one.
              </p>
              {/*
                            <p>here's that attempt:</p>
                            <audio controls>
                                <source
                                    src="https://repo.library.stonybrook.edu/xmlui/bitstream/handle/11401/9656/rickroll.mp4?sequence=1&isAllowed=y"
                                    type="audio/mp4"
                                />
                            </audio>
                            */}
              <p>
                that attempt is coming soon, but here's a set of lyrics from my
                entire collection of demos (it turns out that writing lyrics on
                public transportation is easy):
              </p>
            </div>
            <section>
              <div
                className="looseleaf prose"
                style={{
                  transform: `rotate(${rotate(-0.4, 0.4)}deg)`
                }}>
                <p>oh, sweet summer child</p>
                <p>i haven't felt this in a while</p>
                <p>the last time i smiled</p>
                <p>i was is in brooklyn</p>
                <p>and then i woke up in boston</p>
                <p>oh, sweet summer child</p>
                <p>it's good to see you again</p>
                <span />
                <p>and darrel told me it would be ok</p>
                <p>we were on the rooftop</p>
                <p>i said there's so many unknowns</p>
                <p>he said go back to park slope</p>
                <p>i said it's been a while</p>
                <p>well, he said</p>
                <p>you have all the time in the world</p>
                <p>to sit around coney island</p>
                <p>and think about it</p>
                <span />
                <p>oh, sweet summer child</p>
                <p>i haven't felt this in a while</p>
                <p>the last time i smiled</p>
                <p>i was is in brooklyn</p>
                <p>and then i woke up in your bed</p>
                <p>oh, sweet summer child</p>
                <p>it's good to see you again</p>
                <span />
                <p>and it's a small world</p>
                <p>because i saw your mom last week</p>
                <p>and you said</p>
                <p>i could crash at your place</p>
                <p>if i really needed to</p>
                <p>it's a life i live</p>
                <span />
                <p>and i was running through the night</p>
                <p>past fenway</p>
                <p>past burlington</p>
                <p>past capitol heights</p>
                <p>i thought i was alone</p>
                <p>and i could be wrong</p>
                <p>but it's been different lately</p>
                <p>oh oh, tell me</p>
                <p>how it's like being 16</p>
                <p>you'll never live it again</p>
                <p>sweet summer child</p>
                <p>it's good to see you again</p>
              </div>
            </section>
            <section className="prose">
              <h2>the train's already here.</h2>
              <p>
                i'm turning 17 in december and i'll be 18 and ready to vote by
                the end of elections next year.
              </p>
              <p>
                i think i've only realized how crazy life can be in the good
                way. it doesn't need to be like how it used to be.{' '}
              </p>
              <p>
                there's only 4000 weeks in a life, and i've lived ~900. i
                promise i'll live the rest, because i've been thinking about it
                way too fucking much.
              </p>
            </section>
            <section className="prose">
              <h2>acknowledgments</h2>
              <p>
                i saved acknowledgments for last because without these people,
                everything that happened this summer...{' '}
                <b>
                  well, wouldn't have happened. thanks for all the magic y'all.
                </b>
              </p>
              <p>
                <a
                  href="https://cheru.dev/"
                  target="_blank"
                  className="special">
                  cheru
                </a>
                : thanks for listening to me. seriously. it means a lot. and
                please stop making fun of me for crushing on people. also, most
                things don't rhyme with tuesday, so i'm not sure how you came up
                with that. (i'm just joking. keep doing what you do.)
              </p>
              <p>
                <a
                  href="https://read.cv/zoyashussain"
                  target="_blank"
                  className="special">
                  zoya
                </a>
                ,{' '}
                <a
                  href="https://sahiti.vercel.app/"
                  target="_blank"
                  className="special">
                  sahiti
                </a>
                ,{' '}
                <a
                  href="https://scrapbook.hackclub.com/arianna"
                  target="_blank"
                  className="special">
                  arianna
                </a>
                : my girlies! zoya, i love your oocs. i shall see you next year,
                and i promise i will eventually get around to your anime
                recommendations. (spotify is now giving me mitski recs too. 🤦)
                please continue. sahiti, you have a fucking amazing website!
                thanks for being so sweet and i'll definitely see you next year.
                (what happened to love island? and podcast. we need to organize
                that.) arianna, i love being the mysterious cousin. (someone has
                yet to send me the link to the family tree.) i'll see you in
                pittsburgh probably! maybe i'll hang around longer :)
              </p>
              <p>
                <a href="https://srtk.me/" target="_blank" className="special">
                  sarthak
                </a>
                : thanks for spotting me $20. i love my fucking jorts. (is that
                what they're called? that's what they're called.) and obviously
                for spotting the tab at{' '}
                <a
                  href="https://www.fujiatinkblock.com/"
                  target="_blank"
                  className="special">
                  fuji on ink block
                </a>
                . the food there was fucking delicious and you're one of the
                most wack people i've met in a good way. also, amazing dj.
              </p>
              <p>
                deet: thanks for driving that subaru of yours. probably the
                first clean car i've even been in. i loved rides with the gang
                with the air conditioner on max, sunroof and windows all open,
                and heavy music. best valet dude ever! but you're also so much
                cooler than that, like i can't put shit into words.
              </p>
              <p>
                <a
                  href="https://github.com/SerenityUX"
                  target="_blank"
                  className="special">
                  thomas
                </a>
                : your car sucks, but you don't! i loved talking with you about
                everything and anything. your attitude on everything and the way
                you treat people is the model for how i want to navigate the
                world going forward. also, i loved your kale smoothies.
              </p>
              <p>
                and thanks to everyone else, especially people i will not see
                again potentially for a long time: sam and belle.{' '}
                <a
                  href="https://sampoder.com/"
                  target="_blank"
                  className="special">
                  sam
                </a>
                ,{' '}
                <a
                  href="https://zachlatta.com/"
                  target="_blank"
                  className="special">
                  zach
                </a>
                , and{' '}
                <a
                  href="https://bookshelf.website/hollydelisle"
                  target="_blank"
                  className="special">
                  holly
                </a>
                : the three of you completely changed my life. zach for starting{' '}
                <a
                  href="https://hackclub.com/"
                  target="_blank"
                  className="special">
                  hack club
                </a>
                ; sam for defining a model for hackathons that made me decide to
                stay in hack club after{' '}
                <a
                  href="https://www.jianminchen.com/article/general/2022-08-16-summer"
                  target="_blank"
                  className="special">
                  assemble
                </a>{' '}
                (and, with{' '}
                <a
                  href="https://malted.dev/"
                  target="_blank"
                  className="special">
                  ben
                </a>
                , for letting me overstay my time at archiebald); and holly for
                reaching out of nowhere and working together on projects, even
                though i haven't always been responsive.
              </p>
              <p>
                <a
                  href="https://twitter.com/bellecsee"
                  target="_blank"
                  className="special">
                  belle
                </a>
                : i think you're such a cool person and i'd like to get to know
                you more. let me know when we can hang out now that you're in
                the greater boston area?
              </p>
              <p>
                <a
                  href="https://github.com/karamassie"
                  target="_blank"
                  className="special">
                  kara
                </a>
                : thank you so much for driving me almost five hours to vermont
                so i could partake in{' '}
                <a
                  href="https://outernet.hackclub.com/"
                  target="_blank"
                  className="special">
                  outernet
                </a>
                . new hampshire is so pretty and conversation with you was
                really enjoyable.
              </p>
              <p>
                and obviously: everyone else at hq (
                <a
                  href="https://shubhampatil.dev/"
                  target="_blank"
                  className="special">
                  shubham
                </a>
                ,{' '}
                <a
                  href="https://github.com/YodaLightsabr"
                  target="_blank"
                  className="special">
                  ian
                </a>
                ,{' '}
                <a
                  href="https://www.alexdeforrest.com/"
                  target="_blank"
                  className="special">
                  alex
                </a>
                ,{' '}
                <a
                  href="https://github.com/faisalsayed10"
                  target="_blank"
                  className="special">
                  fayd
                </a>
                ,{' '}
                <a
                  href="https://kognise.dev"
                  target="_blank"
                  className="special">
                  lexi
                </a>
                ,{' '}
                <a
                  href="https://calebden.io/"
                  target="_blank"
                  className="special">
                  caleb
                </a>
                ,{' '}
                <a
                  href="https://www.enby.land/"
                  target="_blank"
                  className="special">
                  b
                </a>
                ,{' '}
                <a href="https://rluo.dev/" target="_blank" className="special">
                  ruien
                </a>
                ). i didn't get to know all of you but maybe next summer if
                y'all are still around? same to the following amazing people i
                wish i could have gotten to know better:{' '}
                <a
                  href="https://www.clairebookworm.com/"
                  target="_blank"
                  className="special">
                  claire
                </a>
                ,{' '}
                <a
                  href="https://neelr.dev/"
                  target="_blank"
                  className="special">
                  neel
                </a>
                ,{' '}
                <a
                  href="https://adelinachau.com/"
                  target="_blank"
                  className="special">
                  adelina
                </a>
                , the other{' '}
                <a
                  href="https://parkalex.dev/"
                  target="_blank"
                  className="special">
                  alex
                </a>
                , and the other people i fell a bit out of connection with:
                sophia, andrew.
              </p>
              <p>
                my heart is hurting so much right now but in a good way. it's
                almost 2am and i'm finally wrapping this up.
              </p>
              <p>
                but before i go, if we're all separated by{' '}
                <a
                  className="special"
                  href="https://en.wikipedia.org/wiki/Six_degrees_of_separation"
                  target="_blank">
                  six degrees of separation
                </a>
                , i want to get to know you, because somewhere in{' '}
                <a
                  href="https://en.wikipedia.org/wiki/Everything_Everywhere_All_at_Once"
                  target="_blank"
                  className="special">
                  another dimension
                </a>{' '}
                i promise you that we’re platonic or romantic soulmates, if we
                aren't in this one. so tell me about you. what’d you do this
                summer? and if you ever want to talk: email for my phone number
                at jianmin[zero]chen[at]gmail.com. you're amazing.
              </p>
            </section>
            <footer className="prose">
              made with{' '}
              <a href="https://nextjs.org" target="_blank" className="special">
                next.js
              </a>
              ,{' '}
              <a
                href="https://www.npmjs.com/package/figlet"
                target="_blank"
                className="special">
                figlet
              </a>
              ,{' '}
              <a
                href="https://www.framer.com/motion/"
                target="_blank"
                className="special">
                framer motion
              </a>
              ,{' '}
              <a
                href="https://www.cloudflare.com/developer-platform/r2/"
                target="_blank"
                className="special">
                cloudflare r2
              </a>
              ,{' '}
              <a
                href="https://supabase.com/"
                target="_blank"
                className="special">
                supabase
              </a>
              , and ❤️. fonts:{' '}
              <a
                href="https://fonts.google.com/specimen/Lora"
                target="_blank"
                className="special">
                lora
              </a>
              ,{' '}
              <a
                href="https://fonts.google.com/specimen/EB+Garamond"
                target="_blank"
                className="special">
                eb garamond
              </a>
              ,{' '}
              <a
                href="https://fonts.google.com/specimen/Inter"
                target="_blank"
                className="special">
                inter
              </a>
              ,{' '}
              <a
                href="https://fonts.google.com/specimen/Anonymous+Pro"
                target="_blank"
                className="special">
                anonymous pro
              </a>
              , and{' '}
              <a
                href="https://fonts.google.com/specimen/IBM+Plex+Sans"
                target="_blank"
                className="special">
                ibm plex sans
              </a>
              . hours it took to make: an all-nighter at an apartment in{' '}
              <a
                href="https://en.wikipedia.org/wiki/Allston"
                target="_blank"
                className="special">
                allston
              </a>
              , boston + an all-nighter at mit's{' '}
              <a
                href="https://libraries.mit.edu/hayden/"
                target="_blank"
                className="special">
                hayden library
              </a>
              . inspiration:{' '}
              <a href="https://kognise.dev" target="_blank" className="special">
                lexi's website
              </a>
              ,{' '}
              <a
                href="https://lachlanjc.com/"
                target="_blank"
                className="special">
                lachlan's website
              </a>
              ,{' '}
              <a
                href="https://www.rebeccashapass.com/"
                target="_blank"
                className="special">
                rebecca's website
              </a>
              ,{' '}
              <a
                href="https://tripessay.vercel.app"
                target="_blank"
                className="special">
                a past personal essay on backpacking through dc and slc
              </a>
              ,{' '}
              <a
                href="https://amie.so/calendar"
                target="_blank"
                className="special">
                amie's calendar journey
              </a>
              , mbta ui decisions.{' '}
              <a
                href="https://github.com/jianmin-chen/summer23"
                target="_blank"
                className="special">
                source
              </a>
            </footer>
          </div>
        </ResizeContext.Provider>
        <div>
          <Lyrics
            lyrics={[
              'I was scared of dentists and the dark',
              'I was scared of pretty girls and starting conversations',
              "There's this movie that I think you'll like",
              'This guy decides to quit his job and heads to New York City',
              "This cowboy's running from himself",
              "And she's been living on the highest shelf",
              'I just wanna, I just wanna know',
              "If you're gonna, if you're gonna stay",
              'I just gotta, I just gotta know',
              "I can't have it, I can't have it any other way",
              "I swear she's destined for the screen",
              "Closest thing to Michelle Pfeiffer that you've ever seen, oh",
              'Oh lady, running down to the riptide',
              'Taken away to the dark side',
              'I wanna be your left-hand man',
              "I love you when you're singing that song",
              'And I got a lump in my throat',
              "'Cause you're gonna sing the words wrong"
            ]}
            background="#d6403f"
            embed={
              <iframe
                src="https://open.spotify.com/embed/track/3JvrhDOgAt6p7K8mDyZwRd?utm_source=generator"
                width="100%"
                height="152"
                frameBorder="0"
                allowFullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            }
          />
          <Lyrics
            lyrics={[
              'We almost got away, we cut it close',
              "The city's getting louder",
              'Been trying to work it out, you should know',
              'I would do whatever you wanted',
              "We don't have to leave the apartment",
              'Met you at the right time',
              'This is what it feels like',
              "Livin' in a movie I've watched and",
              "Funny, 'cause you couldn't have called it",
              'And I need you, sometimes',
              "We'll be alright",
              'And I miss you some nights',
              "We'll be alright"
            ]}
            background="#508160"
            embed={
              <iframe
                src="https://open.spotify.com/embed/track/35IcAVSMsU9qzHfpPbvC8A?utm_source=generator"
                width="100%"
                height="152"
                allowFullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            }
          />
          <Lyrics
            lyrics={[
              'See I was heading back home',
              'Feeling a little less alone',
              'I was sitting on the train',
              'Mulling it over in my brain',
              "That's when I saw somebody crying",
              'I said, "Why are you upset?"',
              'She said "Well nothing makes sense"',
              'I said, "Hey don\'t be defeatist"',
              "She said, \"Well don't be so naive it's been proven space is",
              'Exponential so this is all inconsequential"',
              'I said, "If it\'s inconsequential then there is infinite potential"',
              'She said, "Well that\'s the fucking purpose, it all just',
              'Still completely worthless"',
              'I said, "Open up your mind, maybe in this life"',
              'We can be anything',
              "That's awesome don't you think"
            ]}
            background="#c65144"
            embed={
              <iframe
                src="https://open.spotify.com/embed/track/2Tuaa6mlnDZ7vJhtdQ8ZSw?utm_source=generator"
                width="100%"
                height="152"
                allowFullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            }
          />
          <Lyrics
            lyrics={[
              'But I could read you',
              "It's like you told me",
              'Go forward slowly',
              "It's not a race to the end",
              'Well you look like yourself',
              "But you're somebody else",
              "Only it ain't on the surface",
              'Well you talk like yourself',
              'No, I hear someone else though',
              "Now you're making me nervous",
              'I saw the part of you',
              "That only when you're older you will see too",
              'You will see too, you will see too'
            ]}
            background="#717782"
            embed={
              <iframe
                src="https://open.spotify.com/embed/track/6iWEhoALoBFnQMNVhYY0Sc?utm_source=generator"
                width="100%"
                height="152"
                allowFullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            }
          />
          <Lyrics
            lyrics={[
              'I know it breaks your heart',
              'Moved to the city in a broke-down car, and',
              'Four years, no calls',
              "Now you're looking pretty in a hotel bar",
              "And I-I-I can't stop",
              'So, baby, pull me closer',
              'In the backseat of your Rover',
              "That I know you can't afford",
              'Bite that tattoo on your shoulder',
              'Pull the sheets right off the corner',
              'Of that mattress that you stole',
              'From your roommate back in Boulder',
              "We ain't ever getting older"
            ]}
            background="#777771"
            embed={
              <iframe
                src="https://open.spotify.com/embed/track/7BKLCZ1jbUBVqRi2FVlTVw?utm_source=generator"
                width="100%"
                height="152"
                allowFullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            }
          />
          <Lyrics
            lyrics={[
              "I don't know if it's fair, but I thought",
              '"How could I let you fall by yourself',
              'While I\'m wasted with someone else?"',
              'If we go down, then we go down together',
              "They'll say you could do anything",
              "They'll say I was clever",
              'We were staying in Paris',
              'To get away from your parents',
              'You look so proud standing there, with a frown and a cigarette',
              'Posting pictures of yourself on the Internet',
              'Out on the terrace',
              'We breathe in the air of this small town',
              'On our own, cutting class for the thrill of it'
            ]}
            background="#877245"
            embed={
              <iframe
                src="https://open.spotify.com/embed/track/15vzANxN8G9wWfwAJLLMCg?utm_source=generator"
                width="100%"
                height="152"
                allowFullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            }
          />
          <Lyrics
            lyrics={[
              'Ooh-ooh-ooh, yeah-yeah',
              'Went low, went high',
              'Still waters run dry',
              "Gettin' right back in the mood",
              'I live my day as if it was the last',
              'Live my day as if there was no past',
              "Doin' it all night, all summer",
              "Doin' it the way I wanna",
              "Yeah, I'ma dance my heart out 'til the dawn",
              'Gonna spend it like no other',
              "Now I've found another crush",
              "The lush life's given me a rush"
            ]}
            background="#5b7b8c"
            embed={
              <iframe
                src="https://open.spotify.com/embed/track/1rIKgCH4H52lrvDcz50hS8?utm_source=generator"
                width="100%"
                height="152"
                allowFullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            }
          />
          <SignHere
            side="right"
            signs={signs.slice(0, Math.floor(signs.length / 2))}
          />
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const load = val =>
    new Promise((resolve, reject) => {
      figlet(
        val,
        {
          font: 'Colossal'
        },
        (err, data) => {
          if (!err) return resolve(data)
        }
      )
    })

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
  )
  let { data, error } = await supabase.from('sign').select()
  if (error) data = []

  return {
    props: {
      name: await load("hi, i'm jc."),
      signs: data
    }
  }
}
