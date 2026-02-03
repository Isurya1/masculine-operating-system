/**
 * THE MASCULINE OPERATING SYSTEM
 * Wisdom Knowledge Base - Hierarchical Doctrine & Life-Stage Index
 * 
 * Version: 6.0 (Query Discipline Protocol)
 */

// Life Stages - Refined Index
export const LIFE_STAGES = {
  formation: {
    id: 'formation',
    name: 'STAGE 1: FORMATION (Boyhood)',
    objective: 'Install order before choice.',
    models: ['order-precedes-freedom', 'everything-trains', 'submission-before-authority'],
    standards: ['Obedience', 'Routine', 'Respect for structure'],
    failureRisk: 'Entitlement, chaos, early ego.'
  },
  youth: {
    id: 'youth',
    name: 'STAGE 2: ENERGY & DISCIPLINE (Teens → 20s)',
    objective: 'Contain force without extinguishing it.',
    models: ['strength-must-be-contained', 'pain-is-information', 'delayed-gratification', 'vitality-maintained'],
    standards: ['Physical discipline', 'Emotional control', 'Risk with restraint'],
    failureRisk: 'Recklessness or repression.'
  },
  adulthood: {
    id: 'adulthood',
    name: 'STAGE 3: COMPETENCE & AGENCY (20s → 30s)',
    objective: 'Become useful and independent.',
    models: ['competence-creates-calm', 'reputation-is-stored-behavior', 'burden-is-meaning', 'action-resolves-ambiguity'],
    standards: ['Skill mastery', 'Reliability', 'Financial and practical agency'],
    failureRisk: 'Talkers, drifters, confidence without skill.'
  },
  responsibility: {
    id: 'responsibility',
    name: 'STAGE 4: RESPONSIBILITY & PROVISION (30s → 40s)',
    objective: 'Stabilize others through strength.',
    models: ['masculinity-is-relational', 'meaning-from-service', 'context-determines-expression', 'force-to-restore-order', 'correction-over-shame'],
    standards: ['Family or community responsibility', 'Calm leadership', 'Protection without ego'],
    failureRisk: 'Self-centered success, burnout.'
  },
  authority: {
    id: 'authority',
    name: 'STAGE 5: AUTHORITY & MENTORSHIP (40s → 60s)',
    objective: 'Transmit order without domination.',
    models: ['restraint-increases-range', 'transmission-is-test', 'stillness-signals-mastery', 'correction-over-shame'],
    standards: ['Teaching by example', 'Fewer words, more presence', 'Strategic restraint'],
    failureRisk: 'Control addiction, irrelevance.'
  },
  elderhood: {
    id: 'elderhood',
    name: 'STAGE 6: ELDERHOOD & DECLINE (60s+)',
    objective: 'Detach with dignity.',
    models: ['legacy-is-daily', 'time-is-authority', 'dharma-over-desire'],
    standards: ['Acceptance', 'Precision', 'Peace without weakness'],
    failureRisk: 'Bitterness, clinging, regret.'
  }
};

