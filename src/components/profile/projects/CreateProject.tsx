import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CirclePlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CreateProject() {
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate("/agent-projects/123");
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">
          New Project <CirclePlus className="h-4 w-4 ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Project</DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="flex flex-col gap-4 pt-2 pb-4">
            <Label htmlFor="name" className="">
              Project Name
            </Label>
            <Input
              id="name"
              defaultValue="Metro Apartment"
              placeholder="e.g Metro Apartment"
            />
          </div>
          <DialogFooter>
            <Button type="submit">Create</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
