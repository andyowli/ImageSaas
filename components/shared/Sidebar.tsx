'use client';
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const Sidebar = () => {
    const pathname = usePathname();
    return (
        <aside className='sidebar'>
            <div className='flex size-full flex-col gap-4'>
                <Link rel="stylesheet" href="" className='sidebar-logo'>
                    <Image src='/assets/images/logo-text.svg' alt='logo' width={180} height={28}/>
                </Link>

                <nav className='sidebar-nav'>
                    <SignedIn>
                        <ul className='sidebar-nav-elements'>
                            {navLinks.slice(0,6).map((link) => {
                                const isActive = link.route === pathname;

                                return (
                                    <li key={link.route} className={`sidebar-nav-element group ${
                                        isActive ? 'bg-purple-400 text-white' : 'text-gray-700'
                                      }`}>
                                        <Link className='sidebar-link' href={link.route}>
                                            <Image 
                                                src={link.icon}
                                                alt="icon"
                                                width={24}
                                                height={24}
                                                className={`${isActive && 'brightness-200'}`}
                                            />
                                            {link.label}
                                        </Link>
                                    </li>
                                ) 
                            })}

                        </ul>

                        <ul>
                            {navLinks.slice(6).map((link) => {
                                const isActive = link.route === pathname;

                                return (
                                    <li key={link.route} className={`sidebar-nav-element group ${
                                        isActive ? 'bg-purple-400 text-white' : 'text-gray-700'
                                      }`}>
                                        <Link className='sidebar-link' href={link.route}>
                                            <Image 
                                                src={link.icon}
                                                alt="icon"
                                                width={24}
                                                height={24}
                                                className={`${isActive && 'brightness-200'}`}
                                            />
                                            {link.label}
                                        </Link>
                                    </li>
                                ) 
                            })}

                            <li className='flex-center cursor-pointer gap-2 p-4'>
                                <UserButton afterSignOutUrl="/sign-in" showName />
                            </li>
                        </ul>
                    </SignedIn>

                    <SignedOut>
                        <Button asChild className='button bg-purple-gradient bg-cover'>
                            <Link href='/sign-in'>Login</Link>
                        </Button>
                    </SignedOut>
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar