import React from "react";
import FooterLogo from "@/resources/logo/footerLogo.png";
import IstagramLogo from "@/resources/logo/instagram.png";
import FacebookLogo from "@/resources/logo/facebook.png";
import LinkedinLogo from "@/resources/logo/linkedin.png";
import Image from "next/image";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-primary">
      <div className="max-w-6xl mx-5 md:mx-10 lg:mx-auto  pt-10 ">
        <footer className="footer  bg-primary mx-auto py-10  text-base-content">
          <aside>
            <Image src={FooterLogo} width={170} height={42} alt="footer logo" />
            <p className="hidden lg:grid text-white pt-6 max-w-80 ">
              Lorem ipsum dolor sit amet consectetur. Auctor tempor pretium
              aliquam neque.
            </p>
            <div className="join join-vertical md:join-horizontal pt-14">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item "
              />
              <button className="w-full md:w-auto btn bg-blue-800 text-white join-item">Subscribe</button>
            </div>
          </aside>
          <nav className="hidden md:grid text-white">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav className="hidden lg:grid text-white">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav className="hidden lg:grid text-white">
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
      <div>
        <div className="divider bg-white h-[2px] ">
        </div>
        <div>
            <div className="max-w-6xl mx-5 md:mx-10 lg:mx-auto text-center py-5  text-white flex justify-between">
                <p>contact@nttdata.com</p>
                <p className="hidden md:blog ">+3 9876 765 444</p>
                <div className="flex gap-2">
                    <Image src={IstagramLogo} width={24} height={24} alt="IstagramLogo" />
                    <Image src={FacebookLogo} width={24} height={24} alt="FacebookLogo" />
                    <Image src={LinkedinLogo} width={24} height={24} alt="LinkedinLogo" />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;