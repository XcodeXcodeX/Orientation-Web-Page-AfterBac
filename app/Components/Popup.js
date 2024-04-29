"use client";
import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export function SchoolPopup(SchoolData) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="gradient"
        className="relative inline-flex lg:w-auto w-full items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
      >
        <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
        <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
        <span className="relative w-full mr-3 ml-3 mt-1 mb-1 text-center lg:text-right text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
          {SchoolData.Name}
        </span>
        <span className="absolute inset-0 border-2 border-white rounded-full"></span>
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>{SchoolData.Name}</DialogHeader>
        <DialogBody>{SchoolData.Description}</DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}