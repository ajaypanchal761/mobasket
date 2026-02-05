import React, { useState } from 'react';
import {
  Search,
  Mic,
  ChevronDown,
  User,
  ShoppingBag,
  Home,
  LayoutGrid,
  X,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// --- ASSETS IMPORTS ---
// Best Seller / Grocery
import imgCoriander from '@/assets/bestseller/coriandar-removebg-preview.png';
import imgAtta from '@/assets/bestseller/aata-removebg-preview.png';
import imgOil1 from '@/assets/bestseller/oil-removebg-preview.png';
import imgMilk from '@/assets/bestseller/milk-removebg-preview.png';
import imgBakery from '@/assets/bestseller/bakery-removebg-preview.png';
import imgAalu from '@/assets/bestseller/aalu-removebg-preview.png';
import imgCurd from '@/assets/bestseller/curd-removebg-preview.png';
import imgOil2 from '@/assets/bestseller/oil2-removebg-preview.png';
import imgOnion from '@/assets/bestseller/onion-removebg-preview.png';
import imgCheese from '@/assets/bestseller/cheese-removebg-preview.png';
import imgButter from '@/assets/bestseller/butter-removebg-preview.png';
import imgBread from '@/assets/bestseller/bread-removebg-preview.png';

// Snacks & Drinks
import imgLaysBlue from '@/assets/bestseller/BlueLays-removebg-preview.png';
import imgIceCream from '@/assets/Beauty&PersonalCare/icecream-removebg-preview.png';
import imgCoke from '@/assets/ColdDrinks/cocacola-removebg-preview.png';
import imgSprite from '@/assets/ColdDrinks/sprite-removebg-preview.png';
import imgKurkure from '@/assets/bestseller/kurkure-removebg-preview.png';
import imgUncle from '@/assets/bestseller/uncleChips-removebg-preview.png';
import imgLaysGreen from '@/assets/bestseller/GreenLays-removebg-preview.png';
import imgLimca from '@/assets/ColdDrinks/limca-removebg-preview.png';
import imgSoda from '@/assets/ColdDrinks/soda-removebg-preview.png';

// Beauty & Personal Care
import imgBathBody from '@/assets/Beauty&PersonalCare/Bath_Body-removebg-preview.png';
import imgHair from '@/assets/Beauty&PersonalCare/Hair-removebg-preview.png';
import imgSkinFace from '@/assets/Beauty&PersonalCare/Skin_Face-removebg-preview.png';
import imgCosmetics from '@/assets/Beauty&PersonalCare/Beauty_Cosmetics-removebg-preview.png';
import imgHealth from '@/assets/Beauty&PersonalCare/Health_pharma-removebg-preview.png';

// Baby & Household
import imgBaby from '@/assets/bestseller/babycare-image-removebg-preview.png';


const CategoriesPage = () => {
  const navigate = useNavigate();
  const [showBottomOffer, setShowBottomOffer] = useState(true);

  // --- DATA SECTIONS ---
  const groceryKitchen = [
    { name: 'Vegetables & Fruits', image: imgCoriander },
    { name: 'Atta, Rice & Dal', image: imgAtta },
    { name: 'Oil, Ghee & Masala', image: imgOil1 },
    { name: 'Dairy, Bread & Eggs', image: imgMilk },
    { name: 'Bakery & Biscuits', image: imgBakery },
    { name: 'Dry Fruits & Cereals', image: imgAalu },
    { name: 'Chicken, Meat & Fish', image: imgCheese }, // Placeholder
    { name: 'Kitchenware & Appliances', image: imgOil2 },
  ];

  const snacksDrinks = [
    { name: 'Chips & Namkeen', image: imgLaysBlue },
    { name: 'Sweets & Chocolates', image: imgIceCream },
    { name: 'Cold Drinks & Juices', image: imgCoke },
    { name: 'Noodles & Pasta', image: imgUncle },
    { name: 'Ice Creams', image: imgIceCream },
    { name: 'Frozen Food', image: imgKurkure },
    { name: 'Tea & Coffee', image: imgSprite },
    { name: 'Health Drinks', image: imgLimca },
  ];

  const beautyPersonalCare = [
    { name: 'Bath & Body', image: imgBathBody },
    { name: 'Hair', image: imgHair },
    { name: 'Skin & Face', image: imgSkinFace },
    { name: 'Beauty & Cosmetics', image: imgCosmetics },
    { name: 'Health & Pharma', image: imgHealth },
    { name: 'Oral Care', image: imgBathBody }, // Placeholder
    { name: 'Feminine Hygiene', image: imgSkinFace }, // Placeholder
    { name: 'Sexual Wellness', image: imgHealth }, // Placeholder
  ];

  const babyHousehold = [
    { name: 'Baby Care', image: imgBaby },
    { name: 'Diapers & Wipes', image: imgBaby },
    { name: 'Cleaning Essentials', image: imgSoda },
    { name: 'Home & Office', image: imgOil2 },
  ]

  return (
    <div className="bg-white min-h-screen text-slate-800 pb-20 font-sans md:max-w-md md:mx-auto shadow-2xl overflow-hidden relative">

      {/* 1. Header Section */}
      <div className="sticky top-0 z-40 bg-white">
        <div className="bg-gradient-to-b from-[#fec007] to-[#fc9b03] pt-2 pb-5 px-4 rounded-b-[2rem] shadow-sm relative z-20 font-[Inter,sans-serif]">
          <div className="flex justify-between items-start mb-3">
            <div className="flex flex-col gap-0.5">
              <h1 className="text-[11px] uppercase font-black tracking-[0.2em] text-[#3e3212] leading-none ml-0.5">
                MoBasket in
              </h1>
              <div className="flex items-baseline gap-2 leading-none relative z-10">
                <span className="text-[1.8rem] font-[900] text-[#1a1a1a] tracking-tight -ml-0.5 drop-shadow-sm">
                  8 minutes
                </span>
              </div>
              <div className="flex items-center gap-2 -mt-1">
                <div className="flex items-center gap-0.5 text-[#1a1a1a] text-[0.9rem] font-bold tracking-tight">
                  <span className="line-clamp-1 max-w-[150px]">Vandana Nagar, Indore</span>
                  <ChevronDown size={18} className="text-[#1a1a1a] stroke-[3]" />
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-1.5">
              <button className="w-10 h-10 bg-[#283810] bg-opacity-95 rounded-full flex items-center justify-center shadow-sm border border-white/10 active:scale-95 transition-transform">
                <div className="text-[#a8d355] font-bold text-xl mt-0.5">₹</div>
              </button>
              <button className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center shadow-sm border border-white/10 active:scale-95 transition-transform">
                <User size={20} className="text-white fill-white" />
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mx-0.5 mb-1">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400 stroke-[2.5]" />
            </div>
            <input
              type="text"
              className="w-full bg-white text-slate-900 py-3 pl-12 pr-12 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] focus:outline-none placeholder:text-slate-400 font-semibold text-[1rem] tracking-tight"
              placeholder='Search "milk"'
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 border-l pl-4 border-gray-100 py-2.5 my-1.5">
              <Mic className="h-5 w-5 text-slate-400 stroke-[2.5]" />
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 pt-6 pb-24">

        {/* Grocery & Kitchen Grid */}
        <div className="mb-8">
          <h2 className="text-lg font-black text-slate-900 mb-4 px-1">Grocery & Kitchen</h2>
          <div className="grid grid-cols-4 gap-2">
            {groceryKitchen.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 cursor-pointer active:scale-95 transition-transform">
                <div className="w-full aspect-square bg-sky-50 rounded-2xl flex items-center justify-center p-2 shadow-sm border border-sky-100 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain drop-shadow-sm mix-blend-multiply" />
                </div>
                <div className="h-8 flex items-start justify-center w-full">
                  <span className="text-[10px] font-bold text-center text-slate-700 leading-tight px-0.5 line-clamp-2">{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Snacks & Drinks Grid */}
        <div className="mb-8">
          <h2 className="text-lg font-black text-slate-900 mb-4 px-1">Snacks & Drinks</h2>
          <div className="grid grid-cols-4 gap-2">
            {snacksDrinks.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 cursor-pointer active:scale-95 transition-transform">
                <div className="w-full aspect-square bg-sky-50 rounded-2xl flex items-center justify-center p-2 shadow-sm border border-sky-100 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain drop-shadow-sm mix-blend-multiply" />
                </div>
                <div className="h-8 flex items-start justify-center w-full">
                  <span className="text-[10px] font-bold text-center text-slate-700 leading-tight px-0.5 line-clamp-2">{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Beauty & Personal Care Grid */}
        <div className="mb-8">
          <h2 className="text-lg font-black text-slate-900 mb-4 px-1">Beauty & Personal Care</h2>
          <div className="grid grid-cols-4 gap-2">
            {beautyPersonalCare.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 cursor-pointer active:scale-95 transition-transform">
                <div className="w-full aspect-square bg-sky-50 rounded-2xl flex items-center justify-center p-2 shadow-sm border border-sky-100 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain drop-shadow-sm mix-blend-multiply" />
                </div>
                <div className="h-8 flex items-start justify-center w-full">
                  <span className="text-[10px] font-bold text-center text-slate-700 leading-tight px-0.5 line-clamp-2">{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Baby & Household Grid (New) */}
        <div className="mb-8">
          <h2 className="text-lg font-black text-slate-900 mb-4 px-1">Household & Baby</h2>
          <div className="grid grid-cols-4 gap-2">
            {babyHousehold.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 cursor-pointer active:scale-95 transition-transform">
                <div className="w-full aspect-square bg-sky-50 rounded-2xl flex items-center justify-center p-2 shadow-sm border border-sky-100 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain drop-shadow-sm mix-blend-multiply" />
                </div>
                <div className="h-8 flex items-start justify-center w-full">
                  <span className="text-[10px] font-bold text-center text-slate-700 leading-tight px-0.5 line-clamp-2">{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Offer Strip */}
      {showBottomOffer && (
        <div className="fixed bottom-16 left-0 right-0 md:max-w-md md:mx-auto bg-blue-50 border-t border-blue-100 p-3 mx-2 mb-2 rounded-xl shadow-lg z-40 flex items-center justify-between" style={{ bottom: '5.5rem' }}>
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 text-white p-1.5 rounded-lg">
              <span className="text-lg font-bold">%</span>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Get Flat ₹50 OFF</p>
              <p className="text-xs text-slate-500">Add items worth ₹199 to avail offer</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] bg-slate-200 px-1.5 py-0.5 rounded text-slate-600 font-medium">1/2</span>
            <button onClick={() => setShowBottomOffer(false)}>
              <X size={16} className="text-slate-400" />
            </button>
          </div>
        </div>
      )}

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 py-2 px-6 flex justify-between items-end z-50 md:max-w-md md:mx-auto pb-4">
        <div className="flex flex-col items-center gap-1 cursor-pointer text-slate-400 hover:text-slate-600" onClick={() => navigate('/grocery')}>
          <Home size={24} />
          <span className="text-[10px] font-medium">Home</span>
        </div>

        <div className="flex flex-col items-center gap-1 cursor-pointer text-slate-400 hover:text-slate-600" onClick={() => navigate('/usermain/plans')}>
          <ShoppingBag size={24} />
          <span className="text-[10px] font-medium">Plan</span>
        </div>

        <div className="flex flex-col items-center gap-1 cursor-pointer">
          <LayoutGrid size={24} className="text-slate-900 fill-current" />
          <span className="text-[10px] font-bold text-slate-900">Categories</span>
          <div className="w-8 h-1 bg-slate-900 rounded-full mt-0.5"></div>
        </div>

        <button className="mb-1" onClick={() => navigate('/')}>
          <span className="text-red-600 font-black italic text-xl tracking-tighter">Mofood</span>
        </button>
      </div>

    </div>
  );
};

export default CategoriesPage;
