import { useState } from 'react'
import './App.css'

const DESTINATIONS = [
  {
    id: 1,
    country: 'France',
    city: 'Paris',
    tagline: 'The City of Light',
    emoji: '🗼',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80',
    description: 'Paris enchants with its boulevards, art, and culinary magic. The Eiffel Tower is just the beginning — every street corner is a story.',
    mustVisit: [
      { name: 'Eiffel Tower', tip: 'Book skip-the-line tickets online. Sunset visit is magical — bring a jacket.', icon: '🗼' },
      { name: 'The Louvre', tip: 'Arrive when it opens at 9 AM. Head straight to Mona Lisa first, then explore freely.', icon: '🏛️' },
      { name: 'Montmartre', tip: 'Go on a weekday morning for quiet cobblestone magic. Sacré-Cœur view is breathtaking.', icon: '⛪' },
      { name: 'Seine River Cruise', tip: '€15–€20. Evening cruise lights up the city. Great for photos.', icon: '🚢' },
      { name: 'Versailles', tip: 'Day trip from Paris. Book the Palace + Gardens combo. Go early!', icon: '👑' },
      { name: 'Musée d\'Orsay', tip: 'Best impressionist art collection in the world. Quieter than the Louvre.', icon: '🎨' },
    ],
    foodGuide: [
      { item: 'Croissant au beurre', where: 'Boulangerie Poilâne or any local boulangerie', indianNote: 'Closest to a rich, flaky biscuit — buttery and perfect with coffee', icon: '🥐' },
      { item: 'Ratatouille', where: 'Traditional bistros in Marais', indianNote: 'Vegetable medley — fairly similar in concept to kadai sabzi!', icon: '🫕' },
      { item: 'French Onion Soup', where: 'Café de Flore, Saint-Germain', indianNote: 'Rich onion broth with melted cheese on top — warming and delicious', icon: '🍲' },
      { item: 'Crêpes Nutella', where: 'Street stalls near Eiffel Tower', indianNote: 'Thin pancake with chocolate — kids and adults both love it', icon: '🫔' },
      { item: 'Macarons', where: 'Ladurée (Champs-Élysées)', indianNote: 'Delicate sandwich cookies — sweet like our mithai but lighter', icon: '🍬' },
      { item: 'Cheese Platter', where: 'Any fromagerie in Le Marais', indianNote: 'Try Brie and Comté first — milder than other French cheeses', icon: '🧀' },
    ],
    whatToWear: [
      { season: 'Spring (Mar–May)', advice: 'Light layers — trench coat is perfect. Parisians dress smart-casual always. Avoid sportswear.', icon: '🌸' },
      { season: 'Summer (Jun–Aug)', advice: 'Linen shirts, sundresses, light trousers. Comfortable walking shoes are a must. SPF essential!', icon: '☀️' },
      { season: 'Autumn (Sep–Nov)', advice: 'Scarves, mid-weight jackets, ankle boots. The golden light is gorgeous — dress for photos.', icon: '🍂' },
      { season: 'Winter (Dec–Feb)', advice: 'Heavy coat, gloves, scarf. Christmas markets are magical. Layer up with thermals.', icon: '❄️' },
    ],
    insiderTips: [
      'Learn: "Bonjour, parlez-vous anglais?" — greet first, THEN ask if they speak English.',
      'Metro is the best way to get around. Buy a carnet of 10 tickets for savings.',
      'Restaurants open for dinner only around 7:30 PM — don\'t show up at 6 PM.',
      'Tap water is free and safe. Ask for "une carafe d\'eau" at restaurants.',
      'Pharmacies (green cross) are everywhere — first aid, medicines, even cosmetics.',
      'Many museums are FREE on the first Sunday of each month!',
    ],
    indianContext: 'Paris is very Indian-tourist friendly. You\'ll find Indian restaurants in the 10th arrondissement. The Eiffel Tower area has several halal food stalls too.',
    budget: '€150–200/day',
    bestTime: 'April–June, September–October',
    language: 'French',
    currency: 'Euro (€)',
  },
  {
    id: 2,
    country: 'Italy',
    city: 'Rome',
    tagline: 'The Eternal City',
    emoji: '🏛️',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    heroImage: 'https://images.unsplash.com/photo-1552832230-c0197DD249b7?w=1200&q=80',
    description: 'Rome is a living museum. Every cobblestone has a story 2,000 years old. The food alone is worth the trip.',
    mustVisit: [
      { name: 'Colosseum', tip: 'Book online weeks in advance! Combo ticket includes Roman Forum & Palatine Hill.', icon: '🏟️' },
      { name: 'Vatican & Sistine Chapel', tip: 'Book the earliest slot (8 AM) to avoid crowds. Dress modestly — no bare shoulders/knees.', icon: '⛪' },
      { name: 'Trevi Fountain', tip: 'Go at 6 AM — almost empty. Throw a coin with your right hand over left shoulder.', icon: '⛲' },
      { name: 'Pantheon', tip: 'Now requires a small entry fee. Go on a rainy day — the oculus (roof hole) is mesmerizing.', icon: '🏛️' },
      { name: 'Trastevere', tip: 'Best neighbourhood to wander. Charming alleys, great restaurants, very local vibe.', icon: '🏘️' },
      { name: 'Borghese Gallery', tip: 'MUST book in advance — timed entry only. Bernini sculptures will blow your mind.', icon: '🎭' },
    ],
    foodGuide: [
      { item: 'Cacio e Pepe', where: 'Da Enzo al 29 in Trastevere', indianNote: 'Pasta with cheese and pepper — simple but incredibly satisfying', icon: '🍝' },
      { item: 'Supplì', where: 'Supplì Roma near Campo de\' Fiori', indianNote: 'Deep-fried rice balls with tomato — our very own arancini cousin!', icon: '🍢' },
      { item: 'Gelato', where: 'Gelarmony or Fatamorgana for unique flavors', indianNote: 'Italian ice cream — way creamier than kulfi. Try Pistachio and Hazelnut.', icon: '🍦' },
      { item: 'Pizza al Taglio', where: 'Roscioli or any street-side spot', indianNote: 'Pizza by the slice, sold by weight. Perfect quick meal — like our street food.', icon: '🍕' },
      { item: 'Carbonara', where: 'Grotte del Teatro di Pompeo', indianNote: 'Creamy egg-based pasta — rich, comforting. No cream is actually used!', icon: '🍽️' },
      { item: 'Espresso', where: 'Stand at any local bar — "al banco"', indianNote: 'Strong short coffee — like a concentrated chai kick. Don\'t order "latte" alone!', icon: '☕' },
    ],
    whatToWear: [
      { season: 'Spring (Mar–May)', advice: 'Light layers, comfortable walking shoes. Modesty required at churches — carry a scarf.', icon: '🌸' },
      { season: 'Summer (Jun–Aug)', advice: 'Light breathable fabrics. Rome gets very hot. Always carry a shawl for churches. Hat + sunscreen.', icon: '☀️' },
      { season: 'Autumn (Sep–Nov)', advice: 'Light jacket, jeans, ankle boots. Beautiful season with fewer crowds and lower prices.', icon: '🍂' },
      { season: 'Winter (Dec–Feb)', advice: 'Rome winters are mild. A medium coat with scarf is enough. Umbrella handy for drizzles.', icon: '🌧️' },
    ],
    insiderTips: [
      'Always carry a small water bottle — Rome has free drinking fountains called "nasoni" everywhere.',
      'Dress code at Vatican is strict: no shorts, no sleeveless tops. Carry a stole.',
      'Eating near tourist spots is expensive and mediocre. Walk 2 streets away for authentic food.',
      'Validate your bus/tram ticket IMMEDIATELY after boarding or face fines.',
      'Pickpockets are common near Trevi Fountain and Colosseum. Use a cross-body bag.',
      'An afternoon riposo (rest) is real — many shops close 1–4 PM. Plan accordingly.',
    ],
    indianContext: 'Rome has a decent Indian food scene near Termini station. Vegetarian options are available as pasta, pizza, and risotto are widely vegetarian-adaptable.',
    budget: '€120–180/day',
    bestTime: 'April–May, September–October',
    language: 'Italian',
    currency: 'Euro (€)',
  },
  {
    id: 3,
    country: 'Spain',
    city: 'Barcelona',
    tagline: 'Art, Sun & Passion',
    emoji: '💃',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #f7971e 100%)',
    heroImage: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1200&q=80',
    description: 'Barcelona is Gaudí\'s playground, a beachside metropolis bursting with color, tapas, and an electric nightlife.',
    mustVisit: [
      { name: 'Sagrada Família', tip: 'Book months ahead! The towers offer stunning views. Allow 2–3 hours inside.', icon: '⛪' },
      { name: 'Park Güell', tip: 'Free areas are lovely, but the monumental zone needs a ticket. Go at opening time.', icon: '🌿' },
      { name: 'La Boqueria Market', tip: 'Go for the experience, not cheap food. Grab fresh fruit juice and jamón. Avoid tourist-facing stalls.', icon: '🛒' },
      { name: 'Gothic Quarter', tip: 'Get lost on purpose. Best kept Roman ruins in Spain are here — all free.', icon: '🏰' },
      { name: 'Barceloneta Beach', tip: 'Free! Great for a morning stroll. Swimming in summer is delightful.', icon: '🏖️' },
      { name: 'Camp Nou', tip: 'Book museum tour in advance if Barça match isn\'t on. For football fans — essential.', icon: '⚽' },
    ],
    foodGuide: [
      { item: 'Patatas Bravas', where: 'Bar Calders in Sant Antoni', indianNote: 'Fried potatoes with spicy tomato sauce — extremely close to our aloo chaat!', icon: '🥔' },
      { item: 'Pan con Tomate', where: 'Literally everywhere, it\'s Catalan bread staple', indianNote: 'Bread rubbed with tomato and olive oil — simple but divine. Like our jeera toast.', icon: '🍞' },
      { item: 'Paella', where: 'La Mar Salada near Barceloneta beach', indianNote: 'Saffron rice dish — feels close to our biryani but lighter. Try the seafood version.', icon: '🥘' },
      { item: 'Tapas spread', where: 'El Xampanyet in Gothic Quarter', indianNote: 'Small sharing plates — same philosophy as our thali. Order 4–5 and share!', icon: '🍽️' },
      { item: 'Churros con Chocolate', where: 'Granja M. Viader in El Raval', indianNote: 'Fried dough dipped in thick hot chocolate — like our jalebi but better for dipping!', icon: '🍩' },
      { item: 'Crema Catalana', where: 'Most traditional restaurants', indianNote: 'Custard with caramelized sugar top — similar to flan. Rich, creamy dessert.', icon: '🍮' },
    ],
    whatToWear: [
      { season: 'Spring (Mar–May)', advice: 'Light jeans, blouses, a light jacket. Barcelonans are stylish — blend in with casual-chic.', icon: '🌸' },
      { season: 'Summer (Jun–Aug)', advice: 'Breathables, swimwear ready, sandals. It\'s HOT. Linen is your best friend. Sunscreen mandatory.', icon: '☀️' },
      { season: 'Autumn (Sep–Nov)', advice: 'Still warm in September! Light jacket by October. Great weather for walking tours.', icon: '🍂' },
      { season: 'Winter (Dec–Feb)', advice: 'Mild — a good coat, scarf, and boots are enough. Markets and museums are less crowded.', icon: '🌤️' },
    ],
    insiderTips: [
      'Barcelona is a late city — locals eat dinner at 9–10 PM. Don\'t rush dinner before 8:30 PM.',
      'T-Casual metro card (10 trips) saves money. Get it from airport machines.',
      'Beware of La Rambla — most famous but also most pickpocket-prone street.',
      'Tipping is not mandatory at restaurants — rounding up is enough.',
      'Many beaches and parks are free — biggest entertainment doesn\'t cost money here.',
      'Learn "Gràcies" not "Gracias" — Catalans appreciate the Catalan language!',
    ],
    indianContext: 'Barcelona has a growing Indian community. You\'ll find Indian grocery stores and restaurants in El Raval. Vegetarian tapas are easy to find — just ask "sin carne" (without meat).',
    budget: '€100–160/day',
    bestTime: 'May–June, September–October',
    language: 'Spanish/Catalan',
    currency: 'Euro (€)',
  },
  {
    id: 4,
    country: 'Greece',
    city: 'Athens & Santorini',
    tagline: 'Birthplace of Civilization',
    emoji: '🏺',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    heroImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&q=80',
    description: 'Greece offers two experiences in one: ancient history in Athens and dreamlike island beauty in Santorini.',
    mustVisit: [
      { name: 'Acropolis, Athens', tip: 'Go at opening (8 AM) or evening. Wear good shoes — the marble is slippery. Combo ticket covers nearby sites.', icon: '🏛️' },
      { name: 'Oia, Santorini', tip: 'The famous blue domes are in Oia. Walk the caldera path from Fira to Oia for stunning views.', icon: '🔵' },
      { name: 'Agia Triada Beach', tip: 'One of the quietest black sand beaches on the island. Volcanic sand is unique!', icon: '🏖️' },
      { name: 'Monastiraki Flea Market, Athens', tip: 'Sunday morning is best! Great for souvenirs, olive oil, and spices.', icon: '🛍️' },
      { name: 'Delphi', tip: 'Day trip from Athens. Oracle site perched on the mountains — hauntingly beautiful.', icon: '⛰️' },
      { name: 'Wine tasting in Santorini', tip: 'Assyrtiko white wine is world-class. Santo Wines has the best caldera views.', icon: '🍷' },
    ],
    foodGuide: [
      { item: 'Moussaka', where: 'Taverna tou Psara in Plaka, Athens', indianNote: 'Baked layers of eggplant, minced meat, béchamel — like a hearty casserole. Rich and satisfying.', icon: '🍆' },
      { item: 'Gyros', where: 'Thanasis on Mitropoleos St, Athens', indianNote: 'Pita wrap with meat and tzatziki — straight comparison to kathi roll! Vegetarian versions available.', icon: '🫔' },
      { item: 'Spanakopita', where: 'Any bakery (fournos)', indianNote: 'Spinach and feta cheese puff pastry — great vegetarian snack. Like a savory samosa shape!', icon: '🥬' },
      { item: 'Fresh Seafood', where: 'Psaros restaurant, Santorini', indianNote: 'Simply grilled octopus, calamari, fresh fish with lemon — pure and clean flavors.', icon: '🦑' },
      { item: 'Greek Salad (Horiatiki)', where: 'Everywhere — don\'t skip it', indianNote: 'Tomatoes, cucumber, olives, feta — surprisingly hearty. Ask for extra feta!', icon: '🥗' },
      { item: 'Baklava', where: 'Ariston pastry shop, Athens', indianNote: 'Layers of filo pastry, nuts, honey — very similar to our Indian mithai. You will love this!', icon: '🍯' },
    ],
    whatToWear: [
      { season: 'Spring (Apr–May)', advice: 'Light clothing, comfortable sandals for ruins. Acropolis has uneven terrain — no heels!', icon: '🌸' },
      { season: 'Summer (Jun–Aug)', advice: 'Very hot and sunny. Loose cotton, wide-brim hat, high SPF sunscreen. Light-colored clothes.', icon: '☀️' },
      { season: 'Autumn (Sep–Oct)', advice: 'Ideal season! Light layers, sandals still work. Evenings get cool in islands — carry a shawl.', icon: '🍂' },
      { season: 'Winter (Nov–Mar)', advice: 'Athens has mild winters. Santorini gets quiet. Coat + layers needed. Off-season is very affordable.', icon: '🌧️' },
    ],
    insiderTips: [
      'Combo ticket for Athens sites: €30 and valid for 5 days. Great value.',
      'Ferry from Athens to Santorini: 5 hrs by fast ferry (€60–90). Book online in advance.',
      'Greek coffee (ellinikos) is thick and strong — let the grounds settle before drinking!',
      'Haggling is NOT common in Greece. Don\'t try to bargain like in India.',
      'Cats are everywhere and beloved — feel free to pet them!',
      'Avoid tourist traps near Acropolis — walk 10 mins to Monastiraki for authentic food.',
    ],
    indianContext: 'Greek vegetarian food is plentiful: spanakopita, Greek salad, stuffed peppers, falafel-style dishes. Athens has a few Indian restaurants near Syntagma square.',
    budget: '€100–170/day',
    bestTime: 'April–May, September–October',
    language: 'Greek',
    currency: 'Euro (€)',
  },
  {
    id: 5,
    country: 'Netherlands',
    city: 'Amsterdam',
    tagline: 'Canals, Tulips & Freedom',
    emoji: '🌷',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    heroImage: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=1200&q=80',
    description: 'Amsterdam rewards the curious. Its canals, world-class museums, and liberal spirit make it one of Europe\'s most unique cities.',
    mustVisit: [
      { name: 'Rijksmuseum', tip: 'Book in advance. World\'s finest Dutch art including Rembrandt and Vermeer. Allow 3–4 hours.', icon: '🎨' },
      { name: 'Anne Frank House', tip: 'Book tickets MONTHS in advance — sells out fast. Deeply moving experience.', icon: '📖' },
      { name: 'Keukenhof Gardens', tip: 'Open only March–May! 7 million tulips. Book tickets and get there early. Best in April!', icon: '🌷' },
      { name: 'Canal Boat Tour', tip: 'Evening tour is magical. Blue Boat Company offers quality tours. Great for photos.', icon: '⛵' },
      { name: 'Vondelpark', tip: 'Amsterdam\'s green heart — free. Perfect Sunday afternoon with locals.', icon: '🌿' },
      { name: 'Van Gogh Museum', tip: 'Book in advance. Emotional experience — his story is as compelling as his art.', icon: '🖼️' },
    ],
    foodGuide: [
      { item: 'Stroopwafel', where: 'Albert Cuyp Market or Stach', indianNote: 'Caramel syrup between two thin waffles — sweet like our chakli but more delicate. Perfect with coffee.', icon: '🧇' },
      { item: 'Dutch Pancakes (Pannenkoeken)', where: 'Pancakes Amsterdam near Dam Square', indianNote: 'Huge thin pancakes with sweet or savory toppings — our dosa equivalent!', icon: '🥞' },
      { item: 'Herring (Haring)', where: 'Street fish stalls — haringkar', indianNote: 'Raw cured fish with onions and pickles. Adventurous! Not for spice lovers, but traditional Dutch.', icon: '🐟' },
      { item: 'Bitterballen', where: 'Any brown café (bruine kroeg)', indianNote: 'Crispy fried beef ragout balls — like our mutton chops. Served with mustard dip.', icon: '🍡' },
      { item: 'Indonesian Rijsttafel', where: 'Blauw restaurant, de Pijp', indianNote: 'Dutch-Indonesian rice table with 20+ dishes — VERY similar to Indian thali! Must-try.', icon: '🍱' },
      { item: 'Dutch Cheese', where: 'Henri Willig Cheese shops', indianNote: 'Aged Gouda and Edam — nutty, not too pungent. Amazing with crackers.', icon: '🧀' },
    ],
    whatToWear: [
      { season: 'Spring (Mar–May)', advice: 'Layered waterproof jacket essential. Amsterdam rain is unpredictable. Comfortable cycling-friendly clothes.', icon: '🌸' },
      { season: 'Summer (Jun–Aug)', advice: 'Light layers — even summer can be breezy. Jeans + t-shirt combo works well most days.', icon: '🌤️' },
      { season: 'Autumn (Sep–Nov)', advice: 'Waterproof coat, warm layers, ankle boots. Golden autumnal canal views are stunning.', icon: '🍂' },
      { season: 'Winter (Dec–Feb)', advice: 'Heavy coat, thermal layers, waterproof boots. Ice skating on canals in December is magical!', icon: '❄️' },
    ],
    insiderTips: [
      'Get the I Amsterdam City Card for unlimited transport + museum access.',
      'Rent a bike! It\'s how locals move. Stick to bike lanes — pedestrian lanes are different.',
      'Indonesia connection: Netherlands colonized Indonesia, hence amazing Indonesian food here.',
      'Tap water is excellent to drink — no need to buy bottled water.',
      'The red-light district is a neighborhood — be respectful, no photography of workers.',
      '"Gezellig" (cozy vibe) is the Dutch philosophy — enjoy a warm café with friends.',
    ],
    indianContext: 'Amsterdam has a significant Surinamese-Indian diaspora from its colonial history. You\'ll find great roti shops and Indian-Surinamese food unique to the Netherlands!',
    budget: '€120–180/day',
    bestTime: 'April–May, September',
    language: 'Dutch (English widely spoken)',
    currency: 'Euro (€)',
  },
  {
    id: 6,
    country: 'Czech Republic',
    city: 'Prague',
    tagline: 'City of a Hundred Spires',
    emoji: '🏰',
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    heroImage: 'https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?w=1200&q=80',
    description: 'Prague is a fairy-tale come alive — Gothic spires, medieval bridges, and baroque palaces at the most affordable prices in Western Europe.',
    mustVisit: [
      { name: 'Charles Bridge', tip: 'Go at dawn (5–6 AM) for mist and zero crowds. By 10 AM it\'s packed. Musicians play during the day.', icon: '🌉' },
      { name: 'Prague Castle', tip: 'Largest castle complex in the world. Allow a full morning. Free to walk the grounds.', icon: '🏰' },
      { name: 'Old Town Square', tip: 'See the Astronomical Clock chime hourly. Most beautiful at Christmas with markets.', icon: '⏰' },
      { name: 'Josefov (Jewish Quarter)', tip: 'One of the most preserved Jewish quarters in Europe. Deeply historic and moving.', icon: '✡️' },
      { name: 'Vinohrady neighborhood', tip: 'Avoid tourist-only areas — Vinohrady shows local Prague life. Great cafés and restaurants.', icon: '🏘️' },
      { name: 'Kutná Hora Day Trip', tip: 'Bone church (Sedlec Ossuary) is hauntingly beautiful — 1 hour from Prague by train.', icon: '💀' },
    ],
    foodGuide: [
      { item: 'Svíčková', where: 'Lokál restaurant chain', indianNote: 'Slow-braised beef sirloin with creamy sauce and bread dumplings — comfort food king.', icon: '🥩' },
      { item: 'Trdelník', where: 'Street stalls across Old Town', indianNote: 'Pastry cylinder rolled in cinnamon sugar — like a hot jalebi but bread-like. Best fresh off the spit.', icon: '🥐' },
      { item: 'Czech Goulash', where: 'U Fleků brewery restaurant', indianNote: 'Beef stew with paprika served with bread dumplings — flavors not far from our kheema!', icon: '🍲' },
      { item: 'Fried Cheese (Smažený sýr)', where: 'Most Czech pubs', indianNote: 'Breaded fried cheese — pure vegetarian and DELICIOUS. Like paneer pakoda but melty inside.', icon: '🧀' },
      { item: 'Chimney Cake', where: 'Street stalls in Old Town', indianNote: 'Hollow pastry filled with Nutella or ice cream — a Prague street food staple.', icon: '🍫' },
      { item: 'Czech Pilsner Beer', where: 'U Fleků or Pivovarský Klub', indianNote: 'Prague is the home of Pilsner Urquell. Even if you don\'t drink beer, see a traditional beer hall.', icon: '🍺' },
    ],
    whatToWear: [
      { season: 'Spring (Mar–May)', advice: 'Layers and a waterproof jacket. Cobblestones everywhere — wear comfortable flat shoes.', icon: '🌸' },
      { season: 'Summer (Jun–Aug)', advice: 'Light casual wear. Evenings can be cool. Bring a light jacket for late night walks on the bridge.', icon: '☀️' },
      { season: 'Autumn (Sep–Nov)', advice: 'Prague in autumn is stunning. Warm mid-layers, good coat, waterproof shoes.', icon: '🍂' },
      { season: 'Winter (Dec–Feb)', advice: 'Heavy coat, boots, thermal layers. Christmas markets are THE reason to brave the cold!', icon: '❄️' },
    ],
    insiderTips: [
      'Prague is incredibly affordable — budget travelers thrive here vs. Paris or London.',
      'Czech people are reserved but warm once you make contact. Smile first.',
      'Taxis — always use the Bolt app! Street taxis regularly overcharge tourists.',
      'The Czech Republic uses Czech Koruna (CZK), not Euro! Budget accordingly.',
      'Walk everywhere in the center — most sites are within 20 minutes of each other.',
      'Many restaurants have English menus but still carry a translation app for backstreet spots.',
    ],
    indianContext: 'Indian food is available near Wenceslas Square. Prague is one of Europe\'s most budget-friendly cities — great for Indian travelers on a moderate budget.',
    budget: '€70–120/day',
    bestTime: 'May, September, December (Christmas markets)',
    language: 'Czech',
    currency: 'Czech Koruna (CZK)',
  },
]

