import styles from "./Timeline.module.scss";

const entries = {
    "06/23": (
        <>
            <p>
                Eek, have a shit ton of stuff I'll be working on. Leaving for
                Vermont tomorrow! I won't be able to stay at{" "}
                <a href="">Hack Club HQ</a> the whole way through but I'm still
                super excited to meet the awesome people I'll be working with
                (specifically, <a href="">Jammers</a>!), and maybe eat a bagel
                at Burlington Bagel Bakery again. We'll see!
            </p>
            <p>
                In preparation, I need to go pack my bag, which I still haven't
                done.
            </p>
        </>
    ),
    "06/24": (
        <>
            <p>
                Left at 8:50AM, got to Burlington at 5:40PM. Ate out at a local
                diner - Al's French Fries! - and then met my new roommates, who
                it turns out had invited a bunch of people over! Seven people in
                total. We made burgers, curly fries, and salad together, talked
                a bit, and watched <a href="">Missing</a> together. Holy crap, I
                was either laughing so hard or trying hard not to look at the
                screen. I'm honestly nervous when it comes to new people, but it
                was so much fun! Tomorrow we'll be going to a renaissance fair,
                which I've never been to before. We'll see how it goes; someone
                bought a $70 cowboy hat for the occasion! Anyways, writing this
                and finishing up my BWSI courses right now. It's close to 12AM!
            </p>
            <p>
                Oh, I forgot to mention what I did on the bus. Well, first of
                all, Albany's Union Station stinks. Would not recommend,
                -infinity/10. I wanted to puke so bad, but it smelled like weed
                outside and was humid, so I had no choice but to stay inside.
                That being said, the WiFi also sucked, so I did a lot of work on
                Marrow and also started reading{" "}
                <a href="">Godel, Escher, Bach</a>.
            </p>
        </>
    ),
    "06/25": (
        <>
            <p>
                Exhausting but fun day! Went to my first renaissance fair. Lot
                of fun seeing the costumes, but it was so freakin' hot.
                Afterwards, went to <a href="">Skinny Pancakes</a>, but I didn't
                eat anything because right afterwards we headed over to{" "}
                <a href="">Woody Keppel</a>'s house for a potluck dinner and to
                watch a band, <a href="">Mal Maiz</a>, play music. Literally so
                fun! The food people bought was so good, and even though it
                started raining halfway, the show was still super enjoyable (did
                I forget to mention that there was a plate spinning
                introduction?) and we played some Man in the Middle with a
                football while dancing to the music in the rain, which was
                honestly so fun.
            </p>
            <p>
                Coming home, some interesting music was played in the car, so
                they're both going in my playlist:{" "}
                <a href="">Runaway (U &amp; I)</a> and{" "}
                <a href="">Live in the Moment</a>. The latter has these two
                verses:
            </p>
            <blockquote>
                <p>Let's live in the moment</p>
                <p>Come back Sunday morning</p>
            </blockquote>
            <p>Um, it's a Sunday today! What a coincidence.</p>
            <p>
                I decided on a whim to run to HC HQ tomorrow morning (7.7 miles,
                I just checked), with my roommate, which is exciting because I
                get to see all the scenery as the sun rises (that is if it isn't
                cloudy tomorrow), but also I'm sure pretty traumatic because I
                think I've only ever run that far once.
            </p>
            <p>
                Anyways, I need to sign off now. I smell like grass but I'm
                going to shower tomorrow.
            </p>
        </>
    ),
    "06/26": (
        <p>
            Writing this the day after! I actually ran 7.7 miles and did my
            first day at HQ. Also ate an entire party-size bag of Doritos.
            Afterward, a group of us had taco dinner and stayed up until 1 AM
            playing Uno in <a href="">Steve</a>. We then decided to head over to
            HQ to sleep there for the night, which meant curling up on the couch
            together and watching <a href="">Mamma Mia</a>. I actually promptly
            fell asleep a solid fifteen minutes after the movie started, so I
            didn't watch it. The music is good to sleep too. The couch was so
            fucking tight that my back hurts so much, but it was also really
            cozy and I felt like I actually belonged. Like someone put their
            head on my shoulder, I kept kicking someone in the shins, and
            somebody was sleeptalking. You know, the awkward but sweet kind of
            close. There was six of us on one couch! How the fuck is that
            possible!
        </p>
    ),
    "06/27": (
        <>
            <p>Woke up at five today! Slept a solid four hours. Maybe.</p>
            <p>
                Today was pretty solid! I spent most of the day programming. For
                lunch, we invited <a href="">Jeffrey Hollender</a>, who founded
                one of the first sustainable cleaning solution companies, to
                come have a little picnic chat with us. His son, who actually
                led Wikipedia's redesign project, also came and talked about
                that a bit!
            </p>
            <p>
                Also had my first team sync today, followed by Ben &amp; Jerry's
                ice cream right after. <a href="">Conrad Kramer</a> is here!
                Honestly adults are so intimidating but I really liked listening
                to his conversations with other people even though I really
                don't know much about Rust, etc. I need to add that to my summer
                bucket list.
            </p>
            <p>
                Had another dinner party at someone else's apartment! This one
                was more lowkey, I helped make some spicy vegan pasta (courtesy
                of curry), and then we sat around with the vinyl player on
                playing Hangman and chess. We were originally going to go to a
                comedy special, but I don't regret anything. Actually, that
                reminds me of a quote I heard a while ago: when you're stuck
                between decisions that all have good outcomes, decide on the one
                that will make you regret the least. I need to write that down.
            </p>
            <p>Tomorrow I have to actually wake up early and get work done.</p>
            <p>
                I remember my mom used to make me keep a diary, but there was no
                point because my life was so boring I would write about what I
                ate for breakfast everyday. Now I can't stop writing because
                life is so fucking exciting. I feel so fucking alive even though
                I have 3 mosquito bites, 2 back pain hotspots, and 1 sleepy
                brain.
            </p>
        </>
    ),
    "06/28": (
        <p>
            Mostly another day of work! Afterwards we went to an Irish pub in
            the middle of Burlington. People may or may not have bought alcohol
            with a fake ID. Then we went to the Vermont Comedy Club for
            Wednesday Open Mic night. Some of the sets were hilarious, but by
            the end of the night, I had enough of penis jokes. Pretty fun
            though! I've been feeling like an adult, but I specifically felt
            like an adult tonight. I mean, I was in a pub! I mean, it's not like
            I drank anything but still...
        </p>
    )
};

export default function Timeline() {
    return (
        <div className={styles.timeline}>
            {Object.keys(entries)
                .sort((a, b) => {
                    return Date(a) - Date(b);
                })
                .map((entry, idx) => (
                    <div className={styles.dot} key={idx} />
                ))}
        </div>
    );
}
