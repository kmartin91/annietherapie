import Image, { StaticImageData } from "next/image";
import { ReactElement } from "react";
import Button from "components/button/default/Button";

import commonStyles from "sections/common/section.module.css";

interface ContentProps {
  image: {
    src: StaticImageData;
    alt: string;
  };
  isAlternate?: boolean;
  id: string;
  nextId?: string;
  children: React.ReactNode;
  isCenter?: boolean;
  nextButtonLabel?: string;
  titleContent: string;
  hasBigContent?: boolean;
}

const Content: React.FC<ContentProps> = ({
  image,
  isAlternate,
  id,
  nextId,
  children,
  isCenter,
  nextButtonLabel,
  titleContent,
  hasBigContent,
}: ContentProps): ReactElement => {
  const { src, alt } = image || {};

  const sectionClassName = [
    commonStyles.section,
    isAlternate ? commonStyles.sectionAlternate : commonStyles.sectionClassic,
    hasBigContent && commonStyles.sectionBigContent,
  ]
    .filter(Boolean)
    .join(" ");
  const imageWrapperClassName = [
    commonStyles.textWithImageWrapper,
    isAlternate && commonStyles.textWithImageWrapperAlternate,
    isCenter && commonStyles.textWithImageWrapperCenter,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={sectionClassName}>
      <Button className={commonStyles.buttonContact} alternate href="/contact">
        Contact
      </Button>
      <div className={commonStyles.content}>
        <h2 className={commonStyles.titleContent}>{titleContent}</h2>
        {src && (
          <div className={imageWrapperClassName}>
            <Image src={src} alt={alt} className={commonStyles.image} />
            <div className={commonStyles.texts}>{children}</div>
          </div>
        )}
        {nextId && nextButtonLabel && (
          <Button href={nextId} className={commonStyles.sectionButton}>
            {nextButtonLabel}
          </Button>
        )}
      </div>
    </section>
  );
};

export default Content;
