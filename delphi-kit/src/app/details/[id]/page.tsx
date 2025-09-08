import { itemService } from "@/src/services/itemServices";
import LibraryService from "@/src/services/libraryService";

type Props = {
  params: { id: string };
  searchParams : { type: string };
};

export default function DetailsPage({ params, searchParams }: Props) {
  const api = itemService();
  const item = api.getItemByIdAndType(Number(params.id), searchParams.type);

  if (!item) {
    return <div className="p-4">Item not found</div>;
  }

  return (
    <div className="pageContainer">
      <div className="titleRed" >
        {item.name}
      </div>
    </div>
  );
}
