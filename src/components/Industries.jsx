import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  Users,
  Car,
  GraduationCap,
  Utensils,
  Landmark,
  Building2,
  HeartPulse,
  Factory,
  Network,
  Laptop,
  Warehouse,
  Home,
  Store,
  X,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* 🔥 FINAL DATA (PDF BASED) */
const clientData = {
  "All Clients": {
    "🏫 Schools": [
      "Holy Child School - Tagore Garden, New Delhi - Mr. Deepak Ahalawat",
      "St. Thomas School - Dwarka Sec-19, New Delhi - Mr. Jagdish Sharma",
      "Rana Motors - Udyog Vihar Near Jhangirpuri - Mr. Rahul (G.M.)",
      "St. Xaviers School - Gurugram - Mr. Nitin Goel",
      "Maxfort School - Pitampura, New Delhi - Mr. Gurpreet Singh",
      "Kerala School - Tilak Nagar - Mr. Rajiv",
      "Genie's World - Pitampura, New Delhi - Mr. Sumit Duggal",
      "N.K.B.P. - Sec-4, Dwarka - Mr. Abhishek",
      "Delhi International School - Rohini, New Delhi - Mr. Rohit",
      "Laurel High School - Pitampura, New Delhi - Mr. Hariom Mahajan",
      "R.K. International School - Safiabad Road, Narela - Mrs. Sunita Sharma",
      "Manvi Public School - C-7, Sec-7, Rohini - Mr. Abhimanyu",
      "SD Public School - BU Block, Pitampura - Mr. Mangla",
    ],

    "🎓 College": ["SWAMI SHARDHANAND COLLEGE - Alipur, Delhi - Mr. Bhardwaj"],

    "💎 Jewellers": [
      "ZEVER GROUP - NSP Pitampura - Mr. Ghansham Gupta",
      "R.K. BABBAR JEWELLERS - Karol Bagh - Mr. Rajesh Babbar",
      "BABBAR JEWELLERS - Kirti Nagar - Mr. Vaibhav Babbar",
      "J.K. JEWELLERS - Kamla Nagar - Mr. J.K. Mittal",
    ],

    "🛍 Retail & Showrooms": [
      "Vishal Retail Ltd - Pitampura/Kapasheda - Mr. Ganesh Chaturvedi",
      "Reliance Fresh Warehouse - Gurgaon - Mr. Rangnathan",
      "Reebok - Kamla Nagar - Mr. Manish",
      "H-2 Reshma & Bharat - Pitampura - Mr. Raj",
      "Gupta Creations - Sec-8 Rohini/Pitampura - Mrs. Reena Gupta",
      "Brand Factory - Kaushambi (U.P.) - Mr. Ramesh",
      "Orane International - Kohat Enclave, Pitampura - Sushma Mam",
      "VLCC - Kohat Enclave, Pitampura - Laxmi Mam",
      "Kriti DS - Pitampura - Data Not Available",
      "Sakshi & Urvashi - Pitampura - Data Not Available",
    ],

    "🍽 Restaurants / Banquets": [
      "Tivoli Garden Banquets - Kundli - Mr. Balbir Singh (G.M.)",
      "Bercos Restaurant - Pitampura - Mr. Gaurav",
      "Gulab Restaurant - Pitampura - Mr. Satish Ji",
      "Invitation Banquets - Kirti Nagar - Mr. Mohit Kakkar",
      "Dawaat Restaurant - Kaushambi - Mr. Balvinder Singh",
      "Hotel Plazoo Inn - Janak Puri - Mr. Ganesh Rawat",
    ],

    "🏢 Societies": [
      "Mianwali Nagar - Peeragarhi - Mr. Hemant Gera",
      "SFS - Ashok Vihar - Mr. Sanjay Aggarwal",
      "Tarun Enclave Welfare - Pitampura - Mr. Baldevraj Kwatra",
      "White Lilly (Parker Group) - Sonipat - Mr. Manish Garg",
      "TDI Kingsbury - Kundli Block - Mr. Beniwal",
      "CP Block Welfare Association - Pitampura - Mr. Kamal",
      "Tarun Enclave - Pushpanjali Enclave - Mr. Baldev Raj Kwatra",
      "Gujarat Apartments - Pitampura - Mr. Ketan Popat",
      "Saraswati Kunj Society - Gurgaon - Mr. Sunil Rajput",
      "Ardee City - Gurgaon - Mr. Sudhanshu",
      "MRG World - Gurgaon - Mr. Rajat Goel",
    ],

    "🏭 Industries": [
      "Perfect Gear Industries - Anand Parbat - Mr. Kamal Rajput",
      "Chauhan Engineers - Bawana Industrial Area - Mr. Sachin Chauhan",
      "ARB Bearings - Kundli - Mr. Kulwinder Singh",
      "Rana Engineering Corp - Udyog Vihar - Mr. Rahul Kayat",
      "Vishwakarma Hydraulic Work - Data Not Available",
      "Vishwakarma Hydraulic Machine India - Data Not Available",
      "Supreme Transport Solutions (P) Ltd - Bakoli & Mundka - Mr. Harish Aggarwal",
      "V.S. Impex - Shalimar Bagh - Mr. Varinder Singh",
      "TDI Group - Kundli, Haryana - Mr. Gaurav Kaila",
      "Parker Group and Residency - Kundli, Haryana - Mr. Manish Garg",
      "Rana Motors Pvt Ltd - Udyog Vihar Industrial Area - Mr. Rahul Kayat",
      "Pranav India Pvt Ltd - Lawrence Road Industrial Area - Mr. Gaurav",
      "Jainco Buildcon Pvt Ltd - Shalimar Bagh, New Delhi - Mr. Yatin Jain",
      "Omega Elevators - CPWD Project - Mr. Manoj",
      "Supreme Transport Solutions Pvt Ltd - Bakoli - Mr. Harish Aggarwal",
      "PMI - Daruhera - Mr. Shashi Bhanu Tiwari",
      "Delhi Metro Rail Corporation (DMRC) - Delhi - Mr. Shashi Bhanu Tiwari",
      "Delhi Gujarati Samaj (Civil Lines) - Raj Niwas, Delhi - Mr. Dilip Shah",
      "Khatu Shyam Mandir - GT Karnal Road - Mr. Ghansham Gupta",
      "Delhi Jal Board - Burari, New Delhi - Mr. Arvind Kumar",
      "Osaka International - Rohini East Metro - Mr. Dheeraj",
      "Ikove Bearings & Belts Pvt Ltd - Big V Plaza Road, Pitampura - Mrs. Bhawana",
      "Tex Source - 360 Tarun Enclave, Pitampura - Data Not Available",
    ],

    "🏥 Hospitals": [
      "Kalra Hospital - Kirti Nagar",
      "Paras Hospital - Gurgaon",
      "Brahmshakti Hospital",
      "Motwani Dental Clinic",
      "Neo Nest Hospital",
    ],
  },

  "Auto Sector": [
    "Supreme Transport Solutions Pvt Ltd - Bakoli - Mr. Harish Aggarwal",
    "Rana Motors Pvt Ltd - Udyog Vihar Industrial Area - Mr. Rahul Kayat",
  ],

  "Education Institutional": [
    "HOLY CHILD SCHOOL - Tagore Garden, New Delhi - Mr. Deepak Ahalawat",
    "ST. THOMAS SCHOOL - Dwarka Sec-19, New Delhi - Mr. Jagdish Sharma",
    "ST. XAVIERS SCHOOL - Gurugram - Mr. Nitin Goel",
    "MAXFORT SCHOOL - Pitampura, New Delhi - Mr. Gurpreet Singh",
    "KERALA SCHOOL - Tilak Nagar - Mr. Rajiv",
    "GENIE'S WORLD - Pitampura - Mr. Sumit Duggal",
    "N.K.B.P. - Sec-4 Dwarka - Mr. Abhishek",
    "DELHI INTERNATIONAL SCHOOL - Rohini - Mr. Rohit",
    "LAUREL HIGH SCHOOL - Pitampura - Mr. Hariom Mahajan",
    "R.K. INTERNATIONAL SCHOOL - Narela - Mrs. Sunita Sharma",
    "MANVI PUBLIC SCHOOL - Rohini - Mr. Abhimanyu",
    "SD PUBLIC SCHOOL - Pitampura - Mr. Mangla",
    "SWAMI SHARDHANAND COLLEGE - Alipur, Delhi - Mr. Bhardwaj",
  ],

  "Food & Beverage Sector": [
    "Bercos Restaurant - Pitampura - Mr. Gaurav",
    "Gulab Restaurant - Pitampura - Mr. Satish",
    "Dawaat Restaurant - Kaushambi - Mr. Balvinder Singh",
  ],

  "Banking & Finance": ["Data Coming Soon"],

  "Govt Sector": [
    "Delhi Metro Rail Corporation",
    "Delhi Jal Board - Burari",
    "Delhi Gujarati Samaj (Civil Lines) - Raj Niwas, Delhi - Mr. Dilip Shah",
  ],

  "Health Care": [
    "Kalra Hospital - Kirti Nagar - Dr. Bhasin",
    "Paras Hospital - Gurgaon - Pooja Admin",
    "Brahmshakti Hospital - Kanjhawala Road - Dr. Nikhil Bhatnagar",
    "Motwani Dental Clinic - Shakur Pur New Delhi - Dr. Hitesh Motawani",
    "Motwani Clinic - Shakur Bast New Delhi - Dr. Hitesh Motwani",
    "Dr.Mallick Dental Care - Pitampura - Dr. Rajnish Mallik",
    "Neo Nest Hospital - Prashant Vihar - Dr. Sanjay Sarosha",
  ],

  "Industrial Security Services": [
    "Perfect Gear Industries - Anand Parbat - Mr. Kamal Rajput",
    "ARB Bearings - Kundli - Mr. Kulwinder Singh",
    "Vishwakarma Hydraulic Work - Data Not Available",
    "Vishwakarma Hydraulic Machine India - Data Not Available",
    "V.S. Impex - Shalimar Bagh - Mr. Varinder Singh",
    "TDI Group - Kundli, Haryana - Mr. Gaurav Kaila",
    "Parker Group and Residency - Kundli, Haryana - Mr. Manish Garg",
    "Pranav India Pvt Ltd - Lawrence Road Industrial Area - Mr. Gaurav",
    "Jainco Buildcon Pvt Ltd - Shalimar Bagh, New Delhi - Mr. Yatin Jain",
    "Omega Elevators - CPWD Project - Mr. Manoj",
    "PMI - Daruhera - Mr. Shashi Bhanu Tiwari",
    "Khatu Shyam Mandir - GT Karnal Road - Mr. Ghansham Gupta",
    "Osaka International - Rohini East Metro - Mr. Dheeraj",
    "Ikove Bearings & Belts Pvt Ltd - Big V Plaza Road, Pitampura - Mrs. Bhawana",
    "Tex Source - 360 Tarun Enclave, Pitampura - Data Not Available",
  ],

  Infrastructure: ["Data Coming Soon"],

  "IT Sector": [
    "Chauhan Engineers - Bawana Industrial Area - Mr. Sachin Chauhan",
    "Rana Engineering Corp - Udyog Vihar - Mr. Rahul Kayat",
  ],

  "Warehouse & Logistics Security": [
    "RELIANCE FRESH WAREHOUSE - Gurgaon - Mr. Rangnathan",
  ],

  "NGO Sector": ["Tarun Enclave - Pitampura - Mr. Baldevraj"],

  "Residential Security Services": [
    "Mianwali Nagar - Peeragarhi - Mr. Hemant",
    "SFS - Ashok Vihar - Mr. Sanjay",
    "Ardee City - Gurgaon - Mr. Sudhanshu",
    "Saraswati Kunj - Gurgaon - Mr. Sunil",
    "Ardee City - Gurgaon - Mr. Sudhabshu",
    "MRG World - Gurgaon - Mr.Rajat Goel",
  ],

  "Retail Security Services": [
    "VISHAL RETAIL LTD - Pitampura/Kapasheda - Mr. Ganesh",
    "REEBOK - Kamla Nagar - Mr. Manish",
    "Brand Factory - Kaushambi - Mr. Ramesh",
    "Orane International - Kohat Enclave - Sushma Mam",
    "VLCC - Kohat Enclave - Laxmi Mam",
  ],
};

