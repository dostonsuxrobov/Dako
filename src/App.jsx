import React, { useState, useEffect } from 'react';
import { Menu, X, Star, MapPin, Phone, Truck, Package, ShieldCheck, ArrowRight, ChevronRight, Clock, ThumbsUp, Wallet, Hand, CreditCard, Smartphone, Banknote } from 'lucide-react';

// --- GLOBAL STYLES FIX ---
const globalStyles = `
  html, body, #root {
    width: 100%;
    margin: 0;
    padding: 0;
    display: block !important;
    max-width: none !important;
  }
`;

// --- COMPONENTS ---

// 1. Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/95 backdrop-blur-sm py-4 border-b border-zinc-800' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Logo */}
          <div className="bg-white p-2 rounded w-32 h-12 flex items-center justify-center overflow-hidden">
            <img 
              src="logo.jpg" 
              alt="MoverX Logo" 
              className="w-full h-full object-contain"
              onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
            />
            <span className="hidden text-xl font-black text-blue-900 tracking-tighter">MOVER<span className="text-red-600">X</span></span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-bold tracking-widest uppercase text-sm text-white">
          <a href="#services" className="hover:text-red-500 transition-colors">Services</a>
          <a href="#process" className="hover:text-red-500 transition-colors">Our Process</a>
          <a href="#reviews" className="hover:text-red-500 transition-colors">Reviews</a>
          <a href="tel:+13474760255" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 transition-all duration-300 uppercase tracking-widest text-xs border border-red-600 hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] flex items-center gap-2">
            <Phone size={14} /> Call Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-950 border-t border-zinc-800 p-6 flex flex-col gap-4 shadow-2xl">
          <a href="#services" className="text-white font-bold uppercase tracking-widest text-lg hover:text-red-500" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#process" className="text-white font-bold uppercase tracking-widest text-lg hover:text-red-500" onClick={() => setIsOpen(false)}>Our Process</a>
          <a href="#reviews" className="text-white font-bold uppercase tracking-widest text-lg hover:text-red-500" onClick={() => setIsOpen(false)}>Reviews</a>
          <a href="tel:+13474760255" className="bg-red-600 text-white text-center font-bold uppercase tracking-widest py-4 mt-4 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] flex justify-center items-center gap-2" onClick={() => setIsOpen(false)}>
            <Phone size={18} /> Call Now
          </a>
        </div>
      )}
    </nav>
  );
};

// 2. Hero Component
const Hero = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center bg-zinc-950 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="hero.jpg" 
          alt="MoverX Truck on Street" 
          className="w-full h-full object-cover opacity-40 grayscale"
          onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-6">
          Heavy <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Lifting.</span><br/>
          Zero <br/>
          <span className="text-white">Stress.</span>
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-lg mb-10 font-medium">
          Small family-owned business ready to help near or far. Top-rated on Yelp, serving the Feasterville Area with 24/7 availability and an on-time commitment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Changed standard link to tel: link */}
          <a href="tel:+13474760255" className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest px-8 py-5 text-center flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]">
            Book Your Move <Phone size={20} />
          </a>
          <a href="#reviews" className="bg-white hover:bg-gray-100 text-zinc-950 font-bold uppercase tracking-widest px-8 py-5 text-center flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(220,38,38,0.6)]">
            Read Yelp Reviews
          </a>
        </div>
      </div>
    </div>
  );
};

