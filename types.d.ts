export type Ship = {
  ship_id: string;
  ship_name: string;
  ship_type: string;
  roles: string[];
  year_built: number;
  home_port: string;

  missions: MissionSmall[];
  url: string;
  image: string;
};

type MissionSmall = {
  name: string;
  flight: number;
};

export type ShipsTypesOptions = {
  name: string;
  value: string;
};

export type Dragon = {
  id: string;
  name: string;
  type: string;
  first_flight: string;
  flickr_images: string[];
  wikipedia: string;
  description: string;
};
