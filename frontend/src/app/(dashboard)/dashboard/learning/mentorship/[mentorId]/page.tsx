"use client";

import { useParams, useRouter } from "next/navigation";
import { Star, MessageSquare, Calendar, ArrowLeft, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const MENTOR = {
  id: "mentor-1",
  name: "Dr. Amina Research",
  role: "PhD in Education Research",
  institution: "MSU-IIT",
  avatar: "/avatars/amina.jpg",
  rating: 4.9,
  sessions: 120,
  expertise: ["Research", "Education", "Social Sciences", "Academic Writing"],
  availability: "Mon, Wed, Fri · 2:00 PM - 5:00 PM",
  bio: "With over 15 years of experience in education research, I'm passionate about helping BARMM scholars develop their research skills and academic potential. I specialize in qualitative research methods and thesis writing guidance.",
  reviews: [
    { id: "rev1", author: "Maria Santos", text: "Dr. Amina helped me structure my thesis proposal. Her feedback was incredibly valuable!", rating: 5 },
    { id: "rev2", author: "Ahmed Hassan", text: "Very patient and knowledgeable. Highly recommend for research guidance.", rating: 5 },
  ]
};

export default function MentorProfilePage() {
  const params = useParams();
  const router = useRouter();

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Mentorship Hub
      </button>

      {/* Mentor Header Card */}
      <Card className="border-slate-200 shadow-sm overflow-hidden">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Avatar Section */}
            <div className="flex flex-col items-center gap-4">
              <Avatar className="h-32 w-32 border-4 border-emerald-50">
                <AvatarImage src={MENTOR.avatar} alt={MENTOR.name} />
                <AvatarFallback className="text-4xl bg-emerald-100 text-emerald-700">
                  {MENTOR.name.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex items-center gap-1.5 bg-amber-50 px-3 py-2 rounded-lg">
                <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                <span className="font-bold text-amber-900">{MENTOR.rating}</span>
              </div>
            </div>

            {/* Info Section */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-slate-900 mb-1">{MENTOR.name}</h1>
              <p className="text-lg font-medium text-emerald-600 mb-1">{MENTOR.role}</p>
              <div className="flex items-center gap-2 text-slate-600 mb-6">
                <MapPin className="h-4 w-4" />
                <span>{MENTOR.institution}</span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6 text-center">
                <div className="bg-slate-50 rounded-lg p-3">
                  <p className="text-sm text-slate-600">Total Sessions</p>
                  <p className="text-2xl font-bold text-slate-900">{MENTOR.sessions}</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-3">
                  <p className="text-sm text-slate-600">Availability</p>
                  <p className="text-sm font-medium text-slate-900">{MENTOR.availability}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button className="bg-emerald-600 hover:bg-emerald-700 flex-1">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book a Session
                </Button>
                <Button variant="outline" className="border-emerald-600 text-emerald-700 hover:bg-emerald-50 flex-1">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* About Section */}
          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle>About</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 leading-relaxed">{MENTOR.bio}</p>
            </CardContent>
          </Card>

          {/* Expertise Section */}
          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle>Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {MENTOR.expertise.map((exp) => (
                  <Badge key={exp} variant="secondary" className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
                    {exp}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Reviews Section */}
          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle>Reviews & Testimonials</CardTitle>
              <CardDescription>{MENTOR.reviews.length} reviews from scholars</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {MENTOR.reviews.map((review) => (
                <div key={review.id}>
                  <div className="flex items-start justify-between mb-2">
                    <p className="font-semibold text-slate-900">{review.author}</p>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-700 text-sm">{review.text}</p>
                  {MENTOR.reviews.indexOf(review) !== MENTOR.reviews.length - 1 && (
                    <Separator className="mt-4" />
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Availability Calendar Placeholder */}
          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">Upcoming Availability</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-100">
                  <p className="text-sm font-medium text-slate-900">Monday</p>
                  <p className="text-xs text-slate-600">2:00 PM - 5:00 PM</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-100">
                  <p className="text-sm font-medium text-slate-900">Wednesday</p>
                  <p className="text-xs text-slate-600">2:00 PM - 5:00 PM</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-100">
                  <p className="text-sm font-medium text-slate-900">Friday</p>
                  <p className="text-xs text-slate-600">2:00 PM - 5:00 PM</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4 border-slate-300">
                View Full Calendar
              </Button>
            </CardContent>
          </Card>

          {/* Quick Info */}
          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">Quick Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div>
                <p className="text-slate-600 font-medium mb-1">Session Duration</p>
                <p className="text-slate-900">1 hour per session</p>
              </div>
              <Separator />
              <div>
                <p className="text-slate-600 font-medium mb-1">Response Time</p>
                <p className="text-slate-900">Usually within 2 hours</p>
              </div>
              <Separator />
              <div>
                <p className="text-slate-600 font-medium mb-1">Languages</p>
                <p className="text-slate-900">English, Filipino, Arabic</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
