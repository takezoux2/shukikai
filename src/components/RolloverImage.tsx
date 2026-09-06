"use client";

import { useState } from "react";
import { getAssetPath } from "@/lib/basePath";

interface RolloverImageProps {
  src: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  width?: number | string;
  height?: number | string;
  active?: boolean;
}

export default function RolloverImage({
  src,
  alt = "",
  className,
  style,
  width,
  height,
  active = false,
}: RolloverImageProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getActiveSrc = () => {
    let targetSrc = src;
    if ((isHovered || active) && src.includes("_off.")) {
      targetSrc = src.replace("_off.", "_on.");
    }
    return getAssetPath(targetSrc);
  };

  return (
    <img
      src={getActiveSrc()}
      alt={alt}
      className={className}
      style={style}
      width={width}
      height={height}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
}
