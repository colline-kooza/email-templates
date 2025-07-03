import * as React from "react";
import { Button } from "@/components/ui/button";
import { Settings, Circle, ChevronDown, SearchIcon, Layers2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function SearchInterface() {
  return (
    <div className="relative flex items-center justify-center p-5 w-full font-[family-name:var(--font-geist-sans)] z-10">
   
      <div className="flex items-center w-full md:max-w-[67rem] bg-white dark:shadow-md shadow-2xl border dark:border-gray-800 border-white/30 lg:h-16 md:h-16 h-12 rounded-sm">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center h-12 md:w-[30%] lg:w-[30%] text-base text-black border-r border-gray-300 hover:bg-white hover:text-black !rounded-none justify-between "
            >
              <div className="items-center gap-1 lg:flex md:flex hidden">
              <Layers2 className="w-4 h-4 ml-2 opacity-70 " />
              <span className="font-medium">Assets</span>
              </div>
              <ChevronDown className="w-4 h-4 ml-2 opacity-70" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-[200px]">
            <DropdownMenuItem>Images</DropdownMenuItem>
            <DropdownMenuItem>Videos</DropdownMenuItem>
            <DropdownMenuItem>Documents</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <input
          type="text"
          placeholder="Search all Templates"
          className="w-full p-4 py-2 text-base text-black bg-white focus:outline-none placeholder:text-[#b5b6c4] font-medium "
        />

        <div className="flex items-center gap-3 px-3">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 text-gray-500 hover:bg-neutral-100 hover:text-white border-2 border-[#c8c8c8] lg:flex md:flex hidden"
          >
            <Settings className="h-6 w-6 text-gray-700 font-extrabold" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 text-gray-500 hover:bg-neutral-100 hover:text-[#c8c8c8] border-2 border-[#c8c8c8] lg:flex md:flex hidden"
          >
            <Circle className="h-6 w-6 font-extrabold" />
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-3 h-11   items-center !rounded-sm text-base lg:flex md:flex hidden">
            <SearchIcon className="h-5 w-5 mr-2" />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
