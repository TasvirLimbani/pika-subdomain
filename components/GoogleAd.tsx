import { useEffect } from "react";

interface GoogleAdProps {
  adSlot: string;
  adFormat?: string;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const GoogleAd = ({ adSlot, adFormat = "auto" }: GoogleAdProps) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("Adsense error", err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-3990057144186847"
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive="true"
    />
  );
};

export default GoogleAd;
