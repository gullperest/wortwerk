// Wortwerk vocabulary. One entry per line, fields separated by |.
// The last field is the level: A = A1-A2 basics, B = B1.
// Nouns:      article|noun|plural|english|example|translation|level
// Verbs:      infinitive|present · Präteritum · Perfekt|english|example|translation|level
// Adjectives: adjective|opposite|english|example|translation|level
// Others:     word|usage note|english|example|translation|level
const DATA = [
["Arbeit & Beruf","Work",`der|Arbeitgeber|die Arbeitgeber|employer|Mein Arbeitgeber bezahlt die Fahrkarte.|My employer pays for the ticket.|B
der|Arbeitnehmer|die Arbeitnehmer|employee|Jeder Arbeitnehmer hat Anspruch auf Urlaub.|Every employee is entitled to holiday.|B
die|Bewerbung|die Bewerbungen|job application|Ich habe gestern meine Bewerbung abgeschickt.|I sent off my application yesterday.|B
der|Lebenslauf|die Lebensläufe|CV, résumé|Bitte schicken Sie uns Ihren Lebenslauf.|Please send us your CV.|B
das|Vorstellungsgespräch|die Vorstellungsgespräche|job interview|Morgen habe ich ein Vorstellungsgespräch.|I have a job interview tomorrow.|B
das|Gehalt|die Gehälter|salary|Das Gehalt wird am Monatsende überwiesen.|The salary is transferred at the end of the month.|B
die|Stelle|die Stellen|position, job|Die Firma hat eine neue Stelle ausgeschrieben.|The company has advertised a new position.|B
der|Betrieb|die Betriebe|company, business|In unserem Betrieb arbeiten fünfzig Personen.|Fifty people work in our company.|B
die|Abteilung|die Abteilungen|department|Sie leitet die Abteilung für Kundenservice.|She heads the customer service department.|B
der|Vertrag|die Verträge|contract|Ich habe den Vertrag schon unterschrieben.|I have already signed the contract.|B
die|Kündigung|die Kündigungen|notice, dismissal|Er hat gestern seine Kündigung bekommen.|He received his notice yesterday.|B
die|Überstunde|die Überstunden|hour of overtime|Diese Woche musste ich viele Überstunden machen.|I had to work a lot of overtime this week.|B
die|Erfahrung|die Erfahrungen|experience (knowledge gained)|Sie hat viel Erfahrung im Verkauf.|She has a lot of experience in sales.|B
die|Ausbildung|die Ausbildungen|vocational training|Nach der Schule macht er eine Ausbildung als Koch.|After school he is training as a chef.|B
das|Praktikum|die Praktika|internship|Im Sommer mache ich ein Praktikum bei einer Zeitung.|In summer I am doing an internship at a newspaper.|B
der|Kollege|die Kollegen|colleague|Mein Kollege hilft mir bei dem Projekt.|My colleague is helping me with the project.|B
die|Besprechung|die Besprechungen|meeting|Die Besprechung beginnt um zehn Uhr.|The meeting starts at ten o'clock.|B
der|Termin|die Termine|appointment|Können wir den Termin verschieben?|Can we move the appointment?|B
die|Schicht|die Schichten|shift|Nächste Woche habe ich die frühe Schicht.|Next week I am on the early shift.|B
der|Feierabend|die Feierabende|end of the working day|Nach Feierabend gehe ich ins Fitnessstudio.|After work I go to the gym.|B
die|Verantwortung|–|responsibility|Als Chefin trägt sie viel Verantwortung.|As the boss she carries a lot of responsibility.|B
der|Lohn|die Löhne|wage|Der Lohn ist in dieser Branche niedrig.|Wages are low in this industry.|B
die|Gewerkschaft|die Gewerkschaften|trade union|Die Gewerkschaft fordert mehr Geld.|The union is demanding more money.|B
das|Zeugnis|die Zeugnisse|certificate, school report|Bitte legen Sie Ihre Zeugnisse bei.|Please enclose your certificates.|B
der|Rentner|die Rentner|pensioner|Mein Großvater ist seit zwei Jahren Rentner.|My grandfather has been a pensioner for two years.|B
die|Arbeit|die Arbeiten|work|Meine Arbeit macht mir viel Spaß.|I really enjoy my work.|A
der|Beruf|die Berufe|profession|Was sind Sie von Beruf?|What do you do for a living?|A
das|Büro|die Büros|office|Ich arbeite in einem kleinen Büro.|I work in a small office.|A
der|Chef|die Chefs|boss|Mein Chef ist heute nicht im Haus.|My boss is not in today.|A
die|Firma|die Firmen|company|Sie arbeitet seit zehn Jahren bei dieser Firma.|She has worked at this company for ten years.|A
der|Job|die Jobs|job|Er sucht einen neuen Job.|He is looking for a new job.|A
der|Arzt|die Ärzte|doctor|Mein Bruder möchte Arzt werden.|My brother wants to become a doctor.|A
der|Verkäufer|die Verkäufer|shop assistant|Der Verkäufer hat mich gut beraten.|The shop assistant gave me good advice.|A
der|Kellner|die Kellner|waiter|Der Kellner bringt gleich die Speisekarte.|The waiter will bring the menu in a moment.|A
der|Koch|die Köche|cook|Der Koch in diesem Restaurant ist sehr gut.|The cook in this restaurant is very good.|A
der|Bäcker|die Bäcker|baker|Ein Bäcker muss sehr früh aufstehen.|A baker has to get up very early.|A
der|Friseur|die Friseure|hairdresser|Ich habe morgen einen Termin beim Friseur.|I have an appointment at the hairdresser's tomorrow.|A
der|Polizist|die Polizisten|police officer|Der Polizist hat uns den Weg gezeigt.|The police officer showed us the way.|A
der|Fahrer|die Fahrer|driver|Der Fahrer des Busses war sehr freundlich.|The driver of the bus was very friendly.|A
der|Mechaniker|die Mechaniker|mechanic|Der Mechaniker repariert gerade mein Auto.|The mechanic is repairing my car at the moment.|A
der|Ingenieur|die Ingenieure|engineer|Er arbeitet als Ingenieur bei einer Autofirma.|He works as an engineer at a car company.|A
der|Mitarbeiter|die Mitarbeiter|employee, member of staff|Die Firma hat über hundert Mitarbeiter.|The company has over a hundred employees.|A
der|Arbeitsplatz|die Arbeitsplätze|workplace, job|Mein Arbeitsplatz ist direkt am Fenster.|My workplace is right by the window.|A
die|Pause|die Pausen|break|Wir machen um zehn Uhr eine kurze Pause.|We take a short break at ten o'clock.|A
der|Urlaub|die Urlaube|holiday, leave|Ich habe im August drei Wochen Urlaub.|I have three weeks' holiday in August.|A
der|Computer|die Computer|computer|Ich sitze den ganzen Tag am Computer.|I sit at the computer all day.|A
der|Drucker|die Drucker|printer|Der Drucker im Büro funktioniert nicht.|The printer in the office is not working.|A
das|Telefon|die Telefone|telephone|Das Telefon klingelt schon wieder.|The telephone is ringing again.|A
die|E-Mail|die E-Mails|email|Ich schicke Ihnen die Informationen per E-Mail.|I will send you the information by email.|A
der|Brief|die Briefe|letter|Ich muss noch einen Brief an die Firma schreiben.|I still have to write a letter to the company.|A
der|Schreibtisch|die Schreibtische|desk|Auf meinem Schreibtisch liegen viele Papiere.|There are lots of papers on my desk.|A
die|Fabrik|die Fabriken|factory|Mein Vater hat lange in einer Fabrik gearbeitet.|My father worked in a factory for a long time.|A
die|Maschine|die Maschinen|machine|Die neue Maschine arbeitet schneller als die alte.|The new machine works faster than the old one.|A
das|Team|die Teams|team|Wir arbeiten in einem kleinen Team.|We work in a small team.|A
die|Arbeitszeit|die Arbeitszeiten|working hours|Meine Arbeitszeit ist von acht bis siebzehn Uhr.|My working hours are from eight to five.|A
der|Arbeiter|die Arbeiter|worker|Die Arbeiter beginnen morgens um sechs Uhr.|The workers start at six in the morning.|A
der|Traumberuf|die Traumberufe|dream job|Pilot war schon immer mein Traumberuf.|Being a pilot has always been my dream job.|A
der|Kopierer|die Kopierer|photocopier|Der Kopierer steht im Flur.|The photocopier is in the corridor.|A
der|Anruf|die Anrufe|phone call|Ich warte auf einen wichtigen Anruf.|I am waiting for an important phone call.|A
der|Bauer|die Bauern|farmer|Der Bauer arbeitet jeden Tag auf dem Feld.|The farmer works in the field every day.|A
der|Zahnarzt|die Zahnärzte|dentist|Ich muss nächste Woche zum Zahnarzt gehen.|I have to go to the dentist next week.|A
der|Taxifahrer|die Taxifahrer|taxi driver|Der Taxifahrer kannte die Stadt sehr gut.|The taxi driver knew the city very well.|A
der|Pilot|die Piloten|pilot|Der Pilot begrüßte die Passagiere vor dem Flug.|The pilot greeted the passengers before the flight.|A
der|Sänger|die Sänger|singer|Der Sänger gibt morgen ein Konzert in Berlin.|The singer is giving a concert in Berlin tomorrow.|A
der|Musiker|die Musiker|musician|Mein Onkel arbeitet als Musiker in einem Orchester.|My uncle works as a musician in an orchestra.|A
die|Mittagspause|die Mittagspausen|lunch break|In der Mittagspause gehe ich oft spazieren.|I often go for a walk in my lunch break.|A
der|Feiertag|die Feiertage|public holiday|Am Feiertag sind die meisten Geschäfte geschlossen.|Most shops are closed on the public holiday.|A
der|Arbeitstag|die Arbeitstage|working day|Nach einem langen Arbeitstag bin ich sehr müde.|I am very tired after a long working day.|A
der|Briefträger|die Briefträger|postman|Der Briefträger kommt meistens gegen elf Uhr.|The postman usually comes at about eleven o'clock.|A
der|Krankenpfleger|die Krankenpfleger|nurse|Er macht eine Ausbildung zum Krankenpfleger.|He is training to be a nurse.|B
der|Handwerker|die Handwerker|tradesman|Die Handwerker kommen morgen früh um sieben.|The tradesmen are coming at seven tomorrow morning.|B
der|Elektriker|die Elektriker|electrician|Wir müssen einen Elektriker anrufen.|We have to call an electrician.|B
der|Techniker|die Techniker|technician|Der Techniker hat den Fehler schnell gefunden.|The technician found the fault quickly.|B
der|Journalist|die Journalisten|journalist|Der Journalist schreibt für eine große Zeitung.|The journalist writes for a major newspaper.|B
der|Künstler|die Künstler|artist|Als Künstler verdient man oft nicht viel.|As an artist you often do not earn much.|B
der|Sekretär|die Sekretäre|secretary|Der Sekretär hat den Brief schon abgeschickt.|The secretary has already sent the letter.|B
die|Werkstatt|die Werkstätten|workshop, garage|Mein Auto ist seit Montag in der Werkstatt.|My car has been at the garage since Monday.|B
das|Werkzeug|die Werkzeuge|tool|Für diese Arbeit brauche ich das richtige Werkzeug.|I need the right tool for this job.|B
das|Projekt|die Projekte|project|Wir müssen das Projekt bis Freitag beenden.|We have to finish the project by Friday.|B
die|Karriere|die Karrieren|career|Sie hat in der Firma schnell Karriere gemacht.|She quickly built a career in the company.|B
der|Erfolg|die Erfolge|success|Das neue Produkt war ein großer Erfolg.|The new product was a great success.|B
die|Teilzeit|–|part-time work|Seit der Geburt ihres Sohnes arbeitet sie in Teilzeit.|She has worked part-time since her son was born.|B
die|Vollzeit|–|full-time work|Er möchte wieder in Vollzeit arbeiten.|He would like to work full-time again.|B
die|Arbeitslosigkeit|–|unemployment|Die Arbeitslosigkeit ist in dieser Region sehr hoch.|Unemployment is very high in this region.|B
die|Rente|die Renten|pension, retirement|Mein Vater geht nächstes Jahr in Rente.|My father is retiring next year.|B
die|Stellenanzeige|die Stellenanzeigen|job advertisement|Ich habe Ihre Stellenanzeige im Internet gelesen.|I read your job advertisement on the internet.|B
der|Bewerber|die Bewerber|applicant|Für die Stelle gab es über fünfzig Bewerber.|There were over fifty applicants for the position.|B
die|Unterlagen|nur Plural|documents|Bitte schicken Sie uns Ihre Unterlagen bis Montag.|Please send us your documents by Monday.|B
die|Probezeit|die Probezeiten|probationary period|Die Probezeit dauert bei uns sechs Monate.|The probationary period here lasts six months.|B
die|Gehaltserhöhung|die Gehaltserhöhungen|pay rise|Ich möchte meinen Chef um eine Gehaltserhöhung bitten.|I would like to ask my boss for a pay rise.|B
der|Dienst|die Dienste|duty, service|Am Wochenende habe ich leider Dienst.|Unfortunately I am on duty at the weekend.|B
die|Dienstreise|die Dienstreisen|business trip|Herr Weber ist diese Woche auf Dienstreise.|Mr Weber is on a business trip this week.|B
die|Konferenz|die Konferenzen|conference|Die Konferenz findet nächste Woche in Hamburg statt.|The conference takes place in Hamburg next week.|B
die|Sitzung|die Sitzungen|meeting, session|Die Sitzung hat länger gedauert als geplant.|The meeting lasted longer than planned.|B
das|Protokoll|die Protokolle|minutes (of a meeting)|Wer schreibt heute das Protokoll?|Who is taking the minutes today?|B
der|Auftrag|die Aufträge|order, commission|Die Firma hat einen großen Auftrag bekommen.|The company has received a big order.|B
das|Unternehmen|die Unternehmen|company, business|Das Unternehmen sucht neue Mitarbeiter.|The company is looking for new staff.|B
der|Leiter|die Leiter|head, manager|Der Leiter der Abteilung ist gerade im Urlaub.|The head of the department is on holiday at the moment.|B
der|Vorgesetzte|die Vorgesetzten|superior, line manager|Ich muss zuerst meinen Vorgesetzten fragen.|I have to ask my line manager first.|B
der|Angestellte|die Angestellten|salaried employee|Er ist Angestellter bei einer Bank.|He is an employee at a bank.|B
der|Beamte|die Beamten|civil servant|Der Beamte hat mir alles genau erklärt.|The civil servant explained everything to me in detail.|B
der|Auszubildende|die Auszubildenden|apprentice, trainee|Der Auszubildende lernt jeden Tag etwas Neues.|The apprentice learns something new every day.|B
der|Praktikant|die Praktikanten|intern|Wir haben im Sommer zwei Praktikanten im Büro.|We have two interns in the office in summer.|B
der|Meister|die Meister|master craftsman|Der Meister zeigt dem Lehrling die Arbeit.|The master craftsman shows the apprentice the work.|B
der|Betriebsrat|die Betriebsräte|works council|Der Betriebsrat spricht morgen mit der Geschäftsleitung.|The works council is speaking to the management tomorrow.|B
der|Streik|die Streiks|strike|Wegen des Streiks fahren heute keine Züge.|No trains are running today because of the strike.|B
die|Branche|die Branchen|sector, line of business|In welcher Branche arbeiten Sie?|Which sector do you work in?|B
die|Industrie|die Industrien|industry|In der Industrie gibt es viele Arbeitsplätze.|There are many jobs in industry.|B
der|Handel|–|trade, commerce|Der Handel mit dem Ausland ist sehr wichtig.|Trade with other countries is very important.|B
die|Wirtschaft|–|economy|Die Wirtschaft des Landes wächst langsam.|The country's economy is growing slowly.|B
die|Produktion|die Produktionen|production|Die Produktion beginnt im nächsten Monat.|Production begins next month.|B
das|Produkt|die Produkte|product|Unsere Produkte werden in viele Länder verkauft.|Our products are sold in many countries.|B
die|Dienstleistung|die Dienstleistungen|service|Die Firma bietet verschiedene Dienstleistungen an.|The company offers various services.|B
die|Kantine|die Kantinen|canteen|Mittags essen wir meistens in der Kantine.|We usually have lunch in the canteen.|B
die|Tätigkeit|die Tätigkeiten|activity, job|Bitte beschreiben Sie Ihre letzte Tätigkeit.|Please describe your last job.|B
die|Leistung|die Leistungen|performance, achievement|Der Chef ist mit meiner Leistung zufrieden.|The boss is satisfied with my performance.|B
die|Qualifikation|die Qualifikationen|qualification|Für diese Stelle fehlt ihm die nötige Qualifikation.|He lacks the necessary qualification for this position.|B
die|Voraussetzung|die Voraussetzungen|requirement, prerequisite|Gute Deutschkenntnisse sind eine Voraussetzung für die Stelle.|Good German is a requirement for the position.|B
die|Anforderung|die Anforderungen|requirement, demand|Die Anforderungen in diesem Beruf sind hoch.|The demands in this profession are high.|B
die|Zusammenarbeit|–|cooperation|Vielen Dank für die gute Zusammenarbeit.|Thank you very much for the good cooperation.|B
die|Konkurrenz|–|competition|Die Konkurrenz bietet niedrigere Preise an.|The competition offers lower prices.|B
der|Gewinn|die Gewinne|profit|Die Firma hat letztes Jahr viel Gewinn gemacht.|The company made a lot of profit last year.|B
der|Verlust|die Verluste|loss|Das Unternehmen hat dieses Jahr Verluste gemacht.|The company has made losses this year.|B
die|Bezahlung|–|pay, payment|Die Arbeit ist interessant, aber die Bezahlung ist schlecht.|The work is interesting, but the pay is poor.|B
die|Arbeitsagentur|die Arbeitsagenturen|job centre|Er hat sich bei der Arbeitsagentur gemeldet.|He has registered at the job centre.|B
die|Berufserfahrung|–|professional experience|Sie hat fünf Jahre Berufserfahrung als Köchin.|She has five years' professional experience as a cook.|B
der|Nebenjob|die Nebenjobs|part-time job (on the side)|Viele Studenten haben einen Nebenjob.|Many students have a part-time job.|B
die|Aushilfe|die Aushilfen|temporary help|Das Café sucht eine Aushilfe für den Sommer.|The café is looking for temporary help for the summer.|B
der|Ordner|die Ordner|folder, file|Die Rechnungen sind in dem blauen Ordner.|The invoices are in the blue folder.|B
die|Akte|die Akten|file, record|Die Akte liegt auf dem Tisch des Chefs.|The file is on the boss's desk.|B
die|Krankmeldung|die Krankmeldungen|sick note|Ich muss dem Arbeitgeber eine Krankmeldung schicken.|I have to send my employer a sick note.|B
das|Lager|die Lager|warehouse, stockroom|Die Ware ist noch im Lager.|The goods are still in the warehouse.|B
die|Baustelle|die Baustellen|building site|Auf der Baustelle muss man einen Helm tragen.|You have to wear a helmet on the building site.|B
der|Architekt|die Architekten|architect|Der Architekt hat das neue Rathaus geplant.|The architect designed the new town hall.|B
der|Kaufmann|die Kaufleute|businessman, trained clerk|Er hat eine Ausbildung zum Kaufmann gemacht.|He trained as a commercial clerk.|B`],
["Wohnen","Housing",`die|Miete|die Mieten|rent|Die Miete ist in dieser Stadt sehr hoch.|Rent is very high in this city.|B
der|Vermieter|die Vermieter|landlord|Der Vermieter wohnt im selben Haus.|The landlord lives in the same building.|B
der|Mieter|die Mieter|tenant|Der neue Mieter zieht im Mai ein.|The new tenant moves in in May.|B
die|Kaution|die Kautionen|deposit|Die Kaution beträgt drei Monatsmieten.|The deposit is three months' rent.|B
der|Umzug|die Umzüge|move (to a new home)|Beim Umzug haben mir Freunde geholfen.|Friends helped me with the move.|B
das|Erdgeschoss|die Erdgeschosse|ground floor|Die Wohnung liegt im Erdgeschoss.|The flat is on the ground floor.|B
das|Stockwerk|die Stockwerke|floor, storey|Das Haus hat fünf Stockwerke.|The building has five floors.|B
der|Keller|die Keller|cellar|Die Fahrräder stehen im Keller.|The bikes are in the cellar.|B
die|Heizung|die Heizungen|heating|Die Heizung funktioniert seit gestern nicht.|The heating has not been working since yesterday.|B
der|Nachbar|die Nachbarn|neighbour|Unser Nachbar ist sehr hilfsbereit.|Our neighbour is very helpful.|B
das|Gebäude|die Gebäude|building|Das Gebäude wurde 1950 gebaut.|The building was built in 1950.|B
der|Aufzug|die Aufzüge|lift, elevator|Der Aufzug ist leider kaputt.|Unfortunately the lift is broken.|B
die|Einrichtung|die Einrichtungen|furnishings|Die Einrichtung der Wohnung ist modern.|The flat's furnishings are modern.|B
das|Möbelstück|die Möbelstücke|piece of furniture|Dieses Möbelstück habe ich geerbt.|I inherited this piece of furniture.|B
der|Haushalt|die Haushalte|household|Wir teilen uns die Arbeit im Haushalt.|We share the housework.|B
der|Müll|–|rubbish|Bringst du bitte den Müll raus?|Could you take the rubbish out, please?|B
die|Steckdose|die Steckdosen|power socket|Neben dem Bett gibt es keine Steckdose.|There is no socket next to the bed.|B
der|Schlüssel|die Schlüssel|key|Ich habe meinen Schlüssel verloren.|I have lost my key.|B
die|Wohngemeinschaft|die Wohngemeinschaften|shared flat|Als Student habe ich in einer Wohngemeinschaft gelebt.|As a student I lived in a shared flat.|B
das|Dach|die Dächer|roof|Das Dach muss repariert werden.|The roof needs to be repaired.|B
der|Balkon|die Balkone|balcony|Im Sommer frühstücken wir auf dem Balkon.|In summer we have breakfast on the balcony.|B
die|Umgebung|die Umgebungen|surroundings, area|In der Umgebung gibt es viele Parks.|There are many parks in the area.|B
der|Vorort|die Vororte|suburb|Sie wohnen in einem ruhigen Vorort.|They live in a quiet suburb.|B
das|Grundstück|die Grundstücke|plot of land|Das Grundstück ist sehr groß.|The plot is very large.|B
die|Reparatur|die Reparaturen|repair|Die Reparatur hat zwei Stunden gedauert.|The repair took two hours.|B
der|Hausmeister|die Hausmeister|caretaker|Der Hausmeister kümmert sich um den Garten.|The caretaker looks after the garden.|B
der|Strom|–|electricity|Wir wollen weniger Strom verbrauchen.|We want to use less electricity.|B
das|Haus|die Häuser|house|Meine Eltern wohnen in einem alten Haus.|My parents live in an old house.|A
die|Wohnung|die Wohnungen|flat|Wir suchen eine größere Wohnung.|We are looking for a bigger flat.|A
das|Zimmer|die Zimmer|room|Die Wohnung hat drei Zimmer.|The flat has three rooms.|A
die|Küche|die Küchen|kitchen|Wir frühstücken immer in der Küche.|We always have breakfast in the kitchen.|A
das|Bad|die Bäder|bathroom|Das Bad hat leider kein Fenster.|Unfortunately the bathroom has no window.|A
das|Wohnzimmer|die Wohnzimmer|living room|Abends sitzen wir zusammen im Wohnzimmer.|In the evening we sit together in the living room.|A
das|Schlafzimmer|die Schlafzimmer|bedroom|Das Schlafzimmer ist klein, aber ruhig.|The bedroom is small but quiet.|A
das|Kinderzimmer|die Kinderzimmer|children's room|Das Kinderzimmer ist schon wieder unordentlich.|The children's room is untidy again.|A
die|Toilette|die Toiletten|toilet|Die Toilette ist gleich neben dem Eingang.|The toilet is right next to the entrance.|A
der|Flur|die Flure|hall, corridor|Stell deine Schuhe bitte in den Flur.|Please put your shoes in the hall.|A
der|Garten|die Gärten|garden|Im Sommer essen wir oft im Garten.|In summer we often eat in the garden.|A
die|Tür|die Türen|door|Kannst du bitte die Tür zumachen?|Can you close the door, please?|A
das|Fenster|die Fenster|window|Mach bitte das Fenster auf, es ist warm.|Please open the window, it is warm.|A
die|Wand|die Wände|wall|An der Wand hängt ein großes Foto.|A large photo is hanging on the wall.|A
der|Boden|die Böden|floor|Die Kinder spielen gern auf dem Boden.|The children like playing on the floor.|A
die|Treppe|die Treppen|stairs|Ich nehme lieber die Treppe als den Aufzug.|I prefer to take the stairs rather than the lift.|A
der|Tisch|die Tische|table|Das Essen steht schon auf dem Tisch.|The food is already on the table.|A
der|Stuhl|die Stühle|chair|Wir brauchen noch zwei Stühle für die Gäste.|We still need two chairs for the guests.|A
das|Bett|die Betten|bed|Ich gehe heute früh ins Bett.|I am going to bed early today.|A
der|Schrank|die Schränke|cupboard, wardrobe|Die Gläser stehen im Schrank über der Spüle.|The glasses are in the cupboard above the sink.|A
das|Sofa|die Sofas|sofa|Er ist auf dem Sofa eingeschlafen.|He fell asleep on the sofa.|A
der|Sessel|die Sessel|armchair|Mein Opa sitzt am liebsten in seinem Sessel.|My grandad likes sitting in his armchair best.|A
das|Regal|die Regale|shelf, shelves|Die Bücher stehen im Regal neben dem Fenster.|The books are on the shelf next to the window.|A
die|Lampe|die Lampen|lamp|Die Lampe im Flur ist kaputt.|The lamp in the hall is broken.|A
der|Teppich|die Teppiche|carpet, rug|Im Wohnzimmer liegt ein neuer Teppich.|There is a new rug in the living room.|A
der|Spiegel|die Spiegel|mirror|Im Bad hängt ein großer Spiegel.|A large mirror hangs in the bathroom.|A
das|Bild|die Bilder|picture|Ich möchte das Bild über das Sofa hängen.|I would like to hang the picture above the sofa.|A
der|Kühlschrank|die Kühlschränke|fridge|Die Milch steht im Kühlschrank.|The milk is in the fridge.|A
der|Herd|die Herde|cooker|Hast du den Herd ausgemacht?|Did you turn off the cooker?|A
die|Waschmaschine|die Waschmaschinen|washing machine|Unsere Waschmaschine steht im Keller.|Our washing machine is in the cellar.|A
die|Dusche|die Duschen|shower|Das Bad hat eine Dusche, aber keine Badewanne.|The bathroom has a shower but no bath.|A
die|Badewanne|die Badewannen|bath, bathtub|Die Kinder sitzen gern lange in der Badewanne.|The children like sitting in the bath for a long time.|A
die|Möbel|nur Plural|furniture|Die Möbel haben wir gebraucht gekauft.|We bought the furniture second-hand.|A
die|Garage|die Garagen|garage|Das Auto steht in der Garage.|The car is in the garage.|A
die|Adresse|die Adressen|address|Können Sie mir Ihre neue Adresse geben?|Can you give me your new address?|A
der|Platz|die Plätze|space, room|In der Küche haben wir zu wenig Platz.|We have too little space in the kitchen.|A
der|Fernseher|die Fernseher|television set|Der Fernseher steht im Wohnzimmer.|The television is in the living room.|A
das|Licht|die Lichter|light|Mach bitte das Licht aus, wenn du gehst.|Please turn off the light when you leave.|A
das|Kissen|die Kissen|cushion, pillow|Auf dem Sofa liegen viele bunte Kissen.|There are lots of colourful cushions on the sofa.|A
der|Topf|die Töpfe|pot, saucepan|Die Suppe steht noch im Topf auf dem Herd.|The soup is still in the pot on the cooker.|A
der|Eingang|die Eingänge|entrance|Der Eingang ist hinten im Hof.|The entrance is at the back in the courtyard.|A
die|Ecke|die Ecken|corner|Der Sessel steht in der Ecke.|The armchair is in the corner.|A
das|Handtuch|die Handtücher|towel|Frische Handtücher liegen im Bad.|There are fresh towels in the bathroom.|A
der|Parkplatz|die Parkplätze|parking space|Zu der Wohnung gehört auch ein Parkplatz.|A parking space also comes with the flat.|A
die|Kaffeemaschine|die Kaffeemaschinen|coffee machine|Die Kaffeemaschine ist schon wieder kaputt.|The coffee machine is broken again.|A
die|Decke|die Decken|blanket; ceiling|Mir ist kalt, ich brauche eine Decke.|I am cold, I need a blanket.|A
die|Klingel|die Klingeln|doorbell|Die Klingel funktioniert seit gestern nicht mehr.|The doorbell has not worked since yesterday.|A
die|Nebenkosten|nur Plural|additional costs (utilities)|Die Nebenkosten sind in der Miete nicht enthalten.|The additional costs are not included in the rent.|B
der|Mietvertrag|die Mietverträge|tenancy agreement|Morgen unterschreiben wir den Mietvertrag.|We are signing the tenancy agreement tomorrow.|B
die|Besichtigung|die Besichtigungen|viewing|Die Besichtigung der Wohnung ist am Samstag.|The viewing of the flat is on Saturday.|B
die|Anzeige|die Anzeigen|advertisement|Ich habe die Wohnung durch eine Anzeige gefunden.|I found the flat through an advertisement.|B
der|Makler|die Makler|estate agent|Der Makler zeigt uns heute zwei Wohnungen.|The estate agent is showing us two flats today.|B
der|Eigentümer|die Eigentümer|owner|Der Eigentümer möchte das Haus verkaufen.|The owner would like to sell the house.|B
die|Eigentumswohnung|die Eigentumswohnungen|owner-occupied flat|Sie haben sich eine Eigentumswohnung gekauft.|They have bought themselves a flat.|B
das|Einfamilienhaus|die Einfamilienhäuser|detached house|Viele Familien träumen von einem Einfamilienhaus.|Many families dream of a detached house.|B
das|Hochhaus|die Hochhäuser|high-rise building|Er wohnt im zehnten Stock eines Hochhauses.|He lives on the tenth floor of a high-rise building.|B
der|Quadratmeter|die Quadratmeter|square metre|Die Wohnung ist 70 Quadratmeter groß.|The flat is 70 square metres in size.|B
der|Dachboden|die Dachböden|attic, loft|Die alten Sachen liegen auf dem Dachboden.|The old things are in the attic.|B
das|Treppenhaus|die Treppenhäuser|stairwell|Im Treppenhaus dürfen keine Fahrräder stehen.|No bicycles may be left in the stairwell.|B
der|Hof|die Höfe|courtyard, yard|Die Kinder spielen unten im Hof.|The children are playing down in the courtyard.|B
die|Terrasse|die Terrassen|terrace, patio|Bei schönem Wetter sitzen wir auf der Terrasse.|In nice weather we sit on the terrace.|B
die|Etage|die Etagen|floor, storey|Unser Büro liegt in der dritten Etage.|Our office is on the third floor.|B
der|Briefkasten|die Briefkästen|letterbox|Ich habe die Rechnung im Briefkasten gefunden.|I found the bill in the letterbox.|B
die|Hausordnung|die Hausordnungen|house rules|Laut Hausordnung ist ab 22 Uhr Ruhe.|According to the house rules it must be quiet from 10 pm.|B
der|Lärm|–|noise|Der Lärm von der Straße stört mich sehr.|The noise from the street bothers me a lot.|B
die|Ruhe|–|quiet, peace|Nach der Arbeit brauche ich meine Ruhe.|After work I need my peace and quiet.|B
die|Lage|die Lagen|location|Die Wohnung hat eine sehr zentrale Lage.|The flat has a very central location.|B
das|Stadtviertel|die Stadtviertel|district, neighbourhood|In diesem Stadtviertel gibt es viele Cafés.|There are many cafés in this district.|B
die|Nachbarschaft|die Nachbarschaften|neighbourhood|In unserer Nachbarschaft kennen sich alle.|Everyone knows each other in our neighbourhood.|B
die|Innenstadt|die Innenstädte|city centre|Wohnungen in der Innenstadt sind sehr teuer.|Flats in the city centre are very expensive.|B
die|Spülmaschine|die Spülmaschinen|dishwasher|Räumst du bitte die Spülmaschine aus?|Will you empty the dishwasher, please?|B
der|Staubsauger|die Staubsauger|vacuum cleaner|Der Staubsauger steht im Schrank im Flur.|The vacuum cleaner is in the cupboard in the hall.|B
die|Mikrowelle|die Mikrowellen|microwave|Ich mache das Essen schnell in der Mikrowelle warm.|I will quickly heat the food up in the microwave.|B
der|Backofen|die Backöfen|oven|Der Kuchen muss 40 Minuten im Backofen bleiben.|The cake has to stay in the oven for 40 minutes.|B
der|Wasserhahn|die Wasserhähne|tap|Der Wasserhahn in der Küche tropft.|The tap in the kitchen is dripping.|B
das|Waschbecken|die Waschbecken|washbasin|Das Waschbecken im Bad ist verstopft.|The washbasin in the bathroom is blocked.|B
die|Spüle|die Spülen|kitchen sink|Das schmutzige Geschirr steht in der Spüle.|The dirty dishes are in the kitchen sink.|B
der|Vorhang|die Vorhänge|curtain|Mach bitte die Vorhänge zu, es wird dunkel.|Please close the curtains, it is getting dark.|B
die|Matratze|die Matratzen|mattress|Die neue Matratze ist viel bequemer.|The new mattress is much more comfortable.|B
die|Bettwäsche|–|bed linen|Ich wechsle jede Woche die Bettwäsche.|I change the bed linen every week.|B
der|Kleiderschrank|die Kleiderschränke|wardrobe|Mein Kleiderschrank ist viel zu klein.|My wardrobe is far too small.|B
das|Geschirr|–|crockery, dishes|Wer spült heute das Geschirr?|Who is washing the dishes today?|B
das|Besteck|die Bestecke|cutlery|Das Besteck liegt in der obersten Schublade.|The cutlery is in the top drawer.|B
die|Pfanne|die Pfannen|frying pan|Ich brate das Fleisch in der Pfanne.|I am frying the meat in the pan.|B
die|Mülltonne|die Mülltonnen|dustbin|Die Mülltonnen stehen hinter dem Haus.|The dustbins are behind the house.|B
das|Gerät|die Geräte|appliance, device|Alte Geräte verbrauchen oft viel Strom.|Old appliances often use a lot of electricity.|B
der|Schalter|die Schalter|switch|Der Schalter für das Licht ist neben der Tür.|The light switch is next to the door.|B
die|Renovierung|die Renovierungen|renovation|Die Renovierung der Küche dauert zwei Wochen.|The renovation of the kitchen will take two weeks.|B
der|Schaden|die Schäden|damage|Der Mieter muss den Schaden sofort melden.|The tenant must report the damage immediately.|B
das|Schloss|die Schlösser|lock|Wir haben das Schloss an der Haustür gewechselt.|We have changed the lock on the front door.|B
die|Hausarbeit|die Hausarbeiten|housework|Wir teilen uns die Hausarbeit.|We share the housework.|B
die|Wäsche|–|laundry, washing|Ich muss noch die Wäsche aufhängen.|I still have to hang up the washing.|B
das|Bügeleisen|die Bügeleisen|iron|Vorsicht, das Bügeleisen ist noch heiß!|Careful, the iron is still hot!|B
das|Putzmittel|die Putzmittel|cleaning product|Die Putzmittel stehen unter der Spüle.|The cleaning products are under the sink.|B
die|Ordnung|–|order, tidiness|In seinem Zimmer herrscht immer Ordnung.|His room is always tidy.|B
der|Mitbewohner|die Mitbewohner|flatmate|Mein Mitbewohner kocht sehr gut.|My flatmate cooks very well.|B
das|Haustier|die Haustiere|pet|Haustiere sind in dieser Wohnung nicht erlaubt.|Pets are not allowed in this flat.|B
die|Aussicht|die Aussichten|view|Vom Balkon hat man eine tolle Aussicht.|You have a great view from the balcony.|B
der|Raum|die Räume|room, space|Dieser Raum ist für ein Büro zu dunkel.|This room is too dark for an office.|B
der|Wohnort|die Wohnorte|place of residence|Bitte schreiben Sie hier Ihren Wohnort.|Please write your place of residence here.|B
der|Spielplatz|die Spielplätze|playground|In der Nähe gibt es einen schönen Spielplatz.|There is a nice playground nearby.|B
die|Wohnungssuche|–|flat hunting|Die Wohnungssuche in großen Städten ist schwierig.|Flat hunting in big cities is difficult.|B
die|Heizkosten|nur Plural|heating costs|Die Heizkosten sind in diesem Winter gestiegen.|Heating costs have gone up this winter.|B
das|Zuhause|–|home|Nach zwei Jahren ist Berlin mein Zuhause geworden.|After two years Berlin has become my home.|B
die|Mieterhöhung|die Mieterhöhungen|rent increase|Gestern haben wir eine Mieterhöhung bekommen.|We received a rent increase yesterday.|B
das|Gästezimmer|die Gästezimmer|guest room|Du kannst gern in unserem Gästezimmer schlafen.|You are welcome to sleep in our guest room.|B
das|Arbeitszimmer|die Arbeitszimmer|study|Im Arbeitszimmer steht mein Computer.|My computer is in the study.|B`],
["Gesundheit","Health",`die|Gesundheit|–|health|Rauchen schadet der Gesundheit.|Smoking damages your health.|B
die|Krankheit|die Krankheiten|illness|Diese Krankheit ist nicht gefährlich.|This illness is not dangerous.|B
der|Schmerz|die Schmerzen|pain|Ich habe starke Schmerzen im Rücken.|I have severe pain in my back.|B
das|Fieber|–|fever|Das Kind hat hohes Fieber.|The child has a high fever.|B
die|Erkältung|die Erkältungen|cold (illness)|Ich habe eine leichte Erkältung.|I have a slight cold.|B
der|Husten|–|cough|Gegen den Husten trinke ich Tee.|I drink tea for my cough.|B
das|Rezept|die Rezepte|prescription; recipe|Dieses Medikament gibt es nur auf Rezept.|This medicine is only available on prescription.|B
das|Medikament|die Medikamente|medicine, drug|Nehmen Sie das Medikament nach dem Essen.|Take the medicine after eating.|B
die|Tablette|die Tabletten|pill, tablet|Ich nehme jeden Morgen eine Tablette.|I take a tablet every morning.|B
die|Apotheke|die Apotheken|pharmacy|Die Apotheke hat heute Notdienst.|The pharmacy is on emergency duty today.|B
die|Sprechstunde|die Sprechstunden|consultation hours|Die Sprechstunde ist von acht bis zwölf Uhr.|Consultation hours are from eight to twelve.|B
die|Untersuchung|die Untersuchungen|medical examination|Die Untersuchung dauert nur zehn Minuten.|The examination only takes ten minutes.|B
die|Krankenkasse|die Krankenkassen|health insurance fund|Die Krankenkasse bezahlt die Behandlung.|The health insurance pays for the treatment.|B
die|Versicherung|die Versicherungen|insurance|Haben Sie eine Versicherung für das Auto?|Do you have insurance for the car?|B
der|Unfall|die Unfälle|accident|Auf der Autobahn ist ein Unfall passiert.|There has been an accident on the motorway.|B
die|Verletzung|die Verletzungen|injury|Die Verletzung war zum Glück nicht schwer.|Luckily the injury was not serious.|B
der|Notfall|die Notfälle|emergency|Im Notfall rufen Sie bitte diese Nummer an.|In an emergency please call this number.|B
das|Krankenhaus|die Krankenhäuser|hospital|Sie musste eine Woche im Krankenhaus bleiben.|She had to stay in hospital for a week.|B
die|Operation|die Operationen|operation, surgery|Die Operation ist gut verlaufen.|The operation went well.|B
der|Verband|die Verbände|bandage|Die Ärztin hat mir einen Verband gemacht.|The doctor put a bandage on me.|B
die|Ernährung|–|diet, nutrition|Eine gesunde Ernährung ist wichtig.|A healthy diet is important.|B
die|Bewegung|die Bewegungen|exercise, movement|Bewegung an der frischen Luft tut gut.|Exercise in the fresh air does you good.|B
das|Gewicht|die Gewichte|weight|Der Arzt kontrolliert mein Gewicht.|The doctor checks my weight.|B
der|Stress|–|stress|Bei der Arbeit habe ich zurzeit viel Stress.|I have a lot of stress at work at the moment.|B
die|Impfung|die Impfungen|vaccination|Für die Reise brauchst du eine Impfung.|You need a vaccination for the trip.|B
der|Krankenwagen|die Krankenwagen|ambulance|Der Krankenwagen kam nach fünf Minuten.|The ambulance came after five minutes.|B
die|Besserung|–|recovery, improvement|Ich wünsche dir gute Besserung!|Get well soon!|B
der|Kopf|die Köpfe|head|Mir tut seit gestern der Kopf weh.|My head has been hurting since yesterday.|A
das|Auge|die Augen|eye|Sie hat blaue Augen wie ihr Vater.|She has blue eyes like her father.|A
das|Ohr|die Ohren|ear|Mein linkes Ohr tut weh.|My left ear hurts.|A
die|Nase|die Nasen|nose|Meine Nase läuft den ganzen Tag.|My nose has been running all day.|A
der|Mund|die Münder|mouth|Machen Sie bitte den Mund weit auf.|Please open your mouth wide.|A
der|Zahn|die Zähne|tooth|Ich putze mir zweimal täglich die Zähne.|I brush my teeth twice a day.|A
der|Hals|die Hälse|neck, throat|Mein Hals ist rot und tut weh.|My throat is red and sore.|A
der|Arm|die Arme|arm|Er hat sich beim Skifahren den Arm gebrochen.|He broke his arm while skiing.|A
die|Hand|die Hände|hand|Wasch dir bitte vor dem Essen die Hände.|Please wash your hands before eating.|A
der|Finger|die Finger|finger|Ich habe mir in den Finger geschnitten.|I have cut my finger.|A
das|Bein|die Beine|leg|Nach dem Wandern tun mir die Beine weh.|My legs hurt after hiking.|A
der|Fuß|die Füße|foot|Meine Füße sind nach der Arbeit immer müde.|My feet are always tired after work.|A
der|Bauch|die Bäuche|stomach, belly|Das Kind sagt, dass sein Bauch wehtut.|The child says that his tummy hurts.|A
der|Rücken|die Rücken|back|Vom langen Sitzen tut mir der Rücken weh.|My back hurts from sitting for so long.|A
das|Haar|die Haare|hair|Sie hat lange dunkle Haare.|She has long dark hair.|A
das|Gesicht|die Gesichter|face|Er wäscht sich morgens das Gesicht mit kaltem Wasser.|He washes his face with cold water in the morning.|A
der|Körper|die Körper|body|Sport ist gut für den ganzen Körper.|Sport is good for the whole body.|A
das|Herz|die Herzen|heart|Beim Laufen schlägt mein Herz sehr schnell.|My heart beats very fast when I run.|A
die|Praxis|die Praxen|practice, surgery|Die Praxis ist am Mittwochnachmittag geschlossen.|The surgery is closed on Wednesday afternoons.|A
der|Patient|die Patienten|patient|Der Arzt nimmt sich Zeit für seine Patienten.|The doctor takes time for his patients.|A
die|Grippe|–|flu|Im Winter haben viele Leute Grippe.|Many people have the flu in winter.|A
der|Schnupfen|–|cold (runny nose)|Ich habe nur einen leichten Schnupfen.|I only have a slight cold.|A
die|Kopfschmerzen|nur Plural|headache|Ich habe oft Kopfschmerzen, wenn ich wenig trinke.|I often get a headache when I don't drink enough.|A
die|Bauchschmerzen|nur Plural|stomach ache|Nach dem Essen hatte er starke Bauchschmerzen.|He had a bad stomach ache after the meal.|A
das|Knie|die Knie|knee|Sie hat sich beim Fußball am Knie verletzt.|She injured her knee playing football.|A
die|Schulter|die Schultern|shoulder|Meine rechte Schulter tut beim Schwimmen weh.|My right shoulder hurts when I swim.|A
die|Haut|–|skin|Im Winter ist meine Haut sehr trocken.|My skin is very dry in winter.|A
der|Sport|–|sport, exercise|Ich mache dreimal pro Woche Sport.|I do sport three times a week.|A
die|Seife|die Seifen|soap|Im Bad gibt es keine Seife mehr.|There is no soap left in the bathroom.|A
die|Zahnbürste|die Zahnbürsten|toothbrush|Ich habe meine Zahnbürste zu Hause vergessen.|I have left my toothbrush at home.|A
der|Schlaf|–|sleep|Kinder brauchen viel Schlaf.|Children need a lot of sleep.|A
der|Durst|–|thirst|Nach dem Sport habe ich immer großen Durst.|I am always very thirsty after sport.|A
der|Hunger|–|hunger|Seit ich krank bin, habe ich keinen Hunger.|I haven't been hungry since I fell ill.|A
das|Pflaster|die Pflaster|plaster|Hast du ein Pflaster für meinen Finger?|Have you got a plaster for my finger?|A
die|Hilfe|die Hilfen|help|Der Mann ist gestürzt und braucht Hilfe.|The man has fallen and needs help.|A
die|Creme|die Cremes|cream|Diese Creme hilft gut bei trockener Haut.|This cream works well for dry skin.|A
das|Wartezimmer|die Wartezimmer|waiting room|Nehmen Sie bitte noch kurz im Wartezimmer Platz.|Please take a seat in the waiting room for a moment.|A
das|Shampoo|die Shampoos|shampoo|Ich muss noch Shampoo und Seife kaufen.|I still need to buy shampoo and soap.|A
das|Taschentuch|die Taschentücher|tissue, handkerchief|Hast du ein Taschentuch für mich?|Have you got a tissue for me?|A
der|Spaziergang|die Spaziergänge|walk|Ein Spaziergang an der frischen Luft tut gut.|A walk in the fresh air does you good.|A
die|Zigarette|die Zigaretten|cigarette|Er raucht nur noch eine Zigarette am Tag.|He now smokes only one cigarette a day.|A
der|Alkohol|–|alcohol|Mit diesem Medikament dürfen Sie keinen Alkohol trinken.|You must not drink alcohol with this medicine.|A
die|Brust|die Brüste|chest, breast|Ich habe beim Atmen Schmerzen in der Brust.|I have chest pain when I breathe.|A
die|Zunge|die Zungen|tongue|Zeigen Sie mir bitte einmal Ihre Zunge.|Please show me your tongue.|B
die|Lippe|die Lippen|lip|Bei kaltem Wetter sind meine Lippen ganz trocken.|My lips get very dry in cold weather.|B
der|Zeh|die Zehen|toe|Ich habe mir den kleinen Zeh am Tisch gestoßen.|I banged my little toe on the table.|B
das|Blut|–|blood|Die Ärztin hat mir Blut abgenommen.|The doctor took a blood sample from me.|B
der|Knochen|die Knochen|bone|Milch ist gut für die Knochen.|Milk is good for your bones.|B
der|Muskel|die Muskeln|muscle|Nach dem Training tun mir alle Muskeln weh.|All my muscles ache after training.|B
der|Magen|die Mägen|stomach|Scharfes Essen ist nicht gut für meinen Magen.|Spicy food is not good for my stomach.|B
die|Lunge|die Lungen|lung|Rauchen schadet der Lunge.|Smoking damages the lungs.|B
das|Gehirn|die Gehirne|brain|Das Gehirn braucht viel Sauerstoff.|The brain needs a lot of oxygen.|B
der|Ellbogen|die Ellbogen|elbow|Beim Sturz hat er sich am Ellbogen verletzt.|He injured his elbow when he fell.|B
die|Müdigkeit|–|tiredness|Gegen Müdigkeit hilft oft ein kurzer Spaziergang.|A short walk often helps against tiredness.|B
das|Virus|die Viren|virus|Das Virus verbreitet sich besonders im Winter schnell.|The virus spreads quickly, especially in winter.|B
der|Nagel|die Nägel|nail|Ich muss mir die Nägel schneiden.|I need to cut my nails.|B
die|Wunde|die Wunden|wound|Die Wunde muss sofort sauber gemacht werden.|The wound must be cleaned immediately.|B
die|Entzündung|die Entzündungen|inflammation|Gegen die Entzündung bekommen Sie ein Antibiotikum.|You will get an antibiotic for the inflammation.|B
die|Allergie|die Allergien|allergy|Ich habe eine Allergie gegen Nüsse.|I have a nut allergy.|B
der|Durchfall|–|diarrhoea|Bei Durchfall sollte man viel trinken.|You should drink a lot if you have diarrhoea.|B
die|Übelkeit|–|nausea|Das Medikament kann Übelkeit verursachen.|The medicine can cause nausea.|B
der|Schwindel|–|dizziness|Wenn ich schnell aufstehe, bekomme ich Schwindel.|I get dizzy when I stand up quickly.|B
die|Beschwerden|nur Plural|symptoms, complaints|Seit wann haben Sie diese Beschwerden?|How long have you had these symptoms?|B
die|Diagnose|die Diagnosen|diagnosis|Der Arzt konnte noch keine genaue Diagnose stellen.|The doctor was not yet able to give an exact diagnosis.|B
die|Behandlung|die Behandlungen|treatment|Die Behandlung dauert ungefähr sechs Wochen.|The treatment takes about six weeks.|B
die|Therapie|die Therapien|therapy|Nach der Operation macht sie eine Therapie.|She is having therapy after the operation.|B
die|Spritze|die Spritzen|injection|Viele Kinder haben Angst vor Spritzen.|Many children are afraid of injections.|B
die|Salbe|die Salben|ointment|Tragen Sie die Salbe zweimal täglich auf.|Apply the ointment twice a day.|B
das|Mittel|die Mittel|remedy, medicine|Haben Sie ein Mittel gegen Halsschmerzen?|Do you have something for a sore throat?|B
die|Nebenwirkung|die Nebenwirkungen|side effect|Diese Tabletten haben kaum Nebenwirkungen.|These tablets have hardly any side effects.|B
die|Wirkung|die Wirkungen|effect|Die Wirkung der Tablette beginnt nach einer Stunde.|The tablet starts to take effect after an hour.|B
das|Attest|die Atteste|medical certificate|Für die Schule brauche ich ein ärztliches Attest.|I need a medical certificate for school.|B
der|Hausarzt|die Hausärzte|family doctor, GP|Gehen Sie bitte zuerst zu Ihrem Hausarzt.|Please go to your GP first.|B
der|Facharzt|die Fachärzte|specialist|Der Hausarzt hat mich zu einem Facharzt geschickt.|The GP sent me to a specialist.|B
die|Krankenschwester|die Krankenschwestern|nurse (female)|Die Krankenschwester bringt Ihnen gleich das Frühstück.|The nurse will bring you breakfast in a moment.|B
der|Pfleger|die Pfleger|nurse, carer|Der Pfleger hilft den Patienten beim Aufstehen.|The nurse helps the patients to get up.|B
die|Notaufnahme|die Notaufnahmen|A&E, emergency department|Wir haben drei Stunden in der Notaufnahme gewartet.|We waited in A&E for three hours.|B
die|Station|die Stationen|ward|Auf welcher Station liegt Ihre Mutter?|Which ward is your mother on?|B
die|Versichertenkarte|die Versichertenkarten|health insurance card|Haben Sie Ihre Versichertenkarte dabei?|Do you have your health insurance card with you?|B
der|Rettungsdienst|die Rettungsdienste|ambulance service|Der Rettungsdienst war nach zehn Minuten da.|The ambulance service arrived after ten minutes.|B
der|Notarzt|die Notärzte|emergency doctor|Wir haben sofort den Notarzt gerufen.|We called the emergency doctor immediately.|B
der|Notruf|die Notrufe|emergency call|Den Notruf erreichen Sie unter der Nummer 112.|You can reach the emergency services on 112.|B
die|Schwangerschaft|die Schwangerschaften|pregnancy|Während der Schwangerschaft sollte man nicht rauchen.|You should not smoke during pregnancy.|B
die|Behinderung|die Behinderungen|disability|Das Hotel ist auch für Menschen mit Behinderung geeignet.|The hotel is also suitable for people with a disability.|B
der|Rollstuhl|die Rollstühle|wheelchair|Seit dem Unfall sitzt er im Rollstuhl.|He has been in a wheelchair since the accident.|B
die|Pflege|–|care, nursing|Mein Großvater braucht jeden Tag Pflege.|My grandfather needs care every day.|B
die|Droge|die Drogen|drug|Drogen sind sehr gefährlich für die Gesundheit.|Drugs are very dangerous to your health.|B
der|Raucher|die Raucher|smoker|Früher war er ein starker Raucher.|He used to be a heavy smoker.|B
die|Diät|die Diäten|diet|Sie macht seit zwei Wochen eine Diät.|She has been on a diet for two weeks.|B
das|Vitamin|die Vitamine|vitamin|Obst und Gemüse enthalten viele Vitamine.|Fruit and vegetables contain lots of vitamins.|B
die|Erholung|–|rest, recovery|Nach der Krankheit braucht sie noch etwas Erholung.|She still needs some rest after her illness.|B
die|Entspannung|–|relaxation|Zur Entspannung höre ich abends Musik.|I listen to music in the evening to relax.|B
das|Fitnessstudio|die Fitnessstudios|gym|Ich gehe zweimal pro Woche ins Fitnessstudio.|I go to the gym twice a week.|B
das|Training|die Trainings|training|Das Training beginnt heute um 18 Uhr.|Training starts at 6 pm today.|B
die|Kraft|die Kräfte|strength|Nach der Grippe hatte ich keine Kraft mehr.|I had no strength left after the flu.|B
die|Ausdauer|–|stamina|Für einen Marathon braucht man viel Ausdauer.|You need a lot of stamina for a marathon.|B
die|Hygiene|–|hygiene|In der Küche ist Hygiene besonders wichtig.|Hygiene is particularly important in the kitchen.|B
die|Zahnpasta|die Zahnpasten|toothpaste|Wir haben keine Zahnpasta mehr im Haus.|We have no toothpaste left in the house.|B
der|Tropfen|die Tropfen|drop|Nehmen Sie dreimal täglich zehn Tropfen.|Take ten drops three times a day.|B
das|Thermometer|die Thermometer|thermometer|Das Thermometer zeigt 39 Grad Fieber.|The thermometer shows a temperature of 39 degrees.|B
der|Blutdruck|–|blood pressure|Mein Vater hat zu hohen Blutdruck.|My father's blood pressure is too high.|B
das|Schmerzmittel|die Schmerzmittel|painkiller|Ich habe schon ein Schmerzmittel genommen.|I have already taken a painkiller.|B
die|Infektion|die Infektionen|infection|Regelmäßiges Händewaschen schützt vor Infektionen.|Washing your hands regularly protects against infections.|B
der|Sonnenbrand|die Sonnenbrände|sunburn|Am ersten Urlaubstag habe ich einen Sonnenbrand bekommen.|I got sunburnt on the first day of the holiday.|B`],
["Reisen & Verkehr","Travel & transport",`die|Abfahrt|die Abfahrten|departure|Die Abfahrt ist um 9:15 Uhr.|Departure is at 9:15.|B
die|Ankunft|die Ankünfte|arrival|Die Ankunft in Berlin ist um 14 Uhr.|Arrival in Berlin is at 2 pm.|B
die|Verspätung|die Verspätungen|delay|Der Zug hat zwanzig Minuten Verspätung.|The train is twenty minutes late.|B
der|Anschluss|die Anschlüsse|connection|Wir haben den Anschluss in Köln verpasst.|We missed our connection in Cologne.|B
der|Bahnsteig|die Bahnsteige|platform|Bitte warten Sie auf dem Bahnsteig.|Please wait on the platform.|B
das|Gleis|die Gleise|track, platform number|Der Zug fährt heute von Gleis drei ab.|Today the train leaves from platform three.|B
die|Fahrkarte|die Fahrkarten|ticket (transport)|Ich kaufe die Fahrkarte am Automaten.|I buy the ticket at the machine.|B
der|Fahrplan|die Fahrpläne|timetable (transport)|Der neue Fahrplan gilt ab Dezember.|The new timetable applies from December.|B
die|Haltestelle|die Haltestellen|stop (bus, tram)|Die Haltestelle ist direkt vor dem Haus.|The stop is right in front of the house.|B
der|Stau|die Staus|traffic jam|Wir standen eine Stunde im Stau.|We were stuck in a traffic jam for an hour.|B
die|Kreuzung|die Kreuzungen|crossroads, junction|An der Kreuzung müssen Sie links abbiegen.|You have to turn left at the junction.|B
die|Ampel|die Ampeln|traffic light|Die Ampel ist rot.|The traffic light is red.|B
der|Führerschein|die Führerscheine|driving licence|Mit achtzehn habe ich den Führerschein gemacht.|I got my driving licence at eighteen.|B
die|Autobahn|die Autobahnen|motorway|Auf der Autobahn gibt es eine Baustelle.|There are roadworks on the motorway.|B
die|Tankstelle|die Tankstellen|petrol station|Die nächste Tankstelle ist zehn Kilometer entfernt.|The nearest petrol station is ten kilometres away.|B
das|Gepäck|–|luggage|Sie können Ihr Gepäck hier abgeben.|You can hand in your luggage here.|B
der|Koffer|die Koffer|suitcase|Mein Koffer ist zu schwer.|My suitcase is too heavy.|B
die|Unterkunft|die Unterkünfte|accommodation|Wir suchen eine günstige Unterkunft.|We are looking for cheap accommodation.|B
die|Übernachtung|die Übernachtungen|overnight stay|Die Übernachtung kostet achtzig Euro.|One night costs eighty euros.|B
der|Aufenthalt|die Aufenthalte|stay|Wir wünschen Ihnen einen schönen Aufenthalt.|We wish you a pleasant stay.|B
das|Reisebüro|die Reisebüros|travel agency|Wir haben die Reise im Reisebüro gebucht.|We booked the trip at the travel agency.|B
die|Sehenswürdigkeit|die Sehenswürdigkeiten|tourist sight|Der Dom ist die bekannteste Sehenswürdigkeit der Stadt.|The cathedral is the city's best-known sight.|B
der|Ausflug|die Ausflüge|excursion, day trip|Am Sonntag machen wir einen Ausflug an den See.|On Sunday we are going on a trip to the lake.|B
die|Grenze|die Grenzen|border|An der Grenze wurden die Pässe kontrolliert.|Passports were checked at the border.|B
das|Ausland|–|foreign countries, abroad|Sie hat zwei Jahre im Ausland gearbeitet.|She worked abroad for two years.|B
der|Flughafen|die Flughäfen|airport|Ich hole dich vom Flughafen ab.|I will pick you up from the airport.|B
das|Verkehrsmittel|die Verkehrsmittel|means of transport|Ich fahre mit öffentlichen Verkehrsmitteln zur Arbeit.|I go to work by public transport.|B
der|Zug|die Züge|train|Der Zug nach Köln fährt um acht Uhr.|The train to Cologne leaves at eight o'clock.|A
der|Bus|die Busse|bus|Ich fahre jeden Tag mit dem Bus zur Arbeit.|I take the bus to work every day.|A
das|Auto|die Autos|car|Unser Auto steht vor dem Haus.|Our car is parked in front of the house.|A
das|Fahrrad|die Fahrräder|bicycle|Im Sommer fahre ich gern mit dem Fahrrad.|In summer I like riding my bicycle.|A
das|Flugzeug|die Flugzeuge|aeroplane|Das Flugzeug landet pünktlich in Berlin.|The aeroplane lands in Berlin on time.|A
das|Schiff|die Schiffe|ship|Wir fahren mit dem Schiff auf die Insel.|We are going to the island by ship.|A
die|Straßenbahn|die Straßenbahnen|tram|Die Straßenbahn hält direkt vor dem Bahnhof.|The tram stops right in front of the station.|A
die|U-Bahn|die U-Bahnen|underground (train)|Mit der U-Bahn bist du in zehn Minuten da.|You will be there in ten minutes by underground.|A
die|S-Bahn|die S-Bahnen|suburban train|Die S-Bahn zum Flughafen fährt alle zwanzig Minuten.|The suburban train to the airport runs every twenty minutes.|A
das|Taxi|die Taxis|taxi|Wir nehmen ein Taxi zum Hotel.|We are taking a taxi to the hotel.|A
der|Bahnhof|die Bahnhöfe|railway station|Ich hole dich am Bahnhof ab.|I will pick you up at the station.|A
die|Straße|die Straßen|street, road|In dieser Straße gibt es viele Geschäfte.|There are many shops in this street.|A
der|Weg|die Wege|way, path|Können Sie mir den Weg zum Bahnhof zeigen?|Can you show me the way to the station?|A
die|Brücke|die Brücken|bridge|Gehen Sie über die Brücke und dann links.|Go over the bridge and then left.|A
das|Hotel|die Hotels|hotel|Das Hotel liegt direkt am Meer.|The hotel is right by the sea.|A
die|Reise|die Reisen|journey, trip|Die Reise nach Italien war sehr schön.|The trip to Italy was very nice.|A
der|Flug|die Flüge|flight|Der Flug nach Istanbul dauert drei Stunden.|The flight to Istanbul takes three hours.|A
das|Ticket|die Tickets|ticket|Ich habe die Tickets im Internet gekauft.|I bought the tickets on the internet.|A
der|Rucksack|die Rucksäcke|rucksack|Ich reise nur mit einem kleinen Rucksack.|I only travel with a small rucksack.|A
der|Stadtplan|die Stadtpläne|street map|Haben Sie einen Stadtplan von München?|Do you have a street map of Munich?|A
die|Stadt|die Städte|town, city|Hamburg ist eine sehr schöne Stadt.|Hamburg is a very beautiful city.|A
das|Dorf|die Dörfer|village|Meine Eltern wohnen in einem kleinen Dorf.|My parents live in a small village.|A
das|Zentrum|die Zentren|centre|Das Hotel liegt im Zentrum der Stadt.|The hotel is in the centre of the town.|A
der|Ausgang|die Ausgänge|exit (on foot)|Der Ausgang ist dort hinten rechts.|The exit is back there on the right.|A
der|Tourist|die Touristen|tourist|Im Sommer kommen viele Touristen in die Stadt.|In summer many tourists come to the town.|A
der|Strand|die Strände|beach|Die Kinder spielen den ganzen Tag am Strand.|The children play on the beach all day.|A
das|Museum|die Museen|museum|Am Montag ist das Museum geschlossen.|The museum is closed on Mondays.|A
die|Kirche|die Kirchen|church|Die alte Kirche steht mitten im Dorf.|The old church stands in the middle of the village.|A
das|Motorrad|die Motorräder|motorbike|Mein Bruder fährt mit dem Motorrad nach Frankreich.|My brother is riding to France on his motorbike.|A
die|Fahrt|die Fahrten|journey, ride|Die Fahrt nach Wien dauert vier Stunden.|The journey to Vienna takes four hours.|A
das|Boot|die Boote|boat|Wir haben ein Boot für zwei Stunden gemietet.|We hired a boat for two hours.|A
das|Land|die Länder|country|In welches Land möchtest du gern reisen?|Which country would you like to travel to?|A
der|Norden|–|north|Hamburg liegt im Norden von Deutschland.|Hamburg is in the north of Germany.|A
der|Süden|–|south|Wir fahren im Urlaub immer in den Süden.|We always go south on holiday.|A
der|Osten|–|east|Dresden liegt im Osten des Landes.|Dresden is in the east of the country.|A
der|Westen|–|west|Köln liegt im Westen von Deutschland.|Cologne is in the west of Germany.|A
der|Verkehr|–|traffic|Am Morgen ist hier immer viel Verkehr.|There is always a lot of traffic here in the morning.|B
der|Fahrgast|die Fahrgäste|passenger (bus, train)|Alle Fahrgäste müssen hier aussteigen.|All passengers have to get off here.|B
der|Passagier|die Passagiere|passenger (plane, ship)|Die Passagiere warten schon am Flugsteig.|The passengers are already waiting at the gate.|B
der|Schaffner|die Schaffner|ticket inspector|Der Schaffner kontrolliert die Fahrkarten.|The ticket inspector checks the tickets.|B
der|Fahrkartenautomat|die Fahrkartenautomaten|ticket machine|Der Fahrkartenautomat nimmt leider kein Bargeld.|Unfortunately the ticket machine does not take cash.|B
die|Durchsage|die Durchsagen|announcement|Ich habe die Durchsage am Bahnhof nicht verstanden.|I did not understand the announcement at the station.|B
die|Rückfahrt|die Rückfahrten|return journey|Auf der Rückfahrt hatten wir einen langen Stau.|On the return journey we were stuck in a long traffic jam.|B
die|Reservierung|die Reservierungen|reservation|Ohne Reservierung bekommen Sie keinen Sitzplatz.|Without a reservation you will not get a seat.|B
der|Abflug|die Abflüge|departure (flight)|Bitte seien Sie zwei Stunden vor dem Abflug da.|Please be there two hours before departure.|B
die|Sicherheitskontrolle|die Sicherheitskontrollen|security check|Die Sicherheitskontrolle hat heute sehr lange gedauert.|The security check took a very long time today.|B
das|Handgepäck|–|hand luggage|Sie dürfen nur ein Stück Handgepäck mitnehmen.|You may only take one piece of hand luggage.|B
der|Zoll|–|customs|Am Zoll mussten wir unsere Koffer öffnen.|At customs we had to open our suitcases.|B
das|Visum|die Visa|visa|Für diese Reise brauchen Sie ein Visum.|You need a visa for this trip.|B
der|Fußgänger|die Fußgänger|pedestrian|Autofahrer müssen auf Fußgänger achten.|Drivers must watch out for pedestrians.|B
die|Fußgängerzone|die Fußgängerzonen|pedestrian zone|In der Fußgängerzone dürfen keine Autos fahren.|No cars are allowed in the pedestrian zone.|B
der|Radweg|die Radwege|cycle path|Neben der Straße gibt es einen neuen Radweg.|There is a new cycle path next to the road.|B
der|Bürgersteig|die Bürgersteige|pavement|Bitte parken Sie nicht auf dem Bürgersteig.|Please do not park on the pavement.|B
der|Zebrastreifen|die Zebrastreifen|zebra crossing|Gehen Sie bitte über den Zebrastreifen.|Please use the zebra crossing.|B
die|Kurve|die Kurven|bend, curve|In der Kurve musst du langsamer fahren.|You have to drive more slowly on the bend.|B
die|Ausfahrt|die Ausfahrten|exit (for vehicles)|Wir müssen die nächste Ausfahrt nehmen.|We have to take the next exit.|B
die|Umleitung|die Umleitungen|diversion|Wegen der Umleitung kamen wir zu spät.|Because of the diversion we arrived too late.|B
die|Geschwindigkeit|die Geschwindigkeiten|speed|Die Polizei kontrolliert hier oft die Geschwindigkeit.|The police often check speeds here.|B
der|Strafzettel|die Strafzettel|parking ticket, fine|Ich habe einen Strafzettel bekommen, weil ich falsch geparkt habe.|I got a ticket because I parked illegally.|B
das|Parkhaus|die Parkhäuser|multi-storey car park|Das Parkhaus am Bahnhof ist leider voll.|Unfortunately the multi-storey car park at the station is full.|B
die|Panne|die Pannen|breakdown|Wir hatten auf der Autobahn eine Panne.|We had a breakdown on the motorway.|B
der|Reifen|die Reifen|tyre|Im Winter braucht das Auto andere Reifen.|In winter the car needs different tyres.|B
der|Motor|die Motoren|engine|Bitte machen Sie den Motor aus.|Please switch off the engine.|B
die|Bremse|die Bremsen|brake|Die Bremsen an meinem Fahrrad funktionieren nicht.|The brakes on my bicycle do not work.|B
das|Benzin|–|petrol|Das Benzin ist schon wieder teurer geworden.|Petrol has become more expensive yet again.|B
der|Kofferraum|die Kofferräume|boot (of a car)|Die Taschen passen nicht mehr in den Kofferraum.|The bags no longer fit in the boot.|B
der|Helm|die Helme|helmet|Beim Radfahren trage ich immer einen Helm.|I always wear a helmet when cycling.|B
das|Fahrzeug|die Fahrzeuge|vehicle|Der Unfall passierte zwischen zwei Fahrzeugen.|The accident happened between two vehicles.|B
der|Lastwagen|die Lastwagen|lorry|Vor uns fährt ein langsamer Lastwagen.|A slow lorry is driving in front of us.|B
die|Richtung|die Richtungen|direction|Der Bus fährt in Richtung Hauptbahnhof.|The bus goes in the direction of the main station.|B
die|Entfernung|die Entfernungen|distance|Die Entfernung zum Strand beträgt nur zwei Kilometer.|The distance to the beach is only two kilometres.|B
die|Strecke|die Strecken|route, stretch|Die Strecke zwischen Bonn und Köln ist gesperrt.|The route between Bonn and Cologne is closed.|B
die|Linie|die Linien|line, route number|Nehmen Sie die Linie fünf bis zum Rathaus.|Take line five to the town hall.|B
der|Sitzplatz|die Sitzplätze|seat|Im Zug war leider kein Sitzplatz mehr frei.|Unfortunately there was no seat left on the train.|B
die|Jugendherberge|die Jugendherbergen|youth hostel|Die Klasse übernachtet in einer Jugendherberge.|The class is staying at a youth hostel.|B
die|Pension|die Pensionen|guesthouse|Wir wohnen in einer kleinen Pension am See.|We are staying at a small guesthouse by the lake.|B
die|Ferienwohnung|die Ferienwohnungen|holiday flat|Wir haben eine Ferienwohnung an der Ostsee gemietet.|We have rented a holiday flat on the Baltic coast.|B
der|Campingplatz|die Campingplätze|campsite|Der Campingplatz liegt direkt am Fluss.|The campsite is right by the river.|B
das|Zelt|die Zelte|tent|Wir schlafen im Urlaub im Zelt.|We sleep in a tent on holiday.|B
das|Einzelzimmer|die Einzelzimmer|single room|Ich hätte gern ein Einzelzimmer mit Frühstück.|I would like a single room with breakfast.|B
das|Doppelzimmer|die Doppelzimmer|double room|Das Doppelzimmer kostet neunzig Euro pro Nacht.|The double room costs ninety euros per night.|B
die|Saison|die Saisons|season (tourism)|In der Saison sind die Hotels sehr teuer.|In season the hotels are very expensive.|B
der|Reiseführer|die Reiseführer|guidebook; tour guide|Im Reiseführer stehen viele gute Tipps.|There are lots of good tips in the guidebook.|B
die|Führung|die Führungen|guided tour|Die Führung durch das Schloss beginnt um zehn.|The guided tour of the castle starts at ten.|B
die|Stadtrundfahrt|die Stadtrundfahrten|city sightseeing tour|Am ersten Tag machen wir eine Stadtrundfahrt.|On the first day we are doing a city sightseeing tour.|B
der|Prospekt|die Prospekte|brochure|Im Reisebüro habe ich einige Prospekte mitgenommen.|I picked up a few brochures at the travel agency.|B
das|Souvenir|die Souvenirs|souvenir|Ich habe ein Souvenir für meine Mutter gekauft.|I bought a souvenir for my mother.|B
die|Altstadt|die Altstädte|old town|Die Altstadt von Heidelberg ist sehr bekannt.|The old town of Heidelberg is very well known.|B
der|Turm|die Türme|tower|Vom Turm aus sieht man die ganze Stadt.|From the tower you can see the whole town.|B
der|Tunnel|die Tunnel|tunnel|Der Zug fährt durch einen langen Tunnel.|The train goes through a long tunnel.|B
der|Hafen|die Häfen|harbour, port|Im Hafen liegen viele große Schiffe.|There are many large ships in the harbour.|B
die|Fähre|die Fähren|ferry|Die Fähre zur Insel fährt dreimal am Tag.|The ferry to the island runs three times a day.|B
die|Rezeption|die Rezeptionen|reception (hotel)|Den Schlüssel bekommen Sie an der Rezeption.|You get the key at reception.|B
die|Verbindung|die Verbindungen|connection|Es gibt eine direkte Verbindung nach Frankfurt.|There is a direct connection to Frankfurt.|B`],
["Ämter & Behörden","Public offices",`das|Amt|die Ämter|public office|Das Amt ist nur vormittags geöffnet.|The office is only open in the mornings.|B
die|Behörde|die Behörden|authority|Die Behörde hat meinen Brief beantwortet.|The authority has replied to my letter.|B
der|Antrag|die Anträge|application, request|Sie müssen einen Antrag stellen.|You have to submit an application.|B
das|Formular|die Formulare|form|Bitte füllen Sie dieses Formular aus.|Please fill in this form.|B
die|Unterschrift|die Unterschriften|signature|Hier fehlt noch Ihre Unterschrift.|Your signature is still missing here.|B
der|Ausweis|die Ausweise|ID card|Darf ich bitte Ihren Ausweis sehen?|May I see your ID, please?|B
der|Reisepass|die Reisepässe|passport|Mein Reisepass ist abgelaufen.|My passport has expired.|B
die|Aufenthaltserlaubnis|die Aufenthaltserlaubnisse|residence permit|Ich muss meine Aufenthaltserlaubnis verlängern.|I have to renew my residence permit.|B
die|Genehmigung|die Genehmigungen|permit, approval|Für den Umbau braucht man eine Genehmigung.|You need a permit for the conversion.|B
die|Bescheinigung|die Bescheinigungen|written confirmation|Ich brauche eine Bescheinigung vom Arzt.|I need a certificate from the doctor.|B
die|Anmeldung|die Anmeldungen|registration|Die Anmeldung für den Kurs ist online möglich.|You can register for the course online.|B
der|Wohnsitz|die Wohnsitze|place of residence|Mein Wohnsitz ist in Hamburg.|My place of residence is in Hamburg.|B
die|Staatsangehörigkeit|die Staatsangehörigkeiten|nationality|Welche Staatsangehörigkeit haben Sie?|What is your nationality?|B
die|Steuer|die Steuern|tax|Die Steuer wird direkt vom Gehalt abgezogen.|The tax is deducted directly from your salary.|B
die|Gebühr|die Gebühren|fee|Die Gebühr für den Pass beträgt siebzig Euro.|The fee for the passport is seventy euros.|B
die|Frist|die Fristen|deadline|Die Frist endet am 31. März.|The deadline ends on 31 March.|B
das|Gesetz|die Gesetze|law (a statute)|Das neue Gesetz gilt ab Januar.|The new law applies from January.|B
das|Recht|die Rechte|right; the law|Sie haben das Recht auf eine Beratung.|You have the right to a consultation.|B
die|Pflicht|die Pflichten|duty, obligation|Es ist meine Pflicht, pünktlich zu sein.|It is my duty to be on time.|B
die|Vorschrift|die Vorschriften|regulation, rule|Bitte beachten Sie die Vorschriften.|Please follow the regulations.|B
das|Gericht|die Gerichte|court; dish|Der Fall kommt nächsten Monat vor Gericht.|The case goes to court next month.|B
der|Anwalt|die Anwälte|lawyer|Ich möchte zuerst mit meinem Anwalt sprechen.|I would like to speak to my lawyer first.|B
die|Polizei|–|police|Wir sollten die Polizei rufen.|We should call the police.|B
die|Strafe|die Strafen|fine, punishment|Er musste eine Strafe von fünfzig Euro zahlen.|He had to pay a fine of fifty euros.|B
der|Bürger|die Bürger|citizen|Jeder Bürger darf wählen.|Every citizen may vote.|B
das|Rathaus|die Rathäuser|town hall|Das Rathaus liegt am Marktplatz.|The town hall is on the market square.|B
die|Auskunft|die Auskünfte|information (given on request)|Können Sie mir eine Auskunft geben?|Can you give me some information?|B
die|Postleitzahl|die Postleitzahlen|postcode|Wie ist die Postleitzahl von Ihrem Wohnort?|What is the postcode of the place where you live?|A
der|Absender|die Absender|sender|Der Absender steht oben links auf dem Brief.|The sender is at the top left of the letter.|A
der|Empfänger|die Empfänger|recipient|Der Empfänger war leider nicht zu Hause.|Unfortunately the recipient was not at home.|A
das|Geburtsdatum|die Geburtsdaten|date of birth|Tragen Sie hier bitte Ihr Geburtsdatum ein.|Please enter your date of birth here.|A
die|Hausnummer|die Hausnummern|house number|Sie haben die Hausnummer vergessen.|You have forgotten the house number.|A
die|Nummer|die Nummern|number|Bitte ziehen Sie eine Nummer und warten Sie.|Please take a number and wait.|A
das|Datum|die Daten|date|Schreiben Sie bitte das Datum von heute.|Please write today's date.|A
die|Nationalität|die Nationalitäten|nationality|Welche Nationalität haben Sie?|What nationality are you?|A
die|Hauptstadt|die Hauptstädte|capital city|Berlin ist die Hauptstadt von Deutschland.|Berlin is the capital of Germany.|A
der|Ausländer|die Ausländer|foreigner|In dieser Stadt leben viele Ausländer.|Many foreigners live in this city.|A
der|Staat|die Staaten|state (country)|Der Staat bezahlt einen Teil der Kosten.|The state pays part of the costs.|A
das|Dokument|die Dokumente|document|Welche Dokumente muss ich mitbringen?|Which documents do I have to bring?|A
die|Kopie|die Kopien|copy|Bitte machen Sie eine Kopie von Ihrem Pass.|Please make a copy of your passport.|A
das|Passfoto|die Passfotos|passport photo|Für den Ausweis brauche ich ein neues Passfoto.|I need a new passport photo for the ID card.|A
die|Information|die Informationen|information|Weitere Informationen finden Sie im Internet.|You can find further information on the internet.|A
die|Postkarte|die Postkarten|postcard|Sie schickt mir aus jedem Urlaub eine Postkarte.|She sends me a postcard from every holiday.|A
der|Umschlag|die Umschläge|envelope|Stecken Sie das Formular in den Umschlag.|Put the form in the envelope.|A
das|Verbot|die Verbote|ban, prohibition|Hier gilt ein Verbot für Hunde.|There is a ban on dogs here.|A
die|Feuerwehr|die Feuerwehren|fire brigade|Die Feuerwehr war nach fünf Minuten da.|The fire brigade was there after five minutes.|A
der|Stempel|die Stempel|stamp (ink)|Auf dem Formular fehlt noch der Stempel.|The stamp is still missing on the form.|B
das|Einschreiben|die Einschreiben|registered letter|Schicken Sie die Kündigung am besten als Einschreiben.|It is best to send the notice by registered post.|B
die|Erlaubnis|–|permission|Dafür brauchen Sie eine Erlaubnis von der Stadt.|You need permission from the city for that.|B
der|Dieb|die Diebe|thief|Die Polizei hat den Dieb schnell gefunden.|The police found the thief quickly.|B
der|Diebstahl|die Diebstähle|theft|Ich möchte einen Diebstahl melden.|I would like to report a theft.|B
der|Einbruch|die Einbrüche|burglary|Letzte Nacht gab es einen Einbruch im Nachbarhaus.|Last night there was a burglary in the house next door.|B
der|Zeuge|die Zeugen|witness|Die Polizei sucht Zeugen für den Unfall.|The police are looking for witnesses to the accident.|B
der|Richter|die Richter|judge|Der Richter hat lange mit dem Zeugen gesprochen.|The judge spoke to the witness for a long time.|B
der|Täter|die Täter|offender, culprit|Der Täter ist mit dem Auto geflohen.|The offender fled by car.|B
das|Opfer|die Opfer|victim|Das Opfer wurde ins Krankenhaus gebracht.|The victim was taken to hospital.|B
der|Beweis|die Beweise|proof, evidence|Die Polizei hat keine Beweise gegen ihn.|The police have no evidence against him.|B
das|Urteil|die Urteile|verdict, judgement|Das Gericht spricht morgen das Urteil.|The court will give its verdict tomorrow.|B
das|Gefängnis|die Gefängnisse|prison|Er musste für zwei Jahre ins Gefängnis.|He had to go to prison for two years.|B
die|Kontrolle|die Kontrollen|check, inspection|An der Grenze gibt es manchmal Kontrollen.|There are sometimes checks at the border.|B
die|Sicherheit|–|safety, security|Die Polizei sorgt für Sicherheit in der Stadt.|The police ensure safety in the city.|B
die|Gefahr|die Gefahren|danger|Bei Gefahr rufen Sie bitte sofort die Polizei.|In case of danger please call the police immediately.|B
der|Schutz|–|protection|Das Gesetz dient dem Schutz der Kinder.|The law serves to protect children.|B
der|Datenschutz|–|data protection|Der Datenschutz ist in Deutschland sehr wichtig.|Data protection is very important in Germany.|B
die|Verwaltung|die Verwaltungen|administration|Sie arbeitet in der Verwaltung der Stadt.|She works in the city administration.|B
das|Einwohnermeldeamt|die Einwohnermeldeämter|residents' registration office|Nach dem Umzug müssen Sie zum Einwohnermeldeamt gehen.|After moving you have to go to the registration office.|B
das|Standesamt|die Standesämter|registry office|Wir heiraten im Mai auf dem Standesamt.|We are getting married at the registry office in May.|B
das|Finanzamt|die Finanzämter|tax office|Das Finanzamt hat mir einen Brief geschickt.|The tax office has sent me a letter.|B
die|Ausländerbehörde|die Ausländerbehörden|immigration office|Ich habe morgen einen Termin bei der Ausländerbehörde.|I have an appointment at the immigration office tomorrow.|B
das|Jobcenter|die Jobcenter|job centre|Das Jobcenter hat ihm eine Stelle angeboten.|The job centre offered him a job.|B
die|Botschaft|die Botschaften|embassy|Das Visum bekommen Sie bei der Botschaft.|You get the visa at the embassy.|B
das|Fundbüro|die Fundbüros|lost property office|Fragen Sie doch einmal im Fundbüro nach.|Why not ask at the lost property office?|B
die|Urkunde|die Urkunden|certificate, official document|Bitte bringen Sie die Urkunde im Original mit.|Please bring the original certificate with you.|B
der|Bescheid|die Bescheide|official notice, decision|Sie bekommen den Bescheid in zwei Wochen.|You will receive the decision in two weeks.|B
die|Bestätigung|die Bestätigungen|confirmation|Sie erhalten eine Bestätigung per Post.|You will receive a confirmation by post.|B
die|Angabe|die Angaben|detail, information given|Ihre Angaben sind leider nicht vollständig.|Unfortunately your details are not complete.|B
die|Verlängerung|die Verlängerungen|extension, renewal|Ich möchte eine Verlängerung für mein Visum beantragen.|I would like to apply for an extension of my visa.|B
die|Beratung|die Beratungen|advice, consultation|Die Beratung beim Amt ist kostenlos.|The advice at the office is free of charge.|B
das|Schreiben|die Schreiben|(official) letter|Vielen Dank für Ihr Schreiben vom 3. Mai.|Thank you very much for your letter of 3 May.|B
die|Anrede|die Anreden|form of address, salutation|Die Anrede im Brief muss höflich sein.|The salutation in the letter must be polite.|B
die|Mitteilung|die Mitteilungen|notification, message|Wir haben eine Mitteilung von der Behörde bekommen.|We have received a notification from the authority.|B
die|Bedingung|die Bedingungen|condition|Unter dieser Bedingung bekommen Sie die Genehmigung.|On this condition you will get the permit.|B
die|Unterstützung|die Unterstützungen|support|Familien bekommen Unterstützung vom Staat.|Families receive support from the state.|B
das|Kindergeld|–|child benefit|Wir haben Kindergeld für unsere Tochter beantragt.|We have applied for child benefit for our daughter.|B
die|Regierung|die Regierungen|government|Die Regierung plant ein neues Gesetz.|The government is planning a new law.|B
die|Politik|–|politics, policy|Interessierst du dich für Politik?|Are you interested in politics?|B
der|Politiker|die Politiker|politician|Der Politiker hat eine lange Rede gehalten.|The politician gave a long speech.|B
die|Partei|die Parteien|(political) party|Welche Partei hat die Wahl gewonnen?|Which party won the election?|B
die|Wahl|die Wahlen|election, choice|Die nächste Wahl findet im Herbst statt.|The next election takes place in the autumn.|B
die|Stimme|die Stimmen|vote, voice|Jeder Bürger hat bei der Wahl eine Stimme.|Every citizen has one vote in the election.|B
das|Parlament|die Parlamente|parliament|Das Parlament stimmt morgen über das Gesetz ab.|Parliament will vote on the law tomorrow.|B
der|Bundestag|–|German federal parliament|Der Bundestag hat seinen Sitz in Berlin.|The Bundestag has its seat in Berlin.|B
der|Präsident|die Präsidenten|president|Der Präsident besucht nächste Woche unsere Stadt.|The president is visiting our city next week.|B
der|Bürgermeister|die Bürgermeister|mayor|Der Bürgermeister hat das neue Schwimmbad eröffnet.|The mayor opened the new swimming pool.|B
die|Demokratie|die Demokratien|democracy|Deutschland ist eine Demokratie.|Germany is a democracy.|B
die|Freiheit|die Freiheiten|freedom|Die Freiheit der Presse ist sehr wichtig.|The freedom of the press is very important.|B
der|Frieden|–|peace|Alle Menschen wünschen sich Frieden.|All people wish for peace.|B
der|Krieg|die Kriege|war|Viele Menschen sind vor dem Krieg geflohen.|Many people have fled from the war.|B
die|Bevölkerung|die Bevölkerungen|population|Die Bevölkerung der Stadt wächst jedes Jahr.|The population of the city grows every year.|B
der|Einwohner|die Einwohner|inhabitant|Die Stadt hat etwa 50 000 Einwohner.|The town has about 50,000 inhabitants.|B
der|Flüchtling|die Flüchtlinge|refugee|Die Stadt hilft den Flüchtlingen bei der Wohnungssuche.|The city helps the refugees to look for flats.|B
das|Bundesland|die Bundesländer|federal state|Deutschland hat sechzehn Bundesländer.|Germany has sixteen federal states.|B
die|Gemeinde|die Gemeinden|municipality, community|Unsere Gemeinde baut einen neuen Kindergarten.|Our municipality is building a new nursery school.|B
die|Demonstration|die Demonstrationen|demonstration, protest|Am Samstag gibt es eine Demonstration im Zentrum.|On Saturday there is a demonstration in the centre.|B`],
["Bildung","Education",`der|Unterricht|–|lessons, teaching|Der Unterricht beginnt um acht Uhr.|Lessons start at eight o'clock.|B
die|Prüfung|die Prüfungen|exam|Ich habe die Prüfung bestanden.|I passed the exam.|B
die|Note|die Noten|grade, mark|Sie hat eine gute Note bekommen.|She got a good grade.|B
der|Abschluss|die Abschlüsse|qualification, degree|Welchen Abschluss haben Sie?|What qualification do you have?|B
das|Abitur|–|school-leaving exam for university|Nach dem Abitur möchte er studieren.|After his Abitur he wants to go to university.|B
das|Studium|die Studien|university studies|Das Studium dauert drei Jahre.|The degree course takes three years.|B
das|Fach|die Fächer|school subject|Mathe ist mein liebstes Fach.|Maths is my favourite subject.|B
der|Kurs|die Kurse|course|Der Kurs findet zweimal pro Woche statt.|The course takes place twice a week.|B
die|Fortbildung|die Fortbildungen|further training|Meine Firma bezahlt die Fortbildung.|My company pays for the training.|B
das|Wissen|–|knowledge|Für diesen Beruf braucht man viel Wissen.|You need a lot of knowledge for this job.|B
die|Kenntnis|die Kenntnisse|knowledge, skills|Gute Kenntnisse in Englisch sind nötig.|A good knowledge of English is required.|B
die|Fähigkeit|die Fähigkeiten|ability|Sie hat die Fähigkeit, gut zuzuhören.|She has the ability to listen well.|B
die|Aufgabe|die Aufgaben|task, exercise|Diese Aufgabe ist ziemlich schwierig.|This task is quite difficult.|B
die|Übung|die Übungen|practice, exercise|Übung macht den Meister.|Practice makes perfect.|B
der|Fehler|die Fehler|mistake|Im Text sind noch drei Fehler.|There are still three mistakes in the text.|B
die|Lösung|die Lösungen|solution, answer|Die Lösung steht auf Seite zwanzig.|The answer is on page twenty.|B
der|Fortschritt|die Fortschritte|progress|Du hast große Fortschritte gemacht.|You have made great progress.|B
das|Ergebnis|die Ergebnisse|result|Das Ergebnis der Prüfung kommt per Post.|The exam result comes by post.|B
die|Fremdsprache|die Fremdsprachen|foreign language|Deutsch ist meine zweite Fremdsprache.|German is my second foreign language.|B
die|Muttersprache|die Muttersprachen|native language|Was ist Ihre Muttersprache?|What is your native language?|B
die|Aussprache|–|pronunciation|Ihre Aussprache ist sehr deutlich.|Your pronunciation is very clear.|B
der|Wortschatz|–|vocabulary|Durch Lesen wird der Wortschatz größer.|Reading makes your vocabulary bigger.|B
die|Bedeutung|die Bedeutungen|meaning|Dieses Wort hat mehr als eine Bedeutung.|This word has more than one meaning.|B
das|Wörterbuch|die Wörterbücher|dictionary|Darf man in der Prüfung ein Wörterbuch benutzen?|Are you allowed to use a dictionary in the exam?|B
die|Grundschule|die Grundschulen|primary school|Meine Tochter geht in die Grundschule.|My daughter goes to primary school.|B
der|Stundenplan|die Stundenpläne|class timetable|Laut Stundenplan haben wir jetzt Sport.|According to the timetable we have PE now.|B
das|Semester|die Semester|semester|Im nächsten Semester schreibe ich meine Arbeit.|Next semester I am writing my thesis.|B
die|Schule|die Schulen|school|Die Schule beginnt um acht Uhr.|School starts at eight o'clock.|A
der|Lehrer|die Lehrer|teacher|Unser Lehrer erklärt alles sehr gut.|Our teacher explains everything very well.|A
der|Schüler|die Schüler|pupil|In der Klasse sind zwanzig Schüler.|There are twenty pupils in the class.|A
der|Student|die Studenten|student (university)|Der Student wohnt in einem kleinen Zimmer.|The student lives in a small room.|A
die|Klasse|die Klassen|class, year group|Meine Tochter geht in die dritte Klasse.|My daughter is in year three.|A
die|Universität|die Universitäten|university|Sie studiert an der Universität in Köln.|She is studying at the university in Cologne.|A
das|Buch|die Bücher|book|Bitte öffnet das Buch auf Seite zwanzig.|Please open the book at page twenty.|A
das|Heft|die Hefte|exercise book|Schreibt die Sätze bitte ins Heft.|Please write the sentences in your exercise book.|A
der|Stift|die Stifte|pen, pencil|Kannst du mir bitte einen Stift leihen?|Can you lend me a pen, please?|A
der|Bleistift|die Bleistifte|pencil|Ich schreibe die Antworten zuerst mit Bleistift.|I write the answers in pencil first.|A
der|Kugelschreiber|die Kugelschreiber|ballpoint pen|Bitte füllen Sie das Blatt mit Kugelschreiber aus.|Please fill in the sheet with a ballpoint pen.|A
das|Papier|die Papiere|paper|Hast du ein Blatt Papier für mich?|Have you got a sheet of paper for me?|A
die|Tafel|die Tafeln|board, blackboard|Der Lehrer schreibt das Wort an die Tafel.|The teacher writes the word on the board.|A
die|Hausaufgabe|die Hausaufgaben|homework|Ich muss heute noch meine Hausaufgaben machen.|I still have to do my homework today.|A
der|Test|die Tests|test|Wir schreiben morgen einen Test in Englisch.|We have a test in English tomorrow.|A
die|Frage|die Fragen|question|Darf ich Ihnen eine Frage stellen?|May I ask you a question?|A
die|Antwort|die Antworten|answer|Leider war meine Antwort falsch.|Unfortunately my answer was wrong.|A
das|Wort|die Wörter|word|Dieses Wort kenne ich noch nicht.|I do not know this word yet.|A
der|Satz|die Sätze|sentence|Bilden Sie bitte einen Satz mit diesem Verb.|Please make a sentence with this verb.|A
der|Text|die Texte|text|Lesen Sie zuerst den Text.|Read the text first.|A
die|Sprache|die Sprachen|language|Wie viele Sprachen sprichst du?|How many languages do you speak?|A
der|Sprachkurs|die Sprachkurse|language course|Ich besuche zweimal pro Woche einen Sprachkurs.|I attend a language course twice a week.|A
die|Ferien|nur Plural|school holidays|In den Ferien fahren wir ans Meer.|We are going to the seaside in the holidays.|A
der|Kindergarten|die Kindergärten|nursery school|Unser Sohn geht seit September in den Kindergarten.|Our son has been going to nursery school since September.|A
die|Lektion|die Lektionen|lesson, unit|Heute beginnen wir mit Lektion fünf.|Today we are starting unit five.|A
die|Seite|die Seiten|page|Die Übung steht auf der nächsten Seite.|The exercise is on the next page.|A
das|Beispiel|die Beispiele|example|Können Sie mir ein Beispiel geben?|Can you give me an example?|A
der|Buchstabe|die Buchstaben|letter (of the alphabet)|Der Name beginnt mit dem Buchstaben M.|The name begins with the letter M.|A
die|Zahl|die Zahlen|number|Die Kinder lernen die Zahlen bis hundert.|The children are learning the numbers up to a hundred.|A
die|Bibliothek|die Bibliotheken|library|Ich lerne am liebsten in der Bibliothek.|I like studying in the library best.|A
die|Schultasche|die Schultaschen|school bag|Hast du alle Bücher in deine Schultasche gepackt?|Have you packed all your books in your school bag?|A
der|Radiergummi|die Radiergummis|rubber (eraser)|Ich habe meinen Radiergummi zu Hause vergessen.|I have left my rubber at home.|A
das|Lineal|die Lineale|ruler|Für die Zeichnung brauchst du ein Lineal.|You need a ruler for the drawing.|A
das|Klassenzimmer|die Klassenzimmer|classroom|Unser Klassenzimmer ist im zweiten Stock.|Our classroom is on the second floor.|A
die|Mathematik|–|mathematics|Mathematik war in der Schule mein Lieblingsfach.|Mathematics was my favourite subject at school.|A
die|Geschichte|die Geschichten|history, story|In Geschichte lernen wir gerade über das Mittelalter.|In history we are currently learning about the Middle Ages.|A
die|Kunst|die Künste|art|Am Donnerstag haben wir zwei Stunden Kunst.|We have two lessons of art on Thursday.|A
das|Thema|die Themen|topic|Das Thema der heutigen Stunde ist Umweltschutz.|The topic of today's lesson is environmental protection.|A
die|Grammatik|die Grammatiken|grammar|Die deutsche Grammatik finde ich nicht leicht.|I do not find German grammar easy.|A
das|Alphabet|die Alphabete|alphabet|Die Kinder lernen in der ersten Klasse das Alphabet.|The children learn the alphabet in year one.|A
der|Dialog|die Dialoge|dialogue|Lesen Sie den Dialog mit Ihrem Partner.|Read the dialogue with your partner.|A
die|Gruppe|die Gruppen|group|Wir arbeiten heute in kleinen Gruppen.|We are working in small groups today.|A
die|Stunde|die Stunden|lesson, hour|Die erste Stunde fällt morgen aus.|The first lesson is cancelled tomorrow.|A
das|Lehrbuch|die Lehrbücher|textbook|Das Lehrbuch kostet ungefähr zwanzig Euro.|The textbook costs about twenty euros.|A
das|Gymnasium|die Gymnasien|grammar school|Nach der Grundschule geht sie aufs Gymnasium.|After primary school she is going to grammar school.|B
die|Realschule|die Realschulen|secondary school (intermediate)|Er hat die Realschule mit guten Noten beendet.|He finished secondary school with good marks.|B
die|Berufsschule|die Berufsschulen|vocational school|Zweimal pro Woche gehe ich in die Berufsschule.|I go to vocational school twice a week.|B
die|Hochschule|die Hochschulen|college, university|Sie möchte an einer Hochschule in Deutschland studieren.|She would like to study at a university in Germany.|B
die|Volkshochschule|die Volkshochschulen|adult education centre|An der Volkshochschule gibt es günstige Deutschkurse.|There are inexpensive German courses at the adult education centre.|B
die|Sprachschule|die Sprachschulen|language school|Die Sprachschule liegt direkt im Zentrum.|The language school is right in the centre.|B
das|Schuljahr|die Schuljahre|school year|Das neue Schuljahr beginnt im September.|The new school year begins in September.|B
die|Klassenarbeit|die Klassenarbeiten|class test|Für die Klassenarbeit muss ich noch viel lernen.|I still have a lot to learn for the class test.|B
die|Klausur|die Klausuren|written exam|Nächste Woche schreibe ich zwei Klausuren.|I have two written exams next week.|B
das|Zertifikat|die Zertifikate|certificate|Nach der Prüfung bekommen Sie ein Zertifikat.|You receive a certificate after the exam.|B
das|Diplom|die Diplome|diploma, degree|Er hat sein Diplom vor drei Jahren gemacht.|He got his degree three years ago.|B
das|Stipendium|die Stipendien|scholarship, grant|Sie hat ein Stipendium für ihr Studium bekommen.|She has received a scholarship for her studies.|B
die|Vorlesung|die Vorlesungen|lecture|Die Vorlesung beginnt um neun Uhr.|The lecture begins at nine o'clock.|B
das|Seminar|die Seminare|seminar|Für das Seminar muss man sich früh anmelden.|You have to register early for the seminar.|B
der|Professor|die Professoren|professor|Der Professor hat die Frage sehr genau beantwortet.|The professor answered the question in great detail.|B
der|Dozent|die Dozenten|lecturer|Unser Dozent kommt aus Österreich.|Our lecturer comes from Austria.|B
der|Direktor|die Direktoren|headteacher, director|Der Direktor der Schule begrüßt die neuen Schüler.|The headteacher of the school welcomes the new pupils.|B
der|Mitschüler|die Mitschüler|classmate|Mein Mitschüler hat mir bei der Aufgabe geholfen.|My classmate helped me with the task.|B
der|Teilnehmer|die Teilnehmer|participant|Der Kurs hat nur zwölf Teilnehmer.|The course has only twelve participants.|B
der|Anfänger|die Anfänger|beginner|Dieser Kurs ist auch für Anfänger geeignet.|This course is also suitable for beginners.|B
die|Nachhilfe|–|private tuition|Mein Sohn bekommt Nachhilfe in Mathematik.|My son gets private tuition in mathematics.|B
die|Weiterbildung|die Weiterbildungen|further training|Die Firma bezahlt mir eine Weiterbildung.|The company is paying for further training for me.|B
die|Bildung|–|education|Eine gute Bildung ist wichtig für die Zukunft.|A good education is important for the future.|B
die|Lehre|die Lehren|apprenticeship|Nach der Schule hat er eine Lehre begonnen.|After school he started an apprenticeship.|B
die|Forschung|die Forschungen|research|Sie arbeitet in der Forschung an der Universität.|She works in research at the university.|B
die|Wissenschaft|die Wissenschaften|science|Er interessiert sich sehr für Wissenschaft und Technik.|He is very interested in science and technology.|B
der|Wissenschaftler|die Wissenschaftler|scientist|Die Wissenschaftler suchen nach einer neuen Lösung.|The scientists are looking for a new solution.|B
das|Referat|die Referate|presentation (in class)|Ich muss morgen ein Referat über Berlin halten.|I have to give a presentation about Berlin tomorrow.|B
der|Vortrag|die Vorträge|talk, lecture|Der Vortrag über Ernährung war sehr interessant.|The talk about nutrition was very interesting.|B
der|Aufsatz|die Aufsätze|essay|Wir sollen einen Aufsatz über unsere Ferien schreiben.|We are supposed to write an essay about our holidays.|B
das|Diktat|die Diktate|dictation|Im Diktat habe ich nur zwei Fehler gemacht.|I made only two mistakes in the dictation.|B
die|Zusammenfassung|die Zusammenfassungen|summary|Schreiben Sie eine kurze Zusammenfassung des Textes.|Write a short summary of the text.|B
die|Notiz|die Notizen|note|Ich mache mir im Unterricht immer Notizen.|I always take notes in class.|B
die|Übersetzung|die Übersetzungen|translation|Die Übersetzung dieses Satzes ist nicht einfach.|The translation of this sentence is not easy.|B
die|Erklärung|die Erklärungen|explanation|Die Erklärung des Lehrers war leicht zu verstehen.|The teacher's explanation was easy to understand.|B
die|Regel|die Regeln|rule|Diese Regel muss man einfach auswendig lernen.|You simply have to learn this rule by heart.|B
die|Ausnahme|die Ausnahmen|exception|Bei dieser Regel gibt es leider viele Ausnahmen.|Unfortunately there are many exceptions to this rule.|B
der|Ausdruck|die Ausdrücke|expression|Diesen Ausdruck habe ich noch nie gehört.|I have never heard this expression before.|B
der|Begriff|die Begriffe|term, concept|Können Sie mir diesen Begriff erklären?|Can you explain this term to me?|B
die|Vokabel|die Vokabeln|vocabulary item|Ich lerne jeden Abend zehn neue Vokabeln.|I learn ten new words every evening.|B
der|Absatz|die Absätze|paragraph|Lesen Sie bitte den zweiten Absatz noch einmal.|Please read the second paragraph again.|B
die|Überschrift|die Überschriften|heading, headline|Welche Überschrift passt zu diesem Text?|Which heading matches this text?|B
die|Zeile|die Zeilen|line (of text)|Das Wort steht in der dritten Zeile.|The word is in the third line.|B
das|Kapitel|die Kapitel|chapter|Bis morgen sollen wir das erste Kapitel lesen.|We are supposed to read the first chapter by tomorrow.|B
der|Inhalt|die Inhalte|content|Können Sie den Inhalt des Textes kurz beschreiben?|Can you briefly describe the content of the text?|B
die|Tabelle|die Tabellen|table (chart)|Tragen Sie die Verben in die Tabelle ein.|Enter the verbs in the table.|B
die|Rechtschreibung|–|spelling|Bitte achten Sie auf die Rechtschreibung.|Please pay attention to your spelling.|B
die|Handschrift|die Handschriften|handwriting|Deine Handschrift kann ich leider nicht lesen.|Unfortunately I cannot read your handwriting.|B
das|Niveau|die Niveaus|level|Der Kurs ist für das Niveau B1 geeignet.|The course is suitable for level B1.|B
die|Stufe|die Stufen|level, stage|Nach dem Test kommen Sie in die nächste Stufe.|After the test you move on to the next level.|B
der|Punkt|die Punkte|point, mark|Für diese Aufgabe bekommt man fünf Punkte.|You get five points for this task.|B
der|Durchschnitt|die Durchschnitte|average|Im Durchschnitt lerne ich zwei Stunden pro Tag.|On average I study for two hours a day.|B
die|Begabung|die Begabungen|talent, gift|Sie hat eine besondere Begabung für Sprachen.|She has a special gift for languages.|B
das|Interesse|die Interessen|interest|Er hat großes Interesse an Geschichte.|He has a great interest in history.|B
die|Konzentration|–|concentration|Für diese Aufgabe braucht man viel Konzentration.|You need a lot of concentration for this task.|B
das|Gedächtnis|–|memory|Meine Großmutter hat noch ein sehr gutes Gedächtnis.|My grandmother still has a very good memory.|B
die|Idee|die Ideen|idea|Hast du eine Idee für unser Referat?|Have you got an idea for our presentation?|B
die|Methode|die Methoden|method|Mit dieser Methode lernt man Wörter schneller.|You learn words faster with this method.|B
das|Ziel|die Ziele|goal, aim|Mein Ziel ist es, die Prüfung zu bestehen.|My goal is to pass the exam.|B
die|Vorbereitung|die Vorbereitungen|preparation|Die Vorbereitung auf die Prüfung dauert drei Monate.|Preparation for the exam takes three months.|B
die|Wiederholung|die Wiederholungen|revision, repetition|Am Freitag machen wir eine Wiederholung der Grammatik.|On Friday we are doing a revision of the grammar.|B
die|Teilnahme|–|participation|Die Teilnahme am Kurs ist kostenlos.|Participation in the course is free of charge.|B
der|Schulhof|die Schulhöfe|school playground|In der Pause spielen die Kinder auf dem Schulhof.|At break the children play in the school playground.|B
die|Klassenfahrt|die Klassenfahrten|school trip|Im Mai machen wir eine Klassenfahrt nach Wien.|In May we are going on a school trip to Vienna.|B
die|Physik|–|physics|In Physik hatte ich immer gute Noten.|I always had good marks in physics.|B
der|Taschenrechner|die Taschenrechner|pocket calculator|In der Prüfung darf man keinen Taschenrechner benutzen.|You are not allowed to use a calculator in the exam.|B`],
["Freizeit & Medien","Leisure & media",`die|Freizeit|–|free time|In meiner Freizeit spiele ich Gitarre.|In my free time I play the guitar.|B
der|Verein|die Vereine|club, association|Er spielt Fußball in einem Verein.|He plays football in a club.|B
die|Veranstaltung|die Veranstaltungen|event|Die Veranstaltung findet im Stadtpark statt.|The event takes place in the city park.|B
die|Ausstellung|die Ausstellungen|exhibition|Im Museum gibt es eine neue Ausstellung.|There is a new exhibition at the museum.|B
die|Vorstellung|die Vorstellungen|performance, showing|Die Vorstellung beginnt um acht Uhr.|The performance starts at eight o'clock.|B
die|Eintrittskarte|die Eintrittskarten|admission ticket|Die Eintrittskarte kostet zwölf Euro.|The ticket costs twelve euros.|B
das|Mitglied|die Mitglieder|member|Ich bin Mitglied in einem Sportverein.|I am a member of a sports club.|B
der|Wettbewerb|die Wettbewerbe|competition, contest|Sie hat bei einem Wettbewerb gewonnen.|She won a competition.|B
die|Mannschaft|die Mannschaften|team|Unsere Mannschaft hat zwei zu eins gewonnen.|Our team won two one.|B
das|Spiel|die Spiele|game, match|Das Spiel war bis zum Ende spannend.|The match was exciting right to the end.|B
der|Zuschauer|die Zuschauer|spectator, viewer|Die Zuschauer haben lange geklatscht.|The audience clapped for a long time.|B
die|Sendung|die Sendungen|TV or radio programme|Diese Sendung sehe ich jeden Abend.|I watch this programme every evening.|B
die|Nachricht|die Nachrichten|message, piece of news|Ich habe dir eine Nachricht geschickt.|I sent you a message.|B
die|Zeitschrift|die Zeitschriften|magazine|Im Wartezimmer liegen viele Zeitschriften.|There are lots of magazines in the waiting room.|B
die|Werbung|die Werbungen|advertising|Im Fernsehen kommt zu viel Werbung.|There is too much advertising on TV.|B
der|Bildschirm|die Bildschirme|screen|Ich sitze den ganzen Tag vor dem Bildschirm.|I sit in front of the screen all day.|B
das|Netzwerk|die Netzwerke|network|Viele Leute nutzen soziale Netzwerke.|Many people use social networks.|B
die|Unterhaltung|die Unterhaltungen|entertainment; chat|Der Film bietet gute Unterhaltung.|The film is good entertainment.|B
das|Gespräch|die Gespräche|conversation|Wir haben ein langes Gespräch geführt.|We had a long conversation.|B
die|Einladung|die Einladungen|invitation|Vielen Dank für die Einladung!|Thank you very much for the invitation!|B
das|Fest|die Feste|celebration, party|Zum Fest kamen über hundert Gäste.|More than a hundred guests came to the party.|B
das|Geschenk|die Geschenke|gift, present|Ich suche ein Geschenk für meine Schwester.|I am looking for a present for my sister.|B
die|Stimmung|die Stimmungen|mood, atmosphere|Die Stimmung auf der Party war super.|The atmosphere at the party was great.|B
das|Erlebnis|die Erlebnisse|experience (an event you live through)|Die Reise war ein tolles Erlebnis.|The trip was a great experience.|B
der|Roman|die Romane|novel|Ich lese gerade einen spannenden Roman.|I am reading an exciting novel at the moment.|B
das|Instrument|die Instrumente|instrument|Spielst du ein Instrument?|Do you play an instrument?|B
die|Bühne|die Bühnen|stage|Die Band steht schon auf der Bühne.|The band is already on stage.|B
der|Film|die Filme|film|Der Film hat mir sehr gut gefallen.|I liked the film very much.|A
das|Kino|die Kinos|cinema|Gehen wir heute Abend ins Kino?|Shall we go to the cinema this evening?|A
die|Musik|–|music|Welche Musik hörst du am liebsten?|What music do you like listening to best?|A
das|Lied|die Lieder|song|Dieses Lied höre ich immer im Auto.|I always listen to this song in the car.|A
das|Konzert|die Konzerte|concert|Das Konzert beginnt um acht Uhr.|The concert starts at eight o'clock.|A
das|Theater|die Theater|theatre|Wir gehen einmal im Monat ins Theater.|We go to the theatre once a month.|A
der|Fußball|die Fußbälle|football|Die Kinder spielen im Garten Fußball.|The children are playing football in the garden.|A
das|Schwimmbad|die Schwimmbäder|swimming pool|Im Sommer gehen wir oft ins Schwimmbad.|In summer we often go to the swimming pool.|A
das|Hobby|die Hobbys|hobby|Kochen ist mein liebstes Hobby.|Cooking is my favourite hobby.|A
die|Feier|die Feiern|celebration, party|Die Feier findet in einem Restaurant statt.|The celebration is taking place in a restaurant.|A
das|Weihnachten|–|Christmas|An Weihnachten besuchen wir meine Eltern.|At Christmas we visit my parents.|A
das|Ostern|–|Easter|An Ostern suchen die Kinder Eier im Garten.|At Easter the children look for eggs in the garden.|A
das|Foto|die Fotos|photo|Kannst du bitte ein Foto von uns machen?|Can you take a photo of us, please?|A
die|Kamera|die Kameras|camera|Ich habe meine Kamera im Hotel vergessen.|I left my camera in the hotel.|A
das|Fernsehen|–|television (medium)|Was kommt heute Abend im Fernsehen?|What is on television this evening?|A
das|Radio|die Radios|radio|Morgens höre ich immer Radio.|I always listen to the radio in the morning.|A
die|Zeitung|die Zeitungen|newspaper|Mein Vater liest jeden Morgen die Zeitung.|My father reads the newspaper every morning.|A
das|Internet|–|internet|Ich habe die Wohnung im Internet gefunden.|I found the flat on the internet.|A
der|Laptop|die Laptops|laptop|Ich nehme meinen Laptop mit in den Urlaub.|I am taking my laptop on holiday with me.|A
das|Handy|die Handys|mobile phone|Bitte schalten Sie Ihr Handy aus.|Please switch off your mobile phone.|A
die|SMS|die SMS|text message|Schreib mir eine SMS, wenn du ankommst.|Send me a text when you arrive.|A
das|Video|die Videos|video|Im Internet gibt es viele Videos zum Deutschlernen.|There are many videos for learning German on the internet.|A
das|Programm|die Programme|programme, program|Das Programm für das Fest ist schon fertig.|The programme for the festival is already finished.|A
die|Gitarre|die Gitarren|guitar|Mein Bruder spielt seit zehn Jahren Gitarre.|My brother has played the guitar for ten years.|A
das|Klavier|die Klaviere|piano|Sie lernt seit einem Jahr Klavier.|She has been learning the piano for a year.|A
der|Tanz|die Tänze|dance|Dieser Tanz kommt aus Südamerika.|This dance comes from South America.|A
das|Wochenende|die Wochenenden|weekend|Was machst du am Wochenende?|What are you doing at the weekend?|A
der|Spieler|die Spieler|player|Der Spieler hat sich am Bein verletzt.|The player has injured his leg.|A
der|Sportler|die Sportler|sportsman, athlete|Der Sportler trainiert jeden Tag vier Stunden.|The athlete trains for four hours every day.|B
der|Trainer|die Trainer|coach, trainer|Der Trainer ist mit der Mannschaft sehr zufrieden.|The coach is very pleased with the team.|B
der|Sieg|die Siege|victory|Die Fans feiern den Sieg ihrer Mannschaft.|The fans are celebrating their team's victory.|B
die|Niederlage|die Niederlagen|defeat|Nach der Niederlage waren alle Spieler traurig.|After the defeat all the players were sad.|B
die|Meisterschaft|die Meisterschaften|championship|Unser Verein hat die Meisterschaft gewonnen.|Our club has won the championship.|B
das|Tor|die Tore|goal (sport)|Er hat in der letzten Minute ein Tor geschossen.|He scored a goal in the last minute.|B
der|Schiedsrichter|die Schiedsrichter|referee|Der Schiedsrichter hat das Spiel beendet.|The referee ended the match.|B
der|Fan|die Fans|fan, supporter|Die Fans warten vor dem Stadion.|The fans are waiting outside the stadium.|B
das|Stadion|die Stadien|stadium|Das Stadion war am Samstag ganz voll.|The stadium was completely full on Saturday.|B
die|Sportart|die Sportarten|type of sport|Welche Sportart gefällt dir am besten?|Which sport do you like best?|B
die|Wanderung|die Wanderungen|hike|Am Sonntag machen wir eine Wanderung in den Bergen.|On Sunday we are going on a hike in the mountains.|B
die|Kultur|die Kulturen|culture|Ich interessiere mich für andere Kulturen.|I am interested in other cultures.|B
der|Eintritt|–|admission, entry|Der Eintritt ist für Kinder frei.|Admission is free for children.|B
der|Schauspieler|die Schauspieler|actor|Der Schauspieler ist durch diesen Film berühmt geworden.|The actor became famous through this film.|B
die|Rolle|die Rollen|role, part|Sie spielt die wichtigste Rolle in dem Film.|She plays the most important part in the film.|B
das|Theaterstück|die Theaterstücke|play (theatre)|Das Theaterstück war lustig und spannend.|The play was funny and exciting.|B
die|Oper|die Opern|opera|Meine Eltern gehen gern in die Oper.|My parents like going to the opera.|B
das|Orchester|die Orchester|orchestra|Er spielt Geige in einem Orchester.|He plays the violin in an orchestra.|B
die|Band|die Bands|band (music)|Die Band spielt heute Abend in unserer Stadt.|The band is playing in our town this evening.|B
das|Publikum|–|audience|Das Publikum hat lange geklatscht.|The audience clapped for a long time.|B
der|Glückwunsch|die Glückwünsche|congratulations|Herzlichen Glückwunsch zum Geburtstag!|Many happy returns on your birthday!|B
die|Tradition|die Traditionen|tradition|Dieses Fest hat eine lange Tradition.|This festival has a long tradition.|B
das|Feuerwerk|die Feuerwerke|fireworks|Um Mitternacht gab es ein großes Feuerwerk.|At midnight there was a big firework display.|B
der|Autor|die Autoren|author|Der Autor liest heute aus seinem neuen Buch.|The author is reading from his new book today.|B
das|Gedicht|die Gedichte|poem|Die Schüler müssen ein Gedicht auswendig lernen.|The pupils have to learn a poem by heart.|B
die|Literatur|die Literaturen|literature|Sie liest gern deutsche Literatur.|She likes reading German literature.|B
der|Krimi|die Krimis|crime novel, thriller|Am Sonntagabend sehen wir immer einen Krimi.|On Sunday evening we always watch a crime drama.|B
das|Märchen|die Märchen|fairy tale|Als Kind habe ich gern Märchen gehört.|As a child I liked listening to fairy tales.|B
der|Titel|die Titel|title|Ich habe den Titel von dem Buch vergessen.|I have forgotten the title of the book.|B
die|Presse|–|press|Die Presse hat viel über das Thema berichtet.|The press reported a lot on the subject.|B
der|Bericht|die Berichte|report|Im Radio kam ein Bericht über unsere Stadt.|There was a report about our town on the radio.|B
das|Interview|die Interviews|interview|Die Sängerin hat der Zeitung ein Interview gegeben.|The singer gave the newspaper an interview.|B
der|Kommentar|die Kommentare|comment|Unter dem Video stehen viele Kommentare.|There are many comments under the video.|B
die|Medien|nur Plural|media|Die Medien berichten jeden Tag über das Wetter.|The media report on the weather every day.|B
der|Sender|die Sender|channel, station|Auf welchem Sender läuft das Fußballspiel?|Which channel is the football match on?|B
die|Serie|die Serien|series|Ich schaue diese Serie jeden Abend.|I watch this series every evening.|B
der|Moderator|die Moderatoren|presenter, host|Der Moderator begrüßt die Gäste im Studio.|The presenter welcomes the guests in the studio.|B
die|Internetseite|die Internetseiten|website|Die Preise stehen auf unserer Internetseite.|The prices are on our website.|B
der|Link|die Links|link|Ich schicke dir den Link per E-Mail.|I will send you the link by email.|B
das|Passwort|die Passwörter|password|Ich habe schon wieder mein Passwort vergessen.|I have forgotten my password yet again.|B
die|Datei|die Dateien|file (computer)|Ich kann die Datei leider nicht öffnen.|Unfortunately I cannot open the file.|B
die|Tastatur|die Tastaturen|keyboard (computer)|Die Tastatur von meinem Laptop ist kaputt.|The keyboard of my laptop is broken.|B
die|App|die Apps|app|Mit dieser App lerne ich jeden Tag Deutsch.|I learn German every day with this app.|B
der|Akku|die Akkus|rechargeable battery|Der Akku von meinem Handy ist fast leer.|My phone battery is almost empty.|B
die|Technik|die Techniken|technology, technique|Mein Opa interessiert sich sehr für Technik.|My grandad is very interested in technology.|B
der|Kopfhörer|die Kopfhörer|headphones|Im Zug höre ich Musik mit Kopfhörern.|On the train I listen to music with headphones.|B`],
["Einkaufen & Geld","Shopping & money",`das|Angebot|die Angebote|offer|Heute gibt es Äpfel im Angebot.|Apples are on offer today.|B
die|Nachfrage|die Nachfragen|demand|Die Nachfrage nach Fahrrädern ist gestiegen.|Demand for bicycles has risen.|B
der|Preis|die Preise|price|Der Preis ist in Ordnung.|The price is fine.|B
die|Rechnung|die Rechnungen|bill, invoice|Die Rechnung, bitte!|The bill, please!|B
die|Quittung|die Quittungen|receipt|Brauchen Sie eine Quittung?|Do you need a receipt?|B
der|Rabatt|die Rabatte|discount|Studenten bekommen zehn Prozent Rabatt.|Students get a ten percent discount.|B
die|Ware|die Waren|goods, product|Die Ware wird morgen geliefert.|The goods will be delivered tomorrow.|B
die|Qualität|die Qualitäten|quality|Die Qualität dieser Schuhe ist sehr gut.|The quality of these shoes is very good.|B
die|Garantie|die Garantien|guarantee|Auf das Gerät gibt es zwei Jahre Garantie.|The appliance comes with a two-year guarantee.|B
der|Umtausch|–|exchange (of goods)|Ein Umtausch ist nur mit Quittung möglich.|An exchange is only possible with a receipt.|B
die|Reklamation|die Reklamationen|complaint (about a product)|Für Ihre Reklamation gehen Sie bitte zum Kundendienst.|For your complaint please go to customer service.|B
der|Kunde|die Kunden|customer|Der Kunde möchte sein Geld zurück.|The customer wants his money back.|B
die|Kasse|die Kassen|checkout, till|Bitte zahlen Sie an der Kasse.|Please pay at the till.|B
das|Bargeld|–|cash|Ich habe leider kein Bargeld dabei.|Unfortunately I have no cash on me.|B
das|Konto|die Konten|bank account|Ich möchte ein Konto eröffnen.|I would like to open an account.|B
die|Überweisung|die Überweisungen|bank transfer|Die Überweisung dauert einen Tag.|The transfer takes one day.|B
der|Kredit|die Kredite|loan|Für das Haus haben wir einen Kredit aufgenommen.|We took out a loan for the house.|B
der|Zins|die Zinsen|interest (on money)|Die Zinsen sind im Moment hoch.|Interest rates are high at the moment.|B
die|Ausgabe|die Ausgaben|expense|Unsere Ausgaben für Lebensmittel sind gestiegen.|Our spending on food has gone up.|B
das|Einkommen|die Einkommen|income|Sein Einkommen reicht für die Familie.|His income is enough for the family.|B
die|Lieferung|die Lieferungen|delivery|Die Lieferung ist kostenlos.|Delivery is free.|B
die|Bestellung|die Bestellungen|order|Ihre Bestellung ist angekommen.|Your order has arrived.|B
das|Paket|die Pakete|parcel|Das Paket liegt bei der Nachbarin.|The parcel is with the neighbour.|B
die|Größe|die Größen|size|Haben Sie die Hose eine Größe kleiner?|Do you have the trousers one size smaller?|B
das|Geschäft|die Geschäfte|shop; business|Das Geschäft schließt um zwanzig Uhr.|The shop closes at 8 pm.|B
der|Geldautomat|die Geldautomaten|cash machine|Wo ist der nächste Geldautomat?|Where is the nearest cash machine?|B
die|Währung|die Währungen|currency|Der Euro ist die Währung in vielen Ländern.|The euro is the currency in many countries.|B
das|Sonderangebot|die Sonderangebote|special offer|Dieses Sonderangebot gilt nur heute.|This special offer is valid today only.|B
das|Geld|–|money|Ich habe kein Geld dabei.|I have no money on me.|A
der|Euro|die Euros|euro|Das Brot kostet drei Euro.|The bread costs three euros.|A
der|Cent|die Cents|cent|Mir fehlen noch zwanzig Cent.|I am still twenty cents short.|A
der|Supermarkt|die Supermärkte|supermarket|Der Supermarkt hat bis 22 Uhr geöffnet.|The supermarket is open until 10 pm.|A
der|Markt|die Märkte|market|Samstags kaufe ich Gemüse auf dem Markt.|On Saturdays I buy vegetables at the market.|A
der|Laden|die Läden|shop|Der kleine Laden an der Ecke schließt bald.|The little shop on the corner is closing soon.|A
das|Kaufhaus|die Kaufhäuser|department store|Im Kaufhaus findet man fast alles.|You can find almost everything in the department store.|A
die|Bäckerei|die Bäckereien|bakery|Ich hole schnell Brötchen in der Bäckerei.|I will quickly get some rolls from the bakery.|A
die|Metzgerei|die Metzgereien|butcher's|In dieser Metzgerei ist das Fleisch sehr frisch.|The meat is very fresh at this butcher's.|A
die|Buchhandlung|die Buchhandlungen|bookshop|Ich habe das Buch in der Buchhandlung bestellt.|I ordered the book at the bookshop.|A
der|Kiosk|die Kioske|kiosk|Am Kiosk kaufe ich mir eine Zeitung.|I buy myself a newspaper at the kiosk.|A
die|Bank|die Banken|bank|Ich muss heute noch zur Bank gehen.|I still have to go to the bank today.|A
die|Tasche|die Taschen|bag|Ich habe meine Tasche im Laden vergessen.|I left my bag in the shop.|A
die|Tüte|die Tüten|carrier bag|Brauchen Sie eine Tüte?|Do you need a bag?|A
die|Kleidung|–|clothing, clothes|Für den Winter brauche ich warme Kleidung.|I need warm clothes for the winter.|A
die|Hose|die Hosen|trousers|Die Hose ist mir leider zu eng.|Unfortunately the trousers are too tight for me.|A
das|Hemd|die Hemden|shirt|Zum Anzug trägt er ein weißes Hemd.|He wears a white shirt with his suit.|A
die|Bluse|die Blusen|blouse|Haben Sie diese Bluse auch in Blau?|Do you have this blouse in blue as well?|A
der|Rock|die Röcke|skirt|Der Rock passt gut zu deiner Jacke.|The skirt goes well with your jacket.|A
das|Kleid|die Kleider|dress|Für die Hochzeit kaufe ich ein neues Kleid.|I am buying a new dress for the wedding.|A
die|Jacke|die Jacken|jacket|Zieh eine Jacke an, es ist kalt draußen.|Put a jacket on, it is cold outside.|A
der|Mantel|die Mäntel|coat|Dieser Mantel ist warm, aber sehr teuer.|This coat is warm but very expensive.|A
der|Pullover|die Pullover|jumper|Der Pullover ist beim Waschen kleiner geworden.|The jumper shrank in the wash.|A
das|T-Shirt|die T-Shirts|T-shirt|Im Sommer trage ich meistens T-Shirts.|In summer I mostly wear T-shirts.|A
der|Schuh|die Schuhe|shoe|Die Schuhe sind bequem, aber nicht billig.|The shoes are comfortable but not cheap.|A
die|Socke|die Socken|sock|Ich finde nur noch eine Socke.|I can only find one sock.|A
die|Mütze|die Mützen|cap, woolly hat|Im Winter trägt sie immer eine Mütze.|In winter she always wears a woolly hat.|A
der|Schal|die Schals|scarf|Ich habe meiner Mutter einen Schal geschenkt.|I gave my mother a scarf as a present.|A
der|Handschuh|die Handschuhe|glove|Ich habe einen Handschuh im Bus verloren.|I lost a glove on the bus.|A
die|Jeans|die Jeans|jeans|Diese Jeans gibt es auch in Schwarz.|These jeans are also available in black.|A
der|Anzug|die Anzüge|suit|Für das Vorstellungsgespräch braucht er einen Anzug.|He needs a suit for the job interview.|A
die|Brille|die Brillen|glasses|Ich brauche eine neue Brille zum Lesen.|I need new glasses for reading.|A
das|Portemonnaie|die Portemonnaies|purse, wallet|Ich habe mein Portemonnaie zu Hause vergessen.|I left my wallet at home.|A
der|Gürtel|die Gürtel|belt|Zu dieser Hose brauche ich einen Gürtel.|I need a belt with these trousers.|A
die|Kreditkarte|die Kreditkarten|credit card|Kann ich mit Kreditkarte bezahlen?|Can I pay by credit card?|A
der|Einkauf|die Einkäufe|shopping, purchase|Ich erledige meine Einkäufe meistens am Samstag.|I usually do my shopping on Saturday.|A
die|Flasche|die Flaschen|bottle|Bring bitte zwei Flaschen Wasser mit.|Please bring two bottles of water.|A
die|Packung|die Packungen|packet, pack|Ich nehme noch eine Packung Kaffee.|I will take another packet of coffee.|A
das|Stück|die Stücke|piece|Ich hätte gern zwei Stück Kuchen.|I would like two pieces of cake.|A
die|Farbe|die Farben|colour|Welche Farbe gefällt dir am besten?|Which colour do you like best?|A
die|Post|–|post office; post|Ich bringe das Paket heute zur Post.|I am taking the parcel to the post office today.|A
die|Briefmarke|die Briefmarken|stamp|Ich brauche eine Briefmarke für diesen Brief.|I need a stamp for this letter.|A
das|Lebensmittel|die Lebensmittel|food, groceries|Lebensmittel sind in letzter Zeit teurer geworden.|Food has become more expensive recently.|A
der|Regenschirm|die Regenschirme|umbrella|Nimm lieber einen Regenschirm mit.|You had better take an umbrella with you.|A
das|Trinkgeld|die Trinkgelder|tip|Wir haben dem Kellner zwei Euro Trinkgeld gegeben.|We gave the waiter a two-euro tip.|B
die|Öffnungszeit|die Öffnungszeiten|opening hours|Die Öffnungszeiten stehen an der Tür.|The opening hours are on the door.|B
das|Einkaufszentrum|die Einkaufszentren|shopping centre|Am Stadtrand wurde ein neues Einkaufszentrum eröffnet.|A new shopping centre has opened on the edge of town.|B
die|Drogerie|die Drogerien|chemist's (non-pharmacy)|Shampoo und Seife kaufe ich in der Drogerie.|I buy shampoo and soap at the chemist's.|B
der|Flohmarkt|die Flohmärkte|flea market|Auf dem Flohmarkt findet man günstige Möbel.|You can find cheap furniture at the flea market.|B
der|Onlineshop|die Onlineshops|online shop|Im Onlineshop war die Jacke billiger.|The jacket was cheaper in the online shop.|B
das|Schaufenster|die Schaufenster|shop window|Ich habe den Mantel im Schaufenster gesehen.|I saw the coat in the shop window.|B
die|Umkleidekabine|die Umkleidekabinen|fitting room|Die Umkleidekabinen sind dort hinten links.|The fitting rooms are back there on the left.|B
der|Einkaufswagen|die Einkaufswagen|shopping trolley|Für den Einkaufswagen braucht man einen Euro.|You need one euro for the shopping trolley.|B
die|Auswahl|–|selection, choice|Das Geschäft hat eine große Auswahl an Schuhen.|The shop has a large selection of shoes.|B
die|Marke|die Marken|brand|Diese Marke ist bei Jugendlichen sehr beliebt.|This brand is very popular with young people.|B
der|Artikel|die Artikel|item, article|Dieser Artikel ist leider ausverkauft.|Unfortunately this item is sold out.|B
die|Verpackung|die Verpackungen|packaging|Die Verpackung war bei der Lieferung beschädigt.|The packaging was damaged on delivery.|B
das|Preisschild|die Preisschilder|price tag|An der Hose hängt kein Preisschild.|There is no price tag on the trousers.|B
der|Kassenzettel|die Kassenzettel|till receipt|Ohne Kassenzettel können wir nichts umtauschen.|We cannot exchange anything without a till receipt.|B
der|Gutschein|die Gutscheine|voucher|Zum Geburtstag habe ich einen Gutschein bekommen.|I got a voucher for my birthday.|B
der|Schlussverkauf|die Schlussverkäufe|end-of-season sale|Im Schlussverkauf ist vieles um die Hälfte reduziert.|In the end-of-season sale many things are half price.|B
die|Ermäßigung|die Ermäßigungen|reduction, discount|Studenten bekommen hier eine Ermäßigung.|Students get a discount here.|B
das|Schnäppchen|die Schnäppchen|bargain|Die Schuhe waren ein echtes Schnäppchen.|The shoes were a real bargain.|B
die|Mehrwertsteuer|–|value added tax|Der Preis ist inklusive Mehrwertsteuer.|The price includes value added tax.|B
die|Kosten|nur Plural|costs|Die Kosten für die Reparatur sind sehr hoch.|The costs of the repair are very high.|B
der|Betrag|die Beträge|amount|Bitte überweisen Sie den Betrag bis Freitag.|Please transfer the amount by Friday.|B
die|Summe|die Summen|sum, total|Das ist eine große Summe für ein Fahrrad.|That is a large sum for a bicycle.|B
die|Zahlung|die Zahlungen|payment|Die Zahlung ist auch in Raten möglich.|Payment is also possible in instalments.|B
die|Rate|die Raten|instalment|Wir bezahlen das Auto in monatlichen Raten.|We are paying for the car in monthly instalments.|B
die|Mahnung|die Mahnungen|payment reminder|Ich habe eine Mahnung vom Onlineshop bekommen.|I received a payment reminder from the online shop.|B
die|Schulden|nur Plural|debts|Er hat hohe Schulden bei der Bank.|He has large debts with the bank.|B
das|Wechselgeld|–|change (money back)|Sie haben Ihr Wechselgeld vergessen!|You have forgotten your change!|B
die|Münze|die Münzen|coin|Der Automat nimmt nur Münzen.|The machine only takes coins.|B
der|Geldschein|die Geldscheine|banknote|Der Automat nimmt keine Geldscheine an.|The machine does not accept banknotes.|B
das|Kleingeld|–|small change|Hast du Kleingeld für den Parkautomaten?|Do you have small change for the parking machine?|B
die|Bankkarte|die Bankkarten|bank card|Ich habe meine Bankkarte verloren.|I have lost my bank card.|B
die|Geheimzahl|die Geheimzahlen|PIN|Geben Sie bitte Ihre Geheimzahl ein.|Please enter your PIN.|B
das|Girokonto|die Girokonten|current account|Ich möchte ein Girokonto eröffnen.|I would like to open a current account.|B
der|Kontoauszug|die Kontoauszüge|bank statement|Ich prüfe jeden Monat meine Kontoauszüge.|I check my bank statements every month.|B
der|Dauerauftrag|die Daueraufträge|standing order|Die Miete bezahle ich per Dauerauftrag.|I pay the rent by standing order.|B
die|Filiale|die Filialen|branch|Die Bank schließt ihre Filiale in unserem Viertel.|The bank is closing its branch in our district.|B
die|Ersparnisse|nur Plural|savings|Sie hat das Auto von ihren Ersparnissen gekauft.|She bought the car out of her savings.|B
der|Wert|die Werte|value|Der Ring hat einen Wert von 500 Euro.|The ring has a value of 500 euros.|B
der|Kauf|die Käufe|purchase|Vor dem Kauf sollte man die Preise vergleichen.|You should compare prices before making a purchase.|B
der|Verkauf|die Verkäufe|sale|Der Verkauf der Karten beginnt am Montag.|The sale of the tickets begins on Monday.|B
der|Käufer|die Käufer|buyer|Wir haben schnell einen Käufer für das Auto gefunden.|We quickly found a buyer for the car.|B
der|Händler|die Händler|dealer, retailer|Ich habe das Fahrrad bei einem Händler gekauft.|I bought the bicycle from a dealer.|B
der|Hersteller|die Hersteller|manufacturer|Der Hersteller gibt zwei Jahre Garantie.|The manufacturer gives a two-year guarantee.|B
die|Versandkosten|nur Plural|delivery charges|Ab 50 Euro bezahlt man keine Versandkosten.|From 50 euros you pay no delivery charges.|B
die|Rücksendung|die Rücksendungen|return (of goods)|Die Rücksendung der Ware ist kostenlos.|Returning the goods is free of charge.|B
der|Mangel|die Mängel|defect, fault|Das Gerät hatte von Anfang an einen Mangel.|The appliance had a defect from the start.|B
die|Beschwerde|die Beschwerden|complaint|Ich habe eine Beschwerde an die Firma geschrieben.|I wrote a complaint to the company.|B
der|Kundendienst|die Kundendienste|customer service|Rufen Sie bitte den Kundendienst an.|Please ring customer service.|B
die|Reinigung|die Reinigungen|dry cleaner's|Ich muss meinen Anzug in die Reinigung bringen.|I have to take my suit to the dry cleaner's.|B
das|Abonnement|die Abonnements|subscription|Ich möchte mein Abonnement kündigen.|I would like to cancel my subscription.|B
das|Muster|die Muster|pattern|Das Muster auf dem Kleid gefällt mir nicht.|I do not like the pattern on the dress.|B
der|Stoff|die Stoffe|fabric, material|Der Stoff fühlt sich sehr weich an.|The fabric feels very soft.|B
die|Baumwolle|–|cotton|Das Hemd ist aus reiner Baumwolle.|The shirt is made of pure cotton.|B
der|Schmuck|–|jewellery|Sie trägt nur selten Schmuck.|She only rarely wears jewellery.|B
der|Knopf|die Knöpfe|button|An meiner Jacke fehlt ein Knopf.|A button is missing from my jacket.|B
die|Mode|die Moden|fashion|Sie interessiert sich sehr für Mode.|She is very interested in fashion.|B
die|Schlange|die Schlangen|queue|An der Kasse war eine lange Schlange.|There was a long queue at the till.|B
das|Pfand|–|deposit (on bottles)|Auf diese Flaschen bezahlt man Pfand.|You pay a deposit on these bottles.|B
das|Kleidungsstück|die Kleidungsstücke|item of clothing|Dieses Kleidungsstück darf man nicht heiß waschen.|This item of clothing must not be washed hot.|B`],
["Umwelt & Natur","Environment & nature",`die|Umwelt|–|environment|Wir müssen die Umwelt schützen.|We must protect the environment.|B
der|Umweltschutz|–|environmental protection|Umweltschutz beginnt zu Hause.|Environmental protection starts at home.|B
das|Klima|–|climate|Das Klima hier ist mild.|The climate here is mild.|B
der|Klimawandel|–|climate change|Der Klimawandel betrifft alle Länder.|Climate change affects every country.|B
die|Luft|–|air|Die Luft in den Bergen ist frisch.|The air in the mountains is fresh.|B
die|Verschmutzung|die Verschmutzungen|pollution|Die Verschmutzung der Meere nimmt zu.|Pollution of the seas is increasing.|B
der|Abfall|die Abfälle|waste|Bitte werfen Sie keinen Abfall auf den Boden.|Please do not throw any waste on the ground.|B
die|Mülltrennung|–|waste separation|In Deutschland ist Mülltrennung normal.|Separating waste is normal in Germany.|B
die|Energie|die Energien|energy|Wir sollten mehr Energie sparen.|We should save more energy.|B
die|Landschaft|die Landschaften|landscape|Die Landschaft im Norden ist flach.|The landscape in the north is flat.|B
das|Gebirge|die Gebirge|mountain range|Im Gebirge liegt noch Schnee.|There is still snow in the mountains.|B
der|Wald|die Wälder|forest|Wir gehen oft im Wald spazieren.|We often go for walks in the forest.|B
die|Wiese|die Wiesen|meadow|Die Kinder spielen auf der Wiese.|The children are playing in the meadow.|B
das|Ufer|die Ufer|bank, shore|Wir sitzen am Ufer des Flusses.|We are sitting on the river bank.|B
die|Küste|die Küsten|coast|An der Küste weht immer Wind.|There is always a wind on the coast.|B
die|Insel|die Inseln|island|Wir machen Urlaub auf einer kleinen Insel.|We are on holiday on a small island.|B
die|Pflanze|die Pflanzen|plant|Diese Pflanze braucht viel Wasser.|This plant needs a lot of water.|B
das|Tier|die Tiere|animal|Im Zoo leben Tiere aus aller Welt.|Animals from all over the world live in the zoo.|B
die|Ernte|die Ernten|harvest|Die Ernte war dieses Jahr gut.|The harvest was good this year.|B
der|Bauernhof|die Bauernhöfe|farm|Meine Großeltern haben einen Bauernhof.|My grandparents have a farm.|B
das|Gewitter|die Gewitter|thunderstorm|Heute Abend gibt es ein Gewitter.|There will be a thunderstorm this evening.|B
der|Sturm|die Stürme|storm|Der Sturm hat viele Bäume beschädigt.|The storm damaged many trees.|B
die|Hitze|–|heat|Bei dieser Hitze bleibe ich zu Hause.|In this heat I am staying at home.|B
die|Kälte|–|cold (temperature)|Die Kälte macht mir nichts aus.|The cold does not bother me.|B
der|Wetterbericht|die Wetterberichte|weather forecast|Laut Wetterbericht regnet es morgen.|According to the forecast it will rain tomorrow.|B
die|Jahreszeit|die Jahreszeiten|season|Der Herbst ist meine liebste Jahreszeit.|Autumn is my favourite season.|B
das|Hochwasser|die Hochwasser|flood|Nach dem Regen gab es Hochwasser.|After the rain there was flooding.|B
der|Schatten|die Schatten|shade, shadow|Setzen wir uns in den Schatten.|Let's sit in the shade.|B
der|Baum|die Bäume|tree|Vor dem Haus steht ein alter Baum.|There is an old tree in front of the house.|A
die|Blume|die Blumen|flower|Im Garten wachsen viele bunte Blumen.|Many colourful flowers grow in the garden.|A
die|Sonne|die Sonnen|sun|Heute scheint den ganzen Tag die Sonne.|The sun is shining all day today.|A
der|Regen|–|rain|Wir sind trotz des Regens spazieren gegangen.|We went for a walk despite the rain.|A
der|Schnee|–|snow|In den Bergen liegt schon viel Schnee.|There is already a lot of snow in the mountains.|A
der|Wind|die Winde|wind|An der Küste weht oft ein starker Wind.|A strong wind often blows on the coast.|A
das|Wetter|–|weather|Bei schönem Wetter essen wir draußen.|When the weather is nice we eat outside.|A
der|Himmel|–|sky|Der Himmel ist heute ganz blau.|The sky is completely blue today.|A
die|Wolke|die Wolken|cloud|Am Himmel sind dunkle Wolken.|There are dark clouds in the sky.|A
der|Berg|die Berge|mountain|Wir wandern am Wochenende in den Bergen.|We are going hiking in the mountains at the weekend.|A
das|Meer|die Meere|sea|Ich möchte im Sommer ans Meer fahren.|I would like to go to the sea in summer.|A
der|See|die Seen|lake|Im Sommer schwimmen wir oft im See.|In summer we often swim in the lake.|A
der|Fluss|die Flüsse|river|Der Rhein ist ein sehr langer Fluss.|The Rhine is a very long river.|A
das|Wasser|–|water|Das Wasser im See ist noch sehr kalt.|The water in the lake is still very cold.|A
der|Hund|die Hunde|dog|Ich gehe jeden Morgen mit dem Hund spazieren.|I walk the dog every morning.|A
die|Katze|die Katzen|cat|Unsere Katze schläft am liebsten auf dem Sofa.|Our cat likes sleeping on the sofa best.|A
der|Vogel|die Vögel|bird|Am Morgen höre ich die Vögel singen.|In the morning I hear the birds singing.|A
das|Pferd|die Pferde|horse|Meine Tochter möchte ein Pferd haben.|My daughter would like to have a horse.|A
die|Kuh|die Kühe|cow|Auf der Wiese stehen zwanzig Kühe.|There are twenty cows in the meadow.|A
der|Fisch|die Fische|fish|In diesem Fluss leben wieder viele Fische.|Many fish live in this river again.|A
das|Schwein|die Schweine|pig|Der Bauer hat Kühe und Schweine.|The farmer has cows and pigs.|A
die|Maus|die Mäuse|mouse|Die Katze hat eine Maus gefangen.|The cat has caught a mouse.|A
das|Huhn|die Hühner|chicken, hen|Unsere Nachbarn haben Hühner im Garten.|Our neighbours keep chickens in the garden.|A
der|Frühling|die Frühlinge|spring|Im Frühling wird alles wieder grün.|In spring everything turns green again.|A
der|Sommer|die Sommer|summer|Der letzte Sommer war sehr heiß.|Last summer was very hot.|A
der|Herbst|die Herbste|autumn|Im Herbst fallen die Blätter von den Bäumen.|In autumn the leaves fall from the trees.|A
der|Winter|die Winter|winter|Im Winter wird es früh dunkel.|In winter it gets dark early.|A
die|Natur|–|nature|Am Wochenende bin ich gern in der Natur.|At the weekend I like being out in nature.|A
der|Stern|die Sterne|star|In der Nacht sieht man hier viele Sterne.|At night you can see many stars here.|A
der|Mond|die Monde|moon|Heute Nacht scheint der Mond sehr hell.|The moon is shining very brightly tonight.|A
die|Erde|–|earth, soil|Wir müssen die Erde besser schützen.|We must protect the earth better.|A
das|Feuer|die Feuer|fire|Im Wald darf man kein Feuer machen.|You are not allowed to light a fire in the forest.|A
der|Stein|die Steine|stone|Die Kinder werfen Steine ins Wasser.|The children are throwing stones into the water.|A
das|Holz|die Hölzer|wood (material)|Der Tisch ist aus Holz.|The table is made of wood.|A
das|Gras|die Gräser|grass|Die Kinder liegen im Gras und lesen.|The children are lying in the grass reading.|A
das|Feld|die Felder|field|Der Bauer arbeitet schon früh auf dem Feld.|The farmer is already working in the field early.|A
das|Eis|–|ice|Vorsicht, auf der Straße ist Eis!|Careful, there is ice on the road!|A
die|Temperatur|die Temperaturen|temperature|Die Temperaturen steigen morgen auf dreißig Grad.|Temperatures will rise to thirty degrees tomorrow.|A
das|Grad|die Grade|degree|Heute sind es nur fünf Grad.|It is only five degrees today.|A
die|Rose|die Rosen|rose|Er hat ihr rote Rosen geschenkt.|He gave her red roses.|A
das|Blatt|die Blätter|leaf|Die Blätter werden im Herbst gelb und rot.|The leaves turn yellow and red in autumn.|A
der|Park|die Parks|park|Mittags gehe ich oft im Park spazieren.|At lunchtime I often go for a walk in the park.|A
der|Sand|–|sand|Die Kinder spielen im Sand.|The children are playing in the sand.|A
der|Nebel|die Nebel|fog|Bei Nebel muss man langsam fahren.|In fog you have to drive slowly.|B
der|Blitz|die Blitze|lightning|Der Blitz hat in einen Baum eingeschlagen.|The lightning struck a tree.|B
der|Donner|–|thunder|Mein Hund hat Angst vor dem Donner.|My dog is afraid of thunder.|B
der|Schauer|die Schauer|shower (rain)|Am Nachmittag gibt es einzelne Schauer.|There will be scattered showers in the afternoon.|B
die|Wettervorhersage|die Wettervorhersagen|weather forecast|Die Wettervorhersage für morgen ist leider schlecht.|Unfortunately the weather forecast for tomorrow is bad.|B
die|Überschwemmung|die Überschwemmungen|flood|Nach dem starken Regen gab es eine Überschwemmung.|After the heavy rain there was a flood.|B
das|Erdbeben|die Erdbeben|earthquake|Bei dem Erdbeben wurden viele Häuser zerstört.|Many houses were destroyed in the earthquake.|B
die|Katastrophe|die Katastrophen|disaster|Das Hochwasser war eine Katastrophe für die Region.|The flood was a disaster for the region.|B
der|Waldbrand|die Waldbrände|forest fire|Wegen der Trockenheit gibt es viele Waldbrände.|Because of the drought there are many forest fires.|B
das|Tal|die Täler|valley|Das Dorf liegt in einem grünen Tal.|The village lies in a green valley.|B
der|Hügel|die Hügel|hill|Auf dem Hügel steht eine kleine Kirche.|There is a small church on the hill.|B
der|Gipfel|die Gipfel|summit, peak|Nach vier Stunden waren wir auf dem Gipfel.|After four hours we were on the summit.|B
der|Bach|die Bäche|stream|Hinter unserem Haus fließt ein kleiner Bach.|A small stream flows behind our house.|B
die|Wüste|die Wüsten|desert|In der Wüste regnet es fast nie.|It almost never rains in the desert.|B
der|Ozean|die Ozeane|ocean|In den Ozeanen schwimmt zu viel Plastik.|There is too much plastic floating in the oceans.|B
die|Welle|die Wellen|wave|Heute sind die Wellen zu hoch zum Schwimmen.|Today the waves are too high for swimming.|B
die|Gegend|die Gegenden|area, region|In dieser Gegend gibt es viele Seen.|There are many lakes in this area.|B
der|Planet|die Planeten|planet|Wir haben nur diesen einen Planeten.|We only have this one planet.|B
das|Insekt|die Insekten|insect|Viele Insekten sind wichtig für die Pflanzen.|Many insects are important for plants.|B
die|Biene|die Bienen|bee|Ohne Bienen gibt es weniger Obst.|Without bees there is less fruit.|B
die|Mücke|die Mücken|mosquito|Am See gibt es abends viele Mücken.|There are lots of mosquitoes by the lake in the evening.|B
der|Schmetterling|die Schmetterlinge|butterfly|Auf der Wiese fliegen bunte Schmetterlinge.|Colourful butterflies are flying over the meadow.|B
die|Spinne|die Spinnen|spider|Meine Schwester hat große Angst vor Spinnen.|My sister is very afraid of spiders.|B
der|Bär|die Bären|bear|Im Zoo haben wir zwei junge Bären gesehen.|We saw two young bears at the zoo.|B
der|Wolf|die Wölfe|wolf|In dieser Region leben wieder Wölfe.|Wolves are living in this region again.|B
der|Fuchs|die Füchse|fox|Nachts kommt manchmal ein Fuchs in unseren Garten.|A fox sometimes comes into our garden at night.|B
der|Hase|die Hasen|hare|Auf dem Feld sitzt ein Hase.|There is a hare sitting in the field.|B
das|Schaf|die Schafe|sheep|Auf dem Hügel stehen viele Schafe.|There are many sheep on the hill.|B
die|Ente|die Enten|duck|Die Kinder beobachten die Enten am Teich.|The children are watching the ducks at the pond.|B
der|Zoo|die Zoos|zoo|Am Sonntag gehen wir mit den Kindern in den Zoo.|On Sunday we are going to the zoo with the children.|B
die|Blüte|die Blüten|blossom, flower|Die Blüten des Apfelbaums sind weiß.|The blossoms of the apple tree are white.|B
das|Getreide|–|grain, cereals|Auf diesen Feldern wächst Getreide.|Grain grows in these fields.|B
der|Pilz|die Pilze|mushroom|Im Herbst sammeln wir Pilze im Wald.|In autumn we pick mushrooms in the forest.|B
der|Rasen|die Rasen|lawn|Am Samstag muss ich den Rasen mähen.|On Saturday I have to mow the lawn.|B
das|Metall|die Metalle|metal|Dieser Stuhl ist aus Metall.|This chair is made of metal.|B
das|Gold|–|gold|Der Ring ist aus Gold.|The ring is made of gold.|B
das|Glas|die Gläser|glass|Glas kommt in einen besonderen Container.|Glass goes into a special container.|B
das|Plastik|–|plastic|Wir wollen weniger Plastik benutzen.|We want to use less plastic.|B
die|Wolle|–|wool|Der Pullover ist aus reiner Wolle.|The jumper is made of pure wool.|B
das|Öl|die Öle|oil|Viele Häuser werden noch mit Öl geheizt.|Many houses are still heated with oil.|B
das|Gas|die Gase|gas|Wir kochen und heizen mit Gas.|We cook and heat with gas.|B
die|Kohle|die Kohlen|coal|Früher hat man hier mit Kohle geheizt.|People used to heat with coal here.|B
die|Solarenergie|–|solar energy|Unser Haus nutzt Solarenergie für warmes Wasser.|Our house uses solar energy for hot water.|B
die|Windenergie|–|wind energy|An der Küste wird viel Windenergie produziert.|A lot of wind energy is produced on the coast.|B
das|Kraftwerk|die Kraftwerke|power station|Das alte Kraftwerk wird nächstes Jahr geschlossen.|The old power station will be closed next year.|B
das|Abgas|die Abgase|exhaust fumes|Die Abgase der Autos verschmutzen die Luft.|Exhaust fumes from cars pollute the air.|B
der|Rauch|–|smoke|Aus der Fabrik kommt schwarzer Rauch.|Black smoke is coming out of the factory.|B
das|Recycling|–|recycling|Recycling hilft, Rohstoffe zu sparen.|Recycling helps to save raw materials.|B
die|Pfandflasche|die Pfandflaschen|deposit bottle|Ich bringe die Pfandflaschen zurück in den Supermarkt.|I am taking the deposit bottles back to the supermarket.|B
die|Plastiktüte|die Plastiktüten|plastic bag|Ich nehme beim Einkaufen keine Plastiktüte.|I do not take a plastic bag when I go shopping.|B
der|Naturschutz|–|nature conservation|Der Verein arbeitet für den Naturschutz.|The association works for nature conservation.|B
der|Tierschutz|–|animal welfare|Meine Freundin interessiert sich sehr für Tierschutz.|My friend is very interested in animal welfare.|B
die|Landwirtschaft|–|agriculture, farming|Viele Menschen im Dorf arbeiten in der Landwirtschaft.|Many people in the village work in agriculture.|B
die|Erwärmung|–|warming|Die Erwärmung der Erde ist ein großes Problem.|The warming of the earth is a big problem.|B
das|Trinkwasser|–|drinking water|Sauberes Trinkwasser ist nicht überall selbstverständlich.|Clean drinking water cannot be taken for granted everywhere.|B
der|Sonnenaufgang|die Sonnenaufgänge|sunrise|Wir sind schon vor Sonnenaufgang losgegangen.|We set off before sunrise.|B
der|Sonnenuntergang|die Sonnenuntergänge|sunset|Am Meer kann man schöne Sonnenuntergänge sehen.|You can see beautiful sunsets by the sea.|B
der|Verbrauch|–|consumption|Wir müssen den Verbrauch von Wasser senken.|We have to reduce water consumption.|B`],
["Menschen & Beziehungen","People & relationships",`die|Beziehung|die Beziehungen|relationship|Sie haben eine gute Beziehung zueinander.|They have a good relationship with each other.|B
die|Freundschaft|die Freundschaften|friendship|Unsere Freundschaft besteht seit der Schulzeit.|Our friendship goes back to our school days.|B
die|Ehe|die Ehen|marriage|Sie führen eine glückliche Ehe.|They have a happy marriage.|B
die|Hochzeit|die Hochzeiten|wedding|Die Hochzeit findet im Juni statt.|The wedding takes place in June.|B
die|Scheidung|die Scheidungen|divorce|Nach der Scheidung ist er umgezogen.|After the divorce he moved away.|B
der|Verwandte|die Verwandten|relative|Ein Verwandter von mir lebt in Wien.|A relative of mine lives in Vienna.|B
die|Erziehung|–|upbringing|Die Erziehung der Kinder ist nicht immer leicht.|Bringing up children is not always easy.|B
die|Kindheit|–|childhood|Ich hatte eine schöne Kindheit.|I had a lovely childhood.|B
die|Jugend|–|youth|In meiner Jugend habe ich viel Sport gemacht.|I did a lot of sport in my youth.|B
das|Alter|–|age; old age|Im Alter möchte er auf dem Land leben.|In old age he would like to live in the country.|B
die|Generation|die Generationen|generation|In diesem Haus wohnen drei Generationen.|Three generations live in this house.|B
das|Gefühl|die Gefühle|feeling|Ich habe ein gutes Gefühl bei der Sache.|I have a good feeling about this.|B
die|Angst|die Ängste|fear|Er hat Angst vor der Prüfung.|He is afraid of the exam.|B
die|Freude|die Freuden|joy|Das Geschenk hat ihr große Freude gemacht.|The present gave her great pleasure.|B
der|Ärger|–|trouble, annoyance|Ich hatte Ärger mit dem Chef.|I had trouble with the boss.|B
der|Streit|die Streite|argument, quarrel|Die Geschwister haben oft Streit.|The siblings often argue.|B
das|Vertrauen|–|trust|Ich habe volles Vertrauen zu ihr.|I have complete trust in her.|B
die|Geduld|–|patience|Mit Kindern braucht man viel Geduld.|You need a lot of patience with children.|B
der|Charakter|die Charaktere|character|Sie hat einen starken Charakter.|She has a strong character.|B
die|Eigenschaft|die Eigenschaften|characteristic, quality|Ehrlichkeit ist eine wichtige Eigenschaft.|Honesty is an important quality.|B
die|Meinung|die Meinungen|opinion|Meiner Meinung nach ist das falsch.|In my opinion that is wrong.|B
der|Rat|die Ratschläge|advice|Kannst du mir einen Rat geben?|Can you give me some advice?|B
der|Vorschlag|die Vorschläge|suggestion|Ich finde deinen Vorschlag sehr gut.|I think your suggestion is very good.|B
die|Entscheidung|die Entscheidungen|decision|Wir müssen bald eine Entscheidung treffen.|We have to make a decision soon.|B
die|Entschuldigung|die Entschuldigungen|apology|Ich habe seine Entschuldigung angenommen.|I accepted his apology.|B
das|Verhalten|–|behaviour|Sein Verhalten war nicht in Ordnung.|His behaviour was not acceptable.|B
der|Unterschied|die Unterschiede|difference|Zwischen den Angeboten gibt es keinen großen Unterschied.|There is no big difference between the offers.|B
die|Gesellschaft|die Gesellschaften|society; company|Die Gesellschaft verändert sich schnell.|Society is changing fast.|B
das|Missverständnis|die Missverständnisse|misunderstanding|Das war nur ein Missverständnis.|That was just a misunderstanding.|B
die|Familie|die Familien|family|Meine Familie kommt aus der Türkei.|My family comes from Turkey.|A
die|Eltern|nur Plural|parents|Meine Eltern besuchen uns am Wochenende.|My parents are visiting us at the weekend.|A
die|Mutter|die Mütter|mother|Meine Mutter ruft mich jeden Sonntag an.|My mother rings me every Sunday.|A
der|Vater|die Väter|father|Sein Vater arbeitet als Busfahrer.|His father works as a bus driver.|A
das|Kind|die Kinder|child|Sie haben zwei Kinder im Schulalter.|They have two children of school age.|A
der|Sohn|die Söhne|son|Ihr Sohn studiert jetzt in Hamburg.|Her son is now studying in Hamburg.|A
die|Tochter|die Töchter|daughter|Unsere Tochter ist letzte Woche fünf geworden.|Our daughter turned five last week.|A
der|Bruder|die Brüder|brother|Mein Bruder ist zwei Jahre älter als ich.|My brother is two years older than me.|A
die|Schwester|die Schwestern|sister|Ich teile mir das Zimmer mit meiner Schwester.|I share the room with my sister.|A
die|Geschwister|nur Plural|siblings|Haben Sie Geschwister?|Do you have any brothers or sisters?|A
die|Großeltern|nur Plural|grandparents|Meine Großeltern leben auf dem Land.|My grandparents live in the country.|A
die|Großmutter|die Großmütter|grandmother|Meine Großmutter ist schon über neunzig Jahre alt.|My grandmother is already over ninety.|A
der|Großvater|die Großväter|grandfather|Mein Großvater erzählt gern von früher.|My grandfather likes talking about the old days.|A
die|Oma|die Omas|grandma|Am Sonntag essen wir immer bei Oma.|We always eat at Grandma's on Sundays.|A
der|Opa|die Opas|grandad|Mein Opa geht jeden Tag spazieren.|My grandad goes for a walk every day.|A
der|Onkel|die Onkel|uncle|Mein Onkel wohnt seit Jahren in Kanada.|My uncle has lived in Canada for years.|A
die|Tante|die Tanten|aunt|Meine Tante hat mir ein Buch geschenkt.|My aunt gave me a book.|A
der|Cousin|die Cousins|cousin (male)|Mein Cousin heiratet im nächsten Sommer.|My cousin is getting married next summer.|A
der|Mann|die Männer|man, husband|Ihr Mann kocht am Wochenende sehr gern.|Her husband loves cooking at the weekend.|A
die|Frau|die Frauen|woman, wife|Seine Frau arbeitet in einer Bank.|His wife works in a bank.|A
der|Junge|die Jungen|boy|Der Junge spielt im Hof Fußball.|The boy is playing football in the yard.|A
das|Mädchen|die Mädchen|girl|Das Mädchen geht schon in die dritte Klasse.|The girl is already in year three.|A
das|Baby|die Babys|baby|Das Baby schläft endlich die ganze Nacht.|The baby is finally sleeping through the night.|A
der|Freund|die Freunde|friend, boyfriend|Ich kenne meinen besten Freund seit der Schulzeit.|I have known my best friend since school.|A
der|Mensch|die Menschen|person, human being|Er ist ein sehr offener Mensch.|He is a very open person.|A
die|Leute|nur Plural|people|Auf der Feier waren viele nette Leute.|There were lots of nice people at the party.|A
die|Person|die Personen|person|Der Tisch ist für vier Personen reserviert.|The table is reserved for four people.|A
der|Name|die Namen|name|Können Sie Ihren Namen bitte buchstabieren?|Could you spell your name, please?|A
der|Vorname|die Vornamen|first name|Wir nennen uns hier alle beim Vornamen.|We all call each other by our first names here.|A
der|Familienname|die Familiennamen|surname|Schreiben Sie hier bitte Ihren Familiennamen.|Please write your surname here.|A
der|Geburtstag|die Geburtstage|birthday|Sie feiert ihren Geburtstag mit der ganzen Familie.|She is celebrating her birthday with the whole family.|A
der|Gast|die Gäste|guest|Die Gäste kommen um sieben Uhr.|The guests are coming at seven o'clock.|A
der|Besuch|die Besuche|visit, visitors|Am Wochenende bekommen wir Besuch aus Köln.|We are having visitors from Cologne at the weekend.|A
die|Party|die Partys|party|Kommst du am Samstag zu meiner Party?|Are you coming to my party on Saturday?|A
die|Liebe|–|love|Für sie war es Liebe auf den ersten Blick.|For her it was love at first sight.|A
der|Kuss|die Küsse|kiss|Zum Abschied gibt sie ihm einen Kuss.|She gives him a kiss to say goodbye.|A
das|Glück|–|luck, happiness|Ich wünsche euch viel Glück für die Zukunft.|I wish you lots of luck for the future.|A
der|Partner|die Partner|partner|Sie lebt seit drei Jahren mit ihrem Partner zusammen.|She has been living with her partner for three years.|A
das|Leben|die Leben|life|Er hat sein ganzes Leben in Wien verbracht.|He has spent his whole life in Vienna.|A
der|Spaß|die Späße|fun|Der Abend mit euch hat viel Spaß gemacht.|The evening with you was great fun.|A
die|Telefonnummer|die Telefonnummern|phone number|Gibst du mir bitte deine Telefonnummer?|Will you give me your phone number, please?|A
der|Gruß|die Grüße|greeting, regards|Schöne Grüße an deine Eltern!|Give my regards to your parents!|A
der|Wunsch|die Wünsche|wish|Hast du einen besonderen Wunsch zum Geburtstag?|Do you have a special wish for your birthday?|A
der|Ehemann|die Ehemänner|husband|Ihr Ehemann ist vor zwei Jahren gestorben.|Her husband died two years ago.|B
die|Ehefrau|die Ehefrauen|wife|Er kommt mit seiner Ehefrau zur Feier.|He is coming to the party with his wife.|B
der|Erwachsene|die Erwachsenen|adult|Der Eintritt kostet für Erwachsene zehn Euro.|Admission costs ten euros for adults.|B
der|Jugendliche|die Jugendlichen|young person, teenager|Viele Jugendliche treffen sich abends im Park.|Many young people meet in the park in the evening.|B
der|Bekannte|die Bekannten|acquaintance|Ein Bekannter von mir sucht eine Wohnung.|An acquaintance of mine is looking for a flat.|B
das|Paar|die Paare|couple|Die beiden sind seit einem Jahr ein Paar.|The two of them have been a couple for a year.|B
der|Enkel|die Enkel|grandson, grandchild|Sie passt nachmittags auf ihren Enkel auf.|She looks after her grandson in the afternoons.|B
der|Neffe|die Neffen|nephew|Mein Neffe kommt im Herbst in die Schule.|My nephew starts school in the autumn.|B
die|Nichte|die Nichten|niece|Meine Nichte spielt sehr gut Klavier.|My niece plays the piano very well.|B
die|Schwiegereltern|nur Plural|parents-in-law|An Weihnachten fahren wir zu meinen Schwiegereltern.|We are going to my parents-in-law's at Christmas.|B
der|Zwilling|die Zwillinge|twin|Die Zwillinge sehen sich sehr ähnlich.|The twins look very much alike.|B
die|Braut|die Bräute|bride|Die Braut trug ein langes weißes Kleid.|The bride wore a long white dress.|B
der|Bräutigam|die Bräutigame|bridegroom|Der Bräutigam war vor der Feier sehr nervös.|The bridegroom was very nervous before the celebration.|B
die|Trennung|die Trennungen|separation, break-up|Nach der Trennung ist er nach Berlin gezogen.|He moved to Berlin after the break-up.|B
die|Geburt|die Geburten|birth|Nach der Geburt blieb sie ein Jahr zu Hause.|She stayed at home for a year after the birth.|B
der|Tod|–|death|Nach dem Tod ihres Mannes lebt sie allein.|She has lived alone since her husband's death.|B
die|Beerdigung|die Beerdigungen|funeral|Zur Beerdigung kamen viele alte Freunde.|Many old friends came to the funeral.|B
der|Familienstand|–|marital status|Bitte kreuzen Sie hier Ihren Familienstand an.|Please tick your marital status here.|B
das|Geschlecht|die Geschlechter|sex, gender|Im Formular muss man das Geschlecht angeben.|You have to state your sex on the form.|B
der|Geburtsort|die Geburtsorte|place of birth|Mein Geburtsort ist eine kleine Stadt in Polen.|My place of birth is a small town in Poland.|B
die|Herkunft|–|origin|Ihre Herkunft spielt für uns keine Rolle.|Where you come from makes no difference to us.|B
die|Heimat|–|home, homeland|Im Sommer fliegt er immer in seine Heimat.|He always flies back to his home country in summer.|B
die|Trauer|–|grief, mourning|Die ganze Familie ist in tiefer Trauer.|The whole family is in deep mourning.|B
die|Wut|–|anger, rage|Vor Wut konnte er kaum noch sprechen.|He was so angry he could hardly speak.|B
die|Sorge|die Sorgen|worry|Ich mache mir Sorgen um meinen Bruder.|I am worried about my brother.|B
die|Hoffnung|die Hoffnungen|hope|Wir haben die Hoffnung noch nicht aufgegeben.|We have not given up hope yet.|B
die|Enttäuschung|die Enttäuschungen|disappointment|Die Absage war für sie eine große Enttäuschung.|The cancellation was a great disappointment to her.|B
die|Überraschung|die Überraschungen|surprise|Dein Besuch war eine schöne Überraschung.|Your visit was a lovely surprise.|B
die|Eifersucht|–|jealousy|Seine Eifersucht war ein Problem für die Beziehung.|His jealousy was a problem for the relationship.|B
der|Neid|–|envy|Er sprach ohne Neid über den Erfolg seines Bruders.|He spoke without envy about his brother's success.|B
die|Einsamkeit|–|loneliness|Viele ältere Menschen leiden unter Einsamkeit.|Many older people suffer from loneliness.|B
das|Heimweh|–|homesickness|Im ersten Jahr hatte ich oft Heimweh.|I was often homesick in the first year.|B
das|Mitleid|–|pity, sympathy|Ich habe Mitleid mit dem kranken Kind.|I feel sorry for the sick child.|B
der|Mut|–|courage|Man braucht Mut, um ganz neu anzufangen.|You need courage to start all over again.|B
der|Humor|–|sense of humour|Meine Chefin hat viel Humor.|My boss has a great sense of humour.|B
die|Laune|die Launen|mood|Heute hat er richtig gute Laune.|He is in a really good mood today.|B
die|Lust|–|desire, inclination|Hast du Lust, heute Abend ins Kino zu gehen?|Do you feel like going to the cinema tonight?|B
die|Träne|die Tränen|tear|Beim Abschied hatte sie Tränen in den Augen.|She had tears in her eyes when they said goodbye.|B
das|Lächeln|–|smile|Sie begrüßt jeden Gast mit einem Lächeln.|She greets every guest with a smile.|B
die|Persönlichkeit|die Persönlichkeiten|personality|Sie hat eine starke Persönlichkeit.|She has a strong personality.|B
die|Stärke|die Stärken|strength (quality)|Zuhören ist eine ihrer größten Stärken.|Listening is one of her greatest strengths.|B
die|Schwäche|die Schwächen|weakness|Jeder Mensch hat Stärken und Schwächen.|Everyone has strengths and weaknesses.|B
die|Gewohnheit|die Gewohnheiten|habit|Es ist schwer, alte Gewohnheiten zu ändern.|It is hard to change old habits.|B
der|Respekt|–|respect|Kinder sollten Respekt vor älteren Menschen haben.|Children should have respect for older people.|B
die|Rücksicht|–|consideration|Bitte nehmen Sie Rücksicht auf die Nachbarn.|Please show consideration for the neighbours.|B
das|Vorurteil|die Vorurteile|prejudice|Gegen Ausländer gibt es leider noch viele Vorurteile.|Unfortunately there is still a lot of prejudice against foreigners.|B
der|Kontakt|die Kontakte|contact|Ich habe noch Kontakt zu meinen alten Schulfreunden.|I am still in contact with my old school friends.|B
das|Treffen|die Treffen|meeting, get-together|Unser nächstes Treffen ist am Freitag.|Our next get-together is on Friday.|B
die|Verabredung|die Verabredungen|date, appointment|Ich habe heute Abend eine Verabredung mit Anna.|I am meeting up with Anna tonight.|B
der|Abschied|die Abschiede|farewell, goodbye|Der Abschied von den Kollegen fiel ihm schwer.|Saying goodbye to his colleagues was hard for him.|B
die|Umarmung|die Umarmungen|hug|Zur Begrüßung gab es eine herzliche Umarmung.|There was a warm hug by way of greeting.|B
das|Kompliment|die Komplimente|compliment|Er hat mir ein nettes Kompliment gemacht.|He paid me a nice compliment.|B
die|Kritik|die Kritiken|criticism|Sie kann mit Kritik nicht gut umgehen.|She does not handle criticism well.|B
der|Vorwurf|die Vorwürfe|reproach, accusation|Ich mache dir deswegen keinen Vorwurf.|I don't blame you for that.|B
der|Konflikt|die Konflikte|conflict|In jeder Familie gibt es manchmal Konflikte.|There are sometimes conflicts in every family.|B
die|Diskussion|die Diskussionen|discussion|Nach einer langen Diskussion waren alle einverstanden.|After a long discussion everyone agreed.|B
der|Kompromiss|die Kompromisse|compromise|Am Ende haben wir einen Kompromiss gefunden.|In the end we found a compromise.|B
die|Lüge|die Lügen|lie|Das war leider eine Lüge.|Unfortunately that was a lie.|B
die|Wahrheit|die Wahrheiten|truth|Sag mir bitte die Wahrheit.|Please tell me the truth.|B
das|Geheimnis|die Geheimnisse|secret|Kannst du ein Geheimnis für dich behalten?|Can you keep a secret?|B
das|Versprechen|die Versprechen|promise|Er hat sein Versprechen leider nicht gehalten.|Unfortunately he did not keep his promise.|B
die|Bitte|die Bitten|request|Ich habe eine kleine Bitte an dich.|I have a small favour to ask of you.|B
die|Erinnerung|die Erinnerungen|memory|Ich habe schöne Erinnerungen an meine Schulzeit.|I have happy memories of my school days.|B`],
["Essen & Trinken","Food & drink",`das|Brot|die Brote|bread|Ich kaufe das Brot beim Bäcker.|I buy the bread at the baker's.|A
das|Brötchen|die Brötchen|bread roll|Zum Frühstück esse ich zwei Brötchen.|I eat two rolls for breakfast.|A
die|Butter|–|butter|Kannst du mir bitte die Butter geben?|Can you pass me the butter, please?|A
der|Käse|–|cheese|Dieser Käse kommt aus der Schweiz.|This cheese comes from Switzerland.|A
die|Wurst|die Würste|sausage, cold meat|Ich esse kein Brot mit Wurst.|I don't eat bread with sausage.|A
das|Fleisch|–|meat|Meine Schwester isst kein Fleisch.|My sister doesn't eat meat.|A
das|Ei|die Eier|egg|Möchtest du ein gekochtes Ei?|Would you like a boiled egg?|A
die|Milch|–|milk|Ich trinke den Kaffee immer mit Milch.|I always drink coffee with milk.|A
der|Saft|die Säfte|juice|Die Kinder trinken gern Saft.|The children like drinking juice.|A
der|Kaffee|–|coffee|Morgens brauche ich zuerst einen Kaffee.|In the morning I need a coffee first.|A
der|Tee|die Tees|tea|Abends trinke ich lieber Tee.|In the evening I prefer to drink tea.|A
das|Bier|die Biere|beer|Er bestellt ein kleines Bier.|He orders a small beer.|A
der|Wein|die Weine|wine|Zum Essen trinken wir ein Glas Wein.|We drink a glass of wine with the meal.|A
das|Obst|–|fruit|Du solltest jeden Tag Obst essen.|You should eat fruit every day.|A
das|Gemüse|–|vegetables|Auf dem Markt ist das Gemüse frisch.|The vegetables are fresh at the market.|A
der|Apfel|die Äpfel|apple|Ich nehme einen Apfel mit zur Arbeit.|I take an apple to work with me.|A
die|Banane|die Bananen|banana|Die Bananen sind noch nicht reif.|The bananas are not ripe yet.|A
die|Zitrone|die Zitronen|lemon|Ich trinke Tee mit Zitrone.|I drink tea with lemon.|A
die|Erdbeere|die Erdbeeren|strawberry|Im Juni sind die Erdbeeren am besten.|Strawberries are best in June.|A
die|Kartoffel|die Kartoffeln|potato|Kannst du bitte die Kartoffeln schälen?|Can you peel the potatoes, please?|A
die|Tomate|die Tomaten|tomato|Für die Soße brauchen wir sechs Tomaten.|We need six tomatoes for the sauce.|A
die|Zwiebel|die Zwiebeln|onion|Ich schneide zuerst die Zwiebeln.|I cut the onions first.|A
die|Gurke|die Gurken|cucumber|In den Salat kommt noch eine Gurke.|A cucumber still goes into the salad.|A
der|Salat|die Salate|salad, lettuce|Als Vorspeise nehme ich einen Salat.|I'll have a salad as a starter.|A
die|Suppe|die Suppen|soup|Die Suppe ist leider schon kalt.|Unfortunately the soup is already cold.|A
der|Reis|–|rice|Dazu gibt es Reis und Gemüse.|It comes with rice and vegetables.|A
die|Nudel|die Nudeln|noodle, pasta|Die Nudeln müssen zehn Minuten kochen.|The pasta has to boil for ten minutes.|A
der|Kuchen|die Kuchen|cake|Meine Oma backt jeden Sonntag einen Kuchen.|My grandma bakes a cake every Sunday.|A
die|Schokolade|die Schokoladen|chocolate|Ich habe dir eine Tafel Schokolade mitgebracht.|I have brought you a bar of chocolate.|A
der|Zucker|–|sugar|Nimmst du Zucker in den Kaffee?|Do you take sugar in your coffee?|A
das|Salz|–|salt|In der Suppe fehlt noch etwas Salz.|The soup still needs a little salt.|A
der|Pfeffer|–|pepper (spice)|Salz und Pfeffer stehen auf dem Tisch.|Salt and pepper are on the table.|A
das|Frühstück|die Frühstücke|breakfast|Das Frühstück ist im Preis enthalten.|Breakfast is included in the price.|A
das|Mittagessen|die Mittagessen|lunch|Nach dem Mittagessen machen wir einen Spaziergang.|After lunch we go for a walk.|A
das|Abendessen|die Abendessen|dinner, evening meal|Wir laden euch zum Abendessen ein.|We are inviting you to dinner.|A
das|Essen|die Essen|food, meal|Das Essen hat sehr gut geschmeckt.|The food tasted very good.|A
das|Getränk|die Getränke|drink|Die Getränke bezahlen wir extra.|We pay for the drinks separately.|A
die|Tasse|die Tassen|cup|Möchten Sie noch eine Tasse Kaffee?|Would you like another cup of coffee?|A
der|Teller|die Teller|plate|Stell bitte die Teller auf den Tisch.|Please put the plates on the table.|A
das|Messer|die Messer|knife|Dieses Messer schneidet nicht mehr gut.|This knife doesn't cut well any more.|A
die|Gabel|die Gabeln|fork|Mir ist die Gabel heruntergefallen.|I have dropped my fork.|A
der|Löffel|die Löffel|spoon|Für die Suppe brauche ich einen Löffel.|I need a spoon for the soup.|A
das|Restaurant|die Restaurants|restaurant|Das Restaurant ist montags geschlossen.|The restaurant is closed on Mondays.|A
die|Speisekarte|die Speisekarten|menu|Können wir bitte die Speisekarte haben?|Could we have the menu, please?|A
das|Hähnchen|die Hähnchen|chicken (as food)|Ich nehme das Hähnchen mit Reis.|I'll have the chicken with rice.|A
der|Joghurt|die Joghurts|yoghurt|Zum Frühstück esse ich Joghurt mit Obst.|I have yoghurt with fruit for breakfast.|A
die|Marmelade|die Marmeladen|jam|Die Marmelade hat meine Mutter selbst gemacht.|My mother made the jam herself.|A
das|Café|die Cafés|café|Wir treffen uns um drei im Café.|We are meeting at three in the café.|A
die|Mahlzeit|die Mahlzeiten|meal|Nehmen Sie die Tabletten nach den Mahlzeiten.|Take the tablets after meals.|B
die|Speise|die Speisen|dish, food|Hier gibt es warme und kalte Speisen.|They serve hot and cold dishes here.|B
die|Vorspeise|die Vorspeisen|starter|Als Vorspeise empfehle ich die Tomatensuppe.|As a starter I recommend the tomato soup.|B
das|Hauptgericht|die Hauptgerichte|main course|Als Hauptgericht nehme ich den Fisch.|I'll have the fish as my main course.|B
der|Nachtisch|die Nachtische|dessert|Zum Nachtisch gibt es heute Obstsalat.|There is fruit salad for dessert today.|B
die|Zutat|die Zutaten|ingredient|Hast du alle Zutaten für den Kuchen?|Have you got all the ingredients for the cake?|B
das|Gewürz|die Gewürze|spice|In der indischen Küche benutzt man viele Gewürze.|Many spices are used in Indian cooking.|B
der|Geschmack|–|taste, flavour|Der Geschmack dieser Soße ist sehr scharf.|The taste of this sauce is very hot.|B
der|Appetit|–|appetite|Ich bin krank und habe keinen Appetit.|I am ill and have no appetite.|B
die|Portion|die Portionen|portion|Die Portionen sind hier wirklich groß.|The portions are really big here.|B
die|Bedienung|–|service (in a restaurant)|Die Bedienung war freundlich und schnell.|The service was friendly and quick.|B
der|Imbiss|die Imbisse|snack, snack bar|Am Bahnhof gibt es einen kleinen Imbiss.|There is a small snack bar at the station.|B
die|Kneipe|die Kneipen|pub|Nach der Arbeit gehen wir in die Kneipe.|After work we go to the pub.|B
die|Gaststätte|die Gaststätten|restaurant, inn|In dieser Gaststätte kann man gut essen.|You can eat well in this restaurant.|B
die|Schüssel|die Schüsseln|bowl|Gib den Salat bitte in die Schüssel.|Please put the salad in the bowl.|B
die|Serviette|die Servietten|napkin|Auf dem Tisch fehlen noch die Servietten.|The napkins are still missing from the table.|B
die|Dose|die Dosen|tin, can|Ich mache schnell eine Dose Tomaten auf.|I'll quickly open a tin of tomatoes.|B
die|Scheibe|die Scheiben|slice|Möchtest du noch eine Scheibe Brot?|Would you like another slice of bread?|B
das|Rindfleisch|–|beef|Für die Suppe brauche ich Rindfleisch.|I need beef for the soup.|B
das|Schweinefleisch|–|pork|Er isst kein Schweinefleisch.|He doesn't eat pork.|B
das|Geflügel|–|poultry|Geflügel muss man immer gut durchbraten.|You must always cook poultry thoroughly.|B
das|Schnitzel|die Schnitzel|schnitzel, escalope|Die Kinder möchten Schnitzel mit Pommes.|The children would like schnitzel with chips.|B
der|Braten|die Braten|roast|Am Sonntag gibt es bei uns Braten.|We have a roast on Sundays.|B
die|Soße|die Soßen|sauce|Die Soße ist mir zu salzig.|The sauce is too salty for me.|B
der|Essig|–|vinegar|Ich mache den Salat mit Essig und Öl an.|I dress the salad with vinegar and oil.|B
der|Knoblauch|–|garlic|Ich koche gern mit viel Knoblauch.|I like cooking with lots of garlic.|B
die|Karotte|die Karotten|carrot|Schneide die Karotten in kleine Stücke.|Cut the carrots into small pieces.|B
die|Bohne|die Bohnen|bean|Es gibt Fleisch mit grünen Bohnen.|There is meat with green beans.|B
die|Kirsche|die Kirschen|cherry|Die Kirschen aus unserem Garten sind süß.|The cherries from our garden are sweet.|B
die|Traube|die Trauben|grape|Ich habe ein Kilo Trauben gekauft.|I have bought a kilo of grapes.|B
die|Nuss|die Nüsse|nut|Mein Sohn darf keine Nüsse essen.|My son is not allowed to eat nuts.|B
die|Süßigkeit|die Süßigkeiten|sweet, confectionery|Kinder sollten nicht zu viele Süßigkeiten essen.|Children shouldn't eat too many sweets.|B
der|Keks|die Kekse|biscuit|Zum Tee gibt es ein paar Kekse.|There are a few biscuits with the tea.|B
das|Mineralwasser|–|mineral water|Für mich bitte ein Mineralwasser ohne Kohlensäure.|A still mineral water for me, please.|B
die|Limonade|die Limonaden|lemonade, fizzy drink|Die Kinder haben eine Limonade bestellt.|The children have ordered a lemonade.|B
die|Sahne|–|cream|Möchten Sie den Kuchen mit Sahne?|Would you like the cake with cream?|B
das|Mehl|–|flour|Für den Teig brauchst du 500 Gramm Mehl.|You need 500 grams of flour for the dough.|B
der|Honig|–|honey|Ich süße meinen Tee mit Honig.|I sweeten my tea with honey.|B
der|Vegetarier|die Vegetarier|vegetarian|Mein Bruder ist seit zwei Jahren Vegetarier.|My brother has been a vegetarian for two years.|B
die|Spezialität|die Spezialitäten|speciality|Dieses Gericht ist eine Spezialität der Region.|This dish is a speciality of the region.|B
die|Kanne|die Kannen|pot, jug|Ich mache uns eine Kanne Tee.|I'll make us a pot of tea.|B`],
["Zeit & Alltag","Time & everyday life",`die|Zeit|die Zeiten|time|Hast du am Samstag Zeit?|Do you have time on Saturday?|A
der|Tag|die Tage|day|Ich arbeite acht Stunden pro Tag.|I work eight hours a day.|A
die|Woche|die Wochen|week|Nächste Woche habe ich frei.|I am off next week.|A
der|Monat|die Monate|month|Wir wohnen seit drei Monaten hier.|We have been living here for three months.|A
das|Jahr|die Jahre|year|Letztes Jahr waren wir in Spanien.|Last year we were in Spain.|A
die|Minute|die Minuten|minute|Der Bus kommt in fünf Minuten.|The bus is coming in five minutes.|A
die|Sekunde|die Sekunden|second|Warte bitte eine Sekunde!|Please wait a second!|A
der|Morgen|die Morgen|morning|Am Morgen ist es noch kühl.|It is still cool in the morning.|A
der|Vormittag|die Vormittage|morning (late morning)|Am Vormittag habe ich einen Deutschkurs.|I have a German course in the morning.|A
der|Mittag|die Mittage|midday, noon|Gegen Mittag wird es sehr warm.|It gets very warm around midday.|A
der|Nachmittag|die Nachmittage|afternoon|Am Nachmittag hole ich die Kinder ab.|In the afternoon I pick up the children.|A
der|Abend|die Abende|evening|Am Abend sehen wir zusammen fern.|In the evening we watch television together.|A
die|Nacht|die Nächte|night|In der Nacht hat es geregnet.|It rained during the night.|A
der|Wochentag|die Wochentage|weekday, day of the week|An welchem Wochentag hast du Zeit?|On which day of the week are you free?|A
die|Uhr|die Uhren|clock, watch|Meine Uhr geht fünf Minuten vor.|My watch is five minutes fast.|A
die|Uhrzeit|die Uhrzeiten|time (of day)|Zu welcher Uhrzeit passt es Ihnen?|What time suits you?|A
der|Kalender|die Kalender|calendar, diary|Ich schreibe den Termin in meinen Kalender.|I'll write the appointment in my diary.|A
der|Anfang|die Anfänge|beginning, start|Am Anfang war alles neu für mich.|At the beginning everything was new to me.|A
das|Ende|die Enden|end|Am Ende des Monats ziehen wir um.|We are moving at the end of the month.|A
der|Moment|die Momente|moment|Einen Moment bitte, ich komme gleich.|One moment please, I'm just coming.|A
das|Mal|die Male|time (occasion)|Ich bin zum ersten Mal in Berlin.|I am in Berlin for the first time.|A
der|Teil|die Teile|part|Der erste Teil der Prüfung war leicht.|The first part of the exam was easy.|A
die|Hälfte|die Hälften|half|Die Hälfte der Gäste ist schon gegangen.|Half of the guests have already left.|A
das|Viertel|die Viertel|quarter|Ein Viertel der Schüler fehlt heute.|A quarter of the pupils are absent today.|A
das|Kilogramm|die Kilogramm|kilogram|Der Koffer wiegt zwanzig Kilogramm.|The suitcase weighs twenty kilograms.|A
der|Liter|die Liter|litre|Ich trinke zwei Liter Wasser am Tag.|I drink two litres of water a day.|A
der|Meter|die Meter|metre|Der Tisch ist zwei Meter lang.|The table is two metres long.|A
der|Kilometer|die Kilometer|kilometre|Bis zur Arbeit sind es zehn Kilometer.|It is ten kilometres to work.|A
das|Problem|die Probleme|problem|Das ist kein Problem für mich.|That is no problem for me.|A
der|Plan|die Pläne|plan|Hast du schon Pläne für den Sommer?|Do you already have plans for the summer?|A
die|Sache|die Sachen|thing, matter|Ich muss noch meine Sachen packen.|I still have to pack my things.|A
das|Ding|die Dinge|thing|Ich habe noch viele Dinge zu erledigen.|I still have a lot of things to do.|A
die|Mitte|–|middle|Der Tisch steht in der Mitte des Zimmers.|The table is in the middle of the room.|A
die|Liste|die Listen|list|Ich schreibe eine Liste für den Einkauf.|I am writing a shopping list.|A
der|Wecker|die Wecker|alarm clock|Mein Wecker klingelt jeden Tag um sechs.|My alarm clock rings at six every day.|A
der|Alltag|–|everyday life|Mein Alltag ist im Moment sehr stressig.|My everyday life is very stressful at the moment.|B
der|Zeitpunkt|die Zeitpunkte|point in time, moment|Jetzt ist kein guter Zeitpunkt dafür.|Now is not a good time for that.|B
der|Zeitraum|die Zeiträume|period (of time)|In diesem Zeitraum ist das Büro geschlossen.|The office is closed during this period.|B
die|Dauer|–|duration, length|Die Dauer des Kurses beträgt sechs Monate.|The duration of the course is six months.|B
die|Zukunft|–|future|In Zukunft möchte ich mehr Sport machen.|In future I would like to do more sport.|B
die|Vergangenheit|–|past|In der Vergangenheit war das ganz anders.|In the past that was quite different.|B
die|Gegenwart|–|present (time)|Der Film spielt in der Gegenwart.|The film is set in the present.|B
das|Jahrhundert|die Jahrhunderte|century|Die Kirche stammt aus dem 15. Jahrhundert.|The church dates from the 15th century.|B
der|Augenblick|die Augenblicke|moment, instant|Im Augenblick habe ich leider keine Zeit.|At the moment I unfortunately have no time.|B
der|Beginn|–|beginning, start|Zu Beginn stellen sich alle kurz vor.|At the start everyone introduces themselves briefly.|B
der|Schluss|die Schlüsse|end, conclusion|Zum Schluss möchte ich mich bedanken.|Finally, I would like to say thank you.|B
die|Reihenfolge|die Reihenfolgen|order, sequence|Bringen Sie die Sätze in die richtige Reihenfolge.|Put the sentences in the correct order.|B
die|Gelegenheit|die Gelegenheiten|opportunity, occasion|Ich hatte keine Gelegenheit, ihn zu fragen.|I had no opportunity to ask him.|B
die|Möglichkeit|die Möglichkeiten|possibility, opportunity|Es gibt noch eine andere Möglichkeit.|There is another possibility.|B
der|Grund|die Gründe|reason|Aus diesem Grund komme ich später.|For this reason I am coming later.|B
die|Ursache|die Ursachen|cause|Die Ursache des Unfalls ist noch unklar.|The cause of the accident is still unclear.|B
die|Folge|die Folgen|consequence, result|Der Fehler hatte ernste Folgen.|The mistake had serious consequences.|B
der|Zweck|die Zwecke|purpose|Zu welchem Zweck brauchen Sie das Geld?|For what purpose do you need the money?|B
die|Situation|die Situationen|situation|In dieser Situation musst du ruhig bleiben.|In this situation you have to stay calm.|B
die|Menge|die Mengen|amount, quantity|Wir haben eine Menge Arbeit vor uns.|We have a lot of work ahead of us.|B
die|Anzahl|–|number, quantity|Die Anzahl der Plätze ist begrenzt.|The number of places is limited.|B
die|Mehrheit|die Mehrheiten|majority|Die Mehrheit war für den Vorschlag.|The majority was in favour of the proposal.|B
das|Prozent|die Prozente|per cent|Zwanzig Prozent der Schüler haben gefehlt.|Twenty per cent of the pupils were absent.|B
der|Rest|die Reste|rest, remainder|Den Rest erledige ich morgen.|I'll do the rest tomorrow.|B
die|Länge|die Längen|length|Die Länge des Zimmers beträgt fünf Meter.|The length of the room is five metres.|B
die|Höhe|die Höhen|height, amount|Die Höhe der Miete hat mich überrascht.|The amount of the rent surprised me.|B
die|Art|die Arten|kind, type, way|Diese Art von Musik gefällt mir nicht.|I don't like this kind of music.|B
die|Weise|die Weisen|way, manner|Auf diese Weise lernst du schneller.|You learn faster this way.|B
die|Tatsache|die Tatsachen|fact|Das ist eine Tatsache und keine Meinung.|That is a fact and not an opinion.|B
der|Zufall|die Zufälle|coincidence, chance|Wir haben uns durch Zufall getroffen.|We met by chance.|B
der|Zustand|die Zustände|condition, state|Das Auto ist in einem guten Zustand.|The car is in good condition.|B
der|Vorteil|die Vorteile|advantage|Das Leben auf dem Land hat viele Vorteile.|Life in the country has many advantages.|B
der|Nachteil|die Nachteile|disadvantage|Ein Nachteil ist der lange Weg zur Arbeit.|One disadvantage is the long journey to work.|B
der|Vergleich|die Vergleiche|comparison|Im Vergleich zu früher ist alles teurer.|Compared with the past, everything is more expensive.|B
das|Gegenteil|die Gegenteile|opposite|Er behauptet genau das Gegenteil.|He claims exactly the opposite.|B
die|Veränderung|die Veränderungen|change|Der Umzug war eine große Veränderung für uns.|The move was a big change for us.|B
die|Entwicklung|die Entwicklungen|development|Diese Entwicklung finde ich sehr positiv.|I think this development is very positive.|B
der|Versuch|die Versuche|attempt, try|Beim zweiten Versuch hat es geklappt.|It worked at the second attempt.|B
die|Mühe|die Mühen|effort, trouble|Du hast dir viel Mühe gegeben.|You have made a great effort.|B
die|Schwierigkeit|die Schwierigkeiten|difficulty|Am Anfang hatte ich große Schwierigkeiten.|At the beginning I had great difficulties.|B
die|Absicht|die Absichten|intention|Das habe ich nicht mit Absicht gemacht.|I didn't do that on purpose.|B
der|Zweifel|die Zweifel|doubt|Ich habe keinen Zweifel an seiner Ehrlichkeit.|I have no doubt about his honesty.|B
der|Eindruck|die Eindrücke|impression|Mein erster Eindruck von der Stadt war gut.|My first impression of the town was good.|B
der|Gedanke|die Gedanken|thought|Der Gedanke an die Prüfung macht mich nervös.|The thought of the exam makes me nervous.|B
der|Fall|die Fälle|case|In diesem Fall rufen Sie mich bitte an.|In that case please call me.|B
das|Ereignis|die Ereignisse|event|Die Geburt war ein besonderes Ereignis.|The birth was a special event.|B
die|Reihe|die Reihen|row, turn|Jetzt bist du an der Reihe.|Now it is your turn.|B
der|Sinn|die Sinne|sense, meaning|Es hat keinen Sinn, länger zu warten.|There is no point in waiting any longer.|B`]
];
const VERBS = `sich bewerben|bewirbt sich · bewarb sich · hat sich beworben|to apply (for a job)|Ich bewerbe mich um die Stelle als Verkäufer.|I am applying for the job as a sales assistant.|B
kündigen|kündigt · kündigte · hat gekündigt|to give notice, to cancel a contract|Sie hat ihre Wohnung zum ersten Mai gekündigt.|She has given notice on her flat for the first of May.|B
verdienen|verdient · verdiente · hat verdient|to earn|In diesem Beruf verdient man gut.|You earn well in this job.|B
einstellen|stellt ein · stellte ein · hat eingestellt|to hire, to take on|Die Firma stellt zwei neue Mitarbeiter ein.|The company is hiring two new employees.|B
erledigen|erledigt · erledigte · hat erledigt|to get done, to deal with|Ich muss heute noch viel erledigen.|I still have a lot to get done today.|B
vereinbaren|vereinbart · vereinbarte · hat vereinbart|to arrange, to agree on|Wir haben einen Termin für Montag vereinbart.|We have arranged an appointment for Monday.|B
absagen|sagt ab · sagte ab · hat abgesagt|to cancel (an appointment)|Leider muss ich den Termin absagen.|Unfortunately I have to cancel the appointment.|B
verschieben|verschiebt · verschob · hat verschoben|to postpone|Können wir das Treffen auf morgen verschieben?|Can we postpone the meeting until tomorrow?|B
mieten|mietet · mietete · hat gemietet|to rent|Wir haben eine Wohnung im Zentrum gemietet.|We have rented a flat in the centre.|B
umziehen|zieht um · zog um · ist umgezogen|to move house|Nächsten Monat ziehen wir nach Köln um.|Next month we are moving to Cologne.|B
einziehen|zieht ein · zog ein · ist eingezogen|to move in|Wann können wir in die Wohnung einziehen?|When can we move into the flat?|B
renovieren|renoviert · renovierte · hat renoviert|to renovate|Wir renovieren gerade das Badezimmer.|We are renovating the bathroom at the moment.|B
reparieren|repariert · reparierte · hat repariert|to repair|Der Techniker hat die Waschmaschine repariert.|The technician repaired the washing machine.|B
aufräumen|räumt auf · räumte auf · hat aufgeräumt|to tidy up|Die Kinder müssen ihr Zimmer aufräumen.|The children have to tidy their room.|B
untersuchen|untersucht · untersuchte · hat untersucht|to examine|Die Ärztin hat mich gründlich untersucht.|The doctor examined me thoroughly.|B
sich erkälten|erkältet sich · erkältete sich · hat sich erkältet|to catch a cold|Ich habe mich im Urlaub erkältet.|I caught a cold on holiday.|B
sich verletzen|verletzt sich · verletzte sich · hat sich verletzt|to injure oneself|Er hat sich beim Fußball verletzt.|He injured himself playing football.|B
sich erholen|erholt sich · erholte sich · hat sich erholt|to recover, to rest|Im Urlaub habe ich mich gut erholt.|I had a good rest on holiday.|B
verschreiben|verschreibt · verschrieb · hat verschrieben|to prescribe|Der Arzt hat mir Tabletten verschrieben.|The doctor prescribed me tablets.|B
abnehmen|nimmt ab · nahm ab · hat abgenommen|to lose weight|Er hat fünf Kilo abgenommen.|He has lost five kilos.|B
abfahren|fährt ab · fuhr ab · ist abgefahren|to depart, to leave|Der Bus fährt in zehn Minuten ab.|The bus leaves in ten minutes.|B
ankommen|kommt an · kam an · ist angekommen|to arrive|Wir sind pünktlich in München angekommen.|We arrived in Munich on time.|B
umsteigen|steigt um · stieg um · ist umgestiegen|to change (trains, buses)|In Frankfurt müssen Sie umsteigen.|You have to change in Frankfurt.|B
einsteigen|steigt ein · stieg ein · ist eingestiegen|to get on, to board|Bitte steigen Sie schnell ein.|Please board quickly.|B
verpassen|verpasst · verpasste · hat verpasst|to miss (a train, a chance)|Ich habe den letzten Bus verpasst.|I missed the last bus.|B
buchen|bucht · buchte · hat gebucht|to book|Wir haben das Hotel online gebucht.|We booked the hotel online.|B
übernachten|übernachtet · übernachtete · hat übernachtet|to stay overnight|Wir übernachten bei Freunden.|We are staying the night with friends.|B
besichtigen|besichtigt · besichtigte · hat besichtigt|to visit, to look round|Morgen besichtigen wir das Schloss.|Tomorrow we are visiting the castle.|B
abholen|holt ab · holte ab · hat abgeholt|to pick up, to collect|Kannst du mich vom Bahnhof abholen?|Can you pick me up from the station?|B
beantragen|beantragt · beantragte · hat beantragt|to apply for (officially)|Ich möchte ein Visum beantragen.|I would like to apply for a visa.|B
ausfüllen|füllt aus · füllte aus · hat ausgefüllt|to fill in (a form)|Füllen Sie bitte das Formular aus.|Please fill in the form.|B
unterschreiben|unterschreibt · unterschrieb · hat unterschrieben|to sign|Sie müssen hier unten unterschreiben.|You have to sign down here.|B
verlängern|verlängert · verlängerte · hat verlängert|to extend, to renew|Ich muss meinen Pass verlängern lassen.|I have to get my passport renewed.|B
sich anmelden|meldet sich an · meldete sich an · hat sich angemeldet|to register, to sign up|Ich habe mich für den Sprachkurs angemeldet.|I have signed up for the language course.|B
erlauben|erlaubt · erlaubte · hat erlaubt|to allow|Rauchen ist hier nicht erlaubt.|Smoking is not allowed here.|B
verbieten|verbietet · verbot · hat verboten|to forbid|Der Arzt hat ihm das Rauchen verboten.|The doctor has forbidden him to smoke.|B
bestehen|besteht · bestand · hat bestanden|to pass (an exam)|Sie hat die Prüfung mit gutem Ergebnis bestanden.|She passed the exam with a good result.|B
sich vorbereiten|bereitet sich vor · bereitete sich vor · hat sich vorbereitet|to prepare (oneself)|Ich bereite mich auf die Prüfung vor.|I am preparing for the exam.|B
wiederholen|wiederholt · wiederholte · hat wiederholt|to repeat, to revise|Können Sie das bitte wiederholen?|Could you repeat that, please?|B
erklären|erklärt · erklärte · hat erklärt|to explain|Die Lehrerin erklärt die Regel noch einmal.|The teacher explains the rule once more.|B
verstehen|versteht · verstand · hat verstanden|to understand|Ich habe die Frage nicht verstanden.|I did not understand the question.|B
übersetzen|übersetzt · übersetzte · hat übersetzt|to translate|Kannst du mir diesen Brief übersetzen?|Can you translate this letter for me?|B
teilnehmen|nimmt teil · nahm teil · hat teilgenommen|to take part|An dem Kurs nehmen zwölf Personen teil.|Twelve people are taking part in the course.|B
sich erinnern|erinnert sich · erinnerte sich · hat sich erinnert|to remember|Ich erinnere mich gern an meine Schulzeit.|I like to remember my school days.|B
vergessen|vergisst · vergaß · hat vergessen|to forget|Ich habe meinen Schirm im Zug vergessen.|I left my umbrella on the train.|B
einladen|lädt ein · lud ein · hat eingeladen|to invite|Wir möchten euch zum Essen einladen.|We would like to invite you to dinner.|B
sich treffen|trifft sich · traf sich · hat sich getroffen|to meet up|Wir treffen uns um sieben vor dem Kino.|We are meeting at seven in front of the cinema.|B
sich unterhalten|unterhält sich · unterhielt sich · hat sich unterhalten|to chat, to talk|Wir haben uns lange über den Film unterhalten.|We talked about the film for a long time.|B
empfehlen|empfiehlt · empfahl · hat empfohlen|to recommend|Können Sie mir ein gutes Restaurant empfehlen?|Can you recommend a good restaurant?|B
vorschlagen|schlägt vor · schlug vor · hat vorgeschlagen|to suggest|Ich schlage vor, dass wir zu Fuß gehen.|I suggest that we walk.|B
sich freuen|freut sich · freute sich · hat sich gefreut|to be glad, to look forward|Ich freue mich schon auf das Wochenende.|I am already looking forward to the weekend.|B
sich ärgern|ärgert sich · ärgerte sich · hat sich geärgert|to be annoyed|Er ärgert sich über die Verspätung.|He is annoyed about the delay.|B
sich beschweren|beschwert sich · beschwerte sich · hat sich beschwert|to complain|Die Gäste haben sich über den Lärm beschwert.|The guests complained about the noise.|B
sich entschuldigen|entschuldigt sich · entschuldigte sich · hat sich entschuldigt|to apologise|Ich möchte mich für den Fehler entschuldigen.|I would like to apologise for the mistake.|B
sich entscheiden|entscheidet sich · entschied sich · hat sich entschieden|to decide|Ich kann mich nicht entscheiden.|I cannot decide.|B
sich streiten|streitet sich · stritt sich · hat sich gestritten|to argue|Die Kinder streiten sich um das Spielzeug.|The children are arguing over the toy.|B
vertrauen|vertraut · vertraute · hat vertraut|to trust|Du kannst mir vertrauen.|You can trust me.|B
versprechen|verspricht · versprach · hat versprochen|to promise|Er hat versprochen, pünktlich zu sein.|He promised to be on time.|B
bestellen|bestellt · bestellte · hat bestellt|to order|Ich habe die Schuhe im Internet bestellt.|I ordered the shoes online.|B
liefern|liefert · lieferte · hat geliefert|to deliver|Die Möbel werden nächste Woche geliefert.|The furniture will be delivered next week.|B
umtauschen|tauscht um · tauschte um · hat umgetauscht|to exchange (goods)|Kann ich diese Jacke umtauschen?|Can I exchange this jacket?|B
überweisen|überweist · überwies · hat überwiesen|to transfer (money)|Bitte überweisen Sie den Betrag bis Freitag.|Please transfer the amount by Friday.|B
sparen|spart · sparte · hat gespart|to save (money, energy)|Wir sparen für ein neues Auto.|We are saving for a new car.|B
ausgeben|gibt aus · gab aus · hat ausgegeben|to spend (money)|Er gibt viel Geld für Kleidung aus.|He spends a lot of money on clothes.|B
vergleichen|vergleicht · verglich · hat verglichen|to compare|Man sollte die Preise vergleichen.|You should compare prices.|B
anprobieren|probiert an · probierte an · hat anprobiert|to try on|Kann ich die Hose anprobieren?|Can I try the trousers on?|B
schützen|schützt · schützte · hat geschützt|to protect|Wir müssen das Klima schützen.|We must protect the climate.|B
trennen|trennt · trennte · hat getrennt|to separate|In Deutschland trennt man den Müll.|In Germany people separate their rubbish.|B
verbrauchen|verbraucht · verbrauchte · hat verbraucht|to use up, to consume|Das alte Auto verbraucht zu viel Benzin.|The old car uses too much petrol.|B
wachsen|wächst · wuchs · ist gewachsen|to grow|Die Stadt ist in den letzten Jahren stark gewachsen.|The city has grown a lot in recent years.|B
passieren|passiert · passierte · ist passiert|to happen|Was ist denn hier passiert?|What has happened here?|B
sich gewöhnen|gewöhnt sich · gewöhnte sich · hat sich gewöhnt|to get used (to)|Ich habe mich an das Wetter gewöhnt.|I have got used to the weather.|B
sich kümmern|kümmert sich · kümmerte sich · hat sich gekümmert|to take care (of)|Sie kümmert sich um ihre Großmutter.|She takes care of her grandmother.|B
erfahren|erfährt · erfuhr · hat erfahren|to find out, to learn of|Ich habe es erst gestern erfahren.|I only found out yesterday.|B
gelingen|gelingt · gelang · ist gelungen|to succeed, to turn out well|Der Kuchen ist mir gut gelungen.|My cake turned out well.|B
beschließen|beschließt · beschloss · hat beschlossen|to decide, to resolve|Wir haben beschlossen, früher zu fahren.|We have decided to leave earlier.|B
bemerken|bemerkt · bemerkte · hat bemerkt|to notice|Ich habe den Fehler zu spät bemerkt.|I noticed the mistake too late.|B
abbiegen|biegt ab · bog ab · ist abgebogen|to turn (off)|An der Ampel biegen Sie bitte links ab.|Please turn left at the traffic lights.|B
abbrechen|bricht ab · brach ab · hat abgebrochen|to break off, to drop out of|Sie hat ihr Studium nach einem Jahr abgebrochen.|She dropped out of her degree after one year.|B
abgeben|gibt ab · gab ab · hat abgegeben|to hand in|Bitte geben Sie das Formular bis Freitag ab.|Please hand in the form by Friday.|A
abhängen|hängt ab · hing ab · hat abgehangen|to depend (von + Dat.)|Das hängt vom Wetter ab.|That depends on the weather.|B
abheben|hebt ab · hob ab · hat abgehoben|to withdraw (money)|Ich muss noch Geld am Automaten abheben.|I still need to withdraw money at the cash machine.|B
ablehnen|lehnt ab · lehnte ab · hat abgelehnt|to reject, to turn down|Er hat das Angebot leider abgelehnt.|Unfortunately, he turned down the offer.|B
sich abmelden|meldet sich ab · meldete sich ab · hat sich abgemeldet|to deregister, to sign out|Ich habe mich vom Kurs abgemeldet.|I have deregistered from the course.|B
abschicken|schickt ab · schickte ab · hat abgeschickt|to send off|Hast du die E-Mail schon abgeschickt?|Have you already sent off the email?|B
abschließen|schließt ab · schloss ab · hat abgeschlossen|to lock; to complete|Vergiss nicht, die Tür abzuschließen.|Don't forget to lock the door.|B
abstellen|stellt ab · stellte ab · hat abgestellt|to park, to put down|Du kannst dein Fahrrad im Hof abstellen.|You can park your bike in the courtyard.|B
abwaschen|wäscht ab · wusch ab · hat abgewaschen|to wash up|Nach dem Essen wäscht er das Geschirr ab.|After the meal he washes the dishes.|A
achten|achtet · achtete · hat geachtet|to pay attention (auf + Akk.)|Bitte achten Sie auf die Stufe.|Please mind the step.|B
ändern|ändert · änderte · hat geändert|to change|Ich möchte meinen Termin ändern.|I would like to change my appointment.|A
anbieten|bietet an · bot an · hat angeboten|to offer|Darf ich Ihnen einen Kaffee anbieten?|May I offer you a coffee?|A
anfangen|fängt an · fing an · hat angefangen|to begin, to start|Der Kurs fängt um neun Uhr an.|The course starts at nine o'clock.|A
angeben|gibt an · gab an · hat angegeben|to state, to give (details)|Bitte geben Sie Ihre Adresse an.|Please give your address.|B
anhaben|hat an · hatte an · hat angehabt|to wear, to have on|Sie hat heute ein rotes Kleid an.|She is wearing a red dress today.|B
anhalten|hält an · hielt an · hat angehalten|to stop|Der Bus hält hier leider nicht an.|Unfortunately, the bus does not stop here.|B
anklicken|klickt an · klickte an · hat angeklickt|to click on|Klicken Sie bitte den Link an.|Please click on the link.|A
ankreuzen|kreuzt an · kreuzte an · hat angekreuzt|to tick, to mark with a cross|Kreuzen Sie die richtige Antwort an.|Tick the correct answer.|A
anmachen|macht an · machte an · hat angemacht|to switch on|Kannst du bitte das Licht anmachen?|Can you switch on the light, please?|A
annehmen|nimmt an · nahm an · hat angenommen|to accept; to assume|Sie hat die Stelle sofort angenommen.|She accepted the job straight away.|B
anrufen|ruft an · rief an · hat angerufen|to phone, to call|Ich rufe dich heute Abend an.|I'll call you this evening.|A
anschauen|schaut an · schaute an · hat angeschaut|to look at, to watch|Wir schauen heute Abend einen Film an.|We are watching a film this evening.|A
ansehen|sieht an · sah an · hat angesehen|to look at|Sieh mich bitte an, wenn ich mit dir rede.|Please look at me when I am talking to you.|A
sich anstrengen|strengt sich an · strengte sich an · hat sich angestrengt|to make an effort|Du musst dich in der Schule mehr anstrengen.|You have to make more of an effort at school.|B
antworten|antwortet · antwortete · hat geantwortet|to answer (auf + Akk.)|Er hat noch nicht auf meine E-Mail geantwortet.|He has not replied to my email yet.|A
anziehen|zieht an · zog an · hat angezogen|to put on (clothes)|Zieh eine Jacke an, es ist kalt.|Put a jacket on, it is cold.|A
arbeiten|arbeitet · arbeitete · hat gearbeitet|to work|Sie arbeitet in einem Krankenhaus.|She works in a hospital.|A
atmen|atmet · atmete · hat geatmet|to breathe|Atmen Sie bitte tief durch die Nase.|Please breathe deeply through your nose.|B
auffallen|fällt auf · fiel auf · ist aufgefallen|to be noticeable, to strike|Mir ist nichts Besonderes aufgefallen.|I did not notice anything special.|B
aufgeben|gibt auf · gab auf · hat aufgegeben|to give up; to post|Gib nicht auf, du schaffst das!|Don't give up, you can do it!|B
aufhängen|hängt auf · hängte auf · hat aufgehängt|to hang up|Ich hänge die Wäsche im Garten auf.|I am hanging the washing up in the garden.|B
aufheben|hebt auf · hob auf · hat aufgehoben|to pick up; to keep|Bitte heben Sie die Quittung gut auf.|Please keep the receipt safe.|B
aufhören|hört auf · hörte auf · hat aufgehört|to stop (mit + Dat.)|Es hat endlich aufgehört zu regnen.|It has finally stopped raining.|A
aufladen|lädt auf · lud auf · hat aufgeladen|to charge|Ich muss mein Handy aufladen.|I need to charge my mobile.|B
aufmachen|macht auf · machte auf · hat aufgemacht|to open|Kannst du bitte das Fenster aufmachen?|Can you open the window, please?|A
aufnehmen|nimmt auf · nahm auf · hat aufgenommen|to record; to take in|Ich nehme die Sendung heute Abend auf.|I am recording the programme this evening.|B
aufpassen|passt auf · passte auf · hat aufgepasst|to watch out, to look after (auf + Akk.)|Meine Mutter passt heute auf die Kinder auf.|My mother is looking after the children today.|A
sich aufregen|regt sich auf · regte sich auf · hat sich aufgeregt|to get upset (über + Akk.)|Er regt sich über jede Kleinigkeit auf.|He gets upset about every little thing.|B
aufschreiben|schreibt auf · schrieb auf · hat aufgeschrieben|to write down|Ich schreibe mir die Adresse auf.|I'll write down the address.|A
aufstehen|steht auf · stand auf · ist aufgestanden|to get up|Ich stehe jeden Tag um sechs Uhr auf.|I get up at six o'clock every day.|A
aufwachen|wacht auf · wachte auf · ist aufgewacht|to wake up|Heute bin ich sehr früh aufgewacht.|I woke up very early today.|A
aufwachsen|wächst auf · wuchs auf · ist aufgewachsen|to grow up|Sie ist in einem kleinen Dorf aufgewachsen.|She grew up in a small village.|B
ausdrucken|druckt aus · druckte aus · hat ausgedruckt|to print out|Ich drucke das Ticket zu Hause aus.|I'll print out the ticket at home.|A
ausfallen|fällt aus · fiel aus · ist ausgefallen|to be cancelled|Der Unterricht fällt morgen aus.|Lessons are cancelled tomorrow.|B
ausgehen|geht aus · ging aus · ist ausgegangen|to go out|Am Samstag gehen wir zusammen aus.|We are going out together on Saturday.|A
sich auskennen|kennt sich aus · kannte sich aus · hat sich ausgekannt|to know one's way around|Ich kenne mich in dieser Stadt gut aus.|I know my way around this city well.|B
ausleihen|leiht aus · lieh aus · hat ausgeliehen|to borrow, to lend|Ich habe das Buch in der Bibliothek ausgeliehen.|I borrowed the book from the library.|B
ausmachen|macht aus · machte aus · hat ausgemacht|to switch off|Mach bitte den Fernseher aus.|Please switch off the television.|A
auspacken|packt aus · packte aus · hat ausgepackt|to unpack|Die Kinder packen ihre Geschenke aus.|The children are unwrapping their presents.|A
ausprobieren|probiert aus · probierte aus · hat ausprobiert|to try out|Ich möchte das neue Rezept ausprobieren.|I would like to try out the new recipe.|B
sich ausruhen|ruht sich aus · ruhte sich aus · hat sich ausgeruht|to rest|Nach der Arbeit ruhe ich mich kurz aus.|After work I rest for a little while.|A
ausschalten|schaltet aus · schaltete aus · hat ausgeschaltet|to switch off|Bitte schalten Sie Ihre Handys aus.|Please switch off your mobile phones.|A
aussehen|sieht aus · sah aus · hat ausgesehen|to look, to appear|Du siehst heute sehr müde aus.|You look very tired today.|A
aussprechen|spricht aus · sprach aus · hat ausgesprochen|to pronounce|Wie spricht man dieses Wort aus?|How do you pronounce this word?|B
aussteigen|steigt aus · stieg aus · ist ausgestiegen|to get off, to get out|Wir steigen an der nächsten Haltestelle aus.|We are getting off at the next stop.|A
ausstellen|stellt aus · stellte aus · hat ausgestellt|to issue; to exhibit|Der Arzt stellt Ihnen ein Rezept aus.|The doctor will issue you a prescription.|B
aussuchen|sucht aus · suchte aus · hat ausgesucht|to choose, to pick|Du darfst dir ein Geschenk aussuchen.|You may choose a present for yourself.|B
auswählen|wählt aus · wählte aus · hat ausgewählt|to select|Wählen Sie bitte eine Sprache aus.|Please select a language.|B
ausziehen|zieht aus · zog aus · ist ausgezogen|to move out|Mein Sohn zieht nächsten Monat aus.|My son is moving out next month.|A
backen|backt · backte · hat gebacken|to bake|Meine Oma backt jeden Sonntag einen Kuchen.|My grandma bakes a cake every Sunday.|A
baden|badet · badete · hat gebadet|to bathe, to have a bath|Im Sommer baden wir gern im See.|In summer we like to bathe in the lake.|A
basteln|bastelt · bastelte · hat gebastelt|to make things, to do handicrafts|Die Kinder basteln Karten für Weihnachten.|The children are making cards for Christmas.|A
bauen|baut · baute · hat gebaut|to build|Sie bauen ein Haus am Stadtrand.|They are building a house on the edge of town.|A
beachten|beachtet · beachtete · hat beachtet|to observe, to pay attention to|Bitte beachten Sie die Hinweise auf dem Schild.|Please observe the instructions on the sign.|B
beantworten|beantwortet · beantwortete · hat beantwortet|to answer (a question)|Können Sie bitte meine Frage beantworten?|Can you answer my question, please?|A
sich bedanken|bedankt sich · bedankte sich · hat sich bedankt|to say thank you (für + Akk.)|Ich möchte mich für Ihre Hilfe bedanken.|I would like to thank you for your help.|A
bedeuten|bedeutet · bedeutete · hat bedeutet|to mean|Was bedeutet dieses Wort auf Englisch?|What does this word mean in English?|A
bedienen|bedient · bediente · hat bedient|to serve; to operate|Der Kellner bedient die Gäste sehr freundlich.|The waiter serves the guests in a very friendly way.|B
sich beeilen|beeilt sich · beeilte sich · hat sich beeilt|to hurry|Beeil dich, der Zug fährt gleich!|Hurry up, the train is about to leave!|A
beenden|beendet · beendete · hat beendet|to finish, to end|Sie hat ihre Ausbildung im Juni beendet.|She finished her training in June.|B
sich befinden|befindet sich · befand sich · hat sich befunden|to be located|Die Toiletten befinden sich im ersten Stock.|The toilets are on the first floor.|B
begegnen|begegnet · begegnete · ist begegnet|to meet, to come across (+ Dat.)|Ich bin ihm gestern in der Stadt begegnet.|I came across him in town yesterday.|B
beginnen|beginnt · begann · hat begonnen|to begin|Der Film beginnt um acht Uhr.|The film begins at eight o'clock.|A
begleiten|begleitet · begleitete · hat begleitet|to accompany|Ich begleite dich gern zum Bahnhof.|I'll happily go with you to the station.|B
begründen|begründet · begründete · hat begründet|to give reasons for|Bitte begründen Sie Ihre Meinung.|Please give reasons for your opinion.|B
begrüßen|begrüßt · begrüßte · hat begrüßt|to greet, to welcome|Die Chefin begrüßt die neuen Kollegen.|The boss welcomes the new colleagues.|B
behalten|behält · behielt · hat behalten|to keep|Sie können den Stift gern behalten.|You are welcome to keep the pen.|B
behandeln|behandelt · behandelte · hat behandelt|to treat|Der Arzt behandelt den Patienten sofort.|The doctor treats the patient immediately.|B
behaupten|behauptet · behauptete · hat behauptet|to claim|Er behauptet, dass er nichts gesehen hat.|He claims that he saw nothing.|B
beibringen|bringt bei · brachte bei · hat beigebracht|to teach|Mein Vater hat mir das Schwimmen beigebracht.|My father taught me to swim.|B
beißen|beißt · biss · hat gebissen|to bite|Keine Angst, der Hund beißt nicht.|Don't worry, the dog doesn't bite.|B
bekommen|bekommt · bekam · hat bekommen|to get, to receive|Ich habe heute einen Brief bekommen.|I got a letter today.|A
benötigen|benötigt · benötigte · hat benötigt|to need, to require|Für die Reise benötigen Sie einen Pass.|You need a passport for the trip.|B
benutzen|benutzt · benutzte · hat benutzt|to use|Darf ich kurz dein Telefon benutzen?|May I use your phone for a moment?|A
beobachten|beobachtet · beobachtete · hat beobachtet|to observe, to watch|Wir beobachten die Vögel im Garten.|We are watching the birds in the garden.|B
beraten|berät · beriet · hat beraten|to advise|Die Verkäuferin hat uns sehr gut beraten.|The shop assistant advised us very well.|B
berichten|berichtet · berichtete · hat berichtet|to report (über + Akk.)|Die Zeitung berichtet über den Unfall.|The newspaper reports on the accident.|B
sich beruhigen|beruhigt sich · beruhigte sich · hat sich beruhigt|to calm down|Beruhige dich, es ist nichts passiert.|Calm down, nothing has happened.|B
sich beschäftigen|beschäftigt sich · beschäftigte sich · hat sich beschäftigt|to occupy oneself, to deal (mit + Dat.)|Er beschäftigt sich viel mit Musik.|He spends a lot of time on music.|B
beschreiben|beschreibt · beschrieb · hat beschrieben|to describe|Können Sie den Weg zum Bahnhof beschreiben?|Can you describe the way to the station?|A
besitzen|besitzt · besaß · hat besessen|to own|Meine Eltern besitzen ein kleines Haus.|My parents own a small house.|B
besorgen|besorgt · besorgte · hat besorgt|to get, to obtain|Ich besorge noch schnell Brot und Milch.|I'll just quickly get bread and milk.|B
besprechen|bespricht · besprach · hat besprochen|to discuss|Das besprechen wir morgen in der Sitzung.|We will discuss that in the meeting tomorrow.|B
bestätigen|bestätigt · bestätigte · hat bestätigt|to confirm|Bitte bestätigen Sie den Termin per E-Mail.|Please confirm the appointment by email.|B
bestimmen|bestimmt · bestimmte · hat bestimmt|to decide, to determine|Das bestimmt der Chef allein.|The boss decides that on his own.|B
besuchen|besucht · besuchte · hat besucht|to visit|Am Wochenende besuchen wir meine Großeltern.|At the weekend we are visiting my grandparents.|A
betragen|beträgt · betrug · hat betragen|to amount to|Die Miete beträgt 700 Euro im Monat.|The rent is 700 euros a month.|B
betreuen|betreut · betreute · hat betreut|to look after|Sie betreut alte Menschen im Pflegeheim.|She looks after old people in the care home.|B
sich bewegen|bewegt sich · bewegte sich · hat sich bewegt|to move, to take exercise|Sie sollten sich mehr bewegen.|You should take more exercise.|B
beweisen|beweist · bewies · hat bewiesen|to prove|Können Sie das beweisen?|Can you prove that?|B
bezahlen|bezahlt · bezahlte · hat bezahlt|to pay|Kann ich mit Karte bezahlen?|Can I pay by card?|A
bieten|bietet · bot · hat geboten|to offer|Die Stadt bietet viele Freizeitmöglichkeiten.|The town offers many leisure activities.|B
bitten|bittet · bat · hat gebeten|to ask, to request (um + Akk.)|Darf ich Sie um einen Gefallen bitten?|May I ask you a favour?|A
bleiben|bleibt · blieb · ist geblieben|to stay, to remain|Wir bleiben heute Abend zu Hause.|We are staying at home this evening.|A
braten|brät · briet · hat gebraten|to fry, to roast|Er brät das Fleisch in der Pfanne.|He fries the meat in the pan.|A
brauchen|braucht · brauchte · hat gebraucht|to need|Ich brauche einen neuen Pass.|I need a new passport.|A
brechen|bricht · brach · hat gebrochen|to break|Er hat sich beim Skifahren das Bein gebrochen.|He broke his leg while skiing.|B
bremsen|bremst · bremste · hat gebremst|to brake|Der Fahrer musste plötzlich stark bremsen.|The driver suddenly had to brake hard.|B
brennen|brennt · brannte · hat gebrannt|to burn, to be on fire|Im Wohnzimmer brennt noch Licht.|There is still a light on in the living room.|B
bringen|bringt · brachte · hat gebracht|to bring, to take|Ich bringe die Kinder zur Schule.|I take the children to school.|A
buchstabieren|buchstabiert · buchstabierte · hat buchstabiert|to spell|Können Sie bitte Ihren Namen buchstabieren?|Can you spell your name, please?|A
campen|campt · campte · hat gecampt|to camp|Im Urlaub campen wir am Meer.|On holiday we camp by the sea.|A
chatten|chattet · chattete · hat gechattet|to chat (online)|Sie chattet jeden Abend mit ihren Freunden.|She chats online with her friends every evening.|A
danken|dankt · dankte · hat gedankt|to thank (+ Dat., für + Akk.)|Ich danke Ihnen für Ihre Hilfe.|I thank you for your help.|A
dauern|dauert · dauerte · hat gedauert|to last, to take (time)|Die Fahrt dauert ungefähr zwei Stunden.|The journey takes about two hours.|A
decken|deckt · deckte · hat gedeckt|to lay (the table), to cover|Kannst du bitte den Tisch decken?|Can you lay the table, please?|B
denken|denkt · dachte · hat gedacht|to think (an + Akk.)|Ich denke oft an meine Familie.|I often think of my family.|A
diskutieren|diskutiert · diskutierte · hat diskutiert|to discuss (über + Akk.)|Wir haben lange über das Thema diskutiert.|We discussed the topic for a long time.|B
drehen|dreht · drehte · hat gedreht|to turn; to shoot (a film)|Drehen Sie den Schlüssel nach rechts.|Turn the key to the right.|B
drucken|druckt · druckte · hat gedruckt|to print|Der Drucker druckt nur schwarz-weiß.|The printer only prints in black and white.|A
drücken|drückt · drückte · hat gedrückt|to press, to push|Drücken Sie bitte den grünen Knopf.|Please press the green button.|A
durchfallen|fällt durch · fiel durch · ist durchgefallen|to fail (an exam)|Er ist leider bei der Prüfung durchgefallen.|Unfortunately, he failed the exam.|B
durchführen|führt durch · führte durch · hat durchgeführt|to carry out|Die Firma führt eine Umfrage durch.|The company is carrying out a survey.|B
durchlesen|liest durch · las durch · hat durchgelesen|to read through|Lesen Sie den Vertrag bitte genau durch.|Please read through the contract carefully.|B
dürfen|darf · durfte · hat gedurft|to be allowed to, may|Hier darf man nicht parken.|You are not allowed to park here.|A
duschen|duscht · duschte · hat geduscht|to have a shower|Ich dusche jeden Morgen vor dem Frühstück.|I have a shower every morning before breakfast.|A
sich eignen|eignet sich · eignete sich · hat sich geeignet|to be suitable (für + Akk.)|Dieses Buch eignet sich gut für Anfänger.|This book is well suited to beginners.|B
einfallen|fällt ein · fiel ein · ist eingefallen|to occur to, to come to mind (+ Dat.)|Mir fällt sein Name nicht ein.|I cannot think of his name.|B
einführen|führt ein · führte ein · hat eingeführt|to introduce|Die Schule hat neue Regeln eingeführt.|The school has introduced new rules.|B
eingeben|gibt ein · gab ein · hat eingegeben|to enter, to type in|Geben Sie bitte Ihr Passwort ein.|Please enter your password.|B
sich einigen|einigt sich · einigte sich · hat sich geeinigt|to agree (auf + Akk.)|Wir haben uns auf einen Preis geeinigt.|We have agreed on a price.|B
einkaufen|kauft ein · kaufte ein · hat eingekauft|to shop, to go shopping|Wir kaufen meistens am Samstag ein.|We usually go shopping on Saturday.|A
einnehmen|nimmt ein · nahm ein · hat eingenommen|to take (medicine)|Nehmen Sie die Tabletten nach dem Essen ein.|Take the tablets after meals.|B
einpacken|packt ein · packte ein · hat eingepackt|to pack, to wrap|Hast du die Badesachen schon eingepackt?|Have you already packed the swimming things?|A
einrichten|richtet ein · richtete ein · hat eingerichtet|to furnish, to set up|Sie haben ihre Wohnung modern eingerichtet.|They have furnished their flat in a modern style.|B
einschalten|schaltet ein · schaltete ein · hat eingeschaltet|to switch on|Schalten Sie zuerst den Computer ein.|Switch on the computer first.|A
einschlafen|schläft ein · schlief ein · ist eingeschlafen|to fall asleep|Das Kind ist sofort eingeschlafen.|The child fell asleep straight away.|A
eintragen|trägt ein · trug ein · hat eingetragen|to enter, to write in|Tragen Sie bitte Ihren Namen in die Liste ein.|Please enter your name in the list.|B
eintreten|tritt ein · trat ein · ist eingetreten|to enter; to join (in + Akk.)|Er ist vor zwei Jahren in den Verein eingetreten.|He joined the club two years ago.|B
einzahlen|zahlt ein · zahlte ein · hat eingezahlt|to pay in|Ich möchte Geld auf mein Konto einzahlen.|I would like to pay money into my account.|B
empfangen|empfängt · empfing · hat empfangen|to receive, to welcome|Sie empfängt die Gäste an der Tür.|She welcomes the guests at the door.|B
enden|endet · endete · hat geendet|to end|Der Kurs endet am 30. Juni.|The course ends on 30 June.|A
entdecken|entdeckt · entdeckte · hat entdeckt|to discover|Ich habe ein schönes Café entdeckt.|I have discovered a lovely café.|B
entfernen|entfernt · entfernte · hat entfernt|to remove|Wie kann man diesen Fleck entfernen?|How can you remove this stain?|B
enthalten|enthält · enthielt · hat enthalten|to contain|Dieser Saft enthält viel Zucker.|This juice contains a lot of sugar.|B
entlassen|entlässt · entließ · hat entlassen|to dismiss, to discharge|Die Firma hat zwanzig Mitarbeiter entlassen.|The company has dismissed twenty employees.|B
sich entspannen|entspannt sich · entspannte sich · hat sich entspannt|to relax|Im Urlaub kann ich mich richtig entspannen.|On holiday I can really relax.|B
entstehen|entsteht · entstand · ist entstanden|to arise, to come into being|Hier entsteht ein neues Einkaufszentrum.|A new shopping centre is being built here.|B
enttäuschen|enttäuscht · enttäuschte · hat enttäuscht|to disappoint|Der Film hat mich sehr enttäuscht.|The film disappointed me very much.|B
entwickeln|entwickelt · entwickelte · hat entwickelt|to develop|Die Firma entwickelt ein neues Produkt.|The company is developing a new product.|B
erfinden|erfindet · erfand · hat erfunden|to invent|Wer hat das Telefon erfunden?|Who invented the telephone?|B
erfüllen|erfüllt · erfüllte · hat erfüllt|to fulfil, to meet|Sie erfüllt alle Bedingungen für die Stelle.|She meets all the requirements for the job.|B
ergänzen|ergänzt · ergänzte · hat ergänzt|to complete, to add|Ergänzen Sie bitte die fehlenden Wörter.|Please fill in the missing words.|B
erhalten|erhält · erhielt · hat erhalten|to receive|Sie erhalten die Rechnung per Post.|You will receive the invoice by post.|B
erhöhen|erhöht · erhöhte · hat erhöht|to raise, to increase|Der Vermieter will die Miete erhöhen.|The landlord wants to raise the rent.|B
erkennen|erkennt · erkannte · hat erkannt|to recognise|Ich habe dich fast nicht erkannt.|I almost did not recognise you.|B
sich erkundigen|erkundigt sich · erkundigte sich · hat sich erkundigt|to enquire (nach + Dat.)|Ich möchte mich nach den Preisen erkundigen.|I would like to enquire about the prices.|B
erleben|erlebt · erlebte · hat erlebt|to experience|Im Urlaub haben wir viel erlebt.|We experienced a lot on holiday.|B
sich ernähren|ernährt sich · ernährte sich · hat sich ernährt|to eat, to feed oneself|Sie ernährt sich sehr gesund.|She eats very healthily.|B
eröffnen|eröffnet · eröffnete · hat eröffnet|to open (a shop, an account)|Ich möchte ein Konto eröffnen.|I would like to open an account.|B
erreichen|erreicht · erreichte · hat erreicht|to reach|Sie können mich jederzeit telefonisch erreichen.|You can reach me by phone at any time.|B
erscheinen|erscheint · erschien · ist erschienen|to appear, to be published|Die Zeitung erscheint jeden Tag.|The newspaper comes out every day.|B
erschrecken|erschrickt · erschrak · ist erschrocken|to get a fright|Ich bin bei dem lauten Geräusch erschrocken.|The loud noise gave me a fright.|B
ersetzen|ersetzt · ersetzte · hat ersetzt|to replace, to reimburse|Die Versicherung ersetzt den Schaden.|The insurance covers the damage.|B
erwarten|erwartet · erwartete · hat erwartet|to expect|Wir erwarten heute Abend Gäste.|We are expecting guests this evening.|B
erzählen|erzählt · erzählte · hat erzählt|to tell (von + Dat.)|Erzähl mir von deinem Urlaub!|Tell me about your holiday!|A
erziehen|erzieht · erzog · hat erzogen|to bring up, to raise|Sie erzieht ihre zwei Kinder allein.|She is bringing up her two children on her own.|B
essen|isst · aß · hat gegessen|to eat|Wir essen heute Abend Fisch.|We are having fish this evening.|A
fahren|fährt · fuhr · ist gefahren|to drive, to go (by vehicle)|Ich fahre jeden Tag mit dem Bus zur Arbeit.|I go to work by bus every day.|A
fallen|fällt · fiel · ist gefallen|to fall|Das Glas ist auf den Boden gefallen.|The glass fell on the floor.|A
fangen|fängt · fing · hat gefangen|to catch|Der Hund fängt den Ball im Garten.|The dog catches the ball in the garden.|B
fehlen|fehlt · fehlte · hat gefehlt|to be missing, to be absent|In der Suppe fehlt noch etwas Salz.|The soup still needs a little salt.|A
fernsehen|sieht fern · sah fern · hat ferngesehen|to watch television|Abends sehen wir oft zusammen fern.|In the evenings we often watch television together.|A
festlegen|legt fest · legte fest · hat festgelegt|to fix, to set|Wir müssen noch einen Termin festlegen.|We still have to fix a date.|B
feststellen|stellt fest · stellte fest · hat festgestellt|to notice, to find out|Der Arzt hat nichts Schlimmes festgestellt.|The doctor found nothing serious.|B
finden|findet · fand · hat gefunden|to find|Ich kann meinen Schlüssel nicht finden.|I cannot find my key.|A
fliegen|fliegt · flog · ist geflogen|to fly|Im Sommer fliegen wir nach Spanien.|In the summer we are flying to Spain.|A
folgen|folgt · folgte · ist gefolgt|to follow (+ Dat.)|Bitte folgen Sie mir ins Büro.|Please follow me into the office.|B
fordern|fordert · forderte · hat gefordert|to demand|Die Mitarbeiter fordern mehr Lohn.|The employees are demanding higher wages.|B
fördern|fördert · förderte · hat gefördert|to support, to promote|Die Stadt fördert junge Künstler.|The city supports young artists.|B
fragen|fragt · fragte · hat gefragt|to ask (nach + Dat.)|Darf ich Sie etwas fragen?|May I ask you something?|A
frieren|friert · fror · hat gefroren|to be cold, to freeze|Ohne Jacke friere ich im Winter sofort.|Without a jacket I get cold straight away in winter.|B
sich fühlen|fühlt sich · fühlte sich · hat sich gefühlt|to feel|Heute fühle ich mich viel besser.|I feel much better today.|A
führen|führt · führte · hat geführt|to lead, to run|Diese Straße führt direkt zum Bahnhof.|This street leads straight to the station.|B
funktionieren|funktioniert · funktionierte · hat funktioniert|to work, to function|Der Drucker funktioniert leider nicht mehr.|Unfortunately the printer no longer works.|A
geben|gibt · gab · hat gegeben|to give|Kannst du mir bitte das Buch geben?|Can you give me the book, please?|A
gefallen|gefällt · gefiel · hat gefallen|to please, to like (+ Dat.)|Die neue Wohnung gefällt mir sehr gut.|I like the new flat very much.|A
gehen|geht · ging · ist gegangen|to go, to walk|Wir gehen heute Abend ins Kino.|We are going to the cinema this evening.|A
gehören|gehört · gehörte · hat gehört|to belong (+ Dat.)|Wem gehört diese Tasche?|Who does this bag belong to?|A
genießen|genießt · genoss · hat genossen|to enjoy|Wir genießen die Ruhe auf dem Land.|We enjoy the peace and quiet in the country.|B
geschehen|geschieht · geschah · ist geschehen|to happen|Der Unfall ist gestern Abend geschehen.|The accident happened yesterday evening.|B
gewinnen|gewinnt · gewann · hat gewonnen|to win|Unsere Mannschaft hat das Spiel gewonnen.|Our team won the match.|A
glauben|glaubt · glaubte · hat geglaubt|to believe, to think (an + Akk.)|Ich glaube, dass er heute nicht kommt.|I think that he is not coming today.|A
haben|hat · hatte · hat gehabt|to have|Ich habe heute leider keine Zeit.|Unfortunately I have no time today.|A
halten|hält · hielt · hat gehalten|to hold, to stop|Der Bus hält direkt vor dem Rathaus.|The bus stops right in front of the town hall.|A
handeln|handelt · handelte · hat gehandelt|to act, to be about (von + Dat.)|Der Film handelt von einer jungen Ärztin.|The film is about a young doctor.|B
heißen|heißt · hieß · hat geheißen|to be called, to mean|Wie heißt die neue Kollegin?|What is the new colleague called?|A
helfen|hilft · half · hat geholfen|to help (+ Dat.)|Kannst du mir beim Umzug helfen?|Can you help me with the move?|A
herstellen|stellt her · stellte her · hat hergestellt|to produce, to manufacture|Die Firma stellt Möbel aus Holz her.|The company manufactures furniture from wood.|B
herunterladen|lädt herunter · lud herunter · hat heruntergeladen|to download|Du kannst das Formular im Internet herunterladen.|You can download the form on the internet.|B
hinfallen|fällt hin · fiel hin · ist hingefallen|to fall down|Das Kind ist auf der Treppe hingefallen.|The child fell down on the stairs.|B
hoffen|hofft · hoffte · hat gehofft|to hope (auf + Akk.)|Ich hoffe, dass du bald wieder gesund bist.|I hope that you are well again soon.|A
holen|holt · holte · hat geholt|to fetch, to get|Ich hole schnell Brötchen vom Bäcker.|I will quickly fetch rolls from the baker's.|A
hören|hört · hörte · hat gehört|to hear, to listen to|Ich höre gern Musik beim Kochen.|I like listening to music while cooking.|A
sich informieren|informiert sich · informierte sich · hat sich informiert|to find out, to get information (über + Akk.)|Ich möchte mich über den Kurs informieren.|I would like to find out about the course.|B
sich interessieren|interessiert sich · interessierte sich · hat sich interessiert|to be interested (für + Akk.)|Meine Tochter interessiert sich für Technik.|My daughter is interested in technology.|B
sich irren|irrt sich · irrte sich · hat sich geirrt|to be mistaken|Entschuldigung, ich habe mich im Datum geirrt.|Sorry, I got the date wrong.|B
kaufen|kauft · kaufte · hat gekauft|to buy|Ich habe mir ein neues Fahrrad gekauft.|I have bought myself a new bicycle.|A
kennen|kennt · kannte · hat gekannt|to know (a person or place)|Kennst du ein gutes Restaurant hier?|Do you know a good restaurant here?|A
kennenlernen|lernt kennen · lernte kennen · hat kennengelernt|to get to know, to meet|Wir haben uns im Sprachkurs kennengelernt.|We met on the language course.|A
klappen|klappt · klappte · hat geklappt|to work out|Mit dem Termin hat alles gut geklappt.|Everything worked out well with the appointment.|B
klären|klärt · klärte · hat geklärt|to clarify, to sort out|Wir müssen diese Frage noch klären.|We still have to clarify this question.|B
klingen|klingt · klang · hat geklungen|to sound|Dein Vorschlag klingt sehr interessant.|Your suggestion sounds very interesting.|B
kommen|kommt · kam · ist gekommen|to come|Kommst du morgen mit zur Party?|Are you coming along to the party tomorrow?|A
können|kann · konnte · hat gekonnt|to be able to, can|Ich kann morgen leider nicht kommen.|Unfortunately I cannot come tomorrow.|A
kontrollieren|kontrolliert · kontrollierte · hat kontrolliert|to check, to inspect|Im Zug werden die Fahrkarten kontrolliert.|The tickets are checked on the train.|B
sich konzentrieren|konzentriert sich · konzentrierte sich · hat sich konzentriert|to concentrate (auf + Akk.)|Bei dem Lärm kann ich mich nicht konzentrieren.|I cannot concentrate with that noise.|B
kosten|kostet · kostete · hat gekostet|to cost|Wie viel kostet eine Fahrkarte nach Berlin?|How much does a ticket to Berlin cost?|A
kriegen|kriegt · kriegte · hat gekriegt|to get (informal)|Ich habe heute ein Paket gekriegt.|I got a parcel today.|B
lächeln|lächelt · lächelte · hat gelächelt|to smile|Die Verkäuferin lächelt immer freundlich.|The shop assistant always smiles in a friendly way.|B
lassen|lässt · ließ · hat gelassen|to let, to leave|Ich habe mein Handy zu Hause gelassen.|I left my mobile phone at home.|A
laufen|läuft · lief · ist gelaufen|to run, to walk|Wir sind zu Fuß zum Bahnhof gelaufen.|We walked to the station on foot.|A
leben|lebt · lebte · hat gelebt|to live|Meine Eltern leben seit zehn Jahren in Wien.|My parents have lived in Vienna for ten years.|A
legen|legt · legte · hat gelegt|to put, to lay|Leg die Zeitung bitte auf den Tisch.|Please put the newspaper on the table.|A
leiden|leidet · litt · hat gelitten|to suffer (an + Dat., unter + Dat.)|Viele Menschen leiden unter dem Lärm.|Many people suffer from the noise.|B
leihen|leiht · lieh · hat geliehen|to lend, to borrow|Kannst du mir bis morgen zehn Euro leihen?|Can you lend me ten euros until tomorrow?|B
sich leisten|leistet sich · leistete sich · hat sich geleistet|to afford|Ein neues Auto können wir uns nicht leisten.|We cannot afford a new car.|B
leiten|leitet · leitete · hat geleitet|to lead, to manage|Frau Berger leitet die Abteilung seit Mai.|Ms Berger has managed the department since May.|B
lernen|lernt · lernte · hat gelernt|to learn, to study|Ich lerne seit zwei Jahren Deutsch.|I have been learning German for two years.|A
lesen|liest · las · hat gelesen|to read|Hast du die E-Mail schon gelesen?|Have you read the email yet?|A
liegen|liegt · lag · hat gelegen|to lie, to be situated|Das Hotel liegt direkt am See.|The hotel is situated right by the lake.|A
sich lohnen|lohnt sich · lohnte sich · hat sich gelohnt|to be worth it|Der Besuch im Museum hat sich gelohnt.|The visit to the museum was worth it.|B
löschen|löscht · löschte · hat gelöscht|to delete, to put out|Ich habe die Datei aus Versehen gelöscht.|I deleted the file by mistake.|B
lösen|löst · löste · hat gelöst|to solve|Wir haben das Problem gemeinsam gelöst.|We solved the problem together.|B
lügen|lügt · log · hat gelogen|to lie, to tell a lie|Ich glaube ihm nicht, er hat gelogen.|I do not believe him, he lied.|B
machen|macht · machte · hat gemacht|to do, to make|Was machst du am Wochenende?|What are you doing at the weekend?|A
meinen|meint · meinte · hat gemeint|to mean, to think|Was meinst du zu diesem Vorschlag?|What do you think of this suggestion?|A
melden|meldet · meldete · hat gemeldet|to report|Sie müssen den Schaden sofort melden.|You must report the damage immediately.|B
merken|merkt · merkte · hat gemerkt|to notice|Ich habe den Fehler zu spät gemerkt.|I noticed the mistake too late.|B
messen|misst · maß · hat gemessen|to measure|Die Ärztin misst zuerst das Fieber.|The doctor takes the temperature first.|B
mitbringen|bringt mit · brachte mit · hat mitgebracht|to bring along|Soll ich etwas zum Essen mitbringen?|Shall I bring something to eat?|A
mitnehmen|nimmt mit · nahm mit · hat mitgenommen|to take along|Nimm bitte einen Regenschirm mit.|Please take an umbrella with you.|A
mitteilen|teilt mit · teilte mit · hat mitgeteilt|to inform, to tell|Bitte teilen Sie uns Ihre neue Adresse mit.|Please tell us your new address.|B
mögen|mag · mochte · hat gemocht|to like|Ich mag keinen Kaffee ohne Milch.|I do not like coffee without milk.|A
müssen|muss · musste · hat gemusst|to have to, must|Ich muss morgen früh aufstehen.|I have to get up early tomorrow.|A
nachdenken|denkt nach · dachte nach · hat nachgedacht|to think, to reflect (über + Akk.)|Ich muss noch über das Angebot nachdenken.|I still have to think about the offer.|B
nachfragen|fragt nach · fragte nach · hat nachgefragt|to enquire, to ask again|Ich frage morgen beim Amt noch einmal nach.|I will ask again at the office tomorrow.|B
nehmen|nimmt · nahm · hat genommen|to take|Ich nehme heute lieber das Fahrrad.|I would rather take the bicycle today.|A
nennen|nennt · nannte · hat genannt|to name, to call|Können Sie mir einen Grund nennen?|Can you give me a reason?|B
nutzen|nutzt · nutzte · hat genutzt|to use|Viele Leute nutzen das Handy zum Bezahlen.|Many people use their mobile phone to pay.|B
öffnen|öffnet · öffnete · hat geöffnet|to open|Kannst du bitte das Fenster öffnen?|Can you open the window, please?|A
organisieren|organisiert · organisierte · hat organisiert|to organise|Wer organisiert das Fest für die Nachbarn?|Who is organising the party for the neighbours?|B
pflegen|pflegt · pflegte · hat gepflegt|to care for, to look after|Sie pflegt ihre kranke Mutter zu Hause.|She looks after her sick mother at home.|B
planen|plant · plante · hat geplant|to plan|Wir planen eine Reise nach Italien.|We are planning a trip to Italy.|B
prüfen|prüft · prüfte · hat geprüft|to check, to examine|Bitte prüfen Sie die Rechnung genau.|Please check the invoice carefully.|B
raten|rät · riet · hat geraten|to advise, to guess (zu + Dat.)|Der Arzt rät mir zu mehr Bewegung.|The doctor advises me to take more exercise.|B
reagieren|reagiert · reagierte · hat reagiert|to react (auf + Akk.)|Wie hat dein Chef auf die Nachricht reagiert?|How did your boss react to the news?|B
reichen|reicht · reichte · hat gereicht|to be enough, to pass|Das Geld reicht nicht für den Urlaub.|The money is not enough for the holiday.|B
reinigen|reinigt · reinigte · hat gereinigt|to clean|Ich muss meinen Mantel reinigen lassen.|I have to have my coat cleaned.|B
reisen|reist · reiste · ist gereist|to travel|Meine Großeltern reisen gern mit dem Zug.|My grandparents like travelling by train.|A
retten|rettet · rettete · hat gerettet|to save, to rescue|Die Feuerwehr hat alle Bewohner gerettet.|The fire brigade rescued all the residents.|B
riechen|riecht · roch · hat gerochen|to smell (nach + Dat.)|In der Küche riecht es nach frischem Brot.|It smells of fresh bread in the kitchen.|B
rufen|ruft · rief · hat gerufen|to call, to shout|Wir müssen sofort einen Arzt rufen.|We have to call a doctor immediately.|A
sagen|sagt · sagte · hat gesagt|to say, to tell|Kannst du mir sagen, wie spät es ist?|Can you tell me what time it is?|A
sammeln|sammelt · sammelte · hat gesammelt|to collect|Mein Bruder sammelt alte Münzen.|My brother collects old coins.|B
schaden|schadet · schadete · hat geschadet|to harm, to damage (+ Dat.)|Zu viel Zucker schadet der Gesundheit.|Too much sugar is bad for your health.|B
schaffen|schafft · schaffte · hat geschafft|to manage, to achieve|Ich habe die Prüfung endlich geschafft.|I have finally passed the exam.|B
schicken|schickt · schickte · hat geschickt|to send|Ich schicke Ihnen die Unterlagen per Post.|I will send you the documents by post.|A
schlafen|schläft · schlief · hat geschlafen|to sleep|Ich habe letzte Nacht schlecht geschlafen.|I slept badly last night.|A
schlagen|schlägt · schlug · hat geschlagen|to hit, to beat|Man darf Kinder nicht schlagen.|You must not hit children.|B
schließen|schließt · schloss · hat geschlossen|to close, to shut|Das Geschäft schließt um 20 Uhr.|The shop closes at 8 pm.|A
schmecken|schmeckt · schmeckte · hat geschmeckt|to taste (good)|Der Kuchen schmeckt wirklich sehr gut.|The cake really tastes very good.|A
schneiden|schneidet · schnitt · hat geschnitten|to cut|Ich habe mich in den Finger geschnitten.|I have cut my finger.|B
schreiben|schreibt · schrieb · hat geschrieben|to write|Ich schreibe dir morgen eine E-Mail.|I will write you an email tomorrow.|A
sehen|sieht · sah · hat gesehen|to see|Hast du meine Brille gesehen?|Have you seen my glasses?|A
sein|ist · war · ist gewesen|to be|Ich bin noch nie in Hamburg gewesen.|I have never been to Hamburg.|A
senden|sendet · sendete · hat gesendet|to send, to broadcast|Bitte senden Sie uns Ihre Bewerbung per E-Mail.|Please send us your application by email.|B
sitzen|sitzt · saß · hat gesessen|to sit|Wir saßen den ganzen Abend auf dem Balkon.|We sat on the balcony all evening.|A
sollen|soll · sollte · hat gesollt|to be supposed to, should|Der Arzt sagt, ich soll mehr Wasser trinken.|The doctor says I should drink more water.|A
sorgen|sorgt · sorgte · hat gesorgt|to take care, to provide (für + Akk.)|Die Eltern sorgen für ihre Kinder.|The parents take care of their children.|B
speichern|speichert · speicherte · hat gespeichert|to save (data)|Vergiss nicht, den Text zu speichern.|Do not forget to save the text.|B
spielen|spielt · spielte · hat gespielt|to play|Die Kinder spielen draußen im Hof.|The children are playing outside in the courtyard.|A
sprechen|spricht · sprach · hat gesprochen|to speak (mit + Dat., über + Akk.)|Kann ich bitte mit Herrn Wagner sprechen?|Can I speak to Mr Wagner, please?|A
springen|springt · sprang · ist gesprungen|to jump|Die Katze ist auf den Tisch gesprungen.|The cat jumped onto the table.|B
stattfinden|findet statt · fand statt · hat stattgefunden|to take place|Das Konzert findet im Stadtpark statt.|The concert takes place in the town park.|B
stehen|steht · stand · hat gestanden|to stand, to be (written)|Das steht heute in der Zeitung.|That is in the newspaper today.|A
steigen|steigt · stieg · ist gestiegen|to rise, to climb|Die Mieten sind stark gestiegen.|Rents have risen sharply.|B
stellen|stellt · stellte · hat gestellt|to put, to place|Stell die Flaschen bitte in den Kühlschrank.|Please put the bottles in the fridge.|A
sterben|stirbt · starb · ist gestorben|to die (an + Dat.)|Mein Großvater ist letztes Jahr gestorben.|My grandfather died last year.|B
stören|stört · störte · hat gestört|to disturb, to bother|Entschuldigung, störe ich Sie gerade?|Excuse me, am I disturbing you?|B
suchen|sucht · suchte · hat gesucht|to look for (nach + Dat.)|Wir suchen eine größere Wohnung.|We are looking for a bigger flat.|A
tauschen|tauscht · tauschte · hat getauscht|to swap, to exchange|Wollen wir die Plätze tauschen?|Shall we swap seats?|B
teilen|teilt · teilte · hat geteilt|to share, to divide|Ich teile die Wohnung mit zwei Freunden.|I share the flat with two friends.|B
tragen|trägt · trug · hat getragen|to carry, to wear|Kannst du mir helfen, die Kiste zu tragen?|Can you help me carry the box?|A
träumen|träumt · träumte · hat geträumt|to dream (von + Dat.)|Sie träumt von einem Haus am Meer.|She dreams of a house by the sea.|B
trinken|trinkt · trank · hat getrunken|to drink|Möchtest du etwas trinken?|Would you like something to drink?|A
tun|tut · tat · hat getan|to do|Was kann ich für Sie tun?|What can I do for you?|A
überlegen|überlegt · überlegte · hat überlegt|to consider, to think over|Ich überlege, ob ich den Job annehme.|I am considering whether to accept the job.|B
übernehmen|übernimmt · übernahm · hat übernommen|to take over, to take on|Die Firma übernimmt die Kosten für den Kurs.|The company is covering the cost of the course.|B
überprüfen|überprüft · überprüfte · hat überprüft|to check, to verify|Bitte überprüfen Sie Ihre Angaben noch einmal.|Please check your details once more.|B
überraschen|überrascht · überraschte · hat überrascht|to surprise|Wir wollen Oma mit einem Besuch überraschen.|We want to surprise Grandma with a visit.|B
überzeugen|überzeugt · überzeugte · hat überzeugt|to convince (von + Dat.)|Seine Argumente haben mich nicht überzeugt.|His arguments did not convince me.|B
unterbrechen|unterbricht · unterbrach · hat unterbrochen|to interrupt|Entschuldigung, darf ich Sie kurz unterbrechen?|Excuse me, may I interrupt you briefly?|B
unternehmen|unternimmt · unternahm · hat unternommen|to do, to undertake|Am Wochenende unternehmen wir oft etwas zusammen.|At the weekend we often do something together.|B
unterrichten|unterrichtet · unterrichtete · hat unterrichtet|to teach|Herr Lang unterrichtet Deutsch und Geschichte.|Mr Lang teaches German and history.|B
unterscheiden|unterscheidet · unterschied · hat unterschieden|to distinguish, to tell apart|Ich kann die Zwillinge kaum unterscheiden.|I can hardly tell the twins apart.|B
unterstützen|unterstützt · unterstützte · hat unterstützt|to support|Meine Familie unterstützt mich beim Studium.|My family supports me in my studies.|B
sich verabreden|verabredet sich · verabredete sich · hat sich verabredet|to arrange to meet (mit + Dat.)|Ich habe mich mit Anna zum Essen verabredet.|I have arranged to meet Anna for a meal.|B
sich verabschieden|verabschiedet sich · verabschiedete sich · hat sich verabschiedet|to say goodbye (von + Dat.)|Ich muss mich leider schon verabschieden.|Unfortunately I have to say goodbye already.|B
verändern|verändert · veränderte · hat verändert|to change|Das Internet hat unser Leben stark verändert.|The internet has changed our lives a great deal.|B
verbessern|verbessert · verbesserte · hat verbessert|to improve, to correct|Ich möchte mein Deutsch verbessern.|I would like to improve my German.|B
verbinden|verbindet · verband · hat verbunden|to connect, to put through|Können Sie mich bitte mit Frau Klein verbinden?|Can you put me through to Ms Klein, please?|B
verbringen|verbringt · verbrachte · hat verbracht|to spend (time)|Wir haben den Urlaub an der Ostsee verbracht.|We spent the holiday on the Baltic coast.|B
verhindern|verhindert · verhinderte · hat verhindert|to prevent|Der Fahrer konnte den Unfall nicht verhindern.|The driver could not prevent the accident.|B
verkaufen|verkauft · verkaufte · hat verkauft|to sell|Ich möchte mein altes Auto verkaufen.|I would like to sell my old car.|A
verlangen|verlangt · verlangte · hat verlangt|to demand, to ask for|Der Vermieter verlangt drei Monatsmieten Kaution.|The landlord is asking for three months' rent as a deposit.|B
verlassen|verlässt · verließ · hat verlassen|to leave|Er verlässt das Haus jeden Morgen um sieben.|He leaves the house every morning at seven.|B
sich verlieben|verliebt sich · verliebte sich · hat sich verliebt|to fall in love (in + Akk.)|Er hat sich in seine Nachbarin verliebt.|He has fallen in love with his neighbour.|B
verlieren|verliert · verlor · hat verloren|to lose|Ich habe gestern meinen Ausweis verloren.|I lost my identity card yesterday.|A
vermeiden|vermeidet · vermied · hat vermieden|to avoid|Wir sollten unnötigen Müll vermeiden.|We should avoid unnecessary waste.|B
vermieten|vermietet · vermietete · hat vermietet|to rent out, to let|Sie vermietet ein Zimmer an Studenten.|She lets a room to students.|B
vermissen|vermisst · vermisste · hat vermisst|to miss|Ich vermisse meine Freunde aus der Heimat.|I miss my friends from home.|B
verschwinden|verschwindet · verschwand · ist verschwunden|to disappear|Mein Fahrrad ist aus dem Keller verschwunden.|My bicycle has disappeared from the cellar.|B
versuchen|versucht · versuchte · hat versucht|to try|Ich versuche, pünktlich zu sein.|I am trying to be on time.|A
verteilen|verteilt · verteilte · hat verteilt|to distribute, to hand out|Die Lehrerin verteilt die Arbeitsblätter.|The teacher hands out the worksheets.|B
verwenden|verwendet · verwendete · hat verwendet|to use|Für dieses Rezept verwende ich nur frisches Gemüse.|For this recipe I only use fresh vegetables.|B
verzichten|verzichtet · verzichtete · hat verzichtet|to do without (auf + Akk.)|Ich verzichte seit einem Jahr auf Fleisch.|I have been doing without meat for a year.|B
vorbeikommen|kommt vorbei · kam vorbei · ist vorbeigekommen|to drop by|Komm doch morgen nach der Arbeit vorbei.|Do drop by tomorrow after work.|B
vorhaben|hat vor · hatte vor · hat vorgehabt|to plan, to intend|Hast du am Samstag schon etwas vor?|Do you already have plans for Saturday?|B
sich vorstellen|stellt sich vor · stellte sich vor · hat sich vorgestellt|to introduce oneself, to imagine|Darf ich mich kurz vorstellen?|May I briefly introduce myself?|B
wählen|wählt · wählte · hat gewählt|to choose, to vote, to dial|Sie können zwischen zwei Menüs wählen.|You can choose between two set meals.|B
warnen|warnt · warnte · hat gewarnt|to warn (vor + Dat.)|Die Polizei warnt vor Glatteis.|The police are warning of black ice.|B
warten|wartet · wartete · hat gewartet|to wait (auf + Akk.)|Ich warte seit zwanzig Minuten auf den Bus.|I have been waiting for the bus for twenty minutes.|A
waschen|wäscht · wusch · hat gewaschen|to wash|Ich muss heute noch Wäsche waschen.|I still have to do the washing today.|A
wechseln|wechselt · wechselte · hat gewechselt|to change|Ich möchte gern die Arbeitsstelle wechseln.|I would like to change jobs.|B
wegwerfen|wirft weg · warf weg · hat weggeworfen|to throw away|Wirf die alten Zeitungen bitte nicht weg.|Please do not throw the old newspapers away.|B
wehtun|tut weh · tat weh · hat wehgetan|to hurt|Mein Rücken tut seit gestern weh.|My back has been hurting since yesterday.|A
sich weiterbilden|bildet sich weiter · bildete sich weiter · hat sich weitergebildet|to do further training|Sie will sich im Beruf weiterbilden.|She wants to do further training in her job.|B
werden|wird · wurde · ist geworden|to become|Meine Schwester will Ärztin werden.|My sister wants to become a doctor.|A
werfen|wirft · warf · hat geworfen|to throw|Bitte werfen Sie den Müll in die Tonne.|Please throw the rubbish in the bin.|B
wiegen|wiegt · wog · hat gewogen|to weigh|Das Paket wiegt fast fünf Kilo.|The parcel weighs almost five kilos.|B
wissen|weiß · wusste · hat gewusst|to know (a fact)|Weißt du, wann der Zug abfährt?|Do you know when the train leaves?|A
wollen|will · wollte · hat gewollt|to want (to)|Ich will nächstes Jahr eine Ausbildung machen.|I want to do an apprenticeship next year.|A
sich wundern|wundert sich · wunderte sich · hat sich gewundert|to be surprised (über + Akk.)|Ich wundere mich über die hohe Rechnung.|I am surprised at the high bill.|B
wünschen|wünscht · wünschte · hat gewünscht|to wish|Ich wünsche dir viel Glück für die Prüfung.|I wish you good luck for the exam.|A
zahlen|zahlt · zahlte · hat gezahlt|to pay|Kann ich mit Karte zahlen?|Can I pay by card?|A
zählen|zählt · zählte · hat gezählt|to count|Die Kassiererin zählt das Geld noch einmal.|The cashier counts the money once more.|B
zeigen|zeigt · zeigte · hat gezeigt|to show|Können Sie mir den Weg zum Bahnhof zeigen?|Can you show me the way to the station?|A
zerstören|zerstört · zerstörte · hat zerstört|to destroy|Das Feuer hat das ganze Haus zerstört.|The fire destroyed the whole house.|B
ziehen|zieht · zog · hat gezogen|to pull|Sie müssen an der Tür ziehen, nicht drücken.|You have to pull the door, not push.|B
zuhören|hört zu · hörte zu · hat zugehört|to listen (+ Dat.)|Bitte hören Sie jetzt gut zu.|Please listen carefully now.|A
zunehmen|nimmt zu · nahm zu · hat zugenommen|to increase, to put on weight|Im Urlaub habe ich zwei Kilo zugenommen.|I put on two kilos on holiday.|B
zurückgeben|gibt zurück · gab zurück · hat zurückgegeben|to give back, to return|Ich gebe dir das Buch morgen zurück.|I will give you the book back tomorrow.|B
zurückrufen|ruft zurück · rief zurück · hat zurückgerufen|to call back|Können Sie mich bitte später zurückrufen?|Can you call me back later, please?|B
zusammenarbeiten|arbeitet zusammen · arbeitete zusammen · hat zusammengearbeitet|to work together (mit + Dat.)|Wir arbeiten eng mit anderen Schulen zusammen.|We work closely with other schools.|B
zusammenfassen|fasst zusammen · fasste zusammen · hat zusammengefasst|to summarise|Können Sie den Text kurz zusammenfassen?|Can you summarise the text briefly?|B
zuschauen|schaut zu · schaute zu · hat zugeschaut|to watch (+ Dat.)|Ich schaue den Kindern gern beim Spielen zu.|I like watching the children play.|B
zustimmen|stimmt zu · stimmte zu · hat zugestimmt|to agree (+ Dat.)|In diesem Punkt stimme ich Ihnen zu.|I agree with you on this point.|B
feiern|feiert · feierte · hat gefeiert|to celebrate|Wir feiern heute meinen Geburtstag.|We are celebrating my birthday today.|A
kochen|kocht · kochte · hat gekocht|to cook|Am Wochenende koche ich gern.|I like cooking at the weekend.|A
lachen|lacht · lachte · hat gelacht|to laugh|Die Kinder lachen über den Witz.|The children are laughing at the joke.|A
lieben|liebt · liebte · hat geliebt|to love|Sie liebt ihre Arbeit.|She loves her job.|A
putzen|putzt · putzte · hat geputzt|to clean|Samstags putze ich die Wohnung.|On Saturdays I clean the flat.|A
wohnen|wohnt · wohnte · hat gewohnt|to live (reside)|Wir wohnen seit drei Jahren in Hamburg.|We have lived in Hamburg for three years.|A
tanzen|tanzt · tanzte · hat getanzt|to dance|Auf der Hochzeit haben alle getanzt.|Everyone danced at the wedding.|A
studieren|studiert · studierte · hat studiert|to study (at university)|Mein Bruder studiert Medizin in Wien.|My brother studies medicine in Vienna.|A
schwimmen|schwimmt · schwamm · ist geschwommen|to swim|Im Sommer schwimmen wir oft im See.|In summer we often swim in the lake.|A
heiraten|heiratet · heiratete · hat geheiratet|to marry, to get married|Sie haben letztes Jahr geheiratet.|They got married last year.|A
regnen|regnet · regnete · hat geregnet|to rain|Es hat den ganzen Tag geregnet.|It rained all day.|A
schenken|schenkt · schenkte · hat geschenkt|to give (as a present)|Was schenkst du ihm zum Geburtstag?|What are you giving him for his birthday?|A
reservieren|reserviert · reservierte · hat reserviert|to reserve|Ich möchte einen Tisch für vier Personen reservieren.|I would like to reserve a table for four.|A
telefonieren|telefoniert · telefonierte · hat telefoniert|to talk on the phone|Ich telefoniere jeden Sonntag mit meinen Eltern.|I phone my parents every Sunday.|A
reden|redet · redete · hat geredet|to talk|Wir müssen über das Problem reden.|We need to talk about the problem.|A
zurückkommen|kommt zurück · kam zurück · ist zurückgekommen|to come back|Wann kommst du aus dem Urlaub zurück?|When are you coming back from holiday?|A
hängen|hängt · hing · hat gehangen|to hang (be hanging)|Das Bild hängt über dem Sofa.|The picture hangs above the sofa.|B
abstimmen|stimmt ab · stimmte ab · hat abgestimmt|to vote (on something)|Wir stimmen jetzt über den Vorschlag ab.|We are now voting on the proposal.|B
ankündigen|kündigt an · kündigte an · hat angekündigt|to announce|Die Firma hat neue Preise angekündigt.|The company has announced new prices.|B
auswandern|wandert aus · wanderte aus · ist ausgewandert|to emigrate|Meine Großeltern sind nach Kanada ausgewandert.|My grandparents emigrated to Canada.|B
berücksichtigen|berücksichtigt · berücksichtigte · hat berücksichtigt|to take into account|Bitte berücksichtigen Sie auch meine Erfahrung.|Please take my experience into account too.|B
bügeln|bügelt · bügelte · hat gebügelt|to iron|Ich muss noch mein Hemd bügeln.|I still have to iron my shirt.|B
entsorgen|entsorgt · entsorgte · hat entsorgt|to dispose of|Alte Batterien muss man richtig entsorgen.|Old batteries must be disposed of properly.|B
erwähnen|erwähnt · erwähnte · hat erwähnt|to mention|Er hat das Problem nicht erwähnt.|He did not mention the problem.|B`;
const ADJS = `zuverlässig|unzuverlässig|reliable|Meine Kollegin ist sehr zuverlässig.|My colleague is very reliable.|B
pünktlich|unpünktlich|punctual, on time|Bitte seien Sie morgen pünktlich.|Please be on time tomorrow.|B
selbstständig|angestellt|self-employed; independent|Er arbeitet seit zwei Jahren selbstständig.|He has been self-employed for two years.|B
arbeitslos|berufstätig|unemployed|Sie war ein halbes Jahr arbeitslos.|She was unemployed for half a year.|B
berufstätig|arbeitslos|working, in employment|Beide Eltern sind berufstätig.|Both parents work.|B
anstrengend|erholsam|exhausting, tiring|Die Arbeit im Krankenhaus ist anstrengend.|Working in the hospital is tiring.|B
erfolgreich|erfolglos|successful|Das Projekt war sehr erfolgreich.|The project was very successful.|B
zufrieden|unzufrieden|satisfied, content|Ich bin mit meiner Arbeit zufrieden.|I am satisfied with my job.|B
verantwortlich|–|responsible|Wer ist für diesen Fehler verantwortlich?|Who is responsible for this mistake?|B
gemütlich|ungemütlich|cosy|Euer Wohnzimmer ist sehr gemütlich.|Your living room is very cosy.|B
hell|dunkel|bright, light|Die Küche ist groß und hell.|The kitchen is big and bright.|B
ruhig|laut|quiet, calm|Wir suchen eine ruhige Wohnung.|We are looking for a quiet flat.|B
günstig|teuer|inexpensive, good-value|Die Wohnung ist günstig, aber klein.|The flat is cheap but small.|B
preiswert|teuer|reasonably priced|In diesem Restaurant isst man gut und preiswert.|You can eat well and cheaply in this restaurant.|B
möbliert|unmöbliert|furnished|Das Zimmer wird möbliert vermietet.|The room is let furnished.|B
gesund|krank|healthy|Obst und Gemüse sind gesund.|Fruit and vegetables are healthy.|B
erkältet|–|having a cold|Ich bin seit drei Tagen erkältet.|I have had a cold for three days.|B
schwach|stark|weak|Nach der Krankheit fühlte er sich schwach.|After the illness he felt weak.|B
müde|wach|tired|Nach der Arbeit bin ich immer müde.|I am always tired after work.|B
gefährlich|ungefährlich|dangerous|Diese Kreuzung ist sehr gefährlich.|This junction is very dangerous.|B
schädlich|unschädlich|harmful|Zu viel Zucker ist schädlich.|Too much sugar is harmful.|B
dringend|–|urgent|Ich brauche dringend einen Termin.|I urgently need an appointment.|B
verspätet|pünktlich|late, delayed|Der Zug kommt zehn Minuten verspätet an.|The train is arriving ten minutes late.|B
bequem|unbequem|comfortable|Diese Schuhe sind sehr bequem.|These shoes are very comfortable.|B
öffentlich|privat|public|Das ist ein öffentlicher Parkplatz.|This is a public car park.|B
gültig|ungültig|valid|Die Fahrkarte ist zwei Stunden gültig.|The ticket is valid for two hours.|B
notwendig|unnötig|necessary|Eine Anmeldung ist nicht notwendig.|Registration is not necessary.|B
kostenlos|kostenpflichtig|free of charge|Der Eintritt ist für Kinder kostenlos.|Admission is free for children.|B
zuständig|–|responsible, in charge|Für diese Frage ist das Bürgeramt zuständig.|The citizens' office is responsible for this matter.|B
persönlich|–|personal, in person|Sie müssen den Ausweis persönlich abholen.|You have to collect the ID card in person.|B
schriftlich|mündlich|written, in writing|Die Kündigung muss schriftlich sein.|Notice must be given in writing.|B
mündlich|schriftlich|oral, spoken|Die mündliche Prüfung dauert fünfzehn Minuten.|The oral exam takes fifteen minutes.|B
schwierig|einfach|difficult|Die deutsche Grammatik ist manchmal schwierig.|German grammar is sometimes difficult.|B
deutlich|undeutlich|clear, distinct|Bitte sprechen Sie langsam und deutlich.|Please speak slowly and clearly.|B
fleißig|faul|hard-working|Sie ist eine fleißige Schülerin.|She is a hard-working pupil.|B
begabt|unbegabt|talented, gifted|Er ist musikalisch sehr begabt.|He is very gifted musically.|B
neugierig|–|curious|Kinder sind von Natur aus neugierig.|Children are naturally curious.|B
aufmerksam|unaufmerksam|attentive|Die Schüler hören aufmerksam zu.|The pupils listen attentively.|B
spannend|langweilig|exciting, gripping|Das Buch war von Anfang an spannend.|The book was gripping from the start.|B
langweilig|spannend|boring|Ich fand den Film ziemlich langweilig.|I found the film rather boring.|B
beliebt|unbeliebt|popular|Fußball ist in Deutschland sehr beliebt.|Football is very popular in Germany.|B
bekannt|unbekannt|well-known|Die Stadt ist für ihr Bier bekannt.|The city is known for its beer.|B
berühmt|unbekannt|famous|Sie ist eine berühmte Schauspielerin.|She is a famous actress.|B
lustig|ernst|funny|Er erzählt immer lustige Geschichten.|He always tells funny stories.|B
gemeinsam|allein|together, joint|Wir kochen heute Abend gemeinsam.|We are cooking together this evening.|B
ausverkauft|–|sold out|Das Konzert ist leider ausverkauft.|Unfortunately the concert is sold out.|B
frisch|alt|fresh|Das Brot ist ganz frisch.|The bread is really fresh.|B
haltbar|verderblich|long-lasting, keeps well|Die Milch ist bis Freitag haltbar.|The milk keeps until Friday.|B
kaputt|ganz|broken|Mein Handy ist kaputt.|My mobile phone is broken.|B
gebraucht|neu|second-hand, used|Wir haben ein gebrauchtes Auto gekauft.|We bought a second-hand car.|B
umweltfreundlich|umweltschädlich|environmentally friendly|Das Fahrrad ist ein umweltfreundliches Verkehrsmittel.|The bicycle is an environmentally friendly means of transport.|B
sauber|schmutzig|clean|Das Wasser im See ist sauber.|The water in the lake is clean.|B
schmutzig|sauber|dirty|Deine Schuhe sind ganz schmutzig.|Your shoes are really dirty.|B
trocken|nass|dry|Die Wäsche ist schon trocken.|The washing is already dry.|B
feucht|trocken|damp|Der Keller ist leider etwas feucht.|Unfortunately the cellar is a bit damp.|B
sparsam|verschwenderisch|economical, thrifty|Wir müssen sparsam mit Wasser umgehen.|We have to be economical with water.|B
freundlich|unfreundlich|friendly|Die Verkäuferin war sehr freundlich.|The shop assistant was very friendly.|B
höflich|unhöflich|polite|Er ist immer höflich zu den Kunden.|He is always polite to the customers.|B
ehrlich|unehrlich|honest|Sag mir bitte ehrlich deine Meinung.|Please tell me your honest opinion.|B
geduldig|ungeduldig|patient|Die Lehrerin ist sehr geduldig.|The teacher is very patient.|B
großzügig|geizig|generous|Meine Tante ist ein großzügiger Mensch.|My aunt is a generous person.|B
hilfsbereit|–|helpful|Unsere Nachbarn sind sehr hilfsbereit.|Our neighbours are very helpful.|B
schüchtern|selbstbewusst|shy|Als Kind war ich sehr schüchtern.|As a child I was very shy.|B
selbstbewusst|schüchtern|self-confident|Sie tritt sehr selbstbewusst auf.|She comes across as very self-confident.|B
eifersüchtig|–|jealous|Er ist eifersüchtig auf seinen Bruder.|He is jealous of his brother.|B
enttäuscht|–|disappointed|Ich war von dem Hotel enttäuscht.|I was disappointed with the hotel.|B
überrascht|–|surprised|Wir waren von dem Ergebnis überrascht.|We were surprised by the result.|B
stolz|–|proud|Die Eltern sind stolz auf ihre Tochter.|The parents are proud of their daughter.|B
nervös|gelassen|nervous|Vor Prüfungen bin ich immer nervös.|I am always nervous before exams.|B
traurig|fröhlich|sad|Sie war traurig über den Abschied.|She was sad about saying goodbye.|B
fröhlich|traurig|cheerful|Die Kinder sind heute sehr fröhlich.|The children are very cheerful today.|B
verheiratet|ledig|married|Meine Schwester ist seit einem Jahr verheiratet.|My sister has been married for a year.|B
ledig|verheiratet|single, unmarried|Sind Sie ledig oder verheiratet?|Are you single or married?|B
verwandt|–|related|Wir sind nicht miteinander verwandt.|We are not related to each other.|B
ähnlich|verschieden|similar|Die beiden Brüder sehen sich sehr ähnlich.|The two brothers look very alike.|B
verschieden|gleich|different, various|Wir haben verschiedene Meinungen.|We have different opinions.|B
wichtig|unwichtig|important|Es ist wichtig, viel zu üben.|It is important to practise a lot.|B
möglich|unmöglich|possible|Ist es möglich, den Termin zu ändern?|Is it possible to change the appointment?|B
wahrscheinlich|unwahrscheinlich|probable, likely|Es ist wahrscheinlich, dass es regnet.|It is likely that it will rain.|B
sicher|unsicher|safe; certain|Bist du sicher, dass der Laden geöffnet ist?|Are you sure the shop is open?|B
gut|schlecht|good|Das Essen in der Kantine ist gut.|The food in the canteen is good.|A
schlecht|gut|bad|Das Wetter war leider sehr schlecht.|Unfortunately the weather was very bad.|A
groß|klein|big, tall|Wir suchen eine größere Wohnung.|We are looking for a bigger flat.|A
klein|groß|small|Das Zimmer ist klein, aber sehr schön.|The room is small but very nice.|A
alt|jung|old|Mein Großvater ist schon sehr alt.|My grandfather is already very old.|A
jung|alt|young|Sie hat sehr jung geheiratet.|She got married very young.|A
neu|alt|new|Ich habe eine neue Stelle gefunden.|I have found a new job.|A
teuer|billig|expensive|Das Leben in der Stadt ist teuer.|Life in the city is expensive.|A
billig|teuer|cheap|Im Supermarkt ist das Gemüse billiger.|Vegetables are cheaper at the supermarket.|A
schnell|langsam|fast, quick|Der schnelle Zug hält hier nicht.|The fast train does not stop here.|A
langsam|schnell|slow|Das Internet ist heute sehr langsam.|The internet is very slow today.|A
warm|kalt|warm|Im Mai ist es schon ziemlich warm.|In May it is already quite warm.|A
kalt|warm|cold|Der Kaffee ist leider schon kalt.|Unfortunately the coffee is already cold.|A
heiß|kalt|hot|Vorsicht, die Suppe ist noch heiß!|Careful, the soup is still hot!|A
lang|kurz|long|Wir haben eine lange Reise gemacht.|We went on a long journey.|A
kurz|lang|short|Ich mache nur eine kurze Pause.|I am only taking a short break.|A
hoch|niedrig|high|Die Miete ist hier sehr hoch.|The rent is very high here.|A
niedrig|hoch|low|Die Preise sind im Winter niedriger.|Prices are lower in winter.|A
breit|schmal|wide|Die Straße ist breit genug für Busse.|The road is wide enough for buses.|A
dick|dünn|thick, fat|Zieh bitte eine dicke Jacke an!|Please put on a thick jacket!|A
dünn|dick|thin|Die Wände im Haus sind sehr dünn.|The walls in the house are very thin.|A
schwer|leicht|heavy, difficult|Der Koffer ist zu schwer für mich.|The suitcase is too heavy for me.|A
leicht|schwer|light, easy|Die Prüfung war leichter als erwartet.|The exam was easier than expected.|A
einfach|schwierig|simple, easy|Die Aufgabe ist ganz einfach.|The task is quite simple.|A
stark|schwach|strong|Ich habe starke Kopfschmerzen.|I have a bad headache.|A
laut|leise|loud, noisy|Die Nachbarn sind abends oft laut.|The neighbours are often noisy in the evening.|A
leise|laut|quiet|Seid bitte leise, das Baby schläft.|Please be quiet, the baby is sleeping.|A
dunkel|hell|dark|Im Winter wird es früh dunkel.|In winter it gets dark early.|A
schön|hässlich|beautiful, nice|Wir hatten einen schönen Urlaub.|We had a nice holiday.|A
hässlich|schön|ugly|Ich finde das Gebäude ziemlich hässlich.|I think the building is rather ugly.|A
voll|leer|full|Der Bus war heute Morgen sehr voll.|The bus was very full this morning.|A
leer|voll|empty|Der Kühlschrank ist fast leer.|The fridge is almost empty.|A
offen|geschlossen|open|Das Fenster war die ganze Nacht offen.|The window was open all night.|A
geschlossen|offen|closed|Am Sonntag sind die Geschäfte geschlossen.|The shops are closed on Sundays.|A
richtig|falsch|right, correct|Ist diese Antwort richtig?|Is this answer correct?|A
falsch|richtig|wrong|Sie haben die falsche Nummer gewählt.|You have dialled the wrong number.|A
früh|spät|early|Wir nehmen den frühen Zug.|We are taking the early train.|A
spät|früh|late|Es ist schon spät, ich muss gehen.|It is already late, I have to go.|A
nah|weit|near, close|Die Schule ist ganz nah.|The school is very close.|A
weit|nah|far|Der Bahnhof ist nicht weit von hier.|The station is not far from here.|A
reich|arm|rich|Er ist durch seine Firma reich geworden.|He became rich through his company.|A
arm|reich|poor|Viele arme Familien brauchen Hilfe.|Many poor families need help.|A
krank|gesund|ill|Mein Sohn ist seit Montag krank.|My son has been ill since Monday.|A
glücklich|unglücklich|happy|Sie ist in ihrer neuen Stadt glücklich.|She is happy in her new town.|A
nett|unfreundlich|nice, kind|Unsere neuen Nachbarn sind sehr nett.|Our new neighbours are very nice.|A
süß|sauer|sweet|Der Kuchen ist mir zu süß.|The cake is too sweet for me.|A
sauer|süß|sour|Die Äpfel sind noch ziemlich sauer.|The apples are still rather sour.|A
scharf|mild|spicy, sharp|Das Essen ist mir zu scharf.|The food is too spicy for me.|A
lecker|–|tasty|Die Suppe ist wirklich lecker.|The soup is really tasty.|A
hungrig|satt|hungry|Nach dem Sport bin ich immer hungrig.|I am always hungry after sport.|A
satt|hungrig|full (up)|Nein danke, ich bin schon satt.|No thanks, I am already full.|A
fertig|–|finished, ready|Bist du mit den Hausaufgaben fertig?|Have you finished your homework?|A
frei|besetzt|free, vacant|Ist dieser Platz noch frei?|Is this seat still free?|A
besetzt|frei|occupied, engaged|Die Toilette ist leider besetzt.|Unfortunately the toilet is occupied.|A
interessant|langweilig|interesting|Der Film war sehr interessant.|The film was very interesting.|A
toll|–|great|Das war ein tolles Konzert!|That was a great concert!|A
klug|dumm|clever|Das war eine kluge Entscheidung.|That was a clever decision.|A
dumm|klug|stupid|Das war ein dummer Fehler von mir.|That was a stupid mistake of mine.|A
hart|weich|hard|Das Bett im Hotel war sehr hart.|The bed in the hotel was very hard.|A
weich|hart|soft|Ich brauche ein weiches Kissen.|I need a soft pillow.|A
nass|trocken|wet|Meine Schuhe sind ganz nass geworden.|My shoes have got completely wet.|A
sonnig|–|sunny|Morgen wird es sonnig und warm.|Tomorrow it will be sunny and warm.|A
ganz|–|whole|Die ganze Familie kommt zu Besuch.|The whole family is coming to visit.|A
wunderbar|–|wonderful|Wir hatten einen wunderbaren Abend.|We had a wonderful evening.|A
schlimm|–|bad, serious|Ist es schlimm, wenn ich später komme?|Is it bad if I come later?|A
bereit|–|ready|Seid ihr bereit? Wir fahren gleich los.|Are you ready? We are leaving in a moment.|A
fit|–|fit|Er geht joggen, um fit zu bleiben.|He goes jogging to stay fit.|A
schlank|dick|slim|Seit der Diät ist sie viel schlanker.|She has been much slimmer since the diet.|A
hübsch|hässlich|pretty|Sie trägt heute ein hübsches Kleid.|She is wearing a pretty dress today.|A
sympathisch|unsympathisch|likeable|Der neue Chef ist mir sympathisch.|I find the new boss likeable.|A
modern|altmodisch|modern|Wir haben eine moderne Küche.|We have a modern kitchen.|A
praktisch|unpraktisch|practical|Die Tasche ist klein, aber sehr praktisch.|The bag is small but very practical.|A
eng|weit|tight, narrow|Die Hose ist mir zu eng.|The trousers are too tight for me.|A
komisch|–|strange, funny|Das Auto macht ein komisches Geräusch.|The car is making a strange noise.|A
böse|lieb|angry, bad|Bist du mir noch böse?|Are you still angry with me?|A
lieb|böse|kind, dear|Das ist sehr lieb von dir.|That is very kind of you.|A
faul|fleißig|lazy|Am Wochenende bin ich gern faul.|I like being lazy at the weekend.|A
tief|flach|deep|Der See ist hier sehr tief.|The lake is very deep here.|A
flach|tief|flat, shallow|Das Wasser ist am Ufer flach.|The water is shallow at the shore.|A
sportlich|unsportlich|sporty|Meine Schwester ist sehr sportlich.|My sister is very sporty.|A
wahr|unwahr|true|Ist diese Geschichte wirklich wahr?|Is this story really true?|A
gleich|verschieden|same, equal|Wir haben das gleiche Auto.|We have the same car.|A
normal|ungewöhnlich|normal|Das ist in diesem Alter ganz normal.|That is quite normal at this age.|A
perfekt|–|perfect|Niemand ist perfekt.|Nobody is perfect.|A
verboten|erlaubt|forbidden|Rauchen ist hier verboten.|Smoking is forbidden here.|A
erlaubt|verboten|allowed|Hunde sind im Restaurant nicht erlaubt.|Dogs are not allowed in the restaurant.|A
eilig|–|urgent, in a hurry|Tut mir leid, ich habe es eilig.|Sorry, I am in a hurry.|A
schrecklich|–|terrible|Der Verkehr war heute schrecklich.|The traffic was terrible today.|A
halb|–|half|Ich warte seit einer halben Stunde.|I have been waiting for half an hour.|A
täglich|–|daily|Die tägliche Fahrt zur Arbeit dauert lange.|The daily journey to work takes a long time.|A
eigen|fremd|own|Sie hat jetzt ein eigenes Zimmer.|She now has a room of her own.|A
privat|beruflich|private|Das ist meine private Telefonnummer.|That is my private phone number.|A
kompliziert|einfach|complicated|Das Formular ist ziemlich kompliziert.|The form is rather complicated.|B
typisch|untypisch|typical|Das ist ein typisches Gericht aus Bayern.|That is a typical dish from Bavaria.|B
selten|häufig|rare|Das ist eine seltene Krankheit.|That is a rare illness.|B
häufig|selten|frequent|Stress ist eine häufige Ursache für Kopfschmerzen.|Stress is a frequent cause of headaches.|B
plötzlich|–|sudden|Der plötzliche Regen hat uns überrascht.|The sudden rain surprised us.|B
ordentlich|unordentlich|tidy|Ihr Schreibtisch ist immer sehr ordentlich.|Her desk is always very tidy.|B
ernst|–|serious|Das ist ein ernstes Problem.|That is a serious problem.|B
streng|–|strict|Unser Lehrer war ziemlich streng.|Our teacher was rather strict.|B
tolerant|intolerant|tolerant|In einer Wohngemeinschaft muss man tolerant sein.|You have to be tolerant in a shared flat.|B
flexibel|unflexibel|flexible|Meine Arbeitszeiten sind sehr flexibel.|My working hours are very flexible.|B
kreativ|–|creative|Für diesen Beruf muss man kreativ sein.|You have to be creative for this job.|B
mutig|ängstlich|brave|Es war mutig, die Wahrheit zu sagen.|It was brave to tell the truth.|B
ängstlich|mutig|anxious, fearful|Das Kind ist bei Gewitter ängstlich.|The child is fearful during thunderstorms.|B
vernünftig|unvernünftig|sensible|Das ist ein vernünftiger Vorschlag.|That is a sensible suggestion.|B
verrückt|–|crazy|Das ist eine verrückte Idee!|That is a crazy idea!|B
intelligent|dumm|intelligent|Ihre Tochter ist ein intelligentes Mädchen.|Your daughter is an intelligent girl.|B
gerecht|ungerecht|fair, just|Die Lehrerin ist streng, aber gerecht.|The teacher is strict but fair.|B
fair|unfair|fair|Das war ein faires Spiel.|That was a fair game.|B
treu|untreu|faithful, loyal|Er ist seit Jahren ein treuer Kunde.|He has been a loyal customer for years.|B
empfindlich|unempfindlich|sensitive, delicate|Ich habe sehr empfindliche Haut.|I have very sensitive skin.|B
aktiv|passiv|active|Meine Oma ist noch sehr aktiv.|My grandma is still very active.|B
optimistisch|pessimistisch|optimistic|Ich bin optimistisch, dass es klappt.|I am optimistic that it will work out.|B
realistisch|unrealistisch|realistic|Dieser Plan ist nicht realistisch.|This plan is not realistic.|B
dankbar|undankbar|grateful|Ich bin Ihnen für die Hilfe dankbar.|I am grateful to you for the help.|B
einsam|–|lonely|Ohne Freunde fühlt man sich einsam.|Without friends you feel lonely.|B
verliebt|–|in love|Er ist in seine Nachbarin verliebt.|He is in love with his neighbour.|B
geschieden|–|divorced|Meine Eltern sind seit Jahren geschieden.|My parents have been divorced for years.|B
schwanger|–|pregnant|Meine Frau ist im vierten Monat schwanger.|My wife is four months pregnant.|B
erwachsen|–|grown-up, adult|Unsere Kinder sind schon erwachsen.|Our children are already grown up.|B
männlich|weiblich|male|Im Kurs gibt es nur zwei männliche Teilnehmer.|There are only two male participants in the course.|B
weiblich|männlich|female|Die Firma sucht mehr weibliche Fachkräfte.|The company is looking for more female skilled workers.|B
wütend|–|furious, angry|Der Kunde war wütend über die Verspätung.|The customer was furious about the delay.|B
ärgerlich|–|annoying|Der Zug ist weg, das ist wirklich ärgerlich!|The train has gone, that is really annoying!|B
froh|traurig|glad|Ich bin froh, dass du gekommen bist.|I am glad that you have come.|B
begeistert|–|enthusiastic|Die Zuschauer waren von dem Konzert begeistert.|The audience was enthusiastic about the concert.|B
aufgeregt|ruhig|excited, nervous|Vor der Prüfung war ich sehr aufgeregt.|I was very nervous before the exam.|B
besorgt|–|worried|Die Eltern sind besorgt um ihren Sohn.|The parents are worried about their son.|B
erschöpft|–|exhausted|Nach der Nachtschicht bin ich völlig erschöpft.|After the night shift I am completely exhausted.|B
entspannt|angespannt|relaxed|Im Urlaub bin ich endlich entspannt.|On holiday I am finally relaxed.|B
gestresst|entspannt|stressed|Vor Weihnachten sind viele Leute gestresst.|Many people are stressed before Christmas.|B
peinlich|–|embarrassing|Die Situation war mir sehr peinlich.|I found the situation very embarrassing.|B
angenehm|unangenehm|pleasant|Wir hatten eine angenehme Reise.|We had a pleasant journey.|B
einverstanden|–|in agreement|Ich bin mit Ihrem Vorschlag einverstanden.|I agree with your suggestion.|B
überzeugt|–|convinced|Ich bin überzeugt, dass sie recht hat.|I am convinced that she is right.|B
beruflich|privat|professional|Sie hat viel berufliche Erfahrung.|She has a lot of professional experience.|B
beschäftigt|–|busy|Der Chef ist im Moment sehr beschäftigt.|The boss is very busy at the moment.|B
qualifiziert|unqualifiziert|qualified|Für die Stelle ist sie gut qualifiziert.|She is well qualified for the job.|B
befristet|unbefristet|fixed-term|Mein Vertrag ist auf ein Jahr befristet.|My contract is limited to one year.|B
unbefristet|befristet|permanent, open-ended|Sie hat einen unbefristeten Vertrag bekommen.|She has been given a permanent contract.|B
finanziell|–|financial|Die Familie hat finanzielle Probleme.|The family has financial problems.|B
geeignet|ungeeignet|suitable|Das Buch ist für Anfänger geeignet.|The book is suitable for beginners.|B
zusätzlich|–|additional|Dafür entstehen zusätzliche Kosten.|There are additional costs for that.|B
nützlich|nutzlos|useful|Das Wörterbuch ist sehr nützlich.|The dictionary is very useful.|B
sinnvoll|sinnlos|sensible, worthwhile|Es ist sinnvoll, früh zu buchen.|It makes sense to book early.|B
wertvoll|wertlos|valuable|Der Ring ist sehr wertvoll.|The ring is very valuable.|B
defekt|–|faulty|Der Drucker im Büro ist defekt.|The printer in the office is faulty.|B
echt|unecht|real, genuine|Ist die Tasche aus echtem Leder?|Is the bag made of real leather?|B
künstlich|natürlich|artificial|Die Blumen auf dem Tisch sind künstlich.|The flowers on the table are artificial.|B
natürlich|künstlich|natural|Ich kaufe nur natürliche Produkte.|I only buy natural products.|B
automatisch|manuell|automatic|Die automatische Tür funktioniert nicht.|The automatic door is not working.|B
technisch|–|technical|Der Zug hat ein technisches Problem.|The train has a technical problem.|B
glatt|–|slippery, smooth|Vorsicht, die Straße ist glatt!|Careful, the road is slippery!|B
steil|flach|steep|Der Weg auf den Berg ist steil.|The path up the mountain is steep.|B
reif|unreif|ripe|Die Bananen sind noch nicht reif.|The bananas are not ripe yet.|B
fett|mager|fatty|Das Fleisch ist mir zu fett.|The meat is too fatty for me.|B
bitter|süß|bitter|Dunkle Schokolade ist ziemlich bitter.|Dark chocolate is rather bitter.|B
vegetarisch|–|vegetarian|Gibt es auch ein vegetarisches Gericht?|Is there a vegetarian dish as well?|B
üblich|unüblich|usual, customary|In Deutschland ist Trinkgeld üblich.|Tipping is customary in Germany.|B
seltsam|–|strange|Ich habe ein seltsames Geräusch gehört.|I heard a strange noise.|B
klar|unklar|clear|Die Regeln sind klar und einfach.|The rules are clear and simple.|B
genau|ungenau|exact, precise|Ich brauche die genaue Adresse.|I need the exact address.|B
vollständig|unvollständig|complete|Ihre Unterlagen sind leider nicht vollständig.|Unfortunately your documents are not complete.|B
nötig|unnötig|necessary|Eine Anmeldung ist nicht nötig.|Registration is not necessary.|B
erforderlich|–|required|Für die Reise ist ein Visum erforderlich.|A visa is required for the trip.|B
freiwillig|–|voluntary|Die Teilnahme am Kurs ist freiwillig.|Participation in the course is voluntary.|B
ausreichend|–|sufficient|Ausreichende Deutschkenntnisse sind für die Stelle wichtig.|Sufficient knowledge of German is important for the job.|B
passend|unpassend|suitable, matching|Ich suche eine passende Jacke zur Hose.|I am looking for a jacket to match the trousers.|B
unterschiedlich|gleich|different|Wir haben unterschiedliche Meinungen.|We have different opinions.|B
einzig|–|only, sole|Sie ist das einzige Kind der Familie.|She is the only child in the family.|B
speziell|allgemein|special, specific|Dafür braucht man ein spezielles Werkzeug.|You need a special tool for that.|B
allgemein|speziell|general|Das ist nur eine allgemeine Information.|That is only general information.|B
gesamt|–|entire, total|Die gesamte Abteilung war bei der Besprechung.|The entire department was at the meeting.|B
übrig|–|left over|Ist noch etwas Kuchen übrig?|Is there any cake left over?|B
knapp|reichlich|scarce, tight|Das Geld ist diesen Monat knapp.|Money is tight this month.|B
riesig|winzig|huge|Das Einkaufszentrum ist riesig.|The shopping centre is huge.|B
durchschnittlich|–|average|Das durchschnittliche Einkommen ist gestiegen.|The average income has risen.|B
aktuell|veraltet|current|Hier finden Sie die aktuellen Nachrichten.|Here you will find the current news.|B
ehemalig|–|former|Ich habe meinen ehemaligen Chef getroffen.|I met my former boss.|B
zukünftig|–|future|Das ist mein zukünftiger Kollege.|That is my future colleague.|B
ständig|–|constant|Der ständige Lärm macht mich krank.|The constant noise is making me ill.|B
regelmäßig|unregelmäßig|regular|Regelmäßige Bewegung ist gut für die Gesundheit.|Regular exercise is good for your health.|B
monatlich|–|monthly|Die monatliche Miete beträgt 700 Euro.|The monthly rent is 700 euros.|B
rechtzeitig|–|in good time|Danke für die rechtzeitige Anmeldung.|Thank you for registering in good time.|B
endgültig|vorläufig|final|Die endgültige Entscheidung fällt morgen.|The final decision will be made tomorrow.|B
verletzt|unverletzt|injured|Der verletzte Fahrer kam ins Krankenhaus.|The injured driver was taken to hospital.|B
schwindlig|–|dizzy|Mir ist plötzlich schwindlig geworden.|I suddenly became dizzy.|B
allergisch|–|allergic|Ich bin allergisch gegen Nüsse.|I am allergic to nuts.|B
körperlich|geistig|physical|Körperliche Arbeit macht mich müde.|Physical work makes me tired.|B
medizinisch|–|medical|Sie braucht dringend medizinische Hilfe.|She urgently needs medical help.|B
ansteckend|–|contagious|Die Grippe ist sehr ansteckend.|Flu is very contagious.|B
offiziell|inoffiziell|official|Das ist die offizielle Sprache des Landes.|That is the official language of the country.|B
gesetzlich|–|legal, statutory|Der erste Mai ist ein gesetzlicher Feiertag.|The first of May is a public holiday.|B
staatlich|privat|state, public|Meine Kinder gehen auf eine staatliche Schule.|My children go to a state school.|B
legal|illegal|legal|Ist es legal, hier zu parken?|Is it legal to park here?|B
illegal|legal|illegal|Arbeiten ohne Erlaubnis ist illegal.|Working without a permit is illegal.|B
verpflichtet|–|obliged|Sie sind verpflichtet, den Umzug zu melden.|You are obliged to report the move.|B
politisch|–|political|Er interessiert sich für politische Themen.|He is interested in political topics.|B
sozial|–|social|Sie arbeitet in einem sozialen Beruf.|She works in a social profession.|B
wirtschaftlich|–|economic|Die wirtschaftliche Lage ist schwierig.|The economic situation is difficult.|B
ausländisch|einheimisch|foreign|In der Firma arbeiten viele ausländische Fachkräfte.|Many foreign skilled workers work at the company.|B
zentral|–|central|Wir suchen eine Wohnung in zentraler Lage.|We are looking for a flat in a central location.|B
fremd|vertraut|strange, foreign|Am Anfang war mir die Stadt fremd.|At first the town was strange to me.|B
abhängig|unabhängig|dependent|Der Preis ist von der Saison abhängig.|The price depends on the season.|B
unabhängig|abhängig|independent|Sie möchte finanziell unabhängig sein.|She would like to be financially independent.|B
erreichbar|–|reachable|Ich bin ab acht Uhr telefonisch erreichbar.|I can be reached by phone from eight o'clock.|B
verfügbar|–|available|Das Produkt ist leider nicht mehr verfügbar.|Unfortunately the product is no longer available.|B
heftig|–|heavy, violent|In der Nacht gab es ein heftiges Gewitter.|There was a violent thunderstorm in the night.|B
mild|–|mild|Der Winter war dieses Jahr sehr mild.|The winter was very mild this year.|B
bewölkt|sonnig|cloudy|Heute bleibt es den ganzen Tag bewölkt.|Today it will stay cloudy all day.|B
sorgfältig|–|careful, thorough|Sie ist eine sorgfältige Mitarbeiterin.|She is a careful employee.|B
vorsichtig|unvorsichtig|careful|Sei vorsichtig, die Treppe ist nass!|Be careful, the stairs are wet!|B
gründlich|oberflächlich|thorough|Der Arzt hat eine gründliche Untersuchung gemacht.|The doctor carried out a thorough examination.|B
positiv|negativ|positive|Ich habe eine positive Antwort bekommen.|I received a positive answer.|B
negativ|positiv|negative|Das Testergebnis war negativ.|The test result was negative.|B
ideal|–|ideal|Das Wetter ist ideal für einen Ausflug.|The weather is ideal for an outing.|B
ausgezeichnet|–|excellent|Sie spricht ausgezeichnetes Deutsch.|She speaks excellent German.|B
furchtbar|–|terrible, awful|Ich habe furchtbare Zahnschmerzen.|I have terrible toothache.|B
aufregend|–|exciting|Die Reise nach Asien war aufregend.|The trip to Asia was exciting.|B
abwechslungsreich|eintönig|varied|Meine Arbeit ist sehr abwechslungsreich.|My work is very varied.|B
stressig|–|stressful|Die letzte Woche war sehr stressig.|Last week was very stressful.|B
direkt|indirekt|direct|Gibt es eine direkte Verbindung nach Köln?|Is there a direct connection to Cologne?|B
ehrenamtlich|–|voluntary, unpaid|Sie macht ehrenamtliche Arbeit im Verein.|She does voluntary work at the club.|B
getrennt|gemeinsam|separate|Wir haben getrennte Konten.|We have separate accounts.|B
giftig|ungiftig|poisonous|Vorsicht, diese Pilze sind giftig!|Careful, these mushrooms are poisonous!|B
verschmutzt|sauber|polluted|Die Luft in der Stadt ist stark verschmutzt.|The air in the city is heavily polluted.|B
anwesend|abwesend|present|Alle Teilnehmer waren heute anwesend.|All participants were present today.|B
verständlich|unverständlich|understandable, clear|Die Durchsage war gut verständlich.|The announcement was easy to understand.|B`;
const OTHERS = `aber|normal word order|but|Das Auto ist alt, aber es fährt noch gut.|The car is old, but it still runs well.|A
denn|normal word order|because, for|Ich bleibe zu Hause, denn ich bin müde.|I am staying at home because I am tired.|A
sondern|after a negation|but rather|Wir fahren nicht heute, sondern morgen.|We are not going today but tomorrow.|A
weil|verb at the end|because|Sie lernt Deutsch, weil sie in Berlin arbeiten will.|She is learning German because she wants to work in Berlin.|A
dass|verb at the end|that|Ich glaube, dass er heute nicht kommt.|I think that he is not coming today.|A
wenn|verb at the end|if, when|Wenn es regnet, nehmen wir den Bus.|If it rains, we will take the bus.|A
als|verb at the end|when (in the past)|Als ich klein war, wohnten wir auf dem Land.|When I was little, we lived in the country.|B
ob|verb at the end|whether, if|Ich weiß nicht, ob der Zug pünktlich ist.|I do not know whether the train is on time.|B
obwohl|verb at the end|although|Obwohl es spät war, rief sie ihre Mutter an.|Although it was late, she rang her mother.|B
damit|verb at the end|so that|Ich schreibe es auf, damit ich es nicht vergesse.|I am writing it down so that I do not forget it.|B
falls|verb at the end|in case, if|Falls du Hilfe brauchst, ruf mich bitte an.|If you need help, please ring me.|B
sobald|verb at the end|as soon as|Ich melde mich, sobald ich angekommen bin.|I will get in touch as soon as I have arrived.|B
bevor|verb at the end|before|Bevor wir essen, waschen wir uns die Hände.|Before we eat, we wash our hands.|B
nachdem|verb at the end|after|Nachdem er gegessen hatte, ging er spazieren.|After he had eaten, he went for a walk.|B
während|verb at the end|while|Während ich koche, deckt er den Tisch.|While I am cooking, he lays the table.|B
seitdem|verb at the end|since|Seitdem sie Sport macht, fühlt sie sich besser.|Since she started doing sport, she has felt better.|B
solange|verb at the end|as long as|Solange es regnet, bleiben wir im Haus.|As long as it is raining, we are staying indoors.|B
indem|verb at the end|by (doing)|Man lernt eine Sprache, indem man viel spricht.|You learn a language by speaking a lot.|B
sodass|verb at the end|so that (result)|Der Bus kam zu spät, sodass ich den Zug verpasste.|The bus was late, so I missed the train.|B
deshalb|verb in position 2|therefore, so|Ich war krank, deshalb konnte ich nicht kommen.|I was ill, so I could not come.|A
deswegen|verb in position 2|that is why|Es ist schon spät, deswegen gehe ich jetzt.|It is already late; that is why I am going now.|B
daher|verb in position 2|therefore|Sie hat viel gelernt, daher war die Prüfung leicht.|She studied a lot, so the exam was easy.|B
also|verb in position 2|so, therefore|Der Laden ist geschlossen, also gehen wir nach Hause.|The shop is closed, so we are going home.|A
trotzdem|verb in position 2|nevertheless, anyway|Sie hatte wenig Zeit, trotzdem hat sie mir geholfen.|She had little time; she helped me anyway.|B
außerdem|verb in position 2|besides, in addition|Das Hotel ist billig, außerdem liegt es zentral.|The hotel is cheap; besides, it is centrally located.|B
sonst|verb in position 2|otherwise|Beeil dich, sonst verpassen wir den Bus.|Hurry up, otherwise we will miss the bus.|B
dann|verb in position 2|then|Zuerst frühstücken wir, dann gehen wir einkaufen.|First we have breakfast, then we go shopping.|A
danach|verb in position 2|afterwards|Wir essen zu Abend, danach sehen wir einen Film.|We have dinner; afterwards we watch a film.|A
jedoch|–|however|Die Wohnung ist schön, jedoch ziemlich teuer.|The flat is nice, however rather expensive.|B
sowohl ... als auch|–|both ... and|Sie spricht sowohl Englisch als auch Spanisch.|She speaks both English and Spanish.|B
entweder ... oder|–|either ... or|Wir fahren entweder mit dem Zug oder mit dem Auto.|We are going either by train or by car.|B
weder ... noch|no extra negation|neither ... nor|Er trinkt weder Kaffee noch Tee.|He drinks neither coffee nor tea.|B
nicht nur ... sondern auch|–|not only ... but also|Sie ist nicht nur klug, sondern auch sehr freundlich.|She is not only clever but also very friendly.|B
zwar ... aber|–|admittedly ... but|Das Essen ist zwar teuer, aber sehr gut.|The food is expensive, admittedly, but very good.|B
je ... desto|+ comparative|the ... the|Je mehr ich übe, desto besser spreche ich.|The more I practise, the better I speak.|B
um ... zu|+ infinitive|in order to|Ich spare Geld, um ein Auto zu kaufen.|I am saving money in order to buy a car.|B
ohne ... zu|+ infinitive|without (doing)|Er ging weg, ohne ein Wort zu sagen.|He left without saying a word.|B
mit|+ Dativ|with, by|Ich fahre mit dem Fahrrad zur Arbeit.|I go to work by bike.|A
ohne|+ Akkusativ|without|Ich trinke meinen Kaffee ohne Zucker.|I drink my coffee without sugar.|A
für|+ Akkusativ|for|Das Geschenk ist für meine Schwester.|The present is for my sister.|A
gegen|+ Akkusativ|against|Ich nehme eine Tablette gegen die Kopfschmerzen.|I am taking a tablet for the headache.|A
um|+ Akkusativ|at (time), around|Der Film beginnt um acht Uhr.|The film starts at eight o'clock.|A
durch|+ Akkusativ|through|Wir gehen durch den Park zum Bahnhof.|We walk through the park to the station.|A
bis|+ Akkusativ|until, up to|Der Kurs dauert bis nächsten Freitag.|The course lasts until next Friday.|A
pro|+ Akkusativ|per|Das Zimmer kostet achtzig Euro pro Nacht.|The room costs eighty euros per night.|A
entlang|after noun, + Akkusativ|along|Wir gehen den Fluss entlang.|We are walking along the river.|B
aus|+ Dativ|from, out of|Meine Kollegin kommt aus der Türkei.|My colleague comes from Turkey.|A
bei|+ Dativ|at, with, near|Ich wohne noch bei meinen Eltern.|I still live with my parents.|A
nach|+ Dativ|after, to|Nach dem Unterricht gehe ich nach Hause.|After the lesson I go home.|A
von|+ Dativ|from, of|Das ist das Auto von meinem Bruder.|That is my brother's car.|A
zu|+ Dativ|to|Ich gehe morgen zum Arzt.|I am going to the doctor tomorrow.|A
seit|+ Dativ|since, for|Ich wohne seit drei Jahren in Hamburg.|I have lived in Hamburg for three years.|A
ab|+ Dativ|from, as of|Ab nächster Woche habe ich Urlaub.|From next week I am on holiday.|A
gegenüber|+ Dativ|opposite|Die Apotheke ist gegenüber dem Bahnhof.|The chemist's is opposite the station.|B
außer|+ Dativ|except, apart from|Außer meinem Bruder waren alle da.|Everyone was there except my brother.|B
in|+ Dativ or Akkusativ|in, into|Ich gehe in die Küche.|I am going into the kitchen.|A
an|+ Dativ or Akkusativ|at, on|Das Bild hängt an der Wand.|The picture is hanging on the wall.|A
auf|+ Dativ or Akkusativ|on, onto|Das Buch liegt auf dem Tisch.|The book is lying on the table.|A
über|+ Dativ or Akkusativ|above, over, about|Die Lampe hängt über dem Tisch.|The lamp hangs above the table.|A
unter|+ Dativ or Akkusativ|under, among|Die Katze schläft unter dem Bett.|The cat is sleeping under the bed.|A
vor|+ Dativ or Akkusativ|in front of, before|Vor dem Haus steht ein großer Baum.|There is a big tree in front of the house.|A
hinter|+ Dativ or Akkusativ|behind|Der Parkplatz ist hinter dem Supermarkt.|The car park is behind the supermarket.|A
neben|+ Dativ or Akkusativ|next to|Ich sitze neben meiner Freundin.|I am sitting next to my friend.|A
zwischen|+ Dativ or Akkusativ|between|Die Bank liegt zwischen der Post und dem Café.|The bank is between the post office and the café.|A
wegen|+ Genitiv|because of|Wegen der Baustelle hat der Bus Verspätung.|Because of the roadworks the bus is delayed.|B
trotz|+ Genitiv|despite|Trotz des schlechten Wetters gehen wir wandern.|Despite the bad weather we are going hiking.|B
statt|+ Genitiv|instead of|Statt eines Autos kaufte er ein Fahrrad.|Instead of a car he bought a bicycle.|B
innerhalb|+ Genitiv|within|Bitte antworten Sie innerhalb einer Woche.|Please reply within a week.|B
außerhalb|+ Genitiv|outside|Wir wohnen außerhalb der Stadt.|We live outside the town.|B
bald|–|soon|Wir sehen uns bald wieder.|We will see each other again soon.|A
sofort|–|immediately|Bitte rufen Sie sofort einen Arzt.|Please call a doctor immediately.|A
bereits|–|already|Der Zug ist bereits abgefahren.|The train has already left.|B
früher|–|in the past, earlier|Früher habe ich in einem Dorf gewohnt.|I used to live in a village.|A
später|–|later|Ich rufe dich später zurück.|I will ring you back later.|A
neulich|–|recently, the other day|Neulich habe ich deinen Bruder in der Stadt getroffen.|The other day I met your brother in town.|B
damals|–|back then|Damals gab es noch keine Handys.|Back then there were no mobile phones yet.|B
inzwischen|–|meanwhile, by now|Inzwischen spricht sie sehr gut Deutsch.|By now she speaks German very well.|B
bisher|–|so far|Bisher hat alles gut geklappt.|So far everything has gone well.|B
endlich|–|at last|Endlich ist das Wochenende da.|At last the weekend is here.|A
zuerst|–|first|Zuerst muss ich meine Hausaufgaben machen.|First I have to do my homework.|A
schließlich|–|finally, in the end|Schließlich haben wir doch noch ein Hotel gefunden.|In the end we did find a hotel after all.|B
gerade|–|just, right now|Ich bin gerade beim Einkaufen.|I am just doing the shopping.|A
vorher|–|beforehand|Ich komme mit, aber vorher muss ich noch duschen.|I am coming along, but I have to shower beforehand.|B
nachher|–|afterwards, later|Wir können nachher noch einen Kaffee trinken.|We can have a coffee afterwards.|B
heutzutage|–|nowadays|Heutzutage haben fast alle ein Smartphone.|Nowadays almost everyone has a smartphone.|B
zurzeit|–|at the moment|Zurzeit suche ich eine neue Wohnung.|At the moment I am looking for a new flat.|B
oft|–|often|Am Wochenende besuche ich oft meine Großeltern.|At the weekend I often visit my grandparents.|A
manchmal|–|sometimes|Manchmal gehe ich zu Fuß ins Büro.|Sometimes I walk to the office.|A
meistens|–|mostly, usually|Meistens stehe ich um sechs Uhr auf.|I usually get up at six o'clock.|A
normalerweise|–|normally, usually|Normalerweise fahre ich mit der U-Bahn.|Normally I travel by underground.|B
noch einmal|–|once more|Können Sie das bitte noch einmal sagen?|Could you say that once more, please?|A
ab und zu|–|now and then|Ab und zu gehen wir zusammen schwimmen.|Now and then we go swimming together.|B
immer wieder|–|again and again|Er macht immer wieder denselben Fehler.|He makes the same mistake again and again.|B
draußen|–|outside|Die Kinder spielen draußen im Garten.|The children are playing outside in the garden.|A
geradeaus|–|straight on|Gehen Sie immer geradeaus bis zur Kirche.|Keep going straight on as far as the church.|A
überall|–|everywhere|Ich habe überall nach dem Schlüssel gesucht.|I have looked everywhere for the key.|A
nirgends|–|nowhere|Ich kann meine Brille nirgends finden.|I cannot find my glasses anywhere.|B
irgendwo|–|somewhere|Mein Handy muss irgendwo in der Wohnung sein.|My mobile must be somewhere in the flat.|B
unterwegs|–|on the way|Wir sind schon unterwegs zu euch.|We are already on our way to you.|B
vorbei|–|over, past|Der Sommer ist leider schon vorbei.|Unfortunately the summer is already over.|B
ziemlich|–|quite, rather|Die Prüfung war ziemlich schwer.|The exam was rather difficult.|B
fast|–|almost|Ich bin fast fertig.|I am almost finished.|A
kaum|–|hardly|Ich habe letzte Nacht kaum geschlafen.|I hardly slept last night.|B
etwa|–|about, approximately|Die Fahrt dauert etwa zwei Stunden.|The journey takes about two hours.|B
ungefähr|–|roughly, about|Im Kurs sind ungefähr zwanzig Personen.|There are roughly twenty people in the course.|A
mindestens|–|at least (quantity)|Man muss mindestens achtzehn Jahre alt sein.|You have to be at least eighteen years old.|B
höchstens|–|at most|Ich kann höchstens eine Stunde bleiben.|I can stay for an hour at most.|B
wenigstens|–|at least|Du könntest wenigstens anrufen.|You could at least ring.|B
besonders|–|especially|Der Kuchen ist heute besonders lecker.|The cake is especially tasty today.|A
ein bisschen|–|a bit|Ich spreche ein bisschen Italienisch.|I speak a bit of Italian.|A
erst|–|only, not until|Der Zug kommt erst um zehn Uhr.|The train does not come until ten o'clock.|B
sogar|–|even|Er arbeitet sogar am Wochenende.|He even works at the weekend.|B
lieber|comparative of gern|rather, prefer to|Ich trinke lieber Tee als Kaffee.|I prefer drinking tea to coffee.|A
leider|–|unfortunately|Leider kann ich morgen nicht kommen.|Unfortunately I cannot come tomorrow.|A
hoffentlich|–|hopefully|Hoffentlich ist das Wetter morgen besser.|Hopefully the weather will be better tomorrow.|A
vielleicht|–|perhaps|Vielleicht komme ich später noch vorbei.|Perhaps I will drop by later.|A
bestimmt|–|certainly, surely|Das wird bestimmt ein schöner Abend.|That will certainly be a lovely evening.|A
unbedingt|–|absolutely, definitely|Den Film musst du unbedingt sehen.|You absolutely have to see that film.|B
tatsächlich|–|really, indeed|Er ist tatsächlich pünktlich gekommen.|He really did arrive on time.|B
anders|–|differently|In meinem Land macht man das anders.|In my country people do that differently.|B
umsonst|–|for free, in vain|Kinder unter sechs Jahren fahren umsonst.|Children under six travel free of charge.|B
überhaupt|strengthens a negation|at all|Ich habe heute überhaupt keine Zeit.|I have no time at all today.|B
gar nicht|–|not at all|Der Film hat mir gar nicht gefallen.|I did not like the film at all.|B
nicht mehr|–|no longer|Er arbeitet nicht mehr in dieser Firma.|He no longer works at this company.|A
noch nicht|–|not yet|Ich habe die E-Mail noch nicht gelesen.|I have not read the email yet.|A
dafür|–|in favour, for it|Ich bin dafür, dass wir früher anfangen.|I am in favour of us starting earlier.|B
dagegen|–|against it|Ich habe nichts dagegen.|I have nothing against it.|B
wohin|–|where to|Wohin fahrt ihr im Sommer?|Where are you going in the summer?|A
woher|–|where from|Woher kommen Sie?|Where do you come from?|A
warum|–|why|Warum bist du gestern nicht gekommen?|Why did you not come yesterday?|A
wieso|–|why, how come|Wieso hast du mir nichts gesagt?|Why did you not tell me anything?|B
wie viel|–|how much|Wie viel kostet die Fahrkarte?|How much does the ticket cost?|A
welcher|declined like der|which|Welchen Bus nimmst du morgens?|Which bus do you take in the mornings?|A
was für ein|–|what kind of|Was für ein Auto hast du?|What kind of car have you got?|B
jemand|–|someone|Jemand hat an die Tür geklopft.|Someone knocked at the door.|A
niemand|–|no one|Niemand wusste die Antwort.|No one knew the answer.|A
man|verb in 3rd person singular|one, you, people|Hier darf man nicht rauchen.|You are not allowed to smoke here.|A
jeder|declined like der|every, each|Jeder Schüler bekommt ein Buch.|Every pupil gets a book.|A
dieser|declined like der|this|Dieser Mantel gefällt mir gut.|I like this coat a lot.|A
mancher|declined like der|some, many a|Manche Leute fahren nie in den Urlaub.|Some people never go on holiday.|B
beide|–|both|Meine Eltern arbeiten beide im Krankenhaus.|My parents both work at the hospital.|B
einige|–|some, a few|Einige Kollegen sind heute krank.|Some colleagues are ill today.|B
mehrere|–|several|Ich habe ihn mehrere Male angerufen.|I rang him several times.|B
irgendetwas|–|something, anything|Hast du irgendetwas gehört?|Did you hear anything?|B
irgendein|declined like ein|some, any|Hast du irgendeine Idee?|Have you got any idea?|B
irgendwann|–|sometime|Irgendwann möchte ich nach Japan reisen.|Sometime I would like to travel to Japan.|B
irgendwie|–|somehow|Wir müssen das Problem irgendwie lösen.|We have to solve the problem somehow.|B
selbst|–|myself, yourself etc.|Den Kuchen habe ich selbst gebacken.|I baked the cake myself.|B
eigentlich|–|actually, really|Eigentlich wollte ich heute früh ins Bett gehen.|Actually I wanted to go to bed early today.|B
übrigens|–|by the way|Übrigens, morgen fällt der Kurs aus.|By the way, the class is cancelled tomorrow.|B
nämlich|not in first position|you see, namely|Ich kann nicht kommen, ich bin nämlich krank.|I cannot come; I am ill, you see.|B
allerdings|–|however, though|Die Wohnung ist schön, allerdings ist sie sehr klein.|The flat is nice; however, it is very small.|B
doch|answers a negative question|yes (contradicting)|Kommst du nicht mit? Doch, ich komme gleich.|Are you not coming? Yes, I am coming in a moment.|A
mal|softens a request|just (softener)|Kannst du mir mal helfen?|Can you just help me?|A
immerhin|–|at least, after all|Er hat nicht gewonnen, aber immerhin hat er es versucht.|He did not win, but at least he tried.|B
jedenfalls|–|in any case|Vielleicht regnet es, ich nehme jedenfalls einen Schirm mit.|It may rain; in any case I am taking an umbrella.|B
sowieso|–|anyway|Ich kann dich mitnehmen, ich fahre sowieso in die Stadt.|I can give you a lift; I am going into town anyway.|B
das heißt|–|that is, i.e.|Ich komme später, das heißt gegen neun Uhr.|I am coming later, that is at about nine o'clock.|B
zum Beispiel|–|for example|Ich mag Obst, zum Beispiel Äpfel und Birnen.|I like fruit, for example apples and pears.|A
und so weiter|–|and so on|Wir brauchen Brot, Butter, Käse und so weiter.|We need bread, butter, cheese and so on.|A
zum Glück|–|luckily|Zum Glück ist niemand verletzt.|Luckily no one is injured.|A
auf jeden Fall|–|definitely, in any case|Ich komme auf jeden Fall zu deiner Party.|I am definitely coming to your party.|B
auf keinen Fall|–|on no account|Das darfst du auf keinen Fall vergessen.|You must on no account forget that.|B
in der Regel|–|as a rule|In der Regel dauert die Lieferung drei Tage.|As a rule delivery takes three days.|B
im Allgemeinen|–|in general|Im Allgemeinen bin ich mit der Arbeit zufrieden.|In general I am satisfied with the job.|B
im Gegenteil|–|on the contrary|Ich bin nicht müde, im Gegenteil.|I am not tired, on the contrary.|B
vor allem|–|above all|Ich mag den Sommer, vor allem das Schwimmen im See.|I like summer, above all swimming in the lake.|B
unter anderem|–|among other things|Wir haben unter anderem das Museum besucht.|Among other things we visited the museum.|B
meiner Meinung nach|verb comes next|in my opinion|Meiner Meinung nach ist das Buch zu lang.|In my opinion the book is too long.|B
ehrlich gesagt|verb comes next|to be honest|Ehrlich gesagt habe ich heute keine Lust.|To be honest I do not feel like it today.|B
im Moment|–|at the moment|Im Moment habe ich sehr viel zu tun.|At the moment I have a great deal to do.|A
am Anfang|–|at the beginning|Am Anfang war der Kurs sehr schwer.|At the beginning the course was very hard.|A
am Ende|–|at the end|Am Ende des Monats habe ich wenig Geld.|At the end of the month I have little money.|A
zum Schluss|–|finally, to finish|Zum Schluss möchte ich mich bei allen bedanken.|Finally I would like to thank everyone.|B
von Anfang an|–|from the start|Sie war von Anfang an dabei.|She was there from the start.|B
zum ersten Mal|–|for the first time|Ich bin zum ersten Mal in Deutschland.|I am in Germany for the first time.|A
auf einmal|–|suddenly, all at once|Auf einmal fing es an zu regnen.|Suddenly it started to rain.|B
so bald wie möglich|–|as soon as possible|Bitte melden Sie sich so bald wie möglich.|Please get in touch as soon as possible.|B
am besten|verb in position 2|best, ideally|Am besten fragst du deinen Lehrer.|It would be best to ask your teacher.|A
am liebsten|superlative of gern|most of all|Am liebsten esse ich Nudeln.|I like eating pasta most of all.|A
zu Fuß|–|on foot|Ich gehe jeden Tag zu Fuß zur Schule.|I walk to school every day.|A
zu zweit|–|as a pair, in twos|Wir machen die Übung zu zweit.|We are doing the exercise in pairs.|B
zu Ende|–|over, finished|Der Film ist um zehn Uhr zu Ende.|The film finishes at ten o'clock.|B
in Ordnung|–|all right|Ist es in Ordnung, wenn ich später komme?|Is it all right if I come later?|A
hin und zurück|–|there and back, return|Eine Fahrkarte nach Köln, hin und zurück, bitte.|A return ticket to Cologne, please.|A
und|normal word order|and|Ich trinke Kaffee und sie trinkt Tee.|I drink coffee and she drinks tea.|A
oder|normal word order|or|Möchtest du Tee oder Kaffee?|Would you like tea or coffee?|A
wer|–|who|Wer hat das gesagt?|Who said that?|A
was|–|what|Was machst du am Wochenende?|What are you doing at the weekend?|A
wo|–|where|Wo ist die nächste Apotheke?|Where is the nearest pharmacy?|A
hier|–|here|Hier darf man nicht parken.|You are not allowed to park here.|A
sehr|–|very|Das Essen war sehr gut.|The food was very good.|A
auch|–|also, too|Ich komme auch mit.|I am coming along too.|A
nur|–|only|Ich habe nur zehn Euro dabei.|I only have ten euros on me.|A
immer|–|always|Er kommt immer zu spät.|He always arrives late.|A
nie|–|never|Ich war noch nie in Berlin.|I have never been to Berlin.|A
aufgrund|+ Genitiv|because of, due to|Aufgrund des Wetters fällt das Fest aus.|Due to the weather the party is cancelled.|B
beziehungsweise|–|or rather, respectively|Ich komme am Montag beziehungsweise am Dienstag.|I am coming on Monday or else on Tuesday.|B
und zwar|–|namely, to be precise|Ich brauche Hilfe, und zwar sofort.|I need help, and right now.|B
einander|–|each other|Wir helfen einander bei den Hausaufgaben.|We help each other with homework.|B
wofür|–|what for|Wofür brauchst du das Geld?|What do you need the money for?|B
da|verb at the end|as, since (reason)|Da es regnet, bleiben wir zu Hause.|As it is raining, we are staying at home.|B
als ob|verb at the end|as if|Er tut so, als ob er nichts wüsste.|He acts as if he knew nothing.|B
anstatt|+ Genitiv|instead of|Anstatt des Autos nehme ich das Fahrrad.|Instead of the car I take the bike.|B`;