const EUROPE_ESSENTIALS = [
  {
    category: 'Before You Fly',
    icon: '✈️',
    color: '#667eea',
    tips: [
      { title: 'Schengen Visa', detail: 'Most of Europe requires a Schengen visa from your nearest consulate. Apply 3–6 weeks in advance. Need bank statements, itinerary, hotel bookings.' },
      { title: 'Travel Insurance', detail: 'Mandatory for Schengen visa application. Go with policies covering medical emergencies (minimum €30,000 cover). World Nomads or Bajaj Allianz work well.' },
      { title: 'International SIM / eSIM', detail: 'Get an eSIM before flying — Airalo or Holafly offer affordable European data plans. Much cheaper than roaming.' },
      { title: 'Currency Prep', detail: 'Carry some Euros in cash before landing. Use Niyo Global Card or Forex cards for better exchange rates than airport counters.' },
      { title: 'Accommodation Booking', detail: 'Book in advance, especially for summer. Airbnb, Booking.com, and Hostelworld are reliable. City center locations save on transport.' },
    ],
  },
  {
    category: 'Money & Payments',
    icon: '💶',
    color: '#f5576c',
    tips: [
      { title: 'Cards Are King', detail: 'Europe is largely cashless. Carry a debit/credit card with low foreign transaction fees. Niyo Global, Fi Money, and HDFC ForexPlus are popular choices.' },
      { title: 'ATM Withdrawals', detail: 'Use bank ATMs, not standalone ATMs at tourist spots (higher fees). Decline "dynamic currency conversion" — always choose local currency.' },
      { title: 'Tipping Culture', detail: 'Not as mandatory as North America. Rounding up or leaving 10% is appreciated. In some countries (Germany, Czech Republic) it\'s customary. In others (France), optional.' },
      { title: 'Budget Range', detail: 'Western Europe (Paris, Amsterdam): €100–200/day. Southern (Rome, Barcelona): €80–160/day. Eastern (Prague, Budapest): €50–100/day.' },
    ],
  },
  {
    category: 'Getting Around',
    icon: '🚂',
    color: '#43e97b',
    tips: [
      { title: 'Eurail / Interrail Pass', detail: 'If visiting 3+ countries, a Eurail pass can save money. Book seat reservations separately for high-speed trains. Check Rail Europe.' },
      { title: 'Budget Airlines', detail: 'Ryanair and easyJet offer €10–50 flights between cities. Book early, travel light (cabin bag only) to avoid fees. Check Skyscanner.' },
      { title: 'Metro Systems', detail: 'Every major city has a metro. Get a multi-day pass for savings. Google Maps works perfectly for routing — download offline maps.' },
      { title: 'Walking', detail: 'European city centers are compact and walkable. The best discoveries happen when you wander — ditch the map occasionally.' },
    ],
  },
  {
    category: 'Indian Traveler Tips',
    icon: '🇮🇳',
    color: '#f7971e',
    tips: [
      { title: 'Vegetarian Travel', detail: 'Ask "Is this vegetarian?" or use Google Translate. Italy and Greece are easiest for vegetarians. Carry instant noodles, Maggi masala packets for emergencies.' },
      { title: 'Spice Levels', detail: 'European food is mild compared to Indian cuisine. Carry your own green chutney sachets, tamarind candy, or instant rasam packets. Indian stores exist in major cities.' },
      { title: 'Weather vs India', detail: 'Even "hot" summers in Europe (28°C) feel pleasant to most Indians. But rain is common — always carry a compact umbrella.' },
      { title: 'Safety', detail: 'Europe is generally very safe. Watch for pickpockets in tourist zones. Use TSA-approved locks on bags. Emergency number across Europe is 112.' },
      { title: 'Language', detail: 'English is widely understood in Western Europe, especially by younger people. Learn 5 words in the local language — locals appreciate the effort enormously.' },
    ],
  },
]

