import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users } from "lucide-react";

interface DestinationCardProps {
  id: string;
  title: string;
  location: string;
  image: string;
  price: string;
  duration: string;
  groupSize: string;
  badge?: string;
}

const DestinationCard = ({
  id,
  title,
  location,
  image,
  price,
  duration,
  groupSize,
  badge,
}: DestinationCardProps) => {
  return (
    <Link to={`/destino/${id}`}>
      <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {badge && (
            <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
              {badge}
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                {title}
              </h3>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{location}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm text-muted-foreground mt-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>{groupSize}</span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
            <span className="text-sm text-muted-foreground">Desde</span>
            <span className="text-2xl font-bold text-primary">{price}€</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default DestinationCard;
