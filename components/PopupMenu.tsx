import React, { useState } from 'react';
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";
import { Dialog } from "@headlessui/react";


function MenuItem({ link, name }) {
  return (
    <Link href={link} className="text-2xl py-2 px-1 text-horizon-grey-700">{name}</Link>
  )
}

export default function PopupMenu() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div>
        <button
          className={`pr-1 pl-1 py-1 ${isOpen ? "hidden" : "block"}`}
          onClick={() => setIsOpen(true)}
        >
          <List size={24} />
        </button>
        <button
          className={`pr-1 pl-1 py-1 ${isOpen ? "block" : "hidden"}`}
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        {/* <div className="fixed inset-0 bg-black/30" aria-hidden="true" /> */}
        <div className={`fixed inset-0 flex items-start justify-start p-4 top-[4rem]`}>
          <Dialog.Panel className="mx-auto min-w-full rounded-lg bg-white bg-opacity-[.95] backdrop-blur-sm shadow-lg">
            <div className="flex flex-col items-start justify-between space-y-1 p-5">
              <MenuItem link={"/Events"} name={"Events"} />
              <MenuItem link={"/about-us"} name={"About us"} />
              <MenuItem link={"/contact-us"} name={"Contact"} />
              <MenuItem link={"/support"} name={"Get support"} />
              <MenuItem link={"/faqs"} name={"FAQs"} />
              <MenuItem link={"/sponsor"} name={"Sponsor"} />
              <MenuItem link={"/reviews"} name={"Reviews"} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}