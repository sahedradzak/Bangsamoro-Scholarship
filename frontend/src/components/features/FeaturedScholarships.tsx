import { SCHOLARSHIPS } from "@/lib/mock-data";
import ScholarshipCard from "./ScholarshipCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FeaturedScholarships() {
    const featured = SCHOLARSHIPS.slice(0, 3);

    return (
        <section className="bg-muted/30 pt-6 pb-6">
            <div className="container mx-auto px-4">
                <div className="mb-16 flex flex-col items-center justify-between gap-6 md:flex-row">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
                            Featured <span className="text-secondary">Scholarships</span>
                        </h2>
                        <p className="mt-4 text-muted-foreground max-w-lg">
                            Explore high-impact opportunities from dedicated BARMM ministries and partners.
                        </p>
                    </div>
                    <Link href="/scholarships">
                        <Button variant="ghost" className="text-primary font-bold hover:bg-primary/5">
                            View All Scholarships <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {featured.map((scholarship) => (
                        <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
                    ))}
                </div>
            </div>
        </section>
    );
}