/* UI SAME */
const industries = [
  {
    name: "All Clients",
    icon: <Users size={32} />,
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600",
  },
  {
    name: "Auto Sector",
    icon: <Car size={32} />,
    img: "https://images.unsplash.com/photo-1616877404877-b62fa0846edd?q=80&w=928",
  },
  {
    name: "Education Institutional",
    icon: <GraduationCap size={32} />,
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=600",
  },
  {
    name: "Food & Beverage Sector",
    icon: <Utensils size={32} />,
    img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=600",
  },
  {
    name: "Banking & Finance",
    icon: <Landmark size={32} />,
    img: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=600",
  },
  {
    name: "Govt Sector",
    icon: <Building2 size={32} />,
    img: "https://images.unsplash.com/photo-1618656172765-26774a4a38d2?w=1000",
  },
  {
    name: "Health Care",
    icon: <HeartPulse size={32} />,
    img: "https://images.unsplash.com/photo-1708413226312-2c28dfbb346f?w=1000",
  },
  {
    name: "Industrial Security Services",
    icon: <Factory size={32} />,
    img: "https://images.unsplash.com/photo-1773580995586-b0195c43386c?w=1000",
  },
  {
    name: "Infrastructure",
    icon: <Network size={32} />,
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600",
  },
  {
    name: "IT Sector",
    icon: <Laptop size={32} />,
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600",
  },
  {
    name: "Warehouse & Logistics Security",
    icon: <Warehouse size={32} />,
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600",
  },
  {
    name: "NGO Sector",
    icon: <Users size={32} />,
    img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=600",
  },
  {
    name: "Residential Security Services",
    icon: <Home size={32} />,
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600",
  },
  {
    name: "Retail Security Services",
    icon: <Store size={32} />,
    img: "https://plus.unsplash.com/premium_photo-1682125948844-e2dc8996b0f0?w=1000",
  },
];

