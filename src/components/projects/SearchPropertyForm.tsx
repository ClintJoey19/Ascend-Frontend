import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

const SearchPropertyForm = () => {
  return (
    <div className="my-4 flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex flex-col gap-2">
          <p className="font-medium text-sm">Location</p>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose location" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Locations</SelectLabel>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-medium text-sm">Min Price</p>
          <Input type="number" placeholder="3000" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-medium text-sm">Max Price</p>
          <Input type="number" placeholder="8000" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-medium text-sm">Type of Property</p>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex justify-between gap-4">
        <div className="flex items-center gap-2">
          <p className="font-medium text-sm">Class Type</p>
          <span className="h-8 w-8 border rounded-md flex items-center justify-center cursor-pointer shadow-sm">
            A
          </span>
          <span className="h-8 w-8 border rounded-md flex items-center justify-center cursor-pointer shadow-sm">
            B
          </span>
          <span className="h-8 w-8 border rounded-md flex items-center justify-center cursor-pointer shadow-sm">
            C
          </span>
        </div>
        <div>
          <Button
            type="submit"
            className="max-sm:hidden flex items-center gap-2"
          >
            Search <Search className="h-5 w-5" />
          </Button>

          <Button type="submit" size="icon" className="sm:hidden">
            <Search />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchPropertyForm;
