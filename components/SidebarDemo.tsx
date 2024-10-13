"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import brook from "@/components/assets/brooke.png";

export function SidebarDemo() {
  const links = [
    { label: "Dashboard", href: "#", icon: <IconBrandTabler /> },
    { label: "Profile", href: "#", icon: <IconUserBolt /> },
    { label: "Settings", href: "#", icon: <IconSettings /> },
    { label: "Logout", href: "#", icon: <IconArrowLeft /> },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen w-screen bg-black">
      <Sidebar open={open} setOpen={setOpen} >
        <SidebarBody className="flex flex-col justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <SidebarLink
            link={{
              label: "Brooke",
              href: "#",
              icon: (
                <Image
                  src={brook}
                  className="h-7 w-7 flex-shrink-0 rounded-full"
                  width={50}
                  height={50}
                  alt="Avatar"
                />
              ),
            }}
          />
        </SidebarBody>
      </Sidebar>
      <MainDashboardContent />
    </div>
  );
}

const Logo = () => (
  <Link href="#" className="flex items-center space-x-2 text-sm text-white">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 3738 3236">
      <path fill="#fff" fillRule="evenodd"
        d="M2530.44 1145.64 1869 0 475.379 2413.82c131.695 51.95 260.914 81.02 384.699 81.61 245.352 1.17 513.692-109.55 774.302-492.04 271.17-397.97 579.18-672.62 896.06-857.75Zm235.57 408.02c-260.46 152.82-514.92 381.09-742.39 714.95-331.66 486.76-735.71 699.86-1165.784 697.82-214.975-1.03-423.92-55.96-619.932-141.29L.982 3235.5H3737.02l-971.01-1681.84Z"
        clipRule="evenodd"></path>
    </svg>
    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      Coval Dev
    </motion.span>
  </Link>
);

const LogoIcon = () => (
  <Link href="#" className="flex items-center text-sm text-white">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 3738 3236">
      <path fill="#fff" fillRule="evenodd"
        d="M2530.44 1145.64 1869 0 475.379 2413.82c131.695 51.95 260.914 81.02 384.699 81.61 245.352 1.17 513.692-109.55 774.302-492.04 271.17-397.97 579.18-672.62 896.06-857.75Zm235.57 408.02c-260.46 152.82-514.92 381.09-742.39 714.95-331.66 486.76-735.71 699.86-1165.784 697.82-214.975-1.03-423.92-55.96-619.932-141.29L.982 3235.5H3737.02l-971.01-1681.84Z"
        clipRule="evenodd"></path>
    </svg>
  </Link>
);

const MainDashboardContent = () => {
  return (
    <div className="flex-1 flex flex-col p-4 md:p-10 bg-black dark:bg-neutral-900 border-l border-neutral-200 dark:border-neutral-700">
      <div className="flex gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={"card-" + i}
            className="h-24 w-full rounded-lg bg-neutral-800 animate-pulse"
          />
        ))}
      </div>
      <div className="flex flex-1 gap-4 mt-4">
        <div className="flex-1 rounded-lg bg-neutral-800 animate-pulse" />
        <div className="flex-1 rounded-lg bg-neutral-800 animate-pulse" />
      </div>
    </div>
  );
};
