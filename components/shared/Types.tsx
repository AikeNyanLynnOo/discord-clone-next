export interface HomeFlexContent {
  img: string;
  title: string;
  text: string;
}

export interface NitroCardContent {
  textContent: string;
  imgSrc: string;
}

export interface NitroPlan {
  textContent: string;
  basic: string;
  special: string;
}

export interface SafetySubCardContent {
  image: string;
  title: string;
  catchText: string;
}

export interface SafetyContent {
  title: string;
  image: string;
  bodyContents: {
    text: string;
  }[];
  subCards: SafetySubCardContent[];
}

export interface TitleImgBody {
  title: string;
  image: string;
  body: string;
}
