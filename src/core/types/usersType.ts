import { ImageType } from "./servicesType";

export type UserType = {
  _id?: string;
  name: string;
  email: string;
  serviceName: string;
  projectDetails: string;
  price: string;
  status: string;
  image: ImageType;
};
