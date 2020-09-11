'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Books",
      [
        {
          Title: "Adaptive Code: Agile Coding with Design Patterns and Solid Principles",
          Author: "Gary McLean Hall",
          PublicationYear: 2017,
          Cost: 50,
          Description: "By applying this book's principles, you can create code that accommodates new requirements and unforeseen scenarios without significant rewrites. Gary McLean Hall describes Agile best practices, principles, and patterns for designing and writing code that can evolve more quickly and easily, with fewer errors, because it doesn't impede change.",
          Summary: "Now revised, updated, and expanded, Adaptive Code, Second Edition adds indispensable practical insights on Kanban, dependency inversion, and creating reusable abstractions. Drawing on over a decade of Agile consulting and development experience, McLean Hall has updated his best-seller with deeper coverage of unit testing, refactoring, pure dependency injection, and more.",
          Language: "English",
          Img: "AdaptiveCode.png",
          Rating: 0,
          Pages: 428
        },
        {
          Title: "Designing Web APIs: Building APIs That Developers Love",
          Author: "Brenda Jin, Saurabh Sahni and Amir Shevat",
          PublicationYear: 2017,
          Cost: 60,
          Description: "Using a web API to provide services to application developers is one of the more satisfying endeavors that software engineers undertake. But building a popular API with a thriving developer ecosystem is also one of the most challenging. With this practical guide, developers, architects, and tech leads will learn how to navigate complex decisions for designing, scaling, marketing, and evolving interoperable APIs.",
          Summary: "Authors Brenda Jin, Saurabh Sahni, and Amir Shevat explain API design theory and provide hands-on exercises for building your web API and managing its operation in production. You’ll also learn how to build and maintain a following of app developers. This book includes expert advice, worksheets, checklists, and case studies from companies including Slack, Stripe, Facebook, Microsoft, Cloudinary, Oracle, and GitHub.",
          Language: "English",
          Img: "DesigningWebAPIs.png",
          Rating: 0,
          Pages: 301
        },
        {
          Title: "Hands-On Machine Learning with Scikit-Learn, Keras, and Tensorflow: Concepts, Tools, and Techniques to Build Intelligent Systems",
          Author: "Géron Aurélien",
          PublicationYear: 2019,
          Cost: 120,
          Description: "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how.",
          Summary: "By using concrete examples, minimal theory, and two production-ready Python frameworks--Scikit-Learn and TensorFlow--author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You'll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks. With exercises in each chapter to help you apply what you've learned, all you need is programming experience to get started.",
          Language: "English",
          Img: "hoMachineLearning.png",
          Rating: 0,
          Pages: 851
        },
        {
          Title: "Deep Learning for Coders with fastai and PyTorch",
          Author: "Jeremy Howard & Sylvain Gugger",
          PublicationYear: 2019,
          Cost: 120,
          Description: "Deep learning is often viewed as the exclusive domain of math PhDs and big tech companies. But as this hands-on guide demonstrates, programmers comfortable with Python can achieve impressive results in deep learning with little math background, small amounts of data, and minimal code. How? With fastai, the first library to provide a consistent interface to the most frequently used deep learning applications.",
          Summary: "Authors Jeremy Howard and Sylvain Gugger, the creators of fastai, show you how to train a model on a wide range of tasks using fastai and PyTorch. You’ll also dive progressively further into deep learning theory to gain a complete understanding of the algorithms behind the scenes.",
          Language: "English",
          Img: "DeepLearning.png",
          Rating: 0,
          Pages: 1039
        },
        {
          Title: "Dynamic Programming: Foundations and Principles, Second Edition",
          Author: "Moshe Sniedovich",
          PublicationYear: 2010,
          Cost: 10,
          Description: "Incorporating a number of the author’s recent ideas and examples, Dynamic Programming: Foundations and Principles, Second Edition presents a comprehensive and rigorous treatment of dynamic programming. The author emphasizes the crucial role that modeling plays in understanding this area. He also shows how Dijkstra’s algorithm is an excellent example of a dynamic programming algorithm, despite the impression given by the computer science literature.",
          Summary: "Taking into account recent developments in dynamic programming, this edition continues to provide a systematic, formal outline of Bellman’s approach to dynamic programming. It looks at dynamic programming as a problem-solving methodology, identifying its constituent components and explaining its theoretical basis for tackling problems.",
          Language: "English",
          Img: "DynamicProgramming.png",
          Rating: 0,
          Pages: 624
        },
        {
          Title: "El hombre en busca de sentido",
          Author: "Viktor E. Frankl",
          PublicationYear: 2015,
          Cost: 12,
          Description: "Nueva traducción de 'El hombre en busca de sentido'",
          Summary: "El doctor Frankl, psiquiatra y escritor, suele preguntar a sus pacientes aquejados de múltiples padecimientos: «¿Por qué no se suicida usted? Y muchas veces, de las respuestas extrae una orientación para la psicoterapia a aplicar: a éste, lo que le ata a la vida son los hijos al otro, un talento, una habilidad sin explotar a un tercero, quizás, sólo unos cuantos recuerdos que merece la pena rescatar del olvido. Tejer estas tenues hebras de vidas rotas en una urdimbre firme, coherente, significativa y responsable es el objeto con que se enfrenta la logoterapia. En esta obra, Viktor E. Frankl explica la experiencia que le llevó al descubrimiento de la logoterapia. Prisionero, durante mucho tiempo, en los desalmados campos de concentración, él mismo sintió en su propio ser lo que significaba una existencia desnuda. ¿Cómo pudo él que todo lo había perdido, que había visto destruir todo lo que valía la pena, que padeció hambre, frío, brutalidades sin fin, que tantas veces estuvo a punto del exterminio, cómo pudo aceptar que la vida fuera digna de vivirla? El psiquiatra que personalmente ha tenido que enfrentarse a tales rigores merece que se le escuche, pues nadie como él para juzgar nuestra condición humana sabia y compasivamente. Las palabras del doctor Frankl alcanzan un temple sorprendentemente esperanzador sobre la capacidad humana de trascender sus dificultades y descubrir la verdad conveniente y orientadora..",
          Language: "Spanish",
          Img: "BuscaSentido.png",
          Rating: 0,
          Pages: 162
        },
        {
          Title: "El arte de amar",
          Author: "Erich Fromm",
          PublicationYear: 2019,
          Cost: 10,
          Description: "Libro de Psicología.",
          Summary: "El arte de amar es una obra con la que Erich Fromm ha ayudado a varias generaciones a reflexionar sobre el amor y a responder a algunas preguntas aparentemente sencillas: ¿qué significa amar? ¿Cómo desprendernos de nosotros mismos para experimentar este sentimiento? Fromm nos explica que el amor no es solo una relación personal, sino un rasgo de madurez que se manifiesta en diversas formas: amor erótico, amor fraternal, amor filial, amor a uno mismo. Nos dice también que el amor no es algo pasajero y mecánico, como a veces nos induce a creer la sociedad de hoy. Muy al contrario, el amor es un arte, el fruto de un aprendizaje. Por ello, si queremos aprender a amar debemos actuar como lo haríamos si quisiéramos aprender cualquier otro arte, ya sea la música, la pintura, la carpintería o el arte de la medicina. O, por lo menos, no dedicar nuestra energía a lograr el éxito y el dinero, el prestigio y el poder, sino a cultivar el verdadero arte de amar. El amor intenta entender, convencer, vivificar. Por este motivo, el que ama se transforma constantemente. Capta más, observa más, es más productivo, es más el mismo.",
          Language: "Spanish",
          Img: "ArteAmar.png",
          Rating: 0,
          Pages: 160
        },
        {
          Title: "El hombre que plantaba árboles: Con dos escenas en pop-up",
          Author: "Jean Giono",
          PublicationYear: 2018,
          Cost: 5,
          Description: "Libro Contemporáneo.",
          Summary: "'Imagino que Jean Giono habrá plantado no pocos árboles a lo largo de su vida. Sólo quien ha cavado la tierra para acomodar una raíz o la promesa de ésta podría haber escrito la singularísima narración que es El hombre que plantaba árboles, una indiscutible proeza en el arte de contar. Y esa es la conclusión: estamos esperando a Elzéard Bouffier, antes de que sea demasiado tarde para el mundo'. José Saramago",
          Language: "Spanish",
          Img: "PlantabaArboles.png",
          Rating: 0,
          Pages: 36
        },
        {
          Title: "Good Night Stories for Rebel Girls: 100 Tales of Extraordinary Women",
          Author: "Elena Favilli",
          PublicationYear: 2016,
          Cost: 11,
          Description: "AUSTRALIAN BOOK INDUSTRY AWARD FOR INTERNATIONAL BOOK OF THE YEAR.",
          Summary: "The New York Times bestselling Good Night Stories for Rebel Girls is a children's book packed with 100 bedtime stories about the life of 100 extraordinary women from the past and the present, illustrated by 60 female artists from all over the world. Each woman's story is written in the style of a fairy tale. Each story has a full-page, full-color portrait that captures the spirit of the portrayed hero.",
          Language: "English",
          Img: "RebelGirls.png",
          Rating: 0,
          Pages: 224
        },
        {
          Title: "Stories for Kids Who Dare to Be Different: True Tales of Amazing People Who Stood Up and Stood Out",
          Author: "Ben Brooks & Quinton Wintor",
          PublicationYear: 2019,
          Cost: 15,
          Description: "Boys will be boys and girls will be girls? Not in this book.",
          Summary: "The follow-up to Ben Brooks's New York Times bestselling Stories for Boys Who Dare to Be Different, this book offers more extraordinary true stories of amazing people who broke the mold and changed the world for the better. The resulting message? Be yourself, and your dreams might come true. With the help of Quinton Winter's striking full-color illustrations, Brooks offers an accessible compilation of 76 famous and not-so-famous influencers from the past to the present day, every single one of them a rule-breaker and stereotype-smasher in his or her own way. Entries include Emma Gonzalez, Andy Warhol, Bjork, Hans Christian Andersen, Sally Ride, and so many more -- heroes from all walks of life and from all over the world.",
          Language: "English",
          Img: "DifferentKids.png",
          Rating: 0,
          Pages: 160
        },
        {
          Title: "Never Too Young!: 50 Unstoppable Kids Who Made a Difference",
          Author: "Aileen Weintraub & Laura Horton",
          PublicationYear: 2018,
          Cost: 14,
          Description: "'Young readers are sure to find inspiration as they read about unique children from all over the world who were able to change the world around them and be encouraged to follow their dreams and fight for what is right'.",
          Summary: "Anyone--no matter how young--can make a difference! Meet 50 incredible kids who had a positive impact in their communities . . . and the world. From Picasso, who changed the art world forever, to Malala Yousafzai, the brave teen who was shot for advocating education for girls, the 50 kids profiled in Never Too Young! will inspire and empower young readers. Some, like Anne Frank, Ruby Bridges, and Stevie Wonder, are prominent figures, while others are lesser known though their achievements are just as compelling. They come from a variety of historical periods and backgrounds, and have made an impact in politics, sports, the arts, science, and more.",
          Language: "English",
          Img: "NeverTooYoung.png",
          Rating: 0,
          Pages: 112
        },
        {
          Title: "The Shining",
          Author: "Stephen King",
          PublicationYear: 2012,
          Cost: 10,
          Description: "Before Doctor Sleep, there was The Shining, a classic of modern American horror from the undisputed master, Stephen King.",
          Summary: "Jack Torrance's new job at the Overlook Hotel is the perfect chance for a fresh start. As the off-season caretaker at the atmospheric old hotel, he'll have plenty of time to spend reconnecting with his family and working on his writing. But as the harsh winter weather sets in, the idyllic location feels ever more remote . . . and more sinister. And the only one to notice the strange and terrible forces gathering around the Overlook is Danny Torrance, a uniquely gifted five-year-old.",
          Language: "English",
          Img: "TheShining.png",
          Rating: 0,
          Pages: 659
        },
        {
          Title: "It",
          Author: "Stephen King",
          PublicationYear: 2015,
          Cost: 18,
          Description: "¿Quién o qué mutila y mata a los niños de un pequeño pueblo norteamericano? ¿Por qué llega cíclicamente el horror a Derry en forma de un payaso siniestro que va sembrando la destrucción a su paso? Esto es lo que se proponen averiguar los protagonistas de esta novela.",
          Summary: "Tras veintisiete años de tranquilidad y lejanía una antigua promesa infantil les hace volver al lugar en el que vivieron su infancia y juventud como una terrible pesadilla. Regresan a Derry para enfrentarse con su pasado y enterrar definitivamente la amenaza que los amargó durante su niñez. Saben que pueden morir, pero son conscientes de que no conocerán la paz hasta que aquella cosa sea destruida para siempre. 'It' es una de las novelas más ambiciosas de Stephen King, donde ha logrado perfeccionar de un modo muy personal las claves del género de terror.",
          Language: "English",
          Img: "It.png",
          Rating: 0,
          Pages: 1504
        },
        {
          Title: "The 7 1/2 Deaths of Evelyn Hardcastle",
          Author: "Stuart Turton",
          PublicationYear: 2019,
          Cost: 20,
          Description: "'Agatha Christie meets Groundhog Day . . . quite unlike anything I've ever read, and altogether triumphant.'--A. J. Finn, #1 New York Times bestselling author of The Woman in the Window.",
          Summary: "Aiden Bishop knows the rules. Evelyn Hardcastle will die every day until he can identify her killer and break the cycle. But every time the day begins again, Aiden wakes up in the body of a different guest at Blackheath Manor. And some of his hosts are more helpful than others. With a locked room mystery that Agatha Christie would envy, Stuart Turton unfurls a breakneck novel of intrigue and suspense. For fans of Claire North, and Kate Atkinson, The 71/2 Deaths of Evelyn Hardcastle is a breathlessly addictive mystery that follows one man's race against time to find a killer, with an astonishing time-turning twist that means nothing and no one are quite what they seem.",
          Language: "English",
          Img: "EvelynHardcastle.png",
          Rating: 0,
          Pages: 460
        },
        {
          Title: "Harry Potter and the Prisoner of Azkaban",
          Author: "J K Rowling",
          PublicationYear: 2001,
          Cost: 14,
          Description: "Harry Potter Books.",
          Summary: "For twelve long years, the dread fortress of Azkaban held an infamous prisoner named Sirius Black. Convicted of killing thirteen people with a single curse, he was said to be the heir apparent to the Dark Lord, Voldemort. Now he has escaped, leaving only two clues as to where he might be headed: Harry Potter's defeat of You-Know-Who was Black's downfall as well. And the Azkaban guards heard Black muttering in his sleep, 'He's at Hogwarts . . . he's at Hogwarts'. Harry Potter isn't safe, not even within the walls of his magical school, surrounded by his friends. Because on top of it all, there may well be a traitor in their midst.",
          Language: "English",
          Img: "Azkaban.png",
          Rating: 0,
          Pages: 435
        },
        {
          Title: "Harry Potter and the Chamber of Secrets: 02",
          Author: "J K Rowling",
          PublicationYear: 2000,
          Cost: 14,
          Description: "Harry Potter Books.",
          Summary: "The Dursleys were so mean and hideous that summer that all Harry Potter wanted was to get back to the Hogwarts School for Witchcraft and Wizardry. But just as he's packing his bags, Harry receives a warning from a strange, impish creature named Dobby who says that if Harry Potter returns to Hogwarts, disaster will strike. And strike it does. For in Harry's second year at Hogwarts, fresh torments and horrors arise, including an outrageously stuck-up new professor, Gilderoy Lockhart, a spirit named Moaning Myrtle who haunts the girls' bathroom, and the unwanted attentions of Ron Weasley's younger sister, Ginny. But each of these seem minor annoyances when the real trouble begins, and someone - or something - starts turning Hogwarts students to stone. Could it be Draco Malfoy, a more poisonous rival than ever? Could it possibly be Hagrid, whose mysterious past is finally told? Or could it be the one everyone at Hogwarts most suspects... Harry Potter himself!",
          Language: "English",
          Img: "SecretChamber.png",
          Rating: 0,
          Pages: 341
        },
        {
          Title: "Harry Potter and the Sorcerer's Stone, Volume 1",
          Author: "J K Rowling",
          PublicationYear: 2018,
          Cost: 14,
          Description: "Harry Potter Books.",
          Summary: "About the Author J.K. Rowling is the author of the record-breaking, multi-award-winning Harry Potter novels. Loved by fans around the world, the series has sold over 450 million copies, been translated into 80 languages, and made into eight blockbuster films. She has written three companion volumes in aid of charity: Quidditch Through the Ages and Fantastic Beasts and Where to Find Them (in aid of Comic Relief and Lumos), and The Tales of Beedle the Bard (in aid of Lumos), as well as a screenplay inspired by Fantastic Beasts and Where to Find Them, which marked the start of a five-film series to be written by the author. She has also collaborated on a stage play, Harry Potter and the Cursed Child Parts One and Two, which opened in London’s West End in the summer of 2016. In 2012 J.K. Rowling’s digital company Pottermore was launched, where fans can enjoy news, features, and articles, as well as original content from J.K. Rowling. J.K. Rowling is also the author of The Casual Vacancy, a novel for adult readers, and the Strike crime series, written under the pseudonym Robert Galbraith. She has received many awards and honors, including an OBE and Companion of Honour, France’s Légion d’honneur, and the Hans Christian Andersen Award.Brian Selznick’s books have garnered countless accolades worldwide, and have been translated into more than 35 languages. He is the Caldecott Medal-winning creator of the #1 New York Times bestsellers The Invention of Hugo Cabret, adapted into Martin Scorsese’s Oscar-winning movie Hugo; and Wonderstruck, adapted by celebrated filmmaker Todd Haynes, with a screenplay by Selznick; as well as The Marvels and Baby Monkey, Private Eye (co-written with Dr. David Serlin). Selznick divides his time between Brooklyn, New York, and San Diego, California. Mary GrandPré has illustrated more than twenty beautiful books, including The Noisy Paint Box by Barb Rosenstock, which received a Caldecott Honor; Cleonardo, the Little Inventor, of which she is also the author; and the original American editions of all seven Harry Potter novels. Her work has also appeared in the New Yorker, the Atlantic Monthly, and the Wall Street Journal, and her paintings and pastels have been shown in galleries across the United States. Ms. GrandPré lives in Sarasota, Florida, with her family.",
          Language: "English",
          Img: "Stone.png",
          Rating: 0,
          Pages: 336
        },
        {
          Title: "Harry Potter and the Goblet of Fire",
          Author: "J K Rowling",
          PublicationYear: 2002,
          Cost: 16,
          Description: "Harry Potter Books.",
          Summary: "The paperback edition of the legendary, record-breaking, best-selling fourth Harry Potter novel. Harry Potter is midway through his training as a wizard and his coming of age. Harry wants to get away from the pernicious Dursleys and go to the International Quidditch Cup. He wants to find out about the mysterious event that's supposed to take place at Hogwarts this year, an event involving two other rival schools of magic, and a competition that hasn't happened for a hundred years. He wants to be a normal, fourteen-year-old wizard. But unfortunately for Harry Potter, he's not normal - even by wizarding standards. And in his case, different can be deadly.",
          Language: "English",
          Img: "GobletOfFire.png",
          Rating: 0,
          Pages: 752
        },
        {
          Title: "Harry Potter and the Order of the Phoenix",
          Author: "J K Rowling",
          PublicationYear: 2004,
          Cost: 17,
          Description: "Harry Potter Books.",
          Summary: "The most eagerly anticipated book in history becomes the biggest paperback release of 2004! The book that took the world by storm.... In his fifth year at Hogwart's, Harry faces challenges at every turn, from the dark threat of He-Who-Must-Not-Be- Named and the unreliability of the government of the magical world to the rise of Ron Weasley as the keeper of the Gryffindor Quidditch Team. Along the way he learns about the strength of his friends, the fierceness of his enemies, and the meaning of sacrifice.",
          Language: "English",
          Img: "OrderOfThePhoenix.png",
          Rating: 0,
          Pages: 870
        },
        {
          Title: "Harry Potter and the Half-Blood Prince",
          Author: "J K Rowling",
          PublicationYear: 2006,
          Cost: 18,
          Description: "Harry Potter Books.",
          Summary: "As the Harry Potter series draws to a close, Harry's greatest adventure yet is just beginning . . . and it arrives in paperback July 25, 2006. The war against Voldemort is not going well; even the Muggles have been affected. Dumbledore is absent from Hogwarts for long stretches of time, and the Order of the Phoenix has already suffered losses. And yet . . . As with all wars, life goes on. Sixth-year students learn to Apparate. Teenagers flirt and fight and fall in love. Harry receives some extraordinary help in Potions from the mysterious Half-Blood Prince. And with Dumbledore's guidance, he seeks out the full, complex story of the boy who became Lord Voldemort -- and thus finds what may be his only vulnerability.",
          Language: "English",
          Img: "BloodPrince.png",
          Rating: 0,
          Pages: 652
        },
        {
          Title: "Harry Potter and the Deathly Hallows",
          Author: "J K Rowling",
          PublicationYear: 2009,
          Cost: 18,
          Description: "Harry Potter Books.",
          Summary: "Rowling's stunning conclusion to her bestselling Harry Potter series is now available in paperback. As a farewell to the series, Deathly Hallows is everything fans of Harry Potter could hope for.--Time.",
          Language: "English",
          Img: "DeathlyHallows.png",
          Rating: 0,
          Pages: 759
        },
      ],
      {}
    );
  },
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Books');
  }
};