const PACKING_LIST = [
  { category: 'Documents', icon: '📋', items: ['Passport (6+ months validity)', 'Schengen Visa', 'Travel Insurance docs', 'Hotel/flight printouts', 'Emergency contacts list', 'Notarized copy of passport'] },
  { category: 'Clothing Essentials', icon: '👕', items: ['Neutral base layers (mix & match)', 'One smart outfit for dinners', 'Comfortable walking shoes (broken in!)', 'Waterproof jacket/windbreaker', 'Scarf (sun + church modesty + style)', 'Compact umbrella'] },
  { category: 'Tech & Gadgets', icon: '📱', items: ['Universal adapter (Type C common in Europe)', 'Power bank (10,000 mAh+)', 'Earphones with noise cancelling', 'Camera or phone with good lens', 'Kindle/offline entertainment for trains', 'eSIM card activated before landing'] },
  { category: 'Indian Must-Haves', icon: '🇮🇳', items: ['Masala packets / instant rasam', 'Digestive tablets (Pudin Hara/OFLAG)', 'Ayurvedic pain balm or Moov', 'Sanitary items from India (expensive abroad)', 'Small brass idol or puja item if needed', 'Thermal innerwear (Indian brands are good)'] },
  { category: 'Health & Safety', icon: '💊', items: ['Paracetamol / Crocin', 'Electrolyte packets (ORS)', 'Antacids', 'Antiseptic cream / plasters', 'Medicines with prescription copies', 'Sunscreen SPF 50+'] },
]

