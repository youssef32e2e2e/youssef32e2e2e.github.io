async function loadParticles(options) {
    await loadAll(tsParticles);
    await tsParticles.load({ id: "tsparticles", options });
}

function handleAnswer(answer) {
    hideAllQuestions();
    showQuestion(`${answer}-pic`);
}

function handleColorAnswer(color) {
    if (color === 'blue') {
        hideQuestion('color-question');
        showQuestion('life-question');
    } else {
        // Handle incorrect color choice
        alert('Wrong color! Try again.');
    }
}

function startFireworks(answer) {
    hideQuestion('valentine-question');
    showFireworks();

    // Perform additional actions based on the answer (e.g., show final message)
    setTimeout(() => {
        hideFireworks();
        showQuestion('final-message');
    }, 5000);
}

function showQuestion(questionId) {
    const question = document.getElementById(questionId);
    if (question) {
        question.style.display = 'block';
    }
}

function hideQuestion(questionId) {
    const question = document.getElementById(questionId);
    if (question) {
        question.style.display = 'none';
    }
}

function hideAllQuestions() {
    const questions = document.querySelectorAll('.content');
    questions.forEach(question => {
        question.style.display = 'none';
    });
}

function showFireworks() {
    const fireworksContainer = document.getElementById('fireworks-container');
    if (fireworksContainer) {
        fireworksContainer.innerHTML = '';  // Clear previous fireworks
        for (let i = 0; i < 50; i++) {
            createFirework();
        }
    }
}

function createFirework() {
    const fireworksContainer = document.getElementById('fireworks-container');
    if (fireworksContainer) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        firework.style.left = `${randomX}px`;
        firework.style.top = `${randomY}px`;
        fireworksContainer.appendChild(firework);
    }
}

function hideFireworks() {
    const fireworksContainer = document.getElementById('fireworks-container');
    if (fireworksContainer) {
        fireworksContainer.innerHTML = '';  // Clear fireworks
    }
}

// Replace with actual paths to your images
const usPicPath = 'C:\Users\youssef adel\Downloads\youssef_habiba.png';
const sadPicPath = "C:\Users\youssef adel\Downloads\sad.png.png";
const happyPicPath = "C:\Users\youssef adel\Downloads\happy youssef .png";

document.getElementById('us-pic').src = usPicPath;
document.getElementById('sad-pic').src = sadPicPath;
document.getElementById('happy-pic').src = happyPicPath;

const configs = {
    name: 'Fireworks Mask',
    fullScreen: {
        enable: true
    },
    background: {
        color: '#000000',
        image: "url('https://particles.js.org/images/background3.jpg')",
        position: '50% 50%',
        repeat: 'no-repeat',
        size: 'cover'
    },
    backgroundMask: {
        enable: true,
        cover: {
            color: '#000'
        }
    },
    emitters: {
        direction: 'top',
        life: {
            count: 0,
            duration: 0.1,
            delay: 0.1
        },
        rate: {
            delay: 0.15,
            quantity: 1
        },
        size: {
            width: 100,
            height: 0
        },
        position: {
            y: 100,
            x: 50
        }
    },
    particles: {
        color: {
            value: '#fff'
        },
        number: {
            value: 0
        },
        destroy: {
            bounds: {
                top: 30
            },
            mode: 'split',
            split: {
                count: 1,
                factor: {
                    value: 0.333333
                },
                rate: {
                    value: 100
                },
                particles: {
                    stroke: {
                        width: 0
                    },
                    color: {
                        value: ['#ff595e', '#ffca3a', '#8ac926', '#1982c4', '#6a4c93']
                    },
                    number: {
                        value: 0
                    },
                    collisions: {
                        enable: false
                    },
                    destroy: {
                        bounds: {
                            top: 0
                        }
                    },
                    opacity: {
                        value: {
                            min: 0.1,
                            max: 1
                        },
                        animation: {
                            enable: true,
                            speed: 0.7,
                            sync: false,
                            startValue: 'max',
                            destroy: 'min'
                        }
                    },
                    effect: {
                        type: 'trail',
                        options: {
                            trail: {
                                length: {
                                    min: 5,
                                    max: 10
                                }
                            }
                        }
                    },
                    shape: {
                        type: 'circle'
                    },
                    size: {
                        value: 2,
                        animation: {
                            enable: false
                        }
                    },
                    life: {
                        count: 1,
                        duration: {
                            value: {
                                min: 1,
                                max: 2
                            }
                        }
                    },
                    move: {
                        enable: true,
                        gravity: {
                            enable: true,
                            acceleration: 9.81,
                            inverse: false
                        },
                        decay: 0.1,
                        speed: {
                            min: 10,
                            max: 25
                        },
                        direction: 'outside',
                        outModes: 'destroy'
                    }
                }
            }
        },
        life: {
            count: 1
        },
        effect: {
            type: 'trail',
            options: {
                trail: {
                    length: {
                        min: 10,
                        max: 30
                    },
                    minWidth: 1,
                    maxWidth: 1
                }
            }
        },
        rotate: {
            path: true
        },
        shape: {
            type: 'circle'
        },
        size: {
            value: 1
        },
        move: {
            enable: true,
            gravity: {
                acceleration: 15,
                enable: true,
                inverse: true,
                maxSpeed: 100
            },
            speed: {
                min: 10,
                max: 20
            },
            outModes: {
                default: 'destroy',
                top: 'none'
            }
        }
    },
    sounds: {
        enable: true,
        events: [
            {
                event: 'particleRemoved',
                filter: (args) => args.data.particle.options.move.gravity.inverse,
                audio: [
                    'https://particles.js.org/audio/explosion0.mp3',
                    'https://particles.js.org/audio/explosion1.mp3',
                    'https://particles.js.org/audio/explosion2.mp3'
                ]
            }
        ],
        volume: 50
    }
};

loadParticles(configs);