const Industries = () => {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(null);

  useEffect(() => {
    gsap.fromTo(
      ".industry-card",
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      },
    );
  }, []);

  return (
    <>
      <section ref={sectionRef} className="py-24 bg-[#02050A]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-white font-bold">
              Tailored Security For Every Clients
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <div
                key={i}
                onClick={() => setActive(ind.name)}
                className="industry-card group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
              >
                <img src={ind.img} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="absolute bottom-6 left-6 right-6 flex justify-between">
                  <h3 className="text-white text-xl font-bold">{ind.name}</h3>
                  {ind.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {active && (
        <div className="fixed inset-0 bg-black/80 z-[99999] flex items-center justify-center p-4">
          <div className="bg-white max-w-2xl w-full rounded-xl p-6 relative overflow-y-auto max-h-[80vh]">
            <button
              onClick={() => setActive(null)}
              className="absolute top-3 right-3 p-2 bg-black text-white rounded-full z-50"
            >
              <X size={20} />
            </button>

            <h2 className="text-2xl font-bold mb-4">{active}</h2>

            {typeof clientData[active] === "object" &&
            !Array.isArray(clientData[active]) ? (
              Object.entries(clientData[active]).map(([heading, items], i) => (
                <div key={i} className="mb-4">
                  <h3 className="font-bold text-black mb-2">{heading}</h3>
                  <ul className="space-y-2 text-gray-700">
                    {items.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <ul className="space-y-2 text-gray-700">
                {clientData[active].map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Industries;
