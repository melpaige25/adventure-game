// Crossroads Game Engine
class GameEngine {
    constructor() {
        this.currentNode = 'start';
        this.chapter = 1;
        this.loopCount = 0;
        this.visitedNodes = new Set();

        // Load discovered endings from localStorage to persist across sessions
        const savedEndings = localStorage.getItem('crossroads_discovered_endings');
        this.discoveredEndings = savedEndings ? new Set(JSON.parse(savedEndings)) : new Set();

        this.relationships = {
            mark: 50,
            kids: 50,
            chen: 0,
            steph: 0,
            alex: 0,
            james: 0
        };
        this.flags = {
            hasLooped: false,
            metDrChen: false,
            acceptedProfessor: false,
            acceptedMarketing: false,
            acceptedInfluencer: false,
            romanceStarted: false,
            doorUnlocked: false
        };
    }

    // Initialize game
    init() {
        this.setupEventListeners();
        this.showScreen('title-screen');
    }

    // Setup all event listeners
    setupEventListeners() {
        document.getElementById('new-game-btn').addEventListener('click', () => this.newGame());
        document.getElementById('load-game-btn').addEventListener('click', () => this.loadGame());
        document.getElementById('about-btn').addEventListener('click', () => this.showScreen('about-screen'));
        document.getElementById('back-btn').addEventListener('click', () => this.showScreen('title-screen'));
        document.getElementById('save-btn').addEventListener('click', () => this.saveGame());
        document.getElementById('menu-btn').addEventListener('click', () => this.returnToMenu());
        document.getElementById('restart-btn').addEventListener('click', () => this.restart());
        document.getElementById('continue-loop-btn').addEventListener('click', () => this.continueLoop());

        // Choice buttons
        document.querySelectorAll('.choice-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const choiceIndex = parseInt(e.target.dataset.choice);
                this.makeChoice(choiceIndex);
            });
        });
    }

    // Show specific screen
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }

    // Start new game
    newGame() {
        this.currentNode = 'start';
        this.chapter = 1;
        this.visitedNodes = new Set();
        this.relationships = {
            mark: 50,
            kids: 50,
            chen: 0,
            steph: 0,
            alex: 0,
            james: 0
        };
        this.flags = {
            hasLooped: this.loopCount > 0,
            metDrChen: false,
            acceptedProfessor: false,
            acceptedMarketing: false,
            acceptedInfluencer: false,
            romanceStarted: false,
            doorUnlocked: false
        };
        this.showScreen('game-screen');
        this.updateDisplay();
    }

    // Continue after time loop
    continueLoop() {
        this.loopCount++;
        this.newGame();
    }

    // Restart completely
    restart() {
        this.loopCount = 0;
        // Don't reset discoveredEndings - keep the player's collection across restarts
        // discoveredEndings persists in localStorage automatically
        this.newGame();
    }

    // Save game to localStorage
    saveGame() {
        const saveData = {
            currentNode: this.currentNode,
            chapter: this.chapter,
            loopCount: this.loopCount,
            visitedNodes: Array.from(this.visitedNodes),
            discoveredEndings: Array.from(this.discoveredEndings),
            relationships: this.relationships,
            flags: this.flags,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem('crossroads_save', JSON.stringify(saveData));
        alert('Game saved successfully!');
    }

    // Load game from localStorage
    loadGame() {
        const saveData = localStorage.getItem('crossroads_save');
        if (!saveData) {
            alert('No saved game found!');
            return;
        }

        try {
            const data = JSON.parse(saveData);
            this.currentNode = data.currentNode;
            this.chapter = data.chapter;
            this.loopCount = data.loopCount;
            this.visitedNodes = new Set(data.visitedNodes);
            this.discoveredEndings = new Set(data.discoveredEndings);
            this.relationships = data.relationships;
            this.flags = data.flags;

            this.showScreen('game-screen');
            this.updateDisplay();
            alert('Game loaded successfully!');
        } catch (e) {
            alert('Error loading save file!');
        }
    }

    // Return to menu
    returnToMenu() {
        if (confirm('Return to menu? (Don\'t forget to save!)')) {
            this.showScreen('title-screen');
        }
    }

    // Make a choice
    makeChoice(choiceIndex) {
        const node = StoryData.nodes[this.currentNode];
        if (!node || !node.choices || !node.choices[choiceIndex]) return;

        const choice = node.choices[choiceIndex];

        // Remove focus from all buttons to prevent highlight persisting
        document.querySelectorAll('.choice-btn').forEach(btn => {
            btn.blur();
        });

        // Apply relationship changes
        if (choice.relationships) {
            this.applyRelationshipChanges(choice.relationships);
        }

        // Set flags
        if (choice.setFlags) {
            Object.assign(this.flags, choice.setFlags);
        }

        // Check for conditional next node
        let nextNode = choice.next;
        if (choice.conditionalNext) {
            for (const condition of choice.conditionalNext) {
                if (this.checkCondition(condition.condition)) {
                    nextNode = condition.next;
                    break;
                }
            }
        }

        // Update chapter if specified
        if (choice.chapter) {
            this.chapter = choice.chapter;
        }

        // Navigate to next node
        this.currentNode = nextNode;
        this.visitedNodes.add(nextNode);

        // Check if this is an ending
        const nextNodeData = StoryData.nodes[nextNode];
        if (nextNodeData && nextNodeData.isEnding) {
            this.showEnding(nextNode);
        } else {
            this.updateDisplay();
        }
    }

    // Check condition
    checkCondition(condition) {
        if (condition.flag) {
            return this.flags[condition.flag] === true;
        }
        if (condition.relationship) {
            const rel = this.relationships[condition.relationship.person];
            switch (condition.relationship.operator) {
                case '>': return rel > condition.relationship.value;
                case '<': return rel < condition.relationship.value;
                case '>=': return rel >= condition.relationship.value;
                case '<=': return rel <= condition.relationship.value;
                case '==': return rel === condition.relationship.value;
                default: return false;
            }
        }
        if (condition.loopCount) {
            return this.loopCount >= condition.loopCount;
        }
        return false;
    }

    // Apply relationship changes
    applyRelationshipChanges(changes) {
        for (const person in changes) {
            if (this.relationships.hasOwnProperty(person)) {
                this.relationships[person] = Math.max(0, Math.min(100, this.relationships[person] + changes[person]));
                this.updateRelationshipDisplay(person);
            }
        }
    }

    // Update relationship display
    updateRelationshipDisplay(person) {
        const value = this.relationships[person];
        const bar = document.getElementById(`rel-${person}`);
        const valDisplay = document.getElementById(`rel-${person}-val`);

        if (bar && valDisplay) {
            bar.style.width = `${value}%`;
            bar.classList.add('updated');
            setTimeout(() => bar.classList.remove('updated'), 500);
            valDisplay.textContent = value;
        }
    }

    // Update all relationship displays
    updateAllRelationships() {
        for (const person in this.relationships) {
            this.updateRelationshipDisplay(person);
        }
    }

    // Update main display
    updateDisplay() {
        const node = StoryData.nodes[this.currentNode];
        if (!node) {
            console.error('Node not found:', this.currentNode);
            return;
        }

        // Update status bar
        document.getElementById('chapter-display').textContent = this.chapter;
        document.getElementById('loop-display').textContent = this.loopCount;

        // Update sprite
        const spriteDisplay = document.getElementById('sprite-display');
        spriteDisplay.innerHTML = getSprite(node.sprite || 'diane_neutral');

        // Update scene text
        let text = node.text;

        // Process dynamic text
        if (node.dynamicText) {
            text = this.processDynamicText(node);
        }

        document.getElementById('scene-text').innerHTML = text;

        // Update choices
        const choiceButtons = document.querySelectorAll('.choice-btn');
        if (node.choices) {
            node.choices.forEach((choice, index) => {
                if (choiceButtons[index]) {
                    choiceButtons[index].textContent = choice.text;
                    choiceButtons[index].style.display = 'block';

                    // Check if choice should be hidden based on condition
                    if (choice.condition && !this.checkCondition(choice.condition)) {
                        choiceButtons[index].style.display = 'none';
                    }
                }
            });

            // Hide unused buttons
            for (let i = node.choices.length; i < choiceButtons.length; i++) {
                choiceButtons[i].style.display = 'none';
            }
        }

        // Update relationships
        this.updateAllRelationships();

        // Scroll to scene text on mobile to ensure it's visible
        setTimeout(() => {
            const sceneText = document.getElementById('scene-text');
            if (sceneText) {
                sceneText.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    }

    // Process dynamic text
    processDynamicText(node) {
        if (node.variants) {
            for (const variant of node.variants) {
                if (this.checkCondition(variant.condition)) {
                    return variant.text;
                }
            }
        }
        return node.text;
    }

    // Show ending
    showEnding(endingNode) {
        const ending = StoryData.nodes[endingNode];
        if (!ending) return;

        this.discoveredEndings.add(endingNode);

        // Auto-save discovered endings to localStorage so they persist across sessions
        localStorage.setItem('crossroads_discovered_endings', JSON.stringify(Array.from(this.discoveredEndings)));

        document.getElementById('ending-title').textContent = ending.title;
        document.getElementById('ending-text').innerHTML = ending.text;

        // Show sprite
        const endingSprite = document.getElementById('ending-sprite');
        endingSprite.innerHTML = getSprite(ending.sprite || 'diane_neutral');

        // Show stats
        const stats = document.getElementById('ending-stats');
        stats.innerHTML = `
            <h3>Final Statistics</h3>
            <p>Chapter Reached: ${this.chapter}</p>
            <p>Loops Completed: ${this.loopCount}</p>
            <p>Endings Discovered: ${this.discoveredEndings.size}</p>
            <hr>
            <p>Mark: ${this.relationships.mark}</p>
            <p>Kids: ${this.relationships.kids}</p>
            ${this.relationships.chen > 0 ? `<p>Dr. Chen: ${this.relationships.chen}</p>` : ''}
            ${this.relationships.steph > 0 ? `<p>Stephanie: ${this.relationships.steph}</p>` : ''}
            ${this.relationships.alex > 0 ? `<p>Alex: ${this.relationships.alex}</p>` : ''}
            ${this.relationships.james > 0 ? `<p>James: ${this.relationships.james}</p>` : ''}
        `;

        // Show continue loop button for death endings
        const continueBtn = document.getElementById('continue-loop-btn');
        if (ending.allowsLoop) {
            continueBtn.classList.remove('hidden');
        } else {
            continueBtn.classList.add('hidden');
        }

        this.showScreen('ending-screen');
    }
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const game = new GameEngine();
    game.init();

    // Make game globally accessible for debugging
    window.game = game;
});
