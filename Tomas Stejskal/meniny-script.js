﻿/**********************
*AUTHOR: Tomas Stejskal
*/

charset = "utf-8";

var objectNames = {
    "0": {
        "1": "Nový rok",
        "2": "Alexandra, Karina, Ábel, Makar, Karin, Kara, Kasandra, Sanda, Sandra, Saša, Senda",
        "3": "Daniela, Danila, Danuta, Genovéva, Radmila",
        "4": "Drahoslav, Draho¾ub, Drahomil, Drahoò, Drahoš, Duchoslav, León, Títus, Draho¾uba, Drahomila, Duchoslava, Leóna, Leónia",
        "5": "Andrea, Artúr",
        "6": "Antónia, Melchior, Melichar, Menhard",
        "7": "Bohuslava, Atila, Lucián, Bohuna, Boleslava, Božislava, Luciána",
        "8": "Severín, Èestmír, Pravomil, Èestmíra, Pravomila, Severína",
        "9": "Alexej, Alex, Domo¾ub, Julián, Pravo¾ub, Vladan, Vladen, Alexia, Pravo¾uba, Vladana, Vladena",
        "10": "Dáša, Agatón, Dalimil, Dalimír, Dalimila, Dalimíra",
        "11": "Malvína, Honorát, Tasilo, Honoráta",
        "12": "Ernest, Arkád, Arnošt, Arkádia, Arnoštka, Erna, Ernestína",
        "13": "Rastislav, Èistomil, Èistoslav, Rastic, Rastimír, Ratislav, Vidor, Èistomila, Èistoslava, Rastislava, Ratislava",
        "14": "Radovan, Hilár, Uriáš, Uriel, Hilária, Radovana",
        "15": "Dobroslav, Dobrotín, Domoslav, Loránt, Múdroslav, Domoslava",
        "16": "Kristína",
        "17": "Nataša, Antal",
        "18": "Bohdana, Priskus, Piroška, Priska",
        "19": "Drahomíra, Mário, Sára, Márius, Dúbravka",
        "20": "Dalibor, Fabián, Fábius, Sebastián, Šebastián, Fábia, Fabiána, Fabiola, Sebastiána",
        "21": "Vincent, Vincencia",
        "22": "Zora, Dorián, Sírius, Slavo¾ub, Slavomil, Zoran, Auróra, Cyntia, Doriána, Sinda, Slavomila, Zorana",
        "23": "Miloš, Miloò, Selma",
        "24": "Timotej, Ctiboh, Timotea",
        "25": "Gejza, Saul, Šavol",
        "26": "Tamara, Polykarp, Slavibor, Slavislav, Slaviboj, Slavoboj, Svätoboj, Svätobor, Xenofón, Žarko, Polykarpa",
        "27": "Bohuš, Pribislav, Pribiš",
        "28": "Alfonz, Manfréd, Alfonzia",
        "29": "Gašpar, Pribina",
        "30": "Ema, Jasna",
        "31": "Emil, Emilián, Emiliána"
    },
    "1": {
        "1": "Tatiana, Hynek, Trifon, Táòa",
        "2": "Erik, Erika, Aida",
        "3": "Blažej, Celerín, Celerína",
        "4": "Veronika, Nika, Verena, Verona",
        "5": "Agáta, Moderát, Modest, Leda, Moderáta, Modesta",
        "6": "Dorota, Dorisa, Titanila",
        "7": "Vanda, Romuald",
        "8": "Zoja, Aranka",
        "9": "Zdenko, Rainold, Rinaldo, Zdeno, Apolena, Apoliena, Apolónia",
        "10": "Gabriela, Scholastika, Školastika",
        "11": "Dezider, Želislav, Dezidera, Želislava",
        "12": "Perla, Ron, Ronald, Zoro, Zoroslav, Eulália, Slavena, Solveiga, Zoroslava",
        "13": "Arpád, Jordán, Jordána",
        "14": "Valentín, Velimír",
        "15": "Pravoslav, Faust, Faustína, Georgia, Georgína, Pravoslava",
        "16": "Ida, Liana, Pamfil, Pamfília",
        "17": "Miloslava, Flavián, Flávius, Silván, Silvín, Flávia, Milomíra, Miluša, Silvána",
        "18": "Jaromír, Simeon, Jaromíra, Konkordia, Bernadetta",
        "19": "Vlasta, Konrád, Kurt",
        "20": "Lívia, Aladár, Lívio, Lívius, Udo, Ulrich, Alma, Ulrika, Ulriška",
        "21": "Eleonóra",
        "22": "Etela",
        "23": "Roman, Romana, Romina",
        "24": "Matej, Jazmína, Goran, Mateja",
        "25": "Frederik, Frederika, Taras, Federika",
        "26": "Viktor, Porfýr, Edina",
        "27": "Alexander, Leander, Sandro, Skender, Drahotína, Dražica, Leandra",
        "28": "Zlatica, Elemír, Elo, Lumír, Zlata",
        "29": "Radomír"
    },
    "2": {
        "1": "Albín",
        "2": "Anežka",
        "3": "Bohumil, Bohumila, Ticián, Ginda, Kunigunda, Ticiána",
        "4": "Kazimír, Gerazim, Romeo, Jadrana, Kazimíra",
        "5": "Fridrich, Lucius, Teofil, Friderika, Teofila",
        "6": "Radoslav, Radoslava, Fridolín, Koriolán, Radislav, Radovan, Felícia, Fridolína, Radislava",
        "7": "Tomáš, Tomislav, Tomáška, Tomislava",
        "8": "Alan, Alana",
        "9": "Františka, Erhard",
        "10": "Branislav, Bruno, Bratislav, Bronislav, Bratislava, Taras",
        "11": "Angela, Angelika, Angel, Volfram, Algelína, Jurina",
        "12": "Gregor, Teofan, Gregora, Gregoria, Gregorína",
        "13": "Vlastimil, Kira, Rozína",
        "14": "Matilda, Metaneta",
        "15": "Svetlana,Agap, Belomír, Rodan, Roderich, Roderik, Torkvát, Agapa, Agapia, Rodana, Roderika",
        "16": "Boleslav, Amos, Bolemír, Heribert, Bolemíra",
        "17": "¼ubica, ¼uban, ¼uben, Zbignev, Zbyšek, ¼uba",
        "18": "Eduard, Ctislav, Salvátor, Ctislava, Eduarda",
        "19": "Jozef, Sibyla",
        "20": "Víazoslav, Klaudián, Klaudín, Klaudio, Klaudius, Víazoslava",
        "21": "Blahoslav, Blahoboj, Blahosej, Radek, Radko",
        "22": "Beòadik, Benedikt, Oktavián, Oktávius, Benedikta, Benilda, Benita, Izolda, Oktávia",
        "23": "Adrián, Apián, Dárius, Viktorián, Apia",
        "24": "Gabriel",
        "25": "Marián, Humbert, Anunciáta, Irida, Irisa",
        "26": "Emanuel, Eman, Manuel, Emanuela, Manuela",
        "27": "Alena, Rupert, Ruprecht, Dita",
        "28": "Soòa, Ilarion",
        "29": "Miroslav, Mieroslav, Bertold, Bertolda, Mieroslava",
        "30": "Vieroslava, Viero¾ub, Vieromil, Vieroslav",
        "31": "Benjamín, Kvído, Balbína"
    },
    "3": {
        "1": "Hugo, Hugolín",
        "2": "Zita, Áron",
        "3": "Richard, Richarda",
        "4": "Izidor, Izidora",
        "5": "Miroslava, Mira",
        "6": "Irena, Irína, Celestín, Ruben, Sixtus, Celestína, Venuša",
        "7": "Zoltán, Armand, Herman, Rufínus, Rúfus, Armanda, Rufína, Rumjana",
        "8": "Albert, Albertín, Albrecht, Valter, Alberta, Albertína, Albrechta",
        "9": "Milena, Erhard, Mileva",
        "10": "Igor, Ezechiel, Ivar, Ivor, Radomil, Igora, Radomila",
        "11": "Július, Antip, Ariel, Ariela, Arleta, Leo, Lev",
        "12": "Estera, Aster, Davorín, Zenon, Astéria",
        "13": "Aleš, Artem, Artemon, Artemia, Artemida, Norma",
        "14": "Justína, Hrdoslav, Hrdoš, Justín, Davorína, Hrdoslava, Justa",
        "15": "Fedor, Fedora",
        "16": "Dana, Danica",
        "17": "Rudolf, Ralf, Rolf, Rudolfa, Rudolfína",
        "18": "Valér, Apolón, Erich, Verner, Ilma",
        "19": "Jela, Krescenc, Krescencia",
        "20": "Marcel, Hvezdoò",
        "21": "Ervín, Abelard, Adelard, Anzelm, Žitoslav, Anzelma, Ervína, Saskia, Žitoslava",
        "22": "Slavomír, Slávo, Tvrdomír, Jelena, Noema",
        "23": "Vojtech, Adalbert, Roger, Adalberta, Vojtecha, Vojteška",
        "24": "Juraj, Fidél, Gaston, Georg, Helmut, Jorik, Jürgen, Deora, Fidélia, Jorga, Jorika, Juraja",
        "25": "Marek, Izmael, Marko, Markus",
        "26": "Jaroslava",
        "27": "Jaroslav, Aristid, Tulius, Aristída, Tulia",
        "28": "Jarmila, Prudencius, Prudencia",
        "29": "Lea, Timon",
        "30": "Anastázia, Anastáz, Blahomil, Asia, Blahomila, Nasa, Nastasia"
    },
    "4": {
        "1": "Amarila, Pamela, Kevin",
        "2": "Žigmund, Atanáz, Atanázia, Aténa",
        "3": "Galina, Horác, Desana, Halina, Timea",
        "4": "Florián, Flór, Aglája, Floriána, Florína, Pelagia",
        "5": "Lesana, Gothard, Pius, Lesia, Pia, Toska",
        "6": "Hermína, Ovídius, Radivoj, Tankréd, Elfrída, Frída, Herina, Mineta",
        "7": "Monika, Napoleon, Stanimír, Mona",
        "8": "Ingrida, Ina, Inga",
        "9": "Roland, Rolanda",
        "10": "Viktória, Armín, Armína, Beatrica",
        "11": "Blažena, Miranda, Svatava",
        "12": "Pankrác, Achiles",
        "13": "Servác, Chraniboj, Chranibor, Chranislav, Servián, Chranislava, Imelda, Konzuela",
        "14": "Bonifác",
        "15": "Žofia, Brenda, Raisa, Sofia, Zosia",
        "16": "Svetozár, Peregrín, Peregrína",
        "17": "Gizela, Andronik, Ditmar, Paskal, Andronika, Paskália",
        "18": "Viola",
        "19": "Gertrúda, Gerda",
        "20": "Bernard, Bernardín, Hviezdoslav, Bernadeta, Bernarda, Bernardína, Hviezdoslava",
        "21": "Zina, Dobromír, Hostimil, Hostirad, Hostislav, Hostisvit, Teobald, Dobromíra, Hostimila, Hostislava",
        "22": "Júlia, Juliána, Liana, Rita",
        "23": "Želmíra, Želmír, Želimír",
        "24": "Ela",
        "25": "Urban, Vselovod, Vševlad, Vanesa",
        "26": "Dušan",
        "27": "Iveta, Vadim, Valdemar, Valdemara",
        "28": "Viliam, Vilhelm, Elektra, Elma, Vilhelmína",
        "29": "Vilma, Elmar, Maxim, Maxima",
        "30": "Ferdinand, Neander, Ferdinanda",
        "31": "Petrana, Petronela, Petrónius, Blahoslav, Nela, Petrónia, Nelly"
    },
    "5": {
        "1": "Žaneta",
        "2": "Oxana, Xénia, Erazim, Erazmus, Jaromil, Vlastimila",
        "3": "Karolína, Kevin, Lino, Linus, Palmíro, Kaja, Klotilda, Lina, Lineta, Palmíra",
        "4": "Lenka, Lena",
        "5": "Laura, Dorotej, Fatima, Laurencia, Loreta, Loriána",
        "6": "Norbert, Norman, Romulus, Adolfína, Norberta, Perzida",
        "7": "Róbert, Borislav, Robin, Teodot, Dalma, Oriána, Róberta, Robina",
        "8": "Medard",
        "9": "Stanislava, Felicián, Prímus, Vojeslav, Berenika, Vojeslava",
        "10": "Margaréta, Gréta",
        "11": "Dobroslava, Barnabáš, Dobrava, Dobrota, Dobrotína, Flóra, Pavoslava",
        "12": "Zlatko, Svätoslav, Svetislav, Svetoslav, Zlatan, Zlatomír, Zlatoò, Zlatoš, Svätoslava, Svetislava, Svetoslava, Zlatana, Zlatomíra",
        "13": "Anton, Genadij, Tobiáš",
        "14": "Vasil, Bazil, Elizej, Kvintilián, Kvintín, Kvintus, Herta, Kvinta, Kvintiliána",
        "15": "Vít, Jolana",
        "16": "Bianka, Blanka, Benon, Božetech, Alina, Božetecha",
        "17": "Adolf, Adolfína",
        "18": "Vratislav, Leontín, Milovan, Milovín, Sedrik, Leontína, Milovana",
        "19": "Alfréd, Leonid, Leonídas, Leoš, Ruslan, Alfréda",
        "20": "Valéria, Florencián, Florentín, Silver, Florencia, Florentína",
        "21": "Alojz, Elvis, Lejla",
        "22": "Paulína, Achác, Eberhard, Paulín, Paula, Rozvita, Zaira",
        "23": "Sidónia, Sidón",
        "24": "Ján, Janis, Jaško, Jens, Johan, Jovan, Nino, Sean",
        "25": "Tadeáš, Olívia, Olívius, Prosper, Febrónia, Oliva",
        "26": "Adriána, Stojan, Adriena, Ria, Riana, Stojana",
        "27": "Ladislav, Ladislava, Samson, Sulamita",
        "28": "Beáta, Beátus, Slavoj, Bea",
        "29": "Peter, Pavol, Petra, Pavel, Pavla, Petula",
        "30": "Melánia, Vlastibor, Vlastimír, Šárka, Vlastimíra"
    },
    "6": {
        "1": "Diana, Dean, Dejan, Dina, Zian, Dajana, Deana, Kalina, Tabita, Tajana, Annamária",
        "2": "Berta, Bertín, Bertína",
        "3": "Miloslav, Irenej, Miliduch, Milomír, Milorad, Radimír, Rodimír, Radimíra",
        "4": "Prokop, Procius, Prokopa",
        "5": "Cyril, Metod, Cyrus, Cyrila",
        "6": "Patrik, Patrícia, Patrokles",
        "7": "Oliver, Donald, Kastor, Veleslav, Velislav, Valibals, Veleslava, Velislava",
        "8": "Ivan, Ivo, Kilián, Perikles",
        "9": "Lujza, Lukrécius, Lizelota, Lukrécia",
        "10": "Amália, Amína, Lada",
        "11": "Milota, Milutín",
        "12": "Nina, Fortunát, Fortunáta",
        "13": "Margita, Arne, Borivoj, Merkéta",
        "14": "Kamil",
        "15": "Henrich, Egon, Enrik, Enriko, Henrik, Henrika, Lota, Šarlota",
        "16": "Drahomír, Karmela, Karmen, Karmena, Rút, Rúta",
        "17": "Bohuslav, Božislav, Svorad",
        "18": "Kamila",
        "19": "Dušana",
        "20": "Eliáš, I¾ja, Ilia, Eliána, Iliana",
        "21": "Daniel, Dan, Dalina",
        "22": "Magdaléna, Magda, Mahuliena, Majda",
        "23": "O¾ga, Apolinár, Libérius, Libor, Liborius, Apolinára, Libora, Lilien",
        "24": "Vladimír, Kinga",
        "25": "Jakub, Žakelína",
        "26": "Anna, Hana, Aneta, Anica, Anita, Annamária, Naneta",
        "27": "Božena, Gorazd, Pantaleon",
        "28": "Krištof, Inocent, Svätomír, Svätoš, Inocencia, Nausika, Svätomíra",
        "29": "Marta, Olaf, Serafín, Serafa, Serafína",
        "30": "Libuša, Abdon, Ingemar, Ingeborga, ¼ubuša, Rowena",
        "31": "Ignác, Ignát, Vatroslav, Ignácia"
    },
    "7": {
        "1": "Božidara, Božidar, ¼udomír, Božica, Kleopatra, ¼udomíra, Penelopa",
        "2": "Gustáv, Gustáva",
        "3": "Jerguš, Nikodém, Nikodéma",
        "4": "Dominik, Dominika, Krasoslav, Rainer, Krasoslava",
        "5": "Hortenzia, Hortenz, Milivoj, Osvald, Snežana",
        "6": "Jozefína, Nehoslav, Jozefa",
        "7": "Štefánia, Kajetán, Afra, Afrodita, Kajetána, Štefana",
        "8": "Oskár, Donát, Hartvig, Virgín, Donáta, Virgínia",
        "9": "¼ubomíra, Rastic",
        "10": "Vavrinec, Lars, Laurenc, Laurus, Lorenc, Vavro",
        "11": "Zuzana, Trojan, Dulcia, Dulcinela, Dulcínia",
        "12": "Darina, Dárius, Dária",
        "13": "¼ubomír, Hypolit, Kasián, Kasius, Belinda",
        "14": "Mojmír, Eusébius, Mojtech, Eusébia",
        "15": "Marcela",
        "16": "Leonard, Jáchim, Joachim, Linhart, Rochus, Leonarda",
        "17": "Milica, Bertram, Bertrand, Hyacint, Libert, Mirón, Hyacinta",
        "18": "Elena, Helena, Ilona",
        "19": "Lýdia, Vratislava",
        "20": "Anabela, Arabela",
        "21": "Jana, Johana, Jovana",
        "22": "Tichomír, Sigfríd, Tichomil, Tichomíra",
        "23": "Filip, Vlastislav, Filipa, Filipína, Vlastislava",
        "24": "Bartolomej, Bartolomea",
        "25": "¼udovít, Ludvig, Radim, ¼udovíta",
        "26": "Samuel, Samo, Zemfír, Samuela, Tália, Zemfíra",
        "27": "Silvia, Silvio, Silvius",
        "28": "Augustín, August, Augusta, Augustína, Gustína",
        "29": "Nikola, Nikolaj, Koleta, Nikoleta",
        "30": "Ružena, Ružica",
        "31": "Nora, Rajmund, Ramón, Rajmunda, Ramona"
    },
    "8": {
        "1": "Drahoslava, Egid, Egídius",
        "2": "Linda, Absolón, Axel, Justus, Ermelinda, Melinda, Rebeka",
        "3": "Belo, Antim, Klélia",
        "4": "Rozália, Kandid, Mojžiš, Rozalín, Rozálio, Kandida, Róza, Rozeta, Rozita, Rusalka",
        "5": "Regína, Bojan, Bojimír, Bojislav, Borimír, Branimír, Chotimír, Justinián, Otakar, Regan, Regulus, Viktorín, Bojana, Bojimíra, Boislava, Branimíra, Budislava, Chotimíra, Larisa",
        "6": "Alica, Brian, Magnus, Mansvét, Zachariáš, Bria",
        "7": "Marianna, Mariana",
        "8": "Miriama, Miriana",
        "9": "Martina, Gordan, Gordián, Gordon, Omar, Gordana, Rea, Tina",
        "10": "Oleg, Honór, Vitold, Honóra, Krasava, Vitolda",
        "11": "Bystrík, Prótus, Zdislav, Helga, Zdislava",
        "12": "Mária, Maja, Manon, Manona, Marica, Mariela, Marieta, Marika, Marila, Mariola, Marlena, Marusia",
        "13": "Ctibor, Amát, Amátus, Stibor, Sven, Amáta, Tobias",
        "14": "¼udomil, Dragan, Dragutín, Drahan, Drahotín, ¼udomila, Radka, Serena",
        "15": "Jolana, Melisa, Melita",
        "16": "¼udmila, Duòa",
        "17": "Olympia, Lambert, Záviš",
        "18": "Eugénia, Ariadna",
        "19": "Konštantín, Trofín, Konstancia, Konštantína",
        "20": "¼uboslav, ¼uboslava, Eustach, Filibert, Liboslav, Eustachia, Liboslava",
        "21": "Matúš, Ifigénia, Mirela",
        "22": "Móric, Maurícius, Maurus",
        "23": "Zdenka, Polyxénia, Tekla, Zdena",
        "24": "¼ubor, ¼uboš, Terenc",
        "25": "Vladislav, Vladivoj, Eufrozina, Fruzína, Vladislava",
        "26": "Edita",
        "27": "Cyprián, Damián, Kozmas, Damiána, Mirabela",
        "28": "Václav, Chariton, Kariton, Václava",
        "29": "Michal, Michaela, Michael, Michala",
        "30": "Jarolím, Hieronym, Jeremiáš, Jarolíma, Ráchel, Ráchela, Una"
    },
    "9": {
        "1": "Arnold, Remig, Remus, Arnolda, Belina",
        "2": "Levoslav, Leodegar, Levoslava",
        "3": "Stela, Amadeus, Evald, Amadea",
        "4": "František, Edvin, Fraòo",
        "5": "Viera, Blahomír, Placid, Blahomíra, Karitína, Placida",
        "6": "Natália",
        "7": "Eliška",
        "8": "Brigita, Brit, Brita",
        "9": "Dionýz, Dionýzia",
        "10": "Slavomíra, Gedeon, Záboj, Krasomila",
        "11": "Valentína, Belín, Zvonimír, Zvonislav, Bruna, Brunhilda, Luneta, Selena, Zvonimíra, Zvonislava",
        "12": "Maximilián, Max, Maximiliána",
        "13": "Koloman, Edgar",
        "14": "Boris, Borislav, Kalist, Borislava, Kalista",
        "15": "Terézia, Tereza",
        "16": "Vladimíra, Gál, Havel, Havla",
        "17": "Hedviga, Jadviga",
        "18": "Lukáš",
        "19": "Kristián, Christián, Izák, Christiána, Kristiána",
        "20": "Vendelín, Eunika, Vendelína",
        "21": "Uršu¾a, Anatol, Anatólia, Antília",
        "22": "Sergej, Dobromil, Sergius, Zdravomil, Kordula, Kordu¾a, Pribislava, Saloma, Saloména, Solomia",
        "23": "Alojzia, Žitomír",
        "24": "Kvetoslava, Aretas, Cvetan, Gilbert, Harold, Herald, Krasomil, Kvetoò, Kvetoslav, Rafael, Šalamún, Areta, Cvetana, Gilberta, Kveta, Kvetana, Kvetava, Rafaela",
        "25": "Aurel, Krišpín, Vojmír, Zosim, Živan, Živko, Dália, Vojmíra, Živa, Živana",
        "26": "Demeter, Amand, Dimitrij, Evarist, Amanda, Demetria",
        "27": "Sabína, Horislav, Hromislav, Horislava, Hromislava, Sabrina, Zoa, Zoana",
        "28": "Dobromila, Júda, Judáš",
        "29": "Klára, Narcis, Zenob, Klarisa, Narcisa, Zenóbia, Kiara",
        "30": "Šimon, Simona, Arzen, Asen, Simon, Asena, Simoneta, Šimona",
        "31": "Aurélia, Stacho, Volfgang"
    },
    "10": {
        "1": "Denis, Denisa",
        "2": "Cézar, Cezária",
        "3": "Hubert",
        "4": "Karol, Džesika, Jesika, Karola, Skarleta",
        "5": "Imrich, Emerich, Imriška",
        "6": "Renáta, Renát, Renáto, Renátus",
        "7": "René, Engelbert",
        "8": "Bohumír, Bohumíra",
        "9": "Teodor, Orest, Teo, Teodorik, Teodoz, Deodata, Tea, Teodora, Teodózia",
        "10": "Tibor, Tiber, Meluzína, Tibora",
        "11": "Maroš, Martin, Martinián",
        "12": "Svätopluk, Astrid, Jonáš, Astrida",
        "13": "Stanislav",
        "14": "Irma, Juventín, Mladen, Mladoò, Mladotín, Ima, Juventína, Mladena, Mladotína",
        "15": "Leopold, Leopolda, Leopoldína",
        "16": "Agnesa, Otmar, Agneša, Inéza",
        "17": "Klaudia, Klodeta",
        "18": "Eugen, Platón",
        "19": "Alžbeta, Betina, Elizabeta, Lila, Liliana, Líza, Lili, Lilly",
        "20": "Félix, Filemon, Homér",
        "21": "Elvíra, Ctirad, Ctirada",
        "22": "Cecília, Cecilián, Šejla",
        "23": "Klement, Klementín, Kliment, Kolumbín, Klementína, Kolumbína",
        "24": "Emília, Milín, Milina",
        "25": "Katarína, Katrina",
        "26": "Kornel, Valerián",
        "27": "Milan, Nestor, Virgil, Milana",
        "28": "Henrieta, Gerhard, Tristan, Desdemona, Eta",
        "29": "Vratko, Saturnín, Zaida",
        "30": "Andrej, Ondrej, Andreas"
    },
    "11": {
        "1": "Edmund, Edmunda",
        "2": "Bibiána, Budimír, Budislav, Budimíra, Viviána",
        "3": "Oldrich, Sofron, Xavér, Sofrónia, Xavéria",
        "4": "Barbora, Babeta, Barbara, Barica",
        "5": "Oto, Gerald, Otakar, Otokar, Geralda, Geraldína, Jitka, Ota, Sáva",
        "6": "Mikuláš, Nikita, Niko, Nikolas, Mikuláška, Nikoleta",
        "7": "Ambróz, Amarant, Amaranta, Ambrózia",
        "8": "Marína",
        "9": "Izabela, Dalila, Leokádia",
        "10": "Radúz, Herbert",
        "11": "Hilda, Hildegard, Hildegarda",
        "12": "Otília, Spiridon, Dília, Odeta",
        "13": "Lucia, Rosan, Rosana, Roxana",
        "14": "Branislava, Bronislava, Broòa",
        "15": "Ivica, Detrich, Radan, Radana",
        "16": "Albína, Bela, Teofánia",
        "17": "Kornélia, Lazár, Kora, Korina",
        "18": "Sláva, Slávka, Gracián, Grácia, Graciána, Slavislava",
        "19": "Judita, Abrahám, Mstislav, Neméz, Ita, Mstislava, Neméza",
        "20": "Dagmara, Dagmar, Dag, Dagobert, Daga, Damara",
        "21": "Bohdan",
        "22": "Adela, Ada, Adelaida, Adelgunda, Adelína, Adina, Alida",
        "23": "Nadežda, Naïa",
        "24": "Adam, Eva, Evamária, Evelína, Gaja, Gajana, Geja",
        "25": "1. sviatok vianoèný",
        "26": "Štefan",
        "27": "Filoména, Filomén",
        "28": "Ivana, Ivona, Iva",
        "29": "Milada, Jonatán, Miladín, Nátan, Natanel",
        "30": "Dávid, Lotar",
        "31": "Silvester, Horst"
    }
};


