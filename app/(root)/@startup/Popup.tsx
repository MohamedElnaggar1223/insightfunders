import React from "react";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";

interface PopUpProps {
  open: boolean;
  setOpen: any;
  activeData: any;
}

const PopUp = ({ open, setOpen, activeData }: PopUpProps) => {
  return (
    <Dialog open={open} onOpenChange={() => setOpen(false)}>
      <DialogContent className="!bg-[#ffffff] !rounded-[8px] p-0 border-none gap-0">
        <DialogHeader className="text-[#000000] font-bold border-b-[1px] border-[#808080] py-[13px] px-[23px] text-[16px] pb-[13px] font-Montserrat">
          View investor
        </DialogHeader>
        <div className="p-[23px]">
          <div className="flex gap-[116px] pb-[21px]">
            <div className="flex flex-col justify-between gap-[8px]">
              <p className="text-[#1A1A1A] text-[12px] font-Montserrat font-light">
                Investor Name
              </p>
              <p className="text-[#1A1A1A] text-[13px] font-Montserrat font-bold">
                John Doe
              </p>
            </div>
            <div className="flex flex-col justify-between gap-[8px]">
              <p className="text-[#1A1A1A] text-[12px] font-Montserrat font-light">
                Investor type
              </p>
              <p className="text-[#1A1A1A] text-[13px] font-Montserrat font-bold">
                Family office
              </p>
            </div>
          </div>
          <div className="pb-[21px]">
            <p className="text-[#1A1A1A] text-[12px] font-Montserrat font-light pb-[8px]">
              Location
            </p>
            <p className="text-[#1A1A1A] text-[13px] font-Montserrat font-bold">
              2464 Royal Ln. Mesa, New Jersey 45463
            </p>
          </div>
          <div>
            <p className="text-[#1A1A1A] text-[12px] font-Montserrat font-light pb-[8px]">
              AUM
            </p>
            <p className="text-[#1A1A1A] text-[13px] font-Montserrat font-bold">
              2464 Royal Ln. Mesa, New Jersey 45463
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PopUp;