// 3. Feature/Process Gallery Component
const ProcessGallery = () => {
  return (
    <section id="process" className="py-24 bg-white text-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4">
              Built on <br/><span className="text-blue-900">Precision.</span>
            </h2>
            <p className="text-xl text-zinc-600 max-w-md font-medium">We treat your belongings like our own. Meticulous packing, secure loading, and safe transport.</p>
          </div>
          <div className="flex items-center gap-2 font-bold uppercase tracking-widest text-red-600">
            <span>View Full Process</span> <ChevronRight size={24} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group relative overflow-hidden bg-zinc-100 aspect-[4/5] flex items-center justify-center">
            <img 
              src="packing.jpg" 
              alt="MoverX wrapping furniture" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <span className="text-red-500 font-bold tracking-widest uppercase mb-2 block">Step 01</span>
              <h3 className="text-3xl font-black uppercase tracking-tighter">Pro Packing & Wrapping</h3>
            </div>
          </div>

          <div className="group relative overflow-hidden bg-zinc-100 aspect-[4/5] flex items-center justify-center md:translate-y-12">
            <img 
              src="loading.jpg" 
              alt="MoverX loaded truck" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <span className="text-blue-400 font-bold tracking-widest uppercase mb-2 block">Step 02</span>
              <h3 className="text-3xl font-black uppercase tracking-tighter">Strategic Loading</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 4. Services Component
const Services = () => {
  const services = [
    { icon: <Truck size={40} />, title: "Local & Long Distance", desc: "Ready to help near or far. Serving the Feasterville area, Philly, and beyond." },
    { icon: <Clock size={40} />, title: "24/7 Availability", desc: "We operate 24 hours a day, 7 days a week. On-time commitment for every single move." },
    { icon: <Package size={40} />, title: "Custom Solutions", desc: "Full-service packing and customized moving solutions built around your exact budget." },
    { icon: <ThumbsUp size={40} />, title: "Satisfaction Guaranteed", desc: "Locally owned & operated, budget-friendly, and fully committed to your satisfaction." }
  ];

  const amenities = [
    { name: "ASL Proficient", icon: <Hand size={20} className="text-red-500" /> },
    { name: "Credit Cards", icon: <CreditCard size={20} className="text-red-500" /> },
    { name: "Venmo", icon: <img src="https://cdn.simpleicons.org/venmo/ef4444" alt="Venmo" width="20" height="20" /> },
    { name: "Cash App", icon: <img src="https://cdn.simpleicons.org/cashapp/ef4444" alt="Cash App" width="20" height="20" /> },
    { name: "Cash", icon: <Banknote size={20} className="text-red-500" /> },
    { name: "Zelle", icon: <img src="https://cdn.simpleicons.org/zelle/ef4444" alt="Zelle" width="20" height="20" /> },
    { name: "PayPal", icon: <img src="https://cdn.simpleicons.org/paypal/ef4444" alt="PayPal" width="20" height="20" /> }
  ];

  return (
    <section id="services" className="py-24 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Our <span className="text-red-600">Services</span></h2>
          <div className="w-24 h-2 bg-blue-900 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {services.map((svc, idx) => (
            <div key={idx} className="bg-zinc-900 border border-zinc-800 p-8 hover:border-red-600 transition-colors group">
              <div className="text-red-500 mb-6 group-hover:scale-110 transition-transform origin-left">{svc.icon}</div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4">{svc.title}</h3>
              <p className="text-zinc-400 font-medium leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>

        {/* Flexible Payments & Amenities Bar */}
        <div className="bg-zinc-900 border border-zinc-800 p-8 flex flex-col items-center text-center gap-4 mt-8">
          <Wallet size={48} className="text-red-500 mb-2" />
          <h4 className="font-black uppercase tracking-widest text-2xl">Amenities & Accepted Payments</h4>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {amenities.map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-zinc-950 border border-zinc-800 px-5 py-3 rounded shadow-md">
                {item.icon}
                <span className="text-zinc-300 font-bold tracking-wider uppercase text-sm">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// 5. Yelp Reviews Component
const Reviews = () => {
  useEffect(() => {
    if (!document.getElementById('yelp-widget-script')) {
      const script = document.createElement('script');
      script.id = 'yelp-widget-script';
      script.src = "https://www.yelp.com/embed/widgets.js";
      script.type = "text/javascript";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const yelpData = [
    { id: "z4dF8KJjnwg8HQK99UTLHA", user: "vM6It8J4rBXh0DHhFMLwEg", name: "Robert S." },
    { id: "8hH1YsSK4DYUM2RxAZWGFQ", user: "rER3MYRSoFfcPn7Z1i8cYQ", name: "Beth C." },
    { id: "ydBl-TalDpz2kekxej--qQ", user: "uAG1IYI4jb2R2sIYuKeW_w", name: "Susan C." },
    { id: "NN7KMTEvlpQDG4bdGXIQcw", user: "_-4OWyMVaU371_E0euSPVQ", name: "Lori A." },
    { id: "ozA3KGbafblgbAxNCa54Aw", user: "fI7j5CBv5g6r4tUZURvQzg", name: "Mirsaid N." }
  ];

  return (
    <section id="reviews" className="py-24 bg-zinc-100 text-zinc-950 border-t border-zinc-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex gap-1 text-red-600 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={32} />)}
          </div>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Don't take <span className="text-red-600">our word for it</span></h2>
          <p className="text-xl text-zinc-500 font-medium mt-4">Verified by Yelp.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {yelpData.map((review) => (
            <div key={review.id} className="w-full md:w-[400px] flex justify-center bg-white shadow-lg min-h-[250px] p-4 rounded border border-zinc-200">
              <div 
                className="w-full h-full flex items-center justify-center"
                dangerouslySetInnerHTML={{
                  __html: `
                    <span class="yelp-review" data-review-id="${review.id}" data-hostname="www.yelp.com">
                      Read <a href="https://www.yelp.com/user_details?userid=${review.user}" rel="nofollow noopener">${review.name}</a>'s 
                      <a href="https://www.yelp.com/biz/moverx-feasterville-2?hrid=${review.id}" rel="nofollow noopener"> review</a> of 
                      <a href="https://www.yelp.com/biz/cc_2MFJSZ1YF-xZQ011SnA" rel="nofollow noopener"> MoverX</a> on 
                      <a href="https://www.yelp.com" rel="nofollow noopener"> Yelp</a>
                    </span>
                  `
                }} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 6. Footer Component (Form Removed)
const Footer = () => {
  return (
    <footer id="contact" className="bg-zinc-950 pt-24 pb-12 text-white border-t border-zinc-800">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">
          Ready To <br/><span className="text-red-600">Move?</span>
        </h2>
        <p className="text-xl text-zinc-400 font-medium max-w-xl mb-12">
          Contact MoverX today. We handle the heavy lifting. Call us directly below to get started.
        </p>
        
        {/* Centered Contact Box */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-zinc-900 p-8 border border-zinc-800 rounded shadow-xl">
          <a href="tel:+13474760255" className="flex items-center gap-4 text-3xl font-black tracking-widest hover:text-red-500 transition-colors group">
            <Phone className="text-red-500 group-hover:scale-110 transition-transform" size={36} />
            <span>(347) 476-0255</span>
          </a>
          
          <div className="hidden md:block w-px h-12 bg-zinc-800"></div>
          
          <div className="flex flex-col gap-2 text-left">
            <div className="flex items-center gap-3 text-sm font-bold tracking-wider text-zinc-400">
              <MapPin className="text-red-500" size={18} />
              <span>Serving Feasterville Area & Beyond</span>
            </div>
            <div className="flex items-center gap-3 text-sm font-bold tracking-wider text-zinc-400">
              <Clock className="text-red-500" size={18} />
              <span>Open 24 Hours / 7 Days a Week</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 text-center border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
            <div className="bg-white p-1 w-20 h-8 flex items-center justify-center rounded overflow-hidden">
                <img src="logo.jpg" alt="Logo mini" className="w-full h-full object-contain" onError={(e) => e.target.style.display='none'}/>
            </div>
            <span className="font-bold text-zinc-500 text-sm tracking-widest uppercase">© {new Date().getFullYear()} MoverX</span>
        </div>
        <div className="text-zinc-600 text-sm font-bold tracking-widest uppercase flex gap-4">
            <a href="https://www.yelp.com/biz/moverx-feasterville-2" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Yelp Profile</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

// --- MAIN APP ENTRANCE ---
export default function App() {
  return (
    <div className="w-full min-h-screen font-sans antialiased selection:bg-red-600 selection:text-white bg-zinc-950">
      <style>{globalStyles}</style>
      <Navbar />
      <Hero />
      <Reviews />
      <Services />
      <ProcessGallery />
      <Footer />
    </div>
  );
}