function init() {
    var monthChooser = document.getElementById("s_month");
    for (var i = 0; i < 12; i++) {
        var option = document.createElement("option");
        option.text = "" + (i + 1);
        option.value = "" + (i + 1);
        monthChooser.add(option);
    }

    var dayChooser = document.getElementById("s_day");
    for (var i = 0; i < 31; i++) {
        var option = document.createElement("option");
        option.text = "" + (i + 1);
        option.value = "" + (i + 1);
        dayChooser.add(option);

    }
}

function clearDayList() {
    var dayChooser = document.getElementById("s_day");
    for (var i = 0; i < dayChooser.options.length; i++) {
        dayChooser.remove(i);
    }
}

function loadMonthPicker() {
    var e = document.getElementById("s_month");
    var selected_month = e.options[e.selectedIndex].value;
    clearDayList();
    clearDayList();
    clearDayList();
    clearDayList();
    clearDayList();

    var dayChooser = document.getElementById("s_day");
    if (selected_month == 2) {
        for (var i = 0; i < 29; i++) {
            var option = document.createElement("option");
            option.text = "" + (i + 1);
            option.value = "" + (i + 1);
            dayChooser.add(option);
        }
    }

    if (selected_month == 1 || selected_month == 3 || selected_month == 5 || selected_month == 7 || selected_month == 8 || selected_month == 10 || selected_month == 12) {
        for (var i = 0; i < 31; i++) {
            var option = document.createElement("option");
            option.text = "" + (i + 1);
            option.value = "" + (i + 1);
            dayChooser.add(option);
        }
    }
    if (selected_month == 4 || selected_month == 6 || selected_month == 9 || selected_month == 11) {
        for (var i = 0; i < 30; i++) {
            var option = document.createElement("option");
            option.text = "" + (i + 1);
            option.value = "" + (i + 1);
            dayChooser.add(option);
        }
    }
}



function showList() {
    var e = document.getElementById("s_month");
    var selected_month = e.options[e.selectedIndex].value;

    var ex = document.getElementById("s_day");
    var selected_day = ex.options[ex.selectedIndex].value;
    //alert(selected_day + " " + selected_month);

    //clearOutPuut();
    var outPut = document.getElementById("vystup");
    outPut.innerHTML = objectNames[selected_month - 1][selected_day];
}