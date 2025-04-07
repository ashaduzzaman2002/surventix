import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function JobModal({
  title,
  content,
}: {
  title: string;
  content: string[];
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="mt-4 border-[1.5px] border-white py-2.5 px-4">
          Read More
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl text-start">{title}</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
        </DialogHeader>
        <div>
          {content.map((item, index) => (
            <p key={index} className="md:text-lg text-sm mb-4 opacity-70">
              {item}
            </p>
          ))}
        </div>
        <DialogFooter>
            <DialogClose className="flex justify-end gap-2">
          <Button className="" type="submit">Apply Now</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