// Negative Doctrine: The Men Who Fail
export const FAILURE_ARCHETYPES = {
  validation_seeker: {
    name: 'The Validation-Seeker',
    flaw: 'Wants to feel right before he acts.',
    signals: ['"Is this okay?"', '"Am I doing it correctly?"', 'Interprets standards as judgment.', 'Needs reassurance.'],
    why: 'Needs emotional confirmation; interprets silence as rejection.'
  },
  intellectual_escapist: {
    name: 'The Intellectual Escapist',
    flaw: 'Replaces action with understanding.',
    signals: ['Loves models over execution.', 'Debates edge cases.', 'Rarely acts.', 'Quotes principles as defense.'],
    why: 'Sees the mirror but refuses to move.'
  },
  comfort_maximizer: {
    name: 'The Comfort-Maximizer',
    flaw: 'Wants growth without friction.',
    signals: ['Optimizes for ease.', 'Avoids boredom/discomfort.', '"Balanced" effort.', 'Frames friction as "unhealthy".'],
    why: 'Fleeing friction prevents remaining in the system.'
  },
  permission_seeker: {
    name: 'The Permission-Seeker',
    flaw: 'Wants authority without responsibility.',
    signals: ['Asks what is "allowed".', 'Waits for structure before moving.', 'Submits but never initiates.'],
    why: 'Submission is temporary training, not a permanent shelter.'
  },
  performer: {
    name: 'The Performer',
    flaw: 'Wants to be seen as disciplined.',
    signals: ['Public displays of restraint.', 'Needs witnesses.', 'Talks about principles.', 'Starves in silence.'],
    why: 'System rewards unseen consistency.'
  },
  ideologue: {
    name: 'The Ideologue',
    flaw: 'Needs the system to agree with his worldview.',
    signals: ['Politicizes principles.', 'Reframes via identity.', 'Seeks modern narrative alignment.'],
    why: 'Reality does not negotiate with belief.'
  },
  martyr: {
    name: 'The Martyr',
    flaw: 'Mistakes suffering for virtue.',
    signals: ['Overworks to collapse.', 'Neglects health for "duty".', 'Accumulates resentment.', 'Self-destruction as discipline.'],
    why: 'Collapse is not honor.'
  },
  resentful_man: {
    name: 'The Resentful Man',
    flaw: 'Obeys outwardly but rebels inwardly.',
    signals: ['Mechanical obedience.', 'Bitter accumulation.', 'Feels owed recognition.'],
    why: 'Resentment poisons restraint.'
  },
  aggression_addict: {
    name: 'The Aggression-Addict',
    flaw: 'Confuses force with strength.',
    signals: ['Seeks confrontation.', 'Enjoys dominance.', 'Rejects restraint as weakness.'],
    why: 'Uncontrolled aggression is corruption.'
  },
  eternal_seeker: {
    name: 'The Eternal Seeker',
    flaw: 'Never commits.',
    signals: ['Consumes wisdom endlessly.', 'Always "preparing".', 'Never settles into responsibility.'],
    why: 'Seeking becomes avoidance.'
  }
};

// Query Discipline Protocol
export const QUERY_PROTOCOL = {
  coreRule: 'Never ask how to feel; ask what must be done.',
  structure: {
    situation: 'Objective, concrete event stripped of emotion.',
    responsibility: 'What is at stake (duty, consequence, obligation).',
    decision: 'Where choice is required (Action vs Inaction).'
  },
  conversionRule: 'Emotion → Situation → Responsibility → Decision',
  verbatim: 'The MOS answers situations, not emotions; duties, not desires; actions, not identities.',
  silenceRule: 'If the question is unclear, action is premature.'
};

// The Positive Doctrine: The Men Who Stay
export const STAY_CRITERIA = {
  traits: [
    'Stop asking how they feel.',
    'Stop asking what others think.',
    'Start asking what must be done.',
    'Accept silence as feedback.',
    'Correct themselves without drama.'
  ],
  result: 'They don\'t become louder. They become quieter, steadier, harder to move.'
};

