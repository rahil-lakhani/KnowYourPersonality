
// Start Up Page - Yes Button Pressed Behavior

var yesBtn = document.querySelector(".start-btn-yes");

yesBtn.addEventListener("click", function () {

    document.querySelector(".start-up").classList.add("visibility");
    document.querySelector(".yes-button").classList.remove("visibility");
    
});


// Entered Animal Name & the Outcome

var animalBtn = document.querySelector(".animal-name-section button");

animalBtn.addEventListener("click", function(event) {

    event.preventDefault();

    var animalName = document.querySelector("input").value;

    document.querySelector(".yes-button").classList.add("visibility");
    document.querySelector(".matched-animal-name").classList.remove("visibility");
    document.querySelector(".back-to-start-btn").classList.remove("visibility");

    switch (animalName.toLowerCase()) {

        case "badger":
            document.querySelector("ul").innerHTML = "<li>Patriotic</li><li>Protective</li><li>Passionate</li><li>Blunt</li><li>Aggressive</li>";
            break;

            case "bear":
                document.querySelector("ul").innerHTML = "<li>Confident</li><li>Ethical</li><li>Protective</li><li>Blunt</li><li>Overpowering</li>";
                break;

                case "cat":
                    document.querySelector("ul").innerHTML = "<li>Independent</li><li>Free-Thinker</li><li>Nocturnal</li><li>Leader</li><li>Demanding</li>";
                    break;

                    case "cheetah":
                        document.querySelector("ul").innerHTML = "<li>Solitary</li><li>Sneaky</li><li>Protective</li>";
                        break;

                        case "dog":
                            document.querySelector("ul").innerHTML = "<li>Cheerful</li><li>Devoted</li><li>Easy-Going</li><li>Protective</li><li>Faithful</li><li>Impatient</li>";
                            break;

                            case "dolphin":
                                document.querySelector("ul").innerHTML = "<li>Charismatic</li><li>Gregarious</li><li>Zealous</li><li>Talented</li>";
                                break;

                                case "fox":
                                    document.querySelector("ul").innerHTML = "<li>Autonomous</li><li>Generous</li><li>Creative</li><li>Flirtatious</li><li>Procrastinating</li>";
                                    break;

                                    case "lion":
                                        document.querySelector("ul").innerHTML = "<li>Powerful</li><li>Good-Looking</li><li>Compelling</li><li>Courageous</li><li>Tyrannical</li>";
                                        break;

                                        case "otter":
                                            document.querySelector("ul").innerHTML = "<li>Fun-Loving</li><li>Communicative</li><li>Unassuming</li><li>Appealing</li><li>Finicky</li>";
                                            break;

                                            case "sea lion":
                                                document.querySelector("ul").innerHTML = "<li>Enthusiastic</li><li>Flirtatious</li><li>Charming</li><li>Plucky</li><li>Obstinate</li>";
                                                break;

        case "tiger":
            document.querySelector("ul").innerHTML = "<li>Handsome</li><li>Discerning</li><li>Curious</li><li>Fashionable</li><li>Conceited</li>";
            break;

            case "walrus":
                document.querySelector("ul").innerHTML = "<li>Methodical</li><li>Loyal</li><li>Complacent</li><li>Lazy</li>";
                break;

                case "weasel":
                    document.querySelector("ul").innerHTML = "<li>Attractive</li><li>Mischievous</li><li>Flirtatious</li><li>Conceited</li><li>Untrustworthy</li>";
                    break;

                    case "wild cat":
                        document.querySelector("ul").innerHTML = "<li>Attractive</li><li>Spiritual</li><li>Sexy</li><li>Autonomous</li><li>Uncommitted</li>";
                        break;

                        case "wild dog":
                            document.querySelector("ul").innerHTML = "<li>Reliable</li><li>Charitable</li><li>Interesting</li><li>Loyal</li><li>Restless</li>";
                            break;

                            case "wolf":
                                document.querySelector("ul").innerHTML = "<li>Good-Looking</li><li>Athletic</li><li>Decisive</li><li>Passionate</li><li>Aggressive</li>";
                                break;

                                case "baboon":
                                    document.querySelector("ul").innerHTML = "<li>Sociable</li><li>Proud</li><li>Inquisitive</li><li>Respectful</li><li>Unsettled</li>";
                                    break;

                                    case "bison":
                                        document.querySelector("ul").innerHTML = "<li>Courageous</li><li>Stable</li><li>Reliable</li><li>Predictable</li><li>Uninspiring</li>";
                                        break;

                                        case "cottontail":
                                            document.querySelector("ul").innerHTML = "<li>Gentle</li><li>Cute</li><li>Faithful</li><li>Passionate</li><li>Impatient</li>";
                                            break;

                                            case "cow":
                                                document.querySelector("ul").innerHTML = "<li>Sociable</li><li>Curious</li><li>Kind</li><li>Calm</li><li>Protective</li><li>Quiet</li>";
                                                break;

        case "duck":
            document.querySelector("ul").innerHTML = "<li>Noisy</li><li>Keeper</li><li>Hardworking</li><li>Playful</li><li>Values-Family</li>";
            break;

            case "deer":
                document.querySelector("ul").innerHTML = "<li>Beautiful</li><li>Elusive</li><li>Flexible</li><li>Idealistic</li><li>Inconsistent</li>";
                break;

                case "elephant":
                    document.querySelector("ul").innerHTML = "<li>Spiritual</li><li>Intelligent</li><li>Principled</li><li>Protective</li><li>Pompous</li>";
                    break;

                    case "giraffe":
                        document.querySelector("ul").innerHTML = "<li>Good-Looking</li><li>Confident</li><li>Sophisticated</li><li>Uncompromising</li><li>Snooty</li>";
                        break;

                        case "goat":
                            document.querySelector("ul").innerHTML = "<li>Calm</li><li>Gentle</li><li>Mild-Mannered</li><li>Shy</li><li>Stable</li><li>Sympathetic</li>";
                            break;

                            case "gorilla":
                                document.querySelector("ul").innerHTML = "<li>Unpretentious</li><li>Fun-Loving</li><li>Adventurous</li><li>Gentle</li><li>Lazy</li>";
                                break;

                                case "guinea pig":
                                    document.querySelector("ul").innerHTML = "<li>Outgoing</li><li>Timid</li><li>Energetic</li><li>Curious</li><li>Clingy</li>";
                                    break;

                                    case "hadgehog":
                                        document.querySelector("ul").innerHTML = "<li>Sarcastic</li><li>Cunning</li><li>Sensitive</li><li>Opportunist</li><li>Activist</li><li>Individualist</li>";
                                        break;

                                        case "hippopotamus":
                                            document.querySelector("ul").innerHTML = "<li>Helpful</li><li>Independent</li><li>Honest</li><li>Emotional</li><li>Unpredictable</li>";
                                            break;

                                            case "horse":
                                                document.querySelector("ul").innerHTML = "<li>Steady</li><li>Plucky</li><li>Observant</li><li>Stubborn</li><li>Know-It-All</li>";
                                                break;

        case "koala":
            document.querySelector("ul").innerHTML = "<li>Quiet</li><li>Sensitive</li><li>Realistic</li><li>Loyal</li><li>Reliable</li>";
            break;

            case "llama":
                document.querySelector("ul").innerHTML = "<li>Social</li><li>Gentle</li><li>Shy</li><li>Curious</li>";
                break;

                case "meerkat":
                    document.querySelector("ul").innerHTML = "<li>Confident</li><li>Organized</li><li>Social</li>";
                    break;

                    case "monkey":
                        document.querySelector("ul").innerHTML = "<li>Confident</li><li>Cheerful</li><li>Funny</li><li>Practical</li><li>Versatile</li><li>Skillful</li>";
                        break;

                        case "mountain goat":
                            document.querySelector("ul").innerHTML = "<li>Nimble</li><li>Dexterous</li><li>Creative</li><li>Unsociable</li>";
                            break;

                            case "ox":
                                document.querySelector("ul").innerHTML = "<li>Patriotic</li><li>Diligent</li><li>Dependable</li><li>Ambitious</li>";
                                break;

                                case "panda":
                                    document.querySelector("ul").innerHTML = "<li>Loving</li><li>Caring</li><li>Playful</li><li>Self-Sufficient</li><li>Dreamer</li>";
                                    break;

                                    case "pig":
                                        document.querySelector("ul").innerHTML = "<li>Generous</li><li>Trustful</li><li>Honest</li><li>Tolerant</li><li>Innocent</li><li>Friendly</li>";
                                        break;

                                        case "raccoon":
                                            document.querySelector("ul").innerHTML = "<li>Agile</li><li>Responsible</li><li>Suspicious</li><li>Intelligent</li><li>Nocturnal</li>";
                                            break;

                                            case "rabbit":
                                                document.querySelector("ul").innerHTML = "<li>Humble</li><li>Cunning</li><li>Quick</li><li>Nervous</li><li>Silent</li>";
                                                break;

        case "rhino":
            document.querySelector("ul").innerHTML = "<li>Loyal</li><li>Engaging</li><li>Determined</li><li>Courageous</li><li>Aggressive</li>";
            break;

            case "sable":
                document.querySelector("ul").innerHTML = "<li>Protective</li><li>Eloquent</li><li>Charming</li><li>Snooty</li><li>Judgmental</li>";
                break;

                case "sheep":
                    document.querySelector("ul").innerHTML = "<li>Conservative</li><li>Supportive</li><li>Punctual</li><li>Servile</li><li>Boring</li>";
                    break;

                    case "sloth":
                        document.querySelector("ul").innerHTML = "<li>Solitary</li><li>Smart</li><li>Sweet</li><li>Shy</li>";
                        break;

                        case "turtle":
                            document.querySelector("ul").innerHTML = "<li>Protector</li><li>Patient</li><li>Narrow-Minded</li><li>Stubborn</li><li>Peaceful</li><li>Monotonous</li>";
                            break;

                            case "warthog":
                                document.querySelector("ul").innerHTML = "<li>Industrious</li><li>Bright</li><li>Brave</li><li>Blunt</li><li>Cranky</li>";
                                break;

                                case "zebra":
                                    document.querySelector("ul").innerHTML = "<li>Passionate</li><li>Dynamic</li><li>Determined</li><li>Untamable</li><li>Impatient</li>";
                                    break;

                                    case "ant":
                                        document.querySelector("ul").innerHTML = "<li>Dependable</li><li>Productive</li><li>Meticulous</li>";
                                        break;

                                        case "bat":
                                            document.querySelector("ul").innerHTML = "<li>Artistic</li><li>Reflective</li><li>Unpredictable</li>";
                                            break;

                                            case "beaver":
                                                document.querySelector("ul").innerHTML = "<li>Reliable</li><li>Ethical</li><li>Judgmental</li>";
                                                break;

        case "honey bee":
            document.querySelector("ul").innerHTML = "<li>Masterful</li><li>Responsive</li><li>Constructive</li>";
            break;

            case "mole":
                document.querySelector("ul").innerHTML = "<li>Observant</li><li>Introspective</li><li>Pessimistic</li>";
                break;

                case "porcupine":
                    document.querySelector("ul").innerHTML = "<li>Thrifty</li><li>Practical</li><li>Cynical</li>";
                    break;

                    case "prairie dog":
                        document.querySelector("ul").innerHTML = "<li>Communicative</li><li>Cautious</li><li>Meddlesome</li>";
                        break;

                        case "rat":
                            document.querySelector("ul").innerHTML = "<li>Quick-Witted</li><li>Resourceful</li><li>Smart</li>";
                            break;

                            case "shrew":
                                document.querySelector("ul").innerHTML = "<li>Sensitive</li><li>Creative</li><li>Paranoid</li>";
                                break;

                                case "mouse":
                                    document.querySelector("ul").innerHTML = "<li>Sensible</li><li>Nervous</li><li>Shy</li><li>Hardworking</li><li>Reliable</li><li>Modest</li>";
                                    break;

                                    case "bird":
                                        document.querySelector("ul").innerHTML = "<li>Cheerful</li><li>Full-Of-Inner-Beauty</li><li>Positive</li><li>Free-Spirit</li><li>Simple</li>";
                                        break;

                                        case "crow":
                                            document.querySelector("ul").innerHTML = "<li>Aggressive</li><li>Intelligent</li><li>Quarrelsome</li>";
                                            break;

                                            case "eagle":
                                                document.querySelector("ul").innerHTML = "<li>Attractive</li><li>Self-Confident</li><li>Impatient</li>";
                                                break;

        case "hawk":
            document.querySelector("ul").innerHTML = "<li>Ambitious</li><li>Intuitive</li><li>Observant</li><li>Logical</li>";
            break;

            case "peacock":
                document.querySelector("ul").innerHTML = "<li>Flirtatious</li><li>Loyal</li><li>Superficial</li>";
                break;

                case "penguin":
                    document.querySelector("ul").innerHTML = "<li>Witty</li><li>Meticulous</li><li>Intelligent</li><li>Dual-Natured</li><li>Inscrutable</li><li>Self-Conscious</li>";
                    break;

                    case "rooster":
                        document.querySelector("ul").innerHTML = "<li>Original</li><li>Fashionable</li><li>Perfectionist</li>";
                        break;

                        case "sparrow":
                            document.querySelector("ul").innerHTML = "<li>Social</li><li>Resourceful</li><li>Unobtrusive</li><li>Opportunistic</li><li>Unfocused</li><li>Flighty</li>";
                            break;

                            case "swan":
                                document.querySelector("ul").innerHTML = "<li>Sophisticated</li><li>Gentle</li><li>Flighty</li>";
                                break;

                                case "swift":
                                    document.querySelector("ul").innerHTML = "<li>Good-Looking</li><li>Athletic</li><li>Social</li><li>Flighty</li><li>Unfocused</li>";
                                    break;

                                    case "vulture":
                                        document.querySelector("ul").innerHTML = "<li>Opportunistic</li><li>Patient</li><li>Greedy</li>";
                                        break;

                                        case "cassowary":
                                            document.querySelector("ul").innerHTML = "<li>Self-confident</li><li>Capable</li><li>Independent</li><li>Testy</li><li>Single-Minded</li>";
                                            break;

                                            case "hummingbird":
                                                document.querySelector("ul").innerHTML = "<li>Small</li><li>Energetic</li><li>Poised</li><li>Extroverted</li><li>Nosy</li><li>Unreliable</li>";
                                                break;
                                                
        case "albatross":
            document.querySelector("ul").innerHTML = "<li>Successful</li><li>Admirable</li><li>Visionary</li><li>Inaccessible</li><li>Unrealistic</li><li>Inflexible</li>";
            break;

            case "dove":
                document.querySelector("ul").innerHTML = "<li>Plain</li><li>Friendly</li><li>Level-headed</li><li>Likable</li>";
                break;

                case "owl":
                    document.querySelector("ul").innerHTML = "<li>Eloquent</li><li>Sincere</li><li>Conservative</li>";
                    break;

                    case "crocodile":
                        document.querySelector("ul").innerHTML = "<li>Tough</li><li>Street-Smart</li><li>Self-Reliant</li><li>Passionate</li><li>Conceited</li><li>Ruthless</li>";
                        break;

                        case "snake":
                            document.querySelector("ul").innerHTML = "<li>Sensuous</li><li>Inventive</li><li>Meticulous</li><li>Unemotional</li><li>Nervous</li>";
                            break;

                            case "whale":
                                document.querySelector("ul").innerHTML = "<li>Quiet</li><li>Friendly</li><li>Reliable</li><li>Honest</li><li>Organized</li><li>Serious</li>";
                                break;

                                case "octopus":
                                    document.querySelector("ul").innerHTML = "<li>Intellectual</li><li>Perceptive</li><li>Strategic</li>";
                                    break;

                                    case "sea horse":
                                        document.querySelector("ul").innerHTML = "<li>Mysterious</li><li>Intuitive</li><li>Nurturing</li>";
                                        break;
    
        default:
            
            document.querySelector(".yes-button").classList.add("visibility");
            document.querySelector(".matched-animal-name").classList.add("visibility");
            document.querySelector(".unmatched-animal-name").classList.remove("visibility");
            document.querySelector(".back-to-start-btn").classList.remove("visibility");

    }

});


