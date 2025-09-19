import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import Place from './models/Place.js';
import Category from './models/Category.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Enable CORS
app.use(cors({
  origin: "http://localhost:5173", // frontend + seller frontend
  credentials: true
}));

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.get("/api/place/addData", async (req, res) => {
  let placeData = [
    {
      name: "Hundru Falls",
      aboutThePlace: "Hundru Falls is one of the highest waterfalls in Jharkhand, dropping from a height of 98 meters on the Subarnarekha River. Surrounded by lush forests, it is a major tourist attraction especially during the monsoon.",
      history: "Hundru Falls has been a popular destination for nature lovers and adventure enthusiasts for decades. The falls are named after the nearby Hundru village and have been a part of local folklore. Over the years, it has attracted tourists for its scenic beauty and the thrilling experience of trekking to the base of the falls.",
      visitingHours: "6 AM to 6 PM",
      location: "Ranchi District, Jharkhand",
      images: ["https://res.cloudinary.com/doh9wcybz/image/upload/v1758273337/hudru-falls_gqkrcy.jpg", "https://res.cloudinary.com/doh9wcybz/image/upload/v1758273336/7ybd9qb5lrmb1_jalhle.jpg", "https://res.cloudinary.com/doh9wcybz/image/upload/v1758273336/the-hundru-falls-is-a-waterfall-located-in-ranchi-district-in-the-KKA51K_mzn1fd.jpg"],
      bestTimeToVisit: "July-October",
      category: ["Waterfalls-Scenic-Spots"],
      popularFor: ["Photography", "Picnic", "Nature Walks"]
    },
    {
      name: "Betla National Park",
      aboutThePlace: "Part of the Palamau Tiger Reserve, Betla National Park is home to elephants, tigers, leopards, and many bird species. It is one of the earliest tiger reserves in India.",
      history: "Established in 1989, Betla National Park was one of the first national parks in India to be included under Project Tiger. The park has a rich history of conservation efforts and has been a significant site for wildlife research and eco-tourism. It is also known for its historical forts and tribal culture.",
      visitingHours: "6 AM to 6 PM",
      location: "Latehar District, Jharkhand",
      images: ["https://res.cloudinary.com/doh9wcybz/image/upload/v1758224296/unnamed_xmh5d7.jpg", "https://res.cloudinary.com/doh9wcybz/image/upload/v1758224293/unnamed_2_tiekka.jpg", "https://res.cloudinary.com/doh9wcybz/image/upload/v1758224291/unnamed_1_iuxh44.jpg"],
      bestTimeToVisit: "October – March",
      category: ["Wildlife-National-Parks","Most-Popular-Places"],
      popularFor: ["Wildlife Safari", "Eco Tourism", "Bird Watching"]
    },
    {
      name: "Netarhat Hills",
      aboutThePlace: "Known as the Queen of Chotanagpur, Netarhat is famous for breathtaking sunrise and sunset views, surrounded by pine and sal forests.",
      history: "Netarhat has been a popular hill station since the British colonial era. It was developed as a summer retreat due to its cool climate and scenic beauty. The area is also known for its educational institutions, including the prestigious Netarhat Residential School, which has produced many notable alumni.",
      visitingHours: "5 AM to 7 PM",
      location: "Latehar District, Jharkhand",
      images: ["https://res.cloudinary.com/doh9wcybz/image/upload/v1758221989/Screenshot_2025-09-16_232449_sxu5qq.png", "https://res.cloudinary.com/doh9wcybz/video/upload/v1758221988/netarhat_kaebnp.mp4", "https://res.cloudinary.com/doh9wcybz/image/upload/v1758221986/netarhatt__jharkhand_buv93i.jpg"],
      bestTimeToVisit: "October – April",
      category: ["Hills-Mountain-Ranges","Most-Popular-Places"],
      popularFor: ["Trekking", "Sunset Views", "Camping"]
    },
    {
      name: "Baidyanath Temple",
      aboutThePlace: "One of the 12 Jyotirlingas of Lord Shiva, located in Deoghar. A major pilgrimage site visited by millions of devotees each year, especially during Shravan Mela.",
      history: "The Baidyanath Temple, also known as Baba Dham, is one of the most revered Hindu temples dedicated to Lord Shiva. The temple's origins date back to ancient times and it has been a significant pilgrimage site for centuries. According to legend, Ravana, the demon king, worshipped Lord Shiva here to gain his blessings. The temple complex has undergone several renovations over the years and continues to attract devotees from all over India.",
      visitingHours: "5 AM to 9 PM",
      location: "Deoghar District, Jharkhand",
      images: ["https://res.cloudinary.com/doh9wcybz/image/upload/v1758221834/d99b5cf9-292f-46bd-8a06-c9b7ce3bac32_kbrayq.jpg", "https://res.cloudinary.com/doh9wcybz/image/upload/v1758221833/Ravaneshwar_Baba_Baijnath_Mahadev_btxshg.jpg"],
      bestTimeToVisit: "July (Shravan Mela), October – March",
      category: ["Temples-Religious-Places"],
      popularFor: ["Pilgrimage", "Spirituality", "Architecture"]
    },
    {
      name: "Dassam Falls",
      aboutThePlace: "A spectacular waterfall on the Kanchi River near Ranchi, dropping from a height of 144 feet. Known for its thunderous sound and scenic surroundings.",
      history: "Dassam Falls has been a popular tourist destination for many years, known for its natural beauty and the powerful flow of water, especially during the monsoon season. The falls are named after the nearby Dassam village and have been a part of local folklore. Over time, it has become a favorite spot for picnics, photography, and nature walks.",
      visitingHours: "6 AM to 6 PM",
      location: "Ranchi District, Jharkhand",
      images: ["https://res.cloudinary.com/doh9wcybz/image/upload/v1758221934/Majestic_Dassam_Falls_Ranchi_Jharkhand_gzqqyb.jpg", "https://res.cloudinary.com/doh9wcybz/image/upload/v1758221931/Beautiful_Jonha_falls_ranchi_w7d4ma.jpg"],
      bestTimeToVisit: "Monsoon & Winter (July – December)",
      category: ["Waterfalls-Scenic-Spots"],
      popularFor: ["Nature", "Picnic", "Photography"]
    },
    {
      name: "Patratu Valley",
      aboutThePlace: "Patratu Valley is a scenic valley known for its winding roads, hills, and the Patratu Dam. It is a popular destination for road trips and offers stunning views of the surrounding landscape.",
      history: "Patratu Valley has gained popularity over the years as a picturesque destination for travelers and adventure enthusiasts. The valley is named after the nearby Patratu Dam, which was constructed to provide water for industrial and agricultural purposes. The area has become a favorite spot for road trips due to its winding roads and beautiful scenery, attracting tourists looking for a blend of nature and adventure.",
      visitingHours: "Open all day",
      location: "Ranchi District, Jharkhand",
      images: ["https://res.cloudinary.com/doh9wcybz/image/upload/v1758222053/In_love_with_Patratu_Valley_India_obglql.jpg","https://res.cloudinary.com/doh9wcybz/video/upload/v1758222055/patratu_valley_rtqib9.mp4", "https://res.cloudinary.com/doh9wcybz/image/upload/v1758222050/4145d896-3065-4d5b-b8ed-732ff8563826_qyqqiv.jpg"],
      bestTimeToVisit: "October – March",
      category: ["Adventure-Outdoor-Activities"],
      popularFor: ["Road Trips", "Photography", "Camping"]
    },
    {
      name: "Karma Festival",
      aboutThePlace: "Karma is a tribal festival celebrated with music, dance, and rituals under the sacred Karma tree. It symbolizes fertility, prosperity, and brotherhood.",
      history: "Karma Festival is an important tribal festival celebrated by various communities in Jharkhand, including the Oraon, Munda, and Ho tribes. The festival is dedicated to the worship of the Karma tree, which is considered sacred and symbolizes fertility and prosperity. During the festival, people gather to perform traditional dances, sing folk songs, and offer prayers to the deities. The celebration fosters a sense of community and brotherhood among the participants, reflecting the rich cultural heritage of Jharkhand's tribal population.",
      visitingHours: "Varies (usually in August-September)",
      location: "Celebrated across Jharkhand",
      images: ["https://res.cloudinary.com/doh9wcybz/image/upload/v1758222595/PTI09_25_2023_000235B_c2j5qr.jpg", "https://res.cloudinary.com/doh9wcybz/image/upload/v1758222592/karma-puja-2022_bq1ofc.jpg", "https://res.cloudinary.com/doh9wcybz/image/upload/v1758222590/hq720_kawuau.jpg"],
      bestTimeToVisit: "August – September",
      category: ["Festivals-Cultural-Events"],
      popularFor: ["Dance", "Tribal Culture", "Folk Music"]
    },
    // {
    //   name: "Sarhul Festival",
    //   description: "Sarhul marks the beginning of spring, celebrated by tribal communities with traditional rituals, dance, and food offerings to the Sal tree.",
    //   location: "Tribal villages across Jharkhand",
    //   image: [],
    //   bestTimeToVisit: "March – April",
    //   category: "Festivals & Cultural Events",
    //   popularFor: ["Tribal Dance", "Rituals", "Community Gatherings"]
    // },
    {
      name: "Tusu Festival",
      aboutThePlace: "A harvest festival celebrated in January with folk songs, fairs, and colorful decorations. It reflects the agrarian culture of Jharkhand.",
      history: "Tusu Festival is a significant harvest festival celebrated primarily by the tribal communities in Jharkhand, West Bengal, and Odisha. The festival marks the end of the agricultural season and is dedicated to the worship of the goddess Tusu. It is characterized by vibrant folk songs, traditional dances, and fairs where people come together to celebrate the bounty of the harvest. The festival also involves rituals that express gratitude to nature for its blessings, highlighting the deep connection between the community and their agrarian lifestyle.",
      visitingHours: "Varies (usually in January)",
      location: "Southern Jharkhand",
      images: ["https://res.cloudinary.com/doh9wcybz/image/upload/v1758271806/d15e0c73f97fe02eaafd28dfc88b4a0f_v2kuw8.jpg", "https://res.cloudinary.com/doh9wcybz/image/upload/v1758271806/465096_jekpwn.webp", "https://res.cloudinary.com/doh9wcybz/image/upload/v1758271805/tusu-festival-santhal-painting-a5-frame-paintings-351255_ioa8q7.jpg"],
      bestTimeToVisit: "January",
      category: ["Festivals-Cultural-Events"],
      popularFor: ["Folk Songs", "Agriculture", "Cultural Celebrations"]
    },
    {
      name: "Chhath Puja",
      aboutThePlace: "Chhath Puja is a significant festival dedicated to the Sun God, celebrated with great devotion and rituals. Devotees offer prayers at rivers and lakes during sunrise and sunset.",
      history: "Chhath Puja is an ancient Hindu festival dedicated to the worship of the Sun God (Surya) and his wife Usha. It is primarily celebrated in the Indian states of Bihar, Jharkhand, Uttar Pradesh, and Nepal. The festival spans four days and involves rigorous rituals, including fasting, holy bathing, and offering prayers to the setting and rising sun. Chhath Puja holds immense cultural and religious significance, symbolizing gratitude towards nature for sustaining life on Earth. The festival is marked by community gatherings, traditional songs, and vibrant celebrations.",
      visitingHours: "Varies (usually in October-November)",
      location: "Rivers and lakes across Jharkhand",
      images: ["https://res.cloudinary.com/doh9wcybz/image/upload/v1758223564/5e86f537f8b7b4aed66e9c48b9227d4b_nr9pk3.jpg", "https://res.cloudinary.com/doh9wcybz/image/upload/v1758223568/a045062805744a86fa90db21daa34238_ulzfx3.jpg"],
      bestTimeToVisit: "October – November",
      category: ["Festivals-Cultural-Events"],
      popularFor: ["Rituals", "Devotion", "Cultural Significance"]
    },
    {
      name: "Palamau Tiger Reserve",
      aboutThePlace: "Palamau Tiger Reserve, also known as Betla National Park, is a prominent wildlife sanctuary in Jharkhand. It is one of the first nine tiger reserves under Project Tiger. The reserve is known for its diverse wildlife, including tigers, elephants, leopards, and various bird species. The park also features scenic forests and historic forts within its boundaries.",
      history: "Established in 1989, Palamau Tiger Reserve was among the first tiger reserves in India to be included under Project Tiger. The reserve has a rich history of conservation efforts and has been a significant site for wildlife research and eco-tourism. It is also known for its historical forts and tribal culture, making it a unique blend of natural beauty and cultural heritage.",
      visitingHours: "6 AM to 6 PM",
      location: "Latehar District, Jharkhand",
      images: ["https://res.cloudinary.com/doh9wcybz/image/upload/v1758270044/Betla_National_Park_safari_Palamau_Jharkhand_India_pymim0.jpg", "https://res.cloudinary.com/doh9wcybz/image/upload/v1758270045/photo7_nkeihy.jpg", "https://res.cloudinary.com/doh9wcybz/image/upload/v1758270048/palamau-images_ot63zu.jpg"],
      bestTimeToVisit: "November – April",
      category: ["Wildlife-National-Parks","Most-Popular-Places"],
      popularFor: ["Tiger Safari", "Wildlife Photography", "Nature Trails"]
    },
    {
      name: "Udhwa Bird Sanctuary",
      aboutThePlace: "The only bird sanctuary in Jharkhand, located near Sahebganj. It attracts migratory birds from Siberia and Europe during winter.",
      history: "Udhwa Bird Sanctuary, established in 1990, is the only bird sanctuary in Jharkhand and is renowned for its rich avian biodiversity. The sanctuary is situated at the confluence of the Ganges and Udhwa rivers, providing an ideal habitat for a variety of bird species. It attracts numerous migratory birds from Siberia and Europe during the winter months, making it a popular destination for bird watchers and nature enthusiasts. The sanctuary also plays a crucial role in the conservation of local flora and fauna.",
      visitingHours: "6 AM to 6 PM",
      location: "Sahebganj District, Jharkhand",
      images: ["https://res.cloudinary.com/doh9wcybz/image/upload/v1758271895/udhwa-bird-sanctuary-2_oa9lwq.jpg", "https://res.cloudinary.com/doh9wcybz/image/upload/v1758271896/white_pelicans_07_wvvwas.webp", "https://res.cloudinary.com/doh9wcybz/image/upload/v1758271899/Wetland-area_sahhmr.jpg"],
      bestTimeToVisit: "November – February",
      category: ["Wildlife-National-Parks","Most-Popular-Places"],
      popularFor: ["Bird Watching", "Photography", "Nature"]
    },
    {
      name: "Lodh Falls",
      aboutThePlace: "Lodh Falls is the highest waterfall in Jharkhand, cascading from a height of about 143 meters (468 feet) on the Burha River. It is located in the Latehar district and is surrounded by dense forests, making it a picturesque spot for nature lovers and adventure enthusiasts.",
      history: "Lodh Falls, also known as Burha Ghagh Falls, has been a significant natural attraction in Jharkhand for many years. The falls are named after the nearby Lodh village and have been a part of local folklore. The area around Lodh Falls is rich in biodiversity and has been a popular destination for tourists seeking tranquility and adventure. Over the years, it has attracted visitors for its scenic beauty, trekking opportunities, and the thrilling experience of witnessing the powerful cascade of water.",
      visitingHours: "6 AM to 6 PM",
      location: "Latehar District, Jharkhand",
      images: [],
      bestTimeToVisit: "July – October",
      category: ["Waterfalls-Scenic-Spots","Most-Popular-Places"],
      popularFor: ["Photography", "Adventure", "Nature"]
    },
    {
      name: "Kiriburu & Meghahatuburu",
      aboutThePlace: "Twin mining towns surrounded by scenic hills and lush forests. Known for iron ore mines and mesmerizing sunset views.",
      history: "Kiriburu and Meghahatuburu are twin towns located in the West Singhbhum district of Jharkhand. Established as mining towns, they have a rich history associated with iron ore mining. The towns are situated at high altitudes, offering breathtaking views of the surrounding landscape. Over the years, they have developed into popular tourist destinations, attracting visitors with their natural beauty and adventure opportunities.",
      visitingHours: "6 AM to 6 PM",
      location: "West Singhbhum District, Jharkhand",
      images: ["https://res.cloudinary.com/doh9wcybz/image/upload/v1758271600/sail-meghahatuburu-guest-house-kiriburu-base-camp-west-singhbhum-guest-house-kRGtvq6kEH_xclqpr.jpg", "https://res.cloudinary.com/doh9wcybz/image/upload/v1758271599/Kiriburu-Jharkhand-e1545161039334_pjrpeo.jpg", "https://res.cloudinary.com/doh9wcybz/image/upload/v1758271599/waterfall-harishankar_jm0utr.jpg"],
      bestTimeToVisit: "October – March",
      category: ["Hills-Mountain-Ranges"],
      popularFor: ["Sunset Views", "Scenic Beauty", "Photography"]
    },
    {
      name: "Topchanchi Lake",
      aboutThePlace: "Topchanchi Lake is a serene artificial lake located near Dhanbad. It is surrounded by hills and forests, making it a popular spot for picnics, boating, and nature walks.",
      history: "Topchanchi Lake was created as a reservoir to supply water to the nearby areas, including Dhanbad. Over time, it has become a popular recreational spot for locals and tourists alike. The lake is surrounded by lush greenery and hills, providing a peaceful environment for visitors. It is also known for its boating facilities and scenic beauty, making it an ideal destination for picnics and nature photography.",
      visitingHours: "6 AM to 6 PM",
      location: "Dhanbad District, Jharkhand",
      images: ["https://res.cloudinary.com/doh9wcybz/image/upload/v1758270283/117138319_m4wyve.jpg", "https://res.cloudinary.com/doh9wcybz/image/upload/v1758270283/117138319_m4wyve.jpg", "https://res.cloudinary.com/doh9wcybz/image/upload/v1758270288/eyJidWNrZXQiOiJ1dGEtaW1hZ2VzIiwia2V5IjoicGxhY2VfaW1nLzY0ZGZiM2IwZTU5YjQxOTViNzM0MjdhMmE2YjM4YWE5IiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2NDAsImhlaWdodCI6NjQwLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJ0b0Zvcm1hdCI6ICJ3ZWJwIn19_kwsz11.webp"],
      bestTimeToVisit: "October – March",
      category: ["Lakes-Dams"],
      popularFor: ["Boating", "Picnic", "Photography"]
    },
    {
      name: "Dhuska",
      aboutThePlace: "A traditional fried snack made of rice flour and lentils, often served with spicy curry. It is a staple breakfast dish in Jharkhand.",
      history: "Dhuska has its roots in the traditional cuisine of Jharkhand. It is commonly prepared during festivals and special occasions. The dish is loved for its crispy texture and is often paired with spicy curries or chutneys.",
      visitingHours: "6 AM to 10 PM",
      location: "Jharkhand",
      images: ["https://res.cloudinary.com/doh9wcybz/image/upload/v1758222795/Dhuska1-scaled_efhpex.jpg", "https://res.cloudinary.com/doh9wcybz/image/upload/v1758222793/d21dajqo_dhuska_625x300_10_May_23_lwvgbz.webp"],
      bestTimeToVisit: "All year",
      category: ["Cuisine-Traditional-Food"],
      popularFor: ["Street Food", "Breakfast", "Traditional Taste"]
    },
    {
      name: "Chilka Roti",
      aboutThePlace: "Chilka Roti is a traditional dish from Jharkhand made from rice flour and lentils. It is soft, delicious, and often served with vegetable or meat curry.",
      history: "Chilka Roti has been a part of Jharkhand's culinary tradition for generations. It is especially popular among the tribal communities and is often prepared during festivals and special occasions. The dish is known for its unique texture and flavor, making it a favorite among locals and visitors alike.",
      visitingHours: "6 AM to 10 PM",
      location: "Jharkhand",
      images: ["https://res.cloudinary.com/doh9wcybz/image/upload/v1758222910/4_chilka_roti_1742405254_p7mdmf.jpg", "https://res.cloudinary.com/doh9wcybz/image/upload/v1758222913/Chilka_Roti_Recipe_Jharkhand_Style_Rice_and_Lentil_Roti_kia4ml.jpg"],
      bestTimeToVisit: "All year",
      category: ["Cuisine-Traditional-Food"],
      popularFor: ["Traditional Dish", "Dinner", "Local Cuisine"]
    },
    // {
    //   name: "Rugra",
    //   description: "An exotic mushroom-like edible flower available only during the monsoon season in Jharkhand. Considered a delicacy.",
    //   location: "Jharkhand",
    //   image: [""],
    //   bestTimeToVisit: "July – September",
    //   category: "Cuisine & Traditional Food",
    //   popularFor: ["Delicacy", "Seasonal Food", "Traditional Taste"]
    // },
    // {
    //   name: "Handia",
    //   description: "A traditional rice beer made using herbal fermentation. Popular among tribal communities during festivals and celebrations.",
    //   location: "Jharkhand",
    //   image: "https://example.com/handia.jpg",
    //   bestTimeToVisit: "Festive Seasons",
    //   category: "Cuisine & Traditional Food",
    //   popularFor: ["Traditional Drink", "Festivals", "Culture"]
    // },
    {
      name: "Tilkut",
      aboutThePlace: "Tilkut is a traditional sweet from the Indian state of Jharkhand, made primarily from sesame seeds and jaggery. It is especially popular during the festival of Makar Sankranti.",
      history: "The tradition of making Tilkut dates back several centuries and is deeply rooted in the cultural practices of Jharkhand. It is believed that consuming Tilkut during Makar Sankranti brings prosperity and good health. The sweet is often prepared in households as well as by local sweet shops, showcasing the culinary heritage of the region.",
      visitingHours: "7am–12.30pm and 5–9pm",
      location: "Gaya & Jharkhand",
      images: ["https://res.cloudinary.com/doh9wcybz/image/upload/v1758223456/images_qjum4p.jpg", "https://res.cloudinary.com/doh9wcybz/image/upload/v1758223453/images_1_pbrpt2.jpg"],
      bestTimeToVisit: "January",
      category: ["Cuisine-Traditional-Food"],
      popularFor: ["Sweet Dish", "Festivals", "Winter Snack"]
    }
  ];



  try {
    // Optional: Clear the existing places first
    await Place.deleteMany({});

    // Bulk insert all places
    const inserted = await Place.insertMany(placeData);
    res.status(201).json({ message: "Data inserted successfully", data: inserted });
  } catch (error) {
    res.status(500).json({ message: "Error inserting data", error });
  }
});