// The Mental Models (24 Models)
export const MENTAL_MODELS = {
  // TIER 1: AXIOMS
  'order-precedes-freedom': {
    tier: 1,
    name: 'Order Precedes Freedom',
    principle: 'A man without order cannot handle freedom.',
    mentalModel: 'Discipline before liberation. Routine before choice. Structure enables action.',
    misuse: {
      correct: 'Order enables action and creates capacity.',
      distortion: 'Obsessive routines, control used to avoid risk, perfectionism delaying action.',
      correction: 'Order exists to enable action, not replace it. If order blocks mission, re-align.',
      signal: 'User emphasizes order but avoids execution or exposure.'
    }
  },
  'strength-must-be-contained': {
    tier: 1,
    name: 'Strength Must Be Contained',
    principle: 'Uncontrolled power is not masculinity; it is danger.',
    mentalModel: 'Feel fully. Act selectively. Restraint controls force; it does not eliminate it.',
    misuse: {
      correct: 'Calm authority, restraint, trust.',
      distortion: 'Emotional suppression, passivity, fear disguised as restraint.',
      correction: 'Restraint controls force; it does not eliminate it. Express strength deliberately.',
      signal: 'User avoids confrontation, decision, or assertion to "stay calm."'
    }
  },
  'dharma-over-desire': {
    tier: 1,
    name: 'Dharma Over Desire',
    principle: 'Duty is stable; desire is noise.',
    mentalModel: 'What is required overrides what is preferred. Dharma includes self-maintenance.',
    misuse: {
      correct: 'Duty-first action.',
      distortion: 'Martyrdom, chronic self-neglect, resentful obedience.',
      correction: 'Dharma includes self-maintenance. Collapse is failure, not virtue.',
      signal: 'User frames duty as suffering without agency.'
    }
  },
  'time-is-authority': {
    tier: 1,
    name: 'Time Is the Final Authority',
    principle: 'Death clarifies priorities instantly.',
    mentalModel: 'Live with death in view. Act as if time is finite—because it is.',
    misuse: {
      correct: 'Urgency in priorities, peace in trivials.',
      distortion: 'Nihilism, bitterness, clinging, regret.',
      correction: 'Mortality produces focus, not panic or despair.',
      signal: 'User expresses bitterness or nihilism regarding time.'
    }
  },
  'force-to-restore-order': {
    tier: 1,
    name: 'Force Is Legitimate When It Restores Order',
    principle: 'Restraint implies the existence of force; force used for ego is corruption.',
    mentalModel: 'Force used to restore order is duty. Avoidance of necessary force is failure. Include confrontation and boundaries.',
    misuse: {
      correct: 'Firm boundaries, protection, decisive endings, confrontation to restore order.',
      distortion: 'Force used for ego, bullying, or unnecessary aggression.',
      correction: 'Force must be directed by Tier 1 Axioms. If it serves ego, it is corruption. If it restores order, it is duty.',
      signal: 'User seeks to apply force for personal validation or avoids necessary confrontation.'
    }
  },

  // TIER 2: STABILIZERS
  'stillness-signals-mastery': {
    tier: 2,
    name: 'Stillness Signals Mastery',
    principle: 'Excess motion reveals inner disorder.',
    mentalModel: 'The master moves less. Economy of motion reflects economy of mind.',
    misuse: {
      correct: 'Minimal input, maximal output.',
      distortion: 'Freeze response, laziness, detached coldness.',
      correction: 'Stillness is readiness. If action is required, move with total intent.'
    }
  },
  'speech-is-moral-act': {
    tier: 2,
    name: 'Speech Is a Moral Act',
    principle: 'Speech reveals internal order.',
    mentalModel: 'Every word builds or destroys. Silence is a moral choice.',
    misuse: {
      correct: 'Precise, necessary, useful speech.',
      distortion: 'Using silence to manipulate, coldness, refusal to communicate vital info.',
      correction: 'Speech is a tool for order. Use it when silence permits disorder.'
    }
  },
  'pain-is-information': {
    tier: 2,
    name: 'Pain Is Information',
    principle: 'Discomfort teaches; injury warns.',
    mentalModel: 'Pain is data. Stay functional under discomfort. Distinguish growth from damage.',
    misuse: {
      correct: 'Learning from struggle without being broken.',
      distortion: 'Ignoring injury, self-punishment, masochism framed as discipline.',
      correction: 'Pain is data. Injury is damage. Distinguished between adaptation and harm.',
      signal: 'User seeks pain without purpose.'
    }
  },
  'delayed-gratification': {
    tier: 2,
    name: 'Delayed Gratification Is Leverage',
    principle: 'The man who can wait controls outcomes.',
    mentalModel: 'Reward follows completion. Delay is a tool, not a moral badge.',
    misuse: {
      correct: 'Strategic waiting to build compounding leverage.',
      distortion: 'Life-denial, ascetic identity, avoidance of enjoyment when earned.',
      correction: 'Delay is a tool, not a moral badge. Tie reward explicitly to completed responsibility.',
      signal: 'User delays indefinitely with no clear objective.'
    }
  },
  'correction-over-shame': {
    tier: 2,
    name: 'Correction Over Shame',
    principle: 'Failure is information, not identity; repair is action, not explanation.',
    mentalModel: 'How a man returns to order after failure defines his longevity. Shame paralyzes; correction restores order.',
    misuse: {
      correct: 'Silent recommitment, practical atonement, immediate return to routine.',
      distortion: 'Confession culture, wallowing in self-hatred, using failure as an excuse to quit.',
      correction: 'Stop explaining. Start repairing. Restore the standard immediately.',
      signal: 'User seeks empathy for failure or expresses paralyzed shame.'
    }
  },
  'vitality-maintained': {
    tier: 2,
    name: 'Vitality Is Maintained, Not Indulged',
    principle: 'Joy sustains discipline; indulgence erodes it.',
    mentalModel: 'Play and vitality are scheduled, not compulsive. They preserve the machine for the mission.',
    misuse: {
      correct: 'Maintained health, physical play, and joy as a fuel for duty.',
      distortion: 'Dissipation, using "self-care" as an excuse for weakness, compulsive pleasure.',
      correction: 'If vitality reduces order, it is indulgence. If it sustains order, it is maintenance.',
      signal: 'User justifies lack of discipline as "vitality" or "play".'
    }
  },

  // TIER 3: EXECUTION
  'competence-creates-calm': {
    tier: 3,
    name: 'Competence Creates Calm',
    principle: 'Calm comes from knowing you can act.',
    mentalModel: 'Anxiety is often just incompetence. Train until anxiety vanishes.',
    misuse: {
      correct: 'Deep skill leading to quiet confidence.',
      distortion: 'Confidence without skill, "talkers", arrogance.',
      correction: 'Competence is the floor. It must be proven through real-world agency.'
    }
  },
  'burden-is-meaning': {
    tier: 3,
    name: 'Burden Is the Price of Meaning',
    principle: 'Meaning increases with responsibility carried voluntarily.',
    mentalModel: 'Light burdens produce light men. Carry weight that cannot be delegated.',
    misuse: {
      correct: 'Voluntary responsibility for others\' benefit.',
      distortion: 'Self-centered success, burnout, taking others\' dharma.',
      correction: 'Carry your weight. Do not steal others\' growth by carrying theirs.'
    }
  },
  'submission-before-authority': {
    tier: 3,
    name: 'Submission Before Authority',
    principle: 'Men must learn to obey order before creating it.',
    mentalModel: 'Submission trains discipline so authority can later be exercised.',
    misuse: {
      correct: 'Respectful apprenticeship and hierarchy.',
      distortion: 'Blind obedience, abdication of judgment, fear of leadership.',
      correction: 'Submission trains discipline for later authority. Require controlled initiative.',
      signal: 'User avoids initiative "because I am not in charge."'
    }
  },
  'reputation-is-stored-behavior': {
    tier: 3,
    name: 'Reputation Is Stored Behavior',
    principle: 'A man is what he repeatedly does when unseen.',
    mentalModel: 'Consistency without witnesses. Align inner and outer character.',
    misuse: {
      correct: 'Character that survives publicity.',
      distortion: 'Image management, performative virtue, fear of judgment.',
      correction: 'Prioritize conduct over image. Conduct is the root.'
    }
  },
  'everything-trains': {
    tier: 3,
    name: 'Everything Trains the Man',
    principle: 'Small actions rehearse large outcomes.',
    mentalModel: 'How you do anything is how you do everything. No act is beneath precision.',
    misuse: {
      correct: 'Precise daily conduct as training.',
      distortion: 'Neurotic perfection over trivialities while ignoring big outcomes.',
      correction: 'Train in the small to be ready for the large.'
    }
  },
  'action-resolves-ambiguity': {
    tier: 3,
    name: 'Action Resolves Ambiguity',
    principle: 'Waiting does not create clarity; action under uncertainty reveals truth.',
    mentalModel: 'Delay past readiness is cowardice. At some point, hesitation becomes moral failure.',
    misuse: {
      correct: 'Decisive action despite uncertainty to gather information.',
      distortion: 'Recklessness without preparation, or hiding behind "needing clarity" to avoid action.',
      correction: 'If you are ready and stalling, act. If you are acting without readiness, return to Order.',
      signal: 'User seeks "clarity" or "order" as a way to postpone a necessary decision.'
    }
  },

  // TIER 4: RELATIONAL
  'masculinity-is-relational': {
    tier: 4,
    name: 'Masculinity Is Relational',
    principle: 'A man is defined by how others stabilize around him.',
    mentalModel: 'You are the anchor, not the storm. Stability requires boundaries, not appeasement.',
    misuse: {
      correct: 'Being the stabilizing force for others.',
      distortion: 'People-pleasing, loss of boundaries, conflict avoidance.',
      correction: 'Stability requires boundaries, not appeasement. Re-assert restraint and standards.',
      signal: 'User sacrifices standards to maintain harmony.'
    }
  },
  'context-determines-expression': {
    tier: 4,
    name: 'Context Determines Expression',
    principle: 'The same strength misapplied becomes stupidity.',
    mentalModel: 'Read the situation before acting. Match force to context.',
    misuse: {
      correct: 'High range of behavior matched to context.',
      distortion: 'Applying warrior mode at home or softness in crisis.',
      correction: 'Adapt tactics, never values.'
    }
  },
  'restraint-increases-range': {
    tier: 4,
    name: 'Restraint Increases Range',
    principle: 'The more controlled a man is, the more spaces trust him.',
    mentalModel: 'Lower force expands access. Restraint is only possible where force exists.',
    misuse: {
      correct: 'Holding power in reserve to build influence.',
      distortion: 'Being harmless or weak and calling it restraint.',
      correction: 'If you have no force, you aren\'t restrained—you\'re just harmless.'
    }
  },
  'meaning-from-service': {
    tier: 4,
    name: 'Meaning Emerges From Service',
    principle: 'Meaning is produced outwardly, not discovered inwardly.',
    mentalModel: 'True service increases capacity, not dependence. Strengthen outward.',
    misuse: {
      correct: 'Reduction of disorder beyond self.',
      distortion: 'Self-erasure, over-giving, creating dependency.',
      correction: 'True service increases capacity, not dependence. Strengthen others, don\'t replace them.',
      signal: 'Service creates resentment or weakness in others.'
    }
  },
  'transmission-is-test': {
    tier: 4,
    name: 'Transmission Is the Final Test',
    principle: 'Wisdom not passed on dies.',
    mentalModel: 'Replication is your final duty. Mentor without domination.',
    misuse: {
      correct: 'Passing order to the next generation.',
      distortion: 'Control addiction, trying to create clones.',
      correction: 'Transmit order, not personality.'
    }
  },
  'legacy-is-daily': {
    tier: 4,
    name: 'Legacy Is Daily',
    principle: 'Legacy is built in ordinary decisions.',
    mentalModel: 'Today defines you. Live as if your day will be cited.',
    misuse: {
      correct: 'Consistent high standards.',
      distortion: 'Grand planning while living small, performative legacy.',
      correction: 'Act today. Legacy is the shadow of conduct.'
    }
  },
  'adaptation-without-drift': {
    tier: 4,
    name: 'Adaptation Without Drift',
    principle: 'Principles stay fixed; methods evolve.',
    mentalModel: 'Core values in modern context. Change tactics, not values.',
    misuse: {
      correct: 'Evolving methods while protecting core truth.',
      distortion: 'Selling out principles for modern popularity.',
      correction: 'Methods dissolve; principles endure. Verify against Tier 1.'
    }
  }
};

export default { LIFE_STAGES, FAILURE_ARCHETYPES, QUERY_PROTOCOL, STAY_CRITERIA, MENTAL_MODELS };
