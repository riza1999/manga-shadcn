import { Badge } from "@/components/ui/badge";


export const MangaType = ({ contentType }: { contentType: string; }) => {
  return (
    <div className="absolute top-2 right-2">
      <Badge className="uppercase">{contentType}</Badge>
    </div>
  );
};
