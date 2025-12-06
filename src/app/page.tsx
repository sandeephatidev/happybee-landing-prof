import Hero from "@/components/Hero";
import Products from "@/components/Products";
import ContentSections from "@/components/ContentSections";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      <Header />
      <Hero />
      <Products />
      <ContentSections />
      <Footer />
    </main>
  );
}
