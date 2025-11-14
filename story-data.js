// Story Data for Crossroads Game
const StoryData = {
    nodes: {
        // ============================================
        // PROLOGUE
        // ============================================
        start: {
            text: `You are Diane, 42 years old, standing in your kitchen at 6:47 AM. The coffee maker gurgles its final breath. Mark is scrolling through his phone at the breakfast table. The kids are arguing upstairs about whose turn it is to use the bathroom.

            This is your life. Has been for 15 years.

            Your phone buzzes. Three emails. Three opportunities. Three completely different futures.

            The coffee maker beeps. Mark doesn't look up. You have a choice to make.`,
            sprite: 'diane_neutral',
            choices: [
                {
                    text: 'Open the email from the University Philosophy Department',
                    next: 'path_university_intro',
                    chapter: 1
                },
                {
                    text: 'Open the email from Stellar Marketing Agency',
                    next: 'path_marketing_intro',
                    chapter: 1
                },
                {
                    text: 'Open the email from "Mom Life Digital" - Influencer Network',
                    next: 'path_influencer_intro',
                    chapter: 1
                }
            ]
        },

        // ============================================
        // PATH 1: UNIVERSITY PROFESSOR
        // ============================================
        path_university_intro: {
            text: `"Dear Ms. Hartwell, we were impressed by your dissertation on existential philosophy. We'd like to offer you a teaching position..."

            Your heart races. This is what you gave up 15 years ago. Before the kids. Before Mark's "stable" job meant you couldn't pursue "risky" academic dreams.

            Mark finally looks up. "What's got you smiling?"

            The moment of truth.`,
            sprite: 'diane_happy',
            choices: [
                {
                    text: 'Tell Mark everything. He deserves to know.',
                    next: 'uni_tell_mark',
                    relationships: { mark: 10, kids: 5 }
                },
                {
                    text: 'Deflect. "Nothing. Just a funny meme." You need time to think.',
                    next: 'uni_delay',
                    relationships: { mark: -5 }
                },
                {
                    text: 'Close the email. This is crazy. You have responsibilities.',
                    next: 'ending_regret_early',
                    relationships: { mark: 5, kids: 5 }
                }
            ]
        },

        uni_tell_mark: {
            text: `"The university wants me to teach philosophy. It's... it's everything I used to dream about."

            Mark sets down his phone. His face is unreadable.

            "How much does it pay?"

            You tell him. It's less than he makes, but it's not nothing.

            "And who takes care of the kids? Who handles dinner? Soccer practice? Your mom's doctor appointments?"

            Valid questions. Accusatory tone.`,
            sprite: 'diane_worried',
            choices: [
                {
                    text: 'Fight back. "We can figure it out together. Like partners should."',
                    next: 'uni_mark_fight',
                    relationships: { mark: -10, kids: -5 }
                },
                {
                    text: 'Stay calm. "We\'ll make a schedule. Hire help if needed."',
                    next: 'uni_mark_negotiate',
                    relationships: { mark: 5 }
                },
                {
                    text: 'Back down. "You\'re right. It\'s too much."',
                    next: 'ending_regret_early',
                    relationships: { mark: 15, kids: 5 }
                }
            ]
        },

        uni_delay: {
            text: `You spend the day in a fog. At the therapist's office (your monthly "tune-up" as Mark calls it), Dr. Chen notices.

            "Diane, you seem distracted today. More than usual."

            Dr. Chen has kind eyes. Professional distance, but genuine concern. You've been seeing her for two years.`,
            sprite: 'dr_chen',
            choices: [
                {
                    text: 'Tell Dr. Chen about the job offer.',
                    next: 'uni_dr_chen_advice',
                    relationships: { chen: 20 },
                    setFlags: { metDrChen: true }
                },
                {
                    text: 'Keep it vague. "Just life stuff. The usual."',
                    next: 'uni_decline_help',
                    relationships: { chen: -5 }
                },
                {
                    text: 'Break down. "I don\'t know who I am anymore."',
                    next: 'uni_breakthrough',
                    relationships: { chen: 30 },
                    setFlags: { metDrChen: true }
                }
            ]
        },

        uni_dr_chen_advice: {
            text: `Dr. Chen leans forward. "Diane, in the two years we've worked together, I've watched you diminish yourself. What would happen if you said yes?"

            "Mark would be upset."

            "And if you said no?"

            "I'd be upset."

            She lets that sit in the air between you.

            "So someone's going to be upset either way. The question is: who do you want to be five years from now?"`,
            sprite: 'dr_chen',
            choices: [
                {
                    text: 'Accept the job. Take the leap.',
                    next: 'uni_accept_job',
                    relationships: { chen: 15 },
                    setFlags: { acceptedProfessor: true },
                    chapter: 2
                },
                {
                    text: 'Ask for more time to think.',
                    next: 'uni_more_time',
                    relationships: { chen: 5 }
                },
                {
                    text: 'Realize you need to leave Mark first.',
                    next: 'uni_leave_mark',
                    relationships: { chen: 20, mark: -30 }
                }
            ]
        },

        uni_breakthrough: {
            text: `The tears come fast. Dr. Chen passes you tissues.

            "I had dreams. Real dreams. And I gave them up for... for what? A man who barely looks at me? Kids who'll leave in a few years? Who am I when nobody needs me anymore?"

            Dr. Chen's voice is soft. "Who do you want to be?"

            The job offer feels like a life raft. Or maybe it's an anchor. You can't tell anymore.`,
            sprite: 'diane_worried',
            choices: [
                {
                    text: 'Take the job. Reclaim yourself.',
                    next: 'uni_accept_job',
                    relationships: { chen: 20 },
                    setFlags: { acceptedProfessor: true },
                    chapter: 2
                },
                {
                    text: 'Admit you\'re afraid of change.',
                    next: 'uni_fear_work',
                    relationships: { chen: 15 }
                },
                {
                    text: 'Ask about medication. Maybe that would help.',
                    next: 'ending_medicated',
                    relationships: { chen: -10 }
                }
            ]
        },

        uni_accept_job: {
            text: `Three months later, you're standing in front of your first class. "Introduction to Existentialism." Twenty-three students stare at you with varying degrees of interest and hangover.

            "We'll start with Sartre," you say. "Existence precedes essence. You are not defined by what you are, but by what you choose to become."

            A student in the back raises his hand. "Is this going to be on the test?"

            Academia. You've missed this.

            After class, the department head, Professor James Harrison, catches you in the hallway.`,
            sprite: 'classroom',
            choices: [
                {
                    text: 'Accept his invitation to discuss your research over coffee.',
                    next: 'uni_james_coffee',
                    relationships: { james: 15 }
                },
                {
                    text: 'Politely decline. You need to pick up the kids.',
                    next: 'uni_balance_family',
                    relationships: { kids: 10, james: -5 }
                },
                {
                    text: 'Mention you\'d love to but you have therapy.',
                    next: 'uni_therapy_continue',
                    relationships: { chen: 10, james: -5 }
                }
            ]
        },

        uni_james_coffee: {
            text: `The café near campus is filled with students and professors engaged in animated discussions. James orders a black coffee. You get a latte with an embarrassing amount of caramel.

            "Don't apologize for your joy, Diane," he says, watching you. "I've seen too many academics forget why they fell in love with ideas in the first place."

            He's 50, divorced, kind. His office is lined with first editions. He treats ideas like they matter.

            Your phone buzzes. Mark: "Where are you? Kids need dinner."`,
            sprite: 'cafe',
            choices: [
                {
                    text: 'Ignore the text. Stay in this moment.',
                    next: 'uni_james_closer',
                    relationships: { james: 20, mark: -15, kids: -10 }
                },
                {
                    text: 'Apologize and leave. Family comes first.',
                    next: 'uni_juggle_life',
                    relationships: { james: -10, mark: 10, kids: 10 }
                },
                {
                    text: 'Text back: "Order pizza. I\'m working."',
                    next: 'uni_establish_boundaries',
                    relationships: { james: 10, mark: -5, kids: -5 }
                }
            ]
        },

        uni_james_closer: {
            text: `Hours pass. You talk about Camus, Beauvoir, the nature of freedom. James listens like your words matter. When was the last time Mark listened like this?

            "I should go," you say, but don't move.

            "Should is a tyrannical word," James says. "What do you want to do?"

            The question hangs in the air. Your phone buzzes again. And again.`,
            sprite: 'james',
            choices: [
                {
                    text: 'Stay. Cross a line you can\'t uncross.',
                    next: 'uni_james_affair',
                    relationships: { james: 30, mark: -30, kids: -15 }
                },
                {
                    text: 'Leave. Some lines shouldn\'t be crossed.',
                    next: 'uni_marriage_crisis',
                    relationships: { james: 5, mark: -20, kids: -10 }
                },
                {
                    text: 'Be honest. "I\'m married and miserable."',
                    next: 'uni_honest_conversation',
                    relationships: { james: 15, mark: -10 }
                }
            ]
        },

        uni_james_affair: {
            text: `It starts that night. Coffee becomes dinners. Dinners become late-night talks in his office. Late-night talks become more.

            You tell yourself it's just intellectual. Then emotional. Then physical.

            Mark notices you're different. "You seem happy," he says suspiciously.

            The kids notice too. Your daughter asks, "Why do you smile at your phone now?"

            Three months in, James asks, "What are we doing here, Diane?"`,
            sprite: 'james',
            choices: [
                {
                    text: 'Leave Mark. Build a new life with James.',
                    next: 'ending_professor_happiness',
                    relationships: { james: 40, mark: -50, kids: -30 }
                },
                {
                    text: 'End the affair. Choose your family.',
                    next: 'ending_professor_regret',
                    relationships: { james: -40, mark: -30, kids: -20 }
                },
                {
                    text: 'Keep both. You deserve something for yourself.',
                    next: 'ending_exposed_scandal',
                    relationships: { james: 20, mark: -40, kids: -40 }
                }
            ]
        },

        uni_honest_conversation: {
            text: `"I'm married and miserable," you admit. "I love my kids but I lost myself. This job, these conversations... I feel alive again."

            James nods slowly. "I've been there. My divorce nearly killed me. But staying in that marriage would have."

            "I don't know what to do."

            "Figure out what you're living for, Diane. Not who you're living for. What."`,
            sprite: 'james',
            choices: [
                {
                    text: 'Commit to the academic path fully. Divorce Mark.',
                    next: 'uni_divorce_path',
                    relationships: { james: 20, mark: -40, chen: 10 }
                },
                {
                    text: 'Try marriage counseling. Give Mark one chance.',
                    next: 'uni_counseling',
                    relationships: { mark: 5, james: -5, chen: 15 }
                },
                {
                    text: 'Focus on your career and kids. Let Mark figure himself out.',
                    next: 'ending_professor_independent',
                    relationships: { kids: 20, mark: -20, james: 10 }
                }
            ]
        },

        uni_mark_negotiate: {
            text: `Over the next week, you sit down with spreadsheets and calendars. You propose: meal prep on Sundays, the kids help with chores, Mark handles homework duty on your late nights.

            He's quiet. Then: "This matters to you."

            "Yes."

            "Okay. We'll try."

            It's not enthusiasm, but it's not rejection. You'll take it.`,
            sprite: 'home',
            choices: [
                {
                    text: 'Accept the university position.',
                    next: 'uni_accept_job',
                    relationships: { mark: 15, kids: 10 },
                    setFlags: { acceptedProfessor: true },
                    chapter: 2
                },
                {
                    text: 'Negotiate part-time to start.',
                    next: 'uni_part_time',
                    relationships: { mark: 20, kids: 15 }
                },
                {
                    text: 'Ask for one year. Then reassess.',
                    next: 'uni_trial_period',
                    relationships: { mark: 15, kids: 10 }
                }
            ]
        },

        // ============================================
        // PATH 2: MARKETING AGENCY (FORBIDDEN ROMANCE)
        // ============================================
        path_marketing_intro: {
            text: `"Stellar Marketing needs a creative director. Your background in philosophy gives you unique perspective on consumer psychology..."

            Marketing. It's not what you dreamed of, but it pays well. Really well. Almost double what Mark makes.

            The interview is in three days. Downtown office. Corner views. Free lunch.

            Mark would love this. Financial security. Finally.`,
            sprite: 'diane_neutral',
            choices: [
                {
                    text: 'Tell Mark immediately. Show him the salary.',
                    next: 'market_mark_excited',
                    relationships: { mark: 20 }
                },
                {
                    text: 'Ace the interview first. Then tell him.',
                    next: 'market_interview',
                    relationships: { mark: -5 }
                },
                {
                    text: 'Delete the email. This isn\'t you.',
                    next: 'ending_regret_early',
                    relationships: { mark: 5 }
                }
            ]
        },

        market_interview: {
            text: `The office is glass and steel and ambition. Your interviewer is Stephanie Park - sharp suit, sharper questions, ridiculous heels.

            "Why marketing, Diane?"

            "Because understanding why people choose what they choose is the same as philosophy. Just more profitable."

            She laughs. Actual, genuine laughter.

            "You're hired. Start Monday. Meet the team Friday night. Drinks at Morrison's."`,
            sprite: 'stephanie',
            choices: [
                {
                    text: 'Accept everything. You\'re in.',
                    next: 'market_first_day',
                    relationships: { steph: 15 },
                    setFlags: { acceptedMarketing: true },
                    chapter: 2
                },
                {
                    text: 'Accept the job, skip the drinks. You have a family.',
                    next: 'market_family_first',
                    relationships: { steph: -5, mark: 10, kids: 10 },
                    setFlags: { acceptedMarketing: true }
                },
                {
                    text: 'Negotiate remote work two days a week.',
                    next: 'market_negotiate',
                    relationships: { steph: 5, mark: 15 }
                }
            ]
        },

        market_first_day: {
            text: `Monday morning, 8 AM sharp. The office hums with energy. Stephanie introduces you to the team.

            Then you meet Alex Chen. Senior creative. Messy hair, coffee-stained Ramones t-shirt, eyes that actually see you.

            "Philosophy major, right?" he says. "I did comparative literature. We're the weirdos here."

            He's 28. You're 42. You're married. He's... not wearing a ring.

            This should not matter.`,
            sprite: 'alex',
            choices: [
                {
                    text: 'Keep it professional. You\'re here to work.',
                    next: 'market_professional',
                    relationships: { alex: 5, steph: 10 }
                },
                {
                    text: 'Bond over shared interests. Work friends are normal.',
                    next: 'market_alex_friends',
                    relationships: { alex: 15 }
                },
                {
                    text: 'Feel that spark and immediately shut it down.',
                    next: 'market_avoid_alex',
                    relationships: { alex: -5, steph: 10 }
                }
            ]
        },

        market_alex_friends: {
            text: `It starts innocently. Coffee breaks discussing Kafka. Lunch debates about whether advertising is ethical. He makes you laugh. Really laugh.

            At home, Mark asks, "How's the new job?"

            "Fine," you say, which is a lie. It's exhilarating. Challenging. And Alex...

            Three weeks in, you're working late on a campaign pitch. Just you and Alex. The office is empty.

            "You're different," he says. "Not like the corporate types."

            "I'm 42 and married with kids."

            "I know. Doesn't change what I said."`,
            sprite: 'alex',
            choices: [
                {
                    text: 'Address this directly. "We can\'t do this."',
                    next: 'market_alex_boundaries',
                    relationships: { alex: -10, mark: 5 }
                },
                {
                    text: 'Let the moment breathe. See what happens.',
                    next: 'market_alex_kiss',
                    relationships: { alex: 30, mark: -20 },
                    setFlags: { romanceStarted: true }
                },
                {
                    text: 'Make a joke. Deflect the tension.',
                    next: 'market_alex_deflect',
                    relationships: { alex: 5 }
                }
            ]
        },

        market_alex_kiss: {
            text: `He kisses you. Or you kiss him. Later, you won't remember who moved first.

            What you will remember: feeling seen. Desired. Not as a wife or mother but as Diane. Just Diane.

            It's 11 PM. Your phone has six missed calls from Mark.

            "I should go," you whisper.

            "I know," Alex says. But neither of you moves.`,
            sprite: 'alex',
            choices: [
                {
                    text: 'Go home. End this before it starts.',
                    next: 'market_alex_end_early',
                    relationships: { alex: -15, mark: -10 }
                },
                {
                    text: 'Stay. Tomorrow can wait.',
                    next: 'market_alex_affair',
                    relationships: { alex: 40, mark: -30, kids: -15 }
                },
                {
                    text: 'Stop. "This is wrong. I\'m sorry."',
                    next: 'market_alex_guilty',
                    relationships: { alex: -5, mark: -5 }
                }
            ]
        },

        market_alex_affair: {
            text: `It becomes your second life. By day: creative director, wife, mother. By night: texts you delete, excuses you invent, a version of yourself you thought was dead.

            Alex doesn't ask you to leave Mark. He just... exists. Makes you coffee the way you like it. Remembers things you say. Looks at you like you're extraordinary.

            Three months in, Stephanie calls you into her office.

            "The Detroit campaign team wants you to lead. Six months. Huge opportunity."

            She pauses. "Alex is already assigned to the project."`,
            sprite: 'stephanie',
            choices: [
                {
                    text: 'Take the job. Six months with Alex.',
                    next: 'market_detroit',
                    relationships: { alex: 30, steph: 20, mark: -40, kids: -30 }
                },
                {
                    text: 'Decline. End this before you destroy everything.',
                    next: 'ending_marketing_return',
                    relationships: { alex: -30, steph: -20, mark: 10 }
                },
                {
                    text: 'Take the job. End things with Alex first.',
                    next: 'market_breakup_alex',
                    relationships: { alex: -20, steph: 20, mark: -15 }
                }
            ]
        },

        market_detroit: {
            text: `Detroit is cold in November. The hotel suite has a view of the river. Alex is three doors down.

            Mark calls every night. The kids FaceTime. You send presents. You are there and not there.

            The campaign is brilliant. You and Alex work like you're one mind split between two bodies. Stephanie calls it "the best work the agency has ever produced."

            On the last night, Alex says, "Come with me. Leave him. We could have this every day."

            Your phone rings. Mark's ringtone. Alex watches you.`,
            sprite: 'alex',
            choices: [
                {
                    text: 'Choose Alex. Build a new life.',
                    next: 'ending_marketing_love',
                    relationships: { alex: 50, mark: -60, kids: -50, steph: 10 }
                },
                {
                    text: 'Choose your family. End it with Alex.',
                    next: 'ending_marketing_sacrifice',
                    relationships: { alex: -40, mark: -30, kids: 10, steph: -15 }
                },
                {
                    text: 'Answer the phone. Let Mark decide.',
                    next: 'market_confession',
                    relationships: { alex: -20, mark: -50 }
                }
            ]
        },

        market_mark_excited: {
            text: `Mark reads the salary line three times. "Diane. This is... this is more than I make."

            You see it happen in real time: pride warring with ego. The man who's been the breadwinner for 15 years facing obsolescence.

            "We could pay off the mortgage," you say carefully. "Save for college. Take that Italy trip we always talked about."

            He nods slowly. "Yeah. Yeah, that's great, hon."

            The 'hon' sounds like a door closing.`,
            sprite: 'mark',
            choices: [
                {
                    text: 'Address his feelings. "Are you okay with this?"',
                    next: 'market_mark_talk',
                    relationships: { mark: 10 }
                },
                {
                    text: 'Push forward. "I have the interview Friday."',
                    next: 'market_interview',
                    relationships: { mark: -10 }
                },
                {
                    text: 'Offer to decline if he\'s uncomfortable.',
                    next: 'market_mark_insecure',
                    relationships: { mark: 15 }
                }
            ]
        },

        // ============================================
        // PATH 3: INFLUENCER / HOMESCHOOL
        // ============================================
        path_influencer_intro: {
            text: `"Mom Life Digital is looking for authentic voices. Your philosophy background + real parenting experience = perfect. Potential: $50K+ first year through sponsorships."

            You almost laugh. Influencer? You can barely manage Instagram.

            But $50K working from home... That's real money. Time with the kids. No commute. You could homeschool. Travel. Be THERE.

            The kids would love it. Mark would... well, you're not sure.`,
            sprite: 'diane_neutral',
            choices: [
                {
                    text: 'Research it seriously. This could work.',
                    next: 'influencer_research',
                    relationships: { kids: 10 }
                },
                {
                    text: 'Ask the kids what they think.',
                    next: 'influencer_kids_input',
                    relationships: { kids: 20 }
                },
                {
                    text: 'Show Mark. Get his blessing first.',
                    next: 'influencer_mark_input',
                    relationships: { mark: 10 }
                }
            ]
        },

        influencer_research: {
            text: `You fall down the rabbit hole. Hours of scrolling through successful mom influencers. They make it look easy. Perfect lighting. Happy kids. Sponsored posts for everything from diapers to vacations.

            One video catches your eye: "How I Make $10K/Month While Homeschooling My Kids."

            Homeschooling. You hadn't considered that. Taking the kids out of school. Full control over their education. Travel during off-season. Field trips as curriculum.

            It's radical. It's terrifying. It's... possible?`,
            sprite: 'diane_worried',
            choices: [
                {
                    text: 'Pitch the whole vision to Mark: influencer + homeschool.',
                    next: 'influencer_big_pitch',
                    relationships: { kids: 15, mark: -5 }
                },
                {
                    text: 'Start small. Just the influencer thing first.',
                    next: 'influencer_start_small',
                    relationships: { mark: 5 }
                },
                {
                    text: 'Talk to other homeschool parents first.',
                    next: 'influencer_community',
                    relationships: { kids: 10 }
                }
            ]
        },

        influencer_big_pitch: {
            text: `Family meeting. The kids are confused. Mark is skeptical.

            "Let me get this straight," Mark says. "You want to pull the kids from school, make videos for the internet, and... travel?"

            "Educational travel. And I'd be making money. Good money. While being fully present with our kids."

            Your daughter, Emma (13), lights up. "We could go to Bali! My friend Jessica's family went!"

            Your son, Connor (10), looks worried. "What about baseball?"

            Mark looks like he swallowed a lemon.`,
            sprite: 'kids',
            choices: [
                {
                    text: 'Appeal to Mark\'s practical side. Show him the numbers.',
                    next: 'influencer_convince_mark',
                    relationships: { mark: 5, kids: 10 }
                },
                {
                    text: 'Let the kids\' excitement win him over.',
                    next: 'influencer_kids_win',
                    relationships: { mark: -5, kids: 25 }
                },
                {
                    text: 'Compromise. One year trial. Then reassess.',
                    next: 'influencer_trial',
                    relationships: { mark: 10, kids: 15 },
                    setFlags: { acceptedInfluencer: true }
                }
            ]
        },

        influencer_trial: {
            text: `Mark agrees to one year. "But if this doesn't work, they go back to school."

            You launch "Philosophical Parenting with Diane" in June. Your first video: "Teaching Kids About Existentialism Through Minecraft."

            It goes viral. 100K views in a week. Brands start reaching out.

            By August, you're making $3K/month. The kids are thriving with self-directed learning. Emma is teaching herself Japanese. Connor built a robot.

            Then the DM comes: "Hey! I run educational family travel tours. Interested in partnering? Free trip to Bali, all expenses. Just document it."`,
            sprite: 'diane_happy',
            choices: [
                {
                    text: 'Accept immediately. This is the dream.',
                    next: 'influencer_bali',
                    relationships: { kids: 30, mark: -10 },
                    chapter: 2
                },
                {
                    text: 'Discuss with Mark first. It\'s three weeks away.',
                    next: 'influencer_bali_discuss',
                    relationships: { mark: 10, kids: 20 }
                },
                {
                    text: 'Decline. Too much too fast.',
                    next: 'influencer_slow_growth',
                    relationships: { mark: 15, kids: -10 }
                }
            ]
        },

        influencer_bali: {
            text: `Bali is magic. Rice terraces. Temple ceremonies. The kids swimming in waterfalls. Your content is golden.

            Mark stayed home. "Someone needs to keep their job," he said. The subtext: "Someone needs to be the adult."

            On day five, Emma makes a friend. Her name is Kai, 14, from a family that's been traveling for three years. Her mom, Sarah, is also an influencer.

            "We're heading to Thailand next month," Sarah says. "Then Vietnam. The kids learn more in six months of travel than six years of school."

            You believe her. You can see it in Emma and Connor's eyes.`,
            sprite: 'airport',
            choices: [
                {
                    text: 'Propose extending the trip. Keep traveling.',
                    next: 'influencer_extend_travel',
                    relationships: { kids: 35, mark: -25 }
                },
                {
                    text: 'Return home. Mark is struggling alone.',
                    next: 'influencer_return_home',
                    relationships: { mark: 10, kids: -15 }
                },
                {
                    text: 'Ask Mark to quit his job. Join you. Do this together.',
                    next: 'influencer_family_travel',
                    relationships: { mark: -15, kids: 30 }
                }
            ]
        },

        influencer_extend_travel: {
            text: `You book Thailand. Then Vietnam. Then Japan. Four months become six. Your channel grows to 500K followers. Sponsorships roll in. You're making $15K/month.

            Mark's texts become shorter. The kids barely mention him. Emma says, "Why would we go back? This is so much better."

            You're in Tokyo when Mark calls. Not texts. Calls.

            "Diane, this has to stop. You've been gone six months. The kids need stability. I need... I need my wife back."

            But you're not that wife anymore.`,
            sprite: 'diane_worried',
            choices: [
                {
                    text: 'Choose this life. Offer Mark an ultimatum.',
                    next: 'ending_influencer_free',
                    relationships: { kids: 40, mark: -50 }
                },
                {
                    text: 'Go home. Save the marriage.',
                    next: 'ending_influencer_compromise',
                    relationships: { mark: 15, kids: -20 }
                },
                {
                    text: 'Propose family therapy via video call.',
                    next: 'influencer_virtual_therapy',
                    relationships: { mark: -10, kids: 20, chen: 15 }
                }
            ]
        },

        // ============================================
        // DEATH ENDINGS (Time Loop Mechanics)
        // ============================================
        ending_death_coffee: {
            title: '☠️ Death by Caffeine',
            text: `You drink your seventh espresso of the day. Your heart... disagrees with this choice.

            The last thing you see is Mark, finally looking up from his phone, calling 911.

            Everything goes dark.

            Then...

            You're standing in your kitchen at 6:47 AM. The coffee maker gurgles. Mark is scrolling through his phone.

            This has happened before.`,
            sprite: 'diane_dead',
            isEnding: true,
            allowsLoop: true
        },

        ending_death_car: {
            title: '☠️ The Long Drive',
            text: `The argument with Mark escalates. You grab your keys. "I need to clear my head."

            The rain is heavy. You're crying. The phone won't stop buzzing. You reach for it.

            You don't see the truck.

            ---

            You're standing in your kitchen at 6:47 AM. The coffee maker gurgles its final breath. Mark is scrolling through his phone.

            Wait. This is... familiar.`,
            sprite: 'diane_dead',
            isEnding: true,
            allowsLoop: true
        },

        ending_death_despair: {
            title: '☠️ The Quiet End',
            text: `Some choices lead here. Too many small compromises. Too many pieces of yourself given away.

            The pills are from Dr. Chen. For anxiety, she said. You take all of them.

            It's very quiet.

            ---

            6:47 AM. Kitchen. Coffee maker. Mark's phone. The kids arguing upstairs.

            How many times have you lived this morning?`,
            sprite: 'diane_dead',
            isEnding: true,
            allowsLoop: true
        },

        // ============================================
        // HIDDEN FOURTH PATH (Unlocks after 3+ loops)
        // ============================================
        mysterious_door_appears: {
            text: `You're standing in your kitchen. 6:47 AM. Again.

            But something is different.

            There's a door in your kitchen that wasn't there before. Impossible. You've lived here for 12 years. But there it is, between the refrigerator and the pantry.

            Mark doesn't see it. The kids walk right past it.

            Only you can see the door.

            It's slightly ajar. Warm light spills from underneath. You hear... voices? Laughter?`,
            sprite: 'mysterious_door',
            choices: [
                {
                    text: 'Open the door.',
                    next: 'fourth_path_enter',
                    setFlags: { doorUnlocked: true }
                },
                {
                    text: 'Ignore it. Choose one of the three emails instead.',
                    next: 'start'
                },
                {
                    text: 'Ask Mark if he sees it.',
                    next: 'fourth_path_mark_reaction'
                }
            ]
        },

        fourth_path_enter: {
            text: `You step through.

            On the other side is... a café? No. An office? No. A classroom?

            It's all of them. None of them. It's a space that shifts as you look at it.

            Sitting at a table that wasn't there a moment ago is... you. Another you. But different. She looks peaceful. Whole.

            "Took you long enough," she says. "How many loops?"

            You know exactly what she means.`,
            sprite: 'diane_happy',
            choices: [
                {
                    text: '"Too many. What is this place?"',
                    next: 'fourth_path_explanation',
                    chapter: 3
                },
                {
                    text: '"Am I dead?"',
                    next: 'fourth_path_not_dead'
                },
                {
                    text: '"Who are you?"',
                    next: 'fourth_path_who'
                }
            ]
        },

        fourth_path_explanation: {
            text: `"This," she gestures at the shifting space, "is the place between choices. Most people never see it. They live one life, make one set of choices, never knowing about the paths not taken."

            "But you? You've died enough times to break through. You've lived enough lives to see the pattern."

            She pours two cups of coffee from a pot that definitely wasn't there before.

            "The question isn't which path to choose. The question is: why are you choosing?"`,
            sprite: 'cafe',
            choices: [
                {
                    text: '"I want to be happy."',
                    next: 'fourth_path_happy'
                },
                {
                    text: '"I want to be myself."',
                    next: 'fourth_path_self'
                },
                {
                    text: '"I want everyone else to be happy."',
                    next: 'fourth_path_others'
                }
            ]
        },

        fourth_path_self: {
            text: `"Finally," she smiles. "Not happiness. Not duty. Self. Do you even remember who that is?"

            You think about the woman who loved philosophy. The woman who wanted to matter. The woman who got lost in should and supposed to and good wife, good mother.

            "I'm Diane," you say. "I'm 42. I love ideas and my kids and coffee with too much caramel. I'm scared and brave. I'm selfish and selfless. I'm all of it."

            The space around you solidifies. You're in a room filled with doors. Hundreds of them. Thousands.

            "Every choice you've ever made. Every choice you could make. Which one is yours?"`,
            sprite: 'mysterious_door',
            choices: [
                {
                    text: 'A door marked "Freedom"',
                    next: 'ending_fourth_path_freedom'
                },
                {
                    text: 'A door marked "Integration"',
                    next: 'ending_fourth_path_integration'
                },
                {
                    text: 'A door with no label, slightly ajar',
                    next: 'ending_fourth_path_mystery'
                }
            ]
        },

        // ============================================
        // TRUE ENDINGS
        // ============================================
        ending_fourth_path_integration: {
            title: '🌟 The Integration',
            text: `You step through the door marked "Integration."

            You're back in your kitchen. 6:47 AM. But you remember all of it. Every loop. Every choice. Every version of yourself.

            Mark looks up. "You okay? You zoned out for a second."

            "I'm perfect," you say. And mean it.

            You don't choose the professor path. Or the marketing path. Or the influencer path.

            You choose the Diane path.

            You take the university job part-time. You consult for the marketing agency remotely. You start a philosophy podcast with the kids. You go to therapy. You go on dates with Mark. You have coffee with friends named James and Alex and Sarah who may or may not exist yet.

            You choose all of it. None of it. Your own version.

            Because existence precedes essence. And you get to define what your existence means.

            The coffee maker beeps. You smile. This time, Mark looks up.

            "What are you thinking about?" he asks.

            "Everything," you say. "Absolutely everything."`,
            sprite: 'diane_happy',
            isEnding: true,
            allowsLoop: false
        },

        ending_professor_happiness: {
            title: '💼 The Academic Life',
            text: `You leave Mark. Move in with James. The divorce is messy. The kids are hurt but understanding.

            Two years later, you're publishing your second book. James teaches in the morning, you teach in the afternoon. Your coffee dates become your favorite part of the day.

            The kids visit every other weekend. Emma is applying to colleges. Connor forgave you around month eight.

            Mark remarried. Someone who makes him happy. You're glad.

            You chose yourself. It cost everything. It was worth it.`,
            sprite: 'diane_happy',
            isEnding: true,
            allowsLoop: false
        },

        ending_marketing_love: {
            title: '💔 The Choice',
            text: `You choose Alex. The divorce is brutal. Mark gets primary custody because you "abandoned your family."

            You and Alex move to Detroit. Open your own creative agency. It's successful. You're happy. Mostly.

            The kids call less over time. Emma stopped answering your texts when she turned 16. Connor sends occasional updates.

            Alex is wonderful. Patient. Loving. But sometimes you catch yourself wondering what Emma looks like now. If Connor still plays baseball.

            Freedom has a price. You're still paying it.`,
            sprite: 'alex',
            isEnding: true,
            allowsLoop: false
        },

        ending_influencer_free: {
            title: '✈️ The Nomad',
            text: `You choose travel. Mark files for divorce. The kids stay with you—they're old enough to choose.

            Three years later, you've been to 47 countries. Emma speaks four languages. Connor is an accomplished photographer.

            Your channel has 2 million followers. Your book "Philosophical Parenting on the Road" is a bestseller.

            Mark sends child support. You send postcards. The kids video call him monthly. It's... complicated. But it works.

            You're happy. The kids are thriving. You built a life on your terms.`,
            sprite: 'diane_happy',
            isEnding: true,
            allowsLoop: false
        },

        ending_regret_early: {
            title: '😔 The Safe Choice',
            text: `You delete the email. All of them.

            Five years later, nothing has changed. Mark still scrolls through his phone. The kids are in high school, barely home. You still make coffee at 6:47 AM.

            Sometimes you wonder about the woman you could have been.

            Mostly, you try not to think about it.`,
            sprite: 'diane_worried',
            isEnding: true,
            allowsLoop: false
        },

        ending_medicated: {
            title: '💊 The Numb',
            text: `Dr. Chen prescribes Zoloft. Then Wellbutrin. Then Lexapro. Then a combination.

            The edges soften. The dreams fade. You stop thinking about the emails. About choices. About who you could be.

            Mark says you seem better. The kids say you seem... present? Ish?

            You don't feel much of anything. Which is, technically, better than feeling everything.

            This is fine. You're fine. Everything is fine.`,
            sprite: 'diane_neutral',
            isEnding: true,
            allowsLoop: true  // Because this is a kind of death too
        },

        ending_exposed_scandal: {
            title: '💥 The Scandal',
            text: `A student sees you with James. Posts it on social media. The university investigates.

            You're not fired—technically, you didn't violate policy. But the whispers follow you. Department meetings go quiet when you enter.

            Mark finds out through Facebook. The divorce is public and vicious.

            James distances himself. "I have tenure to think about."

            You keep your job. Lose your marriage. Lose your dignity. Lose your... self?

            Two years later, you transfer to a smaller university in a different state. Start over. Again.`,
            sprite: 'diane_worried',
            isEnding: true,
            allowsLoop: false
        },

        ending_professor_independent: {
            title: '🎓 The Solo Path',
            text: `You focus on career and kids. Let Mark drift away or grow closer on his own timeline.

            Turns out, he grows closer. The space you create lets him breathe. He starts therapy himself. You start actually talking.

            Your marriage isn't perfect. But it's honest. You're partners, not just spouses.

            Your first book is published: "Existentialism for Exhausted Parents." It's dedicated to Mark and the kids.

            You're a tenured professor at 47. Your daughter wants to study philosophy. Your son wants to be a therapist.

            You built something real. Slowly. On purpose.`,
            sprite: 'diane_happy',
            isEnding: true,
            allowsLoop: false
        },

        ending_marketing_sacrifice: {
            title: '😢 The Return',
            text: `You end it with Alex. Return home. Tell Mark you were "working late a lot."

            He doesn't believe you. But he doesn't ask questions either.

            The marriage survives. You stay at the agency. Never work late with Alex again. He transfers to the New York office within a year.

            You're successful. Promoted. Financially secure.

            You're also empty.

            Sometimes you wonder if Alex thinks about you. You definitely think about him.

            This is what responsible adults do. You made the right choice.

            Right?`,
            sprite: 'diane_worried',
            isEnding: true,
            allowsLoop: false
        },

        ending_influencer_compromise: {
            title: '🏠 The Middle Way',
            text: `You come home after six months. The channel continues, but domestically. Local field trips. Weekend adventures.

            Mark is relieved but distant. It takes a year of couples therapy to rebuild trust.

            The kids are changed. Emma has wanderlust. Connor wants to travel when he's 18.

            Your channel levels off at 300K followers. Enough for solid income. Not enough for the dream.

            You're not sure what you feel. Not regret, exactly. But not fulfillment either.

            You compromised. Like always.`,
            sprite: 'home',
            isEnding: true,
            allowsLoop: false
        },

        ending_fourth_path_freedom: {
            title: '🦋 The Liberation',
            text: `You step through the door marked "Freedom."

            When you open your eyes, you're 23 again. Before Mark. Before the kids. Before the compromises.

            You remember everything. Every loop. Every life. Every version of yourself.

            This time, you choose yourself first. Always.

            You finish your PhD. Publish your book at 28. Meet someone who sees you as complete, not as a project. Have kids when you're ready. On your terms.

            Or maybe you don't have kids. Maybe you travel. Maybe you teach. Maybe you do all of it. None of it.

            The point is: you choose.

            Existence precedes essence.

            And you? You exist.`,
            sprite: 'diane_happy',
            isEnding: true,
            allowsLoop: false
        },

        ending_fourth_path_mystery: {
            title: '❓ The Unknown',
            text: `You open the unlabeled door.

            On the other side is...

            [The screen glitches. Text scrambles.]

            ...something else entirely. Something the story doesn't have words for yet.

            You are Diane. You are 42. You are every age. You are no age.

            You are the choice. The crossroads. The woman standing at the intersection of infinite possibilities.

            The coffee maker beeps.

            Mark looks up.

            "You okay?" he asks.

            You smile.

            "I'm perfect. I'm terrible. I'm everything in between."

            You reach for your phone. Three emails. Three paths. Or maybe four. Or maybe a thousand.

            This time, you know: it doesn't matter which one you choose.

            What matters is that you're choosing.`,
            sprite: 'mysterious_door',
            isEnding: true,
            allowsLoop: false
        }
    }
};

// Check for mysterious door condition
function checkMysteriousDoor() {
    if (window.game && window.game.loopCount >= 3) {
        return 'mysterious_door_appears';
    }
    return 'start';
}