const CULTURAL_TIPS = [
  { icon: '🤝', tip: 'Greet first, then ask', detail: 'Always say "Hello" or the local greeting before anything else. Europeans find it rude to jump straight into a request.' },
  { icon: '🗣️', tip: 'Volume check', detail: 'Indians naturally speak louder. In restaurants, museums, and quiet zones, lower your voice. Europeans value quietness in public spaces.' },
  { icon: '⏰', tip: 'Punctuality matters', detail: 'If you\'ve booked a timed entry or tour, be there on time. Being 15 minutes late means you miss it.' },
  { icon: '🚶', tip: 'Walking etiquette', detail: 'Keep to the right on sidewalks and escalators (left side is for walking, right is for standing). Don\'t stop abruptly in the middle of a path.' },
  { icon: '📸', tip: 'Ask before photographing people', detail: 'Always ask before taking someone\'s photo or including them in a shot. It\'s a matter of respect.' },
  { icon: '🚭', tip: 'Drinking & smoking zones', detail: 'Note where it\'s permitted. Many public squares and transport zones are smoke-free. Respect these rules strictly.' },
  { icon: '🛕', tip: 'Church etiquette', detail: 'Dress modestly (cover knees & shoulders). Maintain silence inside. Even if you\'re not Christian, enter with respect and curiosity.' },
  { icon: '💬', tip: 'Personal space', detail: 'Europeans stand farther apart when talking than Indians. Don\'t touch someone\'s arm or pat on the back unless you know them.' },
]

