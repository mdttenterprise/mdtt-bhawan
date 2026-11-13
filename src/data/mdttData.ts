export interface FacilityItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
}

export interface RoomItem {
  id: string;
  type: "Single Occupancy" | "Double Occupancy";
  title: string;
  occupancy: string;
  areaPlaceholder: string;
  pricePlaceholder: string;
  billingCycle: string;
  description: string;
  image: string;
  amenities: string[];
}

export interface MenuItem {
  id: string;
  name: string;
  category: "Breakfast" | "Lunch & Thali" | "Snacks & Beverages" | "Dinner";
  pricePlaceholder: string;
  description: string;
  isVeg: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category:
    | "Building"
    | "Library"
    | "Single Rooms"
    | "Double Rooms"
    | "Canteen"
    | "Common Areas";
  image: string;
  caption: string;
}

// export const SITE_INFO = {
//   name: "MDTT Bhawan",
//   tagline: "Learn, Live & Experience Comfort Under One Roof.",
//   phonePlaceholder: "+91 9721712640",
//   whatsappNumberPlaceholder: "9721712640",
//   emailPlaceholder: "libmddt@gmail.com",
//   addressPlaceholder: "110 - MDTT Bhawan, Rani Vihar Colony, Uttardhauna, Tiwariganj, Chinhat, Lucknow, Uttar Pradesh – 226028, India.",
//   visitingHoursPlaceholder: "Monday – Sunday: 08:00 AM – 08:00 PM",
// };
export const SITE_INFO = {
  name: "MDTT Bhawan",
  tagline: "Learn, Live & Experience Comfort Under One Roof.",
  phoneNumbers: [
    { label: "Reception / General Enquiry", number: "+91 9721712640" },
    { label: "Room & Hostel Booking", number: "+91 77100 24920" },
    { label: "Library ", number: "+91 96935 36008" },
        { label: "Canteen Desk", number: "+91 7032182405" },

  ],
  whatsappNumberPlaceholder: "+91 9721712640",
    phonePlaceholder: "+91 9721712640",
  emailPlaceholder: "libmddt@gmail.com",
  addressPlaceholder: "110 - MDTT Bhawan, Rani Vihar Colony, Uttardhauna, Tiwariganj, Chinhat, Lucknow, Uttar Pradesh – 226028, India.",
  visitingHoursPlaceholder: "Monday – Sunday: 08:00 AM – 10:00 PM",
};


export const FACILITIES: FacilityItem[] = [
  {
    id: "library",
    slug: "/library",
    title: "Quiet Study Library",
    tagline: "Dedicated Reading & Exam Preparation Zone",
    description:
      "A calm, acoustically buffered reading environment engineered for deep concentration, uninterrupted study sessions, and academic excellence.",
    image:
      "/images/library.jpeg",
    features: [
      "Ergonomic seating & individual study desks",
      "Glare-free LED task lighting",
         "High-Speed Free Wi-Fi", 
  "24/7 Purified RO Drinking Water", 
      "Pin-drop silence & disciplined ambience",
      "Power outlets at study stations",
    ],
  },
  {
    id: "single-rooms",
    slug: "/rooms",
    title: "Single Occupancy Rooms",
    tagline: "Private & Focused Personal Living",
    description:
      "Thoughtfully furnished private rooms crafted for residents who prefer complete privacy, quiet rest, and a dedicated in-room study corner.",
    image:
      "images/single.jpeg",
    features: [
      "Single wooden bed with comfortable mattress",
      "Dedicated study table & ergonomic chair",
         "High-Speed Free Wi-Fi", 
  "24/7 Purified RO Drinking Water", 
      "Spacious lockable wardrobe & storage",
      "Natural cross-ventilation & bright lighting",
    ],
  },
  {
    id: "double-rooms",
    slug: "/rooms",
    title: "Double Occupancy Rooms",
    tagline: "Balanced Twin-Sharing Comfort",
    description:
      "Well-proportioned twin-sharing rooms offering individual beds, separate study spaces, and organized personal storage for two residents.",
    image:
      "images/building2.jpeg",
    features: [
      "Two separate beds with ample walking space",
      "Dual study desks & chairs",
         "High-Speed Free Wi-Fi", 
  "24/7 Purified RO Drinking Water", 
      "Individual lockable cupboards",
      "Large windows for daylight & airflow",
    ],
  },
  {
    id: "canteen",
    slug: "/canteen",
    title: "Hygienic Dining & Canteen",
    tagline: "Fresh Meals & Refreshments Daily",
    description:
      "A clean, welcoming in-house dining hall serving wholesome homestyle meals, snacks, and hot beverages prepared under strict hygiene protocols.",
    image:
      "images/mixturecanteen.jpeg",
    features: [
      "Freshly prepared daily meals & tea",
      "Sanitized kitchen & RO drinking water",
      "Spacious, well-lit seating area",
         "High-Speed Free Wi-Fi", 
  "24/7 Purified RO Drinking Water", 
      "Quick service between study schedules",
    ],
  },
];

