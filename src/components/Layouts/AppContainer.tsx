'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import logo from '@/assets/logo.png';
import {
  TbBrandGithub,
  TbBulb,
  TbFileText,
  TbMenu2,
  TbMoon,
  TbSun,
} from 'react-icons/tb';
import { MdOutlineDesignServices } from 'react-icons/md';

interface AppContainerProps {
  children?: React.ReactNode;
}

export default function AppContainer({ children }: AppContainerProps) {
  const pathname = usePathname();
  const [openedDrawer, setOpenedDrawer] = useState(false);

  return (
    <div className="drawer lg:drawer-open">
      <input
        id="menu-sidebar"
        type="checkbox"
        checked={openedDrawer}
        onChange={() => setOpenedDrawer(!openedDrawer)}
        className="drawer-toggle"
      />
      <div className="drawer-content">
        <nav className="navbar bg-base-100">
          <div className="flex-none">
            <label
              htmlFor="menu-sidebar"
              aria-label="open menu"
              className="btn btn-ghost btn-circle lg:hidden"
            >
              <TbMenu2 className="text-lg w-7 h-7" />
            </label>
          </div>

          <div className="flex-1">
            <a href="/" className="btn btn-ghost text-xl lg:hidden">
              DevTools
            </a>
          </div>

          <div className="flex-none">
            <Link
              aria-label="Link to github"
              href="https://github.com/alexndrho/devtools"
              target="_blank"
              className="btn btn-square btn-ghost"
            >
              <TbBrandGithub className="w-7 h-7" />
            </Link>

            <label className="swap swap-rotate btn btn-square btn-ghost">
              <input
                type="checkbox"
                className="theme-controller"
                value="dark"
              />

              <TbSun className="swap-off w-7 h-7" />
              <TbMoon className="swap-on w-7 h-7" />
            </label>
          </div>
        </nav>

        <main className="container px-4 pt-8 pb-20 mx-auto">{children}</main>
      </div>

      <aside className="drawer-side">
        <label
          htmlFor="menu-sidebar"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <div className="min-h-full px-4 py-2 sticky top-0 z-20 bg-base-100 shadow-sm">
          <Link
            href="/"
            onClick={() => setOpenedDrawer(false)}
            className="btn btn-ghost text-xl"
          >
            <Image src={logo} alt="logo" className="w-5 h-5" loading="eager" />
            DevTools
          </Link>

          <ul className="menu px-4 py-2 w-80 bg-base-100 text-base-content">
            <li>
              <details open>
                <summary>
                  <TbFileText className="w-5 h-5" />
                  Text Manipulation
                </summary>
                <ul>
                  <li>
                    <Link
                      href="/ascii-generator"
                      onClick={() => setOpenedDrawer(false)}
                      className={
                        pathname === '/ascii-generator' ? 'active' : ''
                      }
                    >
                      ASCII generator
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/base64-encoder-decoder"
                      onClick={() => setOpenedDrawer(false)}
                      className={
                        pathname === '/base64-encoder-decoder' ? 'active' : ''
                      }
                    >
                      Base64 encoder/decoder
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/lorem-ipsum-generator"
                      onClick={() => setOpenedDrawer(false)}
                      className={
                        pathname === '/lorem-ipsum-generator' ? 'active' : ''
                      }
                    >
                      Lorem ipsum generator
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <details open>
                <summary>
                  <MdOutlineDesignServices className="w-5 h-5" />
                  Design and Development Tools
                </summary>
                <ul>
                  <li>
                    <Link
                      href="/url-parser"
                      onClick={() => setOpenedDrawer(false)}
                      className={pathname === '/url-parser' ? 'active' : ''}
                    >
                      URL parser
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <details open>
                <summary>
                  <TbBulb className="w-5 h-5" />
                  Utilities
                </summary>
                <ul>
                  <li>
                    <Link
                      href="/ip-address-lookup"
                      onClick={() => setOpenedDrawer(false)}
                      className={
                        pathname === '/ip-address-lookup' ? 'active' : ''
                      }
                    >
                      IP address lookup
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/qr-code-generator"
                      onClick={() => setOpenedDrawer(false)}
                      className={
                        pathname === '/qr-code-generator' ? 'active' : ''
                      }
                    >
                      QR code generator
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
