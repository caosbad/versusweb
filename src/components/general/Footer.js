import React from "react";
import { Link } from "gatsby";

import Logo from "../../assets/vsgrey.svg";
import Facebook from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.svg";
import Instagram from "../../assets/instagram.svg";
import Youtube from "../../assets/youtube.svg";
import FlowLogo from "../../assets/flowlogo.svg";

const Footer = () => {
  return (
    <footer className="bg-black-500 py-8 text-white">
      <div className="container block sm:grid grid-cols-12 gap-4">
        <div className="flex items-start col-span-2 md:col-span-1">
          <Link to="/" className="flex items-start">
            <Logo className="h-12 text-white fill-current" />
          </Link>
        </div>
        <div className="col-span-7 lg:col-span-5 flex flex-col justify-between mt-6 sm:mt-0">
          <div>
            <h6 className="font-lato font-bold">A better way to auction art</h6>
            <h2 className="font-ibm tracking-tighter font-semibold mt-1 text-xl">
              Ready to get started?
            </h2>
            <p className="mt-2 font-light w-10/12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="mt-6">
            <p className="font-bold font-lato">Built on Flow</p>
            <a
              href="https://www.onflow.org/"
              target="_blank"
              className="cursor-pointer mt-2"
            >
              <FlowLogo className="h-12 mt-1" />
            </a>
          </div>
        </div>
        <div className="col-span-3 md:col-span-4 lg:col-span-6 flex flex-col justify-between mt-6 sm:mt-0">
          <div>
            <h5 className="text-lg font-lato">Useful Links</h5>
            <div className="mt-2 flex flex-col">
              <Link className="mb-2" to="/contact">
                Contact Us
              </Link>
              <Link className="mb-2" to="/faq">
                What is Versus?
              </Link>
              <a
                className="mb-2"
                href="https://discord.gg/aRjPpU9A8t"
                target="_blank"
              >
                Discord
              </a>
              <Link className="mb-2" to="/privacy">
                Privacy policy
              </Link>
            </div>
          </div>
          <div className="">
            <span>&copy;2021 Versus</span>
            <div className="ml-16 flex items-center">
              <a href="" target="_blank">
                <Facebook className="h-3 fill-current" />
              </a>
              <a href="" target="_blank">
                <Twitter className="h-3 fill-current" />
              </a>
              <a href="" target="_blank">
                <Instagram className="h-3 fill-current" />
              </a>
              <a href="" target="_blank">
                <Youtube className="h-3 fill-current" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