export const ROOMS_DATA: RoomItem[] = [
  {
    id: "single-deluxe",
    type: "Single Occupancy",
    title: "Single Occupancy Room",
    occupancy: "1 Resident (Private)",
    areaPlaceholder: "Approx. XXX Sq. Ft.",
    pricePlaceholder: "₹3200",
    billingCycle: "/ month (Placeholder Tariff)",
    description:
      "Ideal for students and professionals seeking uninterrupted privacy. Includes a comfortable single bed, private study desk, lockable wardrobe, and ample ventilation.",
    image:
      "images/single.jpeg",
    amenities: [
      "Private Single Occupancy",
      "Comfortable Bed & Mattress",
      "High-Speed Free Wi-Fi", 
  "24/7 Purified RO Drinking Water", 
      "Dedicated Study Table & Chair",
      "Lockable Wardrobe & Overhead Storage",
      "Warm & Task Room Lighting",
      "Large Window for Cross-Ventilation",
    ],
  },
  {
    id: "double-executive",
    type: "Double Occupancy",
    title: "Double Occupancy Room",
    occupancy: "2 Residents (Twin Sharing)",
    areaPlaceholder: "Approx. XXX Sq. Ft.",
    pricePlaceholder: "₹4800",
    billingCycle: "/ month per person (Placeholder Tariff)",
    description:
      "Designed for two residents with clearly demarcated personal zones. Features two comfortable beds, two separate study stations, and individual storage units.",
    image:
      "images/building2.jpeg",
    amenities: [
      "Comfortable Twin Sharing (2 Beds)",
      "Separate Study Tables & Chairs",
      "High-Speed Free Wi-Fi", 
  "24/7 Purified RO Drinking Water", 
      "Individual Lockable Storage Wardrobes",
      "Balanced Ambient & Study Lighting",
      "Well-Ventilated Exterior Windows",
      "Daily Common Corridor Housekeeping",
    ],
  },
];

export const CANTEEN_MENU: MenuItem[] = [
  {
    id: "m1",
    name: "Poha & Masala Chai Combo",
    category: "Breakfast",
    pricePlaceholder: "₹XX",
    description: "Light flattened rice tempered with curry leaves, peanuts, and fresh ginger tea.",
    isVeg: true,
  },
  {
    id: "m2",
    name: "Stuffed Aloo Paratha with Curd",
    category: "Breakfast",
    pricePlaceholder: "₹XX",
    description: "Two whole-wheat stuffed flatbreads served with fresh curd and pickle.",
    isVeg: true,
  },
  {
    id: "m3",
    name: "Standard Homestyle Veg Thali",
    category: "Lunch & Thali",
    pricePlaceholder: "₹XXX",
    description: "Seasonal sabzi, dal tadka, steamed rice, 4 chapatis, salad, and papad.",
    isVeg: true,
  },
  {
    id: "m4",
    name: "Rajma Chawal Bowl",
    category: "Lunch & Thali",
    pricePlaceholder: "₹XX",
    description: "Slow-cooked kidney beans in aromatic gravy served over steamed basmati rice.",
    isVeg: true,
  },
  {
    id: "m5",
    name: "Veg Grilled Sandwich",
    category: "Snacks & Beverages",
    pricePlaceholder: "₹XX",
    description: "Toasted multi-grain bread layered with fresh vegetables and mint chutney.",
    isVeg: true,
  },
  {
    id: "m6",
    name: "Ginger Cardamom Tea / Filter Coffee",
    category: "Snacks & Beverages",
    pricePlaceholder: "₹XX",
    description: "Freshly brewed hot beverages to refresh you during study breaks.",
    isVeg: true,
  },
  {
    id: "m7",
    name: "Paneer Curry & Phulka Meal",
    category: "Dinner",
    pricePlaceholder: "₹XXX",
    description: "Cottage cheese curry served with 4 soft phulkas, dal, and jeera rice.",
    isVeg: true,
  },
  {
    id: "m8",
    name: "Khichdi & Kadhi Comfort Plate",
    category: "Dinner",
    pricePlaceholder: "₹XX",
    description: "Light, easy-to-digest moong dal khichdi paired with spiced yogurt kadhi.",
    isVeg: true,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "MDTT Bhawan Exterior Facade",
    category: "Building",
    image:
      "images/parking.png",
    caption: "Modern architectural exterior designed for durability, safety, and natural light.",
  },
  {
    id: "g2",
    title: "Main Silent Reading Hall",
    category: "Library",
    image:
      "images/library.jpeg",
    caption: "Quiet, distraction-free study desks with ergonomic chairs and focused lighting.",
  },
  {
    id: "g3",
    title: "Single Occupancy Private Room",
    category: "Single Rooms",
    image:
      "images/single.jpeg",
    caption: "Private bedroom with dedicated study corner, wardrobe, and natural ventilation.",
  },
  {
    id: "g4",
    title: "Double Occupancy Twin Room",
    category: "Double Rooms",
    image:
      "images/double.jpeg",
    caption: "Spacious twin-sharing accommodation with separate beds and study stations.",
  },
  {
    id: "g5",
    title: "Hygienic Canteen Dining Hall",
    category: "Canteen",
    image:
      "images/dining.jpeg",
    caption: "Clean, sunlit dining space serving fresh homestyle meals and refreshments.",
  },
  {
    id: "g6",
    title: "Reception & Common Lounge",
    category: "Common Areas",
    image:
      "images/building.png",
    caption: "Well-maintained lobby and common lounge area for residents and visitors.",
  },
  {
    id: "g7",
    title: "Evening Study Zone",
    category: "Library",
    image:
      "images/library2.jpeg",
    caption: "Warm, eye-friendly ambient illumination for extended evening study sessions.",
  },
  {
    id: "g8",
    title: "Fresh Meal Preparation",
    category: "Canteen",
    image:
      "images/mixturecanteen.jpeg",
    caption: "Wholesome, balanced meals prepared fresh every day.",
  },
];