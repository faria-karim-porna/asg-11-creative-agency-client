export type ImageType = { contentType: string; size: number; img: Buffer };

export type ServiceType = {
  _id?: string;
  serviceTitle: string;
  serviceDescription: string;
  image: ImageType;
};