export default function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [selectedDestination, setSelectedDestination] = useState(null)
  const [activeTab, setActiveTab] = useState('visit')
  const [expandedTip, setExpandedTip] = useState(null)

  const openDestination = (dest) => {
    setSelectedDestination(dest)
    setActiveTab('visit')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const closeDestination = () => {
    setSelectedDestination(null)
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'essentials', label: 'Essentials' },
    { id: 'packing', label: 'Pack Smart' },
    { id: 'culture', label: 'Culture' },
  ]

  return (
    <div className="app">
      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo" onClick={() => { setActiveSection('home'); closeDestination() }}>
          <span className="nav-logo-icon">🌍</span>
          <span className="nav-logo-text">EUROPA</span>
        </div>
        <div className="nav-links">
          {navItems.map(item => (
            <button
              key={item.id}
              className={`nav-link ${activeSection === item.id && !selectedDestination ? 'active' : ''}`}
              onClick={() => { setActiveSection(item.id); closeDestination() }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* DESTINATION DETAIL VIEW */}
      {selectedDestination && (
        <div className="destination-detail">
          <div className="detail-hero" style={{ backgroundImage: `url(${selectedDestination.heroImage})` }}>
            <div className="detail-hero-overlay">
              <button className="back-btn" onClick={closeDestination}>← Back to Destinations</button>
              <div className="detail-hero-content">
                <span className="detail-emoji">{selectedDestination.emoji}</span>
                <h1 className="detail-city">{selectedDestination.city}</h1>
                <p className="detail-country">{selectedDestination.country}</p>
                <p className="detail-tagline">"{selectedDestination.tagline}"</p>
                <div className="detail-meta">
                  <span>🗓 Best Time: {selectedDestination.bestTime}</span>
                  <span>💶 Budget: {selectedDestination.budget}/day</span>
                  <span>🗣 Language: {selectedDestination.language}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="detail-body">
            <p className="detail-description">{selectedDestination.description}</p>

            <div className="indian-context-banner">
              <span className="flag">🇮🇳</span>
              <p>{selectedDestination.indianContext}</p>
            </div>

            <div className="detail-tabs">
              {['visit', 'eat', 'wear', 'tips'].map(tab => (
                <button
                  key={tab}
                  className={`detail-tab ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === 'visit' && '🗺 What to Visit'}
                  {tab === 'eat' && '🍽 What to Eat'}
                  {tab === 'wear' && '👗 What to Wear'}
                  {tab === 'tips' && '💡 Insider Tips'}
                </button>
              ))}
            </div>

            {activeTab === 'visit' && (
              <div className="tab-content">
                <div className="cards-grid">
                  {selectedDestination.mustVisit.map((place, i) => (
                    <div className="place-card" key={i}>
                      <span className="place-icon">{place.icon}</span>
                      <h3>{place.name}</h3>
                      <p>{place.tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'eat' && (
              <div className="tab-content">
                <div className="cards-grid">
                  {selectedDestination.foodGuide.map((food, i) => (
                    <div className="food-card" key={i}>
                      <div className="food-header">
                        <span className="food-icon">{food.icon}</span>
                        <h3>{food.item}</h3>
                      </div>
                      <p className="food-where">📍 {food.where}</p>
                      <div className="indian-note">
                        <span>🇮🇳</span>
                        <p>{food.indianNote}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'wear' && (
              <div className="tab-content">
                <div className="wear-grid">
                  {selectedDestination.whatToWear.map((season, i) => (
                    <div className="wear-card" key={i}>
                      <span className="wear-icon">{season.icon}</span>
                      <h3>{season.season}</h3>
                      <p>{season.advice}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'tips' && (
              <div className="tab-content">
                <div className="tips-list">
                  {selectedDestination.insiderTips.map((tip, i) => (
                    <div className="tip-item" key={i}>
                      <span className="tip-number">{i + 1}</span>
                      <p>{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* HOME */}
      {!selectedDestination && activeSection === 'home' && (
        <div className="section home-section">
          <div className="hero">
            <div className="hero-bg" />
            <div className="hero-content">
              <p className="hero-subtitle">Your Indian Guide to</p>
              <h1 className="hero-title">Discovering Europe</h1>
              <p className="hero-desc">
                From Mumbai or Delhi to Paris and Rome — everything an Indian traveler needs to navigate, eat, dress, and fall in love with Europe.
              </p>
              <div className="hero-cta-row">
                <button className="cta-btn primary" onClick={() => setActiveSection('destinations')}>
                  Explore Destinations
                </button>
                <button className="cta-btn secondary" onClick={() => setActiveSection('essentials')}>
                  Travel Essentials
                </button>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-num">6</span>
                  <span className="stat-label">Destinations</span>
                </div>
                <div className="stat-divider" />
                <div className="stat">
                  <span className="stat-num">40+</span>
                  <span className="stat-label">Must-Visit Spots</span>
                </div>
                <div className="stat-divider" />
                <div className="stat">
                  <span className="stat-num">30+</span>
                  <span className="stat-label">Food Discoveries</span>
                </div>
                <div className="stat-divider" />
                <div className="stat">
                  <span className="stat-num">∞</span>
                  <span className="stat-label">Memories</span>
                </div>
              </div>
            </div>
          </div>

          {/* QUICK DESTINATIONS STRIP */}
          <div className="home-destinations">
            <h2 className="section-heading">Where to Go</h2>
            <div className="dest-strip">
              {DESTINATIONS.map(dest => (
                <div
                  key={dest.id}
                  className="dest-strip-card"
                  style={{ background: dest.gradient }}
                  onClick={() => { setActiveSection('destinations'); openDestination(dest) }}
                >
                  <span className="dest-strip-emoji">{dest.emoji}</span>
                  <span className="dest-strip-city">{dest.city}</span>
                  <span className="dest-strip-country">{dest.country}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FEATURED TIPS */}
          <div className="home-features">
            <div className="feature-card">
              <span className="feature-icon">🍽️</span>
              <h3>Food Guide</h3>
              <p>Every dish mapped to an Indian equivalent so you know exactly what to expect — no surprises.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">👗</span>
              <h3>Dress by Season</h3>
              <p>Season-by-season packing advice tailored for Indians used to tropical climates.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🇮🇳</span>
              <h3>Indian Context</h3>
              <p>Where to find Indian food, how to handle spice withdrawal, and familiar cultural bridges.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">💡</span>
              <h3>Insider Tips</h3>
              <p>Skip the tourist traps. Real advice on avoiding scams, queues, and overpriced traps.</p>
            </div>
          </div>
        </div>
      )}

      {/* DESTINATIONS */}
      {!selectedDestination && activeSection === 'destinations' && (
        <div className="section destinations-section">
          <div className="section-header">
            <h2>Choose Your Adventure</h2>
            <p>Six iconic European destinations, curated for Indian travelers</p>
          </div>
          <div className="destinations-grid">
            {DESTINATIONS.map(dest => (
              <div key={dest.id} className="destination-card" onClick={() => openDestination(dest)}>
                <div className="dest-card-img" style={{ backgroundImage: `url(${dest.heroImage})` }}>
                  <div className="dest-card-overlay" style={{ background: dest.gradient.replace('135deg', '180deg').replace('100%)', '60%)') }}>
                    <span className="dest-card-emoji">{dest.emoji}</span>
                  </div>
                </div>
                <div className="dest-card-body">
                  <div className="dest-card-header">
                    <div>
                      <h3 className="dest-card-city">{dest.city}</h3>
                      <p className="dest-card-country">{dest.country}</p>
                    </div>
                    <span className="dest-card-budget">{dest.budget}</span>
                  </div>
                  <p className="dest-card-tagline">"{dest.tagline}"</p>
                  <p className="dest-card-desc">{dest.description.substring(0, 100)}...</p>
                  <div className="dest-card-footer">
                    <span>🗓 {dest.bestTime}</span>
                    <button className="explore-btn">Explore →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ESSENTIALS */}
      {!selectedDestination && activeSection === 'essentials' && (
        <div className="section essentials-section">
          <div className="section-header">
            <h2>Travel Essentials</h2>
            <p>Everything you need to know before and during your European journey</p>
          </div>
          {EUROPE_ESSENTIALS.map((cat, i) => (
            <div key={i} className="essentials-category">
              <div className="essentials-cat-header" style={{ borderLeftColor: cat.color }}>
                <span className="essentials-cat-icon">{cat.icon}</span>
                <h3>{cat.category}</h3>
              </div>
              <div className="essentials-tips-grid">
                {cat.tips.map((tip, j) => (
                  <div
                    key={j}
                    className={`essential-tip-card ${expandedTip === `${i}-${j}` ? 'expanded' : ''}`}
                    onClick={() => setExpandedTip(expandedTip === `${i}-${j}` ? null : `${i}-${j}`)}
                    style={{ '--accent': cat.color }}
                  >
                    <div className="essential-tip-header">
                      <h4>{tip.title}</h4>
                      <span className="expand-icon">{expandedTip === `${i}-${j}` ? '−' : '+'}</span>
                    </div>
                    {expandedTip === `${i}-${j}` && (
                      <p className="essential-tip-detail">{tip.detail}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* PACKING */}
      {!selectedDestination && activeSection === 'packing' && (
        <div className="section packing-section">
          <div className="section-header">
            <h2>Pack Smart for Europe</h2>
            <p>The definitive Indian traveler's packing list — nothing more, nothing less</p>
          </div>
          <div className="packing-grid">
            {PACKING_LIST.map((cat, i) => (
              <div key={i} className="packing-card">
                <div className="packing-card-header">
                  <span className="packing-icon">{cat.icon}</span>
                  <h3>{cat.category}</h3>
                </div>
                <ul className="packing-items">
                  {cat.items.map((item, j) => (
                    <li key={j} className="packing-item">
                      <span className="check-icon">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CULTURE */}
      {!selectedDestination && activeSection === 'culture' && (
        <div className="section culture-section">
          <div className="section-header">
            <h2>Cultural Do's & Don'ts</h2>
            <p>Bridging the gap between Indian customs and European etiquette</p>
          </div>
          <div className="culture-grid">
            {CULTURAL_TIPS.map((item, i) => (
              <div key={i} className="culture-card">
                <span className="culture-icon">{item.icon}</span>
                <h3>{item.tip}</h3>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="culture-bottom">
            <div className="culture-quote">
              <blockquote>
                "Travel is the only thing you buy that makes you richer."
              </blockquote>
              <p>And in Europe, you'll be rich in history, food, art, and memories — all within one glorious journey.</p>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <span>🌍</span>
            <span>EUROPA</span>
          </div>
          <p>Made with love for Indian travelers discovering the magic of Europe.</p>
          <p className="footer-note">Bon Voyage · Buon Viaggio · Buen Viaje · Gute Reise</p>
        </div>
      </footer>
    </div>
  )
}
