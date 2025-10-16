import { Search, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SearchBar = () => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-card rounded-lg shadow-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="¿A dónde quieres ir?"
            className="pl-10"
          />
        </div>
        <div className="relative">
          <Calendar className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="¿Cuándo viajas?"
            className="pl-10"
          />
        </div>
        <Button className="w-full" size="lg">
          <Search className="mr-2 h-5 w-5" />
          Buscar Destinos
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
