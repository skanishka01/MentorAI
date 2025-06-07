// // import { SignedOut } from "@clerk/nextjs";
// import React from "react";
// // import {
// //   PenBox,
// //   LayoutDashboard,
// //   FileText,
// //   GraduationCap,
// //   ChevronDown,
// //   StarsIcon,
// // } from "lucide-react";
// // import Link from "next/link";
// import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
// import Link from "next/link";
// import { Button } from "./ui/button";
// import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarIcon, StarsIcon } from "lucide-react";
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";


// export default async function Header() {

//   return (
//     <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">

//         <nav className="container mx-auto px-2 h-16 flex items-center justify-between">
//             <Link href='/'>
//                 <p className="font-bold text-3xl">
//                     MENTORAI
//                 </p>
//             </Link>
            
//             <div className="flex items-center space-x-2 md:space-x-4">
//                 <SignedIn>
//                     <Link href={"/dashboard"}>
//                         <Button variant="outline">
//                             <LayoutDashboard className="h-4 w-4" />
//                             <span className="hidden md:block">Industry Insights</span>
//                         </Button>
//                     </Link>
                

//                 <DropdownMenu>
//                 <DropdownMenuTrigger>
//                     <Button>
//                         <StarsIcon className="h-4 w-4" />
//                         <span className="hidden md:block">Growth Tools</span>
//                         <ChevronDown className="w-4 h-4" />
//                     </Button>
//                     </DropdownMenuTrigger>
//                 <DropdownMenuContent>
//                     <DropdownMenuLabel>My Account</DropdownMenuLabel>
//                     <DropdownMenuSeparator />
//                     <DropdownMenuItem>
//                         <Link href="/resume" className="flex items-center gap-2">
//                             <FileText className="h-4 w-4" />
//                             Build Resume
//                         </Link>
//                        </DropdownMenuItem>
//                     <DropdownMenuItem>
//                     <Link
//                         href="/ai-cover-letter"
//                         className="flex items-center gap-2"
//                     >
//                         <PenBox className="h-4 w-4" />
//                         Cover Letter
//                   </Link>
//                   </DropdownMenuItem>
//                     <DropdownMenuItem>
//                         <Link href="/interview" className="flex items-center gap-2">
//                         <GraduationCap className="h-4 w-4" />
//                         Interview Prep
//                         </Link>
//                     </DropdownMenuItem>
//                 </DropdownMenuContent>
//                 </DropdownMenu>
//                 </SignedIn>
//             <SignedOut>
//                 <SignInButton>
//                 <Button variant="outline">Sign In</Button>
//                 </SignInButton>
//             </SignedOut>
//             <SignedIn>
//                 <UserButton 
//                 appearance={{
//                     elements: {
//                       avatarBox: "w-10 h-10",
//                       userButtonPopoverCard: "shadow-xl",
//                       userPreviewMainIdentifier: "font-semibold",
//                     },
//                   }}
//                 afterSignOutUrl="/"    
//                 />
//             </SignedIn>
//             </div>
//         </nav>
           
//     </header>
//   );
// }

import React from "react";
import { Button } from "./ui/button";
import {
  PenBox,
  LayoutDashboard,
  FileText,
  GraduationCap,
  ChevronDown,
  StarsIcon,
} from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { checkUser } from "@/lib/checkUser";
// import { checkUser } from "@/lib/checkUser";

export default async function Header() {
  await checkUser();

  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
        <p className="text-3xl gradient-title animate-gradient">
            MENTORAI
        </p>
        </Link>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <SignedIn>
            <Link href="/dashboard">
              <Button
                variant="outline"
                className="hidden md:inline-flex items-center gap-2 cursor-pointer "
              >
                <LayoutDashboard className="h-4 w-4" />
                Industry Insights
              </Button>
              <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
                <LayoutDashboard className="h-4 w-4" />
              </Button>
            </Link>

            {/* Growth Tools Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="flex items-center gap-2 cursor-pointer">
                  <StarsIcon className="h-4 w-4" />
                  <span className="hidden md:block">Growth Tools</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 pt-4">
                <DropdownMenuItem asChild>
                  <Link href="/resume" className="flex items-center gap-2 cursor-pointer">
                    <FileText className="h-4 w-4" />
                    Build Resume
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/ai-cover-letter"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <PenBox className="h-4 w-4" />
                    Cover Letter
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/interview" className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 cursor-pointer" />
                    Interview Prep
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <Button variant="outline" className="cursor-pointer">Sign In</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}