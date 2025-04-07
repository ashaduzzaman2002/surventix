import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ServiceModal({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild className="flex ">
        <button className="mt-5 text-[#5CE1F2] font-semibold md:text-base text-sm cursor-pointer">
          Read More
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
        </DialogHeader>
        <div>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
       
      </DialogContent>
    </Dialog>
  );
}
