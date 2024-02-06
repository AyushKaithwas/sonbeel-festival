import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Festival Schedule", href: "#" },
  { name: "Events", href: "#" },
  { name: "Tourist Guide", href: "#" },
  { name: "Gallery", href: "#" },
  { name: "Contacts", href: "#" },
];

export function Navbar() {
  return (
    <>
      <div className="md:flex hidden">
        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map((item) => {
              return (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink href={item.href}>
                      {item.name}
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="md:hidden flex">
        <Sheet>
          <SheetTrigger asChild>
            <AlignJustify className="cursor-pointer" />
          </SheetTrigger>
          <SheetContent>
            <ul>
              {navItems.map((item) => {
                return <li key={item.name}>{item.name}</li>;
              })}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
