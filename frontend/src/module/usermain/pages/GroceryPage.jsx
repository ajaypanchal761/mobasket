import React, { useState, useEffect } from 'react';
import {
    Search,
    Mic,
    ChevronDown,
    User,
    ShoppingBag,
    Zap,
    Heart,
    Home,
    LayoutGrid,
    Printer,
    Monitor,
    X
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Assets Imports
// Vegetables
import imgCoriander from '@/assets/bestseller/coriandar-removebg-preview.png';
import imgChili from '@/assets/bestseller/mirchi-removebg-preview.png';
import imgPotato from '@/assets/bestseller/aalu-removebg-preview.png';
import imgOnion from '@/assets/bestseller/onion-removebg-preview.png';

// Chips
import imgLaysBlue from '@/assets/bestseller/BlueLays-removebg-preview.png';
import imgKurkure from '@/assets/bestseller/kurkure-removebg-preview.png';
import imgLaysGreen from '@/assets/bestseller/GreenLays-removebg-preview.png';
import imgUncle from '@/assets/bestseller/uncleChips-removebg-preview.png';

// Oil
import imgOil1 from '@/assets/bestseller/oil-removebg-preview.png';
import imgOil2 from '@/assets/bestseller/oil2-removebg-preview.png';
import imgOil3 from '@/assets/bestseller/oil3-removebg-preview.png';
import imgOil4 from '@/assets/bestseller/oil4-removebg-preview.png';

// Dairy
import imgMilk from '@/assets/bestseller/milk-removebg-preview.png';
import imgBread from '@/assets/bestseller/bread-removebg-preview.png';
import imgButter from '@/assets/bestseller/butter-removebg-preview.png';
import imgCheese from '@/assets/bestseller/cheese-removebg-preview.png';

import imgAtta from '@/assets/bestseller/aata-removebg-preview.png';
import imgBakery from '@/assets/bestseller/bakery-removebg-preview.png';
// Grocery
import imgBathBody from '@/assets/Beauty&PersonalCare/Bath_Body-removebg-preview.png';
import imgHair from '@/assets/Beauty&PersonalCare/Hair-removebg-preview.png';
import imgSkinFace from '@/assets/Beauty&PersonalCare/Skin_Face-removebg-preview.png';
import imgCosmetics from '@/assets/Beauty&PersonalCare/Beauty_Cosmetics-removebg-preview.png';
import imgHealth from '@/assets/Beauty&PersonalCare/Health_pharma-removebg-preview.png';
// Drinks
import imgCoke from '@/assets/ColdDrinks/cocacola-removebg-preview.png';
import imgSprite from '@/assets/ColdDrinks/sprite-removebg-preview.png';
import imgIceCream from '@/assets/Beauty&PersonalCare/icecream-removebg-preview.png';

// Banners
import imgBanner1 from '@/assets/offerpagebanner.png';
import imgBanner2 from '@/assets/collectionspagebanner.png';
import imgBanner3 from '@/assets/top10pagebanner.png';

const GroceryPage = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('All');
    const [showBottomOffer, setShowBottomOffer] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [currentBanner, setCurrentBanner] = useState(0);

    // Auto-slide carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBanner((prev) => (prev + 1) % 3);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Handle scroll for sticky header transparency/background
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const categories = [
        { id: 'all', name: 'All', icon: <ShoppingBag size={20} /> },
        { id: 'val', name: "Valentine's", icon: <Heart size={20} /> },
        { id: 'win', name: 'Winter', icon: <Zap size={20} /> },
        { id: 'elec', name: 'Electronics', icon: <Monitor size={20} /> },
        { id: 'beau', name: 'Beauty', icon: <Heart size={20} /> },
    ];

    const bestsellers = [
        {
            title: "Vegetables & Fruits",
            count: "+178 more",
            images: [imgCoriander, imgChili, imgPotato, imgOnion]
        },
        {
            title: "Chips & Namkeen",
            count: "+312 more",
            images: [imgLaysBlue, imgKurkure, imgUncle, imgLaysGreen]
        },
        {
            title: "Oil, Ghee & Masala",
            count: "+109 more",
            images: [imgOil1, imgOil2, imgOil3, imgOil4]
        },
        {
            title: "Dairy, Bread & Eggs",
            count: "+85 more",
            images: [imgMilk, imgBread, imgButter, imgCheese]
        }
    ];

    return (
        // Main Container with Single Continuous Gradient
        <div className="min-h-screen text-slate-800 pb-24 font-sans md:max-w-md md:mx-auto shadow-2xl overflow-hidden relative bg-gradient-to-b from-[#fec007] via-[#fff176] to-[#ffffff]">

            {/* --- 1. HEADER (Transparent to blend with main gradient) --- */}
            <div className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-[#fec007]/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
                <div className="pt-3 pb-0 relative z-20">

                    {/* Top Info Row */}
                    <div className="px-4 flex justify-between items-start mb-2">
                        <div className="flex flex-col">
                            <h1 className="text-[10px] uppercase font-black tracking-[0.15em] text-[#3e3212] leading-none mb-0.5">
                                MoBasket in
                            </h1>
                            <div className="flex items-baseline gap-2 leading-none">
                                <span className="text-[1.8rem] font-[900] text-[#1a1a1a] tracking-tight -ml-0.5" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                                    8 minutes
                                </span>
                                {/* Distance Badge */}
                                <div className="bg-white/30 backdrop-blur-sm px-1.5 py-0.5 rounded-md border border-white/20 mb-1">
                                    <span className="text-[9px] font-bold text-[#1a1a1a]">📦 1.2 km</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 -mt-1 cursor-pointer">
                                <span className="text-[#1a1a1a] text-[0.95rem] font-bold tracking-tight line-clamp-1">
                                    Vandana Nagar, Indore
                                </span>
                                <ChevronDown size={14} className="text-[#1a1a1a] stroke-[3]" />
                            </div>
                        </div>

                        {/* Profile Icons */}
                        <div className="flex gap-2 mt-1">
                            <button className="w-9 h-9 bg-[#283810] bg-opacity-30 rounded-full flex items-center justify-center backdrop-blur-sm active:scale-95 transition-transform">
                                <span className="text-[#1a1a1a] font-bold text-lg">₹</span>
                            </button>
                            <button className="w-9 h-9 bg-[#1a1a1a] rounded-full flex items-center justify-center shadow-sm active:scale-95 transition-transform">
                                <User size={18} className="text-white" />
                            </button>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="px-3 mb-2">
                        <div className="bg-white rounded-xl shadow-sm flex items-center px-4 py-3 gap-3 border border-gray-100">
                            <Search className="h-5 w-5 text-slate-400 stroke-[2.5]" />
                            <input
                                type="text"
                                placeholder='Search "pet food"'
                                className="flex-1 bg-transparent outline-none text-slate-800 font-semibold placeholder:text-slate-400 text-[1rem]"
                            />
                            <div className="h-5 w-[1px] bg-gray-200"></div>
                            <Mic className="h-5 w-5 text-slate-400 stroke-[2.5]" />
                        </div>
                    </div>

                    {/* Nav Tabs */}
                    <div className="px-2 pb-3 mt-3">
                        <div className="flex justify-between items-end gap-2 overflow-x-auto scrollbar-hide no-scrollbar px-2">
                            {categories.map((cat) => (
                                <div key={cat.id} className="flex flex-col items-center gap-1 cursor-pointer min-w-[60px]" onClick={() => setActiveTab(cat.name)}>
                                    <div className="relative">
                                        {cat.name === activeTab && (
                                            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#fc9b03] z-10"></div>
                                        )}
                                        <div className="text-slate-900 drop-shadow-sm opacity-80">
                                            {cat.icon}
                                        </div>
                                    </div>
                                    <span className={`text-[10px] font-bold ${activeTab === cat.name ? 'text-slate-900 border-b-2 border-slate-900 pb-0.5' : 'text-slate-700/70'}`}>
                                        {cat.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* --- 2. DYNAMIC BANNER CAROUSEL --- */}
            <div className="relative z-0 -mt-2 animate-fade-in-up px-4 pt-3 pb-2">
                {/* Carousel Container */}
                <div className="relative w-full aspect-[2.4/1] bg-white/20 backdrop-blur-sm rounded-2xl shadow-lg border border-white/30 overflow-hidden">
                    {[
                        { id: 1, img: imgBanner1 },
                        { id: 2, img: imgBanner2 },
                        { id: 3, img: imgBanner3 }
                    ].map((banner, index) => (
                        <div
                            key={banner.id}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center justify-center ${index === currentBanner ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                        >
                            <img
                                src={banner.img}
                                alt="Banner"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}

                    {/* Carousel Indicators (Dots) */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                        {[0, 1, 2].map((i) => (
                            <div
                                key={i}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === currentBanner ? 'bg-white w-4' : 'bg-white/50'}`}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- 3. OFFERS SCROLL (Transparent) --- */}
            <div className="pt-2 pb-1 px-4">
                <div className="flex gap-3 overflow-x-auto scrollbar-hide no-scrollbar">
                    <div className="min-w-[240px] bg-white/60 backdrop-blur-md p-2.5 rounded-xl flex items-center gap-3 shadow-sm border border-white/50">
                        <div className="bg-[#fff8e1] p-1.5 rounded-full border border-orange-100 shadow-inner">
                            <img src="https://cdn-icons-png.flaticon.com/512/7264/7264588.png" className="w-7 h-7 object-contain" alt="%" />
                        </div>
                        <div>
                            <p className="font-[900] text-[#3e2723] text-xs">Get FLAT ₹50 OFF</p>
                            <p className="text-[9px] font-bold text-[#6d4c41]">On first order above ₹199</p>
                        </div>
                    </div>
                    <div className="min-w-[240px] bg-white/60 backdrop-blur-md p-2.5 rounded-xl flex items-center gap-3 shadow-sm border border-white/50">
                        <div className="bg-[#fff8e1] p-1.5 rounded-full border border-orange-100 shadow-inner">
                            <img src="https://cdn-icons-png.flaticon.com/512/9446/9446643.png" className="w-7 h-7 object-contain" alt="Free Del" />
                        </div>
                        <div>
                            <p className="font-[900] text-[#3e2723] text-xs">Enjoy FREE delivery</p>
                            <p className="text-[9px] font-bold text-[#6d4c41]">On all your orders</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* --- 4. BESTSELLERS (Transparent) --- */}
            <div className="px-4 pt-4 pb-20 relative z-10">
                <h3 className="text-lg font-[800] text-[#3e2723] mb-4">Bestsellers</h3>

                <div className="flex gap-4 overflow-x-auto scrollbar-hide no-scrollbar pb-4">
                    {bestsellers.map((item, idx) => (
                        <div key={idx} className="min-w-[150px] flex flex-col gap-2 group cursor-pointer active:scale-95 transition-transform" onClick={() => navigate('/usermain/category/vegetables')}>
                            <div className="bg-white/70 backdrop-blur-sm rounded-[1.2rem] p-2 aspect-[4/4.5] relative shadow-sm border border-white/40">
                                <div className="grid grid-cols-2 gap-2 h-full">
                                    {item.images.map((img, i) => (
                                        <div key={i} className="bg-white rounded-lg flex items-center justify-center p-1 shadow-sm h-full w-full">
                                            <img src={img} alt="" className="w-full h-full object-contain" />
                                        </div>
                                    ))}
                                </div>
                                {/* Count Badge Overlay */}
                                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-[9px] font-bold px-2 py-1 rounded-md shadow-sm border border-slate-100 whitespace-nowrap z-10">
                                    {item.count}
                                </div>
                            </div>
                            <div className="text-center mt-1 px-1">
                                <p className="text-[11px] font-[700] text-[#4e342e] leading-tight">
                                    {item.title.replace('&', '&\n')}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- 5. GROCERY & KITCHEN --- */}
            <div className="px-4 pb-6 relative z-10">
                <h3 className="text-lg font-[800] text-[#3e2723] mb-4">Grocery & Kitchen</h3>
                <div className="grid grid-cols-4 gap-2">
                    {[
                        { name: "Vegetables & Fruits", img: imgCoriander },
                        { name: "Atta, Rice & Dal", img: imgAtta },
                        { name: "Oil, Ghee & Masala", img: imgOil1 },
                        { name: "Dairy, Bread & Eggs", img: imgMilk },
                        { name: "Bakery & Biscuits", img: imgBakery },
                        { name: "Dry Fruits & Cereals", img: imgPotato },
                        { name: "Chicken, Meat & Fish", img: imgKurkure },
                        { name: "Kitchenware & Appliances", img: imgOil2 },
                    ].map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-2 cursor-pointer active:scale-95 transition-transform">
                            <div className="w-full aspect-square bg-sky-50 rounded-2xl flex items-center justify-center p-2 shadow-sm border border-sky-100 overflow-hidden">
                                <img src={item.img} alt={item.name} className="w-full h-full object-contain drop-shadow-sm mix-blend-multiply" />
                            </div>
                            <div className="h-8 flex items-start justify-center w-full">
                                <p className="text-[10px] font-bold text-center text-slate-900 leading-tight px-0.5 line-clamp-2">
                                    {item.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- 6. SNACKS & DRINKS --- */}
            <div className="px-4 pb-6 relative z-10">
                <h3 className="text-lg font-[800] text-[#3e2723] mb-4">Snacks & Drinks</h3>
                <div className="grid grid-cols-4 gap-2">
                    {[
                        { name: "Chips & Namkeen", img: imgLaysBlue },
                        { name: "Sweets & Chocolates", img: imgIceCream },
                        { name: "Cold Drinks & Juices", img: imgCoke },
                        { name: "Noodles & Pasta", img: imgUncle },
                        { name: "Ice Creams", img: imgIceCream },
                        { name: "Frozen Food", img: imgKurkure },
                        { name: "Tea & Coffee", img: imgSprite },
                        { name: "Biscuits", img: imgBakery },
                    ].map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-2 cursor-pointer active:scale-95 transition-transform">
                            <div className="w-full aspect-square bg-sky-50 rounded-2xl flex items-center justify-center p-2 shadow-sm border border-sky-100 overflow-hidden">
                                <img src={item.img} alt={item.name} className="w-full h-full object-contain drop-shadow-sm mix-blend-multiply" />
                            </div>
                            <div className="h-8 flex items-start justify-center w-full">
                                <p className="text-[10px] font-bold text-center text-slate-900 leading-tight px-0.5 line-clamp-2">
                                    {item.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- 7. BEAUTY & PERSONAL CARE --- */}
            <div className="px-4 pb-24 relative z-10">
                <h3 className="text-lg font-[800] text-[#3e2723] mb-4">Beauty & Personal Care</h3>
                <div className="grid grid-cols-4 gap-2">
                    {[
                        { name: "Bath & Body", img: imgBathBody },
                        { name: "Hair", img: imgHair },
                        { name: "Skin & Face", img: imgSkinFace },
                        { name: "Beauty & Cosmetics", img: imgCosmetics },
                        { name: "Health & Pharma", img: imgHealth },
                        { name: "Feminine Hygiene", img: imgBathBody },
                        { name: "Baby Care", img: imgSkinFace },
                        { name: "Oral Care", img: imgHealth },
                    ].map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-2 cursor-pointer active:scale-95 transition-transform">
                            <div className="w-full aspect-square bg-sky-50 rounded-2xl flex items-center justify-center p-2 shadow-sm border border-sky-100 overflow-hidden">
                                <img src={item.img} alt={item.name} className="w-full h-full object-contain drop-shadow-sm mix-blend-multiply" />
                            </div>
                            <div className="h-8 flex items-start justify-center w-full">
                                <p className="text-[10px] font-bold text-center text-slate-900 leading-tight px-0.5 line-clamp-2">
                                    {item.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- 8. BOTTOM FLOATING OFFER --- */}
            {
                showBottomOffer && (
                    <div className="fixed bottom-[4.5rem] left-2 right-2 md:max-w-md md:mx-auto bg-blue-50 border border-blue-100 p-3 rounded-xl shadow-xl z-40 flex items-center justify-between animate-slide-in-up">
                        <div className="flex items-center gap-3">
                            <div className="bg-blue-600 text-white p-1.5 rounded-lg shadow-sm">
                                <span className="text-lg font-black">%</span>
                            </div>
                            <div>
                                <p className="text-sm font-[800] text-slate-900">Get Flat ₹50 OFF</p>
                                <p className="text-[10px] text-slate-500 font-semibold">Add items worth ₹199 to avail offer</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded font-bold">1/2</span>
                            <button onClick={() => setShowBottomOffer(false)}>
                                <X size={16} className="text-slate-400" />
                            </button>
                        </div>
                    </div>
                )
            }

            {/* --- 6. BOTTOM NAVIGATION (Fixed) --- */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 py-2 px-6 flex justify-between items-end z-50 md:max-w-md md:mx-auto pb-4">
                <div className="flex flex-col items-center gap-1 cursor-pointer" onClick={() => navigate('/grocery')}>
                    <Home size={24} className="text-slate-900 fill-current" />
                    <span className="text-[10px] font-bold text-slate-900">Home</span>
                    <div className="w-8 h-1 bg-slate-900 rounded-full mt-0.5"></div>
                </div>

                <div className="flex flex-col items-center gap-1 cursor-pointer text-slate-400 hover:text-slate-600" onClick={() => navigate('/usermain/plans')}>
                    <ShoppingBag size={24} />
                    <span className="text-[10px] font-medium">Plan</span>
                </div>

                <div className="flex flex-col items-center gap-1 cursor-pointer text-slate-400 hover:text-slate-600" onClick={() => navigate('/usermain/categories')}>
                    <LayoutGrid size={24} />
                    <span className="text-[10px] font-medium">Categories</span>
                </div>

                <button className="mb-1" onClick={() => navigate('/')}>
                    <span className="text-red-600 font-black italic text-xl tracking-tighter">Mofood</span>
                </button>
            </div>

            <style>{`
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(-50%) rotate(-12deg); }
                    50% { transform: translateY(-60%) rotate(-10deg); }
                }
                @keyframes float-delayed {
                    0%, 100% { transform: translateY(-50%) rotate(12deg) scaleX(-1); }
                    50% { transform: translateY(-60%) rotate(10deg) scaleX(-1); }
                }
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }
                .animate-float-delayed {
                    animation: float-delayed 4s ease-in-out infinite 2s;
                }
                @keyframes slide-in-up {
                    from { transform: translateY(100%); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                .animate-slide-in-up {
                    animation: slide-in-up 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                }
            `}</style>
        </div >
    );
};

export default GroceryPage;