// Disclaimer Text Click Behavior

var disclaimerTextClick = document.querySelector(".disclaimer-btn");

disclaimerTextClick.addEventListener("click", function() {
    document.querySelector(".matched-animal-name").classList.add("visibility");
    document.querySelector(".disclaimer-section").classList.remove("visibility");
    document.querySelector(".back-to-start-btn").classList.remove("visibility");
});


// Start Up Page - No Button Pressed Behavior

var noBtn = document.querySelector(".start-btn-no");

noBtn.addEventListener("click", function () {

    document.querySelector(".start-up").classList.add("visibility");
    document.querySelector(".no-button").classList.remove("visibility");
    document.querySelector(".back-to-start-btn").classList.remove("visibility");

});


// Back to Start Button Behavior

var backToStart = document.querySelector(".back-to-start-btn");

backToStart.addEventListener("click", function() {

    document.querySelector(".yes-button").classList.add("visibility");
    document.querySelector("input").value = "";
    document.querySelector(".matched-animal-name").classList.add("visibility");
    document.querySelector(".unmatched-animal-name").classList.add("visibility");
    document.querySelector(".no-button").classList.add("visibility");
    document.querySelector(".back-to-start-btn").classList.add("visibility");
    document.querySelector(".start-up").classList.remove("visibility");

});