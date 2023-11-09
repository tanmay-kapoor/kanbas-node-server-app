const data = [
    {
        _id: "RS101",
        name: "Introduction to Rocket Propulsion",
        description:
            "Basic principles of rocket propulsion and rocket engines.",
        contents: [
            {
                heading: "Learning Objectives",
                topics: [
                    {
                        name: "What is Rocket Propulsion?",
                    },
                    {
                        name: "Need for Rocket Propulsion and its Applications",
                    },
                    {
                        name: "History of Rocket Propulsion",
                    },
                    {
                        name: "Reference Book",
                        link: "https://www.cambridge.org/highereducation/books/rocket-propulsion/4EC93E205DECCFF78FA4D1C8A0748BF2#overview",
                    },
                ],
            },
        ],
        course: "RS101",
    },
    {
        _id: "M102",
        name: "Fuel and Combustion",
        description:
            "Understanding rocket fuel, combustion processes, and efficiency.",
        course: "RS101",
        contents: [
            {
                heading: "Learning Objectives",
                topics: [
                    {
                        name: "Rocket Fuel and Combustion",
                    },
                    {
                        name: "Combustion Efficiency",
                    },
                    {
                        name: "Rocket Fuel Types",
                    },
                    {
                        name: "Why Liquid Propellants?",
                    },
                    {
                        name: "Interesting reads",
                        link: "https://www.jstor.org/stable/j.ctt189ttdk",
                    },
                ],
            },
            {
                heading: "Slides",
                topics: [
                    {
                        name: "More info",
                        link: "https://www.slideshare.net/dhirendrasingh38/rocket-propellent-ppt",
                    },
                ],
            },
        ],
    },
    {
        _id: "M103",
        name: "Nozzle Design",
        description:
            "Principles of rocket nozzle design and performance optimization.",
        course: "RS101",
    },
    {
        _id: "M201",
        name: "Fundamentals of Aerodynamics",
        description:
            "Basic aerodynamic concepts and fluid dynamics principles.",
        course: "RS102",
    },
    {
        _id: "M202",
        name: "Subsonic and Supersonic Flow",
        description:
            "Understanding subsonic and supersonic aerodynamic behaviors.",
        course: "RS102",
    },
    {
        _id: "M203",
        name: "Aerodynamic Heating",
        description:
            "Study of aerodynamic heating and thermal protection systems.",
        course: "RS102",
    },
    {
        _id: "M301",
        name: "Spacecraft Structural Design",
        description:
            "Fundamentals of designing spacecraft structures and materials selection.",
        course: "RS103",
    },
    {
        _id: "M302",
        name: "Orbital Mechanics",
        description: "Understanding orbital dynamics and mission planning.",
        course: "RS103",
    },
    {
        _id: "M303",
        name: "Spacecraft Systems Engineering",
        description:
            "Overview of spacecraft systems and subsystems engineering.",
        course: "RS103",
    },
];

export default data;
