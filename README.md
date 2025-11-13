# 🎭 Crossroads - A Dark Comedy Choose-Your-Own-Adventure Game

A narrative-driven interactive fiction game about Diane, a 42-year-old mother standing at life's crossroads, exploring themes of identity, choice, and existentialism.

## 🎮 Game Overview

**Crossroads** follows Diane as she receives three life-changing job offers on the same morning. Your choices determine her path through academia, corporate marketing, influencer culture, or something else entirely.

### Key Features

- **3 Major Story Paths** with unique narratives
  - 🎓 University Professor (Academic life & intellectual romance)
  - 💼 Marketing Agency (Corporate success & forbidden romance)
  - ✈️ Influencer/Homeschool (Travel & family adventure)

- **15+ Unique Endings** including:
  - Success endings
  - Tragedy endings
  - Death scenarios (with time loop mechanics)
  - Hidden "true" endings

- **Time Loop Mechanic**: Some endings trigger loops, sending Diane back to the start with knowledge of previous attempts

- **Hidden Fourth Path**: Unlocked after 3+ loops - a meta-narrative that breaks the game's reality

- **Dynamic Relationship System**: Track relationships with 6 characters
  - Mark (husband)
  - Kids (Emma & Connor)
  - Dr. Chen (therapist)
  - Stephanie (marketing boss)
  - Alex (marketing colleague)
  - James (university department head)

- **Save/Load System**: Continue your story anytime

- **Dark Theme UI**: Minimalist design with custom SVG sprites

## 🚀 How to Play

1. Open `index.html` in a web browser
2. Click "New Game" to start
3. Read the story and make choices
4. Watch relationships evolve based on your decisions
5. Discover multiple endings and story paths
6. Use Save/Load to preserve progress

## 📖 Story Paths

### Path 1: University Professor 🎓

Accept a philosophy teaching position and return to academic life. Navigate departmental politics, mentor students, and potentially develop a connection with Department Head James Harrison while balancing family responsibilities.

**Key Themes**: Intellectual fulfillment, work-life balance, professional romance

**Major Characters**: James, Dr. Chen, Mark, Kids

**Endings Available**: 5

### Path 2: Marketing Agency 💼

Join Stellar Marketing as Creative Director, bringing philosophical thinking to advertising. Work with a young, talented team including Alex Chen, and face the temptation of forbidden romance while achieving career success.

**Key Themes**: Forbidden love, ambition, corporate success, age-gap romance

**Major Characters**: Alex, Stephanie, Mark, Kids

**Endings Available**: 6

### Path 3: Influencer/Homeschool ✈️

Build a philosophy parenting brand while homeschooling your kids. Travel the world creating content, potentially leaving traditional family life behind for nomadic freedom.

**Key Themes**: Freedom, motherhood reimagined, adventure, digital entrepreneurship

**Major Characters**: Kids, Mark, Sarah (mentor)

**Endings Available**: 4

### Path 4: ??? 🚪

Unlocked after experiencing multiple loops. Questions the nature of choice itself.

**Requirements**: Complete 3+ death endings to unlock

**Endings Available**: 3 (True endings)

## 🎯 Endings Guide

### Standard Endings (12)
- **The Safe Choice**: Stay in place, avoid risk
- **The Academic Life**: Leave Mark for James, pursue academia
- **The Choice**: Run away with Alex, build new creative life
- **The Nomad**: Travel the world with the kids
- **The Return**: End affair, return to marriage
- **The Solo Path**: Focus on career and kids, let Mark find his way
- **The Scandal**: Public exposure of affair
- **The Middle Way**: Compromise between adventure and stability
- **The Numb**: Choose medication over change
- And more...

### Death Endings (3 - Enable Time Loops)
- **☠️ Death by Caffeine**: Too much coffee
- **☠️ The Long Drive**: Car accident during emotional crisis
- **☠️ The Quiet End**: Despair ending

