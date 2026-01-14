import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertCircle, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <div className="bg-orange-100 p-6 rounded-full mb-6 animate-bounce">
        <AlertCircle className="h-12 w-12 text-orange-500" />
      </div>
      <h1 className="text-4xl font-heading font-bold text-slate-800 mb-4">404 - Page Not Found</h1>
      <p className="text-slate-600 mb-8 max-w-md text-lg">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link href="/">
        <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-indigo-500/30 transition-all hover:-translate-y-1">
          <Home className="mr-2 h-5 w-5" />
          Return Home
        </Button>
      </Link>
    </div>
  );
}
