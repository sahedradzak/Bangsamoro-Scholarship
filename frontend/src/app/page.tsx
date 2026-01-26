import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import Hero from "@/components/features/Hero";
import FeaturedScholarships from "@/components/features/FeaturedScholarships";
import { STATS, SUCCESS_STORIES, PARTNERS } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, UserPlus, Search, ClipboardList } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      <Hero />

      {/* Impact Stats */}
      <section className="border-y bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-2 group">
                <span className="text-4xl font-extrabold text-primary md:text-5xl group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </span>
                <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedScholarships />

      {/* How It Works */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl uppercase text-primary">How It Works</h2>
            <p className="mt-4 text-muted-foreground mx-auto max-w-2xl">
              Applying for a scholarship has never been easier. Follow these simple steps to start your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-4 whitespace-normal">
            {[
              { step: "01", title: "Create Profile", desc: "Register and complete your academic and personal profile.", icon: <UserPlus className="h-10 w-10" /> },
              { step: "02", title: "Browse", desc: "Discover scholarships that match your eligibility and course.", icon: <Search className="h-10 w-10" /> },
              { step: "03", title: "Apply Online", desc: "Submit your application and upload documents directly.", icon: <ClipboardList className="h-10 w-10" /> },
              { step: "04", title: "Track Status", desc: "Monitor your application progress in real-time.", icon: <CheckCircle2 className="h-10 w-10" /> },
            ].map((item, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center group">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/5 text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed px-4">{item.desc}</p>
                {idx < 3 && (
                  <div className="absolute top-10 left-[70%] hidden w-1/2 border-t-2 border-dashed border-primary/20 md:block"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Peek */}
      <section className="bg-primary py-24 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 skew-x-12 translate-x-1/2"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
                Inspiring <span className="text-secondary">Journeys</span>
              </h2>
              <p className="mt-6 text-primary-foreground/80 max-w-lg leading-relaxed text-lg">
                Our scholars are changing the region, one degree at a time. Read how the Bangsamoro <span className="text-secondary">Scholarship</span> Portal has helped them achieve their dreams.
              </p>
              <div className="mt-10 flex flex-col gap-6">
                <div className="flex gap-4 p-6 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/10">
                  <div className="h-16 w-16 rounded-full bg-white/20 shrink-0"></div>
                  <div>
                    <p className="text-sm mb-2">"The AHME scholarship didn't just fund my education—it gave me a community of mentors who pushed me to excel."</p>
                    <p className="text-sm font-bold">— Maria Santos, RN</p>
                  </div>
                </div>
                <Link href="/success-stories">
                  <Button variant="secondary" className="bg-secondary text-primary hover:bg-secondary/90 font-extrabold px-8 h-12">
                    Read All Stories <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-square rounded-[3rem] overflow-hidden border-8 border-white/10 shadow-3xl">
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h4 className="text-2xl font-bold mb-2 uppercase tracking-tighter">2024 Top Performing Scholar</h4>
                  <p className="text-xs font-semibold opacity-80 uppercase tracking-widest">Maria Santos · MSU-IIT Graduate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Providers Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold uppercase tracking-[0.3em] text-muted-foreground mb-12">Trusted Partners</h2>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
            {PARTNERS.map((partner) => (
              <div key={partner.code} className="group relative flex items-center justify-center transition-all duration-500">
                <div className="h-16 w-16 relative">
                  <img
                    src={partner.logo}
                    alt={partner.code}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
