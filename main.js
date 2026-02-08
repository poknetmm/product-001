class LottoGenerator extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'lotto-container');

        const button = document.createElement('button');
        button.textContent = 'Generate Numbers';
        button.setAttribute('class', 'generate-btn');

        const numberDisplay = document.createElement('div');
        numberDisplay.setAttribute('class', 'number-display');

        const style = document.createElement('style');
        style.textContent = `
            .lotto-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 2rem;
                background: var(--white);
                border-radius: 12px;
                box-shadow: 0 8px 32px 0 var(--shadow-color);
                backdrop-filter: blur(4px);
                border: 1px solid rgba(255, 255, 255, 0.18);
            }

            .generate-btn {
                background-color: var(--primary-color);
                color: var(--white);
                border: none;
                padding: 15px 30px;
                font-size: 1.2rem;
                border-radius: 8px;
                cursor: pointer;
                transition: background-color 0.3s, transform 0.2s;
                margin-bottom: 1.5rem;
                box-shadow: 0 4px 15px 0 rgba(74, 144, 226, 0.4);
            }

            .generate-btn:hover {
                background-color: #3a80d2;
                transform: translateY(-2px);
            }

            .number-display {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 10px;
            }

            .number-ball {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1.5rem;
                font-weight: bold;
                color: var(--white);
                box-shadow: inset 0 -3px 6px rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.2);
                text-shadow: 0 1px 2px rgba(0,0,0,0.4);
                transition: transform 0.3s ease;
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(wrapper);
        wrapper.appendChild(button);
        wrapper.appendChild(numberDisplay);

        button.addEventListener('click', () => this.generateNumbers(numberDisplay));
    }

    generateNumbers(displayElement) {
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }

        displayElement.innerHTML = '';
        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
        
        sortedNumbers.forEach((number, index) => {
            setTimeout(() => {
                const ball = document.createElement('div');
                ball.setAttribute('class', 'number-ball');
                ball.style.backgroundColor = this.getColor(number);
                ball.textContent = number;
                displayElement.appendChild(ball);
                ball.style.transform = 'scale(1)';
            }, index * 100);
        });
    }

    getColor(number) {
        if (number <= 10) return '#f39c12'; // Yellow
        if (number <= 20) return '#3498db'; // Blue
        if (number <= 30) return '#e74c3c'; // Red
        if (number <= 40) return '#2ecc71'; // Green
        return '#9b59b6'; // Purple
    }
}

customElements.define('lotto-generator', LottoGenerator);

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
}

themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
});