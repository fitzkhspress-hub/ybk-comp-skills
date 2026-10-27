"use strict";
const MODULES=[
  {
    "id": "01",
    "title": "Find the person inside the event",
    "group": "Report & write",
    "visual": "angle",
    "concept": "A topic names an event. An angle identifies something specific about how people experienced it. Reporting becomes more useful when it follows a person’s action, decision or consequence rather than assuming everyone had the same experience.",
    "steps": [
      "Begin with an approved topic and ask who made a decision or experienced a change.",
      "Observe a specific action and ask the people involved to explain it.",
      "Write a focus supported by those details; revise it when the reporting points elsewhere."
    ],
    "stages": [
      {
        "title": "Separate topic and angle",
        "visual": "angle",
        "example": "TOPIC: bridge challenge. ANGLE: Maya changed a support after her first test.",
        "explain": "The topic tells us what happened. The angle gives us a person, a decision and a process we can investigate."
      },
      {
        "title": "Gather the evidence",
        "visual": "notes",
        "example": "SOURCE NOTES: first test failed; Maya moved a support; the next bridge held 18 washers.",
        "explain": "These notes support a concrete sequence. They do not establish that everyone loved the challenge or felt proud."
      },
      {
        "title": "State a reportable focus",
        "visual": "angle",
        "example": "Follow how Maya diagnosed the failed test and changed her design.",
        "explain": "The focus comes from reported action. It gives interviews, photographs and copy a shared purpose without prescribing a story type."
      }
    ],
    "trap": "Do not substitute an event slogan or a claim about everyone’s feelings for reporting.",
    "questions": [
      {
        "prompt": "Which focus can be supported by the supplied notes?",
        "options": [
          "The most amazing challenge ever",
          "How Maya changed a support after a failed test",
          "Why every student loves engineering"
        ],
        "answer": 1,
        "why": [
          "A superlative needs evidence and gives little specific direction.",
          "The notes establish the action and change you can investigate.",
          "The notes do not establish everyone’s feelings."
        ]
      },
      {
        "prompt": "A new interview contradicts your planned angle. What should you do?",
        "options": [
          "Ignore it to protect the plan",
          "Invent a connecting detail",
          "Check the conflict and revise the focus if the evidence requires it"
        ],
        "answer": 2,
        "why": [
          "Reporting should shape the focus.",
          "A made-up bridge between facts misleads.",
          "Follow verified evidence rather than forcing a preselected conclusion."
        ]
      }
    ],
    "tool": "angle",
    "task": "Write a person-centered focus and list the observation or interview evidence needed to support it.",
    "target": "The focus names a specific experience or action and can be tested through reporting.",
    "basis": "Standards p.1: people-centered body copy and specific reporting; supports feature stories and coverage spreads."
  },
  {
    "id": "02",
    "title": "Ask for the detail, then the meaning",
    "group": "Report & write",
    "visual": "quote",
    "concept": "An interview can supply both facts and the source’s interpretation. Facts explain what happened. A useful quotation adds a person’s perspective, feeling or explanation in their own words. Follow-up questions uncover detail that a broad opening question misses.",
    "steps": [
      "Ask about a specific moment rather than requesting a generic reaction.",
      "Follow an answer with a question about the action, reason or consequence.",
      "Check factual details separately and preserve the source’s meaning when selecting a quote."
    ],
    "stages": [
      {
        "title": "Start with the moment",
        "visual": "quote",
        "example": "Instead of “Was it fun?” ask “What did you change after the bridge fell?”",
        "explain": "The first question invites a yes or no. The second invites the source to describe a particular decision."
      },
      {
        "title": "Follow the useful answer",
        "visual": "notes",
        "example": "ANSWER: “I moved the support.” FOLLOW-UP: “What made you try that position?”",
        "explain": "The follow-up seeks the reasoning that viewers cannot see in a photograph or infer from a result."
      },
      {
        "title": "Choose what adds perspective",
        "visual": "quote",
        "example": "“I stopped trying to make it look straight and watched where it bent.”",
        "explain": "This practice quote explains a shift in thinking. Preserve the full interview context and verify its factual references."
      }
    ],
    "trap": "An interesting quotation is not permission to remove a qualification that changes what the person meant.",
    "questions": [
      {
        "prompt": "Which follow-up is most likely to add useful detail?",
        "options": [
          "Did you enjoy it?",
          "What made you move the support?",
          "Was it good?"
        ],
        "answer": 1,
        "why": [
          "This may invite a short general reaction.",
          "It asks for the reasoning behind a reported action.",
          "The wording does not identify a moment or reason."
        ]
      },
      {
        "prompt": "A source says a date might be wrong. How should you use it?",
        "options": [
          "Publish it as certain",
          "Remove the uncertainty without checking",
          "Verify the date before presenting it as a fact"
        ],
        "answer": 2,
        "why": [
          "The source explicitly expressed uncertainty.",
          "Trimming cannot establish a fact.",
          "Verification resolves what the interview alone does not establish."
        ]
      }
    ],
    "tool": "quote",
    "task": "Write an opening question and a follow-up that would uncover a person’s decision and its meaning.",
    "target": "The questions invite specific information; the selected quote adds perspective without changing context.",
    "basis": "Standards p.1: interview-grounded reporting and meaningful quotations."
  },
  {
    "id": "03",
    "title": "Build a lead from reported evidence",
    "group": "Report & write",
    "visual": "lead",
    "concept": "A lead gives readers a reason to enter the story. A concrete, verified action can reveal the people and tension without announcing that the event was exciting. Description must come from observation or reliable reporting, not an imagined scene.",
    "steps": [
      "Locate a revealing action, detail or exchange in your source notes.",
      "Choose a clear subject and a specific verb.",
      "Check every descriptive detail against the reporting and connect the opening to the story’s focus."
    ],
    "stages": [
      {
        "title": "Read the notes first",
        "visual": "notes",
        "example": "NOTES: Maya moved a cardboard support; she watched the middle bend; the next test held.",
        "explain": "The notes establish a visible action. They do not establish sweat, silence, fear or any other unrecorded detail."
      },
      {
        "title": "Choose an entry point",
        "visual": "lead",
        "example": "DRAFT: “The engineering challenge was an exciting learning experience.”",
        "explain": "The draft summarizes an evaluation rather than showing an experience. It could describe almost any event."
      },
      {
        "title": "Write the supported action",
        "visual": "lead",
        "example": "“Maya slid the cardboard support toward the bend and tested the bridge again.”",
        "explain": "The opening gives readers a person and action. It creates interest through a reported decision rather than invented atmosphere."
      }
    ],
    "trap": "A vivid lead is still inaccurate if its sensory details were never observed or confirmed.",
    "questions": [
      {
        "prompt": "Which opening is supported by the notes?",
        "options": [
          "Maya slid the support toward the bend and tested again.",
          "Sweat poured down her face in the silent room.",
          "Everyone agreed it was unforgettable."
        ],
        "answer": 0,
        "why": [
          "The action appears in the reporting.",
          "The notes do not establish these sensory details.",
          "The notes do not establish a unanimous judgment."
        ]
      },
      {
        "prompt": "Your best-sounding opening needs a detail absent from your notes. What is the right next move?",
        "options": [
          "Assume it probably happened",
          "Verify the detail or choose a supported opening",
          "Hide the assumption in a metaphor"
        ],
        "answer": 1,
        "why": [
          "Probability is not reporting.",
          "You can improve the evidence or change the writing.",
          "Figurative language does not make an unsupported scene true."
        ]
      }
    ],
    "tool": "rewrite",
    "task": "Write a lead using only the source notes. Mark the person, action and detail that make the opening specific.",
    "target": "Every claim is supported, and the opening connects a concrete action to the focus.",
    "basis": "Standards p.1: interview-based leads, description grounded in reporting, action verbs and specific nouns."
  },
  {
    "id": "04",
    "title": "Connect facts and voices",
    "group": "Report & write",
    "visual": "body",
    "concept": "Transitions and quotations do different jobs. A transition supplies the facts a reader needs to understand the next voice. A quotation adds the source’s perspective. Their relationship should move the story forward instead of repeating the same point twice.",
    "steps": [
      "Identify what the next quotation contributes.",
      "Supply the verified context needed to understand it.",
      "Remove a transition that merely paraphrases the quotation or inserts the writer’s opinion."
    ],
    "stages": [
      {
        "title": "Identify the contribution",
        "visual": "quote",
        "example": "QUOTE: “I watched where it bent instead of guessing.”",
        "explain": "The source explains a change in approach. Readers need to know what prompted that change."
      },
      {
        "title": "Add the missing context",
        "visual": "body",
        "example": "TRANSITION: After the first bridge collapsed, Maya moved a support toward its center.",
        "explain": "This fact connects the earlier event to the following explanation. It does not tell readers how to feel."
      },
      {
        "title": "Read the pair together",
        "visual": "body",
        "example": "Verified change in the transition → source explains the reasoning.",
        "explain": "The pieces add different information. Use the staff’s current attribution, paragraph and tense conventions when preparing actual copy."
      }
    ],
    "trap": "Do not write “She was determined to succeed” unless reporting establishes that interpretation; let the source explain her thinking.",
    "questions": [
      {
        "prompt": "Which transition prepares the supplied quote?",
        "options": [
          "Maya had the greatest attitude.",
          "After the first collapse, Maya moved a support toward the center.",
          "She watched where it bent instead of guessing."
        ],
        "answer": 1,
        "why": [
          "This is an unsupported evaluation.",
          "It supplies the relevant verified event and action.",
          "This repeats the quotation rather than adding context."
        ]
      },
      {
        "prompt": "Two quotations make sense individually but have no connection on the page. What should you investigate?",
        "options": [
          "Which verified fact explains the relationship between them",
          "Which decorative adjective could fill the gap",
          "Whether removing attribution would help"
        ],
        "answer": 0,
        "why": [
          "A factual connection can move readers between ideas.",
          "Decoration does not establish the missing relationship.",
          "Readers still need to know who said what."
        ]
      }
    ],
    "tool": "order",
    "task": "Arrange the context and quote blocks. Explain how the transition adds something the quotation does not.",
    "target": "The transition supplies accurate context and the quotation contributes a distinct perspective.",
    "basis": "Standards p.1: meaningful transitions, quote-driven body copy and no editorial comment; house format remains local."
  },
  {
    "id": "05",
    "title": "Edit for clarity without losing facts",
    "group": "Report & write",
    "visual": "edit",
    "concept": "Concise writing gives each word a job. Editing should reveal the actor and action, remove empty repetition and preserve the facts. A shorter sentence is not better if it deletes a needed qualification or changes the chronology.",
    "steps": [
      "Find the actor and the concrete action.",
      "Replace inflated wording with direct language while keeping names, values and conditions accurate.",
      "Check the revision against source notes and apply the current staff style consistently."
    ],
    "stages": [
      {
        "title": "Spot the buried actor",
        "visual": "edit",
        "example": "“A second test was conducted by Maya after the movement of the support.”",
        "explain": "The actor arrives late, and a noun phrase hides the action. The wording is longer than the information requires."
      },
      {
        "title": "Make the actions visible",
        "visual": "edit",
        "example": "“Maya moved the support and tested the bridge again.”",
        "explain": "The revision names the person and orders the verified actions. It does not add an outcome that the source notes lack."
      },
      {
        "title": "Protect the qualification",
        "visual": "notes",
        "example": "“The bridge held 18 washers in the second trial” does not mean it always held 18.",
        "explain": "Keep limits and timing that determine a fact’s meaning. Follow staff choices for tense, attribution, capitalization and second reference."
      }
    ],
    "trap": "Do not delete a limitation merely because it makes the sentence shorter.",
    "questions": [
      {
        "prompt": "Which revision keeps the verified actions clear?",
        "options": [
          "Maya moved the support and tested again.",
          "Success was amazingly achieved.",
          "The bridge always worked."
        ],
        "answer": 0,
        "why": [
          "It preserves the actor and action without adding a result.",
          "It substitutes evaluation and vague wording.",
          "It adds an unsupported claim about every trial."
        ]
      },
      {
        "prompt": "Two forms of second reference appear in one story. What should guide the edit?",
        "options": [
          "Whatever looks different on each page",
          "The staff’s current style, applied consistently",
          "An invented rule from this exercise"
        ],
        "answer": 1,
        "why": [
          "Random variation reduces consistency.",
          "The local style guide controls the decision.",
          "The lesson does not replace the staff’s rules."
        ]
      }
    ],
    "tool": "rewrite",
    "task": "Revise the supplied inflated sentence and explain one fact or qualification you protected.",
    "target": "The revision is direct and accurate and follows the current newsroom style.",
    "basis": "Standards pp.1–2: concise factual writing, active voice and style consistency; exact tense and reference choices are local."
  },
  {
    "id": "06",
    "title": "Give a caption something to add",
    "group": "Report & write",
    "visual": "caption",
    "concept": "A caption connects the people and action in a photograph with information the picture cannot establish on its own. Visual identification, researched context and a meaningful source perspective can work together. Use your staff’s caption structure rather than treating this lesson as a sentence-count rule.",
    "steps": [
      "Identify the relevant people and action from verified reporting.",
      "Add context the picture alone cannot prove, such as the stage of the process or why the action mattered.",
      "Check any quotation and match the finished caption unmistakably to its photograph."
    ],
    "stages": [
      {
        "title": "Separate seeing from knowing",
        "visual": "caption",
        "example": "VISIBLE: Maya adjusts a support. REPORTED: this happened after the first test failed.",
        "explain": "A photo can show an action; it cannot establish the full sequence or identify a person without reliable information."
      },
      {
        "title": "Add the missing context",
        "visual": "caption",
        "example": "“Maya adjusted the support after the first bridge collapsed during the class test.”",
        "explain": "The context adds meaning beyond “a student works on a project.” The name and sequence must be checked."
      },
      {
        "title": "Use a voice when it contributes",
        "visual": "quote",
        "example": "“I watched where it bent instead of guessing,” Maya explained in the practice interview.",
        "explain": "The quotation explains a decision. Apply the staff’s attribution and caption format to actual work rather than copying the example as a template."
      }
    ],
    "trap": "A caption should not assume an emotion just because a face appears to express it.",
    "questions": [
      {
        "prompt": "Which fact needs reporting beyond the illustration?",
        "options": [
          "A hand touches the support",
          "This was the second trial",
          "A bridge is on the table"
        ],
        "answer": 1,
        "why": [
          "The illustrated action is visible.",
          "Trial order is contextual information that the image alone cannot establish.",
          "The object is visible in the illustration."
        ]
      },
      {
        "prompt": "A caption names Luis, but the verified photo log identifies Maya. What should happen?",
        "options": [
          "Keep it if the caption sounds good",
          "Check the identity and correct the caption before handoff",
          "Remove all identifying information to avoid checking"
        ],
        "answer": 1,
        "why": [
          "Writing quality does not excuse a wrong identity.",
          "The photo and caption must refer to the same verified person.",
          "Avoiding the task does not resolve the error."
        ]
      }
    ],
    "tool": "caption",
    "task": "Build a caption from visible action and verified context. Explain where the context came from; use the current staff format.",
    "target": "Identity and action are accurate, context adds meaning, and any quote preserves the source’s meaning.",
    "basis": "Standards p.2: researched caption layers and photo connection; fixed sentence count and opening formulas excluded."
  },
  {
    "id": "07",
    "title": "Make the headline pair work together",
    "group": "Report & write",
    "visual": "headline",
    "concept": "A primary headline attracts attention and names a meaningful idea. A secondary headline can explain the specific angle. When a layout uses both, they should add to each other rather than repeat a clever phrase. Accuracy is the foundation of either role.",
    "steps": [
      "Identify the actual angle before writing a headline.",
      "Try a concise, specific primary line that fits the meaning.",
      "Use the supporting line to add verified information the primary line leaves out."
    ],
    "stages": [
      {
        "title": "Start with the angle",
        "visual": "notes",
        "example": "ANGLE: Maya revised a bridge support after a failed test.",
        "explain": "The headline needs to reflect this reported focus, not claim a victory or record the reporting does not establish."
      },
      {
        "title": "Give the primary line a job",
        "visual": "headline",
        "example": "PRIMARY: “A shift in support”",
        "explain": "The phrase links to an actual adjustment and suggests a change in approach. Cleverness remains accountable to the story."
      },
      {
        "title": "Add information below",
        "visual": "headline",
        "example": "SECONDARY: “A failed first test led Maya to change her bridge design.”",
        "explain": "The supporting line provides the concrete focus. It adds information instead of restating “a shift” with different words."
      }
    ],
    "trap": "A familiar slogan can sound polished while telling readers nothing specific about this coverage.",
    "questions": [
      {
        "prompt": "Which supporting line adds useful information?",
        "options": [
          "A shift in support means support shifted",
          "A failed first test led Maya to change her bridge design",
          "The most incredible project in history"
        ],
        "answer": 1,
        "why": [
          "It repeats the primary idea without reporting.",
          "It supplies the specific person, trigger and action.",
          "The superlative is unsupported."
        ]
      },
      {
        "prompt": "A pun suggests that the team won, but the team lost. What should you do?",
        "options": [
          "Keep the pun because it is clever",
          "Change the wording to fit the verified result",
          "Remove the score from the story"
        ],
        "answer": 1,
        "why": [
          "The implication is inaccurate.",
          "The headline must preserve the meaning of the coverage.",
          "Hiding a fact does not repair the implication."
        ]
      }
    ],
    "tool": "headline",
    "task": "Write a primary and supporting line for the reported angle, then label the different information each contributes.",
    "target": "The pair is accurate and specific, and the supporting line adds useful information.",
    "basis": "Standards p.2: accurate primary heads, informative secondary heads, no empty clichés or needless repetition."
  },
  {
    "id": "08",
    "title": "Keep the thought together on the line",
    "group": "Report & write",
    "visual": "linebreak",
    "concept": "A headline is read as language before it is seen as a shape. Line breaks can interrupt a phrase or attach words to the wrong thought. Adjust the wording or arrangement so readers can follow the meaning while the text fits the approved design.",
    "steps": [
      "Read the complete headline aloud for its grammatical meaning.",
      "Keep closely connected phrases together when choosing line breaks.",
      "Recheck the layout after edits and follow the staff’s capitalization and type conventions."
    ],
    "stages": [
      {
        "title": "See the broken phrase",
        "visual": "linebreak",
        "example": "WEAK BREAK: “A shift in” / “support changes the test”",
        "explain": "The short first line strands “in” away from its object. The visual shape interrupts a connected phrase."
      },
      {
        "title": "Preserve a language unit",
        "visual": "linebreak",
        "example": "CLEARER BREAK: “A shift in support” / “changes the test”",
        "explain": "The phrase stays together, making the relationship easier to read. Another accurate revision could also solve the fit."
      },
      {
        "title": "Check the actual type",
        "visual": "type",
        "example": "Fit the wording in the current headline style, then read it again.",
        "explain": "A line break that works in notes may change after type is sized or edited. Recheck the final layout rather than relying on an earlier draft."
      }
    ],
    "trap": "Do not shrink a headline until it is unreadable just to preserve the first wording you tried.",
    "questions": [
      {
        "prompt": "Which break keeps a meaningful phrase together?",
        "options": [
          "A shift in / support changes the test",
          "A shift in support / changes the test",
          "A / shift in support changes the test"
        ],
        "answer": 1,
        "why": [
          "The preposition is separated from its object.",
          "The connected phrase remains together.",
          "The stranded article adds an avoidable interruption."
        ]
      },
      {
        "prompt": "A copy change alters the headline’s line lengths. What should happen next?",
        "options": [
          "Assume the old breaks still work",
          "Read and proof the headline in its final layout again",
          "Add extra decorative typefaces"
        ],
        "answer": 1,
        "why": [
          "The changed wording may create a new break problem.",
          "Language and visual fit need to be checked together.",
          "Extra typefaces do not resolve the phrasing."
        ]
      }
    ],
    "tool": "linebreak",
    "task": "Repair the line break in the example. Explain the phrase you kept together and check it in the current headline style.",
    "target": "Line breaks support meaning and the final wording remains readable and accurate.",
    "basis": "Standards p.2: preserve phrase units, consistent headline style and accurate secondary heads."
  },
  {
    "id": "09",
    "title": "Give coverage more than one voice",
    "group": "Report & write",
    "visual": "coverage",
    "concept": "Coverage is a record of people’s experiences, not just a list of events. A reporting plan can reveal which actions, perspectives and people are missing. Additional voices should serve the approved focus and accurate representation rather than a quota invented by this lesson.",
    "steps": [
      "Map the approved focus to needed actions, perspectives and facts.",
      "Compare the plan with the people already visible or quoted.",
      "Find a relevant missing experience and report it accurately, following local access and approval procedures."
    ],
    "stages": [
      {
        "title": "Notice the narrow record",
        "visual": "coverage",
        "example": "A draft spread shows the same builder in every image and quotation.",
        "explain": "The design may repeat one perspective while leaving another relevant role unexplained."
      },
      {
        "title": "Find a meaningful gap",
        "visual": "notes",
        "example": "The recorder tracked each test, but the reporting never explains what the measurements showed.",
        "explain": "This is a reason to interview that person: their work adds information to the focus, not just another name."
      },
      {
        "title": "Assign a reporting purpose",
        "visual": "coverage",
        "example": "Ask the recorder how a measurement changed the group’s next decision.",
        "explain": "The added voice should connect to the coverage. Student access, approvals and naming practices remain governed by the newsroom."
      }
    ],
    "trap": "Do not assume that adding a name automatically adds a useful perspective.",
    "questions": [
      {
        "prompt": "Which additional source has a clear reporting purpose?",
        "options": [
          "A random person with no connection",
          "The recorder who can explain how the test measurements affected the redesign",
          "Only the same source repeating the existing quote"
        ],
        "answer": 1,
        "why": [
          "A source needs relevance to the focus.",
          "This role can supply a missing explanation.",
          "Repetition does not address the identified gap."
        ]
      },
      {
        "prompt": "A coverage checklist has many names but no evidence of actual experiences. What is missing?",
        "options": [
          "More decoration",
          "Reporting that connects people to actions and meaning",
          "A larger page number"
        ],
        "answer": 1,
        "why": [
          "Decoration cannot create depth.",
          "Names need to be connected to reported experience.",
          "Navigation is a separate job."
        ]
      }
    ],
    "tool": "coverage",
    "task": "Map a person, an action and a reporting purpose for an approved spread. Identify one gap without imposing a source-count rule.",
    "target": "The coverage plan identifies a relevant missing experience and how reporting could establish it.",
    "basis": "Standards p.1: appropriate sources and broader inclusion; category descriptions support people/action coverage."
  },
  {
    "id": "10",
    "title": "Choose a clear visual entry point",
    "group": "Design the spread",
    "visual": "hierarchy",
    "concept": "Visual hierarchy tells readers where to enter and what to read next. A dominant image should earn attention through its content and its size. The best anchor is a strong storytelling image, not simply the easiest photograph to enlarge.",
    "steps": [
      "Identify the most informative image that supports the approved focus.",
      "Give it a clear size or placement advantage in the layout.",
      "Check the next reading steps: headline, related copy, supporting images and captions."
    ],
    "stages": [
      {
        "title": "See equal-weight competition",
        "visual": "spread-equal",
        "example": "Every photo is the same size; the headline and captions compete equally.",
        "explain": "Readers receive little guidance about which information matters most. Equal size is not always wrong, but here it hides the coverage focus."
      },
      {
        "title": "Anchor the spread",
        "visual": "spread-good",
        "example": "The bridge test becomes dominant because it shows the central action.",
        "explain": "Its content and scale work together. A blurry or irrelevant photograph would not become a better anchor just by growing."
      },
      {
        "title": "Guide the next move",
        "visual": "hierarchy",
        "example": "Dominant action → headline and copy → related details and captions.",
        "explain": "This is a suggested reading path for the example, not a required template. Test whether your actual layout guides readers to the intended information."
      }
    ],
    "trap": "A large decorative element can overpower the reporting without giving the reader a useful entry point.",
    "questions": [
      {
        "prompt": "Which image deserves the strongest emphasis for this focus?",
        "options": [
          "The clearest photograph of the actual bridge test",
          "An empty hallway with no relation to the focus",
          "A blurry photo enlarged to fill space"
        ],
        "answer": 0,
        "why": [
          "Its content and technical quality support the central action.",
          "It does not explain the focus.",
          "Size cannot restore the missing detail."
        ]
      },
      {
        "prompt": "A reader cannot tell where to enter the spread. What should you inspect first?",
        "options": [
          "The relative emphasis of the most important content",
          "Whether every element can be made equally large",
          "Whether adding an unrelated ornament helps"
        ],
        "answer": 0,
        "why": [
          "Hierarchy depends on meaningful differences in emphasis.",
          "Equalizing everything can maintain the problem.",
          "Decoration does not establish a useful reading priority."
        ]
      }
    ],
    "tool": "hierarchy",
    "task": "Use the emphasis control to compare layouts. Name the intended entry point and the evidence that makes it worth emphasizing.",
    "target": "The hierarchy prioritizes meaningful content and leads readers into related coverage.",
    "basis": "Standards p.2: dominant image, content quality and visual hierarchy."
  },
  {
    "id": "11",
    "title": "Make the two pages one composition",
    "group": "Design the spread",
    "visual": "grid",
    "concept": "A spread is read across facing pages. Shared alignments and consistent spacing can make separate pieces feel related. A grid is a planning structure; use it to organize content rather than forcing photographs into shapes that damage their meaning.",
    "steps": [
      "Identify the approved page grid, margins, gutter and spacing system.",
      "Align related edges and maintain the intended spacing between elements.",
      "Check the whole spread, including important content near the fold and safe areas specified by the production guide."
    ],
    "stages": [
      {
        "title": "Spot arbitrary edges",
        "visual": "spread-bad",
        "example": "Photo edges and text starts drift; spaces vary without a purpose.",
        "explain": "The mismatched edges make the layout harder to scan because the reader cannot recognize a consistent organizing system."
      },
      {
        "title": "Create shared anchors",
        "visual": "grid",
        "example": "Related images and copy align to common guides across the spread.",
        "explain": "Alignment creates relationships. Follow the grid and spacing values supplied by your staff rather than taking dimensions from this diagram."
      },
      {
        "title": "Review the facing pages",
        "visual": "spread-good",
        "example": "Look across the whole spread before checking each page separately.",
        "explain": "A composition can look balanced one page at a time and still conflict across the fold. Protect meaningful details using local production requirements."
      }
    ],
    "trap": "Do not crop away a face, tool or decisive action merely because the first layout box was convenient.",
    "questions": [
      {
        "prompt": "Which adjustment creates a clearer organizing structure?",
        "options": [
          "Align related edges to the approved grid",
          "Move every element a different distance",
          "Ignore the relationship across facing pages"
        ],
        "answer": 0,
        "why": [
          "Shared anchors make relationships visible.",
          "Random variation obscures the structure.",
          "The reader sees facing pages together."
        ]
      },
      {
        "prompt": "A critical face falls into the fold in the planned layout. What should guide the repair?",
        "options": [
          "The approved production safe areas and the image’s meaning",
          "A new universal gutter measurement from this exercise",
          "Keeping the first box regardless of the photo"
        ],
        "answer": 0,
        "why": [
          "Use local technical requirements while protecting the content.",
          "This lesson does not replace the production guide.",
          "The layout should serve the photograph’s meaning."
        ]
      }
    ],
    "tool": "spacing",
    "task": "Compare the spacing settings. Explain which shared edges organize the spread and what you would check near the fold.",
    "target": "Facing pages work as one composition with deliberate alignment and locally approved spacing.",
    "basis": "Standards p.2: facing pages as a unit, alignment and consistent inner-spacing; dimensions remain local."
  },
  {
    "id": "12",
    "title": "Use space to show relationships",
    "group": "Design the spread",
    "visual": "proximity",
    "concept": "White space is active design space. It can separate unrelated packages, connect related elements or frame an important object. Proximity helps readers know which caption or copy belongs to which image; accidental gaps can suggest the wrong relationship.",
    "steps": [
      "Identify the content that belongs together.",
      "Use spacing to show that grouping and distinguish unrelated material.",
      "Check for isolated pockets of unused space and ambiguous caption-to-photo connections."
    ],
    "stages": [
      {
        "title": "Read the accidental relationship",
        "visual": "caption-far",
        "example": "A caption sits closer to the wrong photograph than to the image it explains.",
        "explain": "The reader may attach the words to the nearest picture. Accurate words can become misleading when the visual connection is ambiguous."
      },
      {
        "title": "Group the related pieces",
        "visual": "proximity",
        "example": "Bring the caption into an unmistakable relationship with its photograph.",
        "explain": "Adjacency or a clear labeling system can establish the connection. Apply the newsroom’s caption placement practices."
      },
      {
        "title": "Give the remaining space a job",
        "visual": "spread-good",
        "example": "Space separates two packages and frames the dominant image.",
        "explain": "The gaps are intentional. Their purpose is not to make the page empty, but to make relationships easier to understand."
      }
    ],
    "trap": "Filling every gap with decoration can make the grouping less clear rather than more complete.",
    "questions": [
      {
        "prompt": "What is the first problem in the caption diagram?",
        "options": [
          "The caption’s relationship to its photo is ambiguous",
          "There is no decorative border",
          "The caption needs more unrelated facts"
        ],
        "answer": 0,
        "why": [
          "Proximity can attach words to the wrong picture.",
          "A border is not automatically the missing solution.",
          "Content length does not resolve the placement."
        ]
      },
      {
        "prompt": "A blank pocket has no grouping or framing purpose. What should you try?",
        "options": [
          "Add a random icon",
          "Reorganize related content so the space serves a clear role",
          "Make every gap a different size"
        ],
        "answer": 1,
        "why": [
          "Decoration can preserve the underlying problem.",
          "Solve the relationship and composition first.",
          "Randomness does not establish purpose."
        ]
      }
    ],
    "tool": "proximity",
    "task": "Move the caption group in the demonstration. Explain which content is related and what the white space separates.",
    "target": "Spacing makes relationships clear, and captions are easy to match to their photographs.",
    "basis": "Standards p.2: proximity, purposeful white space and clear caption association; cluster-count rules excluded."
  },
  {
    "id": "13",
    "title": "Make type help the reader",
    "group": "Design the spread",
    "visual": "type",
    "concept": "Typography creates roles: a headline introduces, body text carries a story and a caption explains a photograph. Readers need readable size, contrast and spacing. A consistent staff type system helps establish those roles without decorative competition.",
    "steps": [
      "Use the approved type styles to distinguish the jobs of headline, copy and caption.",
      "Check readability at the intended viewing or print size, especially over an image.",
      "Remove treatments that compete with the meaning and apply the system consistently."
    ],
    "stages": [
      {
        "title": "Identify the readability problem",
        "visual": "type-bad",
        "example": "Low-contrast small text crosses a busy image.",
        "explain": "The words exist, but readers have to fight the background. The problem is a relationship among size, contrast, placement and detail."
      },
      {
        "title": "Repair the relationship",
        "visual": "type",
        "example": "Place readable text where its contrast and space support the content.",
        "explain": "Moving the text, using the approved contrast treatment or changing the crop can help. Keep important action unobscured."
      },
      {
        "title": "Repeat the role, not decoration",
        "visual": "spread-good",
        "example": "Headlines, copy and captions follow their assigned staff styles.",
        "explain": "Consistency lets readers recognize the information job. Use local typeface choices rather than adopting a new font-count rule from this lesson."
      }
    ],
    "trap": "A type treatment is not successful merely because it looks unusual. It needs to communicate clearly.",
    "questions": [
      {
        "prompt": "Which change directly improves the sample’s readability?",
        "options": [
          "Reduce contrast further",
          "Use clear contrast and a position that avoids busy image detail",
          "Add another unrelated typeface"
        ],
        "answer": 1,
        "why": [
          "Lower contrast increases the problem.",
          "The repair addresses the relationship that obscures the words.",
          "More variety does not resolve legibility."
        ]
      },
      {
        "prompt": "A staff template already defines body and caption type. What should control the page?",
        "options": [
          "A separate font rule invented for this activity",
          "The approved styles, checked for readability in the actual layout",
          "Different styles on every spread without purpose"
        ],
        "answer": 1,
        "why": [
          "The activity should not replace local design standards.",
          "Use the established system and review the real result.",
          "Unplanned variation weakens consistency."
        ]
      }
    ],
    "tool": "contrast",
    "task": "Adjust the contrast example and explain what makes the text readable without hiding the action.",
    "target": "Type roles are consistent, readable and supportive of the content.",
    "basis": "Standards pp.2–3: purposeful typography and legibility over photographs; fixed typeface limits excluded."
  },
  {
    "id": "14",
    "title": "Repeat with a purpose",
    "group": "Design the spread",
    "visual": "color",
    "concept": "Repetition can connect a spread or a book through consistent visual choices. Spot color works best when it has an information job, such as linking related elements or marking a recurring role. More colors do not automatically create more meaning.",
    "steps": [
      "Identify the staff’s approved palette and the content relationship you want to show.",
      "Repeat a treatment consistently where that relationship occurs.",
      "Remove accents or ornaments that compete with the reporting or suggest a false grouping."
    ],
    "stages": [
      {
        "title": "Find the competing accents",
        "visual": "color-bad",
        "example": "Different bright accents mark unrelated objects with no consistent role.",
        "explain": "The viewer cannot tell whether the colors mean a section, a topic, an instruction or nothing."
      },
      {
        "title": "Assign a clear role",
        "visual": "color",
        "example": "One approved accent identifies related secondary coverage.",
        "explain": "Now the repetition communicates a relationship. The choice should come from the current staff system rather than an invented universal palette."
      },
      {
        "title": "Remove purposeless treatment",
        "visual": "spread-good",
        "example": "The content stays prominent after unrelated ornaments are removed.",
        "explain": "A treatment earns its space by helping readers interpret, navigate or connect the coverage."
      }
    ],
    "trap": "Repeating an ornament does not make it meaningful if it never serves the content.",
    "questions": [
      {
        "prompt": "Which use gives spot color a useful job?",
        "options": [
          "A new random color on every object",
          "A consistent accent linking related coverage",
          "A bright block covering the important action"
        ],
        "answer": 1,
        "why": [
          "The changes do not express a stable relationship.",
          "The repeated treatment communicates a purpose.",
          "The accent obstructs the content."
        ]
      },
      {
        "prompt": "A decorative icon attracts more attention than the reporting and adds no information. What should you try?",
        "options": [
          "Enlarge the icon",
          "Remove or reduce it and recheck the hierarchy",
          "Add several more icons"
        ],
        "answer": 1,
        "why": [
          "The competition would increase.",
          "Let the reporting carry the emphasis.",
          "More purposeless elements do not solve the problem."
        ]
      }
    ],
    "tool": "color",
    "task": "Compare accent treatments and explain the information role of the one you would keep.",
    "target": "Repeated color or treatment communicates a consistent relationship without overpowering the coverage.",
    "basis": "Standards p.2: repetition, restrained spot color and purposeful elements."
  },
  {
    "id": "15",
    "title": "Crop for the center of interest",
    "group": "Photograph & select",
    "visual": "crop",
    "concept": "A crop changes what a photograph explains. Removing distractions can clarify the center of interest, but removing the decisive object or a necessary relationship can change the meaning. Choose the crop for the content rather than making the image obey the first box you drew.",
    "steps": [
      "Identify the person, action and object that carry the photograph’s meaning.",
      "Remove unnecessary space while preserving that relationship.",
      "Check context, image direction and the final layout before committing the crop."
    ],
    "stages": [
      {
        "title": "Name what must survive",
        "visual": "photo-wide",
        "example": "Maya’s hands adjust the support beneath the bridge.",
        "explain": "The action depends on the hands, support and bridge being understood together. An empty edge may be expendable; the connection is not."
      },
      {
        "title": "Compare a damaging crop",
        "visual": "crop-bad",
        "example": "The crop keeps the face but removes the hands and support.",
        "explain": "The image now says less about the action. A tight crop is not automatically a stronger crop."
      },
      {
        "title": "Protect the storytelling detail",
        "visual": "crop-good",
        "example": "A tighter view keeps the hands, support and relevant bridge structure.",
        "explain": "The crop removes distraction while retaining the reason the image matters. Recheck it in the actual page relationship."
      }
    ],
    "trap": "Do not mistake closeness for clarity. The right crop is the one that preserves the relevant meaning.",
    "questions": [
      {
        "prompt": "Which crop best explains the adjustment?",
        "options": [
          "Only the face, with the support outside the frame",
          "Hands, support and relevant bridge structure together",
          "An empty corner enlarged to fill the box"
        ],
        "answer": 1,
        "why": [
          "This removes the action being explained.",
          "The necessary relationship remains visible.",
          "The crop loses the center of interest."
        ]
      },
      {
        "prompt": "A preset layout box cuts away the decisive object. What should you reconsider?",
        "options": [
          "The box or layout, so the image’s meaning survives",
          "The reporting, to pretend the object did not matter",
          "Only the border color"
        ],
        "answer": 0,
        "why": [
          "Design should serve the content.",
          "Changing a fact to fit a box misleads.",
          "The missing object remains missing."
        ]
      }
    ],
    "tool": "crop",
    "task": "Use the crop comparison control. Name the essential details and explain what your crop removes and preserves.",
    "target": "The crop clarifies the center of interest without changing or obscuring the action.",
    "basis": "Standards pp.2–3: content-led crops, center of interest and visual unity."
  },
  {
    "id": "16",
    "title": "Compose around the action",
    "group": "Photograph & select",
    "visual": "composition",
    "concept": "Composition directs attention through subject position, angle, lines, framing and separation from the background. These are tools for making the action understandable. They are not a checklist that makes a weak moment strong simply because a grid line appears.",
    "steps": [
      "Identify the action you want the reader to notice.",
      "Change position or angle to clarify it without disrupting the event or compromising safe access.",
      "Inspect background distractions and the relationships within the frame."
    ],
    "stages": [
      {
        "title": "See the competing background",
        "visual": "photo-wide",
        "example": "A strong background line crosses the subject and attention drifts away from the hands.",
        "explain": "The frame contains the action, but its competing shapes make the relationship harder to see."
      },
      {
        "title": "Choose a clearer angle",
        "visual": "composition",
        "example": "A slight change of viewpoint isolates the hands and support.",
        "explain": "The camera position helps the action separate from the background. Use approved access and safety procedures."
      },
      {
        "title": "Use guides as tools",
        "visual": "thirds",
        "example": "A thirds grid and leading line suggest ways to direct attention.",
        "explain": "Keep the composition because it explains the action, not because a subject mechanically touches a grid intersection."
      }
    ],
    "trap": "Composition should not require staging a candid event and presenting it as unprompted coverage.",
    "questions": [
      {
        "prompt": "What gives a composition technique a purpose?",
        "options": [
          "It makes the action and subject easier to understand",
          "It places a line somewhere regardless of content",
          "It uses the same angle for every situation"
        ],
        "answer": 0,
        "why": [
          "The technique serves the information in the picture.",
          "A formal shape alone does not establish meaning.",
          "Different actions can need different viewpoints."
        ]
      },
      {
        "prompt": "A distracting background competes with the main action. What is a useful capture decision?",
        "options": [
          "Try a safe approved change of angle or position",
          "Assume a larger caption fixes the picture",
          "Ignore it because a grid is visible"
        ],
        "answer": 0,
        "why": [
          "A viewpoint change can improve separation at capture.",
          "The caption cannot remove the visual competition.",
          "The grid does not solve the competing background."
        ]
      }
    ],
    "tool": "composition",
    "task": "Toggle the composition guides. Explain a viewpoint choice that would clarify the action and protect truthful coverage.",
    "target": "Position, background and visual lines direct attention to the relevant action.",
    "basis": "Standards p.3: evident composition techniques and storytelling moments."
  },
  {
    "id": "17",
    "title": "Bring back a usable moment",
    "group": "Photograph & select",
    "visual": "moment",
    "concept": "A storytelling moment reveals an action or relationship worth seeing. It also needs technical usability: the important subject should be in focus, exposure should preserve meaningful detail and color should be credible. Technical polish alone does not supply a story.",
    "steps": [
      "Anticipate the real action and watch how the people interact.",
      "Check focus on the important subject and exposure for meaningful highlights and shadows.",
      "Review both the moment and the technical result; use the approved camera workflow for settings."
    ],
    "stages": [
      {
        "title": "Identify the revealing action",
        "visual": "moment",
        "example": "Maya watches the bridge bend while Luis records the trial.",
        "explain": "The relationship explains the work. A routine scene is not automatically meaningful; the chosen instant needs a reason."
      },
      {
        "title": "Check what readers can actually see",
        "visual": "blurred",
        "example": "The important hands and bridge are soft while the background is sharper.",
        "explain": "The moment may matter, but the technical problem makes the key information difficult to read."
      },
      {
        "title": "Evaluate moment and quality together",
        "visual": "exposure",
        "example": "Select a clear action view with usable tonal detail and credible color.",
        "explain": "Use source files and the approved workflow for actual checks. The simulated controls below illustrate the effects; they are not camera-setting prescriptions."
      }
    ],
    "trap": "A sharp empty room is not automatically a better storytelling choice than a relevant action; content and quality need to work together.",
    "questions": [
      {
        "prompt": "What should be sharp in this action picture?",
        "options": [
          "An unrelated wall behind the people",
          "The subject and detail carrying the action",
          "Only the decorative frame"
        ],
        "answer": 1,
        "why": [
          "The relevant information would remain hard to see.",
          "Focus needs to serve the center of interest.",
          "The frame is not the subject."
        ]
      },
      {
        "prompt": "The brightest area loses important detail in the source file. What should you evaluate?",
        "options": [
          "Whether the approved capture or processing workflow can preserve it, or another usable frame is needed",
          "Whether more saturation will recreate missing detail",
          "Only the caption font"
        ],
        "answer": 0,
        "why": [
          "Check the actual file and use the appropriate production method.",
          "Saturation cannot recreate lost tonal information.",
          "Typography does not restore the image."
        ]
      }
    ],
    "tool": "photo-quality",
    "task": "Compare the simulated focus and exposure treatments. Explain a technical check and why the moment itself matters.",
    "target": "The chosen frame combines meaningful action with readable subject detail, exposure and color.",
    "basis": "Standards p.3 and main categories 20–24: moments, focus, tonal quality and accurate exposure/color."
  },
  {
    "id": "18",
    "title": "Make a portrait say something",
    "group": "Photograph & select",
    "visual": "portrait",
    "concept": "A purposeful portrait presents a person with intent. An environment, object, expression or pose can communicate something relevant about them, but those choices need reporting and collaboration. Visual props should not invent an identity or imply a claim the person does not support.",
    "steps": [
      "Learn something specific and accurate about the person.",
      "Choose a setting and composition that make that information visible.",
      "Check expression, background, light and technical quality while following local portrait and permission practices."
    ],
    "stages": [
      {
        "title": "Start with the person",
        "visual": "notes",
        "example": "REPORTED INTEREST: Maya designs and tests cardboard structures.",
        "explain": "This gives a reason to consider a workspace or an actual project. It does not justify unrelated symbolic props."
      },
      {
        "title": "Connect environment to meaning",
        "visual": "portrait",
        "example": "A portrait includes Maya and her actual design materials.",
        "explain": "The setting contributes information about the person. A simpler background can also work if expression and composition serve the purpose."
      },
      {
        "title": "Remove misleading competition",
        "visual": "portrait-clean",
        "example": "The relevant materials remain, while unrelated background distractions are reduced.",
        "explain": "The portrait should direct attention to the person and supported context, not turn the person into an invented character."
      }
    ],
    "trap": "Do not present a directed portrait as a candid moment. Use the format your approved assignment calls for.",
    "questions": [
      {
        "prompt": "Which environment has a reported reason to appear in this portrait?",
        "options": [
          "Maya’s design workspace and actual materials",
          "An unrelated trophy implying a victory",
          "A random costume suggesting an unverified role"
        ],
        "answer": 0,
        "why": [
          "It connects to a reported interest.",
          "The prop implies an unsupported accomplishment.",
          "The role has not been established."
        ]
      },
      {
        "prompt": "An attractive prop suggests something untrue about the subject. What should happen?",
        "options": [
          "Keep it because it looks good",
          "Replace it with a truthful choice that serves the person",
          "Crop out all context without considering the purpose"
        ],
        "answer": 1,
        "why": [
          "Visual implications still need accuracy.",
          "The design should support the reported person.",
          "A crop may help, but the decision needs a purpose."
        ]
      }
    ],
    "tool": "portrait",
    "task": "Plan a portrait using a reported interest, a relevant setting and a composition choice. State how you will avoid an unsupported implication.",
    "target": "The image communicates something grounded about the person and remains technically usable.",
    "basis": "Main category 25: sense of identity and meaningful environment; detailed method is instructional inference supported by photography standards."
  },
  {
    "id": "19",
    "title": "Make the data readable and true",
    "group": "Specialized work",
    "visual": "chart",
    "concept": "An infographic connects accurate data with clear visual and verbal meaning. Labels, units, source context and visual scale all affect the claim a reader receives. A chart can contain the right numbers and still mislead through mismatched labels or distorted lengths.",
    "steps": [
      "Verify each value, its label, unit and source context.",
      "Choose a visual relationship that matches the comparison you are making.",
      "Check the displayed values and visual proportions against the source and add the explanation readers need."
    ],
    "stages": [
      {
        "title": "Read the source pairs",
        "visual": "data",
        "example": "PRACTICE DATA: Trial A held 12 washers; Trial B held 18.",
        "explain": "Each value belongs to a specific trial, and washers are the unit. The data does not establish a school record or a cause by itself."
      },
      {
        "title": "Detect a visual distortion",
        "visual": "chart-bad",
        "example": "The bar for 18 is drawn about four times as long as the bar for 12.",
        "explain": "The numbers are printed correctly, but the lengths exaggerate the difference. Accurate labels do not excuse a misleading scale."
      },
      {
        "title": "Align picture and values",
        "visual": "chart",
        "example": "The bars use a common zero baseline and proportional lengths.",
        "explain": "Now the visual relationship supports the data. Include source context and units according to the approved graphics workflow."
      }
    ],
    "trap": "Do not turn a comparison into a causal claim unless reporting supports the cause.",
    "questions": [
      {
        "prompt": "How much longer should a zero-based bar for 18 be than a bar for 12?",
        "options": [
          "Four times as long",
          "One and a half times as long",
          "The same length"
        ],
        "answer": 1,
        "why": [
          "That exaggerates the difference.",
          "18 divided by 12 is 1.5, so the lengths should reflect that ratio.",
          "The values are different."
        ]
      },
      {
        "prompt": "The bars are proportional but the trial labels are swapped. Is the graphic ready?",
        "options": [
          "Yes, because the shape is accurate",
          "No; the labels and values must also stay correctly paired",
          "Yes, if the colors are attractive"
        ],
        "answer": 1,
        "why": [
          "The labels communicate which trial produced each value.",
          "Both numeric and visual relationships need accuracy.",
          "Color does not correct a mislabeled value."
        ]
      }
    ],
    "tool": "chart",
    "task": "Repair the chart scale and explain the checks needed for values, labels, units and source context.",
    "target": "The visual proportions, values and labels agree and communicate a clear supported comparison.",
    "basis": "Main category 14 and design standards: clear visual/verbal meaning; data-verification method is an instructional extension."
  },
  {
    "id": "20",
    "title": "Connect portraits and secondary coverage",
    "group": "Specialized work",
    "visual": "people",
    "concept": "A people spread can help readers find identities while also revealing experiences. Consistent portrait organization supports recognition. Related secondary coverage should add a specific reported perspective without making the page harder to navigate.",
    "steps": [
      "Verify portrait identities and the approved ordering system.",
      "Choose a secondary angle that contributes a relevant experience.",
      "Separate roles clearly so portrait labels remain easy to connect and the secondary package is coherent."
    ],
    "stages": [
      {
        "title": "Protect the identification job",
        "visual": "people",
        "example": "Portraits and names follow a consistent approved order.",
        "explain": "The order needs a verified roster. Visual similarity or memory is not enough to confirm that every label matches the right person."
      },
      {
        "title": "Add a reported experience",
        "visual": "coverage",
        "example": "A secondary package follows how students revised one failed design.",
        "explain": "This adds an experience rather than merely repeating the portrait names. Its facts and voices require reporting."
      },
      {
        "title": "Keep both reading tasks clear",
        "visual": "people",
        "example": "Portrait identities stay readable while the related package has its own entry point.",
        "explain": "The layout lets readers identify people and explore coverage without confusing which words belong to which image."
      }
    ],
    "trap": "Do not sacrifice correct identity or readable labels to squeeze in an unrelated module.",
    "questions": [
      {
        "prompt": "What establishes the correct portrait order and identity?",
        "options": [
          "A verified roster and the staff’s ordering procedure",
          "A guess based on appearance",
          "The order the files happened to download"
        ],
        "answer": 0,
        "why": [
          "Use a reliable identity source and approved process.",
          "Appearance alone cannot verify a name.",
          "File arrival is not an identification system."
        ]
      },
      {
        "prompt": "Which secondary coverage adds a reporting purpose?",
        "options": [
          "A repeated list of the same names",
          "A reported account of a specific student experience",
          "Unrelated decoration with no information"
        ],
        "answer": 1,
        "why": [
          "It does not add a new experience.",
          "The package contributes content beyond identification.",
          "Decoration does not create coverage."
        ]
      }
    ],
    "tool": "people",
    "task": "Match the practice roster to portrait positions. Plan a secondary angle that adds information while protecting identification.",
    "target": "Portrait labels are accurate and readable, and secondary coverage has a specific reported purpose.",
    "basis": "Main category 11 and current-year category 5 name portraits plus secondary coverage; methods supported by design standards."
  },
  {
    "id": "21",
    "title": "Make the index a reliable route",
    "group": "Specialized work",
    "visual": "index",
    "concept": "An index is navigation based on verified names and page references. Its design needs to support quick lookup, but visual order cannot compensate for a misspelled name or wrong page. Treat indexing as reporting and proofing, not only typesetting.",
    "steps": [
      "Check each index entry against the verified identity source and the actual coverage.",
      "Apply the staff’s approved sorting, reference and page-number conventions.",
      "Test a lookup from entry to page, then check the page back against the index."
    ],
    "stages": [
      {
        "title": "Compare the records",
        "visual": "index",
        "example": "ROSTER: Maya Chen. COVERAGE PAGE: 42. DRAFT INDEX: Mya Chen, 24.",
        "explain": "Both the name and the page reference conflict with the practice sources. The entry needs two independent corrections."
      },
      {
        "title": "Repair the navigation",
        "visual": "index-good",
        "example": "Maya Chen — 42",
        "explain": "Now the reference can lead to the verified coverage. Sorting and display should follow the current staff system."
      },
      {
        "title": "Test the route",
        "visual": "index-good",
        "example": "Look up Maya → open page 42 → confirm the coverage and identity.",
        "explain": "Checking the journey catches errors a spelling-only pass can miss. The final pagination must be the version used in the reference."
      }
    ],
    "trap": "Do not proof an index against an outdated page plan after pagination changes.",
    "questions": [
      {
        "prompt": "What must change in “Mya Chen, 24” given the supplied sources?",
        "options": [
          "Only the font",
          "Both the name spelling and the page number",
          "Nothing if the entry is alphabetized"
        ],
        "answer": 1,
        "why": [
          "The reference remains inaccurate.",
          "Maya Chen appears on page 42 in the practice records.",
          "Sorting does not repair identity or destination."
        ]
      },
      {
        "prompt": "The final layout moves coverage to another page. What needs checking?",
        "options": [
          "The corresponding index references",
          "Only the cover color",
          "Nothing after the first index draft"
        ],
        "answer": 0,
        "why": [
          "References need to match the actual final pages.",
          "The color does not affect the lookup destination.",
          "An old reference can lead readers to the wrong page."
        ]
      }
    ],
    "tool": "index",
    "task": "Correct the practice entry and write a two-direction check from the index to the final page and back.",
    "target": "A reader can use the accurate name and page reference to reach the intended coverage.",
    "basis": "Main category 4 names an index spread without detailed criteria; verification and navigation skills are inferred extensions."
  },
  {
    "id": "22",
    "title": "Develop a theme beyond a slogan",
    "group": "Specialized work",
    "visual": "theme",
    "concept": "A theme becomes meaningful through consistent connections between the book’s concept and the actual coverage. Repeating a phrase or logo can provide recognition, but development also needs reported content and design choices that help readers see why the concept fits this year.",
    "steps": [
      "Describe the approved concept in a way that connects to actual people and experiences.",
      "Identify how a recurring verbal or visual device can support that meaning.",
      "Check the relationship across the book without forcing unrelated coverage into the concept."
    ],
    "stages": [
      {
        "title": "Separate repetition and development",
        "visual": "theme",
        "example": "A phrase appears on every page, but none of the coverage explains it.",
        "explain": "Readers may recognize the phrase without understanding why it belongs to this book."
      },
      {
        "title": "Connect concept and coverage",
        "visual": "theme-good",
        "example": "The concept “Small shifts” connects to reported decisions that changed a process.",
        "explain": "The bridge redesign is one supported connection. Other coverage should earn its own relationship rather than borrowing an empty label."
      },
      {
        "title": "Repeat a meaningful system",
        "visual": "spread-good",
        "example": "Related typography, language and visual structure recur with purposeful variation.",
        "explain": "Development keeps the connection recognizable while allowing the reporting to remain accurate and specific."
      }
    ],
    "trap": "Do not invent a student experience to make a theme appear to fit.",
    "questions": [
      {
        "prompt": "Which choice develops a concept beyond repetition?",
        "options": [
          "A logo stamped over unrelated content",
          "A reported experience that genuinely connects to the concept",
          "A slogan added without explanation"
        ],
        "answer": 1,
        "why": [
          "Repetition alone does not establish the connection.",
          "The meaning is supported by actual coverage.",
          "A repeated slogan may remain empty."
        ]
      },
      {
        "prompt": "A strong reported story does not fit the theme wording you planned. What should guide the response?",
        "options": [
          "Force an invented connection",
          "Protect the reporting and reconsider the device or placement",
          "Delete verified facts until it appears to fit"
        ],
        "answer": 1,
        "why": [
          "The concept cannot justify fabrication.",
          "The theme system should serve truthful coverage.",
          "Removing needed facts can distort the story."
        ]
      }
    ],
    "tool": "theme",
    "task": "Write an approved concept-to-coverage connection and name one visual or verbal device that supports it.",
    "target": "The theme relationship is supported by reporting and recognizable design rather than a repeated slogan alone.",
    "basis": "Main category 1 names theme development across book components; detailed teaching is an inference grounded in design/content standards."
  },
  {
    "id": "23",
    "title": "Design an ad that communicates",
    "group": "Specialized work",
    "visual": "ad",
    "concept": "An ad or tribute has a communication purpose and verified content. Hierarchy should help readers understand the message, identify the person or organization and find any approved action or contact detail. Accuracy and readability remain essential even when the material is promotional.",
    "steps": [
      "Identify the approved message and the information readers need.",
      "Verify names, dates, images and any contact or action details through the staff’s process.",
      "Arrange the content by importance and proof the actual layout and image relationships."
    ],
    "stages": [
      {
        "title": "Name the communication job",
        "visual": "ad",
        "example": "PRACTICE MESSAGE: recognize a student’s contribution with an approved portrait and verified name.",
        "explain": "The purpose guides the hierarchy. The lesson does not authorize an advertisement, endorsement or purchase."
      },
      {
        "title": "Remove competing emphasis",
        "visual": "ad-bad",
        "example": "Many equal-size statements compete, while the verified name is difficult to find.",
        "explain": "A busy design can obscure the very person or message the ad is meant to communicate."
      },
      {
        "title": "Proof the content in place",
        "visual": "ad",
        "example": "The key message leads; the name and approved details remain readable and accurate.",
        "explain": "Use local approval, advertising, image-use and business procedures before actual publication."
      }
    ],
    "trap": "A professional-looking layout can still publish the wrong name, date or contact detail.",
    "questions": [
      {
        "prompt": "What should establish the ad’s main emphasis?",
        "options": [
          "The approved communication purpose",
          "Whichever ornament is biggest",
          "A random type treatment"
        ],
        "answer": 0,
        "why": [
          "Hierarchy should support the actual message.",
          "Decoration may not communicate the purpose.",
          "An arbitrary treatment can compete with the message."
        ]
      },
      {
        "prompt": "The verified name is correct in notes but misspelled on the finished ad. What is needed?",
        "options": [
          "Publish because the notes are correct",
          "Correct and proof the actual layout through the local approval process",
          "Only enlarge the image"
        ],
        "answer": 1,
        "why": [
          "Readers receive the layout, not the notes.",
          "The final artifact needs the verified spelling.",
          "The spelling error would remain."
        ]
      }
    ],
    "tool": "ad",
    "task": "State the practice ad’s message, identify its verified details and explain the hierarchy you would use under local approval procedures.",
    "target": "The approved message is clear and the actual displayed information is accurate and readable.",
    "basis": "Main category 3 names student-designed ads; skills inferred from design, photography and accuracy standards."
  },
  {
    "id": "24",
    "title": "Keep a campaign message consistent",
    "group": "Specialized work",
    "visual": "marketing",
    "concept": "A campaign gives an audience a clear, accurate message across different formats. Consistency means preserving the essential facts and intended action while adapting the layout to each format. A repeated design is not enough if the date, destination or purpose changes accidentally.",
    "steps": [
      "Identify the approved audience, message and action.",
      "Verify the essential facts and preserve them across formats.",
      "Adapt size and hierarchy for each format, then test the actual destination or instruction."
    ],
    "stages": [
      {
        "title": "Create the source of truth",
        "visual": "notes",
        "example": "APPROVED PRACTICE FACTS: yearbook pickup, Friday, library desk.",
        "explain": "The facts are fictional training material. Actual announcements or sales messages need current approval and verification."
      },
      {
        "title": "Compare two formats",
        "visual": "marketing",
        "example": "Poster: Friday, library. Social card: Thursday, front office.",
        "explain": "The formats look related but disagree about the action. Design consistency cannot repair conflicting instructions."
      },
      {
        "title": "Adapt without changing facts",
        "visual": "marketing-good",
        "example": "Both formats say Friday, library desk; each makes the action easy to find.",
        "explain": "Check any real link or destination through the current workflow. The lesson does not authorize sending or publishing a campaign."
      }
    ],
    "trap": "Do not use invented urgency, a false availability claim or an unverified deadline to make a message more persuasive.",
    "questions": [
      {
        "prompt": "What is the main problem in the practice campaign?",
        "options": [
          "The formats have different dimensions",
          "The day and destination contradict the approved facts",
          "The same message appears in two places"
        ],
        "answer": 1,
        "why": [
          "Different formats often need different dimensions.",
          "The essential instructions disagree.",
          "Consistent repetition can be useful."
        ]
      },
      {
        "prompt": "A social format needs a shorter message. What must survive the edit?",
        "options": [
          "The verified facts and intended action",
          "Only the decorative slogan",
          "An invented urgency claim"
        ],
        "answer": 0,
        "why": [
          "Adapt the presentation without changing what people are told to do.",
          "The slogan may omit essential instructions.",
          "Persuasion does not justify a false claim."
        ]
      }
    ],
    "tool": "marketing",
    "task": "Repair the conflicting practice messages and name the facts that must stay consistent across an approved campaign.",
    "target": "The audience receives accurate, clear and consistent information in each format.",
    "basis": "Main category 6 names a student-produced campaign; detailed method is inferred and does not prescribe channels or submission counts."
  },
  {
    "id": "25",
    "title": "Curate a portfolio with range",
    "group": "Photograph & select",
    "visual": "portfolio",
    "concept": "A portfolio shows choices as well as individual images. A useful selection combines strong storytelling and technical quality with distinct contributions: different moments, viewpoints or purposes. Repeating near-identical frames can hide the photographer’s range even when one frame is strong.",
    "steps": [
      "Evaluate each candidate for meaning, technical usability and researched context.",
      "Compare what the images contribute as a set rather than selecting by isolated attractiveness.",
      "Replace redundant or weak choices and keep the identity and caption information needed to understand each frame."
    ],
    "stages": [
      {
        "title": "See the repetition",
        "visual": "portfolio-same",
        "example": "Several similar views show almost the same moment and angle.",
        "explain": "A reader receives little new evidence of the photographer’s choices across the set."
      },
      {
        "title": "Look for distinct contributions",
        "visual": "portfolio",
        "example": "A strong action moment, a revealing detail and a purposeful portrait contribute different information.",
        "explain": "These are examples of range, not a required category mix or portfolio size. Follow the actual assignment."
      },
      {
        "title": "Proof the set and its context",
        "visual": "portfolio",
        "example": "Each selected image has a reason to remain and accurate supporting information.",
        "explain": "Do not keep a weak frame solely to create variety. The set should demonstrate both range and quality."
      }
    ],
    "trap": "Range does not mean adding an unrelated or technically unusable picture just because it looks different.",
    "questions": [
      {
        "prompt": "What is the main weakness in a set of near-identical frames?",
        "options": [
          "It may repeat the same contribution and hide range",
          "It always proves broad range",
          "It needs an arbitrary number rule"
        ],
        "answer": 0,
        "why": [
          "The set shows little difference in moment, purpose or viewpoint.",
          "Similarity alone does not demonstrate range.",
          "The lesson does not establish a submission count."
        ]
      },
      {
        "prompt": "A very different image is blurred and adds no useful story information. Should it stay for variety alone?",
        "options": [
          "Yes, any difference is enough",
          "No; range and quality both need a reason",
          "Only if it has a large border"
        ],
        "answer": 1,
        "why": [
          "Difference alone does not establish a strong selection.",
          "Each image needs to contribute and remain usable.",
          "A border does not improve its content or focus."
        ]
      }
    ],
    "tool": "portfolio",
    "task": "Curate the demonstration set and explain what each selected image contributes. Apply the assignment’s own portfolio requirements.",
    "target": "The selection shows distinct strengths without keeping redundant or unusable images for variety alone.",
    "basis": "Main category 26 and current-year category 9 name portfolios; range is explicit, exact counts and senior-only eligibility are excluded."
  },
  {
    "id": "26",
    "title": "Proof the page readers will receive",
    "group": "Specialized work",
    "visual": "audit",
    "concept": "Final review checks relationships across the actual artifact: names against records, captions against images, graphics against sources and type against the final layout. A repair is complete only after you review the corrected output under your current production workflow.",
    "steps": [
      "Use the approved staff checklist to inspect the actual final page or export.",
      "Record a specific problem, the source that establishes it and the repair needed.",
      "Check the new output after the change, including links, references and information affected elsewhere."
    ],
    "stages": [
      {
        "title": "Find independent errors",
        "visual": "audit",
        "example": "Roster: Maya Chen. Caption: Mya Chen. Data source: 18. Graphic: 81.",
        "explain": "The name and value need separate corrections. The polished layout does not make either accurate."
      },
      {
        "title": "Check the relationships",
        "visual": "caption-far",
        "example": "The corrected caption still sits beside the wrong illustration.",
        "explain": "Proofing the words alone misses the image-to-caption connection. Inspect the whole artifact."
      },
      {
        "title": "Close the repair loop",
        "visual": "spread-good",
        "example": "Source → correction → new output → recheck.",
        "explain": "Use the staff’s final review, export and handoff procedures. A box checked in this activity does not substitute for a verified production artifact."
      }
    ],
    "trap": "Do not assume an edit in the working file is present in the export you are about to hand off.",
    "questions": [
      {
        "prompt": "The name and chart value both conflict with verified sources. What needs correction?",
        "options": [
          "Only whichever error is larger",
          "Both errors, each checked against its source",
          "Only the page border"
        ],
        "answer": 1,
        "why": [
          "Both communicate inaccurate information.",
          "Independent errors need independent repairs.",
          "The content errors would remain."
        ]
      },
      {
        "prompt": "The working file is fixed but the old PDF is still selected for handoff. What is needed?",
        "options": [
          "Use the old PDF because the edit was made",
          "Create and inspect the correct new output through the staff workflow",
          "Only rename the old PDF"
        ],
        "answer": 1,
        "why": [
          "The reader would still receive the errors.",
          "Verify the actual file being delivered.",
          "A new name does not change old content."
        ]
      }
    ],
    "tool": "audit",
    "task": "Write a source → problem → repair → recheck log for the practice page, then use the staff checklist on approved work.",
    "target": "The actual output is accurate, readable and internally connected, with corrections verified after export.",
    "basis": "Synthesis of writing, design and photography standards; production settings and approval procedures remain local."
  }
];
