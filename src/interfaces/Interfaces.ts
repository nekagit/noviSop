export interface ICard {
  title: string;
  backgroundSrc: string;
  htmlFor: string;
  buttonCards: IButtonCard;
}

export interface IButtonCard {
  title: string;
  contentCard: IContentCard;
}

export interface IContentCard {
  title: string;
  subTitle: string;
  backgroundSrc: string;
  images: IImages;
  form: IForm;
}

export interface IForm {
  selectInputs: ISelectInputs;
  textInputs: ITextInputs;
  buttons: IButton;
}

export interface IImages {
  src: string;
}

export interface IButton {
  title: string;
}

export interface ISelectInputs {
  title: string;
  options: ISelectOption[];
}

export interface ITextInputs {
  title: string;
}

export interface ISelectOption {
  title: string;
}

export interface IJumboTron {
  title: string;
}
