import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type SidebarMenuOptionProps = {
  iconUrl: string;
  activeIconUrl?: string;
  name?: string;
  link?: string;
  suffix?: React.ReactNode;
  isActive?: boolean;
};

const SidebarMenuOption: React.FC<SidebarMenuOptionProps> = ({
  iconUrl,
  activeIconUrl,
  name,
  link,
  suffix,
  isActive,
}) => {
  const url = isActive ? activeIconUrl : iconUrl;
  return (
    <Link
      href={link || "/home˝"}
      className={`h-10 w-full px-4 py-3 cursor-pointer rounded-tiny flex justify-between items-center hover:opacity-70 ${
        isActive ? " bg-base-200 shadow-menu-option" : ""
      }`}
    >
      <div className="flex items-center gap-x-3">
        <Image
          src={url || ""}
          alt={`${name} icon`}
          height={16}
          width={16}
          className="h-4 w-4"
        />
        <span className="capitalize text-sm leading-4">{name}</span>
      </div>
      {suffix}
    </Link>
  );
};

const Layout: React.FC<{ children: any }> = ({ children }) => {
  const router = useRouter();
  return (
    <main className={`min-h-screen relative`}>
      <aside className="fixed min-h-screen w-[287px] bg-base-0 p-6">
        <div className="flex items-center justify-between pb-8 border-b border-gray-100">
          <Image
            src={"/logo-white.svg"}
            height={18}
            width={99}
            alt="Kooha Logo"
          />
          <button className="cursor-pointer hover:opacity-70">
            <Image
              src={"/svgs/sort-ascending.svg"}
              height={24}
              width={24}
              className="h-6 w-6"
              alt="sort-asecding-icon"
            />
          </button>
        </div>
        <div className="mt-2">
          <div className="mb-3 pb-3 border-b border-b-gray-100">
            <h3 className="text-gray-200">Menu</h3>
            <div className="w-full options">
              <SidebarMenuOption
                isActive={router.pathname === "/home"}
                iconUrl="/svgs/ic-db-overview-inactive.svg"
                activeIconUrl="/svgs/ic-db-overview.svg"
                name="Overview"
                link="/home"
              />
              <SidebarMenuOption
                iconUrl="/svgs/ic-db-notification.svg"
                name="Notifications"
                suffix={
                  <span className="bg-primary-200 h-4 w-4 rounded-full text-[10px] leading-[12px] flex items-center justify-center text-white">
                    2
                  </span>
                }
              />
              <SidebarMenuOption
                iconUrl="/svgs/ic-db-file.svg"
                name="File Mananger"
                suffix={
                  <span className="bg-primary-200 h-4 w-4 rounded-full text-[10px] leading-[12px] flex items-center justify-center text-white">
                    2
                  </span>
                }
              />
              <SidebarMenuOption
                isActive={router.pathname === "/chat"}
                iconUrl="/svgs/ic-db-chats.svg"
                activeIconUrl="/svgs/ic-db-chats-active.svg"
                name="Chats"
                link="/chat"
              />
              <SidebarMenuOption
                iconUrl="/svgs/ic-db-push.svg"
                name="Push Notifications"
              />
            </div>
          </div>
          <div className="mb-3 pb-3 border-b border-b-gray-100">
            <h3 className="text-gray-200">Celebrities</h3>
            <div className="w-full options">
              <SidebarMenuOption
                iconUrl="/svgs/ic-db-celeb.svg"
                name="Celeb - Users"
              />
              <SidebarMenuOption
                iconUrl="/svgs/ic-db-fees.svg"
                name="Fees & Commisisions"
              />
              <SidebarMenuOption
                iconUrl="/svgs/ic-db-transactions.svg"
                name="Transactions"
              />
            </div>
          </div>
          <div className="mb-3 pb-3 border-b border-b-gray-100">
            <h3 className="text-gray-200">Fans</h3>
            <div className="w-full options">
              <SidebarMenuOption
                iconUrl="/svgs/ic-db-fan.svg"
                name="Fan - Users"
              />
              <SidebarMenuOption
                iconUrl="/svgs/ic-db-transactions.svg"
                name="Transactions"
              />
            </div>
          </div>
          <div className="pb-3">
            <h3 className="text-gray-200">Teams</h3>
            <div className="w-full options">
              <SidebarMenuOption
                iconUrl="/svgs/ic-db-agents.svg"
                name="Agents"
                suffix={
                  <div className="flex items-center bg-gray-100 justify-center gap-x-1 rounded h-6 w-[49px]">
                    <Image
                      src={"/svgs/user-add.svg"}
                      height={10}
                      width={10}
                      className="w-[10px] h-[10px]"
                      alt="User Add Icon"
                    />
                    <p className="text-white text-[10px] leading-[14px]">
                      Invite
                    </p>
                  </div>
                }
              />
              <SidebarMenuOption
                iconUrl="/svgs/ic-db-roles.svg"
                name="Roles & Permissions"
              />
            </div>
          </div>
        </div>
        <div className="mt-2 mb-8">
          <div className="flex cursor-pointer hover:opacity-40 items-start justify-between">
            <div className="flex items-center gap-x-3">
              <Image
                src={"/empty-profile-icon.svg"}
                alt="Talon James - Super Admin˝"
                className="h-8 w-8"
                height={32}
                width={32}
              />
              <div>
                <h5 className="text-white">Talon James</h5>
                <h6 className="text-xs text-primary-700">Super Admin</h6>
              </div>
            </div>
            <span className="" aria-label="button">
              <Image
                src={"/svgs/arrow-right.svg"}
                width={20}
                height={20}
                className="w-5 h-5"
                alt="Arrow right"
              />
            </span>
          </div>
          <span
            className="flex items-center gap-x-3 cursor-pointer mt-6"
            aria-label="button"
          >
            <Image
              width={20}
              height={20}
              src={"/svgs/outline-logout.svg"}
              className="h-5 w-5"
              alt="Logout Icon"
            />
            <p>Log out</p>
          </span>
        </div>
      </aside>
      <section className="ml-[287px]">{children}</section>
    </main>
  );
};

export default Layout;
