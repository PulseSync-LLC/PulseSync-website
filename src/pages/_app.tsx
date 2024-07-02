import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {SkeletonTheme} from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export default function App({ Component, pageProps }: AppProps) {

  return (
      <>
        <SkeletonTheme baseColor="#1E2027" highlightColor="#3E424C">
                    <Component {...pageProps} />
          </SkeletonTheme>
      </>
  );
}
