// File: omercalik/ekstrem-packaging/ekstrem-packaging-e487f92652d54e82cd3d7a93d73c5f07d5be1b0b/i18n/navigation.ts
import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing"; // This now uses the updated routing config (en, tr)

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