app.get("/meet", async (req, res) => {
  try {
    // Optional: Clear the existing places first
    await Place.deleteMany({});
    res.send("done");
  } catch (error) {
    res.status(500).json({ message: "Error fetching places", error });
  }
});

// Add categories data   

app.get("/api/addData", async (req, res) => {
  let categoryData = [
    {
      categoryName: "Waterfalls & Scenic Spots",
      description: "Jharkhand is renowned for its breathtaking waterfalls that cascade down lush green landscapes. Famous spots such as Hundru Falls, Dassam Falls, and Jonha Falls attract nature lovers and photographers from all over India. These waterfalls not only provide scenic beauty but also create refreshing picnic spots and adventure trekking trails, making them a must-visit for tourists exploring the natural charm of Jharkhand.",
    },
    {
      categoryName: "Temples & Religious Places",
      description: "Jharkhand holds immense spiritual significance with its ancient temples and holy shrines. The most notable is the Baidyanath Dham in Deoghar, one of the twelve Jyotirlingas, which attracts millions of pilgrims every year. Other important sites include Jagannath Temple in Ranchi and the Maluti Temple complex near Dumka. These temples reflect the region’s deep cultural roots, spiritual traditions, and stunning architectural beauty.",
    },
    {
      categoryName: "Wildlife & National Parks",
      description: "For wildlife lovers, Jharkhand offers some of the best natural habitats in India. The famous Betla National Park, part of the Palamu Tiger Reserve, is home to elephants, tigers, and a wide variety of flora and fauna. Dalma Wildlife Sanctuary near Jamshedpur is known for elephants and bird species, while Hazaribagh Wildlife Sanctuary offers serene forest experiences. Jharkhand’s wildlife destinations are perfect for eco-tourism, safaris, and photography.",
    },
    {
      categoryName: "Caves & Rock Formations",
      description: "Jharkhand is dotted with natural caves and fascinating rock formations that showcase both geological wonder and historical value. Sites like Khandoli Hills and other lesser-known caves offer thrilling exploration opportunities. Some caves also contain ancient carvings and tribal art, giving visitors a glimpse into Jharkhand’s prehistoric past and unique cultural traditions.",
    },
    {
      categoryName: "Hills & Mountain Ranges",
      description: "The hills of Jharkhand are among the most beautiful in eastern India. Netarhat, known as the Queen of Chotanagpur, is famous for its stunning sunrise and sunset views. Parasnath Hills, the highest peak in Jharkhand, is an important pilgrimage site for Jains. Rajmahal Hills carry historical significance with their connection to the Mughal era. These hill regions provide trekking, adventure, and peaceful retreats amidst untouched nature.",
    },
    {
      categoryName: "Lakes & Dams",
      description: "Jharkhand is blessed with numerous lakes and reservoirs that serve as popular tourist destinations. Ranchi Lake, located in the heart of the capital city, is a favorite for boating and leisure walks. Dimna Lake near Jamshedpur and Patratu Lake surrounded by hills are famous for their scenic beauty. Large dams like Getalsud Dam also attract visitors, making these water bodies perfect for family outings, picnics, and relaxation.",
    },
    {
      categoryName: "Heritage & Historical Sites",
      description: "Jharkhand’s cultural heritage is deeply rooted in its tribal traditions, ancient forts, and historical sites. Places like Palamu Fort, Navratangarh Fort, and tribal museums reflect the region’s glorious past. Heritage tourism here allows visitors to explore centuries-old structures, folk traditions, and local art forms. Jharkhand stands as a melting pot of history and culture, preserving its unique identity within India.",
    },
    {
      categoryName: "Adventure & Outdoor Activities",
      description: "For thrill-seekers, Jharkhand is a hub of adventure tourism. From trekking in Netarhat and Parasnath Hills to rock climbing at Khandoli and boating in Dimna Lake, the state offers endless outdoor excitement. Patratu Valley is perfect for road trips and camping, while forests and waterfalls provide opportunities for jungle trails and photography. Adventure tourism in Jharkhand blends natural beauty with adrenaline-pumping experiences.",
    },
    {
      categoryName: "Festivals & Cultural Events",
      description:
        "Jharkhand is a land of vibrant festivals that celebrate tribal traditions, local deities, and community life. Famous festivals include Sarhul, which marks the beginning of spring and is celebrated with dance, music, and rituals by the tribal communities. Karma festival is another significant event where people worship the sacred Karma tree and perform traditional dances. Sohrai, Tusu, and Manda festivals are equally popular, reflecting the state’s deep cultural diversity and unity in celebration.",
    },
    {
      categoryName: "Cuisine & Local Food",
      description:
        "Jharkhand’s cuisine is simple yet rich in flavor, reflecting its tribal roots and natural produce. Popular dishes include Dhuska (fried rice-lentil pancakes), Chilka Roti, Rugra (a type of mushroom), and Handia (a traditional rice beer). The state is also known for Thekua, a sweet dish often prepared during festivals. Jharkhand’s local food culture highlights a balance of taste, tradition, and community dining, making it an authentic experience for visitors.",
    },
  ];



  try {
    // Optional: Clear the existing categories first
    await Category.deleteMany({});

    // Bulk insert all categories
    await Category.insertMany(categoryData);

    res.json({ message: "Categories added successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

});

// get all places related to category
app.get("/api/category/:category", async (req, res) => {
  const { category } = req.params;

  try {
    const places = await Place.find({ category });
    res.json(places);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// perticular place details
app.get("/api/places/:id", async (req, res) => {

  const { id } = req.params;

  try {
    const place = await Place.findById(id);
    if (!place) {
      return res.status(404).json({ error: "Place not found" });
    }

    res.json(place);
  } catch (error) {
    console.error("❌ Error fetching place details:", error);
    res.status(500).json({ error: "Internal server error" });
  }

});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});