"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import ContactUsbanner from "./banner-contactus";


export function BackgroundBeamsDemo() {
  return (
    (<div>
          <div className='row ads-background-banner'>
                <div className='col-sm ads-banner-content'>
                <h2>
                  Up to 66% of VPS Hosting
                </h2>
                <h1>
                  Everything You need to <br/> grow Online
                </h1>
                <ul>
                  <li><i class="fa-solid fa-check"></i> Free real-time Snapshot</li>
                  <li><i class="fa-solid fa-check"></i> Free automatic Weekly Backups
                  </li>
                  <li><i class="fa-solid fa-check"></i> Ai assistant
                  </li>
                </ul>
                <p>Click here</p>
                </div>
                <div className='col-sm'>
                <div className='col-sm contact-ads-column1'>
          <ContactUsbanner/>
          </div>
                </div>
              </div>
     
     
    </div>)
  );
}
