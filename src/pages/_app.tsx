import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {SkeletonTheme} from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { appWithTranslation } from 'next-i18next';
import {YandexMetricaProvider} from "next-yandex-metrica";
import config from "@/api/config"

function App({ Component, pageProps }: AppProps) {

  return (
      <>
        <SkeletonTheme baseColor="#1E2027" highlightColor="#3E424C">
            <YandexMetricaProvider
                tagID={config.YANDEX_METRIK}
                initParameters={{ clickmap: true, trackLinks: true, accurateTrackBounce: true, webvisor: true }}
            >
                <Component {...pageProps} />
            </YandexMetricaProvider>
          </SkeletonTheme>
      </>
  );
}
export default appWithTranslation(App);