### True Endings (3 - Fourth Path)
- **🌟 The Integration**: Achieve balance by remembering all loops
- **🦋 The Liberation**: Reset to age 23 with all knowledge
- **❓ The Unknown**: Meta-narrative transcendence

## 🎨 Technical Details

### Files Structure

```
adventure-game/
├── index.html          # Main game structure
├── styles.css          # Dark theme styling
├── sprites.js          # SVG character and scene sprites
├── game-engine.js      # Core game logic, save/load, relationships
├── story-data.js       # Complete branching narrative
└── README.md           # This file
```

### Architecture

- **Pure JavaScript**: No external dependencies
- **localStorage**: For save/load functionality
- **SVG Graphics**: Lightweight, scalable character sprites
- **Responsive Design**: Works on desktop and mobile

### Save Data Structure

The game saves:
- Current story node
- Chapter number
- Loop count
- Visited nodes
- Discovered endings
- All relationship values
- Story flags
- Timestamp

## 🎭 Characters

### Main Character
**Diane Hartwell** (42) - Philosophy major turned stay-at-home mom, standing at life's crossroads

### Family
- **Mark** - Husband, breadwinner, emotionally distant
- **Emma** (13) - Daughter, adventurous
- **Connor** (10) - Son, thoughtful

### Romance Options
- **James Harrison** (50) - University department head, intellectual connection
- **Alex Chen** (28) - Marketing creative, passionate and attentive

### Supporting Cast
- **Dr. Chen** - Therapist, voice of reason
- **Stephanie Park** - Marketing boss, ambitious
- **Sarah** - Fellow traveling parent (influencer path)

## 🎯 Design Philosophy

Crossroads explores themes of:
- **Existentialism**: Existence precedes essence - you define yourself through choices
- **Second chances**: Can we restart our lives? Should we?
- **Sacrifice vs. Self**: The tension between duty and desire
- **The unlived life**: What we become vs. what we could have been

The game uses dark comedy to examine serious questions about identity, autonomy, and the paths not taken.

## 🔧 Customization

### Adding New Story Nodes

Edit `story-data.js` and add new nodes to the `StoryData.nodes` object:

```javascript
new_node: {
    text: "Story text here",
    sprite: "sprite_name",
    choices: [
        {
            text: "Choice text",
            next: "next_node_id",
            relationships: { person: value },
            setFlags: { flagName: true }
        }
    ]
}
```

### Creating New Sprites

Add SVG code to `sprites.js`:

```javascript
sprite_name: `
    <svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
        <!-- SVG content -->
    </svg>
`
```

### Modifying Relationships

Edit initial values in `game-engine.js`:

```javascript
this.relationships = {
    person: startingValue  // 0-100
};
```

## 🐛 Troubleshooting

**Save not working?**
- Check browser localStorage is enabled
- Try a different browser if issues persist

**Story seems broken?**
- Check browser console for errors
- Verify all story node IDs match in choices

**Mysterious door not appearing?**
- Must complete 3 death endings first
- Check loop count in status bar

## 📝 Credits

**Writing & Design**: Interactive narrative exploring existential themes through dark comedy

**Inspiration**:
- Choose-your-own-adventure books
- Existentialist philosophy
- The complexity of modern motherhood
- Visual novels and interactive fiction

## 📜 License

This is a narrative game created for entertainment and artistic expression.

## 🎮 Play Tips

1. **Save often**: Use the save button in the status bar
2. **Explore all paths**: Each major path has unique stories
3. **Die intentionally**: Death endings unlock the mysterious fourth path
4. **Watch relationships**: They affect available choices and endings
5. **Read carefully**: Some choices have hidden consequences
6. **Loop count matters**: The game changes after multiple loops

## 🌟 Easter Eggs

- The mysterious door appears only after 3+ loops
- Certain relationship thresholds unlock hidden dialogue
- Some endings reference other endings if you've discovered them
- The fourth path breaks the fourth wall intentionally
- Death by caffeine is absolutely possible

---

**Ready to play?** Open `index.html` and make your choice.

*Remember: Existence precedes essence. Who will you become?*
