"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import TextAbout from '@/components/sections/about/TextAbout';
import { CalendarDays, Clock, Coffee, Croissant, Facebook, Gift, Heart, Instagram, Leaf, Mic, Paintbrush, Sparkles, Truck, Twitter, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="medium"
        sizing="medium"
        background="aurora"
        cardStyle="layered-gradient"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "About",
          id: "about",
        },
        {
          name: "Menu",
          id: "signature-drinks",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Features",
          id: "features",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Pincher"
      button={{
        text: "Order Online",
        href: "#contact",
      }}
      animateOnLoad={true}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "radial-gradient",
      }}
      imagePosition="right"
      title="Welcome to Pincher: Your Daily Brew of Joy"
      description="Experience the rich aroma and vibrant community at Pincher. We're dedicated to crafting the perfect cup and creating a space where moments are savored."
      kpis={[
        {
          value: "10+",
          label: "Years Brewing",
        },
        {
          value: "50+",
          label: "Coffee Blends",
        },
        {
          value: "1000+",
          label: "Happy Customers",
        },
      ]}
      enableKpiAnimation={true}
      tag="Taste the Difference"
      buttons={[
        {
          text: "Explore Our Menu",
          href: "#signature-drinks",
        },
        {
          text: "Find Us",
          href: "#contact",
        },
      ]}
      imageSrc="https://pixabay.com/get/gd3cb58e1ccddd5f660f58e17ee4e7a93f5e931991f842ac89bb47352ae1d1d2b4ad5a7c72d57e976a9a3c43c9be3309daa81f86d5e606e292fe80cbfb2ebdc97_1280.jpg"
      imageAlt="Cozy Pincher Coffeeshop Interior"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={true}
      tag="Our Story"
      title="Crafting Moments, One Cup at a Time"
      buttons={[
        {
          text: "Meet Our Team",
          href: "#contact",
        },
      ]}
    />
  </div>

  <div id="signature-drinks" data-section="signature-drinks">
      <FeatureCardNineteen
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: 1,
          tag: "Classic",
          title: "Pincher's Perfect Latte",
          subtitle: "Creamy & Smooth",
          description: "A velvety blend of rich espresso and steamed milk, topped with exquisite latte art. A comforting classic for any time of day.",
          imageSrc: "https://pixabay.com/get/g8a3f2d4d9d609484275eae91f1215500127b96af73c73fe5daf02b5e4e641e87a085e1e5d845c49fa587f56edc5eb4a58efdf750f55f45d70cfc5818323a8096_1280.jpg",
          imageAlt: "Latte art in a coffee cup",
          buttons: [
            {
              text: "View Details",
              href: "#",
            },
          ],
        },
        {
          id: 2,
          tag: "Bold",
          title: "The Espresso Maverick",
          subtitle: "Intense & Aromatic",
          description: "Our signature espresso shot, perfectly pulled to capture its full-bodied flavor and aromatic complexity. A true coffee lover's delight.",
          imageSrc: "https://pixabay.com/get/g3fb7d3f2ce75130e3d6f8fb2dd9d732385ebdd89a57c55a432bd9578d53123f6a96ec8f8611c1bc9123f27916fa9b2484e800dc9b481e5fb91c67d85c0bee158_1280.jpg",
          imageAlt: "Freshly brewed espresso shot",
          buttons: [
            {
              text: "View Details",
              href: "#",
            },
          ],
        },
        {
          id: 3,
          tag: "Refresh",
          title: "Arctic Cold Brew",
          subtitle: "Cool & Invigorating",
          description: "Steeped for over 12 hours, our cold brew offers a smooth, low-acidity coffee experience. Served over ice, it's the perfect refresher.",
          imageSrc: "https://pixabay.com/get/g4b10a0bb76fac5449e26ab7ae108677c536575f898768683d492ab0aa8b8f8d7fbe8efa5f29bcfb562c7bb411896c9dc602118b65edd88a292a477b070cdb3b6_1280.jpg",
          imageAlt: "Refreshing cold brew coffee",
          buttons: [
            {
              text: "View Details",
              href: "#",
            },
          ],
        },
      ]}
      title="Our Signature Brews"
      description="Discover the art in every cup with our carefully curated selection of coffee and specialty drinks. Each one crafted to delight your senses."
      tag="Menu Highlights"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      carouselMode="buttons"
      metrics={[
        {
          id: "m1",
          value: "99%",
          title: "Satisfaction Rate",
          description: "Our customers consistently love their Pincher experience.",
          icon: Heart,
        },
        {
          id: "m2",
          value: "Ethically",
          title: "Sourced Beans",
          description: "Commitment to fair trade and sustainable farming practices.",
          icon: Leaf,
        },
        {
          id: "m3",
          value: "Local",
          title: "Community Focus",
          description: "Proudly supporting local artists and events since day one.",
          icon: Users,
        },
        {
          id: "m4",
          value: "Expert",
          title: "Barista Team",
          description: "Highly trained and passionate about every single pour.",
          icon: Coffee,
        },
      ]}
      title="Our Impact & Dedication"
      description="Pincher is more than just a coffee shop; we're a hub of community, quality, and passion. See what makes us special."
      tag="Our Values"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah Johnson",
          date: "May 2024",
          title: "My Favorite Local Spot",
          quote: "Pincher is my go-to for morning coffee. The atmosphere is always welcoming, and their lattes are simply the best in town. Highly recommend!",
          tag: "Community",
          avatarSrc: "https://pixabay.com/get/g984a2547575042dbe561f6196cebfa7b066e8bebb5b6819919f1dcb446ae906afe5cd7fb7885cf544d2417ec01a67d562087e183cd417fb8c1723207cac5a0e4_1280.jpg",
          avatarAlt: "Sarah Johnson",
          imageSrc: "https://pixabay.com/get/ge8d3c636b9fbbb94b33cf94907710ac9d23f0c27cdf773dd488cd27898b665782fe9ae0926472b08012d08f681b6fe1f9d914c1b42624ac5bcb3d69383eaa092_1280.jpg",
          imageAlt: "Interior of Pincher Coffeeshop",
        },
        {
          id: "2",
          name: "Michael Chen",
          date: "April 2024",
          title: "Exceptional Coffee & Service",
          quote: "The baristas at Pincher are true artists. Every drink is made with care, and their knowledge of coffee is impressive. A delightful experience every time.",
          tag: "Quality",
          avatarSrc: "https://pixabay.com/get/g3adfc44b7fd6b5c8ea9f9c0bcc5b823cce308a0ac2d09f1b25fefa0eee6693af343f39ab554af686601e427c80695e64de3fdf479bdd69dd3c55148b7dd77f5f_1280.jpg",
          avatarAlt: "Michael Chen",
          imageSrc: "https://pixabay.com/get/g41c3c8c2a6cecbd570609e78d7097620aa69e702bd428fcba0ac040d57a5068133d01e39cb78b5d783675e443812528394f2cf09804c5c815846ff0a717d45b0_1280.jpg",
          imageAlt: "Outdoor seating at Pincher",
        },
        {
          id: "3",
          name: "Emily Rodriguez",
          date: "March 2024",
          title: "Perfect Place to Unwind",
          quote: "I love coming to Pincher to relax or get some work done. The vibe is chill, the music is great, and the coffee fuels my creativity. Couldn't ask for more.",
          tag: "Atmosphere",
          avatarSrc: "https://pixabay.com/get/gb40fad5d77a9dfd4b771d933bb8d49cde2c21fecf27ea8c5fe4f8ea5ef66d45a60e190c47a03e4097a548c9b970095f22bb28f955e8f57b18217eea5b7bf40a7_1280.jpg",
          avatarAlt: "Emily Rodriguez",
          imageSrc: "https://pixabay.com/get/g6903ef75a91075b366f0c6d5e58359d8ea9760bcf6e508cb2c064b74a611cbdd33622d9c11294a22ca231f547a9606c0f7c0234e9d2e0f6534aa12cf3bbda37e_1280.jpg",
          imageAlt: "Rustic interior of Pincher",
        },
        {
          id: "4",
          name: "David Kim",
          date: "February 2024",
          title: "The Best Cold Brew",
          quote: "Pincher's cold brew is a game-changer! It's incredibly smooth and refreshing, especially on a hot day. My absolute favorite drink on the menu.",
          tag: "Taste",
          avatarSrc: "https://pixabay.com/get/g292dc8a6580cfbb96fa73aae071e866cb3d2d6ce519a80692f2a708cbf17262fd99ab884961f162cfe3faec10fea606723535cca047347de41b4f6ac8ac06334_1280.jpg",
          avatarAlt: "David Kim",
          imageSrc: "https://pixabay.com/get/g4f4a8871ab29fda60648b794900d5e4dd8ea395974f241bcfe5567d9c6e40327fac95c05bd0f9bf1e33533b1d73f1691e8e473b50b1c36365a66c4967ac056f4_1280.jpg",
          imageAlt: "Modern coffee counter",
        },
        {
          id: "5",
          name: "Jessica Lee",
          date: "January 2024",
          title: "Always a Warm Welcome",
          quote: "The staff at Pincher are always so friendly and remember my order. It truly feels like a second home. The best customer service!",
          tag: "Service",
          avatarSrc: "https://pixabay.com/get/ga9763dd9d9e1b51edb449b8e037e5d564e2b7e965e5b1b1a0a513de00357a5c1b088759a8658bd9afe49d4f9cbc1f191f4b5d318eb86d179664056f47a6684b4_1280.jpg",
          avatarAlt: "Jessica Lee",
          imageSrc: "https://pixabay.com/get/g31498f00a9daee23ea99d9f4fdc964111fa23194fb7b8bdaf993d17d0ba7dc2fa2d962c8ad5866390574cfb38a9366f8421b1e8ad8872add2230af4f430036a9_1280.jpg",
          imageAlt: "Artistic coffee shop wall",
        },
      ]}
      title="What Our Customers Say"
      description="Hear directly from the Pincher community about their favorite experiences and why they keep coming back for more."
      tag="Loved by Locals"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          id: "f1",
          title: "Artisan Pastries",
          description: "Freshly baked daily, our selection of pastries perfectly complements your coffee. From flaky croissants to decadent muffins, there's a treat for everyone.",
          media: {
            imageSrc: "https://pixabay.com/get/g7c917abf2a472e98055b6b38a45414dff49a450d75e3a78d551c624bb499cc4d16769256fcf05180dacdc1beaf6d8c9e11b6c7aeede40031c673816ebcadf15d_1280.jpg",
            imageAlt: "Assortment of fresh pastries",
          },
          items: [
            {
              icon: Croissant,
              text: "Baked Fresh Daily",
            },
            {
              icon: Coffee,
              text: "Perfect Pairings",
            },
            {
              icon: Sparkles,
              text: "Sweet & Savory Options",
            },
          ],
          reverse: false,
        },
        {
          id: "f2",
          title: "Community Events",
          description: "Join us for regular events including open mic nights, local artist showcases, and coffee tasting workshops. Pincher is a vibrant hub for creativity and connection.",
          media: {
            imageSrc: "https://pixabay.com/get/g0aa3d5fe76550bfd3c0b4168ba4bc21e30821d06c9f31eaa96ad8ac1795acdfbc65622f074d5c33ec3866e232f2a342ed9d7ebbf5a3ec3e3497de7ef71284856_1280.jpg",
            imageAlt: "Coffeeshop event space",
          },
          items: [
            {
              icon: Mic,
              text: "Open Mic Nights",
            },
            {
              icon: Paintbrush,
              text: "Artist Showcases",
            },
            {
              icon: CalendarDays,
              text: "Seasonal Workshops",
            },
          ],
          reverse: true,
        },
        {
          id: "f3",
          title: "Convenient Online Ordering",
          description: "Short on time? Order your favorite Pincher coffee and treats online for quick pickup. Enjoy the Pincher experience on your schedule.",
          media: {
            imageSrc: "https://pixabay.com/get/g81402b913921f4564903075bdc8ed976585dd2284a5b70668ac8e57989d18027266fc71b7f348f01b86a3c6ae65baccb1333b12d429bf8fe486a4f968d5838f1_1280.jpg",
            imageAlt: "Mobile phone with online ordering app",
          },
          items: [
            {
              icon: Clock,
              text: "Save Time",
            },
            {
              icon: Truck,
              text: "Easy Pickup",
            },
            {
              icon: Gift,
              text: "Loyalty Rewards",
            },
          ],
          reverse: false,
        },
      ]}
      title="Beyond the Bean"
      description="At Pincher, we offer more than just exceptional coffee. Discover a full experience designed to enrich your day."
      tag="Our Offerings"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "downward-rays-static",
      }}
      text="Visit Us or Get in Touch\n\n**Pincher Coffeeshop**\n123 Brew Lane, Coffeeville, CA 90210\n(555) 123-4567\ninfo@pinchercoffee.com\n\n**Hours:**\nMonday - Friday: 7 AM - 7 PM\nSaturday - Sunday: 8 AM - 6 PM"
      buttons={[
        {
          text: "Get Directions",
          href: "https://maps.google.com/?q=123+Brew+Lane,+Coffeeville,+CA",
        },
        {
          text: "Send a Message",
          href: "mailto:info@pinchercoffee.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Pincher"
      copyrightText="© 2024 Pincher. All rights reserved."
      socialLinks={[
        {
          icon: Facebook,
          href: "https://facebook.com/pinchercoffee",
          ariaLabel: "Facebook page",
        },
        {
          icon: Instagram,
          href: "https://instagram.com/pinchercoffee",
          ariaLabel: "Instagram profile",
        },
        {
          icon: Twitter,
          href: "https://twitter.com/pinchercoffee",
          ariaLabel: "Twitter profile",
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
