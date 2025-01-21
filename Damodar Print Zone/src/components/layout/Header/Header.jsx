'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ChevronDown,
  Menu,
  X,
  Edit,
  MapPin,
  Clock,
  Phone,
  Mail,
  Layers,
  MessageCircle,
  CreditCard,
  CupSoda,
  BookOpen,
  Image,
  FileText,
  Printer,
  Home,
} from 'lucide-react';
import { siteInfo } from '../../common/interface/siteConfig'; // Import siteInfo

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const serviceCategories = [
    {
      icon: <CreditCard size={20} />,
      title: 'Smart ID Cards',
      href: '#smart-id-cards',
    },
    {
      icon: <CupSoda size={20} />,
      title: 'Customized Mug',
      href: '#customized-mug',
    },
    {
      icon: <BookOpen size={20} />,
      title: 'Pamphlets/Magazine',
      href: '#pamphlets-magazine',
    },
    {
      icon: <Image size={20} />,
      title: 'Photo Prints/Drawings',
      href: '#photo-prints-drawings',
    },
    {
      icon: <FileText size={20} />,
      title: 'Panoramic Print',
      href: '#panoramic-print',
    },
    {
      icon: <Image size={20} />,
      title: 'UV DTF Stickers',
      href: '#uv-dtf-stickers',
    },
    {
      icon: <Image size={20} />,
      title: 'Flex Banners / Vinyl / Canvas',
      href: '#flex-banners-vinyl-canvas',
    },
    {
      icon: <Printer size={20} />,
      title: 'Colour Digital Printing',
      href: '#colour-digital-printing',
    },
    {
      icon: <Edit size={20} />,
      title: 'Graphics Designing',
      href: '#graphics-designing',
    },
    {
      icon: <FileText size={20} />,
      title: 'Multi Colour Offset Printing',
      href: '#multi-colour-offset-printing',
    },
    {
      icon: <FileText size={20} />,
      title: 'Rollup Standies/ Glow Sign Boards',
      href: '#rollup-standies-glow-sign-boards',
    },
    {
      icon: <CreditCard size={20} />,
      title: 'Visiting Cards / Invites',
      href: '#visiting-cards-invites',
    },
    {
      icon: <BookOpen size={20} />,
      title: 'Pamphlets/ Brochures',
      href: '#pamphlets-brochures',
    },
    {
      icon: <Image size={20} />,
      title: 'Stickers / Tent Cards',
      href: '#stickers-tent-cards',
    },
    {
      icon: <Layers size={20} />,
      title: 'Lamination / Cad Plotting',
      href: '#lamination-cad-plotting',
    },
    {
      icon: <Image size={20} />,
      title: 'Photo Frames',
      href: '#photo-frames',
    },
  ];


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ height: 40, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-blue-600 text-white"
          >
            <div className="container mx-auto px-4 lg:px-16">
              {/* Mobile Top Bar */}
              <div className="md:hidden flex items-center justify-between h-10">
                <span className="text-sm font-medium">Best CSC Center in Goa</span>
                <a
                  href={`tel:${siteInfo.mobileNo}`}
                  className="flex items-center gap-2 hover:text-blue-100 transition-colors"
                >
                  <Phone size={14} className="flex-shrink-0" />
                  <span className="text-sm">{siteInfo.mobileNo}</span>
                </a>
              </div>

              {/* Desktop Top Bar */}
              <div className="hidden md:flex items-center justify-between h-10">
                <div className="flex items-center space-x-8">
                  <div className="flex items-center gap-2 min-w-max">
                    <MapPin size={14} className="flex-shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/BLDVto5NMbigD73q9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm whitespace-nowrap"
                    >
                      {siteInfo.address}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 min-w-max">
                    <Clock size={14} className="flex-shrink-0" />
                    <span className="text-sm whitespace-nowrap">Mon - Sat: {siteInfo.businessHours.monday}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-8">
                  <a
                    href={`mailto:${siteInfo.email}`}
                    className="flex items-center gap-2 hover:text-blue-100 transition-colors min-w-max"
                  >
                    <Mail size={14} className="flex-shrink-0" />
                    <span className="text-sm">{siteInfo.email}</span>
                  </a>
                  <a
                    href={`tel:${siteInfo.mobileNo}`}
                    className="flex items-center gap-2 hover:text-blue-100 transition-colors min-w-max"
                  >
                    <Phone size={14} className="flex-shrink-0" />
                    <span className="text-sm">{siteInfo.mobileNo}</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Header */}
      <header
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-10">
          <nav className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <img src="/images/logo.jpeg" alt="PRINT" className="h-10 w-auto" />
              <div>
                <span className="text-lg font-bold text-gray-900">{siteInfo.name}</span>
                <p className="text-xs text-gray-600">Common Printing Centre</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>

              {/* Services Link */}
              <Link href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </Link>

              <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/+919623451932"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition-colors"
              >
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </a>

              {/* Call Button */}
              <a
                href={`tel:${siteInfo.mobileNo}`}
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition-colors"
              >
                <Phone size={16} />
                <span>Call Now</span>
              </a>

              {/* Print Button */}
              <a
                href="/print"
                className="flex items-center gap-2 bg-blue-900 text-white px-6 py-2 rounded-xl hover:bg-blue-800 transition-colors"
              >
                <Printer size={16} />
                <span>Print</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <Menu size={24} className="text-gray-700" />
              ) : (
                <Menu size={24} className="text-gray-700" />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, translateY: -10 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: -10 }}
              className="fixed inset-0 top-[64px] bg-white z-50 lg:hidden overflow-hidden"
              style={{ height: `calc(100vh - 64px)` }}
            >
              {/* Sticky Menu Header */}
              <div className="sticky top-0 bg-white z-10 p-4 border-b">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={24} className="text-gray-700" />
                  </button>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="h-full overflow-y-auto">
                <div className="p-4 space-y-4">
                  {/* Navigation Links */}
                  <div className="space-y-2">
                    <Link
                      href="/"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 active:bg-gray-100"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Home size={20} className="text-blue-600" />
                      <span className="text-gray-700">Home</span>
                    </Link>
                  </div>

                  {/* Services Section */}
                  <div className="space-y-3">
                    <h3 className="font-medium text-gray-900 px-2">Services</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {serviceCategories.map((category) => (
                        <Link
                          key={category.title}
                          href={category.href}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 active:bg-gray-100"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                            {category.icon}
                          </div>
                          <span className="text-sm font-medium text-gray-700">{category.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3 pt-4 border-t">
                    <a
                      href="https://wa.me/+919623451932"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-green-600 text-white p-3 rounded-xl hover:bg-green-700 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <MessageCircle size={16} />
                      <span>WhatsApp</span>
                    </a>
                    <a
                      href={`tel:${siteInfo.mobileNo}`}
                      className="flex items-center justify-center gap-2 bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Phone size={16} />
                      <span>Call Now</span>
                    </a>
                    <a
                      href="/print"
                      className="flex items-center justify-center gap-2 bg-blue-900 text-white p-3 rounded-xl hover:bg-blue-800 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Printer size={16} />
                      <span>Print</span>
                    </a>
                  </div>

                  {/* Contact Info */}
                  <div className="pt-4 border-t space-y-3">
                    <div className="flex items-start gap-2 p-2 text-sm text-gray-600">
                      <MapPin size={14} className="mt-1 flex-shrink-0" />
                      <a
                        href="https://maps.app.goo.gl/BLDVto5NMbigD73q9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm whitespace-nowrap"
                      >
                        {siteInfo.address}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 p-2 text-sm text-gray-600">
                      <Clock size={14} className="flex-shrink-0" />
                      <span>Mon - Sat: {siteInfo.businessHours.monday}</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 text-sm text-gray-600">
                      <Mail size={14} className="flex-shrink-0" />
                      <span>{siteInfo.email}</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 text-sm text-gray-600">
                      <Phone size={14} className="flex-shrink-0" />
                      <span>{siteInfo.mobileNo}</span>
                    </div>
                  </div>

                  {/* Bottom Safe Area Padding */}
                  <div className="h-safe-bottom"></div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;