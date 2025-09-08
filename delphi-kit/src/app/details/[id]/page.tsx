import { itemService } from "@/src/services/itemServices";

export default async function DetailsPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ type: string }>;
}) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const api = itemService();

  const id = Number(resolvedParams.id);
  const type = resolvedSearchParams.type;

  const item = api.getItemByIdAndType(id, type);

  if (!item) {
    return <div className="p-4">Item not found</div>;
  }

  return (
    <div className="pageContainer">
      <div className="titleRed">
        {item.name}
      </div>
    </div>
  );
}