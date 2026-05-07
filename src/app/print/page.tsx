import PrintDocument from "@/components/PrintDocument";
import PrintAutoTrigger from "@/components/PrintAutoTrigger";

export default function PrintAllPage() {
  return (
    <div
      id="print-export-root"
      className="mx-auto max-w-4xl"
    >
      <PrintAutoTrigger />
      <PrintDocument rootId="route-print-document-root" />
    </div>
  );
}
