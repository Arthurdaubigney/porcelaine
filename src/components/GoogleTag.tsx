import Script from "next/script";
import { SITE } from "@/lib/site";

export const CONSENT_KEY = "cookie-consent";

/**
 * Balise Google (gtag.js) avec Consent Mode v2 : tout est refusé par défaut,
 * le consentement mémorisé (localStorage) est rejoué au chargement, et le bandeau
 * (CookieBanner) met à jour le consentement au clic.
 */
export function GoogleTag() {
  const id = SITE.gtagId;
  return (
    <>
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});
try{if(localStorage.getItem('${CONSENT_KEY}')==='granted'){gtag('consent','update',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted'});}}catch(e){}
gtag('js',new Date());
gtag('config','${id}');`}
      </Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
    </>
  );
}
