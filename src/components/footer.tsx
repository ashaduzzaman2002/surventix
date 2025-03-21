import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NAV_LINKS } from "./header";
import { Facebook, LinkedIn, X, YouTube } from "@/assets/Icon";

const Footer = () => {
  return (
    <div
      className="flex flex-col text-white py-9"
      style={{ background: "linear-gradient(180deg, #02000f, #001238)" }}
    >
      <div className="container">
        <div className="grid grid-cols-[200px_1fr_240px] gap-[125px] pb-[180px]">
          <div>
            <div>
              <Link href="/">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="absolute flex justify-center items-center top-0 bottom-0 left-0 right-0">
                      <div className="bg-white w-[40px] h-[40px]"></div>
                    </div>
                    <Image
                      className="relative"
                      src="/logo.png"
                      alt="logo"
                      width={74}
                      height={74}
                    />
                  </div>
                  <div>
                    <p className="uppercase font-bold text-lg">Surventix</p>
                    <p className="text-xs opacity-80">Driven By Discovery</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div>
            <div className="flex gap-[30px] flex-col mt-2.5">
              {NAV_LINKS.map((item, i) => (
                <Link key={i} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="Footer_styles_socials__TONa1 flex flex-wrap pb-[76px] gap-[14px]">
              <a target="_blank" href="#">
                <Facebook />
              </a>
              <a target="_blank" href="#">
                <X />
              </a>
              <a target="_blank" href="#">
                <LinkedIn />
              </a>
              <a target="_blank" href="#">
                <YouTube />
              </a>
            </div>
            <div className="mb-[69px] grid gap-5">
              <a target="_blank" className="text-white mt-3" href="#">
                Looking for your ticket?
              </a>
              <a target="_blank" className="text-white mt-3" href="#">
                Contact the organizer
              </a>
            </div>
            <div className="flex gap-[5px]">
              <a
                target="_blank"
                className="Typography_styles_geologica__bT0cn Typography_styles_button2__YUOOo Menu_styles_item__mMFpg"
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&amp;dates=20250430T123000Z%2F20250501T220000Z&amp;details=IIEX%20North%20America%202025&amp;location=Ronald%20Reagan%20Building%20%26%20International%20Trade%20Center%20Washington%2C%20D.C.&amp;text=IIEX%20North%20America%202025"
                data-feathr-click-track="true"
                data-feathr-link-aids="5fbdacb4f7653485f930a8e0"
              >
                Google<span className="Menu_styles_separator__AiQgi"> | </span>
              </a>
              <a
                target="_blank"
                className="Typography_styles_geologica__bT0cn Typography_styles_button2__YUOOo Menu_styles_item__mMFpg"
                href="https://stripo.email/storage/ics/2025/2/ics_iiex-north-america-2025-2025-02-25-100540.ics"
                data-feathr-click-track="true"
                data-feathr-link-aids="5fbdacb4f7653485f930a8e0"
              >
                iCal<span className="Menu_styles_separator__AiQgi"> | </span>
              </a>
              <a
                target="_blank"
                className="Typography_styles_geologica__bT0cn Typography_styles_button2__YUOOo Menu_styles_item__mMFpg"
                href="https://outlook.live.com/calendar/0/action/compose?allday=false&amp;body=IIEX%20North%20America%202025&amp;enddt=2025-05-02T00%3A00%3A00&amp;location=Ronald%20Reagan%20Building%20%26%20International%20Trade%20Center%20Washington%2C%20D.C.&amp;path=%2Fcalendar%2Faction%2Fcompose&amp;rru=addevent&amp;startdt=2025-04-30T14%3A30%3A00&amp;subject=IIEX%20North%20America%202025"
                data-feathr-click-track="true"
                data-feathr-link-aids="5fbdacb4f7653485f930a8e0"
              >
                Outlook<span className="Menu_styles_separator__AiQgi"> | </span>
              </a>
              <a
                target="_blank"
                className="Typography_styles_geologica__bT0cn Typography_styles_button2__YUOOo Menu_styles_item__mMFpg"
                href="https://calendar.yahoo.com/?desc=IIEX%20North%20America%202025&amp;dur=false&amp;et=20250501T220000Z&amp;in_loc=Ronald%20Reagan%20Building%20%26%20International%20Trade%20Center%20Washington%2C%20D.C.&amp;st=20250430T123000Z&amp;title=IIEX%20North%20America%202025&amp;v=60"
                data-feathr-click-track="true"
                data-feathr-link-aids="5fbdacb4f7653485f930a8e0"
              >
                Yahoo
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center border-t border-[#84828c] pt-5 gap-5">
          <Link href="/">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="absolute flex justify-center items-center top-0 bottom-0 left-0 right-0">
                  <div className="bg-white w-[40px] h-[40px]"></div>
                </div>
                <Image
                  className="relative"
                  src="/logo.png"
                  alt="logo"
                  width={74}
                  height={74}
                />
              </div>
              <div>
                <p className="uppercase font-bold text-lg">Surventix</p>
                <p className="text-xs opacity-80">Driven By Discovery</p>
              </div>
            </div>
          </Link>
          <p className="text-[10px] text-[#84828c]">
            Copyright © <span>2025</span> New York AMA Communication Services,
            Inc.
            <br />
            All rights reserved. 234 5th Avenue, 2nd Floor, New York, NY 10001 |
            Phone: 212-849-2752
          </p>
          <div className="flex gap-3">
            <a
              target="_blank"
              className="text-sm text-[#84828c]"
              href="#"
            >
              Privacy policy
            </a>
            <a
              target="_blank"
              className="text-sm text-[#84828c]"
              href="#"
            >
              Cookie policy
            </a>
            <a
              target="_blank"
              className="text-sm text-[#84828c]"
              href="#"
            >
              Terms of use
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
