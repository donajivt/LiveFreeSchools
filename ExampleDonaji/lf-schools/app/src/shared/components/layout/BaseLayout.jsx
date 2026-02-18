import { AppMenu } from "../menu";
import { Router } from "@/features/routing";

export function BaseLayout() {
  return (
    <>
      <AppMenu />
      <Router />
    </>
  );
}
